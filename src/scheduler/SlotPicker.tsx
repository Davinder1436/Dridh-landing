import { useMemo, useState } from 'react'
import { SITE } from '../config'

/**
 * Built-in date + slot picker, used when no external scheduler is configured.
 *
 * It has no backend, so it cannot see a real calendar: it collects a preferred
 * slot and sends it as a booking *request* by email. Wire up SITE.scheduling
 * (Cal.com etc.) to get live availability and automatic calendar writes.
 */

const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function startOfDay(d: Date) {
  const c = new Date(d)
  c.setHours(0, 0, 0, 0)
  return c
}
function iso(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
function pretty(d: Date) {
  return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })
}
function to12h(t: string) {
  const [h, m] = t.split(':').map(Number)
  const ap = h < 12 ? 'am' : 'pm'
  const hh = h % 12 === 0 ? 12 : h % 12
  return `${hh}:${String(m).padStart(2, '0')} ${ap}`
}

export default function SlotPicker({ onDone }: { onDone?: () => void }) {
  const cfg = SITE.booking
  const [date, setDate] = useState<Date | null>(null)
  const [slot, setSlot] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', property: '', phone: '' })

  /** the next N days, grouped so the grid starts on the right weekday */
  const days = useMemo(() => {
    const today = startOfDay(new Date())
    const out: { d: Date; open: boolean }[] = []
    for (let i = 1; i <= cfg.daysAhead; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      out.push({ d, open: (cfg.workingDays as readonly number[]).includes(d.getDay()) })
    }
    return out
  }, [cfg.daysAhead, cfg.workingDays])

  const leading = days.length ? days[0].d.getDay() : 0
  const canSend = !!date && !!slot && form.name.trim() !== '' && form.email.trim() !== ''

  function requestHref() {
    if (!date || !slot) return '#'
    const subject = `Booking request — ${pretty(date)}, ${to12h(slot)} ${cfg.tzLabel}`
    const body = [
      `I would like to book a ${cfg.durationMins}-minute call.`,
      '',
      `Preferred slot : ${pretty(date)} at ${to12h(slot)} ${cfg.tzLabel}`,
      `Name           : ${form.name}`,
      `Email          : ${form.email}`,
      `Property       : ${form.property || '—'}`,
      `Phone          : ${form.phone || '—'}`,
      '',
      'Please confirm, or suggest another time.',
    ].join('\n')
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  if (sent) {
    return (
      <div className="pick-done">
        <h4>Request sent</h4>
        <p>
          Your email app should have opened with the details for{' '}
          <strong>
            {date && pretty(date)} at {slot && to12h(slot)} {cfg.tzLabel}
          </strong>
          . We confirm within a few hours, usually sooner.
        </p>
        <p className="small">
          If nothing opened, write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with your
          preferred time.
        </p>
        {onDone && (
          <button className="btn btn-ghost" onClick={onDone}>
            Close
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="pick">
      <div className="pick-cal">
        <div className="pick-label">
          Pick a day <span>· next three weeks</span>
        </div>
        <div className="pick-grid pick-dow">
          {DAY_LABELS.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="pick-grid">
          {Array.from({ length: leading }).map((_, i) => (
            <span key={`pad${i}`} />
          ))}
          {days.map(({ d, open }) => {
            const active = date && iso(d) === iso(date)
            return (
              <button
                key={iso(d)}
                type="button"
                className={`pick-day${active ? ' is-active' : ''}`}
                disabled={!open}
                onClick={() => {
                  setDate(d)
                  setSlot(null)
                }}
              >
                {d.getDate()}
              </button>
            )
          })}
        </div>
      </div>

      <div className="pick-slots">
        {!date ? (
          <p className="pick-hint">Choose a day to see the available times.</p>
        ) : (
          <>
            <div className="pick-label">
              {pretty(date)} <span>· times in {cfg.tzLabel}</span>
            </div>
            <div className="pick-slot-grid">
              {cfg.slots.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`pick-slot${slot === t ? ' is-active' : ''}`}
                  onClick={() => setSlot(t)}
                >
                  {to12h(t)}
                </button>
              ))}
            </div>
          </>
        )}

        {date && slot && (
          <form
            className="pick-form"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = requestHref()
              setSent(true)
            }}
          >
            <div className="pick-fields">
              <label>
                <span>Your name *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label>
                <span>Email *</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label>
                <span>Property</span>
                <input
                  value={form.property}
                  onChange={(e) => setForm({ ...form, property: e.target.value })}
                />
              </label>
              <label>
                <span>Phone</span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </label>
            </div>
            <button className="btn btn-primary btn-lg" type="submit" disabled={!canSend}>
              Request {pretty(date).split(',')[0]}, {to12h(slot)}
            </button>
            <p className="pick-note">
              We confirm by email. Nothing is charged and nothing is locked in until we reply.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
