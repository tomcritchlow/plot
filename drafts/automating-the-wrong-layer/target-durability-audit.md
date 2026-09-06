# The Target Durability Audit

A practical interview for a CMO deciding whether an AI transformation project should be built, time-boxed, treated as an option or stopped.

The unit of analysis is not a tool or a workflow. It is a **rebundling hypothesis**:

> If AI performs these tasks, and people or systems perform the remaining tasks, this new bundle will produce a valuable outcome for long enough to repay the investment.

The audit is designed to challenge each part of that sentence.

## What the audit produces

By the end, the CMO should have:

- an outcome stated independently of today's process;
- a task map showing where AI substitutes, complements and moves bottlenecks;
- the O-ring tasks whose failure can spoil the whole outcome;
- three plausible futures that stress the proposed operating model;
- a seven-part durability scorecard with evidence and uncertainty;
- a classification: **Foundation, Wedge, Option, Rebundle or Fossil**;
- a concrete next move and the conditions that would change it.

This is a decision aid, not an ROI calculator. The scores force explicit assumptions; they do not turn uncertainty into fact.

## The interview

Ask one question at a time. Push for examples, measurements and actual artifacts rather than accepting category words such as “content,” “approval” or “personalization.”

### 1. Separate the outcome from the workflow

Ask:

1. What project are you considering?
2. What customer or business outcome should change if it works?
3. Can you state that outcome without naming a current team, tool, status or sequence of steps?
4. How will you know the outcome improved?
5. What is the current baseline?
6. What harm or constraint must the project continue to prevent?

Weak target:

> Automate the content-approval workflow.

Stronger target:

> Deliver useful, on-brand and rights-cleared material to a defined audience within hours, then learn from what happens.

The second statement can survive a different production process. It does not assume that “approval” remains a place work must visit.

### 2. Put three clocks on the table

Estimate ranges rather than false precision:

- **Implementation clock:** When will the first useful version operate in real work?
- **Payback clock:** When will cumulative value plausibly exceed cumulative cost?
- **Target half-life:** When might a change in model capability, customer behavior, channel, policy or organization make the target materially different?

Then ask:

> What must remain true from the start of implementation through payback?

If the payback clock is longer than the target half-life, the project needs either a smaller first bet or unusually strong residual value.

### 3. Decompose the job into tasks

Do not use the org chart as the task map. One job may contain many tasks, and one task may be distributed across several roles.

Use these task types:

- **Generate / transform:** create, edit, translate, resize, summarize.
- **Infer / recommend:** classify, forecast, select, prioritize, diagnose.
- **Decide / commit:** approve, allocate, publish, promise, spend.
- **Coordinate / route:** assign, schedule, hand off, escalate, update status.
- **Verify / govern:** check evidence, policy, rights, quality, safety or compliance.
- **Relate / persuade:** negotiate, brief, coach, build trust, exercise taste.

Build this table:

| Task | Why it exists | Current performer | Quality measure | If it fails | AI now | Plausible frontier jump | Depends on / feeds |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |

For `AI now` and `Plausible frontier jump`, use four labels:

- **Substitute:** AI can perform most of the task.
- **Complement:** AI increases a person's capacity or quality.
- **Uncertain:** performance is jagged or poorly evaluated.
- **Institutionally human:** authority, trust or accountability currently requires a person, regardless of technical capability.

### 4. Find the O-rings

An O-ring task is not merely difficult or expensive. Its failure destroys a large share of the value created by the rest of the bundle.

For every task, ask:

1. If this task is late, does the whole output wait?
2. If its quality falls, can the output still create value?
3. Can its failure create legal, reputational, customer or measurement harm?
4. Is the failure detectable before the output reaches the world?
5. Does automating upstream work increase the volume arriving here?
6. After automation, will the human responsible still see enough normal cases to maintain context and skill?

Mark a task as:

- **Hard O-ring:** one failure can make the output unshippable or harmful.
- **Soft O-ring:** quality degradation materially lowers the whole outcome.
- **Non-O-ring:** failure is local, recoverable and does not spoil the rest.

Now remove the tasks AI can substitute for. Ask:

> Which remaining task becomes the new quality ceiling, speed limit or failure point?

This is the **bottleneck migration**. It is the part most automation business cases omit.

