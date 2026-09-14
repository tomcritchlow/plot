# Story spines

A story spine is the shortest useful version of an essay's argument: enough
structure, evidence and tension for the writer to start writing in their own
words. It shows how the story moves, not just what topics it covers.

Every draft project has one `story-spine.md`, alongside its brief,
manuscripts, notes and sources. It is a canonical working document, maintained
by the writer and agents—not generated from the manuscript during a build.

## The shape

Aim for **300–600 words**, readable in a couple of minutes. This is an
editorial guide, not a word-count gate. An early idea can be shorter. A
deliberate list essay can retain its numbered claims instead of being forced
into a conventional arc.

1. **Premise:** one sentence naming the essay's central claim or question.
2. **Basis:** links to the manuscript(s), relevant checkpoint and sources,
   plus the date the spine was last revised. State whether it follows a
   treatment, proposes a synthesis, or summarizes a publication.
3. **Beats:** usually five to eight numbered moves. Use short headings that
   state a claim or turn, with one to three compact bullets beneath each.
   Attach the example, source link or quotation to the move it supports.
4. **Landing:** the change in understanding, practical question or image
   the reader leaves with. Keep an exact ending line if it earns its place.
5. **Open:** one to three unresolved decisions, missing examples or evidence
   gaps. An unfinished argument should still look unfinished.

There is no required “once upon a time” formula. A beat can establish a scene,
explain a mechanism, introduce evidence, turn an assumption, confront an
objection or draw a consequence. The sequence should make the next move feel
necessary. If headings can be shuffled without changing the argument, the
spine is probably a topic list.

## Writing rules

- Use fragments and bullets. Do not write miniature paragraphs of finished
  prose or reproduce every section of the manuscript.
- Preserve the few links and exact lines that carry the story. Usually two
  to four keeper lines are enough. Label the writer's wording **Keep (draft)**
  or **Keep (published)**; label an external quotation with its actual author
  and source. Never turn a paraphrase into a quotation.
- Keep citations at the relevant beat. The full research trail stays in
  `sources.md`; loose alternatives and discarded paths stay in `notes.md`.
- Preserve evidence status: observation, hypothesis, analogy, proposed test,
  historical example or forecast. Do not upgrade a source lead into a
  verified finding or invent autobiographical detail to fill a beat.
- Carry forward the latest editorial checkpoint and the writer's decisions.
  Do not resurrect a discarded frame just because it appears in older notes.
- A spine may expose a contradiction between treatments. Record the fork
  briefly; do not silently choose a winner. Merge only when the writer has
  asked for a synthesis or the shared argument is already settled.
- Retain the repository's privacy boundaries. A spine is public wherever
  the rest of the draft package is public.

## How the files work together

| File | Job |
| --- | --- |
| `README.md` | Brief: purpose, status and navigation |
| `story-spine.md` | Ordered argument the writer can write from |
| `draft.md` and named manuscripts | Prose treatments |
| `notes.md` | Alternatives, decisions, objections and editorial history |
| `sources.md` | Provenance and research trail |

Link the spine from the draft's README. Do not list it under `manuscripts`:
it is a working file, not another prose treatment. No special frontmatter
is required; use a descriptive H1 so search results identify the project.

Read the spine early when resuming a draft. After changing the thesis, order,
key evidence or landing, update it in the same commit as the substantive
revision. Line edits alone do not require a spine rewrite. Updating a spine
does not authorize rewriting a protected manuscript.

For a published draft archive, freeze the spine with the publication. When
adding one retrospectively, derive it from the published text, label it
retrospective and leave both the publication and historical manuscript intact.

The site renders the Markdown as `story-spine.html`, includes it in search,
and labels it **Story spine** among the draft's working files. Keep generated
indexes and built pages under CI ownership.

## Starter

Copy this into a new draft folder, replace every placeholder and delete
unused scaffolding. A live spine should contain the actual argument.

```markdown
# Story spine: Working title

**Premise:** One sentence.

**Basis:** [Manuscript](draft.md), [notes](notes.md), [sources](sources.md).
Updated YYYY-MM-DD. State the treatment or synthesis if needed.

## Beats

### 1. The opening tension

- Concrete scene, question or contradiction.
- Supporting example or source; why it leads to the next beat.

### 2. The first turn

- What the reader now needs to understand.
- Evidence, mechanism or objection, with its link.

<!-- Continue only as many beats as the argument needs. -->

## Landing

- What has changed for the reader.

**Keep (draft):** “An exact line, if there is one worth preserving.”

## Open

- The most important unresolved decision or missing evidence.
```

## Examples

- [Automating the Wrong Layer](drafts/automating-the-wrong-layer/story-spine.md):
  synthesis of two treatments.
- [The Missing Middle Memory](drafts/memory-layers/story-spine.md):
  one argument and a concrete proposed test.
- [Things I Think About AI](drafts/things-i-think-about-ai/story-spine.md):
  a twelve-claim list retaining its original form.
