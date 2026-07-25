import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    twttr?: { widgets: { load: (el?: HTMLElement) => void } }
  }
}

const WIDGETS_SRC = 'https://platform.twitter.com/widgets.js'

/** Embeds X's official timeline widget for a given handle (no API key needed). */
function XTimeline({ handle, tweetLimit = 4 }: { handle: string; tweetLimit?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function render() {
      if (window.twttr && container) window.twttr.widgets.load(container)
    }

    if (window.twttr) {
      render()
      return
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGETS_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', render)
      return () => existing.removeEventListener('load', render)
    }

    const script = document.createElement('script')
    script.src = WIDGETS_SRC
    script.async = true
    script.addEventListener('load', render)
    document.body.appendChild(script)
    return () => script.removeEventListener('load', render)
  }, [handle])

  return (
    <div ref={containerRef}>
      <a
        className="twitter-timeline"
        data-height="600"
        data-tweet-limit={tweetLimit}
        data-chrome="noheader nofooter noborders transparent"
        href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}
      >
        Tweets by {handle}
      </a>
    </div>
  )
}

export default XTimeline
