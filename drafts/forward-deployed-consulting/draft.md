# The Forward Part

There is a particular kind of consulting day I recognize immediately now. I am on a client call, someone shares a half-formed complaint about a workflow, I ask two or three annoying questions, and then instead of saying "this should be a deck" or "we should scope a workstream" I find myself opening the repo.

Not because the answer is definitely code.

Because sometimes code is the fastest way to find out what the question really is.

This is the part of the forward deployed engineer idea that I keep circling around. Not the engineer part, exactly. Everyone wants to talk about whether FDEs are real engineers, glorified solutions consultants, professional services in a hoodie, or the secret sauce of Palantir. Fine. But the more interesting word is forward.

Forward where?

Palantir's own description is fairly plain: a forward deployed software engineer "embeds directly" with customers, configuring existing platforms and implementing solutions in collaboration with end users. The First Round version sharpens it: the FDE builds the "last mile" of the product in production while still writing and debugging real code. Nabeel Qureshi's description of early Palantir is even better: FDEs went onsite, gained intricate knowledge of business processes, used that knowledge to design software that actually solved the problem, and then the product teams generalized what worked.

The software industry hears this and mostly sees a go-to-market innovation. A way to get AI agents into messy enterprise workflows. A way to trade margin for moat. A way to close big deals.

But from the consulting side, it looks like something older and stranger: the return of the field.

## Forward Means Close Enough To See

The core consulting skill has always been a kind of closeness. Not agreement. Not intimacy. Not even trust, exactly. Closeness as an observational stance.

