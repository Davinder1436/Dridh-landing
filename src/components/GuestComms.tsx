import { useEffect, useState } from 'react'
import EraBackdrop from '../era/EraBackdrop'

/** one enquiry, answered and paid for, played out step by step */
const CHAT = [
  { from: 'guest', text: 'Any room for 14–16 Dec?' },
  { from: 'ai', text: 'Garden Room is free. ₹6,400 a night, all taxes in.' },
  { from: 'ai', text: 'Shall I hold it for you?' },
  { from: 'guest', text: 'Yes please' },
  { from: 'ai', text: 'Advance ₹3,200 received. You are booked.', paid: true },
]

const STEP_MS = 1700
const HOLD_MS = 3800
const FADE_MS = 420

const TILES = [
  {
    k: 'call',
    h: 'Picks up every call',
    p: 'At 3 am, in season, on festival rush.',
  },
  {
    k: 'live',
    h: 'Quotes what is actually free',
    p: 'Live rooms and real prices, straight from your PMS.',
  },
  {
    k: 'pay',
    h: 'Takes the advance',
    p: 'Payment confirmed, booking written into the system.',
  },
  {
    k: 'num',
    h: 'Rings on your own number',
    p: 'The line guests already have. Nothing new to announce.',
  },
  {
    k: 'many',
    h: 'Twenty calls at once',
    p: 'Several agents answer in parallel, so nobody waits on hold.',
  },
  {
    k: 'crm',
    h: 'Writes back to your CRM',
    p: 'Every call and chat lands on the guest record, with a summary.',
  },
]

function Icon({ k }: { k: string }) {
  if (k === 'call') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
      </svg>
    )
  }
  if (k === 'num') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5v17" />
        <path d="M7.5 7a7 7 0 0 0 0 10" />
        <path d="M16.5 7a7 7 0 0 1 0 10" />
        <path d="M4.5 4.5a11 11 0 0 0 0 15" />
        <path d="M19.5 4.5a11 11 0 0 1 0 15" />
      </svg>
    )
  }
  if (k === 'many') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5h12v8H8l-3.5 3v-3H3z" />
        <path d="M9 17.5h8l3.5 3v-3H21v-8h-3" />
      </svg>
    )
  }
  if (k === 'crm') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18v14H3z" />
        <circle cx="9" cy="11" r="2.4" />
        <path d="M5.5 16.5a3.8 3.8 0 0 1 7 0" />
        <path d="M15 10h4M15 13.5h4" />
      </svg>
    )
  }
  if (k === 'live') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 7.5h17v13h-17z" />
        <path d="M3.5 7.5 12 2l8.5 5.5" />
        <path d="M8.5 20.5v-6h7v6" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 6.5h19v12h-19z" />
      <path d="M2.5 10.5h19" />
      <path d="m8 15.5 2.5 2.5 5-5" />
    </svg>
  )
}

export default function GuestComms() {
  const [shown, setShown] = useState(1)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // one timer at a time: add a message, hold on the last one, fade the
    // whole thread out, then start again — so nothing ever jumps
    let timer = 0
    const later = (fn: () => void, ms: number) => {
      timer = window.setTimeout(fn, ms)
    }
    const step = (n: number) => {
      if (n < CHAT.length) {
        setShown(n + 1)
        later(() => step(n + 1), STEP_MS)
        return
      }
      later(() => {
        setFading(true)
        later(() => {
          setShown(1)
          setFading(false)
          later(() => step(1), STEP_MS)
        }, FADE_MS)
      }, HOLD_MS)
    }
    later(() => step(1), STEP_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="guest-ai" className="section-rule">
      <EraBackdrop src="era/fold4/VR.svg" className="era-gc-vr" aspect="182.86 / 123.47" />
      <EraBackdrop src="era/fold4/machine%20inteligence.svg" className="era-gc-machine" aspect="172.45 / 128.42" />
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">AI voice &amp; messaging</span>
          <h2>Your front desk, awake at 3 am</h2>
          <p className="lede">
            Every call and message answered in seconds, with your real rooms and real prices.
          </p>
        </div>

        <div className="gc-grid">
          <div className="gc-stage">
            <div className="gc-call">
              <span className="gc-call-dot" aria-hidden="true" />
              <div>
                <strong>Incoming call · 3:12 am</strong>
                <span>Answered in two rings</span>
              </div>
              <div className="gc-wave" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <i key={i} style={{ ['--i' as string]: String(i) }} />
                ))}
              </div>
            </div>

            <div className={`gc-chat${fading ? ' is-fading' : ''}`} aria-label="A guest books a room over chat">
              {CHAT.slice(0, shown).map((m, i) => (
                <div className={`gc-msg gc-${m.from}${m.paid ? ' gc-paid' : ''}`} key={i}>
                  {m.text}
                </div>
              ))}
            </div>

            <div className="gc-langs">
              <span>Hindi</span>
              <span>English</span>
              <span>Hinglish</span>
              <span>regional languages</span>
            </div>
          </div>

          <ul className="gc-tiles">
            {TILES.map((t) => (
              <li key={t.k}>
                <span className="gc-ico"><Icon k={t.k} /></span>
                <div>
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                </div>
              </li>
            ))}
            <li className="gc-handoff">
              <div>
                <h3>And it knows when to step aside</h3>
                <p>The moment a guest needs a person, your team gets the call with the full context.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
