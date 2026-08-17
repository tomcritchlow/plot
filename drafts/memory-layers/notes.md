# Memory Layers Notes

## Working Thesis

AI models have two useful memory layers today:

1. Live retrieval / grounding at inference time.
2. Trained model weights / parametric memory.

Humans have richer memory strata, including active working memory and consolidation between immediate perception and durable learning. AI systems need a similar middle layer: precomputed, maintained, source-aware understanding that sits between live retrieval and training.

## Proposed AI Memory Stack

Layer 1: live retrieval

- Web search, Web IQ, RAG, tools, database lookup.
- Fresh, sourceable, inspectable.
- Weakness: must retrieve the right thing at the moment of need.

Layer 2: prepared understanding / middle memory

- Not really built as a general layer yet.
- Knowledge graphs, entity resolution, claim ledgers, source reputation, timelines, source-aware summaries, concept maps, contradiction trackers.
- Precomputed reasoning before the user asks a question.
- Useful for domains that change, but not randomly.

Layer 3: training / parametric memory

- Model weights, skills, concepts, language, broad world knowledge.
- Fast and powerful, but hard to update, cite, or govern.

## Possible Handles

- The Missing Middle Memory
- Prepared Understanding
- Memory at Different Speeds
- Search Becoming Understanding
- The Layer That Has Already Done Some Thinking
- Window, Table, Basement
- The Missing Table

## Provocations

- RAG retrieves evidence for a question. Middle memory maintains understanding before the question arrives.
- The next AI infrastructure problem is not only better search or bigger context, but deciding what deserves to become which kind of memory.
- Web IQ is layer one done properly for agents, not layer two. Its evidence objects become more interesting when they accumulate.
- Training is too deep for fast-changing facts. Search is too shallow for accumulated understanding.
- Humans have a window, a table, and a basement. AI has the window and the basement, but not the table.
- Machine memory needs forgetting and revision, not only storage and recall.

## Open Questions

- What are the primitives of middle memory: entities, claims, events, sources, concepts, contradictions, preferences, decisions?
- Who is allowed to write to this memory layer?
- How does a claim get promoted, demoted, expired, or contradicted?
- How much of this should be global web infrastructure versus company-specific memory?
- Is GraphRAG a precursor, or just a project-level pattern?
- How does Brian's "remembering futures" frame change the piece from storage architecture to memory as revision / forgetting?
