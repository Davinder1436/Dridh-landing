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

const AGENTIC = [
  { h: 'Say it in plain words', p: 'Type the job the way you’d tell a colleague.' },
  { h: 'It does the legwork', p: 'Finds the rooms, checks the rules, prepares every step.' },
  { h: 'You approve once', p: 'Nothing changes until someone on your team says yes.' },
  { h: 'Undo in one tap', p: 'Every action is recorded and can be taken back.' },
]

export default function Automation() {
  return (
    <section id="automation" className="section-rule">
      <EraBackdrop src="era/fold3/beach-fold3.svg" className="era-auto-beach" aspect="528.99 / 446.04" />
      <EraBackdrop src="era/fold3/butler-fold3.svg" className="era-auto-butler" aspect="406.04 / 412.35" />
      <EraBackdrop src="era/fold3/burj-fold3.svg" className="era-auto-burj" aspect="287.49 / 405.18" />
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

        <div className="auto-answer">
          <span className="kicker">The agentic way</span>
          <h3>An hour at the desk becomes a five-minute conversation</h3>
          <ul>
            {AGENTIC.map((a) => (
              <li key={a.h}>
                <strong>{a.h}</strong>
                <span>{a.p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
