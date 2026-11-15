import { sponsors } from '../data/club'

const MAIN_SPONSORS = ['BBS Plumbing & Heating Supplies', 'First Auto Care Techs']

/**
 * Scrolling strip of club sponsors, main sponsors first. `dark` sits in the site
 * header on inner pages; `light` sits just under the hero on the home page.
 * Pauses on hover and stays still for users who prefer reduced motion.
 */
function SponsorTicker({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const light = variant === 'light'
  const ordered = [
    ...sponsors.filter((s) => MAIN_SPONSORS.includes(s.name)),
    ...sponsors.filter((s) => !MAIN_SPONSORS.includes(s.name)),
  ]
  const items = [...ordered, ...ordered]

  const wrapClass = light
    ? 'border-y border-slate-200 bg-slate-50 text-[#0b2d52]'
    : 'border-b border-white/[0.06] bg-[#071e38] text-white'
  const labelClass = light
    ? 'border-r border-slate-200 bg-[#0b2d52] text-white'
    : 'border-r border-white/10 text-slate-400'
  const mainClass = light ? 'font-bold text-[#0b2d52]' : 'font-semibold text-[#e8c76a]'
  const otherClass = light ? 'text-slate-500 hover:text-[#0b2d52]' : 'text-slate-400 hover:text-white'
  const size = light ? 'py-2.5 sm:py-3' : 'py-1.5 sm:py-2'

  return (
    <div className={`flex items-stretch ${wrapClass}`} aria-hidden="true">
      <style>{`
        @keyframes sponsor-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .sponsor-ticker { animation: sponsor-scroll 35s linear infinite; }
        .sponsor-ticker:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .sponsor-ticker { animation: none; } }
      `}</style>
      <span
        className={`flex shrink-0 items-center px-3 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs ${labelClass}`}
      >
        {light ? 'Our sponsors' : 'Sponsors'}
      </span>
      <div className="flex min-w-0 flex-1 overflow-hidden">
        <div className={`sponsor-ticker flex shrink-0 items-center whitespace-nowrap ${size}`}>
          {items.map((s, i) => {
            const isMain = MAIN_SPONSORS.includes(s.name)
            return (
              <span key={i} className="flex items-center">
                <span className="mx-3 text-[9px] text-[#c9a84c] sm:mx-5 sm:text-xs" aria-hidden="true">
                  ◆
                </span>
                <a
                  href={s.website ?? '/#sponsors'}
                  {...(s.website ? { target: '_blank', rel: 'noreferrer' } : {})}
                  tabIndex={-1}
                  className={`text-sm tracking-wide transition hover:underline sm:text-base ${
                    s.website && isMain ? mainClass : otherClass
                  }`}
                >
                  {s.name}
                </a>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SponsorTicker
