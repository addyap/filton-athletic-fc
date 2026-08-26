import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Fades and slides content up as it scrolls into view. Progressive
 * enhancement only: the prerendered/no-JS HTML has no hidden state at all
 * (plain visible content) — the "hidden until revealed" state is applied by
 * JS after mount, so content is never dependent on JS to be seen.
 */
function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setArmed(true)
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      // threshold 0 (fire on any intersection) rather than a fixed fraction:
      // a fraction can never be reached when the element is taller than the
      // viewport (e.g. the squad grid at one column on mobile), leaving it
      // stuck in the hidden state. rootMargin still holds the reveal until the
      // element is a little way into view.
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const stateClass = armed ? (visible ? 'reveal-visible' : 'reveal-hidden') : ''

  return (
    <div ref={ref} className={`${stateClass}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}

export default Reveal
