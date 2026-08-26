# Things I Think About AI

Noah Brier recently published [33 things he thinks he thinks about AI](https://newsletter.brxnd.ai/p/things-i-think-i-think-about-ai-2026). I found myself agreeing with some, arguing with others, and writing my own list in the margins.

So here are twelve things I think about AI in August 2026. Predictions, provocations, strongly held opinions, loosely held — call them what you like. In this field, six months is enough time to be proven wrong twice.

## 1. We are still in the dial-up era of AI

Tokens per second is a wildly underappreciated metric.

Right now we still send a prompt and wait for the AI to do its work. Even with the best models and interfaces there is a start-stop quality to the interaction: ask, wait, receive. It feels like downloading an image one line at a time over dial-up internet.

Speed is not merely the same thing, faster. Broadband did not just make webpages load more quickly. It enabled streaming video, cloud software, multiplayer games, video calls and eventually whole categories of product that made no sense when every interaction had to survive a wait.

The same will be true for AI. When models respond instantly, voice stops feeling turn-based. Interfaces can redraw themselves continuously. An agent can explore ten branches before you notice it has started. Software can feel responsive and manipulable rather than something you submit a request to.

I am waiting for the broadband era of AI.

And Google might win it. Google may look half-asleep at the wheel when the conversation is narrowly about the smartest frontier model, but don't count them out. Its work on [diffusion models for text](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/) and its long investment in custom chips put it in a very interesting position if speed becomes a product primitive rather than a benchmark footnote.

## 2. Memory will become a harness, not a feature

Noah's number twenty says that memory in chats and harnesses still does not really work out of the box, and he is not sure it ever will.

I agree with the first half and disagree with the second.

I think you can fit most people's useful context into a surprisingly small Markdown file. Most of us are not as unique as we like to imagine — or, more precisely, the context required to be genuinely useful is smaller and more compressible than we think. Projects, family, constraints, recurring obsessions, preferences, working style, a handful of formative stories: it adds up, but not to an impossible quantity of text.

The interesting problem is not storage. It is the memory harness around it: automatically summarizing, compacting, extracting, reconciling and remembering. Which repeated observations should be promoted into durable memory? Which claims need provenance? Which facts are temporary? Which contradictions should remain unresolved?

Then memory pushes into stranger territory. Beyond what do I know about you, what do I know about what you value? How do I notice that your values have changed? How do I discard a preference, story or identity that you have outgrown?

Good memory has to forget.

We need an overnight memory process: a quiet cycle that revisits the day's interactions, rearranges them, compresses some things, preserves others and lets the rest fade.

Do LLMs dream of electric sheep?

## 3. The chat box is a transitional interface

Codex is the best AI GUI by a country mile. It is also still fundamentally organized around text.

This is a little like looking at early Google and assuming the future of search was an increasingly good list of blue links. Over time Google built Maps, Shopping, Images, Video, flights, weather, calculators and knowledge panels. The box remained, but the answer acquired a form.

AI interfaces will make the same journey. A request about geography should become a map. A request about trade-offs should become an interactive model. A request to understand a codebase should become a navigable system. A plan should become a canvas you can rearrange. A buying decision should become a live comparison, not three paragraphs and a bulleted list.

There is fun experimentation here already, but it will become mainstream very quickly. The native interface of AI is not conversation. It is an interface generated for the problem in front of you.

## 4. Web analytics is dead, but nobody has acknowledged it yet

A pageview assumes a page was viewed by a person. A session assumes a continuous person moving through a site. A referral assumes a path you can observe.

All three assumptions are dissolving.

Agents browse, search, compare and extract on our behalf. Sometimes they return an answer. Sometimes they act. Sometimes the human never visits the page at all. Sometimes the agent's ten requests represent one person's intent; sometimes one agent is acting for a thousand people.

So we have two options. We can abandon analytics as a coherent idea, or we can standardize agent and bot sessions with consistent identifiers, declared mandates and useful provenance. Not simply “bot traffic,” but: this agent is operating on behalf of a person, with this kind of intent, across this sequence of requests.

And what is a “real user” in 2026 anyway? If I delegate the work of visiting your website to an agent, that is still my attention, my need and potentially my money. It just no longer looks like me in Google Analytics.

## 5. Content licensing is a ticking time bomb

As people rely on frontier models for agentic workflows, those models need access to real content. Not just training data from six months ago, but live reporting, specialist analysis, product information, reviews, forums, research and databases.

Publishers, meanwhile, are not going to calmly accept unlimited extraction while their traffic and business models evaporate.

The result is going to be a mess. We will see ChatGPT able to access the New York Times while Anthropic cannot, or vice versa. A workflow will work in one model and fail in another because of a licensing negotiation the user cannot see. It will feel like the AI-era equivalent of App Store rules preventing you from paying for something inside an app: nonsensical from the user's perspective, perfectly explicable as the scar tissue of platform negotiations.

Perhaps a robust content-licensing ecosystem emerges: transparent rights, standard pricing, machine-readable permissions, payments flowing cleanly back to creators and publishers.

I would currently put the chances of that working at less than five percent.

The more likely future is bilateral deals, crawler blocks, lawsuits and a fragmented information environment disguised as model quality.

## 6. Consumer AI is still embarrassingly bad

It is astonishing that I can ask an agent to inspect a large codebase, design a database migration and open a pull request — then ask the same system to find a genuinely good local restaurant that is open tonight and suitable for my family and watch it fall apart.

Maps, shopping and local business information are still terrible across all the major AI products. Details are stale. Products are invented. Locations are misunderstood. Recommendations collapse into generic listicles.

We have seen an explosion of innovation in coding and business-process workflows. We are still waiting for the equivalent leap in everyday consumer use cases.

This is Google's game to lose. Maps, merchant data, reviews, Search, Android, YouTube, years of local intent: the ingredients are sitting there. The question is whether Google can assemble them into an agentic consumer product before someone else builds a better interface over the world Google already mapped.

## 7. The models are getting very good at writing

I disagree with the increasingly fashionable claim that models are getting worse at writing. They are getting [very good at writing](https://x.com/tomcritchlow/status/2083260043915317673).

They can produce good sentences. They can imitate forms, find structure, diagnose repetition, generate alternatives, hold an argument in view and help a writer discover what they are actually trying to say.

What they are still bad at is deciding what deserves to be said.

Every writer announcing that they will “never use AI in their workflow” is going to be wrong. Microsoft Word did not replace writers. Spellcheck did not replace writers. Google Docs did not replace writers. AI will become another essential and occasionally wonderful layer in the act of writing — researcher, editor, provocateur, critic, rearranger, maker of options.

And yes, we will continue to see slop as far as the eye can scroll. These ideas are not contradictory. The models can become excellent writing tools at exactly the same moment that collapsing production costs fill the world with terrible writing.

## 8. An AI movie will break through because it is good

By early 2027, I think we will see a feature-length, fully AI-generated movie break into mainstream success.

Not a curiosity that people watch because it was made with AI. Not a technical demo stretched painfully to ninety minutes. A movie that escapes the AI discourse because it is simply good: funny, frightening, moving or visually unlike anything we have seen before.

The definition of “fully AI-generated” will become tedious almost immediately. A person still imagined it. A person directed the models. A person selected, edited and obsessed over the result. The meaningful shift is that a tiny team — perhaps one person — can attempt a scale of creative production that previously required a studio.

There will be oceans of synthetic garbage. There will also be strange new work made by people who were previously locked out of the means of production.

I am excited about lowering the minimum viable cost of imagination.

## 9. AI will change which companies can be acquired

The spreadsheet logic of an acquisition can look wonderful while the actual integration destroys the value. Systems do not connect. Data is incompatible. Processes conflict. Institutional knowledge leaves. Two companies spend years arguing over whose software, taxonomy and way of working survives.

AI is going to make smart, competent companies much better at swallowing other companies.

Agents can map systems, translate schemas, rewrite connectors, compare contracts, document undocumented processes, migrate knowledge and help reconcile the thousands of small differences that make integration slow. This does not make M&A easy — culture and power remain stubbornly human — but it can radically shrink the technical and operational integration tax.

Deals that did not make sense before will become possible.

This produces two apparently opposite futures. AI may enable the one-person billion-dollar company. It may also enable trillion-dollar companies operating across hundreds of industries.

Those are actually the same prediction. AI reduces the coordination costs at both ends of the scale.

## 10. The shape of code is going to change

We are under-appreciating what happens when AI writes and consumes ninety-nine percent of code.

Code today is written for two audiences: the machine that executes it and the humans who have to understand, review and maintain it. If the second audience increasingly becomes another machine, the morphology of the codebase changes.

We may get more duplication, not less. Smaller and more modular files. More explicit local context. Fewer clever abstractions whose value depends on a human carrying half the architecture in their head. “Don't repeat yourself” is partly a response to the coordination costs of human teams. When reading, writing and refactoring code become cheap, local clarity may beat global elegance.

LLMs are not especially good at elegant solutions. Maybe the discourse is too focused on whether they have taste and not enough on what happens when elegance stops being the governing ideal.

The humble AGENTS.md file feels like a very early fossil from this new environment. Repositories will grow living architecture maps, intent layers, constraints, provenance, machine-readable policies and something much more useful than a static instruction file. The codebase will explain not just what it is, but what it is trying to remain.

We may end up with more code, less elegance by human standards, and systems that are nevertheless easier for machines to navigate, regenerate and repair.

## 11. You will never answer an unverified phone call again

Voice cloning, automated sales calls and infinitely patient scam agents will finish what robocalls started.

Very soon, an unknown phone number will not merely feel annoying. It will feel actively unsafe. Calls will need an identity layer: a verified person or organization, a declared reason for calling and perhaps a machine-generated summary before your phone ever rings.

The phone call will become an authenticated request for synchronous attention.

You are never going to answer a non-verified caller ever again.

## 12. You have not seen weird yet

If you think things are weird now, you have not seen anything yet.

We are extrapolating from a world of dial-up-speed models, primitive memory, text boxes, broken agent identity, brittle content access and laborious organizational integration. All of those constraints are moving at once.

The first-order story of AI is that it helps humans do existing things faster.

The second-order story begins when intelligence becomes fast, persistent, embodied in new interfaces, able to act across the world and cheap enough to reorganize institutions around it.

We have barely started the second story.
