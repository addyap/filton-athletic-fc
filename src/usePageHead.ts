import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { headForPath } from './head'

function setMeta(selector: string, content: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

/**
 * Keeps the <head> in step with the current route during client-side navigation.
 *
 * The prerenderer already writes correct metadata into every static HTML file,
 * so this exists for in-app navigation, where no document reload happens and the
 * tags would otherwise keep describing whichever page was loaded first. Both
 * read from the same `headForPath`, so the two can't drift apart.
 */
export function usePageHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const head = headForPath(pathname)

    document.title = head.title
    setMeta('meta[name="description"]', head.description)
    setMeta('meta[property="og:title"]', head.title)
    setMeta('meta[property="og:description"]', head.description)
    setMeta('meta[property="og:url"]', head.canonical)
    setMeta('meta[property="og:image"]', head.ogImage)
    setMeta('meta[property="og:type"]', head.ogType ?? 'website')
    setMeta('meta[name="twitter:title"]', head.title)
    setMeta('meta[name="twitter:description"]', head.description)
    setMeta('meta[name="twitter:image"]', head.ogImage)
    setMeta('meta[name="robots"]', head.noindex ? 'noindex,follow' : 'index,follow')
    document.head
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute('href', head.canonical)
  }, [pathname])
}
