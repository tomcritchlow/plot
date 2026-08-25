# The Half-Life of a Workflow

Imagine a fairly ordinary media workflow.

A recording enters the organization. Someone makes a transcript. Someone else cuts the long version. Another person makes a 16:9 version, then a 9:16 version, then captions, thumbnails and copy. Files move between agencies, editors, legal reviewers, brand managers and channel owners. Each handoff creates a status. Each status creates an approval. Each approval creates another little piece of project management.

Draw the workflow on a whiteboard and the arrows multiply very quickly.

This is exactly the kind of mess that produces a big transformation project. Build a source of truth. Put the process on rails. Give every task an owner. Connect the asset library to the project-management system. Automate the handoffs. Make the whole machine visible.

Thousands of hours later, you may have successfully transformed a workflow that no longer needs to exist.

That feels like a specific danger of AI transformation right now. The models are improving faster than large organizations can redesign themselves around the models. By the time a multi-year system reaches production, the dozen human steps it was designed to coordinate may have collapsed into a conversation with an agent.

The project did not fail because AI was overhyped.

It failed because AI was undersold.

## The workflow half-life

Enterprise transformation usually treats the current workflow as a stable object. We map it, find the bottlenecks, assign requirements and build a better version. The technology changes. The workflow remains recognizable.

But a workflow has a half-life: the amount of time before enough of its assumptions have decayed that it becomes a different kind of work.

In a stable technology environment, that half-life might be years. In the current AI environment, it can be shorter than the procurement process.

[METR’s work on AI task-completion horizons](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) gives this instability a useful shape. On its suite of software and reasoning tasks, the length of work frontier agents can complete with 50% reliability increased exponentially, with an estimated doubling time of around seven months. The exact curve will not transfer neatly into every marketing or operational domain, of course. But the management implication is hard to ignore: the capability available when you approve a project may be materially different from the capability available when you ship it.

This creates a strange inversion. The larger and more “strategic” the transformation, the greater the chance that it arrives in a world that has moved underneath it.

The wrong-layer trap is what happens when we respond by making the disappearing layer more durable.

## Don't pave the vanishing cow path

This is not an entirely new mistake. In 1990 Michael Hammer published the wonderfully blunt essay [“Reengineering Work: Don’t Automate, Obliterate”](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate). Companies, he argued, were using computers to speed up inherited processes when they should have been questioning why those processes existed at all.

Generative AI makes Hammer’s warning more difficult because the ground is moving during the reengineering. You are not merely deciding whether to preserve an old process. You are trying to imagine which parts of the process will survive another year of capability gains.

The old mental model of AI was cheap labor. A machine does a known task faster: create the transcript, tag the asset, route the approval, update the ticket. Under that model, it makes sense to automate each box and preserve the diagram.

The newer model is closer to work absorption. An agent can take responsibility for a chain of tasks, use tools, inspect its own outputs and respond to natural-language direction. The unit being automated is no longer necessarily the step. It might be the whole stretch of arrows between an intention and an outcome.

If you build the system of record around those arrows—today’s assignments, handoffs and human choreography—you may be pouring concrete around the least durable part of the system.

## From systems of record to systems of intent

This is why the current debate about systems of record feels so relevant.

