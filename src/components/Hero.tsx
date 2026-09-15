import EraBackdrop from '../era/EraBackdrop'

/* `hl` is the hook inside `t`, shown in copper */
type Signal = { n: string; t: string; hl: string; s: string }

/* one row of four facts under the headline */
const SIGNALS: Signal[] = [
  { n: '16%', t: 'of hotels appear in AI search results at all', hl: 'AI search results', s: 'HotelWorld AI index' },
  { n: '68%', t: 'of Indian travellers intend to use AI to plan their next trip', hl: 'AI to plan', s: 'Agoda, 2026' },
  { n: '79%', t: 'of hotel clicks inside Google’s AI Mode land on a Google Business Profile', hl: 'hotel clicks', s: '4,000-query study' },
  { n: '5×', t: 'the conversion rate of an AI-referred visitor against ordinary search', hl: 'AI-referred visitor', s: 'Similarweb-derived' },
]

/* rotates on the headline's middle line; six entries match the
   wordspin keyframes in styles.css */
const KINDS = ['hospitality business', 'wellness retreat', 'luxury hotel', 'yoga ashram', 'spa resort', 'boutique homestay']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <EraBackdrop src="era/fold1/yoga-fold1.svg" className="era-hero" aspect="399.63 / 376.08" />
      <EraBackdrop src="era/fold1/camel-fold1.svg" className="era-hero-camel" aspect="599.06 / 344.2" opacity={0.1} />
      <div className="wrap">
        <div className="hero-center">
          <span className="kicker">Hospitality systems · built for what comes next</span>
          <h1>
            The foundation your
            <span className="spin-words" aria-hidden="true">
              <span className="spin-track">
                {[...KINDS, KINDS[0]].map((w, i) => (
                  <span key={i}>{w}</span>
                ))}
              </span>
            </span>
            <span className="sr-only">hospitality business</span>
            needs to harness the <span className="hl">AI Era</span>
          </h1>

          <div className="signals">
            {SIGNALS.map((s) => (
              <div className="signal" key={s.n}>
                <b>{s.n}</b>
                <span>
                  {s.t.split(s.hl)[0]}
                  <em>{s.hl}</em>
                  {s.t.split(s.hl).slice(1).join(s.hl)}
                </span>
                <i>{s.s}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
