import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function setMeta(selector: string, content: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

/**
 * Keeps the <head> in step with the current route during client-side navigation.
 *
 * The prerenderer already writes correct metadata into every static HTML file,
 * so this exists for in-app navigation, where no document reload happens and the
 * tags would otherwise keep describing whichever page was loaded first. Both
 * read from the same `headForPath`, so the two can't drift apart. It loads
 * separately because it pulls in every programme and archive record, which a
 * visitor only needs once they move to another page.
 */
export function usePageHead() {
  const { pathname } = useLocation()
  const firstPath = useRef(pathname)

  useEffect(() => {
    // The first page's metadata is already in the prerendered HTML.
    if (import.meta.env.PROD && pathname === firstPath.current) return
    firstPath.current = ''

    let current = true
    import('./head').then(({ headForPath }) => {
      if (!current) return
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
    })
    return () => {
      current = false
    }
  }, [pathname])
}
