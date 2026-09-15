import EraBackdrop from '../era/EraBackdrop'

/* facts grid: 12 uniform boxes, 4 per row, 3 rows */
const SIGNALS = [
  { n: '16%', t: 'of hotels appear in AI search results at all', s: 'HotelWorld AI index' },
  { n: '68%', t: 'of Indian travellers intend to use AI to plan their next trip', s: 'Agoda, 2026' },
  { n: '79%', t: 'of hotel clicks inside Google’s AI Mode land on a Google Business Profile', s: '4,000-query study' },
  { n: '5×', t: 'the conversion rate of an AI-referred visitor against ordinary search', s: 'Similarweb-derived' },

  { n: '36.3%', t: 'of hotels publish no structured data for an AI to read', s: 'Stiplo analysis' },
  { n: '88%', t: 'of Indian travellers trust AI travel recommendations', s: 'Agoda 2026 Travel Outlook' },
  { n: '85,000', t: 'conversations a day on MakeMyTrip’s AI assistant, 45% from tier-2 and tier-3 towns', s: 'MakeMyTrip, May 2026' },
  { n: '900M', t: 'people use ChatGPT every week', s: 'February 2026' },

  { n: '84%', t: 'of what AI assistants quote comes from reviews, forums and press, not hotel websites', s: 'AI citation analysis' },
  { n: '<33%', t: 'of Google searches now send a click to any website', s: 'SparkToro, 2026' },
  { n: '91%', t: 'of hotels still build their reports by hand', s: 'Otelier 2026 Operations Index' },
  { n: '11%', t: 'of hotels run an integrated technology stack', s: 'Otelier 2026 Operations Index' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <EraBackdrop src="era/fold1/yoga-fold1.svg" className="era-hero" aspect="399.63 / 376.08" />
      <EraBackdrop src="era/fold1/camel-fold1.svg" className="era-hero-camel" aspect="599.06 / 344.2" opacity={0.1} />
      <div className="wrap">
        <span className="kicker">Hospitality systems · built for what comes next</span>
        <h1>
          The foundation your hospitality business needs to harness the{' '}
          <span className="accent">AI era</span>.
        </h1>
        <p className="lede">
          Your guests are asking ChatGPT where to stay. Are you available there? Don&apos;t worry, we can make you.
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
