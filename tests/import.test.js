import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { importPublished } from "../scripts/import-published.js";
import { parseFrontmatter } from "../scripts/lib/frontmatter.js";

const fixtures = join(dirname(fileURLToPath(import.meta.url)), "fixtures");
const feedXml = readFileSync(join(fixtures, "feed.xml"), "utf8");
const pageHtml = readFileSync(join(fixtures, "excerpt-post.html"), "utf8");

const config = { feeds: [{ name: "Fixture Blog", url: "https://fixture.example.com/feed.xml" }] };

function makeFetcher() {
  const calls = [];
  return {
    calls,
    async fetchText(url) {
      calls.push(url);
      if (url.endsWith("feed.xml")) return feedXml;
      if (url.endsWith("excerpt-post")) return pageHtml;
      throw new Error(`unexpected fetch: ${url}`);
    },
  };
}

test("imports feed items with metadata and full text", async (t) => {
  const root = mkdtempSync(join(tmpdir(), "plot-import-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const { fetchText, calls } = makeFetcher();

  const result = await importPublished({ root, config, fetchText, log: () => {} });
  assert.deepEqual(result.imported.sort(), [
    "published/2025-11-04-a-full-post.md",
    "published/2025-12-10-an-excerpt-only-post.md",
  ]);

  const full = parseFrontmatter(
    readFileSync(join(root, "published/2025-11-04-a-full-post.md"), "utf8")
  );
  assert.equal(full.data.title, "A Full Post");
  assert.equal(full.data.url, "https://fixture.example.com/full-post");
  assert.equal(full.data.author, "Fixture Writer");
  assert.equal(full.data.source, "Fixture Blog");
  assert.match(full.body, /Paragraph one makes an argument\./);
  // Full-content item must not trigger a page fetch.
  assert.equal(calls.includes("https://fixture.example.com/full-post"), false);

  const excerpt = parseFrontmatter(
    readFileSync(join(root, "published/2025-12-10-an-excerpt-only-post.md"), "utf8")
  );
  assert.match(excerpt.body, /real article body, recovered from the canonical page/);
  assert.doesNotMatch(excerpt.body, /Site navigation/);
});

test("import is idempotent", async (t) => {
  const root = mkdtempSync(join(tmpdir(), "plot-import-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const { fetchText } = makeFetcher();

  await importPublished({ root, config, fetchText, log: () => {} });
  const second = await importPublished({ root, config, fetchText, log: () => {} });
  assert.deepEqual(second.imported, []);
  assert.equal(second.skipped, 2);
  assert.equal(readdirSync(join(root, "published")).length, 2);
});

test("duplicate canonical urls are not re-imported even when the guid changes", async (t) => {
  const root = mkdtempSync(join(tmpdir(), "plot-import-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const { fetchText } = makeFetcher();
  await importPublished({ root, config, fetchText, log: () => {} });

  const mutatedFeed = feedXml.replaceAll(
    "<guid>https://fixture.example.com/full-post</guid>",
    "<guid>totally-new-guid-1</guid>"
  );
  const result = await importPublished({
    root,
    config,
    fetchText: async (url) => (url.endsWith("feed.xml") ? mutatedFeed : pageHtml),
    log: () => {},
  });
  assert.deepEqual(result.imported, []);
});

test("a failing page fetch still imports the excerpt and metadata", async (t) => {
  const root = mkdtempSync(join(tmpdir(), "plot-import-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const result = await importPublished({
    root,
    config,
    fetchText: async (url) => {
      if (url.endsWith("feed.xml")) return feedXml;
      throw new Error("network down");
    },
    log: () => {},
  });
  assert.equal(result.imported.length, 2);
  const excerpt = parseFrontmatter(
    readFileSync(join(root, "published/2025-12-10-an-excerpt-only-post.md"), "utf8")
  );
  assert.equal(excerpt.data.title, "An Excerpt-Only Post");
  assert.match(excerpt.body, /Just a short teaser\./);
});

test("no configured feeds is a clean no-op", async () => {
  const result = await importPublished({
    root: "/nonexistent",
    config: { feeds: [] },
    fetchText: async () => {
      throw new Error("should not fetch");
    },
    log: () => {},
  });
  assert.deepEqual(result, { imported: [], skipped: 0 });
});
