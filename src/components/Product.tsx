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
      <EraBackdrop src="era/fold4/robohelp.svg" className="era-product-robo" aspect="78.42 / 98.87" />      <div className="wrap">
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
          <span className="kicker">Founder, Osho Himalayas</span>
          <blockquote>
            <p>
              I was honestly worried when we first started with Dridh in Jan&apos;26. It was a risk
              because season was about to start, and all our bookings and data was stored on the old
              software. Their team asked for a month and delivered. They took a great deal of effort
              upon themselves in shifting every little thing to the new system. By February, we were
              completely operational on it and didn&apos;t even have to shut down the bookings even
              for a day throughout the process.
            </p>
            <p>
              It has kept getting better since then. Payments match now without the evening hassle,
              check-in formalities are done before the guest arrives, plus I can monitor the
              day&apos;s occupancy and revenue on my phone. Some new feature comes along every few
              weeks, our staff is happy, and I am free of headache. My team gives time to guests,
              not registers, now.
            </p>
            <p>
              What I like most about this team is that they&apos;re always hungry to improve. They
              work fast, but they don&apos;t rush things. If you bring up a problem in the morning,
              you&apos;ll usually see them coming back with something by the end of the day.
            </p>
          </blockquote>
          <div className="review-by">
            <span className="dash" aria-hidden="true" />
            <div>
              <strong>Rajiv Arora</strong>
              Founder, Osho Himalayas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
