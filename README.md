# Plot

**Your writing shouldn't belong to an app.**

Plot is a GitHub repository template for your ideas, sources, drafts and
published work — designed from the beginning to be worked on with AI agents.

Fork it. Clone it. Talk to it with whatever agent you prefer. The Markdown
remains yours.

> The repository is the writer's persistent intellectual home.
> Models and interfaces are disposable clients.

There is no app here. No database, no server, no API keys, no sync engine.
Just plain Markdown files, Git as the event log, and a protocol
([`AGENTS.md`](AGENTS.md)) that any capable agent can read and follow.

## How it works

Instead of `phone → app → API → database → sync`, capture looks like this:

> **You:** Save this thought to Plot: maybe organizations need clocks more
> than they need better models.
>
> **Agent:** *creates `captures/2026/08/2026-08-17-132031-company-clocks.md`
> and commits it.*

Other things you can say to any agent with access to this repo:

- *"Save this article, it's relevant to organizational coordination: https://…"*
- *"Save this quote — it reminds me of the clocks idea."*
- *"What have I captured recently about agents?"*
- *"Are there captures that should become a seed?"*
- *"Help me work on the clock draft — check my captures and published stuff first."*

## The lifecycle

```text
CAPTURES
   │
   │ things you notice and think
   ▼
SEEDS
   │
   │ ideas that acquire gravity
   ▼
DRAFTS
   │
   │ ideas being made public
   ▼
PUBLISHED
   │
   └───────────────┐
                   │
                   ▼
           future agent context
```

Publishing isn't an endpoint. Your published corpus feeds back in: agents
read it to learn your voice, your previous arguments, and what you've already
said — so future thinking builds on it instead of repeating it.

## The shape of the repo

```text
captures/YYYY/MM/   raw material: thoughts, links, quotes (append-only)
seeds/              ideas that deserve their own evolving document
drafts/<slug>/      writing projects (README, manuscripts, notes, sources)
published/          your published corpus, imported from your RSS feed
generated/          derived JSON indexes — written ONLY by CI, never by hand
scripts/            plain Node tooling (validate, index, import)
AGENTS.md           the operating protocol every agent reads first
plot.yml            configuration (your name, your feeds)
```

Three capture types, one primitive: **create a file, commit it.** A capture
never edits another file, so capture from any device or agent is
merge-conflict-free by construction.

## Getting started

1. **Use this template** (or fork/clone it).
2. **Allow Actions to commit:** in your repo, *Settings → Actions → General →
   Workflow permissions* → select **Read and write permissions**. This lets
   CI commit rebuilt indexes and imported posts. No secrets are needed.
3. **Point it at your writing:** edit `plot.yml` with your name and RSS/Atom
   feed(s), then run `npm install && npm run import:published` (or trigger
   the *Import published writing* action).
4. **Delete the example content** — it exists so you can see the shapes:
   - `captures/2026/08/*` (three example captures)
   - `seeds/company-clocks.md`
   - `drafts/company-with-the-best-clock/`
   - `published/2025-11-04-organizations-have-tempo.md`
5. **Connect an agent.** Anything that can read the repo and commit works:
   Claude Code or Codex on your machine, a web/mobile agent with GitHub
   access, etc. The agent learns everything it needs from `AGENTS.md`.

The practical test of this whole idea is capture-in-the-moment, so it's worth
setting up one path that works from your phone (for example, a Claude or
ChatGPT app connected to GitHub) and telling it once: *"read AGENTS.md in my
plot repo."*

## Commands

```bash
npm run validate          # check frontmatter, capture types, internal links
npm run build:indexes     # rebuild generated/ from canonical Markdown
npm run build:site        # build the static site view into site/ (gitignored)
npm run import:published  # import new posts from your feeds
npm run import:url -- <url> [--draft <slug>]  # import one published piece by URL
npm test                  # run the test suite
```

`generated/` is disposable: delete it, run `npm run build:indexes`, and it is
recreated exactly. Locally it's for inspection only — CI owns committing it.

## Design principles

1. Plain files are canonical — the corpus stays legible without this software
2. Git is the event log — no separate versioning system
3. Capture is append-only — one new file, zero merge-conflict risk
4. Derived data is disposable — `generated/` can always be rebuilt
5. Agents organize; humans think — no required tags or filing at capture time
6. Provenance matters — sources keep their URLs and metadata
7. No external infrastructure — GitHub is the only dependency
8. AI is optional — everything works as ordinary Markdown without any agent

A draft folder represents one underlying idea or writing project, not one
file. `draft.md` is its default manuscript. When the same idea deserves a
genuinely different treatment, give that manuscript a semantic filename and
list both files under `manuscripts` in the folder's `README.md` frontmatter.
Their order is the preferred display order:

```yaml
manuscripts:
  - draft.md
  - every-handoff-is-a-claim.md
```

The site presents them together as treatments of the same idea. Do not use
`draft-v2.md`: ordinary revisions belong in Git history, while multiple
manuscripts are for meaningfully different arguments, structures or audiences.

## The site

CI builds a read-only static site of the whole repo — browsable captures,
seeds, drafts and published work, with client-side search and navigation
between alternate manuscript treatments — and deploys it to GitHub Pages on
every push to `main`. Enable it once in *Settings →
Pages → Source: GitHub Actions*. The site is a disposable view, exactly like
`generated/`: it is never committed, and everything on it renders from the
canonical Markdown. Note that it renders everything public in the repo,
drafts included.

## Known limitations (V1, deliberately)

- No web/mobile capture UI — the conversational protocol *is* the interface
- No semantic search, embeddings, or database — `rg`, GitHub search, agents,
  and the generated indexes are the search layer
- Full-text extraction for excerpt-only feeds is best-effort by design
- Single writer, single repo
