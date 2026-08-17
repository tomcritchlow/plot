#!/usr/bin/env node
/**
 * Rebuild everything in generated/ from the canonical Markdown corpus.
 *
 * Output is deterministic: stable ordering, no build timestamps, no network
 * access. Deleting generated/ and re-running this script recreates it exactly.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import { scanRepo } from "./lib/scan.js";
import { extractUrls, normalizeUrl } from "./lib/urls.js";
import { extractInternalLinks } from "./lib/backlinks.js";

const byString = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

/** Pick the fields of a record's frontmatter that belong in an index. */
function captureEntry(record) {
  const { data } = record;
  const entry = {
    id: data.id ?? null,
    type: data.type ?? null,
    created_at: data.created_at ?? null,
    file: record.file,
  };
  for (const field of ["url", "title", "author", "source_published_at"]) {
    if (data[field]) entry[field] = data[field];
  }
  entry.tags = Array.isArray(data.tags) ? data.tags : [];
  return entry;
}

function firstBlockquote(body) {
  const lines = body.split("\n");
  const quote = [];
  let started = false;
  for (const line of lines) {
    if (line.startsWith(">")) {
      started = true;
      quote.push(line.replace(/^>\s?/, ""));
    } else if (started && line.trim() === "") {
      break;
    } else if (started) {
      break;
    }
  }
  return quote.join("\n").trim();
}

function quoteNote(body) {
  const withoutQuote = body
    .split("\n")
    .filter((line) => !line.startsWith(">"))
    .join("\n");
  return withoutQuote.replace(/^#{1,6}\s+Note\s*$/gim, "").trim();
}

export function buildIndexes(root) {
  const records = scanRepo(root).filter((r) => !r.error);

  const captures = records
    .filter((r) => r.file.startsWith("captures/"))
    .map(captureEntry);

  // links: every external URL across the whole canonical corpus,
  // deduplicated by normalized URL, retaining every reference.
  const linkMap = new Map();
  for (const record of records) {
    const { data, body, file } = record;
    const found = [];
    if (data.url) found.push(String(data.url));
    found.push(...extractUrls(body));
    const recordDate = data.created_at ?? data.published_at ?? null;
    for (const raw of found) {
      const key = normalizeUrl(raw);
      if (!key) continue;
      if (!linkMap.has(key)) {
        linkMap.set(key, {
          url: raw,
          title: null,
          author: null,
          first_seen: null,
          references: [],
        });
      }
      const entry = linkMap.get(key);
      // Title/author metadata comes from captures whose frontmatter url
      // points at this link (not from URLs merely mentioned in a body).
      if (data.url && normalizeUrl(String(data.url)) === key) {
        if (!entry.title && data.title) entry.title = data.title;
        if (!entry.author && data.author) entry.author = data.author;
      }
      if (recordDate) {
        const current = entry.first_seen ? Date.parse(entry.first_seen) : Infinity;
        if (Date.parse(recordDate) < current) entry.first_seen = recordDate;
      }
      if (!entry.references.some((ref) => ref.file === file)) {
        const ref = { file };
        if (data.id) ref.capture_id = data.id;
        entry.references.push(ref);
      }
    }
  }
  const links = [...linkMap.entries()]
    .sort(([a], [b]) => byString(a, b))
    .map(([normalized, entry]) => ({
      ...entry,
      normalized,
      references: entry.references.sort((a, b) => byString(a.file, b.file)),
    }));

  const quotes = records
    .filter((r) => r.file.startsWith("captures/") && r.data.type === "quote")
    .map((r) => ({
      id: r.data.id ?? null,
      file: r.file,
      quote: firstBlockquote(r.body),
      note: quoteNote(r.body) || null,
      url: r.data.url ?? null,
      title: r.data.title ?? null,
      author: r.data.author ?? null,
      created_at: r.data.created_at ?? null,
      tags: Array.isArray(r.data.tags) ? r.data.tags : [],
    }));

  // backlinks: target file -> sorted list of files that link to it.
  const backlinkMap = new Map();
  for (const record of records) {
    for (const target of extractInternalLinks(record.file, record.body)) {
      if (!backlinkMap.has(target)) backlinkMap.set(target, []);
      backlinkMap.get(target).push(record.file);
    }
  }
  const backlinks = {};
  for (const target of [...backlinkMap.keys()].sort(byString)) {
    backlinks[target] = [...new Set(backlinkMap.get(target))].sort(byString);
  }

  return {
    captures: { count: captures.length, captures },
    links: { count: links.length, links },
    quotes: { count: quotes.length, quotes },
    backlinks: { backlinks },
  };
}

export function writeIndexes(root) {
  const indexes = buildIndexes(root);
  const outDir = join(root, "generated");
  mkdirSync(outDir, { recursive: true });
  for (const [name, value] of Object.entries(indexes)) {
    writeFileSync(join(outDir, `${name}.json`), JSON.stringify(value, null, 2) + "\n");
  }
  return indexes;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const indexes = writeIndexes(process.cwd());
  console.log(
    `generated/ rebuilt: ${indexes.captures.count} captures, ` +
      `${indexes.links.count} links, ${indexes.quotes.count} quotes, ` +
      `${Object.keys(indexes.backlinks.backlinks).length} backlinked files`
  );
}
