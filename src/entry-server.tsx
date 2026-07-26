import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { headForPath, type PageHead } from './head'
import { programmes } from './data/programmes'
import { posts } from './data/posts'
import { seasons } from './data/seasons'

/** Render a single route to static HTML plus its resolved <head> metadata. */
export function render(url: string): { appHtml: string; head: PageHead } {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
  return { appHtml, head: headForPath(url) }
}

/** Every path that should be prerendered to a static HTML file. */
export function getRoutePaths(): string[] {
  return [
    '/',
    '/archive',
    '/programmes',
    '/fixtures',
    '/table',
    '/reserves',
    '/as-team',
    '/youth',
    '/contact',
    ...programmes.map((p) => `/programme/${p.slug}`),
    ...posts.map((p) => `/join/${p.slug}`),
    ...seasons.map((s) => `/archive/${s.slug}`),
  ]
}
