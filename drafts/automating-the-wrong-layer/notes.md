# Notes

## Working thesis

Michael Hammer's 1990 instruction—do not automate inherited processes, obliterate them—assumed the redesigned process would be stable enough to justify rebuilding around it.

AI weakens that assumption. A transformation can select a sensible, valuable and technically feasible target whose half-life is shorter than its implementation and payback period.

The response is not better prediction. It is to distinguish invariants from choreography, isolate volatile assumptions behind change boundaries and make each project leave behind useful options if its original target expires.

The deepest transformation target may be the organization's cost of changing its mind.

## Core handles

**Target durability:** the likelihood that the reason a target matters survives changes in model capability, actor, interface and process long enough for the investment to pay back.

**Workflow half-life:** the time before enough of a workflow's assumptions decay that it becomes a different kind of work.

**Change boundary:** an interface around a design decision likely to change, allowing that decision to be replaced without redesigning the rest of the system.

Useful compression:

> A system of record earns its durability when it can support workflows that have not been designed yet.

> The transformation should not only deliver a better process. It should lower the cost of the next redesign.

## The durability tests

- **Model substitution:** If the model became ten times more capable, would this problem still matter?
- **Role substitution:** If the current team, agency or approver disappeared, could the organization still name the outcome and constraint?
- **Process substitution:** If the steps changed order or collapsed into one instruction, what information would still be required?
- **Target failure:** If the use case vanished, what data, interfaces, evaluations or understanding would remain valuable?

These tests do not produce eternal categories. Durability is relative to the investment horizon and the kinds of substitution plausibly arriving during it.

## Academic spine

- Hammer (1990): do not use technology to accelerate inherited process assumptions.
- Parnas (1972): do not decompose systems from a flowchart; isolate difficult decisions and decisions likely to change.
- Simon (1962): complex systems adapt through stable intermediate forms.
- Teece, Pisano and Shuen (1997): advantage under rapid technological change comes from the ability to integrate, build and reconfigure capabilities.
- Provost and Ipeirotis (2026): expected ROI should separate value, likelihood and investment; the riff adds target survival and uses option/understanding value as the residual payoff when a target decays.

## System-of-record connection

The earlier formulation—record stable, intent revisable, action replaceable—was too categorical. Records can preserve temporary choreography.

Example: `awaiting_legal_review` bakes a role, queue and sequence into the data model. Rights claims, evidence, policy version, risk threshold and decision are more durable because multiple future workflows can act on them.

The system-of-record argument remains useful as an architectural consequence of target durability, but is no longer the organizing spine of the riff.

## Distinction from existing pieces

- [Of Termites & Tokens](../../published/2026-06-08-of-termites-tokens.md) argues that automating an existing workflow is an efficiency and margin trap; AI can instead change throughput and organizational form.
- [An Almanac for the Age of Chaos](../../published/2026-07-30-an-almanac-for-the-age-of-chaos.md) argues that automating old marketing processes can mean making yesterday's marketing faster.
- [Model-Entry Bookkeeping](../company-world-model/) argues for modeling durable business events and state rather than merely indexing organizational residue.

This riff's distinct contribution is target selection under a moving capability frontier, plus the architectural response: build change boundaries and residual option value rather than a more permanent flowchart.

## Privacy boundary

The originating example came from a private internal discussion about a real transformation project. The public draft uses a generic composite media workflow. Do not add client names, meeting links, participant names, project-specific quantities or uniquely identifying implementation details.

## Possible titles

- How Durable Is the Target?
- The Target Can Decay
- The Flowchart Is an Inventory of Volatility
- Transform the Cost of Changing Your Mind
- What Will Still Be Valuable After We Are Wrong?
- The Half-Life of a Workflow

## Open questions

- Does “target survival” deserve to appear as a literal fourth term in the expected-ROI equation, or is the verbal extension enough?
- Is the four-substitution test too consultant-like, or does it make the provocation operational?
- Does the legal-review status example make the difference between choreography and constraint concrete enough?
- Should a later revision cut Simon or dynamic capabilities to keep Parnas as the single academic hinge?
- Is “what have we bought besides the corpse?” the right amount of heat?
