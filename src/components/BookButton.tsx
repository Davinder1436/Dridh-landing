import type { ReactNode } from 'react'
import { schedulingEnabled, scheduleHref } from '../config'
import { useScheduler } from '../scheduler/SchedulerContext'

/**
 * Renders a real anchor so it is right-clickable and works without JS,
 * but opens the in-page calendar when one is configured.
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
        if (!schedulingEnabled()) return // let the mailto through
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        open()
      }}
    >
      {children}
    </a>
  )
}
