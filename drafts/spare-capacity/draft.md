# The Time You Don't Spend

For a while, in another life, I played a lot of online poker.

The thing about online poker was that one table was boring. Not morally boring. Structurally boring. You would make a decision, then wait. Someone tanked. Someone folded. A new hand loaded. The action moved around the table at the pace of other people thinking. So, of course, the obvious move was to open another table. Then another. Tile them across the screen. Four tables. Six tables. Eight tables if you were feeling sharp or foolish.

This was called multi-tabling, and it had its own strange kind of flow. Your attention never had to land anywhere for too long. A hand would pop up, you would make the decision, and then another table would demand you. Fold. Raise. Check. Fold. The whole thing became a kind of human event loop. You were not playing one game of poker exactly. You were managing a portfolio of overlapping opportunities, each one briefly asking whether your attention could be converted into expected value.

The temptation, once you learn that trick, is to think the answer is always more tables.

There is a very live version of this feeling with LLMs. I keep finding myself with three or four little machines running in the background. One agent checking a code path. Another trying a library. A third reading a source and turning it into notes. Maybe a fourth off in the corner doing something slightly irresponsible but potentially useful. The workday starts to feel less like a line and more like a control room. A few prompts here, a quick review there, return to the terminal, keep the plates spinning.

And then, sometimes, the shoes by the door start to look like a worse use of compute.

This feels like the new little moral drama of AI work. We have learned to see latency as an opportunity. If the model is thinking, I can start another thread. If one agent can make progress, why not three? Why not use the walk as a batch-processing window? Why not come back to more output than I left with?

I do not think this is wrong, exactly. Multi-tabling LLMs is real. Simon Willison has a good post on [embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/), and the most useful parts are not magical. Send out scouts. Ask for research. Let an agent clear a small maintenance task. Have it explore the shape of a codebase while you keep your main thread intact. Gergely Orosz writes about the same trend in software teams, where senior engineers may be especially well-suited to this because they already live with parallel workstreams and review queues.

But the poker memory makes me suspicious of the simple version of the claim. Multi-tabling only worked because poker had crisp state, bounded decisions, and brutal feedback. You could look at a hand and know, at least roughly, what kind of decision it was asking for. Most hands were trivial. The whole economic logic of multi-tabling depended on knowing which decisions could be compressed and which ones needed your full attention.

The mistake was adding tables until the difficult decisions started to feel like trivial ones.

That, I think, is the AI version of the problem. The machine can generate more workstreams than I can meaningfully absorb. The bottleneck has moved from production to judgment. Every open agent claims a little piece of my future attention. It turns blank space into review debt. It turns a walk into a queue.

