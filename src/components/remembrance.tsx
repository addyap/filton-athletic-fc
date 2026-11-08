import { useEffect, useId, useState } from 'react'

/**
 * Shared Remembrance treatment — one window, one poppy, used by the banner,
 * the header lapel poppy and the footer tribute.
 *
 * The window runs from the start of Remembrance Sunday (8 Nov 2026) through to
 * the end of Armistice Day (11 Nov), finishing at midnight. It's checked against
 * the viewer's own clock on mount and cleared by a timer at midnight, so the
 * treatment appears and removes itself with no redeploy — the prerendered HTML
 * renders nothing of it.
 */

// Local-time window: 8 Nov 2026 00:00 → 12 Nov 2026 00:00 (i.e. all of 8–11 Nov).
export const REMEMBRANCE_START = new Date(2026, 10, 8, 0, 0, 0).getTime()
export const REMEMBRANCE_END = new Date(2026, 10, 12, 0, 0, 0).getTime()

/** True only while the Remembrance window is open, decided on the client. */
export function useRemembranceActive(): boolean {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const now = Date.now()
    if (now < REMEMBRANCE_START || now >= REMEMBRANCE_END) return
    setActive(true)
    // Fold the treatment away the moment the window closes, even on an open tab.
    const timer = window.setTimeout(() => setActive(false), REMEMBRANCE_END - now)
    return () => window.clearTimeout(timer)
  }, [])

  return active
}

/** One poppy — crimson petals, a dark seeded heart. Size via className. */
export function Poppy({ className, bloom = false }: { className?: string; bloom?: boolean }) {
  const gradientId = `poppy-${useId().replace(/:/g, '')}`
  return (
    <svg viewBox="0 0 100 100" className={`${bloom ? 'rb-poppy ' : ''}${className ?? ''}`} aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#ef2b3d" />
          <stop offset="62%" stopColor="#c8102e" />
          <stop offset="100%" stopColor="#8f0b20" />
        </radialGradient>
      </defs>
      <g transform="translate(50 50)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="0" cy="-21" rx="19" ry="24" fill={`url(#${gradientId})`} transform={`rotate(${deg})`} />
        ))}
        <circle r="12.5" fill="#140a06" />
        <g stroke="#2a1a12" strokeWidth="1.4" strokeLinecap="round">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1="0" y1="0" x2="0" y2="-9.5" transform={`rotate(${deg})`} />
          ))}
        </g>
        <circle r="3.6" fill="#241208" />
      </g>
    </svg>
  )
}
