const TRIGGERS = [
  {
    h: 'Guests no longer scroll through twenty hotels',
    p: 'An AI hands them three to five. Everyone else simply isn’t there.',
  },
  {
    h: 'The guest an AI sends you has already decided',
    p: 'They book several times more often than a search visitor.',
  },
  {
    h: 'ChatGPT is already describing your property',
    p: 'Mostly in words lifted from an OTA listing, not yours.',
  },
  {
    h: 'Reviews and forums speak louder than your website',
    p: 'That is what the AI reads before it recommends anyone.',
  },
  {
    h: 'Your software decides whether an AI can book you',
    p: 'Very few systems in India can answer an AI agent today.',
  },
  {
    h: 'You don’t need to buy “AI”',
    p: 'You need the data you already own, in a shape machines can read.',
  },
]

import EraBackdrop from '../era/EraBackdrop'

const WORDS = ['Business', 'Hotel', 'Retreat', 'Resort', 'Ashram', 'Yoga Centre']

export default function Impact() {
  return (
      <section id="shift" className="section-rule">
        <EraBackdrop src="era/fold2/hotel-fold2.svg" className="era-shift-hotel" aspect="715.95 / 435.37" />
        <EraBackdrop src="era/fold2/train-fold2.svg" className="era-shift-train" aspect="86.86 / 73.01" opacity={0.16} />
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
