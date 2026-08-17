# Company World Model

## Raw Idea

Trigger: Leo Mehr's June 10, 2026 announcement about Ramp's Applied AI Solutions / AI services motion.

Initial thought:

> The version of AI transformation everyone is trying to do is ingesting Slack/Jira/docs etc. Building a company brain.
>
> But maybe a company world model is the more interesting thing. Skip the docs and the work, ingest the event stream of the business and derive everything else from that.

## Working Angle

Most "company brain" work starts with text artifacts: Slack, Jira, docs, tickets, meeting notes, PR threads. That is useful, but it mostly makes the organization queryable after the fact.

A company world model starts somewhere else: with the events that change the state of the business. A customer signs. An invoice gets rejected. A renewal slips. A support ticket escalates. A price exception is approved. A vendor payment is delayed. A feature ships. A usage cohort changes behavior.

The provocation: the docs are commentary on the business. The event stream is the business.

## Tensions

- Retrieval versus simulation: a company brain answers "what do we know?" A company world model should answer "what happens if?"
- Documents versus state: docs are written snapshots of interpretation; events are the transitions that let you reconstruct state.
- Knowledge work versus operating work: Slack/Jira/docs are the exhaust of work, but invoices, approvals, customer behavior, product usage, tickets, contracts, deployments, and GL changes are the work.
- Old boring ideas versus new AI leverage: event sourcing, process mining, digital twins, and ontologies have been around for years, but agents make the payoff different.

## Possible Titles

- Company World Models
- The Company Brain Is Too Small
- From Company Brain to Company World Model
- The Event Stream Is the Business

## Open Questions

- Is "world model" too technical, or usefully strange?
- Should the piece make a stronger Alephic/consulting point about implementation: where do you start, what events matter, how do you govern it?
- Is the punchline "skip the docs" or "derive the docs"? The latter feels more defensible.
- What is the first narrow use case: finance close, procurement exceptions, churn/renewal risk, support escalation, marketing attribution?
