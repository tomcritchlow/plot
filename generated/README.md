# generated/

Everything in this directory is **derived** from the canonical Markdown in
`captures/`, `seeds/`, `drafts/` and `published/`. It is safe to delete and
fully reconstructable with:

```bash
npm run build:indexes
```

**Do not edit or commit files here — humans and agents included.** CI rebuilds
and commits this directory automatically when canonical content changes on
`main` (see `.github/workflows/indexes.yml`). If an index is wrong, fix the
canonical Markdown or the generator in `scripts/`, never the JSON.

| File | Contents |
| --- | --- |
| `captures.json` | Normalized metadata for every capture |
| `links.json` | Every external URL in the corpus, deduplicated by normalized URL, with all references |
| `quotes.json` | Every quote capture with provenance and commentary |
| `backlinks.json` | Which files link to which, from ordinary Markdown links |
