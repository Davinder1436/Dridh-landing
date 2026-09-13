import { useEffect, useRef } from 'react'
import { embedUrl } from '../config'
import SlotPicker from './SlotPicker'
import { useScheduler } from './SchedulerContext'

/** Accessible dialog hosting whichever booking page is configured. */
export default function SchedulerModal() {
  const { isOpen, close } = useScheduler()
  const panelRef = useRef<HTMLDivElement>(null)
  const restoreTo = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    restoreTo.current = document.activeElement as HTMLElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      // keep focus inside the dialog
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    panelRef.current?.querySelector<HTMLElement>('button')?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      restoreTo.current?.focus?.()
    }
  }, [isOpen, close])

  if (!isOpen) return null
  const src = embedUrl()

  return (
    <div className="sched-backdrop" onClick={close} role="presentation">
      <div
        className="sched-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sched-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sched-head">
          <div>
            <span className="kicker" style={{ margin: 0 }}>Dridh</span>
            <h3 id="sched-title">Book a 15-minute call</h3>
          </div>
          <button className="sched-close" onClick={close} aria-label="Close">
            ×
          </button>
        </div>

        <div className="sched-body">
          {src ? (
            <iframe
              src={src}
              title="Booking calendar"
              loading="lazy"
              allow="camera; microphone; fullscreen; clipboard-write"
            />
          ) : (
            <SlotPicker onDone={close} />
          )}
        </div>
      </div>
    </div>
  )
}
