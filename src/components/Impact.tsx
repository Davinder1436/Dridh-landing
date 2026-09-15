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

const WORDS = ['Business', 'Hotel', 'Retreat', 'Resort', 'Ashram', 'Yoga Centre']

export default function Impact() {
  return (
      <section id="shift" className="section-rule">
        <EraBackdrop src="era/fold2/train-fold2.svg" className="era-shift-drift" aspect="694.5 / 447.75" opacity={0.16} />
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">The shift</span>
            <h2 className="shift-title">
              How the AI era will change your{' '}
              <span className="spin-words" aria-hidden="true">
                <span className="spin-track">
                  {[...WORDS, WORDS[0]].map((w, i) => (
                    <span key={i}>{w}</span>
                  ))}
                </span>
              </span>
              <span className="sr-only">Business</span>
            </h2>
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
