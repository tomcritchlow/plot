import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { importUrl, pageMetadata } from "../scripts/import-url.js";
import { parseFrontmatter } from "../scripts/lib/frontmatter.js";

const PAGE = `<!doctype html><html><head>
<title>Fallback Title</title>
<meta property="og:title" content="A Guest Essay"/>
<script>self.__next_f.push([1,"{\\"datePublished\\":\\"2026-07-30T12:00:00.000Z\\"}"])</script>
<meta name="author" content="Tom Critchlow"/>
</head><body>
<article><h1>A Guest Essay</h1>
<p>The essay body, long enough to clear the extraction threshold. It keeps going for a while with several sentences of reasonable prose so that the extractor treats this as genuine main content rather than boilerplate, and includes <a href="/relative">a relative link</a> for good measure.</p>
</article></body></html>`;

test("pageMetadata prefers og:title, finds JSON-LD date and meta author", () => {
  const meta = pageMetadata(PAGE);
  assert.equal(meta.title, "A Guest Essay");
  assert.equal(meta.published_at, "2026-07-30T12:00:00.000Z");
  assert.equal(meta.author, "Tom Critchlow");
});

test("importUrl writes a published file with provenance and skips duplicates", async (t) => {
  const root = mkdtempSync(join(tmpdir(), "plot-url-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, "drafts", "my-draft"), { recursive: true });
  writeFileSync(join(root, "drafts", "my-draft", "draft.md"), "# Draft\n");

  const url = "https://elsewhere.example.com/writing/a-guest-essay";
  const result = await importUrl({
    root,
    url,
    draft: "my-draft",
    fetchText: async () => PAGE,
    log: () => {},
  });
  assert.equal(result.imported, "published/2026-07-30-a-guest-essay.md");

  const { data, body } = parseFrontmatter(readFileSync(join(root, result.imported), "utf8"));
  assert.equal(data.title, "A Guest Essay");
  assert.equal(data.draft, "drafts/my-draft");
  assert.equal(data.source, "elsewhere.example.com");
  assert.match(body, /https:\/\/elsewhere\.example\.com\/relative/);

  const again = await importUrl({ root, url, fetchText: async () => PAGE, log: () => {} });
  assert.equal(again.imported, null);
});

test("importUrl refuses an unknown draft slug", async () => {
  await assert.rejects(
    importUrl({
      root: tmpdir(),
      url: "https://example.com/x",
      draft: "definitely-not-a-draft",
      fetchText: async () => PAGE,
      log: () => {},
    }),
    /no such draft folder/
  );
});
