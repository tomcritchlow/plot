# Notes

## Editorial checkpoint — 2026-09-05

**Argument:** Every inherited boundary must justify its cost under the new conditions.

**This pass:** Preserved the original draft.md as requested. Edited Every Handoff Is a Claim: process mapping is useful; mistaking it for a specification is the failure. Ford retained controls, software changed boundaries before AI, and independent checks can deserve to remain. Replaced the readiness equation with a qualitative matrix. Removed unvalidated summed thresholds from the companion audit and its chatbot prompt.

**Boundary / decision to preserve:** Keep the two named treatments as alternatives. Do not overwrite the protected original or present this pass as choosing a winner. The analytical treatment owns payback and bottleneck migration; the handoff treatment owns organizational separation.

**Next useful move:** Run the companion audit on a generic or already-cleared example. Record the decision it changes and where its categories overlap. Do not reintroduce numerical funding cutoffs without validation.

The earlier notes below remain a record of development; where they conflict with this checkpoint, use this checkpoint for the current editorial direction.


## Working thesis

Michael Hammer's 1990 instruction—do not automate inherited processes, obliterate them—assumed the redesigned process would be stable enough to justify rebuilding around it.

AI weakens that assumption. A transformation can select a sensible, valuable and technically feasible target whose half-life is shorter than its implementation and payback period.

The response is not better prediction. It is to treat the project as a rebundling hypothesis, model task complementarities and bottleneck migration, isolate volatile assumptions behind change boundaries and make each project leave behind useful options if its original target expires.

The deepest transformation target may be the organization's cost of changing its mind.

## Core handles

**Target durability:** the likelihood that the reason a target matters survives changes in model capability, actor, interface and process long enough for the investment to pay back.

**Workflow half-life:** the time before enough of a workflow's assumptions decay that it becomes a different kind of work.

**Change boundary:** an interface around a design decision likely to change, allowing that decision to be replaced without redesigning the rest of the system.

**Rebundling hypothesis:** the proposition that a particular future configuration of human, AI and system tasks will produce a valuable outcome for long enough to repay the investment.

**O-ring task:** a task whose failure destroys or materially reduces the value of the whole output. Automation can make a remaining task more important by increasing its volume or making it the new quality ceiling.

**Bottleneck migration:** the movement of the workflow's speed limit, quality ceiling or dominant failure point after technology substitutes for other tasks.

Useful compression:

> A system of record earns its durability when it can support task bundles that have not been designed yet.

> The transformation should not only deliver a better process. It should lower the cost of the next redesign.

> A transformation target is not a workflow waiting to be automated. It is a hypothesis about how a bundle of tasks will be recomposed.

> The human review step can become the most fragile O-ring in the system.

## The durability tests

- **Model substitution:** If the model became ten times more capable, would this problem still matter?
- **Role substitution:** If the current team, agency or approver disappeared, could the organization still name the outcome and constraint?
- **Process substitution:** If the steps changed order or collapsed into one instruction, what information would still be required?
- **Target failure:** If the use case vanished, what data, interfaces, evaluations or understanding would remain valuable?

These tests do not produce eternal categories. Durability is relative to the investment horizon and the kinds of substitution plausibly arriving during it.

## Academic spine

- Hammer (1990): do not use technology to accelerate inherited process assumptions.
- Kremer (1993): in O-ring production, the quality of complementary tasks is multiplicative; failure in one task can dramatically reduce the whole product's value.
- Autor, Levy and Murnane (2003): technology changes the task composition of jobs by substituting for some tasks and complementing others.
- Brynjolfsson, Mitchell and Rock (2018): most occupations contain machine-learnable tasks but few are fully automatable; realizing the value usually requires job redesign.
- Dell'Acqua et al. (2026): AI's capability frontier is jagged even inside one knowledge workflow, so human/AI configurations must be evaluated task by task.
- Bainbridge (1983): automating normal operation can leave humans with rare, difficult monitoring and takeover work while their skills and situational awareness deteriorate.
- Parnas (1972): do not decompose systems from a flowchart; isolate difficult decisions and decisions likely to change.
- Provost and Ipeirotis (2026): expected ROI should separate value, likelihood and investment; the riff adds target survival and uses option/understanding value as the residual payoff when a target decays.
- Robust Decision Making: under deep uncertainty, seek near-term actions that perform satisfactorily across a wide range of plausible futures rather than optimizing for one best guess.

