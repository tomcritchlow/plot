#!/usr/bin/env node
/**
 * Import published writing from the RSS/Atom feeds configured in plot.yml.
 *
 * Idempotent: posts already present in published/ (matched by feed GUID or
 * normalized canonical URL) are skipped. One new Markdown file per new post.
 * Failure to extract full article text never blocks importing the metadata.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import Parser from "rss-parser";
import { parse as parseYaml } from "yaml";
import { listMarkdownFiles } from "./lib/scan.js";
import { parseFrontmatter, stringifyFrontmatter } from "./lib/frontmatter.js";
import { normalizeUrl } from "./lib/urls.js";
import { extractMainContent, htmlToMarkdown } from "./lib/extract.js";

const rssParser = new Parser({
  customFields: { item: [["content:encoded", "contentEncoded"]] },
});

export function slugify(text) {
  return (
    String(text)
      .toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "untitled"
  );
}

async function defaultFetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "plot-importer/1.0" },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  return response.text();
}

/** Collect GUIDs and normalized URLs of everything already in published/. */
function existingPublished(root) {
  const guids = new Set();
  const urls = new Set();
  for (const file of listMarkdownFiles(root, "published")) {
    try {
      const { data } = parseFrontmatter(readFileSync(join(root, file), "utf8"));
      if (data.guid) guids.add(String(data.guid));
      const normalized = data.url && normalizeUrl(String(data.url));
      if (normalized) urls.add(normalized);
    } catch {
      // A malformed published file shouldn't block imports; validate.js reports it.
    }
  }
  return { guids, urls };
}

/**
 * Rewrite relative href/src attributes to absolute URLs against the post's
 * canonical URL, so imported Markdown never contains site-relative links
 * that would read as (broken) repo-internal links.
 */
function absolutizeHtmlUrls(html, baseUrl) {
  if (!baseUrl) return html;
  return html.replace(/(href|src)=("|')([^"']+)\2/gi, (match, attr, quote, value) => {
    try {
      return `${attr}=${quote}${new URL(value, baseUrl)}${quote}`;
    } catch {
      return match;
    }
  });
}

async function itemToMarkdown(item, feed, fetchText) {
  const html = item.contentEncoded || item.content || "";
  let body = html ? htmlToMarkdown(absolutizeHtmlUrls(html, item.link)) : "";
  // Feeds that only carry an excerpt or summary: try the canonical page,
  // best-effort. Only replace the feed content when the extraction is
  // substantially longer, so genuinely short posts aren't swapped for
  // page furniture.
  if (body.length < 2000 && item.link) {
    try {
      const page = await fetchText(item.link);
      const main = extractMainContent(page);
      const extracted = main ? htmlToMarkdown(absolutizeHtmlUrls(main, item.link)) : "";
      if (extracted.length > body.length * 1.5) body = extracted;
    } catch {
      // Keep whatever the feed gave us.
    }
  }
  const publishedAt = item.isoDate || item.pubDate || null;
  const frontmatter = {
    title: item.title || "Untitled",
    url: item.link || null,
    published_at: publishedAt,
    source: feed.name || feed.url,
    author: item.creator || item.author || null,
    guid: item.guid || item.id || null,
  };
  return stringifyFrontmatter(frontmatter, `\n${body}\n`);
}

export async function importPublished({ root, config, fetchText = defaultFetchText, log = console.log }) {
  const feeds = config?.feeds ?? [];
  if (feeds.length === 0) {
    log("no feeds configured in plot.yml — nothing to import");
    return { imported: [], skipped: 0 };
  }
  const { guids, urls } = existingPublished(root);
  const outDir = join(root, "published");
  mkdirSync(outDir, { recursive: true });
  const imported = [];
  let skipped = 0;

  for (const feedConfig of feeds) {
    let feed;
    try {
      feed = await rssParser.parseString(await fetchText(feedConfig.url));
    } catch (err) {
      log(`warning: could not fetch feed "${feedConfig.name || feedConfig.url}": ${err.message}`);
      continue;
    }
    for (const item of feed.items ?? []) {
      const guid = item.guid || item.id || null;
      const normalized = item.link ? normalizeUrl(item.link) : null;
      if ((guid && guids.has(String(guid))) || (normalized && urls.has(normalized))) {
        skipped += 1;
        continue;
      }
      const date = item.isoDate || item.pubDate;
      const datePrefix = date && !Number.isNaN(Date.parse(date))
        ? new Date(date).toISOString().slice(0, 10)
        : "undated";
      const filename = `${datePrefix}-${slugify(item.title || guid || "untitled")}.md`;
      const target = join(outDir, filename);
      if (existsSync(target)) {
        skipped += 1;
        continue;
      }
      writeFileSync(target, await itemToMarkdown(item, feedConfig, fetchText));
      if (guid) guids.add(String(guid));
      if (normalized) urls.add(normalized);
      imported.push(`published/${filename}`);
      log(`imported ${filename}`);
    }
  }
  log(`done: ${imported.length} imported, ${skipped} already present`);
  return { imported, skipped };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const root = process.cwd();
  const configPath = join(root, "plot.yml");
  const config = existsSync(configPath)
    ? parseYaml(readFileSync(configPath, "utf8"))
    : null;
  await importPublished({ root, config });
}