[Garry Tan’s prediction](https://x.com/garrytan/status/2091742825042030681) is that systems of record will have to become AI harnesses or risk being replaced by agents. That feels directionally right. A system designed to show a human the state of the work is different from a system designed to give an agent enough context, permissions and tools to move the work forward.

[Matt Slotnick’s longer argument](https://mslotnick.substack.com/p/intention-is-all-you-need) makes a useful distinction. Systems of record are not merely databases. They give the organization a shared understanding of its core objects: the customer, the employee, the ticket, the asset. But shared objects are no longer enough when agents can act. The system also needs a shared understanding of what should happen next. Slotnick describes this as a shift from records to intentions, from objects to objectives.

I think both arguments point toward the same architectural inversion. The old system coordinated people around records. The new system has to coordinate people and agents around intent.

But there is a trap hiding inside the word “harness.” If the harness simply orchestrates today’s boxes more efficiently, we are back where we started. We have given agents a better way to navigate a process whose reason for existing is disappearing.

The distinction is not system of record versus agent. It is durable record versus temporary choreography.

## Record, intent, action

The media still has to exist. There is still a source recording, a transcript, a set of derived assets, a rights status, a brand intention, a quality threshold and somewhere the work needs to appear. What changes is the machinery between them.

This suggests a three-layer test for AI transformation:

- **Record:** What is durably true? The source asset, its provenance, its rights status, its versions, its distribution history and the evidence of what happened after publication.
- **Intent:** What future state are we trying to create? The intended audience, the business outcome, the policy constraints, the quality threshold and the brand judgment that should govern the work.
- **Action:** What moves record toward intent? The models, tools, task boundaries, assignments, approvals and handoffs used to get there today.

Record should be stable. Intent should be explicit and revisable. Action should be replaceable.

Some of today’s coordination will remain. Humans are not evaporating from the organization. But the action layer is where model capability is moving fastest. If the transformation project treats every present-day handoff as a permanent fact, it confuses organizational scar tissue for business logic.

The practical test might be: if a much better model could perform this entire workflow from one instruction, what would your system still need to know?

That is probably the layer worth transforming.

## Expected ROI, plus time

Foster Provost and Panos Ipeirotis have a useful new paper on [how companies should choose which AI products to implement](https://arxiv.org/abs/2607.23733). Their expected-ROI framework separates three questions that companies often muddle together: how valuable would the product be if it worked, how likely is it to work, and what investment would it require?

This is already much better than funding whatever demo created the most executive excitement. The paper also recommends staged commitments, a portfolio of bets and revisiting priorities as conditions change.

But I think fast-moving model capability adds another question:

**How durable is the target?**

A project can have high value, high likelihood and tolerable investment while still pointing at work with a short half-life. The value calculation quietly assumes the problem will remain intact long enough for the solution to pay back its cost. Sometimes that assumption is more uncertain than the model.

Perhaps every serious AI project now needs two clocks. One measures implementation time. The other measures capability change. If the second clock is moving faster than the first, the project needs to create reusable assets, understanding or infrastructure even if its original workflow disappears.

Otherwise the transformation has an expiration date before it begins.

## Move people toward the valuable work

There is an uncomfortable human question inside all of this. A lot of enterprise systems are built around an assumption that the same people will remain in roughly the same loop, only assisted by better software. Sometimes that is right. Sometimes it is simply a polite way of refusing to redesign the work.

The alternative is not automatically layoffs. It can be a more imaginative question about where human knowledge becomes more valuable once routine coordination gets cheap.

[Ingka Group’s account of its AI customer-service work](https://www.ingka.com/newsroom/ai-and-remote-selling-bring-ikea-design-expertise-to-the-many/) is interesting here. Its chatbot resolved roughly 47% of the customer inquiries it received between 2021 and 2023. Meanwhile, 8,500 call-centre coworkers were reskilled in remote interior design, digital retail sales, relationship building and complex problem-solving. The company reported that sales through remote customer meeting points reached €1.3 billion in FY22.

The interesting move was not preserving the old query-handling workflow more efficiently. It was moving people toward work where their judgment, taste and ability to build a relationship could create more value.

This is the growth version of transformation. Do not ask only which pieces of human labor the machine can reproduce. Ask what the organization can now afford to care about.

## Transformation that can change its mind

AI leaders are going to spend the next few years admitting that some transformation projects failed not because the models were incapable, but because the organization built against an obsolete picture of what the models could become.

The answer cannot be to wait until the frontier settles. It will not. Nor can every company rebuild its operating model every six months.

Maybe the answer is to build transformations that can change their minds: stable around objects, intent, provenance and outcomes; loose around tools, task boundaries, job descriptions and handoffs. Systems that preserve what the company cares about without freezing how the work happens today.

Before putting a workflow on rails, perhaps we should ask a stranger question:

Will there still be a train?
