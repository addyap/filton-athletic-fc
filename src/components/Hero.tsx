import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LatestNewsBanner from './LatestNewsBanner'
import crestTrimmed from '../assets/img/filton-athletic-crest-trimmed.webp'

/**
 * "Wheels Up" — the signature hero.
 *
 * One idea, carried across every layer: Filton Athletic play where Concorde
 * first flew (Filton, its birthplace, 1969). A cold pre-dawn sky, a delta
 * climbing out on a vapour trail that draws itself in, the pitch resting on
 * the horizon. Heritage and ascent, read in two seconds.
 *
 * SSR-safe: the markup renders fully server-side and the entrance is pure CSS
 * (runs in-browser without JS). The starfield, pointer parallax and first-
 * scroll takeoff are JS enhancements only, all guarded by reduced-motion.
 */
function Hero() {
  const stageRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Ambient starfield — a slow, faint drift so the sky isn't dead at rest.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let stars: { x: number; y: number; r: number; a: number; tw: number; p: number }[] = []
    let w = 0
    let h = 0
    let raf = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((w * h) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.74,
        r: Math.random() * 1.3 + 0.2,
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * 0.02 + 0.004,
        p: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        const a = s.a + Math.sin(t * s.tw + s.p) * 0.18
        ctx.globalAlpha = Math.max(0, a)
        ctx.fillStyle = i % 9 === 0 ? '#f4d9a8' : '#dfeafc'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
        s.x += 0.01 + s.r * 0.006
        if (s.x > w + 2) s.x = -2
      }
      ctx.globalAlpha = 1
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduce) {
      draw(0)
    } else {
      const loop = (t: number) => {
        draw(t)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Pointer parallax (aircraft banks toward the cursor) + first-scroll takeoff.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const layers = Array.from(stage.querySelectorAll<HTMLElement>('[data-depth]'))
    const craft = stage.querySelector<HTMLElement>('[data-craft]')
    const content = stage.querySelector<HTMLElement>('[data-content]')
    const sky = stage.querySelector<HTMLElement>('[data-sky]')
    const flight = stage.querySelector<HTMLElement>('[data-flight]')

    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let bank = 0
    let bankT = 0
    let raf = 0
    let scrollP = 0
    const fine = window.matchMedia('(pointer:fine)').matches

    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5
      ty = e.clientY / window.innerHeight - 0.5
      bankT = tx * 8
    }

    const applyScroll = () => {
      const vh = window.innerHeight
      scrollP = Math.min(1, Math.max(0, window.scrollY / (vh * 0.85)))
      if (craft) craft.style.opacity = String(1 - scrollP * 1.1)
      if (flight) flight.style.transform = `translate3d(${scrollP * 120}px, ${-scrollP * 240}px, 0)`
      if (content) {
        content.style.transform = `translateY(${-scrollP * 36}px)`
        content.style.opacity = String(1 - scrollP * 0.9)
      }
      if (sky) sky.style.transform = `translateY(${scrollP * 26}px) scale(${1 + scrollP * 0.04})`
    }

    const tick = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      bank += (bankT - bank) * 0.05
      for (const el of layers) {
        const d = parseFloat(el.getAttribute('data-depth') || '0')
        // The flight layer owns its own transform during scroll; skip it here.
        if (el === flight) continue
        el.style.transform = `translate3d(${-cx * d}px, ${-cy * d}px, 0)`
      }
      if (craft) {
        craft.style.transform =
          `translate3d(${-cx * 40}px, ${-cy * 40}px, 0) rotate(${-22 + bank}deg)`
      }
      raf = requestAnimationFrame(tick)
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        applyScroll()
        ticking = false
      })
    }

    if (fine) {
      window.addEventListener('pointermove', onMove)
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={stageRef}
      className="fah relative flex min-h-[64svh] flex-col overflow-hidden bg-[#04101f] text-white"
    >
      <style>{`
        .fah { --amber:#f4a94b; --burn:#ff8a3d; --vapour:#eaf1fb; }
        .fah-sky {
          position:absolute; inset:0; z-index:0; will-change:transform;
          background:
            radial-gradient(120% 80% at 68% 32%, rgba(29,82,134,.55) 0%, rgba(10,31,61,0) 55%),
            radial-gradient(90% 55% at 60% 100%, rgba(244,169,75,.26) 0%, rgba(244,169,75,0) 60%),
            linear-gradient(180deg,#04101f 0%,#071a35 34%,#0e2f54 72%,#164173 100%);
        }
        .fah-horizon {
          position:absolute; left:-5%; right:-5%; bottom:20%; height:2px; z-index:1;
          background:linear-gradient(90deg,transparent,rgba(244,169,75,.75) 45%,rgba(255,138,61,.9) 60%,transparent);
          filter:blur(.4px); opacity:0; transform:scaleX(.4); transform-origin:60% 50%;
          animation:fah-horizon 1.6s cubic-bezier(.22,.68,.24,1) .15s forwards;
        }
        @keyframes fah-horizon { to { opacity:1; transform:scaleX(1); } }
        .fah-stars { position:absolute; inset:0; z-index:1; width:100%; height:100%;
          opacity:0; animation:fah-fade 1.4s ease .2s forwards; }
        .fah-ground { position:absolute; left:50%; bottom:0; width:160%; height:34%; z-index:2;
          transform:translateX(-50%); pointer-events:none; opacity:0;
          animation:fah-up 1.2s ease .8s forwards; }
        .fah-crest {
          position:absolute; inset-block:0; left:50%; transform:translateX(-50%);
          height:100%; width:auto; z-index:2; pointer-events:none; object-fit:contain;
          opacity:0; mix-blend-mode:soft-light;
          filter:drop-shadow(0 2px 1px rgba(0,0,0,.5)) drop-shadow(0 -1px 1px rgba(255,255,255,.12));
          animation:fah-crest 1.6s ease .3s forwards;
        }
        @keyframes fah-crest { to { opacity:.22; } }
        .fah-flight { position:absolute; inset:0; z-index:3; pointer-events:none; will-change:transform; }
        .fah-trail { position:absolute; inset:0; width:100%; height:100%; }
        .fah-trailhead { fill:none; stroke:url(#fahTrail); stroke-width:3; stroke-linecap:round;
          stroke-dashoffset:1; animation:fah-draw 1.7s cubic-bezier(.22,.68,.24,1) .35s forwards; }
        .fah-trailglow { fill:none; stroke:rgba(234,241,251,.35); stroke-width:9; filter:blur(6px);
          stroke-linecap:round; stroke-dashoffset:1; animation:fah-draw 1.7s cubic-bezier(.22,.68,.24,1) .35s forwards; }
        @keyframes fah-draw { to { stroke-dashoffset:0; } }
        .fah-craft {
          position:absolute; top:20%; left:60%; width:clamp(140px,19vw,290px); z-index:4;
          transform-origin:50% 60%; pointer-events:auto; cursor:help; opacity:0;
          filter:drop-shadow(0 0 22px rgba(255,138,61,.45));
          animation:fah-craft 1.2s cubic-bezier(.22,.68,.24,1) .9s forwards;
        }
        @keyframes fah-craft {
          from { opacity:0; transform:translate(-46px,40px) rotate(-30deg) scale(.92); }
          to   { opacity:1; transform:translate(0,0) rotate(-22deg) scale(1); }
        }
        .fah-craft svg { display:block; width:100%; height:auto; overflow:visible; }
        .fah-burn { transform-box:fill-box; transform-origin:center;
          animation:fah-flicker .9s ease-in-out infinite alternate; }
        @keyframes fah-flicker { from { opacity:.55; } to { opacity:1; } }
        .fah-strip {
          position:absolute; left:50%; top:-14px; transform:translate(-50%,-100%) scale(.96);
          background:rgba(4,14,30,.88); border:1px solid #2b4a72; border-left:2px solid var(--amber);
          padding:8px 11px; border-radius:6px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
          font-size:11px; line-height:1.5; color:#9fb6d6; white-space:nowrap; opacity:0;
          pointer-events:none; transition:opacity .25s ease, transform .25s cubic-bezier(.22,.68,.24,1);
          backdrop-filter:blur(4px);
        }
        .fah-strip b { color:var(--vapour); font-weight:500; }
        .fah-strip .reg { color:var(--amber); }
        .fah-craft:hover .fah-strip, .fah-craft:focus-visible .fah-strip {
          opacity:1; transform:translate(-50%,-100%) scale(1); }
        .fah-craft:hover, .fah-craft:focus-visible {
          filter:drop-shadow(0 0 34px rgba(255,138,61,.75)); outline:none; }
        .fah-craft:hover .fah-burn, .fah-craft:focus-visible .fah-burn { animation-duration:.4s; }

        .fah-eyebrow, .fah-sub, .fah-cta, .fah-fs, .fah-cue { opacity:0; }
        .fah-eyebrow { animation:fah-up .8s ease 1.7s forwards; }
        .fah-sub { animation:fah-up .9s ease 1.9s forwards; }
        .fah-cta { animation:fah-up .9s ease 2.05s forwards; }
        .fah-fs { animation:fah-up 1s ease 2.2s forwards; }
        .fah-cue { animation:fah-up 1s ease 2.5s forwards; }

        .fah-h1 { font-family:"Archivo",system-ui,-apple-system,"Segoe UI",sans-serif;
          font-weight:900; letter-spacing:-.02em; line-height:.94;
          font-size:clamp(2.5rem,8vw,6rem); text-wrap:balance; max-width:14ch; margin:0; }
        .fah-line { display:block; overflow:hidden; }
        .fah-line > span { display:block; transform:translateY(105%); }
        .fah-l1 > span { animation:fah-rise 1s cubic-bezier(.22,.68,.24,1) 1.15s forwards; }
        .fah-l2 > span { animation:fah-rise 1s cubic-bezier(.22,.68,.24,1) 1.28s forwards; }
        @keyframes fah-rise { to { transform:translateY(0); } }
        .fah-glow { color:var(--amber); position:relative; white-space:nowrap;
          text-shadow:0 0 34px rgba(244,169,75,.35); }
        .fah-glow::after { content:""; position:absolute; left:0; right:0; bottom:-.08em; height:3px;
          border-radius:3px; background:linear-gradient(90deg,transparent,var(--amber),var(--burn));
          transform:scaleX(0); transform-origin:left; animation:fah-uline 1s cubic-bezier(.22,.68,.24,1) 2.05s forwards; }
        @keyframes fah-uline { to { transform:scaleX(1); } }

        .fah-tick { width:7px; height:7px; border-radius:50%; background:var(--amber);
          box-shadow:0 0 10px var(--amber); }
        .fah-cue-rail { width:1px; height:38px; background:linear-gradient(var(--amber),transparent);
          position:relative; overflow:hidden; }
        .fah-cue-rail::after { content:""; position:absolute; left:0; top:0; width:1px; height:12px;
          background:var(--vapour); animation:fah-fall 1.8s ease-in-out infinite; }
        @keyframes fah-fall { 0% { transform:translateY(-14px); opacity:0; } 40% { opacity:1; }
          100% { transform:translateY(40px); opacity:0; } }

        @keyframes fah-fade { to { opacity:1; } }
        @keyframes fah-up { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } }

        @media (prefers-reduced-motion: reduce) {
          .fah-horizon { opacity:1; transform:none; animation:none; }
          .fah-crest { opacity:.22; animation:none; }
          .fah-stars, .fah-ground, .fah-eyebrow, .fah-sub, .fah-cta, .fah-fs, .fah-cue { opacity:1; animation:none; }
          .fah-craft { opacity:1; transform:rotate(-22deg); animation:none; }
          .fah-line > span { transform:none; animation:none; }
          .fah-glow::after { transform:scaleX(1); animation:none; }
          .fah-burn { animation:none; }
          .fah-trailhead, .fah-trailglow { stroke-dashoffset:0; animation:none; }
        }
      `}</style>

      <div className="fah-sky" data-sky data-depth="6" />
      <canvas ref={canvasRef} className="fah-stars" data-depth="10" aria-hidden="true" />
      <div className="fah-horizon" />

      {/* Club crest, embossed faintly into the sky */}
      <img
        src={crestTrimmed}
        alt=""
        aria-hidden="true"
        className="fah-crest"
        data-depth="8"
      />

      {/* Pitch geometry resting on the horizon */}
      <svg
        className="fah-ground"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        stroke="rgba(111,224,160,0.28)"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path d="M500 4 L980 296 L20 296 Z" stroke="rgba(159,182,214,0.16)" />
        <line x1="60" y1="118" x2="940" y2="118" stroke="rgba(159,182,214,0.2)" />
        <ellipse cx="500" cy="150" rx="150" ry="30" />
        <line x1="500" y1="120" x2="500" y2="296" stroke="rgba(159,182,214,0.15)" />
      </svg>

      {/* Vapour trail + aircraft */}
      <div className="fah-flight" data-flight data-depth="26">
        <svg className="fah-trail" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="fahTrail" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(234,241,251,0)" />
              <stop offset="45%" stopColor="rgba(234,241,251,0.55)" />
              <stop offset="88%" stopColor="rgba(255,235,205,0.95)" />
              <stop offset="100%" stopColor="#ff8a3d" />
            </linearGradient>
          </defs>
          <path className="fah-trailglow" pathLength={1} d="M40 585 C 240 560, 430 520, 560 400 S 690 250, 690 205" />
          <path className="fah-trailhead" pathLength={1} d="M40 585 C 240 560, 430 520, 560 400 S 690 250, 690 205" />
        </svg>

        <div
          className="fah-craft"
          data-craft
          data-depth="40"
          tabIndex={0}
          role="img"
          aria-label="Concorde — first flew from Filton in 1969"
        >
          <div className="fah-strip" aria-hidden="true">
            <span className="reg">G-BOAC</span> · CONCORDE
            <br />
            FIRST FLIGHT · <b>FILTON · 1969</b>
          </div>
          <svg viewBox="0 0 300 400" aria-hidden="true">
            <defs>
              <linearGradient id="fahBurn" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(255,138,61,0)" />
                <stop offset="55%" stopColor="rgba(255,170,90,0.85)" />
                <stop offset="100%" stopColor="rgba(255,240,210,0.95)" />
              </linearGradient>
              <linearGradient id="fahBody" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f4f8ff" />
                <stop offset="55%" stopColor="#c3d3ec" />
                <stop offset="100%" stopColor="#8ea4c6" />
              </linearGradient>
            </defs>
            <ellipse className="fah-burn" cx="150" cy="372" rx="17" ry="46" fill="url(#fahBurn)" />
            {/* ogee delta wing */}
            <path
              fill="url(#fahBody)"
              d="M150 96 C 150 150, 150 150, 150 150 C 118 210, 70 250, 36 322 C 30 336, 44 340, 60 337 L 150 322 L 240 337 C 256 340, 270 336, 264 322 C 230 250, 182 210, 150 150 Z"
            />
            {/* slim fuselage, needle nose to tail */}
            <path
              fill="url(#fahBody)"
              d="M150 8 C 158 40, 160 120, 160 240 C 160 320, 156 352, 150 366 C 144 352, 140 320, 140 240 C 140 120, 142 40, 150 8 Z"
            />
            {/* tail fin */}
            <path fill="#aebfd8" d="M150 300 L150 360 L166 372 C 168 348, 162 320, 150 300 Z" />
            {/* four engine nacelles under the wing */}
            <g fill="#7b90b4">
              <rect x="96" y="312" width="10" height="26" rx="4" />
              <rect x="118" y="320" width="10" height="24" rx="4" />
              <rect x="172" y="320" width="10" height="24" rx="4" />
              <rect x="194" y="312" width="10" height="26" rx="4" />
            </g>
          </svg>
        </div>
      </div>

      <LatestNewsBanner />

      {/* Foreground lockup */}
      <div
        data-content
        className="relative z-20 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-8 sm:px-6 sm:py-10"
      >
        <span className="fah-eyebrow inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9fb6d6] sm:text-xs">
          <span className="fah-tick" />
          Filton Athletic FC — North Bristol, est. 1960s
        </span>

        <h1 className="fah-h1 mt-4">
          <span className="fah-line fah-l1">
            <span>We play where</span>
          </span>
          <span className="fah-line fah-l2">
            <span>
              <span className="fah-glow">Concorde flew.</span>
            </span>
          </span>
        </h1>

        <p className="fah-sub mt-6 max-w-[46ch] text-base leading-relaxed text-[#cdddf1] sm:text-lg lg:text-xl">
          Grassroots football in Filton — birthplace of Concorde. First team, reserves,
          A&rsquo;s and youth at BBS Park North. Come down and back the lads.
        </p>

        <div className="fah-cta mt-8 flex flex-wrap gap-3.5">
          <Link
            to="/#club-calendar"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#ffb85c] to-[#f4a94b] px-6 py-3.5 font-semibold text-[#2a1602] shadow-[0_10px_30px_-8px_rgba(244,169,75,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(255,138,61,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a94b]"
          >
            This week&rsquo;s football
            <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            to="/#league-results"
            className="inline-flex items-center gap-2 rounded-full border border-[#2b4a72] bg-white/[0.04] px-6 py-3.5 font-semibold text-white backdrop-blur-[3px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f4a94b] hover:bg-[#f4a94b]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a94b]"
          >
            Fixtures &amp; results
          </Link>
        </div>
      </div>

      {/* Flight-strip: league identity as flight data */}
      <div className="fah-fs pointer-events-none absolute bottom-6 right-5 z-20 text-right font-mono text-[11px] leading-relaxed tracking-[0.03em] text-[#9fb6d6] sm:right-6">
        <span className="font-medium text-white">MARCLIFF GLOS. COUNTY LEAGUE</span>
        <br />
        3 adult teams · youth section · <span className="text-[#f4a94b]">est. 1960s</span>
      </div>

      {/* Scroll cue */}
      <div className="fah-cue pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#9fb6d6] sm:flex">
        <span>Wheels up</span>
        <span className="fah-cue-rail" />
      </div>

      {/* Wave hand-off into the (light) matchday content below */}
      <svg
        className="pointer-events-none absolute -bottom-px left-0 z-10 w-full text-slate-50"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z" />
      </svg>
    </section>
  )
}

export default Hero
