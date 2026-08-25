# How Durable Is the Target?

In July 1990, Michael Hammer published an essay with the wonderfully blunt title [“Reengineering Work: Don't Automate, Obliterate”](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate).

Most management essays from 1990 now feel like period pieces. This one keeps sounding new.

Hammer's complaint was that companies were using computers to accelerate inherited processes. They took work designed around paper, departments and human limitations, then encoded the same assumptions into software. The process got faster. The process also got harder to question.

His provocation was to stop asking how technology could improve the process and ask why the process existed at all.

Thirty-six years later, generative AI makes this question more urgent and more difficult. The technology is no longer only changing how quickly a step can be performed. It is changing what counts as a step, which steps belong together and sometimes whether the workflow remains a useful unit of analysis at all.

Hammer told us not to automate the old process.

But what if the newly reengineered process is temporary too?

## The target can decay

Imagine a fairly ordinary media workflow. A recording enters the organization. Someone makes a transcript. Someone else cuts the long version. Other people make shorter formats, captions, thumbnails and copy. Files move between editors, agencies, legal reviewers, brand managers and channel owners. Each handoff creates a status. Each status creates an approval. Each approval creates another little piece of project management.

Draw it on a whiteboard and the arrows multiply very quickly.

This is exactly the kind of mess that produces a large transformation project: build a source of truth, give every task an owner, connect the asset library to the project-management system, automate the handoffs and make the whole machine visible.

Thousands of hours later, you may have successfully transformed a workflow that no longer needs to exist.

If a model can eventually take the source recording, generate the appropriate variants, check them against policy, route genuine exceptions and learn from what performs, then the target “coordinate twelve production steps” has a short half-life.

But some things inside it remain stubbornly important. The source recording. Who owns it. What claims can be made. Which audience the work is for. What the brand is trying to achieve. What was published. What happened afterward. The machinery between these things can change while the need to know them survives.

This is the distinction I was reaching for in the first version of this draft, but “record should be stable; action should be replaceable” is too neat. Records can encode temporary assumptions. Intentions change. A status that looks like organizational scar tissue may exist because of a real legal constraint.

Durability is not a property of nouns.

A target is durable when the reason it matters survives a change in actor, tool, interface and sequence. It has a causal relationship to value or risk that does not depend on today's choreography.

Perhaps you can test this with four substitutions:

- **Model substitution:** If the model became ten times more capable, would this problem still matter?
- **Role substitution:** If the current team, agency or approver disappeared, could we still name the outcome and the constraint?
- **Process substitution:** If the steps happened in a different order—or collapsed into one instruction—what information would still be required?
- **Target failure:** If the original use case vanished, what data, interfaces, evaluations or understanding would remain valuable?

The point is not to classify every part of the organization into eternal and temporary buckets. Nothing is eternal. The point is to stop giving every assumption the same architectural weight.

## The flowchart is an inventory of volatility

In 1972, computer scientist D.L. Parnas published [“On the Criteria To Be Used in Decomposing Systems into Modules”](https://doi.org/10.1145/361598.361623). The paper contains a sentence that feels almost uncannily relevant to AI transformation: it is “almost always incorrect” to begin designing a system from a flowchart.

A flowchart divides the system according to the sequence of work: input, transform, approve, output. Parnas proposed a different decomposition. Start with the difficult design decisions and the decisions likely to change. Put a boundary around each one so that it can be replaced without forcing the rest of the system to change with it.

Most enterprise transformation projects do exactly what Parnas warned against. We hold a process-mapping workshop. We turn the boxes into workstreams, services, roles and product modules. We turn the arrows into APIs, tickets and status fields. Then we call the resulting fidelity “requirements.”

What if the flowchart is not the architecture?

What if it is an inventory of volatility?

In the media example, a status such as `awaiting_legal_review` quietly encodes a role, a queue and a sequence. It assumes that legal review is a place the asset travels through. A more durable record might contain the rights claims, the evidence for them, the policy version, the risk threshold and the resulting decision. Today that decision might be made by counsel inside a queue. Tomorrow it might be evaluated automatically with genuine exceptions sent to a specialist.

The durable thing is not the approval box. It is the constraint the box was trying to enforce and the evidence that it was enforced.

This complicates the current conversation about systems of record. [Matt Slotnick argues](https://mslotnick.substack.com/p/intention-is-all-you-need) that agentic organizations need to move from records to intentions, while [Garry Tan suggests](https://x.com/garrytan/status/2091742825042030681) that systems of record must become AI harnesses. Both feel directionally right. But a harness organized around today's task decomposition can be as brittle as the workflow it automates.

A system of record earns its durability when it can support workflows that have not been designed yet.

## Add target survival to expected ROI

Foster Provost and Panos Ipeirotis recently proposed a useful framework for [choosing which AI products to implement](https://arxiv.org/abs/2607.23733). Their expected-ROI model separates three questions that companies often muddle together: how valuable the product would be if it worked, how likely it is to work and what investment it would require.

I want to pencil a fourth question into the margin:

**How likely is the target to survive long enough for the investment to pay back?**

A project can have high value, high likelihood of technical success and tolerable cost while still pointing at a problem with a short half-life. The ordinary value calculation assumes that the target remains recognizable through implementation and payback. Under rapid capability change, that assumption needs its own rating.

Call it target survival. Roughly:

> Effective eROI rises with value, likelihood of success and target survival—and falls with investment.

This does not mean fragile targets should never be funded. It changes the shape of the bet. A short-lived target needs a short implementation, a fast payback or substantial residual value. The Provost–Ipeirotis framework already gives option value and understanding value a place in the calculation. Target durability makes those more than nice secondary benefits. They become the answer to a project obituary:

> If this use case is dead in eighteen months, what have we bought besides the corpse?

Perhaps the answer is a clean source of operational data, a reusable permission model, an evaluation system, a stable interface, a better understanding of customer behavior or the organizational ability to deploy the next model quickly. Good. Those are investments in the next target as well as this one.

If the answer is a highly customized orchestration of roles that no longer exist, the target was probably too fragile for the size of the bet.

## Transform the cost of changing your mind

There is an older academic language for this too. Herbert Simon's [“The Architecture of Complexity”](https://www2.econ.iastate.edu/tesfatsi/ArchitectureOfComplexity.HSimon1962.pdf) argued that complex systems evolve more successfully when they contain stable intermediate forms: useful subassemblies that survive while the larger system changes around them. And the [dynamic-capabilities literature](https://doi.org/10.1002/(SICI)1097-0266(199708)18:7%3C509::AID-SMJ882%3E3.0.CO;2-Z) shifted strategy away from owning the perfect bundle of resources and toward a firm's ability to integrate, build and reconfigure them as the environment moves.

Put these together and transformation starts to look different.

The goal is not to discover the one true future workflow and build it. The goal is to create stable intermediate forms around an unstable process: canonical objects, explicit constraints, measurable outcomes, versioned policies, provenance, evaluations and interfaces that allow the action layer to be replaced.

The transformation should not only deliver a better process. It should lower the cost of the next redesign.

That may be the most durable target available: not the workflow, but the organization's ability to change the workflow without starting over.

Hammer's instruction for 1990 was: don't automate, obliterate.

Maybe the update for 2026 is: don't automate the workflow. Don't even assume its replacement will survive. Isolate what changes. Preserve what lets you steer. Design so that the next obliteration is cheap.

Before putting a workflow on rails, ask how durable the target is.

But perhaps the more useful question is: **what will still be valuable after we are wrong?**
