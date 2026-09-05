# What Survives the Match?

*Brands and marketplaces after the browser*

The phrase **customer journey** contains a hidden assumption: the customer is the one doing the travelling.

They see the ad. Search the category. Visit the site. Compare the options. Read the reviews. Abandon the cart. Return through a branded query. Finally convert.

Marketing has spent decades drawing this journey as a line of human footsteps across media and webpages.

Now imagine planning a family trip a few years from now.

You tell your computer: find somewhere on the coast for two families in August. The younger kids need separate beds. One adult cannot manage steep stairs. We want to walk to dinner, avoid places that feel like resorts and stay below a number that includes all the fees. We would pay more for a host with a flexible cancellation policy because one of the children has been ill.

The computer already knows the school dates, the previous trips everyone liked, which adults are driving, how much flexibility is real and which preferences are merely things you say. It interrogates hotel systems, rental marketplaces, local operators, maps, weather, reviews and cancellation policies. It checks the suspicious listings. It weighs the trade-offs. Then it assembles a temporary interface with three options and asks for approval.

You say yes.

The human journey has three steps: ask, approve, arrive.

The machine journey might contain ten thousand.

This does not mean the browser disappears. People will still wander for pleasure, taste, entertainment and identity. We browse record shops and bookshops even when we know what we came for. But a large class of instrumental journeys—find, compare, coordinate, book, buy, cancel, renew—will move into a harness that acts on our behalf.

A browser is a place the customer goes.

A harness is something that goes on the customer’s behalf.

That inversion is going to be rough for marketing, because almost everything we know how to measure sits on the shrinking human path: impression, ranking, mention, citation, visit, session, conversion.

The customer journey is becoming private computation.

## GEO is measuring the rehearsal

This is why I find much of the current debate about Generative Engine Optimization so unsatisfying.

