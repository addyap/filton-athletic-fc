import { getProgramme } from './data/programmes'
import { getPost } from './data/posts'

/** Canonical production origin. Update here if the club moves to a custom domain. */
export const SITE_ORIGIN = 'https://filton-athletic-fc.vercel.app'
const OG_IMAGE = `${SITE_ORIGIN}/favicon.jpg`

export type PageHead = {
  title: string
  description: string
  canonical: string
  ogImage: string
}

const DEFAULT_DESCRIPTION =
  'First team, reserves and youth football in the north of Bristol. Fixtures, results, league tables, matchday programmes and how to get involved.'

/** Resolve the <head> metadata for a given route path. Pure and data-driven. */
export function headForPath(pathname: string): PageHead {
  const path = pathname.replace(/\/+$/, '') || '/'
  const base = { canonical: `${SITE_ORIGIN}${path === '/' ? '/' : path}`, ogImage: OG_IMAGE }

  if (path === '/programmes') {
    return {
      ...base,
      title: 'Matchday programmes — Filton Athletic FC',
      description:
        'Digital matchday programmes for every Filton Athletic home game at BBS Park North — welcome, team news, squads and league standings.',
    }
  }

  const programmeMatch = path.match(/^\/programme\/(.+)$/)
  if (programmeMatch) {
    const programme = getProgramme(programmeMatch[1])
    if (programme) {
      return {
        ...base,
        title: `Filton Athletic vs ${programme.fixture.opponent} — Matchday programme`,
        description: `Matchday programme for Filton Athletic vs ${programme.fixture.opponent}, ${programme.longDate}, kick-off ${programme.fixture.time} at BBS Park North. ${programme.competitionName}.`,
      }
    }
  }

  const postMatch = path.match(/^\/join\/(.+)$/)
  if (postMatch) {
    const post = getPost(postMatch[1])
    if (post) {
      return {
        ...base,
        title: `${post.title} — Filton Athletic FC`,
        description: post.excerpt,
      }
    }
  }

  return {
    ...base,
    title: 'Filton Athletic FC',
    description: DEFAULT_DESCRIPTION,
  }
}
