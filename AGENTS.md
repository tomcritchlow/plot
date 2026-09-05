# AGENTS.md — how to operate this repository

This repository is a writer's persistent intellectual home. You — whatever
agent or model you happen to be — are a disposable client operating on it.
The plain Markdown files are canonical; Git is the event log; everything in
`generated/` is derived and rebuildable.

Read this file before doing anything. It is the complete protocol.

## The shape of the repo

| Path | What it is | Who writes it |
| --- | --- | --- |
| `captures/YYYY/MM/` | Raw material: thoughts, links, quotes | You, constantly |
| `seeds/` | Ideas that have acquired enough gravity for their own evolving document | You, occasionally, deliberately |
| `drafts/<slug>/` | Writing projects; each may contain multiple manuscript treatments | You and the writer, together |
| `published/` | The writer's published corpus (imported from feeds) | The importer script; treat as read-only history |
| `generated/` | Derived JSON indexes | **CI only. Never you. Never humans.** |
| `scripts/`, `tests/` | Plain Node tooling | Rarely touched |

The lifecycle: **captures → seeds → drafts → published**, and published work
feeds back in as context for future thinking.

## Protocol: capture

When the user says anything like *"save this"*, *"remember this"*, *"capture
this"*, *"add this link"*, *"save this quote"*, *"put this in Plot"* — create
**one new file** and commit it. Capture is append-only: never modify another
capture, index, or shared file to add a new capture.

**1. Choose the type** by inferring from what you were given:

- `thought` — the user's own idea, in their words
- `link` — a URL worth keeping, optionally with the user's note about why
- `quote` — a passage from somewhere else, plus optional commentary

These are the only capture types. Do not invent new ones.

**2. Name it.** ID convention: `cap-YYYYMMDD-HHMMSS-short-slug`, where the
timestamp is the current time and the slug is 2–4 lowercase words capturing
the gist. Filename: `YYYY-MM-DD-HHMMSS-short-slug.md` inside
`captures/YYYY/MM/`. If you are unsure of the user's local time, use UTC —
never block a capture on figuring out the clock. Collision avoidance only
needs to be reasonable, not perfect.

**3. Write it.** Frontmatter requires only `id`, `type`, `created_at`.
Everything else (`url`, `title`, `author`, `source_published_at`, `tags`) is
optional — include it when you confidently know it, omit it when you don't.
**Never invent metadata.** Never require tags; `tags: []` is fine.
Preserve the user's words — light cleanup of dictation is fine, rewriting
their idea is not.

A thought:

```markdown
---
id: cap-20260817-132031-company-clocks
type: thought
created_at: 2026-08-17T13:20:31-04:00
tags: []
---

Maybe organizations need clocks more than they need better models.
```