The original [GEO paper](https://arxiv.org/html/2311.09735v3) is a useful piece of research. It asks how publishers can improve their visibility inside a generated answer and measures things such as citation position and attributed word count. This makes sense if the product is an answer.

But commerce is not an answer. It is a sequence of decisions and actions.

A citation can help a brand enter the model’s working context. It can influence a recommendation. It may be valuable. But it is evidence that your content was in the room, not that your brand won anything.

Being mentioned is not being considered. Being considered is not being chosen. Being chosen is not being successfully delivered. And one successful delivery is not being chosen again.

Even the evidence base for GEO remains young. A [2026 critical survey](https://arxiv.org/abs/2607.14035) of 45 studies—still a preprint—argues that the field has not yet established stable, longitudinal effects across platforms or downstream user behaviour. That will improve. The larger problem will remain.

GEO measures what the model says.

Commerce is what the agent does.

Optimizing for citations in an agentic journey is a little like optimizing the wording of a road sign after the customer has hired a driver. The sign may matter to the driver. But you do not know whether it changed the route, whether your business survived the filters or whether the passenger ever saw it.

The metric is not wrong. It is early.

## Who controls the choice function?

The browser gave platforms enormous power over attention. Search engines ranked links. Social networks ranked posts. Marketplaces ranked listings.

The harness gets a more intimate power: it controls the choice function.

It can decide which options are eligible, which attributes matter, which preferences are hard constraints and which can be traded away. It may know that “near the beach” really means “the children can walk there without complaining,” or that “I prefer Delta” means “choose Delta unless the saving exceeds $200.” It can discover that the consumer’s stated budget is elastic for quiet, trust or cancellation flexibility.

I have been thinking about this as a [model of desire](../agentic-commerce-preferences/draft.md). The old web inferred preferences from clicks, searches and purchases. A personal agent can elicit the murkier stuff before it becomes behaviour: aversions, substitutions, unresolved intentions, values, bargaining posture, the difference between a gate and a weight.

This should create much better matches. It also creates a new intermediary between demand and supply.

The intermediary will not be neutral. Early research on LLM shopping agents finds [model-specific position effects and different sensitivities to price and reviews](https://arxiv.org/abs/2508.02630). This should not surprise us. Existing intermediaries are not neutral either. Research on online travel agents has found that [ranking can be used to discipline hotels](https://www.zew.de/en/publications/rankings-of-online-travel-agents-channel-pricing-and-consumer-protection) that offer lower prices elsewhere.

But a personal harness can shape a market before it displays one. It does not merely rank the candidates. It helps decide what counts as a candidate.

So the contest is no longer simply for attention. It is for influence over the choice function:

- Which data can the agent read?
- Which claims can it verify?
- Which options does it admit?
- Which defaults does it inherit?
- Whose preferences does it protect?
- Who gets to pay to change the answer?

The emerging commerce protocols make the direction of travel fairly explicit. Google’s [Universal Commerce Protocol](https://ucp.dev/) spans discovery, checkout, orders, returns and lodging. OpenAI’s [Agentic Commerce Protocol](https://openai.com/index/buy-it-in-chatgpt/) lets a user buy without leaving the conversation. Both emphasize that the merchant can remain merchant of record and retain the customer relationship.

That is an important design choice. It does not guarantee that the merchant’s brand remains visible or memorable.

Nor does it settle who can buy influence. Google is already experimenting with [Direct Offers inside AI Mode](https://blog.google/products/ads-commerce/agentic-commerce-ai-tools-protocol-retailers-platforms/): advertisers can supply an exclusive offer and the system decides when it is relevant enough to surface. The ad auction is beginning to migrate inside the choice function before we have agreed how that function should be governed.

## A brand is not one thing

The easiest mistake is to say that agents will kill brands.

Brands do several jobs at once.

They are an information shortcut: I choose the familiar name because comparing everything is expensive. They are a trust signal: I believe this company is less likely to fail me. They are a vessel for identity and desire: this object says something about me. And they are an accountable institution: if something goes wrong, there is a name on the promise and someone to call.

The harness attacks these jobs unevenly.

It is very good at weakening the informational brand. If an agent can compare every technical specification, policy, review and price in seconds, familiarity matters less as a substitute for research.

But research on [brand credibility](https://academic.oup.com/jcr/article-abstract/31/1/191/1812026) suggests that trustworthy brands become more valuable when uncertainty and perceived risk are high. An agent can reduce information costs without removing the need for someone to take responsibility. And it cannot automate away the human desire to belong, signal taste or simply want the beautiful thing.

The harness eats the informational brand.

It may strengthen the accountable brand.

Awareness still matters, but only when it changes policy. “I have heard of Delta” is weak. “Prefer Delta unless it is $200 more or adds a connection” is operational. The brand has become a prior inside the customer’s agent—a persistent inclination that affects a future choice before any campaign is seen.

This is a much higher bar than being cited.

## The brand investment ladder

If pageviews and citations no longer describe the journey, where should a brand invest?

I think the economic chain looks something like this:

> **P(value) = P(eligible) × P(chosen | eligible) × P(completed | chosen) × P(chosen again | outcome)**

Notice that `P(mentioned)` is not in the equation.

A mention may affect eligibility or choice. It is an input to the system, not the business outcome. The useful brand funnel in a harnessed market has four layers:

| Layer | Question the harness asks | What brands have to build |
| --- | --- | --- |
| **Callable** | Can I reliably retrieve and transact with this option? | Structured product and service data, live inventory, transparent prices, policies, identity, APIs and permissions. |
| **Preferable** | Why is this the right option for this person? | Distinctive products or supply, verifiable evidence, meaningful attributes, trusted reputation and preference strong enough to enter the customer’s policy. |
| **Reliable** | Will the promised outcome actually happen? | Accurate availability, payment, fulfilment, coordination, quality control and operational competence. |
| **Memorable** | Did the outcome make this option more likely next time? | Service, guarantees, recovery, loyalty, permissioned memory and a relationship that survives the transaction. |

Callability is the admission ticket. It is not a moat.

There will be an understandable rush to make every catalogue machine-readable and every checkout callable. This work is necessary. It may also be rapidly standardized. A protocol that makes you available to the customer’s agent makes every substitute available too.

The strategic question is where the probability collapses.

If your products never become eligible, fix the data and access layer. If they are eligible but rarely chosen, build real distinctiveness and evidence. If they are chosen but fail in delivery, the problem is operational. If they succeed but do not alter the next choice, build memory, trust and service.

This also suggests a different measurement system. Instead of reconstructing a human path through pages, brands will need to understand a decision path through states: eligible, shortlisted, chosen, completed, preferred. The analytics object is no longer the session. It is the mandate and its outcome.

The least glamorous layer may become the most valuable. [Service-recovery research](https://lirias.kuleuven.be/retrieve/ec209dc9-411f-422e-93d9-ea5820bfadeb) consistently treats recovery as a journey that changes trust and the overall evaluation of the company. In a world of persistent personal agents, every support interaction can also become evidence for the next purchase.

Customer service becomes future customer acquisition.

Every refund, rescue and broken promise is training data for the customer’s agent.

## When matching becomes abundant

The brand framework becomes a survival test for marketplaces.

Marketplaces exist partly because matching is difficult. They aggregate fragmented supply, attract demand, help both sides find each other, reduce uncertainty and make the transaction happen. AI agents lower search, preference-elicitation and coordination costs—the central argument of the NBER paper on the [“Coasean Singularity”](https://www.nber.org/papers/w34468).

This does not make every marketplace obsolete. It makes one layer of marketplace value abundant.

If a general harness can discover the providers, collect availability, compare them using the buyer’s full context and coordinate the transaction, then “we put the two sides together” is no longer much of a moat.

The harness makes matching abundant.

Marketplace value must begin where the match ends.

Three things look harder for a general agent to reconstruct:

1. **Supply:** inventory that is scarce, exclusive, fragmented or genuinely difficult to aggregate.
2. **State:** identity, reputation, history, loyalty and relationships that accumulate across transactions.
3. **Stakes:** responsibility for payment, fulfilment, guarantees, insurance, disputes and failure.

Supply gives the marketplace something worth calling. State makes the market more than a fresh search every time. Stakes put an institution on the other end when the transaction breaks.

For a quick diagnostic, collapse state and stakes into the amount of consequential work the marketplace performs after discovery. You get a simple map:

|  | **Little work after the match** | **A lot of work after the match** |
| --- | --- | --- |
| **Replaceable supply** | **Wrapper:** the most exposed. The harness can reconstruct discovery and comparison. | **Operator:** the company may survive through payments, logistics or workflow, while the consumer brand fades into plumbing. |
| **Scarce or controlled supply** | **Catalogue:** useful, but at risk of becoming a feed called by someone else’s interface. | **Institution:** the strongest position—unique supply plus memory, trust and recourse. |

This produces three possible futures for a marketplace brand.

It can remain an institution. It can become plumbing. Or it can be reconstructed.

Becoming plumbing is not the same as dying. A company can process more transactions than ever while becoming less visible to the customer. Revenue can survive while brand power migrates to the harness that owns intent and presents the choice.

## The Yelp-shaped layer of Yelp

This is where naming companies gets dangerous and useful.

The claim is not “Yelp dies.” It is that the Yelp-shaped layer of Yelp—local discovery, reviews and paid visibility wrapped in a destination interface—is unusually reconstructible by a harness with maps, merchant data and a persistent model of the user.

Yelp reported [about $948 million in services advertising revenue in 2025](https://www.sec.gov/Archives/edgar/data/1345016/000134501626000019/yelp-20251231.htm). That is a large business attached to the moment when a consumer is looking for a provider. Its investments in products such as RepairPal point toward a different kind of value: deeper workflow, verification and transaction support after discovery.

Angi is an even cleaner example of matching exposure. In 2025, [57 percent of consolidated revenue](https://www.sec.gov/Archives/edgar/data/1705110/000170511026000011/angi-20251231.htm) came from fees paid by professionals for consumer matches. If an agent can identify licensed local providers, inspect reputation, solicit comparable quotes and schedule the work, a lead is something the harness can manufacture. Angi only escapes by owning more of the trust and completion layer than the match itself.

Travel offers an early glimpse of the same split. Tripadvisor’s [2025 results](https://ir.tripadvisor.com/static-files/aa7fa441-63ca-4330-b1cb-20d4a2498b8f) showed its Hotels & Other revenue down 8 percent and media and advertising revenue down 12 percent, while TheFork grew 22 percent. This is not proof that agents caused anything. It is directionally interesting that the information-and-attention business weakened while the reservation network grew.

Some marketplaces are already crawling down the funnel. Zillow is not merely a property search interface. Its [2025 filing](https://www.sec.gov/Archives/edgar/data/1617640/000161764026000015/z-20251231.htm) describes mortgages, agent software, touring infrastructure and a performance-fee model tied to closed transactions. DoorDash increasingly sells [white-label fulfilment and commerce infrastructure](https://www.sec.gov/Archives/edgar/data/1792789/000179278926000013/dash-20251231.htm) to merchants. Booking Holdings says [70 percent of its 2025 gross bookings](https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm) used its merchant model, pulling it deeper into payments and transaction operations.

These companies may be less likely to disappear than to become callable infrastructure. The restaurant appears in the harness. OpenTable handles the reservation. DoorDash handles the delivery. Booking handles the payment and accommodation workflow. The user may never experience those companies as destinations.

The interface disappears. The institution remains underneath it.

## The listing becomes an API response. AirCover is the brand.

Airbnb is the most interesting test because it contains the whole argument.

Airbnb is already a kind of primitive harness. It aggregates fragmented supply, normalizes listings, ranks options, holds identity and reputation, processes payment, defines policy and steps in when a stay goes wrong. Its great strategic achievement was not merely making vacation rentals searchable. It made staying in a stranger’s home feel like a legible transaction.

A general-purpose harness threatens the top of that stack. It can combine Airbnb listings with hotels, local rental managers and other sources. It can search using context Airbnb does not own. It can assemble its own comparison interface. Demand aggregation—the power of being the place where the customer begins—moves up a layer.

So does Airbnb become an API call?

Partly, yes.

But Airbnb has all three marketplace defences. It has difficult, heterogeneous supply. It holds state in the form of host and guest identity, reviews and transaction history. And through payment, policies, support and [AirCover](https://www.airbnb.com/help/article/3218), it takes stakes in the outcome.

The photos, filters and listing description are increasingly available to the harness. The hard thing to reproduce is the institution that answers at midnight when the host cancels, the apartment does not exist or the heating fails with two children asleep upstairs.

Interfaces disappear on the happy path.

Institutions appear on the unhappy path.

This is why investing in the customer journey outside acquisition is not merely defensive brand work. It may be the way the brand remains present at all. Airbnb’s old customer-journey blueprint tried to improve the experience end to end. In the harnessed world, the acquisition end may be compressed into a machine call. The parts where Airbnb actually fulfils, remembers and repairs the promise become a larger share of what the name means.

The listing becomes an API response.

AirCover is the brand.

## Build for the journey that is coming

The harness does not eliminate brand. It unbundles it.

It converts some brands into attributes, some into preferences, some into invisible operators and some into institutions. It creates vastly more surface area for matching because the customer can reveal a hundred times more context than a search box ever captured. But that does not mean a hundred times more surface area for advertising.

The opportunity is not to insert a brand into every generated answer. It is to become the right answer to a much more specific need—and then actually deliver the outcome.

That requires building for tomorrow’s journey rather than optimizing yesterday’s pageview:

- Make the business callable, but do not mistake access for advantage.
- Build products, supply and evidence strong enough to survive personalized comparison.
- Own enough of fulfilment to keep the promise made by the agent.
- Treat service, recovery and permissioned memory as acquisition infrastructure.
- Measure whether the brand entered the choice set, completed the mandate and changed the next decision.

The brands in danger are not simply the ones with weak awareness. They are the ones whose value ends at being found.

The marketplaces in danger are not simply the ones with bad AI. They are the ones a good agent can reconstruct from public supply, portable reputation and somebody else’s transaction rails.

For thirty years, digital marketing asked how to get the customer onto your website.

The next era begins when the customer does not come.

The question is no longer whether your brand appeared in the journey.

It is whether you were callable, whether you were chosen, and whether you answered when the call went wrong.
