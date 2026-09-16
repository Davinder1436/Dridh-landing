/** Single place for the things you will want to change. */

export type SchedulerProvider = 'none' | 'cal' | 'calendly' | 'google' | 'iframe'

export const SITE = {
  email: 'info@dridh.in',

  /**
   * Booking. Set `provider` and `url` and every "book a slot" button opens an
   * in-page calendar instead of falling back to email.
   *
   *  cal      → https://cal.com/<user>/<event>        (recommended — free, themeable)
   *  calendly → https://calendly.com/<user>/<event>
   *  google   → the full "src=..." embed URL from a Google Appointment Schedule
   *  iframe   → any other bookable page, embedded as-is
   *  none     → buttons fall back to a pre-filled email draft
   */
  scheduling: {
    provider: 'google' as SchedulerProvider,
    /* Google appointment schedule, embeddable form (?gv=true) */
    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3kWrhOuziZKttAxkk_VEEuEcqrdCNHcGIoN2ExZkK4nFcQEk4_ta17e12JPLBLbSX0Lla-qs_Q?gv=true',
  },

  /** Used by the built-in date + slot picker when no external scheduler is set. */
  booking: {
    tzLabel: 'IST',
    durationMins: 15,
    daysAhead: 21,
    /** 0 = Sunday … 6 = Saturday */
    workingDays: [1, 2, 3, 4, 5, 6],
    slots: [
      '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
      '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    ],
  },

  calendarFallbackSubject: 'Intro call — 15 minutes',
  calendarFallbackBody:
    'Hello Dridh team,\n\nI would like to book a 15-minute call about our property.\n\n' +
    'Property name:\nLocation:\nNumber of rooms:\nPreferred times:\n\nThank you.',
} as const

/** Email draft used whenever no scheduler is configured. */
export function mailtoHref(): string {
  const s = encodeURIComponent(SITE.calendarFallbackSubject)
  const b = encodeURIComponent(SITE.calendarFallbackBody)
  return `mailto:${SITE.email}?subject=${s}&body=${b}`
}

export function schedulingEnabled(): boolean {
  return SITE.scheduling.provider !== 'none' && SITE.scheduling.url.trim() !== ''
}

/** Build the embeddable URL for the configured provider. */
export function embedUrl(): string {
  const { provider, url } = SITE.scheduling
  if (!url) return ''
  const u = new URL(url)

  if (provider === 'cal') {
    u.searchParams.set('embed', 'true')
    u.searchParams.set('theme', 'light')
    // Cal reads these to tint its own UI — keep them on brand.
    u.searchParams.set('brandColor', '#1A3E2A')
  } else if (provider === 'calendly') {
    u.searchParams.set('embed_domain', window.location.hostname)
    u.searchParams.set('embed_type', 'Inline')
    u.searchParams.set('hide_gdpr_banner', '1')
  }
  // 'google' and 'iframe' are embedded exactly as supplied.
  return u.toString()
}

/** Href for a booking control — a real link when we cannot embed, so it is never dead. */
export function scheduleHref(): string {
  return schedulingEnabled() ? SITE.scheduling.url : mailtoHref()
}