A link (the note under the frontmatter is the user's, not yours):

```markdown
---
id: cap-20260817-132412-organizational-time
type: link
created_at: 2026-08-17T13:24:12-04:00
url: https://example.com/organizational-time
title: Organizational Time
author: Jane Example
tags: []
---

Relevant to the idea about organizations operating at different speeds.
```

A quote (the passage in a blockquote; commentary under `## Note`):

```markdown
---
id: cap-20260817-132901-organizations-speed
type: quote
created_at: 2026-08-17T13:29:01-04:00
url: https://example.com/organizational-time
title: Organizational Time
author: Jane Example
tags: []
---

> Organizations do not have a single speed.

## Note

Connects to the company-clocks idea.
```

**4. Commit it.** One capture per commit, message like
`capture: company clocks thought`. If the user mentioned a connection to an
existing idea ("this reminds me of X"), record that connection *in the new
capture's body* — as prose or a relative Markdown link — not by editing the
old file.

## Protocol: seeds

A seed is **not** simply a thought. A seed is an idea that has acquired
enough gravity to deserve its own evolving document — typically after several
related captures accumulate, or when the user says so.

- Suggest promoting related captures into a seed when you notice a cluster;
  create one only with the user's agreement.
- Do not create dozens of trivial seeds. A seed you wouldn't return to is a
  capture that got promoted too early.
- Seeds link back to their supporting captures with ordinary relative
  Markdown links (see `seeds/company-clocks.md` for the shape).
- Seeds are living documents: unlike captures, editing them over time is the
  whole point.

## Protocol: drafts

Before working substantially on anything in `drafts/`:

1. Read the entire draft folder (`README.md` is the brief; `draft.md` is the
   default manuscript; any files listed under `manuscripts` are alternate
   treatments; `notes.md` is loose thinking; `sources.md` is provenance).
2. Search `seeds/` for relevant ideas.
3. Search `captures/` for related quotes, links and thoughts (`rg` works;
   `generated/*.json` gives you structured views).
4. Search `published/` for previous related arguments.
5. Preserve provenance: when material from a capture enters the draft, record
   it in `sources.md`.

While working, actively surface: repetition, contradictions, forgotten
related thinking, useful supporting material, and arguments from published
work the writer should build on rather than unknowingly repeat.

One draft folder represents one underlying idea or writing project. Keep
ordinary revisions in `draft.md`; Git is the version history, so do not create
`draft-v1.md`, `draft-v2.md`, etc.

When the same idea deserves a genuinely different argument, structure or
audience treatment, keep it in the same folder with a semantic filename and
declare all manuscript files in the `README.md` frontmatter:

```yaml
manuscripts:
  - draft.md
  - every-handoff-is-a-claim.md
```

Multiple manuscripts are branches of the idea, not historical snapshots.
Share `notes.md` and `sources.md` unless a treatment truly needs separate
supporting material.

## Protocol: publishing a draft

When the user says a draft has been published (usually by giving you a URL):

1. **Import the published piece** into `published/`:
   - If it will appear in a feed configured in `plot.yml`, the daily import
     will catch it — or run `npm run import:published` now.
   - If it was published somewhere the feeds don't cover (a company blog, a
     guest post), run `npm run import:url -- <url> --draft <slug>`. The
     `--draft` flag records provenance as `draft:` frontmatter on the
     published file. If the script can't extract the full text (some sites
     render client-side), fill in the body by other means — the published
     corpus should hold the real text, and the piece often differs from the
     final draft.
2. **Update the draft's `README.md`**: set `status: published`, add
   `published_url`, `published_at`, and (if the title changed on the way
   out) `published_as`; bump `updated_at`. If the folder declares multiple
   manuscripts, also add `published_manuscript` with the filename selected
   for publication.
3. **Keep the draft folder.** Its notes, sources, and pre-publication
   manuscripts remain valuable context. Never delete it, and stop making
   substantial edits to the manuscript that was published — the published
   file is now the canonical text.
4. Commit with a message like `publish: three-plane-shift → An Almanac for
   the Age of Chaos`.

## Protocol: published/

Treat `published/` as an immutable-ish historical corpus. Do not rewrite
imported pieces. It exists so you can understand the writer's actual voice,
previous arguments, recurring metaphors, subjects already covered, and
intellectual development over time — read it often, edit it never.
New entries arrive via `npm run import:published`, not by hand.

## Protocol: the site (GitHub Pages)

`scripts/build-site.js` renders the whole repo into a static site with
client-side search, deployed to GitHub Pages by CI on every canonical push
to `main`. Like `generated/`, the site is derived and disposable: `site/` is
gitignored, never committed, and never edited by hand. To change how the
site looks or behaves, edit `scripts/build-site.js`. Preview locally with
`npm run build:site` and open `site/index.html`.

## Protocol: generated/ — do not write here

**Neither humans nor agents ever write to `generated/`.** It is rebuilt and
committed exclusively by CI after canonical content changes on `main`. Do not
run the build script and commit its output; do not hand-edit the JSON; do not
"fix" the indexes. If an index looks stale or wrong, fix the canonical
Markdown (or the generator in `scripts/`) and let CI regenerate. Reading
`generated/` is encouraged — it's built for you.

Because CI commits to `main` after your pushes, run `git pull --rebase`
before pushing.

## Conventions

- **Links between files:** ordinary relative Markdown links
  (`../captures/2026/08/foo.md`), which render on GitHub. No wiki-link
  syntax.
- **Dates:** ISO 8601 everywhere.
- **Frontmatter:** YAML, minimal, honest — omit what you don't know.
- **Validation:** `npm run validate` checks the corpus; CI runs it on every
  push. A useful capture with imperfect metadata beats a rejected capture.

## Commands

```bash
npm run validate          # check frontmatter, types, internal links
npm run build:indexes     # rebuild generated/ locally (for inspection only — don't commit it)
npm run build:site        # build the static site into site/ (gitignored; CI deploys it)
npm run import:published  # import new posts from feeds in plot.yml
npm run import:url -- <url> [--draft <slug>]  # import one published piece by URL
npm test                  # run the test suite
```
