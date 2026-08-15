import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { headForPath, type PageHead } from './head'
import { programmes } from './data/programmes'
import { posts } from './data/posts'
import { seasons } from './data/seasons'
import { opponentPreviews } from './data/opponents'

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
    '/first-team',
    '/fixtures',
    '/table',
    '/reserves',
    '/as-team',
    '/youth',
    '/contact',
    '/privacy-policy',
    '/safeguarding',
    '/match-centre',
    '/match-centre/update',
    ...programmes.map((p) => `/programme/${p.slug}`),
    ...opponentPreviews.map((p) => `/preview/${p.slug}`),
    ...posts.map((p) => `/join/${p.slug}`),
    '/archive/first-team',
    '/archive/reserves',
    ...seasons.map((s) => `/archive/first-team/${s.slug}`),
    ...seasons.filter((s) => s.reserveTable && s.reserveFixtures).map((s) => `/archive/reserves/${s.slug}`),
  ]
}
