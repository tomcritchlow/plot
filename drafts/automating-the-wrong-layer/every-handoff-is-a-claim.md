# Automating the Wrong Layer

Helping clients deploy AI puts me in an awkward position. I have to recommend a system they can build and operate, while the technology keeps changing what that system ought to do.

From the perspective of a forward-deployed engineer, a bounded task at least gives you a reasonably clear target. Extract fields from this document. Classify this request. Produce a draft for someone to review. You can inspect the input, define an acceptable result and test whether the model gets there reliably enough. Getting it into production still takes work, but you know what you are trying to make work.

A system is a different problem.

Suppose a client wants to automate campaign production. Research the audience, write the brief, generate creative, secure approvals, launch, measure and adjust. It looks like a sequence of tasks to connect.

But to build it, I have to make decisions about the organization. Does the brief still need to exist as a separate artifact? Should research and creative be separate agents, or capabilities available to the same person? What can the system publish without asking? Who sees the exceptions? Who can change the rules? What happens when that person's queue fills up?

I also have to make a bet about which of these distinctions will still matter when the system ships. A boundary that compensates for today's model weakness could be unnecessary by then. An approval step that looks wasteful could turn out to be the place where someone exercises essential independent judgment.

**The system I ship contains a hypothesis about how the client should work.**

That is the problem I want to get better at. How do I make that hypothesis explicit, test it with the client, and avoid making an expensive commitment to the wrong division of work?

## The process map offers an easy answer

The tempting answer is to start with how the client works today. Every box gets a copilot. Every arrow gets an integration. Every queue gets an agent. The current process supplies the requirements, the project plan and a convenient way to divide the engineering work.

This is how yesterday's organization becomes tomorrow's software.

Mapping the process is useful. But before I turn it into architecture, I need to understand what its boundaries are doing. Some separate expertise. Some control access. Some allocate scarce attention. Others simply survived the last software implementation.

Take the marketing manager whose workflow we are automating. Their task list might end with “present the campaign results.” Ask what they are on the hook for and the answer might instead be:

> Grow this product among this audience without wasting the budget or damaging the brand.

Those descriptions lead to different systems. One accelerates the production and reporting of campaigns. The other has to help someone learn what is working and change what happens next.

**A task list describes what you do. A job also describes what you're on the hook for.**

That gives me a starting point for the design. Establish the responsibility, then work backwards to the execution, context and authority it requires.

## Three things hiding inside a job

A job combines execution, context and responsibility. We tend to draw one boundary around all three because, historically, the person doing the work often needed to understand it and answer for it.

Before deciding where the human/AI boundaries belong, I would separate three questions:

| Layer | Question | What must be established? |
| --- | --- | --- |
| **DO** | Who or what can perform the action? | Capability, reliability and a way to check the result |
| **KNOW** | What context is needed to act and judge well? | Access to evidence, dependencies and changing circumstances |
| **OWN** | Who can authorize, answer for and change what happens? | Decision rights, visibility, resources and the ability to intervene |

These are questions to ask separately, even when the answers point to the same person or team. A model may generate excellent copy without knowing that the product launch has slipped. A marketer may understand why a campaign is failing without having permission to change the offer. A director may be accountable for growth while seeing only a monthly dashboard.

Automation can make each of those arrangements faster without making it work.

For the implementation, these are three different problems. Better generation might solve the first. Access to current evidence might solve the second. The third requires a decision from the client about who is allowed to do what. I cannot resolve it by writing a more persuasive system prompt.

## The task bundle is an implementation

