import test from "node:test";
import assert from "node:assert/strict";
import { extractInternalLinks } from "../scripts/lib/backlinks.js";

test("resolves relative links against the source file's directory", () => {
  const links = extractInternalLinks(
    "seeds/map-territory.md",
    "See [the quote](../captures/2026/01/quote.md) and [a sibling](other-seed.md)."
  );
  assert.deepEqual(links, ["captures/2026/01/quote.md", "seeds/other-seed.md"]);
});

test("ignores external links, anchors, and mailto", () => {
  const links = extractInternalLinks(
    "seeds/a.md",
    "[ext](https://example.com/x) [anchor](#heading) [mail](mailto:x@example.com) [real](b.md)"
  );
  assert.deepEqual(links, ["seeds/b.md"]);
});

test("strips anchors from internal targets and deduplicates", () => {
  const links = extractInternalLinks(
    "drafts/piece/sources.md",
    "[one](../../seeds/idea.md#questions) and [again](../../seeds/idea.md)"
  );
  assert.deepEqual(links, ["seeds/idea.md"]);
});

test("ignores links that escape the repo root", () => {
  assert.deepEqual(extractInternalLinks("seeds/a.md", "[out](../../elsewhere.md)"), []);
});
