import { Link } from 'react-router-dom'
import { SITE } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <img src={`${import.meta.env.BASE_URL}dridh-logo.svg`} alt="Dridh" width={100} height={67} />
        <div className="footer-links">
          <Link to="/#shift">The shift</Link>
          <Link to="/reading">Reading</Link>
          <Link to="/#offer">What we do</Link>
          <Link to="/#product">Dridh PMS</Link>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
        <p>© {new Date().getFullYear()} Dridh</p>
      </div>
    </footer>
  )
}
