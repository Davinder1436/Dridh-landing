# Dridh — landing page

Vite + React + TypeScript. Single page, no router, no backend.

```bash
npm install
npm run dev        # http://localhost:5180   <- use this while developing
npm run build      # typecheck + production build into dist/
npm run preview    # http://localhost:5181   serves the built dist/
```

Both ports are pinned in `vite.config.ts`, so a bookmarked tab keeps working. The page **cannot**
be opened by double-clicking `dist/index.html` — articles are fetched at runtime, and `file://`
blocks that. The app detects it and says so rather than failing silently.

## Before this goes live

Three placeholders are deliberate and visible:

| What | Where | Note |
|---|---|---|
| **15-minute booking link** | `src/config.ts` → `SITE.scheduling` | Not connected yet, so every "book a slot" button falls back to a pre-filled email draft rather than being dead. See **Connecting the calendar** below. |
| **Osho Himalayas founder quote** | `src/components/Product.tsx` | Lorem ipsum, marked on screen with an amber "Placeholder — awaiting approved quote" flag so it cannot ship by accident. Replace the text and the attribution, then delete the `placeholder-flag` span. |
| **Logo file** | `public/dridh-logo@2x.png` | Rebuilt from the supplied SVG — see **Logo** below. Still raster; a true vector would be better if the designer can supply one. |

## Logo

The supplied `design-assets/dridh-logo.svg` is a **raster PNG wrapped in SVG**: a greyscale mask
layer plus an RGB colour layer matted on black. Rendered directly it produced a visible **white
halo**, because the partially transparent mask edges let the colour layer's matte bleed through,
and it sat small in its box because of a large transparent margin.

It was rebuilt into a clean RGBA PNG:

1. alpha taken from the mask layer,
2. colour un-matted against its black backing (`fg = observed / alpha`), which removes the fringe,
3. the transparent margin trimmed, so the mark fills its own box and renders larger at the same
   CSS height.

Output: `public/dridh-logo.png` (1030×557 master) and `public/dridh-logo@2x.png` (414×224, used by
the site at 54 px and 46 px tall). To regenerate after a new export, repeat those three steps —
the halo returns if the raw layers are composited without the un-matte.

Still raster, so a genuine vector remains the better long-term asset.

## Connecting the calendar

Every "book a slot" button opens an in-page dialog. **Out of the box this shows the built-in date
and slot picker** — a calendar of the next three weeks, time slots for the chosen day, and a short
form (name, email, property, phone).

Because there is no backend, that picker cannot see a real calendar: it sends a booking *request*
by email, which you confirm. For live availability and automatic calendar writes, point it at a
hosted scheduler instead and the dialog embeds that in place of the picker:

```ts
// src/config.ts
scheduling: {
  provider: 'cal',                          // 'cal' | 'calendly' | 'google' | 'iframe' | 'none'
  url: 'https://cal.com/dridh/15min',
},
```

Until that is set, the built-in picker is used. Its working days, hours, slot times, duration and
timezone label live in `SITE.booking` in the same file.

### Recommended: Cal.com

Free, open source, themeable, and it writes straight into your Google or Outlook calendar.

