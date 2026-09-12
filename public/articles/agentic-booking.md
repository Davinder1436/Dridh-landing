---
title: Google and Amadeus built agentic booking. Independents were left off the list.
kicker: Booking
readingTime: 2 min, then 7
---

## In two minutes

Let us start with the number that most people selling AI to hotels will not give you.

**Booking Holdings — the owner of Booking.com — confirmed in August 2026 that AI-driven bookings
remain under 1% of volume.** Separately, only about **8% of travellers say they are comfortable
letting an AI complete a booking for them**, and roughly 70% say they would not.

So: nobody is losing rooms to robots this year. Anyone telling you otherwise is selling something.

What did happen is that the infrastructure got built, very quickly, by the largest companies in
travel. And the route they chose is the part that should interest you.

When Google switched on hotel booking inside its AI in August 2026, it did not partner with hotels.
It partnered with **Amadeus** — one of the reservation systems that sits behind the travel
industry — along with Sabre and the big chains. For an independent hotel, that means your access
to this channel will arrive, or fail to arrive, **through your technology vendor**: your channel
manager or booking engine.

And here is the finding that matters most: **almost no property management system or channel
manager anywhere has shipped something an AI assistant can book through.** The first to do it —
Apaleo — shipped in September 2026. Most of what the industry markets as "AI" today is dynamic
pricing and marketing copy generation.

Which leaves a specific, immediate risk that has nothing to do with the future. When an assistant
is asked about your hotel *by name* and cannot read live rates from your own site, it does the
sensible thing — it sends the guest to the listing it *can* read, which is the OTA. You then pay
commission on a guest who asked for you by name.

## The detail

### The sequence, which tells the story

| When | What happened |
|---|---|
| Oct 2025 | OpenAI launches travel apps in ChatGPT with Expedia and Booking.com |
| Spring 2025 | Perplexity ships in-app hotel booking with Selfbook and Tripadvisor, ~140,000 properties |
| **Mar 2026** | **OpenAI pulls in-chat checkout for travel.** Expedia rises 12% and Booking 8% that day |
| May 2026 | Google names hotels the next vertical for its commerce protocol |
| **Aug 2026** | **Google ships hotel booking in AI Mode** — US only, English only, ten chain and platform partners |
| Aug–Sep 2026 | Universal Commerce Protocol for Lodging announced with Amadeus as co-developer |

The middle row is the most instructive. OpenAI tried in-chat travel checkout and retreated within
months. The stated reasons were precisely the things that make hotel commerce hard: rates that move
minute by minute, cancellation terms that differ by rate type, multiple currencies, and the need to
service a booking after it is made. Walmart's data from the same period found that in-chat checkout
converted roughly **three times worse** than sending the customer to the retailer's own site.

The model that survived is worth memorising: **discover in AI, buy on your own site.**

### The protocols, briefly

Three acronyms will be quoted at you. They are layers rather than competitors, and only one
currently matters to a hotel.

- **MCP** — originally from Anthropic, now adopted by OpenAI, Google and Microsoft. It is the
  standard way an assistant discovers and calls another system's functions: a universal plug
  between an AI and a booking system. It is open, which means any booking engine can implement it.
  This is the one that matters.
- **UCP** — Google's commerce protocol, extending to lodging. Importantly, the property remains
  merchant of record and keeps the booking data, which is the right design for hotels. Still
  pre-specification: the developer page is a waitlist rather than documentation.
- **ACP** — OpenAI and Stripe's checkout protocol, built for retail. Its retail assumptions are a
  large part of why travel checkout failed on it.

### The brake nobody mentions

Every forecast of agentic booking runs into the same wall: people do not want it yet.
[Expedia's study with YouGov](https://www.businesswire.com/news/home/20260414532485/en/Expedia-Group-Reveals-The-AI-Trust-Gap-Travelers-Embrace-AI-for-Planning-but-Rely-on-Trusted-Brands-to-Book)
found 8% comfortable letting AI book; Skift found 2% would allow it without sign-off; Accenture
measured 7% for fully autonomous booking. Separately, only about **11% of travel companies** have
an agent technically capable of pricing and completing a booking in real time.

An enormous amount of engineering is being pointed at something a single-digit percentage of
customers currently want. That will change — but it changes at the speed of trust about money,
which is slow.

### What is genuinely live in India

**MakeMyTrip's Myra**, launched in its second version in May 2026, is the clearest example
anywhere of agentic hotel booking working at scale: around **85,000 conversations a day, more than
45% from tier-2 and tier-3 cities**, a reported 10% conversion improvement, and more than half of
post-booking queries resolved without a human. It handles voice, in several languages.

It also books MakeMyTrip's own inventory, at MakeMyTrip's commission. Which is the point: where
agentic booking already works, it currently belongs to the intermediary.

### The risk that exists today

This is the part that is not speculative. Consider what happens when a guest asks an assistant
about your property by name:

- If your own site publishes **live, correct rates** and readable policies, the assistant can send
  the guest directly to you. Commission: nothing.
- If your rates are stale, hidden behind a form, or inconsistent with what is published elsewhere,
  the assistant routes to the OTA listing it can read. Commission: 18 to 25%.

Add that OTA bookings cancel at around **21.8% against 10.6% for direct bookings**, and being
machine-unreadable has a measurable cost today, in this booking season, with no reference to the
future at all.

### What to do, and what to ask

Four conditions, none of which require buying anything for a hypothetical channel, and all of which
pay off immediately through ordinary bookings:

1. **Live, correct rates on your own site**, matching or beating what appears elsewhere.
2. **Machine-readable policies** — cancellation terms, what the total price includes, taxes, meal
   plans — as structured text rather than a PDF or an image.
3. **A booking page that completes a sale on a phone, without a login wall.**
4. **One written question to your channel manager:** *"What is your roadmap for UCP for Lodging and
   MCP?"* The answer — including an evasive one — tells you whether your current vendor will carry
   you into this channel or leave you outside it.

The best published blueprint so far is Mirai's, which rebuilt its booking engine to be MCP-ready
and exposed structured inventory to external agents with no visual interface at all. That is
buildable today, because MCP is open.

## Sources

- [Skift — OpenAI's travel checkout retreat](https://skift.com/2026/03/20/otas-ai-discovery-transactions/)
- [Skift — Google's agentic hotel booking](https://skift.com/2026/08/27/googles-agentic-hotel-booking-tool-comes-to-ai-mode/)
- [Skift — hotels as the next agentic vertical](https://skift.com/2026/05/19/google-names-hotels-as-next-vertical-for-agentic-shopping/)
- [Google UCP for Lodging](https://developers.google.com/hotels/ucp)
- [Expedia and YouGov — the AI trust gap](https://www.businesswire.com/news/home/20260414532485/en/Expedia-Group-Reveals-The-AI-Trust-Gap-Travelers-Embrace-AI-for-Planning-but-Rely-on-Trusted-Brands-to-Book)
- [PhocusWire — Perplexity and Selfbook](https://www.phocuswire.com/perplexity-selfbook-agentic-ai-travel-booking-tripadvisor)
- [MakeMyTrip Myra](https://www.makemytrip.com/myra/)
