---
title: How ChatGPT and Gemini decide which hotels exist
kicker: Discovery
readingTime: 2 min, then 7
---

## In two minutes

For twenty years a guest looking for a hotel typed a few words into Google and scrolled a page of
twenty results. Your job was to appear somewhere on that page.

That page is disappearing. Increasingly the guest describes what they want in an ordinary sentence
— "a quiet retreat near Rishikesh for a week in March, with yoga in the morning" — and gets back
**three to five specific recommendations**. Not a page of links. An answer.

This matters in a way that is easy to miss. On the old page, being ranked fifteenth was bad but
survivable; someone might still scroll. In an answer of five, there is no fifteenth place. You are
either in the answer or you do not exist for that guest.

So the question becomes: how does the machine decide who goes in? It reads. It reads your website,
your listings on travel sites, your reviews, forums, and whatever else it can find, and it
assembles an answer from what it can understand. Which means a hotel that publishes its
information in a form machines cannot read is not ranked lower — it is simply never a candidate.

Two numbers frame the opportunity. **About one hotel in six worldwide appears in AI search results
at all.** And the reason is not that hotels are blocking these systems: it is that
**36% of hotels publish no structured data whatsoever**, and only about one in ten does it properly.
This is a technical gap that a competent web developer closes in a week.

Meanwhile Indian travellers have adopted this faster than anyone on earth. A third already use AI
to plan trips, 68% intend to on their next one, and roughly 88% say they trust its recommendations.

**The honest caveat, which most vendors will not give you:** almost nobody is *booking* inside a
chatbot yet, and they will not for a couple of years. What has changed is who gets considered. That
is the whole point — the cheap work is available now, and the expensive change has not arrived.

## The detail

### What actually happens when a guest asks

A large language model does not maintain a ranked index the way a search engine did. It retrieves a
small number of sources relevant to the question — studies have observed anywhere from eight to
around sixty per query — and writes an answer from them. Everything therefore depends on whether
your property appears in the material it retrieves, and whether that material is clear enough to be
used with confidence.

Three findings tell you where that material comes from:

- **84% of the citations** across ChatGPT, Claude and Gemini come from *earned* media rather than
  brand-owned websites. What others publish about you outweighs what you publish about yourself.
- **Reddit is the single most-cited travel domain**, appearing in over 70% of travel answers that
  cite anything at all. Booking.com appears in nearly every hotel answer.
- **Only 38% of the pages cited inside Google's AI Overviews still rank in the organic top ten** —
  down from 76% eighteen months earlier. Being cited and ranking well have become different games.

### Why so many hotels are invisible

The [HotelWorld AI visibility index](https://www.hospitalitynet.org/editorial/4131071/only-one-sixth-of-global-hotels-appear-in-ai-search-results),
built from 2.36 million data points across 130,884 properties in 30 countries, found that only
about **16% of the world's hotels appear in AI search results**. The threshold to reach the global
top 25 rose by a quarter in a single quarter, which tells you the field is filling up.

A separate [analysis of hotel website structure](https://stiplo.io/blog/hotel-ai-visibility) found
the cause, and it is mundane: **36.3% of hotels publish no structured data at all and only 10.6%
publish it well.** Just 3.3% deliberately block AI crawlers. The problem is not hostility to these
systems; it is absence of the plumbing that lets them read you.

Structured data means publishing your rooms, amenities, address, location, price range, check-in
and check-out times, policies and review scores in a standard machine-readable format
(schema.org markup) alongside the human-readable page. It is invisible to guests and decisive to
machines.

### The quality of what arrives

The volume through these channels is currently small and it is important not to oversell it. In
July 2026 ChatGPT accounted for roughly **0.9% of all web referrals**, against Google's 88%.
Anyone claiming that assistants have replaced search as a traffic source is wrong by a wide margin.

But the traffic converts unusually well. AI-referred visitors convert at around **14% against 2.8%**
for ordinary organic traffic, and hotels that surface in AI recommendations have been measured
converting at **11.4%**. This makes sense: the visitor was told you are the right property before
they arrived. They are not comparing twenty options; they are checking one.

The practical consequence is that a broken or slow booking page now wastes the single most valuable
traffic a hotel receives.

### India, specifically

Indians are the most AI-forward travellers measured anywhere. Agoda's 2026 outlook found
[33% already use AI for trip planning and 68% intend to next trip](https://www.prnewswire.com/apac/news-releases/68-of-indian-travelers-likely-to-use-ai-for-their-next-trip-agoda-302764921.html),
with roughly 88% saying they trust AI travel recommendations. Google's own India research puts
confidence in using AI to plan and book at 86%.

Two India-specific facts matter more than the global story:

**Google's conversational layer is already live here.** "Ask Maps", a Gemini-powered way of asking
Maps for places in plain language, launched in the US and India *simultaneously* in March 2026. It
answers from Google Business Profiles and reviews. From September 2026, Android phones across India
began switching their assistant to Gemini by default.

**The assistant that actually books Indian hotel rooms belongs to an OTA.** MakeMyTrip's Myra,
built with OpenAI, handles around 85,000 conversations a day with more than 45% coming from tier-2
and tier-3 towns. It reads MakeMyTrip's own inventory — meaning your photographs, descriptions and
review score *inside that listing* are what it sees. The AI channel in India today is not a way
around the intermediary; it is a new reason the listing must be immaculate.

### What to actually do

In order of return, and the first four cost nothing but attention:

1. **Complete your Google Business Profile** — every field, real photographs, review volume, and
   replies to reviews. This is the highest-leverage asset an independent hotel owns, for reasons
   covered in the next article.
2. **Publish schema.org structured data** on your website. Only one hotel in ten has done this
   properly.
3. **Write a fact-dense page a machine can quote** — distances in kilometres and minutes, what the
   meal plan includes, the cancellation policy in plain sentences. Marketing adjectives cannot be
   quoted; facts can.
4. **Check your robots.txt does not block** GPTBot, Google-Extended or PerplexityBot. Some web
   developers block them by default.
5. **Keep your listings accurate** on MakeMyTrip, Goibibo, Booking.com and Tripadvisor — not to
   sell through them, but because they are what makes you *mentionable*.
6. **Make sure your booking page works on a phone**, because the guest who arrives from an
   assistant arrives ready to buy.

What we would not do yet: buy an AI-visibility monitoring subscription. The category is about a
year old, most of its published numbers are self-serving, and the underlying work is a one-week
task.

## Sources

- [HotelWorld AI visibility index via Hospitality Net](https://www.hospitalitynet.org/editorial/4131071/only-one-sixth-of-global-hotels-appear-in-ai-search-results)
- [Hotel schema markup analysis, Stiplo](https://stiplo.io/blog/hotel-ai-visibility)
- [Agoda 2026 Travel Outlook, India](https://www.prnewswire.com/apac/news-releases/68-of-indian-travelers-likely-to-use-ai-for-their-next-trip-agoda-302764921.html)
- [Think with Google — India travel trends](https://business.google.com/en-all/think/consumer-insights/travel-trends-marketing-india/)
- [AI citation throughput research](https://www.nicolassitter.com/research/ai-citation-throughput-2026)
- [State of AI citations 2026](https://www.5wpr.com/research/state-of-ai-citations-2026/)
- [MakeMyTrip Myra](https://www.makemytrip.com/myra/)
