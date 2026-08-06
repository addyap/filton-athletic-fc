import { getProgramme } from './data/programmes'
import { getPost } from './data/posts'
import { findSeason } from './data/seasons'
import { getOpponentPreview, fixtureForPreview } from './data/opponents'

/** Canonical production origin. Update here if the club moves to a custom domain. */
export const SITE_ORIGIN = 'https://filtonathletic.co.uk'
const OG_IMAGE = `${SITE_ORIGIN}/favicon.jpg`

export type PageHead = {
  title: string
  description: string
  canonical: string
  ogImage: string
  /** Set on draft pages (e.g. unfinished legal pages) to keep them out of search results. */
  noindex?: boolean
}

const DEFAULT_DESCRIPTION =
  'First team, reserves and youth football in the north of Bristol. Fixtures, results, league tables, matchday programmes and how to get involved.'

/** Resolve the <head> metadata for a given route path. Pure and data-driven. */
export function headForPath(pathname: string): PageHead {
  const path = pathname.replace(/\/+$/, '') || '/'
  const base = { canonical: `${SITE_ORIGIN}${path === '/' ? '/' : path}`, ogImage: OG_IMAGE }

  if (path === '/archive') {
    return {
      ...base,
      title: 'Season archive — Filton Athletic FC',
      description: 'Filton Athletic FC season archive — fixtures, results, final league tables and squads from past seasons.',
    }
  }

  if (path === '/archive/first-team') {
    return {
      ...base,
      title: 'First team archive — Filton Athletic FC',
      description: 'Filton Athletic FC first team archive — fixtures, results, final league tables and squads from every archived season.',
    }
  }

  if (path === '/archive/reserves') {
    return {
      ...base,
      title: 'Reserves archive — Filton Athletic FC',
      description: 'Filton Athletic FC Reserves archive — fixtures, results and final league tables from every archived season.',
    }
  }

  const firstTeamArchiveMatch = path.match(/^\/archive\/first-team\/([^/]+)$/)
  if (firstTeamArchiveMatch) {
    const season = findSeason(firstTeamArchiveMatch[1])
    if (season) {
      return {
        ...base,
        title: `First team ${season.label} archive — Filton Athletic FC`,
        description: `Filton Athletic FC first team ${season.label} archive — full fixtures, results, final league table${season.squad ? ' and squad' : ''}. ${season.standing}`,
      }
    }
  }

  const reservesArchiveMatch = path.match(/^\/archive\/reserves\/([^/]+)$/)
  if (reservesArchiveMatch) {
    const season = findSeason(reservesArchiveMatch[1])
    if (season?.reserveTable) {
      return {
        ...base,
        title: `Reserves ${season.label} archive — Filton Athletic FC`,
        description: `Filton Athletic FC Reserves ${season.label} archive — full fixtures, results and final league table. ${season.reserveStanding ?? ''}`,
      }
    }
  }

  if (path === '/programmes') {
    return {
      ...base,
      title: 'Matchday programmes — Filton Athletic FC',
      description:
        'Digital matchday programmes for every Filton Athletic home game at BBS Park North — welcome, team news, squads and league standings.',
    }
  }

  if (path === '/fixtures') {
    return {
      ...base,
      title: 'Fixtures & results — Filton Athletic FC',
      description:
        'Filton Athletic FC first team fixtures and results in the Marcliff Gloucestershire County Football League, 2026-27 season.',
    }
  }

  if (path === '/table') {
    return {
      ...base,
      title: 'League table — Filton Athletic FC',
      description: 'Marcliff Gloucestershire County Football League table for Filton Athletic FC, 2026-27 season.',
    }
  }

  if (path === '/reserves') {
    return {
      ...base,
      title: 'Reserves — Filton Athletic FC',
      description:
        'Filton Athletic FC Reserves fixtures, results and table in the Bristol & Suburban Premier Division, 2026-27 season.',
    }
  }

  if (path === '/as-team') {
    return {
      ...base,
      title: "A's — Filton Athletic FC",
      description: "Filton Athletic FC A's team, competing in the Bristol & Suburban Division Four.",
    }
  }

  if (path === '/youth') {
    return {
      ...base,
      title: 'Filton Athletic Youth FC',
      description:
        'Youth football at Filton Athletic FC — mixed teams from YDS through to U12s, and a new U13s girls team forming for 2026/27. FA qualified, DBS checked coaches.',
    }
  }

  if (path === '/contact') {
    return {
      ...base,
      title: 'Contact & ground — Filton Athletic FC',
      description: 'How to find and contact Filton Athletic FC at BBS Park North, Elm Park, Filton, Bristol.',
    }
  }

  if (path === '/privacy-policy') {
    return {
      ...base,
      title: 'Privacy policy — Filton Athletic FC',
      description: 'How Filton Athletic FC handles personal data.',
      noindex: true,
    }
  }

  if (path === '/safeguarding') {
    return {
      ...base,
      title: 'Safeguarding — Filton Athletic FC',
      description: "Filton Athletic FC's safeguarding policy for young players.",
      noindex: true,
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

  const previewMatch = path.match(/^\/preview\/(.+)$/)
  if (previewMatch) {
    const preview = getOpponentPreview(previewMatch[1])
    if (preview) {
      const fixture = fixtureForPreview(preview)
      const when = fixture ? `, ${fixture.venue === 'H' ? 'at home' : 'away'} on ${fixture.date}` : ''
      return {
        ...base,
        title: `Meet the visitors: ${preview.name} — Filton Athletic FC`,
        description: `Get to know ${preview.name} ahead of Filton Athletic vs ${preview.name}${when} — club history, key players and full squad. Full matchday programme to follow.`,
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
