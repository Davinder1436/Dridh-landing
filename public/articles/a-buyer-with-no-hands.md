---
title: Mastercard's agentic payment move, and the wall it hits
kicker: Payments
readingTime: 2 min, then 7
---

## In two minutes

Card payments were built on an assumption that is quietly stopping being true: that a person is
present. The card in a hand, the one-time password on a phone, the signature — all of it exists to
prove a human agreed to this particular purchase.

So when software buys something on someone's behalf, the whole apparatus falls over. How does a
shop know the program in front of it was genuinely authorised? And if it buys the wrong thing, who
pays?

Visa, Mastercard, Google, Stripe and American Express have spent eighteen months on this and have
largely converged on the same answer: a **chain of signed permissions** that travels with the
transaction. The human signs a permission saying "book a retreat, under ₹40,000". The software
turns that into a second signed record naming the exact room and price. The merchant can check
both before accepting.

They have solved the first problem. The second — who pays when it goes wrong — is unresolved, and
**by default the merchant absorbs it.** Only American Express has committed to covering erroneous
AI purchases.

For an Indian hotel, though, the practical position is simpler than any of this. **None of it
works here**, because Indian guests pay by UPI and every agentic protocol so far is built for
cards. India does have its own delegated-payment mechanisms — but they are capped at **₹5,000 per
transaction and ₹15,000 a month**. A retreat stay runs ₹18,000 to ₹1,20,000.

It is a groceries rail, not a hotel rail. The blocker is a regulatory number, not missing
technology — which is why this could change faster than people expect, and why it is the single
line item worth watching.

**One thing that is not distant:** from **1 October 2026**, the RBI changes how Indian banks
authenticate cross-border card payments. If you take deposits from foreign guests, that affects you
in weeks, not years.

## The detail

### The mandate chain

The mechanism every major network arrived at works like this:

1. **Intent.** The person authorises an agent within limits — a budget, a category, an expiry. This
   is signed and can be verified later.
2. **Cart.** The agent selects something specific and produces a second signed record: this room,
   this price, these cancellation terms.
3. **Verification.** The merchant checks both signatures before accepting. This is what lets a
   hotel know the booking is genuinely authorised.
4. **Payment.** A final credential tells the card network that a machine is transacting, so it can
   be priced and risk-assessed differently from a human purchase.

Google's version, **AP2**, expresses this most clearly, carrying the three mandates as W3C
Verifiable Credentials. Google
[donated it to the FIDO Alliance in April 2026](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) —
a meaningful signal, since handing a protocol to a neutral standards body is what a company does
when it wants the thing to become shared infrastructure rather than its own product.

### Where each company stands

**Visa** announced Intelligent Commerce in April 2025 and the Trusted Agent Protocol in October
2025. Its design choice is pragmatic: rather than build a new rail, it rides on the EMV 3-D Secure
infrastructure merchants already use, so a merchant that supports 3-D Secure adds fields rather
than rebuilding. Adyen shipped support in January 2026.

The volume is worth quoting whenever someone claims this has arrived: as of December 2025, Visa had
processed **only "hundreds" of agent transactions**, with about 20 partners in production.

**Mastercard** launched Agent Pay in April 2025 with "Agentic Tokens" letting a verified agent
transact for a cardholder. It reached all US cardholders in November 2025, then Australia, New
Zealand and the EU through 2026. **India does not appear at any stage of that rollout.** No Indian
issuer mints these tokens today.

**OpenAI and Stripe** launched the Agentic Commerce Protocol in September 2025. Travel was pulled
in March 2026. Where Instant Checkout does operate, OpenAI charges merchants **4%** — cheaper than
an OTA, far more expensive than a direct booking.

**American Express** committed in April 2026 to **cover erroneous AI-agent purchases**. This
matters out of proportion to Amex's market share, because it is the only concrete answer anyone has
given to the liability question. No jurisdiction has regulated agentic purchase liability, and
chargeback rules cannot yet distinguish an agent from a human. Absent a rule, the merchant carries
it.

### Why India is a different problem

India has the delegation mechanics already. **UPI Circle** lets one person authorise another to pay
from their account. **Reserve Pay** blocks funds in advance. Both are structurally the right shape
for agent payments.

Both are capped far below a hotel booking:

| Mechanism | Cap |
|---|---|
| UPI Circle | ₹5,000 per transaction, ₹15,000 per month |
| Reserve Pay | roughly ₹10,000 over ninety days |
| A typical retreat booking | ₹18,000 – ₹1,20,000 |

Movement is real. **NPCI's Unified Agent Protocol** was expected to be unveiled at the Global
Fintech Fest in Mumbai in September 2026, reusing UPI Circle delegation and Reserve Pay. In
February 2026, **Razorpay, Cashfree and PayU all shipped agentic payment products**, with Razorpay
live on ChatGPT alongside NPCI and OpenAI in a pilot of 15 to 20 merchants.

The Indian payments industry is not behind on capability. It is waiting on limits.

### The deadline that is actually close

From **1 October 2026**, the RBI requires Indian card issuers to validate an additional
authentication factor when an overseas merchant requests it for cross-border card-not-present
transactions.

For any property taking deposits from foreign guests — most retreats, every wellness centre — this
changes how international card payments behave. International cards already fail frequently on
Indian gateways, often because international acceptance is switched off by default and requires
extra documentation to enable.

This is the most immediately actionable item in this article, and it has nothing to do with AI. A
property that fixes international card acceptance now solves a problem it already has, and happens
to clear a precondition for the agentic channel later.

### The fraud that is here already

While agent *payments* remain rare, agent-driven *fraud* is not. **69% of merchants report being
hit by AI-enabled fraud and only 3% feel prepared.** Traffic from generative-AI sources has been
measured as up to 1.7 times more likely to be fraudulent.

For a hotel, the near-term exposure is not an agent paying wrongly. It is automated traffic
hammering your booking engine, scraping rates and testing stolen cards. That is a 2026 problem with
2026 solutions: rate limiting, bot protection, and a correctly configured payment gateway.

### What to do

1. **Fix international card acceptance** before 1 October, and verify international payments are
   actually enabled on your gateway.
2. **Take the deposit at the moment of booking** rather than authorising and capturing later.
   Agent-initiated payments are hostile to delayed capture, and immediate collection is better
   business regardless.
3. **Publish the total landed price** — room, taxes, GST, fees — as machine-readable data. An agent
   that cannot compute a final price will not select you, and a guest who discovers fees at
   checkout abandons.
4. **Protect the booking engine from bots.**

What we would not do: build anything for agentic payments in 2026.

## Sources

- [Visa Intelligent Commerce](https://usa.visa.com/products/visa-intelligent-commerce.html)
- [Visa Trusted Agent Protocol](https://corporate.visa.com/en/products/trusted-agent-protocol.html)
- [Mastercard Agent Pay](https://www.mastercard.com/news/press/2025/april/mastercard-agent-pay/)
- [Google AP2 and the FIDO Alliance](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)
- [Stripe and OpenAI — Instant Checkout](https://stripe.com/en-hu/newsroom/news/stripe-openai-instant-checkout)
- [NPCI — UPI Circle](https://www.npci.org.in/what-we-do/upi-circle/product-overview)
- [Reserve Bank of India](https://www.rbi.org.in/)
