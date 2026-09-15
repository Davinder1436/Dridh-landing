import EraBackdrop from '../era/EraBackdrop'

const CAPABILITIES = [
  { h: 'Ask the agent, approve, done', p: 'Blocks, bookings, exports and guest messages from one plain request.' },
  { h: 'Nothing happens without a yes', p: 'Every action waits for approval and can be undone in one tap.' },
  { h: 'Rooms, beds and programmes in one booking', p: 'A room, a dorm bed and a course, each with its own dates.' },
  { h: 'Direct bookings, payments that add up', p: 'Your own booking engine, with payments checked every night.' },
  { h: 'Check-in done before they arrive', p: 'ID, forms and signature collected online.' },
  { h: 'GST invoices and the day’s close', p: 'Invoices, reports and end-of-day in one place.' },
]

export default function Product() {
  return (
    <section id="product" className="product product-ground section-rule">
      <EraBackdrop src="era/fold4/VR.svg" className="era-product-vr" aspect="182.86 / 123.47" />
      <EraBackdrop src="era/fold4/machine%20inteligence.svg" className="era-product-machine" aspect="172.45 / 128.42" />
      <EraBackdrop src="era/fold4/robohelp.svg" className="era-product-robo" aspect="78.42 / 98.87" />
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Dridh PMS · Version 1</span>
          <h2>An agentic PMS, already running a real property</h2>
          <p className="lede">
            Live every day at Osho Himalayas. The team tells it what they need, and it does the work.
          </p>
        </div>

        <div className="product-grid">
          {CAPABILITIES.map((c) => (
            <div className="product-item" key={c.h}>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>

        <div className="review">
          <span className="placeholder-flag">Placeholder — awaiting approved quote</span>
          <span className="kicker">Founder, Osho Himalayas</span>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur, excepteur sint occaecat cupidatat non proident.
            </p>
          </blockquote>
          <div className="review-by">
            <span className="dash" aria-hidden="true" />
            <div>
              <strong>Rajiv</strong>
              Founder, Osho Himalayas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
