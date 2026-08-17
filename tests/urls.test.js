import test from "node:test";
import assert from "node:assert/strict";
import { extractUrls, normalizeUrl } from "../scripts/lib/urls.js";

test("extracts markdown links, bare urls, and autolinks", () => {
  const body = [
    "A [link](https://a.example.com/page) in markdown.",
    "A bare url https://b.example.com/thing.",
    "An autolink <https://c.example.com/x>.",
  ].join("\n");
  assert.deepEqual(extractUrls(body), [
    "https://a.example.com/page",
    "https://b.example.com/thing",
    "https://c.example.com/x",
  ]);
});

test("trims trailing punctuation and deduplicates within a body", () => {
  const body = "See https://example.com/a. Also https://example.com/a again!";
  assert.deepEqual(extractUrls(body), ["https://example.com/a"]);
});

test("normalization strips fragments, tracking params, and trailing slashes", () => {
  assert.equal(
    normalizeUrl("https://Example.com/Path/?utm_source=x&b=2&a=1#section"),
    "https://example.com/Path?a=1&b=2"
  );
  assert.equal(
    normalizeUrl("https://example.com/shared-article/"),
    normalizeUrl("https://example.com/shared-article?utm_campaign=y")
  );
});

test("normalization keeps root path and rejects non-http", () => {
  assert.equal(normalizeUrl("https://example.com/"), "https://example.com/");
  assert.equal(normalizeUrl("mailto:someone@example.com"), null);
  assert.equal(normalizeUrl("not a url"), null);
});
