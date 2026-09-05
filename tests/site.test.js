import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { buildSite } from "../scripts/build-site.js";

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "plot-site-"));
  for (const dir of ["captures", "seeds", "drafts/piece/research", "published"]) {
    mkdirSync(join(root, dir), { recursive: true });
  }
  writeFileSync(
    join(root, "drafts/piece/README.md"),
    "---\ntitle: A Piece\nstatus: drafting\nupdated_at: 2026-09-05\n---\n\n# Brief\n"
  );
  writeFileSync(join(root, "drafts/piece/draft.md"), "# The Manuscript\n");
  writeFileSync(join(root, "drafts/piece/notes.md"), "# Notes\n");
  writeFileSync(join(root, "drafts/piece/sources.md"), "# Sources\n");
  writeFileSync(join(root, "drafts/piece/research/discussion.md"), "# Discussion\n");
  return root;
}

test("draft pages expose the full package and mark the current file", () => {
  const root = fixture();
  try {
    buildSite(root, "Test Writer");
    const draft = readFileSync(join(root, "site/drafts/piece/draft.html"), "utf8");
    assert.match(draft, /<strong>Draft package<\/strong>/);
    assert.match(draft, /href="README\.html">Brief<\/a>/);
    assert.match(draft, /<span aria-current="page">Draft<\/span>/);
    assert.match(draft, /href="notes\.html">Notes<\/a>/);
    assert.match(draft, /href="sources\.html">Sources<\/a>/);
    assert.match(draft, /href="research\/discussion\.html">Research \/ Discussion<\/a>/);

    const research = readFileSync(join(root, "site/drafts/piece/research/discussion.html"), "utf8");
    assert.match(research, /href="\.\.\/draft\.html">Draft<\/a>/);
    assert.match(research, /<span aria-current="page">Research \/ Discussion<\/span>/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("the drafts index opens the manuscript and lists every package file", () => {
  const root = fixture();
  try {
    buildSite(root, "Test Writer");
    const index = readFileSync(join(root, "site/drafts/index.html"), "utf8");
    assert.match(index, /href="piece\/draft\.html">A Piece<\/a>/);
    assert.match(index, /href="piece\/README\.html">Brief<\/a>/);
    assert.match(index, /href="piece\/draft\.html">Draft<\/a>/);
    assert.match(index, /href="piece\/notes\.html">Notes<\/a>/);
    assert.match(index, /href="piece\/sources\.html">Sources<\/a>/);
    assert.match(index, /href="piece\/research\/discussion\.html">Research \/ Discussion<\/a>/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
