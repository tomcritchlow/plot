import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { buildIndexes } from "../scripts/build-indexes.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "fixtures", "valid-repo");

test("captures index lists every capture with metadata", () => {
  const { captures } = buildIndexes(root);
  assert.equal(captures.count, 3);
  const link = captures.captures.find((c) => c.type === "link");
  assert.equal(link.title, "The Shared Article");
  assert.equal(link.author, "Alex Author");
  assert.deepEqual(captures.captures.find((c) => c.type === "quote").tags, ["testing"]);
});

test("links index deduplicates by normalized url across the corpus", () => {
  const { links } = buildIndexes(root);
  assert.equal(links.count, 1);
  const [entry] = links.links;
  // Three different spellings (utm param, trailing slash, plain) collapse to one.
  assert.equal(entry.normalized, "https://example.com/shared-article");
  assert.equal(entry.references.length, 3);
  assert.equal(entry.title, "The Shared Article");
  assert.equal(entry.first_seen, "2026-01-05T10:15:00Z");
  const withIds = entry.references.filter((r) => r.capture_id);
  assert.equal(withIds.length, 3);
});

test("quotes index extracts blockquote and note", () => {
  const { quotes } = buildIndexes(root);
  assert.equal(quotes.count, 1);
  const [quote] = quotes.quotes;
  assert.equal(quote.quote, "The map is not the territory,\nbut a good map helps.");
  assert.equal(quote.note, "Commentary about the quote.");
  assert.equal(quote.url, "https://example.com/shared-article");
  assert.equal(quote.author, "Alex Author");
});

test("backlinks map targets to sources", () => {
  const { backlinks } = buildIndexes(root);
  assert.deepEqual(backlinks.backlinks, {
    "captures/2026/01/2026-01-05-101500-first-thought.md": ["seeds/map-territory.md"],
    "captures/2026/01/2026-01-07-140000-good-quote.md": ["seeds/map-territory.md"],
  });
});

test("output is deterministic across runs", () => {
  const first = JSON.stringify(buildIndexes(root));
  const second = JSON.stringify(buildIndexes(root));
  assert.equal(first, second);
});
