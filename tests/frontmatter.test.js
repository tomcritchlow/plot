import test from "node:test";
import assert from "node:assert/strict";
import { parseFrontmatter, stringifyFrontmatter } from "../scripts/lib/frontmatter.js";

test("parses frontmatter and body", () => {
  const { data, body, hasFrontmatter } = parseFrontmatter(
    "---\nid: cap-1\ntags:\n  - a\n---\n\nHello.\n"
  );
  assert.equal(hasFrontmatter, true);
  assert.equal(data.id, "cap-1");
  assert.deepEqual(data.tags, ["a"]);
  assert.equal(body.trim(), "Hello.");
});

test("file without frontmatter returns empty data and full body", () => {
  const { data, body, hasFrontmatter } = parseFrontmatter("Just prose.\n");
  assert.equal(hasFrontmatter, false);
  assert.deepEqual(data, {});
  assert.equal(body, "Just prose.\n");
});

test("malformed YAML throws", () => {
  assert.throws(() => parseFrontmatter("---\nid: [unclosed\n---\n\nBody.\n"));
});

test("stringify/parse round-trips", () => {
  const data = {
    id: "cap-20260101-000000-test",
    type: "quote",
    created_at: "2026-01-01T00:00:00Z",
    title: "A Title: With Punctuation",
    tags: ["one", "two"],
    skipped: null,
  };
  const text = stringifyFrontmatter(data, "\nBody text.\n");
  const parsed = parseFrontmatter(text);
  assert.equal(parsed.data.id, data.id);
  assert.equal(parsed.data.title, data.title);
  assert.deepEqual(parsed.data.tags, ["one", "two"]);
  assert.equal("skipped" in parsed.data, false);
  assert.equal(parsed.body.trim(), "Body text.");
});

test("stringify writes empty tags as []", () => {
  const text = stringifyFrontmatter({ id: "x", tags: [] }, "\nBody.\n");
  assert.match(text, /tags: \[\]/);
});
