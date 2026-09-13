const CAPABILITIES = [
  {
    h: 'Rooms, beds and programmes in one reservation',
    p: 'A single booking can hold a private room, a dormitory bed and a multi-day course, each carrying its own dates, price and status.',
  },
  {
    h: 'Direct booking with payments that reconcile',
    p: 'An online booking engine with server-verified pricing and deposits, behind a payment pipeline built to survive gateway failures and check itself every night.',
  },
  {
    h: 'Arrival handled before the guest arrives',
    p: 'Online check-in collects identity documents, health and consent details and a verified signature, so the desk is welcoming people rather than processing paperwork.',
  },
  {
    h: 'Invoicing, reporting and the day’s close',
    p: 'GST-aware invoicing, occupancy and revenue reporting, and an audited end-of-day that leaves a trail worth keeping.',
  },
]

export default function Product() {
  return (
    <section id="product" className="product product-copper">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Dridh PMS · Version 1</span>
          <h2>Built for a working property, and running in one</h2>
          <p className="lede">
            Version 1 was designed for, and is in daily production use at, Osho Himalayas — a
            residential meditation retreat in the Himalayan foothills. It is a harder property to
            run than a conventional hotel, because it sells programmes and dormitory beds alongside
            rooms, and hosts long-staying international guests.
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

        <p style={{ marginTop: '42px', maxWidth: '64ch', fontSize: '15.5px' }}>
          We describe Version 1 plainly on purpose. It is one property’s system, proven in daily use
          rather than in a brochure, and the next version is being built on what it taught us.
        </p>

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
              <strong>Lorem Ipsum</strong>
              Founder, Osho Himalayas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
