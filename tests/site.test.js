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

function treatmentFixture() {
  const root = fixture();
  writeFileSync(
    join(root, "drafts/piece/README.md"),
    "---\ntitle: A Piece\nstatus: drafting\nupdated_at: 2026-09-05\nmanuscripts:\n  - draft.md\n  - alternate.md\n---\n\n# Brief\n"
  );
  writeFileSync(join(root, "drafts/piece/alternate.md"), "# Every Boundary Is a Bet\n");
  return root;
}

test("draft pages expose the full package and mark the current file", () => {
  const root = fixture();
  try {
    buildSite(root, "Test Writer");
    const draft = readFileSync(join(root, "site/drafts/piece/draft.html"), "utf8");
    assert.match(draft, /<strong>Draft package<\/strong>/);
    assert.match(draft, /href="README\.html">Brief<\/a>/);
    assert.match(draft, /<span class="draft-treatment" aria-current="page">The Manuscript<\/span>/);
    assert.match(draft, /href="notes\.html">Notes<\/a>/);
    assert.match(draft, /href="sources\.html">Sources<\/a>/);
    assert.match(draft, /href="research\/discussion\.html">Research \/ Discussion<\/a>/);

    const research = readFileSync(join(root, "site/drafts/piece/research/discussion.html"), "utf8");
    assert.match(research, /href="\.\.\/draft\.html">The Manuscript<\/a>/);
    assert.match(research, /<span class="draft-file" aria-current="page">Research \/ Discussion<\/span>/);
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
    assert.match(index, /href="piece\/draft\.html">The Manuscript<\/a>/);
    assert.match(index, /href="piece\/notes\.html">Notes<\/a>/);
    assert.match(index, /href="piece\/sources\.html">Sources<\/a>/);
    assert.match(index, /href="piece\/research\/discussion\.html">Research \/ Discussion<\/a>/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("alternate manuscripts render as treatments of one draft project", () => {
  const root = treatmentFixture();
  try {
    buildSite(root, "Test Writer");

    const primary = readFileSync(join(root, "site/drafts/piece/draft.html"), "utf8");
    assert.match(primary, />Treatments<\/span>/);
    assert.match(primary, /class="draft-treatment" aria-current="page">The Manuscript<\/span>/);
    assert.match(primary, /class="draft-treatment" href="alternate\.html">Every Boundary Is a Bet<\/a>/);

    const alternate = readFileSync(join(root, "site/drafts/piece/alternate.html"), "utf8");
    assert.match(alternate, /class="draft-treatment" href="draft\.html">The Manuscript<\/a>/);
    assert.match(alternate, /class="draft-treatment" aria-current="page">Every Boundary Is a Bet<\/span>/);

    const index = readFileSync(join(root, "site/drafts/index.html"), "utf8");
    assert.match(index, /href="piece\/README\.html">A Piece<\/a>/);
    assert.match(index, /Treatments<\/span> <a[^>]+>The Manuscript<\/a> · <a[^>]+>Every Boundary Is a Bet<\/a>/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
