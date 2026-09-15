# Automating the Wrong Layer

Imagine a marketing manager describing their job. Research the audience. Write the brief. Coordinate the creative. Get approval. Launch the campaign. Pull the numbers. Present the results.

Give that list to an AI transformation team and a familiar exercise begins. Which tasks can we automate? Which need a copilot? Where should an agent hand off to a human?

But ask the manager what they are actually on the hook for and you might get a different answer:

> Grow this product among this audience without wasting the budget or damaging the brand.

The task list and the responsibility describe different things. One records how the work currently happens. The other explains why anyone cares whether it happens at all.

**A task list describes what you do. A job also describes what you're on the hook for.**

AI can change the relationship between those two descriptions. Someone might personally perform fewer operations while taking responsibility for a larger outcome. A job can lose tasks while gaining scope.

That possibility is easy to miss if the task list becomes the specification for the future.

## Three things hiding inside a job

A job combines execution, context and responsibility. We tend to draw one boundary around all three because, historically, the person doing the work often needed to understand it and answer for it.

For AI transformation, I would separate three questions:

| Layer | Question | What must be established? |
| --- | --- | --- |
| **DO** | Who or what can perform the action? | Capability, reliability and a way to check the result |
| **KNOW** | What context is needed to act and judge well? | Access to evidence, dependencies and changing circumstances |
| **OWN** | Who can authorize, answer for and change what happens? | Decision rights, visibility, resources and the ability to intervene |

These are questions to ask separately, even when the answers point to the same person or team. A model may generate excellent copy without knowing that the product launch has slipped. A marketer may understand why a campaign is failing without having permission to change the offer. A director may be accountable for growth while seeing only a monthly dashboard.

Automation can make each of those arrangements faster without making it work.

This is why the process map has such dangerous gravity. Every box asks for a copilot. Every arrow asks for an integration. Every queue asks for an agent. We improve execution inside an arrangement whose context and authority remain untouched.

This is how yesterday's organization becomes tomorrow's software.

## The task bundle is an implementation