In [Ways of Seeing](https://tomcritchlow.com/2018/10/29/ways-of-seeing/) I wrote that to understand culture you have to get "close enough to smell the client." That line feels more literal now. Culture does not show up in the kickoff deck. It shows up in the in-between moments: how a team handles crisis, who is allowed to interrupt whom, which spreadsheet everyone pretends is temporary, what language makes people roll their eyes, which internal tool has a nickname.

The forward deployed engineer is valuable because enterprise software is increasingly tangled in exactly this kind of local knowledge. The hard part is not always the model, the interface, or even the integration. The hard part is that the model, interface, and integration are being lowered into an organization with myths, scar tissue, politics, permissions, rituals, and weirdly load-bearing Google Sheets.

It is tempting to filter this out while searching for the technical problem. A good consultant—and a good engineer in the field—learns to treat it as signal.

This is where the "forward" part matters. An interview, a sales call or a requirements document can get you closer. The test is whether you remain close enough to encounter the consequences when the stated requirement turns out to be only the respectable version of the problem.

Forward is proximity plus consequence.

## The Edge Posture

Maybe the useful phrase is not forward deployed engineering but edge posture.

The edge is where the official organization meets the actual work. It is where the roadmap meets the exception, where the platform meets the workaround, where the executive narrative meets the person who has to click the button eighty-seven times a day.

This has always been where good consultants operate. In [Workshops as Portals](https://tomcritchlow.com/2019/09/23/workshops/), the workshop is not really a workshop. It is a portal into the client's reality. It creates just enough contract, permission, and shared attention to move from the outside of the organization to the inside of the situation.

The FDE has a similar portal, but the artifact is often a prototype instead of a workshop.

You build a small thing. You show it to the users. They correct you. You build another thing. Someone reveals a dependency they forgot to mention. You discover that the data is wrong, but politically correct. You discover that the workflow exists because another team once failed, loudly, three years ago. You discover that the blocker is not technical but status-shaped.

This is why I am suspicious of definitions of FDE that over-index on technical implementation. Yes, the FDE has to build. But the building is also a diagnostic instrument. A prototype is a question with a runtime.

That is the part I feel in my own work changing. I used to reach for frameworks, diagrams, audits, and decks as the primary instruments of strategy. I still do. But increasingly I find the fastest route to understanding is to make something operational, even crudely operational. A script. A crawler. A dashboard. A workflow. A tiny internal tool. A branch that touches the real system.

The repo has become another way of seeing.

## Their Culture Eats Your Pull Request

There is an obvious trap here for engineers.

Engineers like to think that working software wins. Sometimes it does. But a pull request is still a recommendation. It still enters the client's culture, and their culture eats your strategy for breakfast. It will eat your pull request too.

This is the consulting lesson from [The Consultant's Grain](https://tomcritchlow.com/2017/07/18/the-consultants-grain/). Some recommendations go with the grain of the organization. They move fast because they clarify something the organization already wants to become. Others go against the grain. They might be technically right and strategically sound, but they require belief change at scale.

The same is true of code.

Some code slips into the organization because it amplifies an existing desire. It gives a team a thing they already wanted, in a form they can immediately use. Other code asks the organization to become different before it can benefit. It requires a new owner, a new budget line, a new data discipline, a new review process, a new political settlement between product and marketing or operations and legal.

This is why "just ship it" is sometimes the wrong lesson from FDE. The more useful lesson is: ship something close enough to learn which direction the grain runs.

There is a craft here. A forward deployed engineer needs to know when to make a small tool that creates momentum, when to build a prototype that surfaces resistance, and when to stop coding because nobody has the authority or capacity to use what comes next.

## Don't Give Advice, Build A Mirror

In [Don't Give Advice, Be Useful](https://tomcritchlow.com/2024/01/23/advice/), I argued that "you should..." is a dangerous phrase because it assumes control over client resources and collapses diagnosis and solution into one move. The better stance is to help the client see the problem clearly enough that action becomes easier.

That chapter was written about consulting, but it might be the single most useful principle for FDEs.

The junior version of forward deployed work is: the client has a problem, I build a thing.

The senior version is: the client has a story about a problem, I build a mirror that lets them see the actual system.

Sometimes the mirror is a dashboard. Sometimes it is an agent workflow. Sometimes it is a working prototype. Sometimes it is a data quality report that proves the automation cannot possibly work yet. Sometimes it is a very small script that makes everyone realize the real bottleneck is not the software but the handoff between two teams.

This is where consulting skills become concrete. Active listening is not being nice on calls. It is model-building under uncertainty. Status sensitivity is not office politics for its own sake. It is knowing how to introduce a new artifact without humiliating the person whose current process it replaces. A framework is not a 2x2 slide. It is a portable piece of language that helps the client remember what they just learned.

The FDE who lacks these skills becomes a very expensive implementation engine.

The FDE who has them becomes a way for the organization to perceive itself.

## Status Switching At The Keyboard

One of the oddest consulting skills is status switching. In [Navigating Power & Status](https://tomcritchlow.com/2020/06/24/navigating-power-status/), I wrote that the consultant has no fixed place on the org chart. They move across the organization, borrowing status from an executive sponsor in one room and lowering status with employees in another. Sometimes they switch within a single conversation.

The forward deployed engineer has the same problem, with a keyboard attached.

With executives, the FDE may need high-status technical judgment: this is possible, this is fragile, this will not work, this is the real constraint. With users, the FDE often needs low-status curiosity: show me how you do it today, where does this break, what do you call this field, why is that spreadsheet named final-final-v3?

Then, five minutes later, the FDE may need to become high status again with an internal engineering team: we need to build this differently because the customer reality is not what the roadmap assumes.

That movement is exhausting. It is also the job.

It is why the best FDEs look a little like consultants, a little like product managers, a little like engineers, and a little like anthropologists with commit access. The trick is not to blend these identities into mush. The trick is to know which one the moment requires.

## Kairos Engineering

There is also a time dimension. Traditional engineering organizations often run on chronos: sprint cycles, roadmaps, planning rituals, release trains. Consulting, at its best, learns to operate on kairos: the right intervention at the right moment.

In [The Consultant Out of Time](https://tomcritchlow.com/2021/01/26/kairos/), I called this just-in-time consulting. Once enough trust and context exist, the consultant is evaluated less by deliverables and more by effectiveness. You learn to sense when to push, when to wait, when to make the thing legible for finance, when to create momentum for the point of contact, when to leave the system alone long enough for the change to propagate.

FDE work has the same rhythm. The valuable intervention is not always the biggest build. Sometimes the valuable intervention is the tiny integration before the board meeting. Sometimes it is the proof of concept that lets the buyer feel the future. Sometimes it is deleting a feature because it creates a new coordination burden. Sometimes it is doing nothing for a week while the client organization metabolizes the last thing you shipped.

This is a hard lesson for technical people because code feels like progress. But organizations do not absorb change at compile time.

The forward deployed engineer needs a clock for the machine and a clock for the client.

## Strategy After The Deck

What is changing in my own work is that strategy feels less and less like a category of deliverable and more like a mode of contact with reality.

The old caricature is that consultants make slides and engineers make software. The FDE moment scrambles that division. The engineer at the edge of the organization is doing strategy because they are deciding what reality gets represented in the system. The consultant who can build is doing engineering because they are no longer only describing the gap between current state and future state. They can make a small bridge and watch who crosses it.

This does not make decks obsolete. Thank god, honestly, because I still love a good diagram. But it changes what the deck is for. The deck is not the strategy. The deck is one artifact in a chain of sensemaking, implementation, socialization, and repair.

Maybe this is the real value of FDE for technical people: it forces them to learn that implementation is not downstream of strategy. Implementation is one of the places strategy becomes visible.

And maybe this is the real value of engineering for consultants: it forces us to learn that ideas are cheaper than contact with the system. The system answers back. The API says no. The permissions are wrong. The user ignores the button. The workflow is not the workflow. The thing everyone said was automated turns out to be someone moving rows around every Thursday morning.

That is humbling.

It is also useful.

## The prototype needs an exit

A prototype can reveal the organization and still leave it worse off. Someone has to maintain the tool, own the data, understand its failures and decide when it should disappear. The outsider can leave; the dependencies stay.

Imagine a small script that reconciles two teams' spreadsheets. It reveals that they disagree about what counts as a customer. The useful result may be a shared definition and a change to the source system. If the script becomes permanent glue, it can conceal the disagreement again. The thing that helped you see becomes another workaround nobody wants to touch.

So every prototype should carry two questions: what are we trying to learn, and what happens to this thing after we learn it?

That is where the consulting posture has to accept an engineering obligation. A working demo is an invitation to depend on you. Production ownership is part of the advice.

## Toward A Field Manual

If I were teaching consulting skills to technical people trying to become forward deployed, I would probably not start with "client management." I would start with fieldcraft.

How to enter an organization without accepting its self-description too quickly.

How to listen for the difference between the stated requirement and the live problem.

How to build small artifacts that reveal the system.

How to notice whether your work is moving with or against the grain.

How to create simple, local language that travels.

How to switch status without losing yourself.

How to be useful before you are right.

How to tell when code is momentum and when code is avoidance.

This is all consulting work. It is just becoming newly valuable to engineers because AI is making the act of building cheaper, faster, and closer to the client. When building gets faster, the bottleneck moves. The scarce skill is not only writing the code. It is knowing where to stand, what to notice, what to build first, and how to help the organization absorb what the software makes possible.

The repo lets me ask a different kind of question. The client can answer by using the thing, correcting it, resisting it or ignoring it. Each response tells me something a requirements document could not.

The forward part is staying for the answer.