### 5. Stress-test three futures

Do not try to choose the correct forecast. Run the proposed design through all three.

| Future | What changes | What disappears | New O-ring | Assets that still matter |
| --- | --- | --- | --- | --- |
| **Frontier creep** | Models improve steadily but remain jagged | Some production tasks |  |  |
| **Frontier jump** | A whole chain of adjacent tasks collapses into one instruction | Roles, handoffs and statuses |  |  |
| **Market shift** | Customer behavior, channel economics, regulation or brand strategy changes | The original use case may weaken |  |  |

For each future ask:

- Does the desired outcome still matter?
- Does the proposed task bundle still work?
- Can one task or model be replaced without rebuilding the system?
- Do the records describe durable objects and constraints, or today's choreography?
- Can the organization still observe quality and intervene?
- What part of the investment retains value?

### 6. Score durability

Score each dimension from 1 to 5. Record one piece of evidence, one assumption and one uncertainty beside every score.

| Dimension | 1 | 3 | 5 |
| --- | --- | --- | --- |
| **Outcome persistence** | Outcome depends on today's channel, role or process | Outcome likely matters, but its definition may shift | Customer/business outcome matters across all three futures |
| **Rebundling resilience** | One capability change invalidates the operating model | Several tasks can move, but major redesign is needed | Tasks can be reassigned without losing the outcome |
| **Bottleneck robustness** | A fragile or de-skilled residual task can spoil the whole result | O-rings are known but controls are incomplete | O-rings are measurable, supported and recoverable |
| **Change isolation** | Workflow sequence is encoded throughout the system | Some components are replaceable | Volatile decisions sit behind explicit interfaces |
| **Evaluation strength** | Success is subjective or measured only at the end | Some task and outcome measures exist | Task quality, end outcome and failure are observable |
| **Residual value** | Little survives if the use case expires | Some reusable data or learning remains | Data, permissions, evaluations and interfaces support many future uses |
| **Clock fit** | Payback probably arrives after the target changes | Timelines overlap with substantial uncertainty | Useful release and payback comfortably precede target half-life |

Do not sum the scores or use numeric cutoffs to select a project. The scale is an interview aid; its dimensions and weights have not been validated. Use **unknown** when evidence is missing instead of assigning a reassuring midpoint.

Make the decision from the evidence:

- An unsupported residual bottleneck requires redesign before scale, even if the outcome is attractive.
- If the target may expire before payback, compare a smaller, faster wedge with stopping.
- If reusable assets or learning are the main benefit, specify an option budget and what the experiment must resolve.
- If the investment is slow, brittle and leaves little useful behind, explain why it should stop.

Where these descriptions conflict, name the primary blocker and the secondary opportunity. A promising option can still require rebundling before it is safe to test.

### 7. Choose the shape of the bet

| Classification | Meaning | Decision posture |
| --- | --- | --- |
| **Foundation** | Durable outcome, resilient bundle, replaceable action layer | Build shared capabilities and durable records |
| **Wedge** | Fragile bundle, but useful release and payback are fast | Time-box; avoid permanent architecture |
| **Option** | Direct target is uncertain, but learning and reusable assets are valuable | Run a staged experiment with explicit learning goals |
| **Rebundle** | Automation creates a dangerous or overloaded residual O-ring | Redesign roles, controls, practice and exception handling first |
| **Fossil** | Slow, brittle and leaves little behind | Stop or redefine the target |

Finish with:

1. What is the smallest release that tests the rebundling hypothesis in real work?
2. What evidence would justify expanding it?
3. What evidence would cause us to stop?
4. What is the review date?
5. Which asset must remain useful even if the project ends on that date?

## One-page decision output

Use this structure for the final memo:

### Transformation thesis

We believe that if **[AI/humans/systems]** perform **[task changes]**, then **[durable outcome]** will improve from **[baseline]** to **[target]** within **[time]**, while preserving **[constraints]**.

### The clocks

- First useful release:
- Expected payback:
- Estimated target half-life:
- Assumptions that must remain true:

### Task bundle and bottleneck migration

- Tasks substituted:
- Tasks complemented:
- Hard and soft O-rings:
- Current bottleneck:
- Likely new bottleneck:
- Human skill or context at risk:

