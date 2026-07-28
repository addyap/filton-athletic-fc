import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { latestNews } from '../data/news'

const ROTATE_MS = 5000
const items = latestNews(4)

/**
 * A slim "Latest" strip across the top of the hero that fades through the newest
 * headlines one at a time. Pauses on hover/focus, and stays static for users who
 * prefer reduced motion. Each headline links to the news feed. Renders the first
 * headline server-side so it works without JS.
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
  }, [paused, reduced])

  if (items.length === 0) return null
  const item = items[index]

  return (
    <div className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-[1px]">
      <div
        className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#a9e0b8] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#0b2d52]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0b2d52] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0b2d52]" />
          </span>
          Latest
        </span>

        <div className="min-w-0 flex-1 overflow-hidden">
          <Link
            key={index}
            to="/#news"
            className="block truncate text-sm font-medium text-white hover:underline"
            style={reduced ? undefined : { animation: 'latest-fade 400ms ease' }}
          >
            {item.title}
          </Link>
        </div>

        <Link
          to="/#news"
          className="hidden shrink-0 text-xs font-semibold text-[#a9e0b8] hover:text-white sm:inline"
        >
          All news &rarr;
        </Link>
      </div>
    </div>
  )
}

export default LatestNewsBanner
