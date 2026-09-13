import { SITE } from '../config'
import BookButton from './BookButton'

export default function Contact() {
  return (
    <section id="contact" className="section-rule">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <span className="kicker">Contact</span>
            <h2>Fifteen minutes is enough to tell whether we can help</h2>
            <p className="lede" style={{ marginTop: '20px' }}>
              Write to us, or take a slot directly. We look at your property before the call and
              arrive with something specific — usually a straight account of where you currently
              stand with the systems that decide which hotels get recommended.
            </p>

          </div>

          <div className="contact-card">
            <h3>Start here</h3>
            <p className="small" style={{ marginBottom: '14px' }}>
              Either route reaches the same two people.
            </p>
            <a className="contact-mail" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '26px' }}>
              <BookButton className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>
                Schedule a 15-minute slot
              </BookButton>
              <a className="btn btn-ghost" href={`mailto:${SITE.email}`} style={{ justifyContent: 'center' }}>
                Send a note instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