In 1990, Michael Hammer published [“Reengineering Work: Don't Automate, Obliterate”](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate). His examples are useful because they change the relationship between work and responsibility.

At Mutual Benefit Life, processing an application had involved many specialist hands. The redesign brought information and expert systems to a case manager responsible for the application. Capabilities moved toward the person holding the case.

At Ford, accounts payable stopped processing supplier invoices when purchase orders and receiving records could support payment. The matching control survived. One representation of the transaction disappeared.

Organizing around outcomes is an old idea. The question AI reopens is how much of an outcome a person or team can effectively own, given the capabilities now available to them.

Task bundling helps explain the changing implementation. Joshua Gans's [“Endogenous Task Bundling, Skills and Automation”](https://www.nber.org/papers/w35211) models how job boundaries change with technology. Its abstract identifies a particularly useful possibility: reducing context loss can change bundles even without automating tasks. That is a mechanism for organizational change, not yet a prescription for what responsibility to assign.

The design choice comes next, and it belongs in the conversation with the client: what should this person be able to accomplish and correct without repeatedly transferring the problem to someone else?

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

The implementation question becomes: what decisions and evidence must come together for an owner to notice a problem and do something about it? The client has to agree who holds that authority; my design has to make it usable.

## Where should the boundaries go?

One goal does not make every task inseparable. Carliss Baldwin's [“A theory of technology and organizations”](https://journals.sagepub.com/doi/10.1177/14761270251409566) supplies the useful distinction between tightly connected work and “thin crossing points,” where relatively simple transfers make separation easier. Shared design rules can make those crossings possible.

Consider turning an interview into a short video. Choosing the excerpt, writing the headline and making the cut may be one evolving editorial decision. A better headline suggests a different opening; the new opening changes what the clip promises. Bringing those decisions together could reduce repeated briefing and revision.

Exporting the approved cut into specified formats is different. With complete requirements and checkable outputs, execution can be delegated to a replaceable service. The owner retains the decision about whether the result serves the goal.

Independent authorization creates another kind of boundary. Where policy requires a separate rights decision, faster evidence assembly can improve that handoff. The campaign owner cannot simply absorb the check because they can now perform parts of the analysis. Some boundaries protect interests that the immediate performance goal could otherwise override.

Do / Know / Own gives me a way to discuss the choices before they become services, queues and permissions:

| Situation | Proposed design | Test before expanding it |
| --- | --- | --- |
| Execution is reliable, instructions are complete and errors are detectable | Automate within an owner's delegated limits | Can failures be caught and corrected at the expected volume? |
| Decisions repeatedly change one another and serve a shared outcome | Bring them under shared ownership, supported by callable capabilities | Does rework fall while quality and learning improve? |
| A specialist capability has a clear request and acceptance criteria | Keep it independently callable | Can another performer deliver without reconstructing the whole case? |
| Independent judgment or authorization is required | Preserve that boundary and improve its evidence | Can the reviewer challenge the decision and require a change? |

These are hypotheses I would want to test with the people doing the work. An API can move a brief instantly while leaving six rounds of explanation intact. Two tasks can share a goal while benefiting from different specialists. A useful trial has to reveal whether the proposed handoff works, as well as whether the model's output is good.

Governance has to turn into an implementation too. In this illustrative campaign system, a model might assemble the evidence for a proposed publication and flag uncertainty. Software permissions could enforce who is allowed to publish. Where independent authorization is required, the reviewer needs the evidence and the power to refuse. Someone on the client side needs authority to change those rules.

Calling all of that a “compliance agent” conceals the decisions I still have to make. What can the model interpret? What must the software enforce? What must a person authorize? Who can revise the policy? Those choices determine where governance actually lives.

## Responsibility without control is just blame

There is an ugly version of this future. A company automates routine work, removes several roles and declares the remaining person accountable for everything the system produces.

That person has less practice, more exceptions and no more time. They see the dashboard, but cannot inspect the evidence. They can flag a problem, but cannot stop the system. The job has gained liability while losing control.

Lisanne Bainbridge's [“Ironies of Automation”](https://doi.org/10.1016/0005-1098(83)90046-8) warned about removing normal operation while leaving people responsible for rare, difficult interventions. The repetitions that built expertise disappear while the residual task becomes more demanding.

Calling someone an owner does not repair this. An escalation feature is only useful if the client can staff the escalation, and the person receiving it can act.

An expanded role needs a bounded scope, access to the evidence, authority to change course, enough time and practice to exercise judgment, and a way to escalate what exceeds its remit. Sometimes that requires a team or a smaller scope. Sometimes an independent specialist remains essential.

My hypothesis is that the useful limit on a role increasingly becomes the range of consequences its owner can understand and steer. That limit still exists even when producing another variant costs almost nothing.

## Ship a hypothesis the client can revise

I still have to ship something. Recognizing that the division of work might change cannot become an excuse to keep the project permanently in discovery.

If someone must answer for an outcome, preserve what lets them understand how it happened: source evidence, intent, permissions, constraints, decisions and observed results. A status such as `awaiting_legal_review` describes today's queue. The rights evidence, applicable policy and authorization record can support several different ways of doing the work.

Capture evidence once. Interpret it many times.

The capabilities beneath the owner should be replaceable. So should the allocation of responsibility when the goal, risk or available expertise changes. Ownership is more durable than many tasks, but it is not permanent. An audience goal can expire. A role can become overloaded. A previously local decision can start affecting the whole business.

This is where the moving-target argument from the [analytical treatment](draft.md) becomes practical. I might build an approval queue today because the model cannot yet be trusted with a decision. But the evidence and authorization history should survive if that queue later shrinks to exception handling. Today's handoff can be useful scaffolding without becoming the permanent structure of the system.

The first release should test the organizational hypothesis as well as the technical one. Can the proposed owner judge the output? Does the handoff carry enough context? Do exceptions arrive at a rate the team can handle? Can someone with authority actually correct the system when it goes wrong?

I would take four questions into the client conversation:

1. What should someone be on the hook for, within what constraints?
2. What must they be able to know, decide and change to own it in practice?
3. Which boundaries are necessary controls, and which compensate for current limitations?
4. What will the first release teach us about those choices, and how costly will it be to change them?

The [companion audit](target-durability-audit.md) carries the detailed tests, including whether the investment can pay back before its assumptions expire.

Tasks still matter. They determine feasibility, cost, quality and the need for expertise. But a task inventory cannot, by itself, tell me what system to recommend. The unit worth automating may be smaller than a job. The unit worth giving someone responsibility for may be larger.

From the FDE's position, the hard part is making a workable decision before the future becomes clear. I need enough confidence to build, evidence that will tell us when the design is wrong, and an architecture the client can change after I leave.

We are deploying a way of working. We should be explicit about which parts of it are still a bet.
