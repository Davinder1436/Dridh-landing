import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../config'
import BookButton from './BookButton'

const NAV = [
  { to: '/#shift', label: 'The shift' },
  { to: '/#offer', label: 'What we do' },
  { to: '/#product', label: 'Dridh PMS' },
  { to: '/#contact', label: 'Contact' },
]

/**
 * First view  → flush with the page, no navbar chrome.
 * Scroll down → header slides away entirely.
 * Scroll up   → the navbar pops in, with navigation.
 */
export default function Header() {
  const [atTop, setAtTop] = useState(true)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const top = y < 24
      setAtTop(top)

      if (top) {
        setPinned(false)
      } else if (y > last + 4) {
        setPinned(false) // moving down — hide
      } else if (y < last - 4) {
        setPinned(true) // moving up — reveal the navbar
      }

      last = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cls = atTop ? 'header at-top' : pinned ? 'header pinned' : 'header hidden'

  return (
    <header className={cls}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Dridh — home">
          <img src={`${import.meta.env.BASE_URL}dridh-logo@2x.png`} alt="" width={100} height={54} />
          <span className="brand-name">Dridh</span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          <div className="links">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to}>
                {n.label}
              </Link>
            ))}
          </div>
          <div className="header-actions">
            <a className="btn btn-ghost btn-sm hide-sm" href={`mailto:${SITE.email}`}>
              Email us
            </a>
            <Link className="btn btn-ghost btn-sm" to="/reading">
              Reading
            </Link>
            <BookButton className="btn btn-primary btn-sm">Book 15 minutes</BookButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