In 1990, Michael Hammer published [“Reengineering Work: Don't Automate, Obliterate”](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate). His examples are useful because they change the relationship between work and responsibility.

At Mutual Benefit Life, processing an application had involved many specialist hands. The redesign brought information and expert systems to a case manager responsible for the application. Capabilities moved toward the person holding the case.

At Ford, accounts payable stopped processing supplier invoices when purchase orders and receiving records could support payment. The matching control survived. One representation of the transaction disappeared.

Organizing around outcomes is an old idea. The question AI reopens is how much of an outcome a person or team can effectively own, given the capabilities now available to them.

Task bundling helps explain the changing implementation. Joshua Gans's [“Endogenous Task Bundling, Skills and Automation”](https://www.nber.org/papers/w35211) models how job boundaries change with technology. Its abstract identifies a particularly useful possibility: reducing context loss can change bundles even without automating tasks. That is a mechanism for organizational change, not yet a prescription for what responsibility to assign.

The design choice comes next. What should this person be able to accomplish and correct without repeatedly transferring the problem to someone else?

## A job can lose tasks while gaining scope

Return to the marketing manager. Suppose they can use AI to explore customer data, try messages, produce variants and inspect results. Each capability would need to be tested in the actual work. But imagine that it works well enough to change what the manager can take on.

Their responsibility could expand from getting a campaign out the door to improving adoption among a particular audience. Instead of commissioning each experiment through several departments, they could run a bounded series of experiments and respond to what they learn.

They might write fewer briefs and build fewer reports themselves. Yet their role could become larger because they can now carry an unresolved business problem further.

There is suggestive evidence of people crossing old task boundaries. [OpenAI's July 2026 analysis](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/) found that 43.5% of occupation-specific messages concerned tasks associated with another occupation; the figure was 16.8% across all work-related messages. This is evidence of task crossover in ChatGPT use. It does not establish that authority, accountability or successful job scope expanded.

That gap is the transformation problem. Giving someone access to more capabilities does not automatically give them permission to use those capabilities consequentially.

A marketer who can generate a hundred experiments but cannot launch one has more production capacity. Whether they have a bigger job depends on what they are allowed to decide, what they can observe and what they can change.

## Give someone a loop they can actually close

By an ownership loop, I mean a practical sequence: establish a goal, act, observe the result, judge it and adjust.

For the marketer, that might mean agreeing an audience and adoption goal, choosing an experiment, launching within a budget, inspecting the response and deciding what to do next. The loop has to return to a decision. Producing a report that nobody can act on does not close it.

Ownership can sit with a team. It does not require one heroic generalist, one model or one giant agent. Nor does the owner have to perform or approve every operation. They need sufficient authority and visibility to keep the loop working, including the ability to delegate within explicit limits.

This suggests a useful design test: where does the work repeatedly lose the ability to correct itself?

Perhaps the campaign team learns that the offer is wrong but only the pricing team can change it. Perhaps the analyst sees a problem but does not know which decision the analysis should inform. Perhaps creative approval arrives after the opportunity has passed. Those are different failures. Giving each role an agent does not settle any of them.

[MIT CISR's research on AI decision rights](https://cisr.mit.edu/publication/2026_0601_AIDecisionMatrix_SebastianWeillHaskampVomBrocke) helps make this concrete. It links AI participation to ambiguity and risk, distinguishing framing, acting and learning. At One NZ, the researchers describe named business owners who monitor and improve agents. Assigning ownership means ongoing work on the system, not just signing off its launch.

The practical question becomes: what decisions and evidence must come together for an owner to notice a problem and do something about it?

## Where should the boundaries go?

One goal does not make every task inseparable. Carliss Baldwin's [“A theory of technology and organizations”](https://journals.sagepub.com/doi/10.1177/14761270251409566) supplies the useful distinction between tightly connected work and “thin crossing points,” where relatively simple transfers make separation easier. Shared design rules can make those crossings possible.

Consider turning an interview into a short video. Choosing the excerpt, writing the headline and making the cut may be one evolving editorial decision. A better headline suggests a different opening; the new opening changes what the clip promises. Bringing those decisions together could reduce repeated briefing and revision.

Exporting the approved cut into specified formats is different. With complete requirements and checkable outputs, execution can be delegated to a replaceable service. The owner retains the decision about whether the result serves the goal.

Independent authorization creates another kind of boundary. Where policy requires a separate rights decision, faster evidence assembly can improve that handoff. The campaign owner cannot simply absorb the check because they can now perform parts of the analysis. Some boundaries protect interests that the immediate performance goal could otherwise override.

Do / Know / Own gives us a way to work through the choices:

| Situation | Proposed design | Test before expanding it |
| --- | --- | --- |
| Execution is reliable, instructions are complete and errors are detectable | Automate within an owner's delegated limits | Can failures be caught and corrected at the expected volume? |
| Decisions repeatedly change one another and serve a shared outcome | Bring them under shared ownership, supported by callable capabilities | Does rework fall while quality and learning improve? |
| A specialist capability has a clear request and acceptance criteria | Keep it independently callable | Can another performer deliver without reconstructing the whole case? |
| Independent judgment or authorization is required | Preserve that boundary and improve its evidence | Can the reviewer challenge the decision and require a change? |

These are design hypotheses, not predictions that certain occupations will disappear. An API can move a brief instantly while leaving six rounds of explanation intact. Two tasks can share a goal while benefiting from different specialists. The point is to test the arrangement against real cases.

## Responsibility without control is just blame

There is an ugly version of this future. A company automates routine work, removes several roles and declares the remaining person accountable for everything the system produces.

That person has less practice, more exceptions and no more time. They see the dashboard, but cannot inspect the evidence. They can flag a problem, but cannot stop the system. The job has gained liability while losing control.

Lisanne Bainbridge's [“Ironies of Automation”](https://doi.org/10.1016/0005-1098(83)90046-8) warned about removing normal operation while leaving people responsible for rare, difficult interventions. The repetitions that built expertise disappear while the residual task becomes more demanding.

Calling someone an owner does not repair this.

An expanded role needs a bounded scope, access to the evidence, authority to change course, enough time and practice to exercise judgment, and a way to escalate what exceeds its remit. Sometimes that requires a team or a smaller scope. Sometimes an independent specialist remains essential.

My hypothesis is that the useful limit on a role increasingly becomes the range of consequences its owner can understand and steer. That limit still exists even when producing another variant costs almost nothing.

## Build what lets the owner steer

The architecture follows from the responsibility.

If someone must answer for an outcome, preserve what lets them understand how it happened: source evidence, intent, permissions, constraints, decisions and observed results. A status such as `awaiting_legal_review` describes today's queue. The rights evidence, applicable policy and authorization record can support several different ways of doing the work.

Capture evidence once. Interpret it many times.

The capabilities beneath the owner should be replaceable. So should the allocation of responsibility when the goal, risk or available expertise changes. Ownership is more durable than many tasks, but it is not permanent. An audience goal can expire. A role can become overloaded. A previously local decision can start affecting the whole business.

This keeps the moving-target argument from the [analytical treatment](draft.md): a transformation must pay back before too many of its assumptions expire, and leave useful assets when it needs redesigning. The [companion audit](target-durability-audit.md) carries the detailed tests.

Before funding a transformation, start with four questions:

1. What should someone be on the hook for, within what constraints?
2. What must they be able to know, decide and change to own it in practice?
3. Which capabilities can they call on, and which independent boundaries must remain?
4. What evidence would justify expanding their scope—or require narrowing it?

Tasks still matter. They determine feasibility, cost, quality and the need for expertise. But a task inventory cannot, by itself, tell us what job to build.

The unit worth automating may be smaller than a job. The unit worth giving someone responsibility for may be larger.

Start with what someone should be on the hook for. Then work backwards.
