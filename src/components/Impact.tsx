const TRIGGERS = [
  {
    h: 'Your guest no longer sees a page of twenty hotels',
    p: 'A machine now returns three to five. Being outside that answer is not a lower ranking — it is not being considered at all.',
  },
  {
    h: 'The visitor who does arrive is worth five of the old ones',
    p: 'Someone sent by an assistant has already been told you are the right property. They convert several times better than ordinary search traffic — and they land on whatever booking page you happen to have.',
  },
  {
    h: 'An AI is already describing your property',
    p: 'It answers from your listing on an intermediary’s site, in words you did not write. Tens of thousands of those answers are given every day, whether or not you participate.',
  },
  {
    h: 'Your own website is quoted less than a stranger’s forum post',
    p: 'Most of what these systems cite is earned — reviews, forums, video, third-party pages. The brochure site you paid for is rarely the source.',
  },
  {
    h: 'The booking still happens on your site, if it can',
    p: 'Google built it with Amadeus and the global chains, not with hotels. A property reaches that channel through its technology vendor — and the first vendor anywhere to open the door did so in September 2026.',
  },
  {
    h: 'None of this requires you to buy artificial intelligence',
    p: 'What decides whether you are considered is data you already own, published in a form a machine can read. That is a week of work, not a transformation programme.',
  },
]

import EraBackdrop from '../era/EraBackdrop'

export default function Impact() {
  return (
      <section id="shift" className="section-rule">
        <EraBackdrop src="era/fold2/sunrise-fold2.svg" className="era-shift" aspect="563.25 / 429" />
        <EraBackdrop src="era/fold2/dumbbell-towel-fold2.svg" className="era-shift-drift" aspect="618.75 / 366" opacity={0.16} />
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">The shift</span>
            <h2>What the AI era is actually doing to a hospitality business</h2>
            <p className="lede">
              Not predictions. Six changes already measurable in how guests find, choose, book and
              talk to a hotel — together with an honest account of which ones will not reach your
              property for another two years.
            </p>
          </div>

          <div className="triggers">
            {TRIGGERS.map((t, i) => (
              <div className="trigger" key={t.h}>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}
