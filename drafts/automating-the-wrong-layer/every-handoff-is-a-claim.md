# Every Handoff Is a Claim

The most dangerous sentence in an AI transformation project is: “First, let's map the current process.”

Once the flowchart exists, it develops a strange gravity. Every box asks for a copilot. Every arrow asks for an integration. Every queue asks for an agent. The current org chart quietly becomes the architecture of the new system.

This is how yesterday's organization becomes tomorrow's software.

In 1990, Michael Hammer published [“Reengineering Work: Don't Automate, Obliterate”](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate). The essay is remembered as an argument for radical process redesign. But its sharper idea is about separation.

At Ford, accounts payable reconciled three different descriptions of the same event: what the company ordered, what the supplier invoiced and what the receiving department said had arrived. Ford initially looked for a better way to process invoices. The breakthrough was to make the invoice unnecessary. When the goods arrived, the receiving department recorded the information at its source. If the receipt matched the purchase order, the system could authorize payment.

It did not make reconciliation faster. It removed the separation that created reconciliation.

At Mutual Benefit Life, an application travelled through dozens of steps, several departments and many specialist hands before a policy could be issued. The redesigned process gave one case manager responsibility for the application, supported by shared information and expert systems.

The old jobs did not each get a little faster. The work compressed into one.

These examples feel newly relevant because much of today's AI transformation work is doing exactly what Hammer warned against. We assign an agent to each role, automate the exchange between them and celebrate that the old bureaucracy now runs at machine speed.

Digitized bureaucracy is still bureaucracy.

## The workflow remembers old prices

A process is not a neutral description of how work gets done. It is a fossil record of the constraints that existed when the work was designed.

Information was expensive to copy, so each department kept its own representation. Expertise was difficult to distribute, so unusual decisions moved upward to specialists. Communication was slow, so work accumulated in queues. Managers existed partly to route information between people who could not see the whole. Approvals compensated for missing context, weak measurement and narrow authority.

Those arrangements may have been perfectly rational.

But every boundary inside them contains a claim.

A handoff claims that the work on either side must remain separate. An approval claims that judgment cannot live where the information is generated. A queue claims that waiting is cheaper than resolving the case now. A status field claims that the people doing the work cannot share its state directly.

Some of these claims are still true. A regulator may require independent review. A financial commitment may need separation of duties. A genuinely rare problem may still deserve a scarce expert.

But many boundaries are simply inherited. Nobody chose them under current conditions. They survived because the process survived.

AI changes the price of several constraints at once. It makes generation cheaper, but also classification, translation, retrieval, coordination and access to specialist-like knowledge. Conventional software made a step faster. AI can change which steps belong together and who is capable of owning them.

That makes the “agent for every box” approach especially dangerous. It treats the present division of labor as a law of nature. The org chart becomes runtime architecture: a research agent hands to a strategy agent, which hands to a production agent, which hands to a compliance agent, each with its own state, prompts, outputs and failure modes.

We have not designed an agentic organization. We have staged a reenactment of the old one.

## Information should be born useful

The Ford example offers a better principle: process information when it is generated.

Most knowledge work does the opposite. Consider what happens after a meeting. A recording becomes a transcript. The transcript becomes a summary. The summary becomes a brief. The brief becomes a project ticket. The ticket becomes a dashboard status. Each document is a lossy local description of the same underlying event. Each one needs an owner. Each one can drift from the evidence.

Generative AI makes this documentary exhaust almost free. That may make the problem worse. We can now produce more representations than anyone can reconcile.

A more durable system would treat the meeting itself as an event. It would retain the recording, a versioned transcript, the decisions and commitments connected to their source passages, the relevant permissions and policies, and the outcomes that followed. A brief, ticket or alert would be a view generated for a particular person at a particular moment.

The views can change. The evidence should not.

This is the modern version of Ford's receiving terminal:

**Capture evidence once. Interpret it many times.**

That principle changes what a system of record is for. It should not preserve every document the organization happened to make on the way to understanding something. It should preserve the durable event, the claims made about it, the constraints applied to it and the decisions that followed.

If the underlying evidence is durable, a better model can reinterpret it tomorrow. If the system stores only today's summary, status and workflow history, tomorrow's model inherits today's information loss.

## Jobs can compress around the outcome

The Mutual Benefit Life example points to the organizational half of the same idea.

Many jobs exist as bundles of tasks. But many *boundaries between jobs* exist because no one person could once hold enough information, access enough expertise or coordinate enough action to own the whole outcome.

Luis Garicano's [model of knowledge hierarchies](https://doi.org/10.1086/317671) describes organizations as problem-solving systems. People lower in the hierarchy handle common problems. Difficult exceptions move to people with rarer knowledge. Hierarchy is partly a technology for routing questions.

AI changes the routing economics. Recent work by Enrique Ide and Eduard Talamàs [extends this logic to AI](https://doi.org/10.1086/737233): different levels of AI capability and autonomy produce different sizes and shapes of firms. The important point is not a single prediction about flatter or taller organizations. It is that the organizational form is endogenous to the cost and distribution of knowledge.

Change those costs and the job should be back on the table.

The case manager in Hammer's example was an early version of a more general pattern: one person organized around an outcome, with software pulling information and specialist capability toward the case. AI makes this possible across a much wider range of knowledge work.

The emerging unit may be one outcome owner with many callable capabilities.

This does not mean one heroic generalist does everything. It means the case retains continuity while capabilities assemble around it. Research, analysis, drafting, simulation and policy checks can be invoked without turning each capability into a department that the work must visit.

Replacing five specialist roles with five specialist agents misses the point. The opportunity is to remove the gaps between knowing, deciding and acting.

There is an important warning here. A job is also a school.

Routine work is where people encounter normal cases, build pattern recognition and learn when the rules stop working. Lisanne Bainbridge's [“Ironies of Automation”](https://doi.org/10.1016/0005-1098(83)90046-8) showed how automation can remove normal operation while leaving a person responsible for rare, difficult interventions. More recent research asks whether automating entry-level work can interrupt the [transmission of tacit knowledge](https://arxiv.org/abs/2507.16078) between generations of workers.

So job compression cannot mean “the model does the work and the expert catches disasters.” If the new design removes the repetitions that created expertise, it must create new ways to practice, inspect, contest and learn. Otherwise the final human checkpoint becomes ceremonial—accountable for a system they no longer understand.

The answer is not to preserve pointless handoffs as a training scheme. It is to design learning as deliberately as execution.

## This is an era of ferment

There is another reason to resist encoding the current process: we do not yet know the stable shape of AI-enabled work.

Philip Anderson and Michael Tushman called the period after a technological discontinuity and before a dominant design an [“era of ferment”](https://www.jstor.org/stable/2393511). Competing architectures proliferate. Performance improves along different dimensions. What will become standard is not yet obvious.

That description fits AI transformation uncomfortably well. Model capabilities, interfaces, costs and control patterns are all moving. A workflow that looks ambitious today may look like scaffolding in eighteen months. A “future state” designed in detail may be a picture of the brief moment when the workshop occurred.

Paul David's [history of electrification](https://www.jstor.org/stable/2006600) offers the canonical warning. Early factories often installed an electric motor where the steam engine had been while leaving the belts, shafts and floor plan intact. The larger gains arrived when factories were reorganized around what distributed electric power made possible.

Putting an agent into each box of a SaaS workflow is the central electric motor again.

This is one reason general-purpose technologies can produce a [productivity J-curve](https://www.nber.org/papers/w25148). The technology arrives before the complementary investments in skills, processes and organizational form. During the transition, companies incur the cost of the new world while still operating the old one.

The lesson is not that transformation takes time. It is that process redesign is part of the technology.

During a stable era, hardcoding a process can create efficiency. During an era of ferment, it can create strategic debt. The most valuable transformation asset may be the ability to change the operating model again.

## The boundary–durability audit

Before funding an AI transformation, run two counterfactuals and one preservation test.

### 1. The zero-legacy counterfactual

Start with the outcome and remove every current role, tool, department and status from the description.

If you were creating the organization today, where would information enter? Who would own the outcome? Which decisions genuinely require independent authority? Which boundaries would you add back on purpose?

Then take every handoff in the current process and ask: what constraint originally made this separation necessary? Is the constraint still real, or are we automating its residue?

This separates controls from customs. “Legal must independently approve this claim” may be a durable requirement. “The asset must enter an `awaiting_legal` queue in this project-management tool” is a current implementation.

### 2. The capability-jump counterfactual

Now assume models become ten times cheaper, faster and more capable across the adjacent tasks—not infinitely intelligent, merely good enough that an entire cluster of work can collapse.

Which roles compress? Which queues disappear? Where does accountability land? What becomes the new bottleneck? Would the architecture let you remove half the boxes without migrating the evidence or rebuilding the system?

If the answer is no, the transformation is using today's capability frontier as a permanent design constraint.

### 3. The preservation test

Finally, ask what deserves to survive every rebundling of the work.

Usually it is not the sequence. It is the source evidence, intent, constraints, permissions, commitments, evaluation criteria and outcome history. Those things let a new combination of people, models and systems act without starting from zero.

Also ask what human capability must survive. Where will people see enough real work to maintain judgment? How will they challenge the model, learn from exceptions and become expert enough to own the consequences?

The aim is not maximum automation. It is minimum dependence on an expiring arrangement.

You can summarize the test with a simple equation:

> **Future readiness = boundary collapse × recomposability**

Boundary collapse without recomposability produces a new monolith: fewer handoffs, but one brittle design. Recomposability without boundary collapse produces modular bureaucracy: replaceable agents performing an obsolete dance.

The lower-left corner—old boundaries and hardcoded execution—is a **fossil**. Old boundaries with replaceable execution can be useful **scaffolding**, provided nobody mistakes it for the destination. Collapsed boundaries with hardcoded execution are a **brittle rebundle**. The real target is **adaptive transformation**: remove separations that no longer earn their keep, while making the remaining capabilities easy to rearrange.

## Make the claim again

Most transformation decks contain a current state and a future state. In a period of rapid change, the future state is a dangerous fiction. There will be another state after it, probably sooner than the investment case admits.

The better target is a next state that increases the organization's ability to reach later states.

Judge an AI project by more than the hours it saves. Does it reduce the number of boundaries an outcome must cross? Does it reduce the number of competing representations of the same event? Does it move information capture closer to the moment the information becomes knowable? Does it let jobs recompress around outcomes? Does it leave evidence, evaluation and human judgment stronger when the current model is replaced?

The first task of AI transformation is organizational archaeology. The workflow tells you what used to be expensive. It does not tell you what must remain separate.

Every handoff is a claim. Every approval is a claim. Every queue is a claim.

Before you automate the handoff, make the claim again.