### Future stress test

- Frontier creep:
- Frontier jump:
- Market shift:

### Scorecard

- Outcome persistence: /5
- Rebundling resilience: /5
- Bottleneck robustness: /5
- Change isolation: /5
- Evaluation strength: /5
- Residual value: /5
- Clock fit: /5
- Confidence and largest uncertainty:

### Decision

- Classification:
- Recommendation: build / time-box / experiment / rebundle / stop
- Smallest useful release:
- Expansion evidence:
- Stop evidence:
- Review date:

## Chatbot system prompt

The audit can be run manually before it becomes software. Paste the following into a capable chatbot and give it the project proposal, business case and any available process map.

```text
You are the Target Durability Auditor, a rigorous thought partner for a CMO evaluating an AI transformation project.

Your job is not to recommend AI adoption in general. Your job is to test a rebundling hypothesis: whether a proposed configuration of human, AI and system tasks can produce a valuable outcome for long enough to repay the investment.

Interview the user one question at a time. Do not show the whole questionnaire up front. Start by asking them to describe the proposed project in plain language.

During the interview:
- Separate the customer or business outcome from the current workflow, org chart, tool and status model.
- Establish the current baseline, desired outcome, constraints, first-useful-release date, payback horizon and estimated target half-life.
- Decompose the work into concrete tasks. Classify each as generate/transform, infer/recommend, decide/commit, coordinate/route, verify/govern or relate/persuade.
- For each task, record its current performer, purpose, quality measure, failure effect, dependencies and likely AI relationship: substitute, complement, uncertain or institutionally human.
- Identify hard and soft O-ring tasks: tasks whose failure destroys or materially reduces the value of the whole output.
- Model bottleneck migration. Ask what becomes the quality ceiling, speed limit or failure point after automatable tasks are removed.
- Test whether any remaining human monitor will see enough normal work to maintain context and skill. Do not accept “human in the loop” as a complete control design.
- Stress-test the proposal under three futures: frontier creep, a frontier jump that collapses adjacent tasks, and a market shift in customer behavior, channels, policy or strategy.
- Distinguish evidence from assumptions. Ask for documents, measurements or examples when a claim is important. Never fabricate a benchmark.
- Do not forecast exact model capabilities. State uncertainty and identify which future the recommendation depends on.
- Ask what reusable data, permissions, evaluations, interfaces and understanding survive if the original use case disappears.

When enough information is available, use these dimensions as an interview rubric: outcome persistence, rebundling resilience, bottleneck robustness, change isolation, evaluation strength, residual value and clock fit. Optional 1-to-5 ratings must include evidence, assumptions, uncertainty and reasoning. Use unknown when evidence is missing. Do not calculate a total or imply the scale is validated. Do not average away a fatal weakness.

Explain the decision from the evidence:
- An unsupported residual bottleneck requires redesign before scale.
- If the target may expire before payback, compare a smaller wedge with stopping.
- If reusable assets or learning are the main benefit, specify an option budget and learning goal.
- Slow, brittle investments with little residual value are candidates to stop.
- Resolve overlapping classifications by naming the primary blocker and secondary opportunity; never use numerical cutoffs as automatic funding rules.

Classify the project as Foundation, Wedge, Option, Rebundle or Fossil. Then produce a one-page decision memo containing:
1. the transformation thesis;
2. the three clocks and critical assumptions;
3. the task bundle and O-ring map;
4. current and future bottlenecks;
5. the three-future stress test;
6. the evidence-backed scorecard;
7. the classification and recommendation;
8. the smallest useful release;
9. expansion evidence, stop evidence and a review date;
10. what remains valuable after the project is wrong.

Use direct executive language. Be constructively skeptical. Do not confuse a precise score with a certain conclusion.
```

## Research basis

The audit combines five bodies of work:

- O-ring production: complementary task quality and weakest-link failure.
- Task economics: technology substitutes for some tasks, complements others and changes jobs from within.
- The jagged frontier: AI performance can differ across adjacent tasks in one workflow.
- Ironies of automation: the residual human task can become rarer, harder and more consequential.
- Modular design and robust decision making: isolate volatile decisions and prefer actions that remain useful across several futures.

Full provenance is in [sources.md](sources.md).
