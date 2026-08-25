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

A target is durable when the reason it matters survives a change in actor, tool, interface and sequence. It has a causal relationship to value or risk that does not depend on today's choreography.

That definition still has a problem, though. It treats each task as if it can be inspected alone.

It cannot.

## Jobs are bundles, but their value is O-ring shaped

In 1993, economist Michael Kremer published [“The O-Ring Theory of Economic Development”](https://academic.oup.com/qje/article-abstract/108/3/551/1881767). His model begins with production processes made from a series of tasks where a mistake in any one can dramatically reduce the value of the whole product. A company can have excellent product design, manufacturing and accounting and still fail because of bad marketing.

The point is not that every marketing workflow is the space shuttle. It is that tasks can be complements. The value of doing one task well depends on the quality of the tasks around it.

Most automation business cases quietly assume the opposite. They treat a job like an invoice with independent line items. Transcription costs this much. Editing costs that much. Copy and resizing cost something else. Automate seventy per cent of the hours and you have captured seventy per cent of the value.

But an O-ring process is closer to multiplication than addition:

> Workflow value ≈ outcome value × quality of task 1 × quality of task 2 × quality of task 3...

This changes how you think about the remaining work. Suppose AI absorbs transcription, editing, resizing and copy. Brand judgment and rights clearance remain. If failure in either can spoil the whole campaign, those tasks do not merely become the last twenty per cent. They become the quality ceiling and the speed limit for the entire bundle.

The bottleneck moves.

This is where O-ring theory meets the economics of jobs. David Autor, Frank Levy and Richard Murnane showed that technology [changes the composition of tasks inside occupations](https://economics.mit.edu/sites/default/files/publications/the%20skill%20content%202003.pdf), substituting for some tasks while complementing others. Erik Brynjolfsson, Tom Mitchell and Daniel Rock later found that [most occupations contain some machine-learnable tasks but few are fully automatable](https://www.aeaweb.org/articles?id=10.1257/pandp.20181019). Realizing the value usually requires redesigning the job itself.

Generative AI makes this redesign harder because its frontier is jagged. In one field experiment, consultants using AI performed better on tasks inside the frontier and worse on a task outside it—even though the tasks sat inside the same knowledge workflow. The researchers' conclusion was not simply “use AI.” It was to evaluate [different configurations of humans and AI task by task](https://doi.org/10.1287/orsc.2025.21838).

So a transformation target is not a workflow waiting to be automated. It is a hypothesis about how a bundle of tasks will be recomposed.

And “keep a human in the loop” is not a sufficient answer.

Lisanne Bainbridge described the [ironies of automation](https://doi.org/10.1016/0005-1098(83)90046-8) in 1983. Automating the normal work often leaves the operator monitoring the system and taking over during rare, abnormal conditions. The easy repetitions that built skill and situational awareness disappear. The remaining human work is less frequent, more difficult and more consequential.

That sounds uncomfortably like many AI operating models. Generate everything automatically, then ask a person to spot the unusual error, reconstruct the context and assume responsibility for the result.

The human review step can become the most fragile O-ring in the system.

## The flowchart is an inventory of volatility

In 1972, computer scientist D.L. Parnas published [“On the Criteria To Be Used in Decomposing Systems into Modules”](https://doi.org/10.1145/361598.361623). The paper contains a sentence that feels almost uncannily relevant to AI transformation: it is “almost always incorrect” to begin designing a system from a flowchart.

A flowchart divides the system according to the sequence of work: input, transform, approve, output. Parnas proposed a different decomposition. Start with the difficult design decisions and the decisions likely to change. Put a boundary around each one so that it can be replaced without forcing the rest of the system to change with it.

Most enterprise transformation projects do exactly what Parnas warned against. We hold a process-mapping workshop. We turn the boxes into workstreams, services, roles and product modules. We turn the arrows into APIs, tickets and status fields. Then we call the resulting fidelity “requirements.”

What if the flowchart is not the architecture?

What if it is an inventory of volatility?

In the media example, a status such as `awaiting_legal_review` quietly encodes a role, a queue and a sequence. It assumes that legal review is a place the asset travels through. A more durable record might contain the rights claims, the evidence for them, the policy version, the risk threshold and the resulting decision. Today that decision might be made by counsel inside a queue. Tomorrow it might be evaluated automatically with genuine exceptions sent to a specialist.

The durable thing is not the approval box. It is the constraint the box was trying to enforce, the evidence that it was enforced and the ability of a human to stay competent enough to intervene.

This complicates the current conversation about systems of record. [Matt Slotnick argues](https://mslotnick.substack.com/p/intention-is-all-you-need) that agentic organizations need to move from records to intentions, while [Garry Tan suggests](https://x.com/garrytan/status/2091742825042030681) that systems of record must become AI harnesses. Both feel directionally right. But a harness organized around today's task decomposition can be as brittle as the workflow it automates.

A system of record earns its durability when it can support task bundles that have not been designed yet.

## Audit the rebundling hypothesis

Foster Provost and Panos Ipeirotis recently proposed a useful framework for [choosing which AI products to implement](https://arxiv.org/abs/2607.23733). Their expected-ROI model separates how valuable a product would be if it worked, how likely it is to work and what investment it would require.

I want to pencil a fourth question into the margin:

**How likely is the target—and its proposed task bundle—to survive long enough for the investment to pay back?**

You could turn this into a practical Target Durability Audit. Take a proposed transformation and ask five things:

1. **What is the outcome?** State the customer or business change without naming the current workflow, team or tool.
2. **What is the bundle?** Decompose the job into production, inference, judgment, coordination and verification tasks. Mark which tasks are complements: where does one failure spoil the result?
3. **Where does the bottleneck move?** Remove the tasks AI can perform now, then again under a plausible frontier jump. What becomes the new quality ceiling, queue or point of failure? Can the people left there maintain the context and skill to do it?
4. **What survives three futures?** Stress the design against modest model improvement, a large capability jump and a change in customer behavior, channel or policy. Do not choose the best project for one forecast. Choose an action that remains useful across several.
5. **What do we own after we are wrong?** Identify the reusable data, permissions, evaluations, interfaces and understanding left behind if the original use case expires.

This last step follows the logic of [robust decision making](https://www.rand.org/pubs/research_reports/RR2735.html): under deep uncertainty, stop optimizing for a single best-guess future and look for near-term actions that perform satisfactorily across many.

The audit would sort projects into five shapes:

- **Foundation:** durable outcome, resilient task bundle and replaceable action layer. Build it.
- **Wedge:** fragile bundle, but short implementation and fast payback. Time-box it.
- **Option:** fragile direct target, but strong residual data, evaluations or learning. Fund it as an experiment, not a transformation.
- **Rebundle:** automation leaves a dangerous, overloaded or de-skilled O-ring. Redesign the human/AI configuration before funding the larger system.
- **Fossil:** slow payback, brittle choreography and little residual value. Redesign it or stop.

This does not require correctly predicting what models will do in eighteen months. It requires being explicit about which future your investment depends on—and what happens to the rest of the bundle if one task suddenly becomes free.

## Transform the cost of changing your mind

The goal is not to discover the one true future workflow and build it. The goal is to create stable intermediate forms around an unstable task bundle: canonical objects, explicit constraints, measurable outcomes, versioned policies, provenance, evaluations and interfaces that allow the action layer to be replaced.

The transformation should not only deliver a better process. It should lower the cost of the next redesign.

Hammer's instruction for 1990 was: don't automate, obliterate.

Maybe the update for 2026 is: do not automate the workflow. Audit the rebundling hypothesis. Isolate what changes. Preserve what lets you steer. Design so that the next obliteration is cheap.

Before funding a transformation, ask how durable the target is.

Then ask the more uncomfortable O-ring question:

**After we automate the obvious work, which failure are we making more important?**
