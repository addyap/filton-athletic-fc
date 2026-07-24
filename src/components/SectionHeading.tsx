import type { ReactNode } from 'react'

/** Simple line-icon set, drawn with currentColor so the chip colour drives them. */
const icons: Record<string, ReactNode> = {
  join: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6.1" />
      <path d="M17.5 14.4A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.3A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.5 11h7M8.5 14h4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shirt: (
    <path d="M8 4 4 7l2 3 2-1.5V20h8V8.5L18 10l2-3-4-3-2.5 2a2 2 0 0 1-3 0L8 4z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  standings: <path d="M5 20V10M12 20V4M19 20v-7" />,
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
  ),
  heart: (
    <path d="M12 20s-7-4.6-9.2-8.2C1.2 9 2.6 5.5 6 5.5c2 0 3.2 1.2 4 2.4.8-1.2 2-2.4 4-2.4 3.4 0 4.8 3.5 3.2 6.3C19 15.4 12 20 12 20z" />
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.3 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.7 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  shield: <path d="M12 3l7 2.6v5.2c0 4.6-3 7.7-7 9.2-4-1.5-7-4.6-7-9.2V5.6L12 3z" />,
  clipboard: (
    <>
      <rect x="5.5" y="5" width="13" height="15.5" rx="2" />
      <path d="M9 5V3.5h6V5M9 11h6M9 15h4" />
    </>
  ),
}

export function SectionIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

/** Section heading with a symbolic icon chip. `tone="dark"` for navy backgrounds. */
function SectionHeading({
  icon,
  title,
  tone = 'light',
  className,
}: {
  icon: string
  title: string
  tone?: 'light' | 'dark'
  className?: string
}) {
  const chip = tone === 'dark' ? 'bg-white/10 text-[#a9e0b8]' : 'bg-[#e7f0e9] text-[#2f6b45]'
  const titleColour = tone === 'dark' ? 'text-white' : 'text-[#0b2d52]'
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className ?? ''}`}>
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 lg:h-16 lg:w-16 ${chip}`}>
        <SectionIcon name={icon} className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
      </span>
      <h3 className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${titleColour}`}>{title}</h3>
    </div>
  )
}

export default SectionHeading
