#!/usr/bin/env node
/**
 * Build a static site view of the repository into site/.
 *
 * The site is derived and disposable, like generated/: built from canonical
 * Markdown, deployed to GitHub Pages by CI, never committed. Rebuild locally
 * with `npm run build:site` and open site/index.html.
 */
import { cpSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, posix, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import { Marked } from "marked";
import { scanRepo, CANONICAL_DIRS } from "./lib/scan.js";

const byString = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

function esc(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Crude Markdown → plain text, for snippets and the search index. */
function stripMarkdown(body) {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_>`|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function snippet(body, length = 200) {
  const text = stripMarkdown(body);
  return text.length > length ? text.slice(0, length) + "…" : text;
}

function shortDate(value) {
  if (!value) return null;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? String(value) : new Date(parsed).toISOString().slice(0, 10);
}

/** Best display title for a record: frontmatter, first heading, or slug. */
function docTitle(record) {
  if (record.data.title) return record.data.title;
  const heading = /^#\s+(.+)$/m.exec(record.body);
  if (heading) return heading[1].trim();
  const slug = record.file.split("/").pop().replace(/\.md$/, "");
  return slug.replace(/^\d{4}-\d{2}-\d{2}-(\d{6}-)?/, "").replace(/-/g, " ");
}

function docDate(record) {
  const { data } = record;
  return shortDate(data.published_at ?? data.created_at ?? data.updated_at ?? null);
}

function docKind(record) {
  if (record.file.startsWith("captures/")) return record.data.type || "capture";
  if (record.file.startsWith("seeds/")) return "seed";
  if (record.file.startsWith("drafts/")) return "draft";
  return "published";
}

const DRAFT_FILE_ORDER = new Map([
  ["README.md", 0],
  ["draft.md", 1],
  ["notes.md", 2],
  ["sources.md", 3],
]);

function draftFileLabel(file, slug) {
  const rel = file.slice(`drafts/${slug}/`.length);
  const coreLabels = {
    "README.md": "Brief",
    "draft.md": "Draft",
    "notes.md": "Notes",
    "sources.md": "Sources",
  };
  if (coreLabels[rel]) return coreLabels[rel];
  return rel
    .replace(/\.md$/, "")
    .split("/")
    .map((part) =>
      part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
    .join(" / ");
}

function draftPackageRecords(record, records) {
  const match = /^drafts\/([^/]+)\//.exec(record.file);
  if (!match) return [];
  const slug = match[1];
  const prefix = `drafts/${slug}/`;
  return records
    .filter((candidate) => candidate.file.startsWith(prefix))
    .sort((a, b) => {
      const aRel = a.file.slice(prefix.length);
      const bRel = b.file.slice(prefix.length);
      const aRank = DRAFT_FILE_ORDER.get(aRel) ?? 10;
      const bRank = DRAFT_FILE_ORDER.get(bRel) ?? 10;
      return aRank - bRank || byString(aRel, bRel);
    });
}

function draftPackageNav(record, records) {
  const match = /^drafts\/([^/]+)\//.exec(record.file);
  if (!match) return "";
  const slug = match[1];
  const links = draftPackageRecords(record, records).map((candidate) => {
    const label = draftFileLabel(candidate.file, slug);
    if (candidate.file === record.file) return `<span aria-current="page">${esc(label)}</span>`;
    const href = posix
      .relative(posix.dirname(record.file), candidate.file)
      .replace(/\.md$/, ".html");
    return `<a href="${esc(href)}">${esc(label)}</a>`;
  });
  return `<nav class="draft-package" aria-label="Draft files"><strong>Draft package</strong>${links.join("")}</nav>`;
}

const md = new Marked({ gfm: true });
// Rewrite repo-internal .md links to their rendered .html counterparts.
md.use({
  renderer: {
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      let out = href;
      if (!/^[a-z][a-z0-9+.-]*:/i.test(href)) out = href.replace(/\.md(#[^#]*)?$/, ".html$1");
      const titleAttr = title ? ` title="${esc(title)}"` : "";
      return `<a href="${esc(out)}"${titleAttr}>${text}</a>`;
    },
  },
});

const NAV = [
  ["index.html", "Home"],
  ["captures/index.html", "Captures"],
  ["seeds/index.html", "Seeds"],
  ["drafts/index.html", "Drafts"],
  ["published/index.html", "Published"],
];

function page({ title, depth, content, writerName }) {
  const prefix = "../".repeat(depth);
  const nav = NAV.map(([path, label]) => `<a href="${prefix}${path}">${label}</a>`).join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Plot</title>
<link rel="stylesheet" href="${prefix}style.css">
</head>
<body>
<header>
  <a class="wordmark" href="${prefix}index.html">Plot</a>
  <nav>${nav}</nav>
  <div class="searchbox">
    <input id="search" type="search" placeholder="Search…" autocomplete="off">
  </div>
</header>
<div id="search-results" hidden></div>
<main>
${content}
</main>
<footer>${esc(writerName)}’s plot — plain Markdown in <a href="https://github.com/tomcritchlow/plot">a Git repository</a>; this site is a disposable view of it.</footer>
<script>window.__PLOT_PREFIX__=${JSON.stringify(prefix)};</script>
<script defer src="${prefix}search-data.js"></script>
<script defer src="${prefix}search.js"></script>
</body>
</html>
`;
}

function metaCard(record) {
  const { data } = record;
  const bits = [];
  bits.push(`<span class="badge badge-${esc(docKind(record))}">${esc(docKind(record))}</span>`);
  const date = docDate(record);
  if (date) bits.push(`<span>${esc(date)}</span>`);
  if (data.status) bits.push(`<span>status: ${esc(data.status)}</span>`);
  if (data.author) bits.push(`<span>${esc(data.author)}</span>`);
  if (data.url) bits.push(`<a href="${esc(data.url)}">${esc(new URL(data.url).hostname)} ↗</a>`);
  if (Array.isArray(data.tags) && data.tags.length > 0) {
    bits.push(data.tags.map((t) => `<span class="tag">#${esc(t)}</span>`).join(" "));
  }
  const source = `<a class="rawlink" href="https://github.com/tomcritchlow/plot/blob/main/${esc(record.file)}">view source ↗</a>`;
  return `<div class="meta">${bits.join(" · ")} ${source}</div>`;
}

function listItem(record, depth) {
  const prefix = "../".repeat(depth);
  const href = prefix + record.file.replace(/\.md$/, ".html");
  const date = docDate(record);
  return `<li>
    <span class="badge badge-${esc(docKind(record))}">${esc(docKind(record))}</span>
    <a href="${href}">${esc(docTitle(record))}</a>
    ${date ? `<span class="date">${esc(date)}</span>` : ""}
    <p class="snippet">${esc(snippet(record.body, 180))}</p>
  </li>`;
}

const STYLE = `
:root {
  --bg: #faf8f4; --ink: #26221c; --muted: #7a7265; --line: #e5dfd3;
  --accent: #2456a3; --card: #ffffff;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #191712; --ink: #e8e2d6; --muted: #948a79; --line: #353026; --accent: #7fa8e0; --card: #211e18; }
}
* { box-sizing: border-box; }
body {
  margin: 0; background: var(--bg); color: var(--ink);
  font: 17px/1.65 Georgia, "Times New Roman", serif;
}
header {
  display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap;
  padding: 0.9rem 1.2rem; border-bottom: 1px solid var(--line);
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 0.85rem;
}
.wordmark { font-weight: 700; font-size: 1.05rem; text-decoration: none; color: var(--ink); letter-spacing: 0.02em; }
header nav { display: flex; gap: 0.9rem; }
header nav a { color: var(--muted); text-decoration: none; }
header nav a:hover { color: var(--accent); }
.searchbox { margin-left: auto; }
.searchbox input {
  font: inherit; padding: 0.35rem 0.6rem; width: 14rem; max-width: 60vw;
  border: 1px solid var(--line); border-radius: 6px; background: var(--card); color: var(--ink);
}
main { max-width: 44rem; margin: 0 auto; padding: 2rem 1.2rem 4rem; }
main img { max-width: 100%; height: auto; }
a { color: var(--accent); }
h1, h2, h3 { line-height: 1.25; }
blockquote { margin: 1rem 0; padding: 0.1rem 1rem; border-left: 3px solid var(--line); color: var(--muted); }
pre { overflow-x: auto; padding: 0.8rem; background: var(--card); border: 1px solid var(--line); border-radius: 6px; font-size: 0.85rem; }
code { font-family: ui-monospace, Menlo, monospace; font-size: 0.9em; }
.meta {
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 0.78rem; color: var(--muted); display: flex; flex-wrap: wrap; gap: 0.45rem;
  align-items: baseline; padding-bottom: 0.9rem; border-bottom: 1px solid var(--line); margin-bottom: 1.6rem;
}
.meta a { color: var(--muted); }
.rawlink { margin-left: auto; }
.draft-package {
  display: flex; flex-wrap: wrap; gap: 0.45rem 0.8rem; align-items: baseline;
  margin: -0.4rem 0 1.8rem; padding: 0.65rem 0.8rem;
  border: 1px solid var(--line); border-radius: 6px; background: var(--card);
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 0.78rem;
}
.draft-package strong { color: var(--muted); margin-right: 0.2rem; }
.draft-package a { text-decoration: none; }
.draft-package [aria-current="page"] { color: var(--ink); font-weight: 650; }
.badge {
  display: inline-block; padding: 0.05rem 0.5rem; border-radius: 99px; font-size: 0.72rem;
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
  border: 1px solid var(--line); color: var(--muted); text-transform: lowercase;
}
.badge-thought { border-color: #b9a15e; } .badge-link { border-color: #6a9a6e; }
.badge-quote { border-color: #a06fa8; } .badge-seed { border-color: #5e9ab9; }
.badge-draft { border-color: #c08552; } .badge-published { border-color: var(--accent); }
ul.doclist { list-style: none; padding: 0; }
ul.doclist li { margin: 0 0 1.4rem; }
ul.doclist .date { color: var(--muted); font-size: 0.8rem; font-family: -apple-system, sans-serif; }
ul.doclist .snippet { margin: 0.15rem 0 0; color: var(--muted); font-size: 0.85rem; }
.counts { display: flex; gap: 1.6rem; flex-wrap: wrap; margin: 1.4rem 0 2rem;
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; }
.counts a { text-decoration: none; color: var(--ink); }
.counts .n { font-size: 1.6rem; font-weight: 700; display: block; }
.counts .l { color: var(--muted); font-size: 0.8rem; }
h2.section { margin-top: 2.4rem; font-size: 1.05rem; border-bottom: 1px solid var(--line); padding-bottom: 0.3rem; }
#search-results {
  max-width: 44rem; margin: 0 auto; padding: 1rem 1.2rem 0;
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
}
#search-results .hit { margin-bottom: 1rem; }
#search-results .hit .snippet { color: var(--muted); font-size: 0.85rem; margin: 0.1rem 0 0; }
#search-results mark { background: transparent; color: var(--accent); font-weight: 600; }
#search-results .none { color: var(--muted); }
footer {
  max-width: 44rem; margin: 0 auto; padding: 1rem 1.2rem 3rem; color: var(--muted);
  font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 0.78rem;
  border-top: 1px solid var(--line);
}
`;

const SEARCH_JS = `
(function () {
  var input = document.getElementById("search");
  var panel = document.getElementById("search-results");
  var main = document.querySelector("main");
  if (!input || !panel) return;

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function run() {
    var q = input.value.trim().toLowerCase();
    var docs = window.__PLOT_SEARCH__ || [];
    if (!q) { panel.hidden = true; main.hidden = false; panel.innerHTML = ""; return; }
    var tokens = q.split(/\\s+/);
    var hits = [];
    for (var i = 0; i < docs.length; i++) {
      var d = docs[i];
      var hay = d.t.toLowerCase() + " " + d.x;
      var ok = true, score = 0;
      for (var j = 0; j < tokens.length; j++) {
        var tok = tokens[j];
        if (hay.indexOf(tok) === -1) { ok = false; break; }
        if (d.t.toLowerCase().indexOf(tok) !== -1) score += 5;
        score += d.x.split(tok).length - 1;
      }
      if (ok) hits.push({ d: d, score: score });
    }
    hits.sort(function (a, b) { return b.score - a.score; });
    hits = hits.slice(0, 30);
    var html = "<p class=none>" + hits.length + " result" + (hits.length === 1 ? "" : "s") +
      " for \\u201C" + escapeHtml(q) + "\\u201D</p>";
    for (var k = 0; k < hits.length; k++) {
      var d = hits[k].d;
      var idx = d.x.indexOf(tokens[0]);
      var ctx = idx === -1 ? d.x.slice(0, 160) :
        d.x.slice(Math.max(0, idx - 60), idx + 120);
      var snip = escapeHtml(ctx);
      for (var j2 = 0; j2 < tokens.length; j2++) {
        var t = escapeHtml(tokens[j2]);
        snip = snip.replace(new RegExp("(" + t.replace(/[.*+?^\\\${}()|[\\]\\\\]/g, "\\\\$&") + ")", "gi"), "<mark>$1</mark>");
      }
      html += '<div class="hit"><span class="badge badge-' + d.y + '">' + d.y + "</span> " +
        '<a href="' + window.__PLOT_PREFIX__ + d.u + '">' + escapeHtml(d.t) + "</a>" +
        (d.d ? ' <span class="date">' + d.d + "</span>" : "") +
        '<p class="snippet">…' + snip + "…</p></div>";
    }
    panel.innerHTML = html;
    panel.hidden = false;
    main.hidden = true;
  }

  input.addEventListener("input", run);
  input.addEventListener("keydown", function (e) { if (e.key === "Escape") { input.value = ""; run(); } });
})();
`;

/** Copy every non-Markdown file under the canonical dirs into the site. */
function copyAssets(root, out, dir) {
  const abs = join(root, dir);
  let entries;
  try {
    entries = readdirSync(abs);
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.startsWith(".")) continue;
    const rel = `${dir}/${entry}`;
    if (statSync(join(root, rel)).isDirectory()) {
      copyAssets(root, out, rel);
    } else if (!entry.endsWith(".md")) {
      mkdirSync(dirname(join(out, rel)), { recursive: true });
      cpSync(join(root, rel), join(out, rel));
    }
  }
}

export function buildSite(root, writerName = "A writer") {
  const out = join(root, "site");
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });

  const records = scanRepo(root).filter((r) => !r.error);
  const write = (relPath, html) => {
    mkdirSync(dirname(join(out, relPath)), { recursive: true });
    writeFileSync(join(out, relPath), html);
  };

  // One page per canonical document.
  for (const record of records) {
    const relPath = record.file.replace(/\.md$/, ".html");
    const depth = relPath.split("/").length - 1;
    const content = metaCard(record) + draftPackageNav(record, records) + md.parse(record.body);
    write(relPath, page({ title: docTitle(record), depth, content, writerName }));
  }

  const inDir = (dir) => records.filter((r) => r.file.startsWith(dir + "/"));
  const dated = (list) => [...list].sort((a, b) => byString(docDate(b) ?? "", docDate(a) ?? ""));

  // Section indexes.
  const captures = dated(inDir("captures"));
  write(
    "captures/index.html",
    page({
      title: "Captures",
      depth: 1,
      writerName,
      content:
        `<h1>Captures</h1><p class="snippet">Raw material: thoughts, links, quotes.</p>` +
        `<ul class="doclist">${captures.map((r) => listItem(r, 1)).join("\n")}</ul>`,
    })
  );

  const seeds = dated(inDir("seeds"));
  write(
    "seeds/index.html",
    page({
      title: "Seeds",
      depth: 1,
      writerName,
      content:
        `<h1>Seeds</h1><p class="snippet">Ideas that have acquired enough gravity for their own document.</p>` +
        `<ul class="doclist">${seeds.map((r) => listItem(r, 1)).join("\n")}</ul>`,
    })
  );

  const draftReadmes = records.filter((r) => /^drafts\/[^/]+\/README\.md$/.test(r.file));
  const draftCards = [...draftReadmes]
    .sort((a, b) => byString(shortDate(b.data.updated_at) ?? "", shortDate(a.data.updated_at) ?? ""))
    .map((r) => {
      const slug = r.file.split("/")[1];
      const packageRecords = draftPackageRecords(r, records);
      const manuscript = packageRecords.find((d) => d.file === `drafts/${slug}/draft.md`);
      const files = packageRecords
        .map((d) => {
          const name = draftFileLabel(d.file, slug);
          return `<a href="${d.file.replace(/\.md$/, ".html").slice("drafts/".length)}">${esc(name)}</a>`;
        })
        .join(" · ");
      return `<li>
        <span class="badge badge-draft">${esc(r.data.status ?? "draft")}</span>
        <a href="${manuscript ? `${slug}/draft.html` : `${slug}/README.html`}">${esc(r.data.title ?? slug)}</a>
        ${r.data.updated_at ? `<span class="date">updated ${esc(shortDate(r.data.updated_at))}</span>` : ""}
        <p class="snippet">${esc(snippet(r.body, 180))}</p>
        <p class="snippet">${files}</p>
      </li>`;
    });
  write(
    "drafts/index.html",
    page({
      title: "Drafts",
      depth: 1,
      writerName,
      content:
        `<h1>Drafts</h1><p class="snippet">Pieces being written. Each folder holds the brief, manuscript, notes and sources.</p>` +
        `<ul class="doclist">${draftCards.join("\n")}</ul>`,
    })
  );

  const published = dated(inDir("published"));
  write(
    "published/index.html",
    page({
      title: "Published",
      depth: 1,
      writerName,
      content:
        `<h1>Published</h1><p class="snippet">The published corpus, imported from feeds and one-off URLs.</p>` +
        `<ul class="doclist">${published.map((r) => listItem(r, 1)).join("\n")}</ul>`,
    })
  );

  // Home page.
  const recent = dated(records).slice(0, 12);
  const counts = [
    [captures.length, "captures", "captures/index.html"],
    [seeds.length, "seeds", "seeds/index.html"],
    [draftReadmes.length, "drafts", "drafts/index.html"],
    [published.length, "published", "published/index.html"],
  ]
    .map(([n, label, href]) => `<a href="${href}"><span class="n">${n}</span><span class="l">${label}</span></a>`)
    .join("");
  write(
    "index.html",
    page({
      title: "Home",
      depth: 0,
      writerName,
      content:
        `<h1>${esc(writerName)}’s plot</h1>` +
        `<p>Captures become seeds, seeds become drafts, drafts get published, and published work feeds back into future thinking. This site is a read-only view of <a href="https://github.com/tomcritchlow/plot">the repository</a>.</p>` +
        `<div class="counts">${counts}</div>` +
        `<h2 class="section">Recent</h2>` +
        `<ul class="doclist">${recent.map((r) => listItem(r, 0)).join("\n")}</ul>`,
    })
  );

  // Search index, embedded as a script so file:// preview works too.
  const searchDocs = records.map((record) => ({
    t: docTitle(record),
    y: docKind(record),
    d: docDate(record),
    u: record.file.replace(/\.md$/, ".html"),
    x: (
      stripMarkdown(record.body) +
      " " +
      (Array.isArray(record.data.tags) ? record.data.tags.join(" ") : "")
    )
      .toLowerCase()
      .slice(0, 20000),
  }));
  write("search-data.js", `window.__PLOT_SEARCH__=${JSON.stringify(searchDocs)};\n`);
  write("search.js", SEARCH_JS);
  write("style.css", STYLE);
  write(".nojekyll", "");

  for (const dir of CANONICAL_DIRS) copyAssets(root, out, dir);
  return { pages: records.length, searchDocs: searchDocs.length };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const root = process.cwd();
  let writerName = "A writer";
  try {
    const { readFileSync } = await import("node:fs");
    const { parse } = await import("yaml");
    writerName = parse(readFileSync(join(root, "plot.yml"), "utf8"))?.writer?.name ?? writerName;
  } catch {
    // plot.yml is optional for the site build.
  }
  const result = buildSite(root, writerName);
  console.log(`site/ rebuilt: ${result.pages} pages, ${result.searchDocs} search docs`);
}
