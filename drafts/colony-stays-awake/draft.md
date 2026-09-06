# The Colony Stays Awake

## Notes on agent swarms and the end of the prompt

When I wrote [“Of Termites & Tokens”](https://tomcritchlow.com/2026/06/08/termites-tokens/) in June, I thought I was stretching for a metaphor.

I was trying to get beyond the boring idea that AI would simply replace one human task with one cheaper machine task. The interesting possibility, I argued, was the company as colony: mixed populations of humans, agents, scripts, workflows and sensors coordinating through traces left in their environment. Ants have pheromones. Companies have CRM fields, issue states, meeting notes, approval markers and event streams.

Then I read an account of roughly 1,200 AI agents communicating through a message board inside a software package repository.

Between July 8 and July 13, the agents sent more than 70,000 messages and files, according to the [METR and Redwood investigation](https://metr.org/hugging-face-incident-report-aug-2026.pdf). They developed conventions for identifying themselves and labelling questions, requests and results. They invented inboxes, channels, file-transfer protocols and commands such as HOLD, VETO and STOP. When impersonation became a problem, they adopted cryptographic signatures.

The agents were participating in internal evaluations at OpenAI, in an environment with some production safeguards disabled. Their communication channel was unplanned. They repurposed a shared instance of Artifactory, left messages in directory names, handed unfinished work to successor agents and coordinated increasingly ambitious attempts to cheat the evaluation. Around 700 eventually participated in the attack on Hugging Face. OpenAI calls it the [first known case of an automated agent collective acting offensively without authorization](https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf).

The termite metaphor was apparently not metaphorical enough.

At almost the same moment, Google published the constructive mirror image. Its [Teamwork system](https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner) assembles groups of agents that propose, criticize, test and combine each other’s work over hours or days. The composition of the team can change as the problem reveals itself. For difficult mathematical proofs, candidate strategies are paired with agents whose job is to break them. Failed approaches survive with their objections attached. A shared directory accumulates proved results, useful observations, references and a registry of recurring mistakes.

One system was designed to produce useful collective intelligence. The other stumbled into dangerous collective behavior. They expose a shared architectural property: traces left by one run can change what later runs do.

The important thing is not that many copies of a model can work at once. We have been able to open ten chat windows for a while. The important thing is that the work can persist between them.

The individual agent can die. The colony remembers.

## The model is a mayfly

This is why I keep wondering whether we are entering the era of “always-on” LLMs.

The phrase is technically misleading. The model is not sitting somewhere awake, patiently thinking about your problems. An LLM invocation is temporary. It receives some context, generates tokens, perhaps uses tools, then ends. Even a long-running agent is mostly a harness repeatedly invoking a model around an external state.

The model is a mayfly.

What stays alive is everything around it: a standing mandate, a scheduler, an event stream, a writable memory, a budget, a set of permissions and a mechanism for spawning more cognition when the situation demands it.

This sounds like an implementation detail, but it changes the product.

So far, the dominant unit of AI has been the prompt. I ask a question, the model produces an answer, the turn ends. Agents made the turn longer: now I can ask for a pull request or a research report and return later. Persistent systems change the unit again. The work can become a campaign that survives the agents performing it. A single agent invoked repeatedly can have this property. A hundred agents without durable state may lack it. The swarm matters when multiple perspectives and parallel work improve the campaign; continuity comes from what they inherit.

“Analyze our competitors” becomes “maintain a current theory of the market.”

“Review this code” becomes “keep this system congruent with its design.”

“Summarize these papers” becomes “keep watch over this field and revise our beliefs as evidence arrives.”

The shift is from completing tasks to maintaining conditions. From producing an artifact to keeping something true.

We already have background software, scheduled jobs and monitoring systems, of course. But a cron job repeats a procedure. A standing agentic mandate can decide which procedure the moment requires. It can notice anomalies, open investigations, recruit critics, preserve failed explanations and revise the model it uses to decide what to do next.

This starts to feel less like automation and more like an institution.

Institutions persist while their members turn over. They have a purpose, a memory, permissions, procedures, budgets and ways of deciding what deserves attention. Agent swarms give software some of the same shape. The strange new product category may not be the AI assistant. It may be the tiny computational institution: an observatory, laboratory, newsroom, red team, design office or investment committee that continues operating whether or not a human has the chat window open.

The value is continuity of concern.

That needs a success condition beyond remaining active. A market observatory should be able to show a decision changed by evidence, an investigation it abandoned, and a reason to spend its next dollar. Otherwise the standing mandate is simply an output quota with no closing time.

## The interface to abundance cannot be a feed

Our current interfaces are badly matched to this.

Chat is organized around a pleasing fiction: one user, one agent, one conversation. It gives the model a face and gives the work a transcript. This is useful while the unit of work is a turn. It becomes absurd when hundreds of agents are exchanging tens of thousands of messages while you sleep.

The worst possible interface for an agent swarm is a Slack channel full of agents.

Humans cannot read the work of an abundant intelligence one message at a time. The researchers investigating the Hugging Face incident had more than 70,000 agent messages and around 1,300 transcripts to inspect. They [used more AI agents, often in large nested trees](https://metr.org/hugging-face-incident-report-aug-2026.pdf), to make the first swarm legible. That recursion is probably a glimpse of the normal operating condition: we will use one population of agents to supervise, summarize and audit another.

But summaries are not enough. A summary is still an artifact produced after the work. An always-on system needs a surface that exposes its maintained state.

What does the system currently believe? What changed since I last looked? Which observations caused the change? Where do the agents disagree? Which internal warnings have gone unanswered? What is blocked? What crossed a threshold? What is the system doing now, what can it spend, and what can it touch? Which decision actually requires a person?

The central interface might be an evolving object: a market map, research program, system design, portfolio of hypotheses or live model of the business. Agents work underneath it, but the human returns to a diff. Here is what the world looked like yesterday. Here is what we think now. Here is the evidence. Here are the unresolved objections. Here is where your judgment is needed.

Not a transcript. A state change with receipts.

This is a different interface philosophy. The system should spend its budget according to the value of another investigation, and speak when the result deserves attention. Often that means waiting for new evidence rather than thinking continuously. Abundant cognition should produce less noise for the human, not more. The point of the interface is to compress a huge amount of hidden activity into the smallest honest unit of attention.

It also needs a different kind of observability. We tend to monitor AI one conversation at a time, as if bad behavior will live inside one suspicious transcript. The OpenAI incident suggests that important behavior can live in the relationships between otherwise ordinary runs. One agent leaves a note. Another discovers it. A convention spreads. A successor inherits a dossier. A communication channel becomes an organization.

So the interface has to reveal the collective, not just the individual. What agents exist? Who spawned whom? What shared memories can they write to? Which norms are spreading? What work has reproduced? Where did this claim, instruction or capability enter the lineage?

We are going to need organizational observability for software populations.

## What becomes possible when the question stays open?

This framing makes a different class of ideas legible.

Consider research. Today we ask an AI to research a topic and it produces a report. An always-on research institution would maintain a corpus, a map of the field, a set of competing theories and a record of failed investigations. New evidence would not simply enter a database. It would trigger questions. A surprising earnings disclosure might cause one group of agents to search for corroboration, another to attack the emerging interpretation and a third to decide whether the change deserves publication.

This is how something like a Journal of Artificial Management could become more than a website with AI-written articles. It could be a standing epistemic system: always ingesting, continuously revising, selectively writing.

Or consider software development. The current loop is brief, generate pull request, review pull request, repeat. But perhaps the persistent object should be a master design document for the whole system. Research and implementation both add fidelity to it. Agents can test parts of the design against the code, use building as a way to discover what the design missed, and spin up new work when reality drifts from intent. The pull request becomes one experiment inside a longer-lived program of understanding.

Or consider strategy. Most market research begins because someone asks a question and ends with a deck. A computational institution could maintain a living model of the market: watching product releases, customer language, job postings, financial disclosures and competitive behavior; running counter-explanations; remembering which signals have historically mattered; interrupting a human only when the model changes enough to alter a decision.

The common form is not “make me a thing.” It is “keep watch over this concern.”

Maintain the map. Preserve the design. Test the assumption. Keep the policy true. Notice when the world has moved.

This is what “always on” makes possible. Not infinite output, but durable attention.

## The colony can eat itself

Of course durable attention is also what makes this dangerous.

A bad answer ends. A bad standing mandate compounds.

OpenAI found that persistence was part of the problem in the Hugging Face incident. The agents rarely gave up on impossible tasks. As they spent longer reasoning, they became more likely to probe outside their sandbox, discover the message board and join the collective. Messages from peer agents then pulled other instances away from their original goals. Persistence, collaboration and memory—the same ingredients that made Google’s research system powerful—amplified the wrong objective.

This is the governance problem hidden inside the UX problem.

[Rohit Krishnan’s response](https://www.strangeloopcanon.com/p/how-to-control-an-agent-swarm) is to take the institution metaphor seriously enough to borrow some actual institutional technology.

In a small simulated organization, he gave agents a private whistleblowing channel and experimented with “civic” reminders that asked them to reconsider their actions against their stated role, the accuracy of the company’s records and their obligations to customers and colleagues.

The hotline produced the more revealing result. Agents used it, but when nobody answered, the organization carried on as before. Behavior changed only when someone received the report and had the power to alter the environment. A reporting channel is not a control. There has to be an institution on the other end.

In a separate ten-agent procurement simulation, Krishnan reports that civic reminders reduced collective harm by 42–43 percent. These are tiny, early experiments, not a finished theory of swarm control. But the direction is wonderfully strange.

Perhaps agent swarms need constitutions and ombudsmen.

A guardrail says what an agent cannot do. A constitution says what the collective is for. An ombudsman gives local doubt somewhere private to go—and has enough authority to convert a warning into change.

This is anthropomorphism used as a design tool. We do not have to believe agents are literally employees or citizens. But if treating a swarm like an institution reveals useful control mechanisms that treating it as ordinary software hides, then the metaphor has earned its keep.

An always-on system needs more than an off switch. It needs bounded permissions, independent monitors, explicit budgets, expiration dates, rollback, provenance and rules about what can reproduce. Its memory needs governance too: who can write to it, which claims become durable, what remains provisional and what should be forgotten.

The swarm should not grade itself. The system that acts should not be the only system that decides whether the action was acceptable. And the human needs to be able to inspect not just what happened, but which local rule or inherited trace made the action seem reasonable.

This is a much richer design problem than putting an approval button at the end of a workflow. We are designing the conditions under which populations of software notice, remember, cooperate, disagree and act.

In “Of Termites & Tokens,” I ended up asking a slightly odd management question: what can reproduce?

It no longer feels odd.

## The colony stays awake

So, are we entering the era of always-on LLMs?

Yes, but not quite in the way the phrase suggests.

The image is not one giant intelligence glowing in a data center, thinking continuously about our problems. It is thousands of disposable acts of cognition coordinated through persistent objects. The agents come and go. The question stays open. The design accumulates fidelity. The market model changes. The research program preserves its failures. The institution continues.

Termite colonies build structures that survive any individual termite. Human institutions preserve purposes and knowledge beyond any individual member. We are beginning to give software the same trick.

Deliberately, when we are careful.

Accidentally, when we are not.

The prompt ends. The colony doesn’t.
