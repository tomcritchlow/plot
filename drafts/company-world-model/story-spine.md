# Story spine: Model-Entry Bookkeeping

**Premise:** Agents need operational memory that distinguishes what was said, what became authorized and what happened.

**Basis:** [Current manuscript](draft.md), [editorial checkpoint](notes.md), [source notes](sources.md). Updated 2026-09-14.

## Beats

### 1. Three accurate documents can still leave the company confused

- Illustrative opening: sales records a launch promise; engineering records a dependency; finance records expected revenue.
- Retrieval finds all three. Someone still has to reconcile whether the promise can be kept. [Ramp's June 2026 announcement](https://www.prnewswire.com/news-releases/ramp-launches-applied-ai-solutions-helping-enterprises-deploy-ai-agents-across-finance-operations-302796179.html) supplies the historical trigger.

### 2. The ledger offers a stronger memory precedent

- Entries classify changes, preserve evidence and constrain the resulting account.
- Business extension: commitments, exceptions, approvals and outcomes should update a maintained representation, not merely add searchable text.

**Keep (draft):** “A Slack thread can say anything. A ledger has to balance.”

### 3. Memory needs receipts

- Who recorded or approved the change? Which policy applied? What changed afterward? Can a mistaken interpretation be reversed?
- Derive useful documents as views; do not let recurring exceptions silently rewrite an authorized policy.

**Keep (draft):** “The receipt is the bridge between memory and authority.”

### 4. Recorded state is useful—and incomplete

- [Event sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) reconstructs recorded state; [process mining](https://openresearch.surrey.ac.uk/esploro/outputs/conferenceProceeding/Process-Mining-Manifesto/99862164502346) examines recorded processes.
- Events show what systems noticed. Missing promises, rejected opportunities and informal reasons remain outside the log. Replay alone does not identify causation.

### 5. Take the verbs seriously

- [World Models](https://arxiv.org/abs/1803.10122) supplies an analogy; [Palantir's Ontology](https://www.palantir.com/docs/foundry/ontology/overview) supplies an operational precedent for objects, actions and permissions.
- Approve, reject, renew, refund and reverse matter alongside accounts, documents and owners. A business model needs rules for what each change is allowed to mean.

### 6. Follow one commitment through authority and outcome

- Hypothetical renewal: salesperson proposes a discount; finance approves; customer declines.
- Preserve all three states. “Renewed at a discount” would be a false memory with operational consequences.

### 7. Govern what enters the model

- Define meaningful events, authorized writers, corrections, review and retention.
- Model the business where action matters; more employee surveillance is not a substitute for understanding.

## Landing

- Start with one kind of commitment. Can the company explain each transition and correct a mistake without erasing evidence?

**Keep (draft):** “A ledger has to balance. A company model should at least have to answer back when its stories do not.”

## Open

- Replace the hypothetical renewal with public or cleared artifacts and an actual correction.
- Keep causal claims separate from state reconstruction; [Middle Memory](../memory-layers/story-spine.md) owns belief revision.
