import EraBackdrop from '../era/EraBackdrop'

export default function ComingSoon() {
  return (
    <section id="soon" className="section-rule">
      <EraBackdrop src="era/fold3/hotel-fold3.svg" className="era-soon-hotel" aspect="715.5 / 426" />
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Coming soon</span>
          <h2>More on the way</h2>
        </div>

        <div className="soon-box">
          <span className="placeholder-flag">Placeholder — awaiting content</span>
          <p>This section is intentionally empty for now.</p>
        </div>
      </div>
    </section>
  )
}
