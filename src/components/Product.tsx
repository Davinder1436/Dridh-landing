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
              When we started with Dridh in January 2026, honestly I was worried. Season was coming
              and years of our bookings were sitting in old software and Excel sheets. The team said
              give us one month. They sat with our front desk, shifted everything part by part, and
              from February we were running fully on the new system. Not one day we had to stop
              taking bookings.
            </p>
            <p>
              After that it has only kept getting better. Every few weeks something new comes, many
              times a thing our staff asked for just the week before. Payments now match without
              the evening headache, check-in paperwork is done before the guest even reaches, and I
              see the day&apos;s occupancy and revenue on my phone without calling anybody. My team
              gives time to guests now, not to registers.
            </p>
            <p>
              What I did not expect was Ahaana. She is the AI calling agent they put on our main
              Osho Himalayas number, and she picks up when our sales team is off. Someone calling
              late night from Europe now gets proper answers about rooms and programmes, and those
              enquiries are not lost anymore.
            </p>
            <p>
              What I like most about this team is their hunger. They work fast but the work is never
              shoddy. You tell them a problem in the morning, by evening they are already showing
              you something.
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
