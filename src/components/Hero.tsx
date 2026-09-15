import EraBackdrop from '../era/EraBackdrop'

/* `hl` is the hook inside `t`, shown in copper */
type Signal = { n: string; t: string; hl: string; s: string }

/* facts grid: 3 rows × 4 columns, read row by row.
   `null` leaves that cell deliberately empty (1,1 · 1,3 · 2,4 · 3,2 · 3,4) */
const SIGNALS: (Signal | null)[] = [
  null,
  { n: '16%', t: 'of hotels appear in AI search results at all', hl: 'AI search results', s: 'HotelWorld AI index' },
  null,
  { n: '79%', t: 'of hotel clicks inside Google’s AI Mode land on a Google Business Profile', hl: 'hotel clicks', s: '4,000-query study' },

  { n: '5×', t: 'the conversion rate of an AI-referred visitor against ordinary search', hl: 'AI-referred visitor', s: 'Similarweb-derived' },
  { n: '68%', t: 'of Indian travellers intend to use AI to plan their next trip', hl: 'AI to plan', s: 'Agoda, 2026' },
  { n: '36.3%', t: 'of hotels publish no structured data for an AI to read', hl: 'no structured data', s: 'Stiplo analysis' },
  null,

  { n: '85,000', t: 'conversations a day on MakeMyTrip’s AI assistant, 45% from tier-2 and tier-3 towns', hl: 'MakeMyTrip’s AI assistant', s: 'MakeMyTrip, May 2026' },
  null,
  { n: '91%', t: 'of hotels still build their reports by hand', hl: 'reports by hand', s: 'Otelier 2026 Operations Index' },
  null,
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <EraBackdrop src="era/fold1/yoga-fold1.svg" className="era-hero" aspect="399.63 / 376.08" />
      <EraBackdrop src="era/fold1/camel-fold1.svg" className="era-hero-camel" aspect="599.06 / 344.2" opacity={0.1} />
      <div className="wrap">
        <span className="kicker">Hospitality systems · built for what comes next</span>
        <h1>
          The foundation your 
          <br />
          hospitality business needs to
          <br />
          harness the <span className="accent">AI era</span>.
        </h1>
        <p className="lede">
          Your guests are asking ChatGPT where to stay. Are you available there? Don&apos;t worry, we can make you.
        </p>

        <div className="signals">
          {SIGNALS.map((s, i) =>
            s ? (
              <div className="signal" key={i}>
                <b>{s.n}</b>
                <span>
                  {s.t.split(s.hl)[0]}
                  <em>{s.hl}</em>
                  {s.t.split(s.hl).slice(1).join(s.hl)}
                </span>
                <i>{s.s}</i>
              </div>
            ) : (
              <div className="signal-empty" key={i} aria-hidden="true" />
            ),
          )}
        </div>
      </div>
    </section>
  )
}
