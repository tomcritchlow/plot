#!/usr/bin/env node
/**
 * Import a single published piece from a URL into published/.
 *
 * For writing published somewhere the configured feeds will never see
 * (a guest post, a company blog, a magazine). Usage:
 *
 *   npm run import:url -- <url> [--draft <slug>]
 *
 * --draft records which drafts/ folder the piece grew from, and is stored
 * as `draft:` frontmatter on the published file. Skips URLs already
 * present in published/. Metadata is best-effort: og: tags, JSON-LD, and
 * meta tags where available — a missing field is omitted, never invented.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import { stringifyFrontmatter } from "./lib/frontmatter.js";
import { normalizeUrl } from "./lib/urls.js";
import { absolutizeHtmlUrls, extractMainContent, htmlToMarkdown } from "./lib/extract.js";
import { defaultFetchText, existingPublished, slugify } from "./import-published.js";

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function metaContent(html, attr, name) {
  const patterns = [
    new RegExp(`<meta[^>]*${attr}=["']${name}["'][^>]*content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*${attr}=["']${name}["']`, "i"),
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(html);
    if (match) return decodeEntities(match[1]);
  }
  return null;
}

/** Best-effort page metadata: og: tags, then JSON-LD, then plain tags. */
export function pageMetadata(html) {
  const title =
    metaContent(html, "property", "og:title") ??
    (/<title[^>]*>([^<]+)<\/title>/i.exec(html)?.[1].trim() ?? null);
  // Matches datePublished in plain JSON-LD and inside escaped JS strings
  // (Next.js RSC payloads carry it as {\"datePublished\":\"...\"}).
  const published_at =
    /\\?"datePublished\\?"\s*:\s*\\?"([^"\\]+)\\?"/.exec(html)?.[1] ??
    metaContent(html, "property", "article:published_time");
  const author =
    metaContent(html, "name", "author") ??
    (/"author"\s*:\s*{[^}]*"name"\s*:\s*"([^"]+)"/.exec(html)?.[1] ?? null);
  return { title: title && decodeEntities(title), published_at, author };
}

export async function importUrl({ root, url, draft = null, fetchText = defaultFetchText, log = console.log }) {
  const normalized = normalizeUrl(url);
  if (!normalized) throw new Error(`not an importable URL: ${url}`);
  const { urls } = existingPublished(root);
  if (urls.has(normalized)) {
    log(`already in published/: ${url}`);
    return { imported: null };
  }
  if (draft && !existsSync(join(root, "drafts", draft))) {
    throw new Error(`no such draft folder: drafts/${draft}`);
  }

  const html = await fetchText(url);
  const meta = pageMetadata(html);
  const main = extractMainContent(html);
  const body = main ? htmlToMarkdown(absolutizeHtmlUrls(main, url)) : "";
  if (!body) log("warning: could not extract article text; importing metadata only");

  const datePrefix =
    meta.published_at && !Number.isNaN(Date.parse(meta.published_at))
      ? new Date(meta.published_at).toISOString().slice(0, 10)
      : "undated";
  const filename = `${datePrefix}-${slugify(meta.title || url)}.md`;
  const target = join(root, "published", filename);
  if (existsSync(target)) {
    log(`already in published/: ${filename}`);
    return { imported: null };
  }

  const frontmatter = {
    title: meta.title || "Untitled",
    url,
    published_at: meta.published_at,
    source: new URL(url).hostname,
    author: meta.author,
    guid: url,
    draft: draft ? `drafts/${draft}` : null,
  };
  mkdirSync(join(root, "published"), { recursive: true });
  writeFileSync(target, stringifyFrontmatter(frontmatter, `\n${body}\n`));
  log(`imported published/${filename}`);
  return { imported: `published/${filename}` };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const args = process.argv.slice(2);
  const draftIndex = args.indexOf("--draft");
  const draft = draftIndex === -1 ? null : args[draftIndex + 1];
  const url = args.filter((a, i) => a !== "--draft" && i !== draftIndex + 1)[0];
  if (!url) {
    console.error("usage: npm run import:url -- <url> [--draft <slug>]");
    process.exit(1);
  }
  await importUrl({ root: process.cwd(), url, draft });
}
