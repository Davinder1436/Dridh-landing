import { SITE } from '../config'
import BookButton from './BookButton'
import EraBackdrop from '../era/EraBackdrop'

const SIGNALS = [
  { n: '16%', t: 'of hotels appear in AI search results at all', s: 'HotelWorld AI index' },
  { n: '68%', t: 'of Indian travellers intend to use AI to plan their next trip', s: 'Agoda, 2026' },
  { n: '79%', t: 'of hotel clicks inside Google’s AI Mode land on a Google Business Profile', s: '4,000-query study' },
  { n: '5×', t: 'the conversion rate of an AI-referred visitor against ordinary search', s: 'Similarweb-derived' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <EraBackdrop src="era/medieval/palace.svg" className="era-hero" />
      <div className="wrap">
        <span className="kicker">Hospitality systems · built for what comes next</span>
        <h1>
          The modern foundation your hospitality business needs in the{' '}
          <span className="accent">AI era</span>.
        </h1>
        <p className="lede">
          Your guests have already started asking machines where to stay. Dridh rebuilds what sits
          underneath your property — reservations, direct bookings, guest conversation and the
          books — so you are found, quoted and booked in that world, without changing how you run
          your hotel tomorrow morning.
        </p>

        <div className="hero-actions">
          <BookButton className="btn btn-primary btn-lg">Book a 15-minute call</BookButton>
          <a className="btn btn-ghost btn-lg" href="#shift">
            See what is changing
          </a>
          <a className="btn btn-ghost btn-lg" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>

        <p className="hero-note">
          Five of every six hotels cannot be read by the systems now writing that shortlist.{' '}
          <strong>Closing that gap is inexpensive, and much of it is free.</strong> It does not stay
          that way — the properties already legible to these systems are quietly accumulating the
          signals that decide who gets recommended next season.
        </p>

        <div className="signals">
          {SIGNALS.map((s) => (
            <div className="signal" key={s.n + s.t}>
              <b>{s.n}</b>
              <span>{s.t}</span>
              <i>{s.s}</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
