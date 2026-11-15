import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { latestNews } from '../data/news'

const ROTATE_MS = 6000
const items = latestNews(4)

function shortDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })
}

/**
 * A bold amber "Latest news" band across the top of the hero that rotates
 * through the newest headlines, with a progress bar and dots to jump between
 * them. Pauses on hover/focus, and stays static for users who prefer reduced
 * motion. Each headline links to the news feed. Renders the first headline
 * server-side so it works without JS.
 */
function LatestNewsBanner() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (items.length <= 1 || paused || reduced) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, reduced, index])

  if (items.length === 0) return null
  const item = items[index]
  const rotating = items.length > 1 && !reduced

  return (
    <div
      className="relative z-10 overflow-hidden bg-gradient-to-r from-[#ff8a3d] via-[#f4a94b] to-[#ffb85c] text-[#0b2d52] shadow-[0_6px_24px_-6px_rgba(255,138,61,0.55)]"
      role="region"
      aria-label="Latest news"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3.5 sm:gap-5 sm:px-6 sm:py-4">
        <span className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0b2d52] px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white shadow-sm sm:px-3 sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffb85c] opacity-90" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffb85c]" />
          </span>
          <span className="sm:hidden">Latest</span>
          <span className="hidden sm:inline">Latest news</span>
        </span>

        <div className="min-w-0 flex-1">
          <Link
            key={index}
            to="/#news"
            className="group block focus:outline-none"
            style={reduced ? undefined : { animation: 'latest-fade 400ms ease' }}
          >
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#0b2d52]/70 sm:text-xs">
              {shortDate(item.date)}
            </span>
            <span className="line-clamp-2 text-base font-extrabold leading-snug group-hover:underline group-focus-visible:underline sm:text-xl">
              {item.title}
            </span>
          </Link>
        </div>

        {items.length > 1 && (
          <div className="hidden shrink-0 items-center gap-1.5 md:flex" aria-label="Choose headline">
            {items.map((it, i) => (
              <button
                key={it.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show headline ${i + 1} of ${items.length}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-[#0b2d52]' : 'w-2 bg-[#0b2d52]/35 hover:bg-[#0b2d52]/60'}`}
              />
            ))}
          </div>
        )}

        <Link
          to="/#news"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-[#0b2d52] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#13427a] sm:inline-flex"
        >
          Read more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {rotating && (
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0b2d52]/15" aria-hidden="true">
          <div
            key={`${index}-${paused}`}
            className="h-full bg-[#0b2d52]/70"
            style={{
              animation: `latest-progress ${ROTATE_MS}ms linear forwards`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default LatestNewsBanner
