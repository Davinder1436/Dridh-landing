import type { ReactNode } from 'react'
import { scheduleHref } from '../config'
import { useScheduler } from '../scheduler/SchedulerContext'

/**
 * Renders a real anchor so it is right-clickable and works without JS, but
 * opens the in-page booking dialog — which hosts either the configured
 * external calendar or the built-in date and slot picker.
 */
export default function BookButton({
  children,
  className = 'btn btn-primary',
  style,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const { open } = useScheduler()
  return (
    <a
      className={className}
      style={style}
      href={scheduleHref()}
      onClick={(e) => {
        // let modified clicks fall through to the href
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        open()
      }}
    >
      {children}
    </a>
  )
}
