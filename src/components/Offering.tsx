const OFFERINGS = [
  {
    n: '01',
    h: 'A first-mover position your competitors cannot buy yet',
    lead: 'The first property system anywhere to open itself to AI agents shipped in September 2026. The field is effectively empty.',
    l: [
      'Property data published the way assistants actually read it — not as a brochure',
      'Live availability and a total landed price a machine can quote with confidence',
      'A direct booking path built for a guest who arrives already decided',
      'Guest conversation answering from your own rates and rules, never improvising',
      'Positioned now, while the signals that decide who gets recommended are still cheap to accumulate',
    ],
  },
  {
    n: '02',
    h: 'Not another integration. A foundation, seeded under what you already run.',
    lead: 'Good hospitality software rarely fails on features. It fails on migration — a season lost and a desk team relearning its job at peak occupancy.',
    l: [
      'Your channel manager, OTA listings and payment rails keep working throughout',
      'Migration proceeds one area at a time — reservations, then money, then conversation',
      'Each step earns its keep before the next begins',
      'The system adapts to how the property already works, not the reverse',
      'Everything you hold today comes with you, and stays exportable by you',
    ],
  },
  {
    n: '03',
    h: 'Advice from people who build AI systems, not people who resell them',
    lead: 'A working background in the mathematics and infrastructure these systems are built on, applied by people who also keep a live property system in production.',
    l: [
      'An honest read on what is shipping, what is piloted, and what is only announced',
      'Where your property stands against the systems writing the shortlist',
      'What to act on this quarter, what to ignore, what to revisit next year',
      'AI in operations priced for your property, not converted from a European quote',
      'Often the most useful thing we say is that something is not worth your money yet',
    ],
  },
]

import EraBackdrop from '../era/EraBackdrop'

export default function Offering() {
  return (
    <section id="offer" className="section-rule">
      <EraBackdrop src="era/fold3/beach-fold3.svg" className="era-offer-beach" aspect="589.5 / 453.75" />
      <EraBackdrop src="era/fold3/burj-fold3.svg" className="era-offer-burj" aspect="321 / 419.25" />
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">What we provide</span>
          <h2>Three things, done properly, rather than a fourth</h2>
        </div>

        <div className="offerings">
          {OFFERINGS.map((o) => (
            <div className="offering" key={o.n}>
              <div className="offering-num">{o.n}</div>
              <div>
                <h3>{o.h}</h3>
                <p className="offering-lead">{o.lead}</p>
                <ul>
                  {o.l.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