## System-of-record connection

The earlier formulation—record stable, intent revisable, action replaceable—was too categorical. Records can preserve temporary choreography.

Example: `awaiting_legal_review` bakes a role, queue and sequence into the data model. Rights claims, evidence, policy version, risk threshold and decision are more durable because multiple future workflows can act on them.

The system-of-record argument remains useful as an architectural consequence of target durability, but is no longer the organizing spine of the riff. The O-ring argument sharpens it: a durable record must support future task bundles and preserve enough evidence and context for the residual human O-rings to work.

## Target Durability Audit

The companion [target-durability-audit.md](target-durability-audit.md) turns the argument into a CMO interview and a chatbot-ready prompt.

The audit deliberately does not ask “what percentage of this job can AI automate?” It asks:

1. What outcome survives the current workflow?
2. What tasks form the bundle?
3. Which tasks are O-rings?
4. Where does the bottleneck migrate after substitution?
5. Does the design remain useful under frontier creep, a frontier jump and a market shift?
6. What assets survive if the direct target expires?

The five classifications are Foundation, Wedge, Option, Rebundle and Fossil. Rebundle is an override for projects where automation creates a dangerous residual human/AI bottleneck.

## Distinction from existing pieces

- [Of Termites & Tokens](../../published/2026-06-08-of-termites-tokens.md) argues that automating an existing workflow is an efficiency and margin trap; AI can instead change throughput and organizational form.
- [An Almanac for the Age of Chaos](../../published/2026-07-30-an-almanac-for-the-age-of-chaos.md) argues that automating old marketing processes can mean making yesterday's marketing faster.
- [Model-Entry Bookkeeping](../company-world-model/) argues for modeling durable business events and state rather than merely indexing organizational residue.

This riff's distinct contribution is treating transformation as a rebundling hypothesis under a moving capability frontier, plus the architectural response: build change boundaries and residual option value rather than a more permanent flowchart.

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

- Is “O-ring shaped” familiar enough to carry the section heading, or should the model be explained without the label there?
- Does “which failure are we making more important?” become the strongest ending, or is “what remains valuable after we are wrong?” still the larger question?
- Does the legal-review status example make the difference between choreography and constraint concrete enough?
- Is the five-step audit in the prose too much apparatus, or does it make the riff earn its practical conclusion?
- Should the next iteration prototype the chatbot against one real transformation case before the scoring thresholds harden?

## Alternative treatment: Every Handoff Is a Claim

[Every Handoff Is a Claim](every-handoff-is-a-claim.md) starts from the same Hammer provocation but gives the argument a more pointed spine:

- A workflow is a fossil record of old information costs.
- Every handoff is a claim that two parts of the work must remain separate.
- Process information when it is generated; preserve evidence, not documentary exhaust.
- AI makes specialist capabilities callable, so jobs can compress around outcomes.
- In an era of ferment, the winning architecture is not a fixed future-state workflow. It is a cheaper ability to rebundle again.
- Compare unnecessary boundary removal with recomposability as qualitative axes; do not multiply them into a readiness score.

The distinction is useful. *How Durable Is the Target?* focuses on task bundles, O-rings and whether a transformation target survives until payback. *Every Handoff Is a Claim* focuses on organizational boundaries as inherited claims and gives the reader three tests: the zero-legacy counterfactual, the capability-jump counterfactual and the preservation test.