There is a useful academic phrase for this: [attention residue](https://ideas.repec.org/a/eee/jobhdp/v109y2009i2p168-181.html). Sophie Leroy uses it to describe the way part of your attention remains stuck to a previous task after you switch away from it, especially when the prior task is unfinished. You are physically in the next meeting, or the next document, or the next code review, but some part of your mind is still holding the unfinished thing open.

This feels almost too perfect for AI work because the metaphor cuts both ways. The human has attention residue. The model has a context window. Both are ways of asking: what is still active enough to shape the next move? When I have six agents running, I am not just managing six outputs. I am managing six partially loaded contexts, each with its own assumptions, pending decisions, forgotten constraints, and little hooks back into my head.

Maybe this is why LLM multi-tabling feels so productive and so leaky at the same time. The machine can keep going, but my attention does not garbage collect cleanly.

A recent [Ask HN thread about finding flow state while using AI to code](https://news.ycombinator.com/item?id=48492118) circles this exact tension. The original poster says agentic coding has made them feel less able to work deeply. Some commenters say, basically, you do not get flow with agents because the loop becomes prompt, wait, check. Others describe the opposite: flow as "selective multitasking," keeping enough related agents moving that you are always reading, deciding, or steering. One useful comment reframes the division of labor as: AI handles the typing, I handle the thinking.

This is the poker question again. Is the point to maximize the number of active tables? Or is the point to preserve your edge?

## Of Tokens and Tilt

There is a limit to the analogy. Poker tables share rules, stakes and a familiar decision grammar. Three agent workstreams might ask me to judge a database migration, a research claim and a design at almost the same moment. Each requires a different kind of checking. Opening another table can mean opening another world.

More parallelism helps while the marginal work is worth the attention required to judge it. The difficult part is noticing when that stops being true.

Poker has a word for the moment the decision system starts to break: tilt. Moreau and colleagues created an [Online Poker Tilt Scale](https://ideas.repec.org/a/taf/intgms/v17y2017i2p205-218.html), treating tilt as a deviation from a player's usual strategy at the emotional, behavioral, and cognitive level. Tilt is not just anger. It is a failure to keep playing your game. You start making decisions that look like poker decisions but no longer come from the same quality of attention.

That distinction feels important. The bad version of AI multi-tabling may not feel like collapse. It may feel like competence. You are still prompting, reviewing, accepting, rejecting, patching. The tokens keep moving. But maybe you are no longer playing your game. Maybe you are in a kind of token tilt: spawning another agent when the real move was to stop; accepting a plausible diff because the queue is long; letting velocity stand in for judgment.

A [28-day observational study by Hamel and colleagues](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2020.600092/full) found that sleep-deprived poker sessions were associated with more emotional and behavioral tilt, more hands played and worse financial results. That does not establish the same effect in AI work, or prove which part of the loop causes which. It supplies an uncomfortable possibility: the state in which judgment worsens may also be a state in which we increase volume.

This is the part I keep circling back to with LLMs. The danger is not only that I will do less good work when tired or overloaded. It is that the system will invite me to do more work in exactly the state where my judgment is getting thinner.

Sean Goedecke's recent post on [doing nothing at work](https://www.seangoedecke.com/doing-nothing-at-work/) gets at this from another angle. His argument is not that engineers should produce less. It is that the highest-impact work is often time-dependent. A big enterprise deal needs one weird bug fixed right now. An incident needs someone calm enough to know which feature flag matters. A high-profile launch gets unstuck because someone remembers the obscure part of the system.

The key line, for me, is not about leisure but capacity: you have to not already be busy.

This is one of those ideas that sounds lazy until you put it next to finance.

In [The Capital of Ideas](https://newmba.co/2023/11/01/strategic-finance/) I was trying to get at a version of this through strategic finance. The move was away from "can we afford this?" toward "how do we account for this, fund this, sequence this, and keep ourselves able to move?" The paper I quoted there, Arbogast and Kumar's [Financial Flexibility and Opportunity Capture](https://ideas.repec.org/a/bla/jacrfn/v30y2018i1p23-29.html), argues that strategy and finance have a gap between them. Strategy talks as if attractive opportunities are generic and available. Finance, at its best, notices that opportunities are specific, transient, and often only capturable by the firm with the flexibility to move.

Financial flexibility is not idle money. It is not failure to deploy capital. It is an option on future action.

So what is the equivalent for knowledge work?

Maybe it is reserve attention capacity.

Reserve attention capacity is the hour you did not allocate. The walk you did not convert into a podcast and three background agents. The morning where you are not already carrying six half-finished threads in your head. The little pool of uncommitted awareness that lets you notice the client email that is actually the work, or the weird data point that changes the deck, or the small strategic opening that would be invisible if you were busy proving you were busy.

The context-window analogy is useful as a feeling, not as a claim that brains and models fail in the same way. I can have enough time to read every output and still lack the attention to understand what each one implies.

This is where AI gets tricky. The tools make it easier to do more, and sometimes more is exactly right. I like having agents as scouts. I like making the computer absorb the annoying first pass. I like the feeling of expanding the search radius of my own attention. In poker terms, there are absolutely moments where the correct move is to open another table because the decisions are familiar and the feedback loops are tight.

But there is also a point where the output surface becomes a constraint. The work of orchestrating, checking, correcting, reconciling, and deciding becomes its own form of utilization. You are still busy. You might even be in something that feels like flow. But it is flow as attention saturation, not necessarily flow as understanding.

You are not idle, but you are no longer free.

Zvi Mowshowitz defines [slack](https://thezvi.substack.com/p/slack) as "the absence of binding constraints on behavior." That phrase is useful because it avoids the sentimental version of rest. Slack is not a scented candle. Slack is the practical condition of not being bound. It lets you wait for better trades. It lets you refuse bad ones. It lets you pursue opportunities. It lets you be honest about what matters because you are not already committed to keeping the machine fed.

The walk, then, is not the opposite of work. It is a refusal to let every spare minute become a binding constraint.

This is also why Rich Hickey's [Hammock Driven Development](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/HammockDrivenDev.md) keeps returning as a kind of folk wisdom for programmers. The talk is not really about hammocks. It is about the kinds of problems that do not yield to typing. Hickey asks when you last thought about something for an entire hour, or day, or month. He argues that many serious software problems are not implementation problems but misconception problems. You cannot test your way out of misunderstanding what you are doing.

LLMs intensify the danger here because they are so good at implementation-shaped motion. They give the feeling of progress exactly where progress is easiest to fake. More diffs. More summaries. More alternate plans. More plausible text. The machine can keep producing artifacts long after the human has stopped understanding what is worth doing.

Of course there is a version of this that becomes precious. "I am preserving strategic capacity" can become a very grand way of saying "I am avoiding the work." There are seasons where the right move is to grind. Sean says this too: sometimes the rewards are high and you work at full intensity. Financial flexibility is not a moral virtue in itself either. Hoarding capital can be cowardice. Slack can become drift.

There is a practical question to ask before opening another thread: when it comes back, what decision will I need to make, and have I left room to make it? If the work can be checked cheaply or safely wait, parallelism has bought me freedom. If it requires another urgent judgment, I have borrowed against the afternoon.

So the question is not "should I run agents or go for a walk?"

The better question is: what kind of opportunity am I trying to preserve capacity for?

If the opportunity is known, scoped, and mostly parallelizable, run the agents. Send scouts. Generate options. Let the machine make the cheap mistakes. Multi-table. If the opportunity is still forming, if the real work is noticing, judging, connecting, or waiting for the transient opening, then maybe the walk is not downtime. Maybe it is the balance sheet.

The hardest thing about leaving a table unopened is that the missed hands are visible. The value of being free is harder to count.

When I come back from the walk, I want to have more than another batch of outputs. I want to be able to see which game is worth playing.
