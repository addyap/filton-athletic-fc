import { useEffect, useState } from 'react'

/**
 * Remembrance Sunday lookover — a dignified, self-expiring banner.
 *
 * It shows only during Remembrance Sunday (8 November 2026, local time) and
 * removes itself at midnight: the window is checked against the viewer's clock
 * on mount, and a timer clears it at midnight if the tab is left open. Because
 * the gate is client-side, the solemn treatment appears and disappears on time
 * without needing a redeploy — the prerendered HTML renders nothing.
 */

// Local-time window: the whole of Sun 8 Nov 2026, finishing at midnight.
const START = new Date(2026, 10, 8, 0, 0, 0).getTime()
const END = new Date(2026, 10, 9, 0, 0, 0).getTime()
const DISMISS_KEY = 'remembrance-2026'

/** One poppy — four crimson petals, a dark seeded heart. */
function Poppy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="poppyPetal" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#ef2b3d" />
          <stop offset="62%" stopColor="#c8102e" />
          <stop offset="100%" stopColor="#8f0b20" />
        </radialGradient>
      </defs>
      <g transform="translate(50 50)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-21"
            rx="19"
            ry="24"
            fill="url(#poppyPetal)"
            transform={`rotate(${deg})`}
          />
        ))}
        {/* seeded heart */}
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

function RemembranceBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const now = Date.now()
    if (now < START || now >= END) return
    try {
      if (localStorage.getItem(DISMISS_KEY) === 'dismissed') return
    } catch {
      /* storage may be unavailable — show anyway */
    }
    setShow(true)
    // Fold the banner away the moment the day ends, even on an open tab.
    const timer = window.setTimeout(() => setShow(false), END - now)
    return () => window.clearTimeout(timer)
  }, [])

  if (!show) return null

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, 'dismissed')
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  return (
    <aside
      role="region"
      aria-label="Remembrance Sunday"
      className="rb relative overflow-hidden border-b border-[#c8102e]/40 bg-[#0a0a0c] text-slate-100 print:hidden"
    >
      <style>{`
        .rb { background:
          radial-gradient(130% 150% at 15% -40%, rgba(200,16,46,.22) 0%, rgba(200,16,46,0) 55%),
          linear-gradient(180deg,#0c0c0f 0%,#090909 100%); }
        .rb-rule { background:linear-gradient(90deg,transparent,#c8102e 45%,#ef2b3d 55%,transparent); }
        .rb-poppy { animation:rb-bloom 1.4s cubic-bezier(.22,.68,.24,1) both; transform-origin:50% 54%; }
        @keyframes rb-bloom {
          from { opacity:0; transform:scale(.55) rotate(-12deg); }
          60%  { opacity:1; }
          to   { opacity:1; transform:scale(1) rotate(0deg); }
        }
        .rb-fade { opacity:0; animation:rb-rise .9s ease forwards; }
        .rb-d1 { animation-delay:.25s; } .rb-d2 { animation-delay:.42s; } .rb-d3 { animation-delay:.58s; }
        @keyframes rb-rise { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
        .rb-petal { position:absolute; top:-14px; width:11px; height:14px; border-radius:60% 60% 55% 55%;
          background:linear-gradient(160deg,#ef2b3d,#8f0b20); opacity:0; pointer-events:none;
          animation:rb-fall linear infinite; }
        @keyframes rb-fall {
          0% { transform:translateY(-20px) rotate(0deg); opacity:0; }
          12% { opacity:.55; }
          100% { transform:translateY(190px) rotate(220deg); opacity:0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rb-poppy, .rb-fade { animation:none; opacity:1; transform:none; }
          .rb-petal { display:none; }
        }
      `}</style>

      {/* a few petals drifting on the breeze */}
      <span className="rb-petal" style={{ left: '12%', animationDuration: '9s', animationDelay: '0.5s' }} />
      <span className="rb-petal" style={{ left: '38%', animationDuration: '11s', animationDelay: '2.4s' }} />
      <span className="rb-petal" style={{ left: '72%', animationDuration: '10s', animationDelay: '1.3s' }} />
      <span className="rb-petal" style={{ left: '88%', animationDuration: '12s', animationDelay: '3.2s' }} />

      <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5">
        <Poppy className="rb-poppy h-12 w-12 shrink-0 drop-shadow-[0_2px_10px_rgba(200,16,46,.45)] sm:h-16 sm:w-16" />

        <div className="min-w-0 flex-1">
          <p className="rb-fade rb-d1 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ef5a67] sm:text-xs">
            Lest we forget
          </p>
          <p className="rb-fade rb-d2 mt-0.5 font-serif text-lg font-semibold leading-tight text-white sm:text-2xl">
            We will remember them
          </p>
          <p className="rb-fade rb-d3 mt-1.5 max-w-3xl text-[13px] italic leading-relaxed text-slate-300 sm:text-sm">
            <span className="hidden sm:inline">
              &ldquo;They shall grow not old, as we that are left grow old; age shall not weary them, nor the years
              condemn.&rdquo;{' '}
            </span>
            This Remembrance Sunday, Filton Athletic FC remembers all who served and gave their lives. The two-minute
            silence is observed at 11am.
          </p>
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss the remembrance message"
          className="rb-fade rb-d3 -mr-1 shrink-0 self-start rounded p-1.5 text-slate-500 transition hover:bg-white/10 hover:text-slate-200"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="rb-rule h-px w-full" aria-hidden="true" />
    </aside>
  )
}

export default RemembranceBanner
