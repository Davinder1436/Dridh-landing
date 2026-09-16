import EraBackdrop from '../era/EraBackdrop'

const TODAY = [
  {
    h: 'Your PMS was built before AI existed',
    p: 'Menus, forms and exports. There is nowhere for a modern AI to plug in.',
  },
  {
    h: 'One small change, a hundred clicks',
    p: 'Closing ten rooms for a retreat group still means screen after screen, room by room.',
  },
  {
    h: 'Skilled people doing copy-paste work',
    p: 'OTA vouchers into the register, bookings into Excel, totals into WhatsApp.',
  },
  {
    h: '“Kal ka revenue?” still takes three phone calls',
    p: 'Reports are stitched together by hand from exports, every single day.',
  },
  {
    h: 'The know-how walks out with the staff',
    p: 'Nearly a third of hotel staff move on each year, and the training starts again.',
  },
  {
    h: 'Guests expect an answer in minutes',
    p: 'A 9pm WhatsApp enquiry answered at 10am is a booking gone elsewhere.',
  },
]

export default function Automation() {
  return (
    <section id="automation" className="section-rule">
      <EraBackdrop src="era/fold2/train-fold2.svg" className="era-auto-train" aspect="86.86 / 73.01" opacity={0.16} />
      <EraBackdrop src="era/fold2/hotel-fold2.svg" className="era-auto-hotel" aspect="715.95 / 435.37" />
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Agentic management</span>
          <h2>Your team deserves better than a hundred clicks</h2>
        </div>

        <ol className="auto-list">
          {TODAY.map((t, i) => (
            <li className="auto-row" key={t.h}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