1. Sign up at [cal.com](https://cal.com) with **info@dridh.in** and claim the `dridh` handle.
2. **Connect your calendar** under Apps → Google Calendar. Cal reads your busy times so nothing
   double-books, and writes each booking into that calendar.
3. Create an event type: **15 minutes**, name it "Intro call".
4. Under **Availability**, set the hours you actually want calls. Add a buffer if you want gaps.
5. Under **Advanced → Booking questions**, add the fields you want from a prospect. These arrive
   in the calendar invite and in the confirmation email:
   - Property name *(required)*
   - Location — town and state *(required)*
   - Number of rooms
   - What prompted you to get in touch *(long text, optional)*
6. Turn on **Google Meet** (or Zoom) as the location so the invite carries a join link.
7. Copy the public link and paste it into `config.ts`.

The visitor picks a slot, fills those fields, and the event lands in your calendar with their
answers in the body. Both sides get a confirmation with reschedule and cancel links, and Cal sends
the reminders.

### Alternatives

| Provider | Set `provider` to | Notes |
|---|---|---|
| **Google Appointment Schedule** | `'google'` | Free with Google Workspace, writes to your calendar natively. Paste the `src=…` URL out of the embed snippet Google gives you. Fewer custom questions, and no branding control. |
| **Calendly** | `'calendly'` | Familiar to corporate guests. The free tier allows only one event type. |
| **Anything else** | `'iframe'` | Zoho Bookings, TidyCal, SavvyCal, a self-hosted Cal instance — any embeddable booking page. |

### Why not build it ourselves

It looks like a small feature and is not. A scheduler needs OAuth into your calendar, free/busy
lookups, timezone correctness, double-booking prevention under concurrency, confirmation and
reminder email, reschedule and cancel flows, ICS generation, and spam protection. That is weeks of
work and a permanent maintenance burden, to reimplement something several companies give away. If
it ever needs to live inside our own product, Cal.com is open source and self-hostable, so the
migration path stays open.

## Brand

Taken from `../design-assets/colors-font.pdf`. Defined once as custom properties at the top of
`src/styles.css`.

- **Ground** `#F5F3EB` — page background
- **Primary green** `#1A3E2A` — all headings
- **Secondary copper** `#A9613C` — kickers, rules, links, accents
- **Antique gold** `#B68235` — alternate accent
- Non-heading text is **black** `#000000`, per the brief
- Dark sections use the brand's dark-ground substitutes: black ground `#0C0C0C`, ivory `#EDE4D2`,
  gold lifted `#C9903C`, sand `#C2A688`

Type pairings follow the same sheet (Latin halves only, since the page is English):

- **Cormorant Garamond** — display and headings
- **Lora** — body
- **Mukta** — interface: buttons, nav, labels, anything under 14 px

## Header behaviour

Implemented in `src/components/Header.tsx` as three states:

1. **At the top** — logo left, buttons right, flush with the page, no navbar chrome.
2. **Scrolling down** — the header translates fully out of view.
3. **Scrolling back up** — a proper navbar drops in with the section links, a translucent
   background and a bottom rule.

## Articles

Markdown files in `public/articles/`, fetched and parsed at runtime — nothing is bundled, so
adding an article needs no rebuild of the components.

To add one:

1. Drop `public/articles/<slug>.md` in place, with front matter:
   ```
   ---
   title: …
   kicker: …
   readingTime: 2 min, then 6
   ---
   ```
2. Add an entry to `public/articles/index.json`:
   ```json
   {
     "slug": "…", "title": "…", "kicker": "…",
     "companies": ["Google", "Visa"],
     "cover": "covers/….svg",
     "hook": "…", "readingTime": "2 min, then 6"
   }
   ```
   `companies` renders as tags and is what makes a headline carry a recognisable name.
   `cover` is optional; without it the card simply has no image.

Cover art lives in `public/articles/covers/` as SVG sized 1200×675, using the brand palette
directly (CSS variables do not apply — they load as `<img>`).

Each article is written to the same shape: a hooky headline, an **In two minutes** section in plain
language for a reader who does not follow AI, then **The detail**, then **Sources** with links.

Parsing lives in `src/lib/markdown.ts`. Front matter is handled by a ~15-line reader rather than
`gray-matter`, which needs a Buffer polyfill in the browser. External links are rewritten to open
in a new tab.

> Article markdown is rendered with `dangerouslySetInnerHTML`. That is safe while the files are
> ours. If article content ever becomes user-submitted, sanitise it first.

## Background era illustrations

A decorative illustration reveals itself behind the hero, travelling **bottom-left to top-right**
over **5 seconds**. Width and height advance at the same pace, so the revealed corner tracks the
diagonal:

| time | horizontal | vertical |
|---|---|---|
| 1.0s | 19% | 19% |
| 2.0s | 42% | 42% |
| 3.0s | 68% | 68% |
| 4.0s | 89% | 89% |
| 5.0s | 100% | 100% |

It is one mask scaled uniformly from the bottom-left corner — a single `scale()`, not two
independent axes — which is what keeps the two dimensions locked together.

### Adding an asset

Drop the SVG in `public/era/<era>/<name>.svg` and point at it. There is **no per-asset
configuration**:

```tsx
<EraBackdrop src="era/medieval/palace.svg" className="era-hero" />
```

Optional props: `opacity` (default `0.07`) and `aspect` (default `'3 / 2'`, only affects
letterboxing).

### How it works

One mask, scaled uniformly from the bottom-left corner. Because it uses `transform-box: view-box`
with `transform-origin: 0% 100%`, it is anchored in the SVG's own coordinate space — so it adapts
to any viewBox without being told the dimensions. A blur on the mask softens the advancing edge so
it reads as ink spreading rather than a shutter opening.

All timing lives in one object at the top of `src/era/EraBackdrop.tsx`:

```ts
export const REVEAL = {
  seconds: 5,   // total length of the reveal
  seed: 0.06,   // how much is already showing at the start
  feather: 10,  // softness of the advancing edge, in view-box units
  ease: '…',    // one curve, applied to the single uniform scale
}
```

It starts on scroll into view, not on page load, and honours `prefers-reduced-motion` by rendering
the finished scene with no animation. It is `aria-hidden`, `pointer-events: none`, and never
affects layout.

### A note on the assets themselves

`palace.svg` is a **raster PNG wrapped in SVG** (430×306 scaled into a 1152×768 box), the same
structure as the logo. Two consequences:

- It softens if displayed large. At 7% opacity behind text this is invisible, but it rules out
  using these as foreground artwork.
- A true "pen drawing itself" animation — stroking outlines in sequence — is impossible, because
  there are no paths to stroke. If future assets are supplied as **real vector line art**, the same
  component can be upgraded to stroke-drawing (`stroke-dasharray`/`stroke-dashoffset`), which is a
  noticeably better effect. Worth asking for vector exports if the illustrator can provide them.

## Routes

| Path | Page |
|---|---|
| `/` | Landing — hero, the shift, a three-article overview, what we provide, Dridh PMS, contact |
| `/reading` | All articles, as cards with cover art |
| `/reading/:slug` | A single article |

Deep links need an SPA fallback on static hosting. `public/_redirects` (Netlify) and `vercel.json`
(Vercel) are both included; any other host needs the equivalent rewrite to `/index.html`.

## Structure

```
public/
  dridh-logo.svg
  _redirects           SPA fallback for Netlify
  articles/
    index.json         the list: slug, title, kicker, companies, cover, hook, readingTime
    *.md               six articles
    covers/*.svg       on-brand cover art, one per article
src/
  config.ts            email, calendar link
  styles.css           the whole brand system
  lib/markdown.ts      front matter, marked, URL helpers
  pages/
    Landing.tsx        the one-page site
    Reading.tsx        the article index
    Article.tsx        a single article
  components/
    Header.tsx         scroll-state navbar
    Footer.tsx
    Hero.tsx           section 1
    Impact.tsx         section 2 — the six triggers
    ReadingOverview.tsx  three featured articles + link to /reading
    ArticleCard.tsx
    Offering.tsx       section 3 — what we provide
    Product.tsx        section 4 — Dridh PMS V1 + review
    Contact.tsx        section 5
```

## Still to do

- Real photography or illustration, if the generated SVG covers are not wanted long term
- More era assets, and scroll/hover animation elsewhere on the page
- Vector versions of the era illustrations, which would unlock true line-drawing animation
- The three placeholders in the table above

## Checked

Production build passes typecheck. Verified: header states at all four scroll positions; all six
articles render on `/reading/:slug` including cold deep links; three cards on the landing page and
six on `/reading`; no console errors; no horizontal overflow at 390 px.
