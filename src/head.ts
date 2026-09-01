import { getProgramme } from './data/programmes'
import { getPost } from './data/posts'
import { findSeason } from './data/seasons'
import { getOpponentPreview, fixtureForPreview } from './data/opponents'
import { getHistoricTeamPhoto } from './data/historicTeamPhotos'

/** Canonical production origin. Update here if the club moves to a custom domain. */
export const SITE_ORIGIN = 'https://filtonathletic.co.uk'
// 1200x630 club banner, so shared links get a full-width card rather than the
// small square one a crest-sized image produces.
const OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`

export type PageHead = {
  title: string
  description: string
  canonical: string
  ogImage: string
  /** Open Graph type. Pages that read as content (programmes, posts) use 'article'. */
  ogType?: 'website' | 'article'
  /** Page-specific schema.org JSON-LD, injected alongside the site-wide SportsTeam graph. */
  jsonLd?: Record<string, unknown>[]
  /** Set on draft pages (e.g. unfinished legal pages) to keep them out of search results. */
  noindex?: boolean
}

const GROUND = {
  '@type': 'Place',
  name: 'BBS Park North, Elm Park',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Elm Park',
    addressLocality: 'Filton, Bristol',
    postalCode: 'BS34 7PS',
    addressCountry: 'GB',
  },
}

/** schema.org BreadcrumbList — helps Google render the site hierarchy in results. */
function breadcrumbs(trail: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_ORIGIN}${crumb.path}`,
    })),
  }
}

const DEFAULT_DESCRIPTION =
  'First team, reserves and youth football in the north of Bristol. Fixtures, results, league tables, matchday programmes and how to get involved.'

/** Resolve the <head> metadata for a given route path. Pure and data-driven. */
export function headForPath(pathname: string): PageHead {
  const path = pathname.replace(/\/+$/, '') || '/'
  const base = { canonical: `${SITE_ORIGIN}${path === '/' ? '/' : path}`, ogImage: OG_IMAGE }

  if (path === '/') {
    return {
      ...base,
      title: 'Filton Athletic FC',
      description: DEFAULT_DESCRIPTION,
    }
  }

  if (path === '/archive') {
    return {
      ...base,
      title: 'Season archive — Filton Athletic FC',
      description: 'Filton Athletic FC season archive — fixtures, results, final league tables and squads from past seasons.',
    }
  }

  if (path === '/archive/filton-athletic-evening-post-2009') {
    return {
      ...base,
      title: 'From the archive: Filton Athletic in 2009 — Filton Athletic FC',
      description:
        'A preserved 2009 Evening Post feature and original club-archive summary of Filton Athletic FC’s route back to success.',
    }
  }

  if (path === '/archive/team-photographs') {
    return {
      ...base,
      title: 'Historic team photographs — Filton Athletic FC',
      description: 'A visual club archive of supplied Filton Athletic First Team and Reserves photographs, preserved with their original display context.',
    }
  }

  const historicTeamPhotoMatch = path.match(/^\/archive\/team-photographs\/([^/]+)$/)
  if (historicTeamPhotoMatch) {
    const photo = getHistoricTeamPhoto(historicTeamPhotoMatch[1])
    if (photo) {
      return {
        ...base,
        title: `${photo.title} — Filton Athletic FC`,
        description: `${photo.collectionLabel} for Filton Athletic ${photo.team}, preserved as an individual club archive record.`,
        // photo.imageUrl is a site-relative path; og:image needs it absolute.
        ogImage: `${SITE_ORIGIN}${photo.imageUrl}`,
        ogType: 'article',
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            name: photo.title,
            contentUrl: `${SITE_ORIGIN}${photo.imageUrl}`,
            description: `${photo.collectionLabel} for Filton Athletic ${photo.team}.`,
            isPartOf: { '@type': 'CollectionPage', name: 'Historic team photographs', url: `${SITE_ORIGIN}/archive/team-photographs` },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Season archive', path: '/archive' },
            { name: 'Historic team photographs', path: '/archive/team-photographs' },
            { name: photo.title, path },
          ]),
        ],
      }
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
        jsonLd: [
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Season archive', path: '/archive' },
            { name: 'First team', path: '/archive/first-team' },
            { name: season.label, path },
          ]),
        ],
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
        jsonLd: [
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Season archive', path: '/archive' },
            { name: 'Reserves', path: '/archive/reserves' },
            { name: season.label, path },
          ]),
        ],
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

  if (path === '/first-team') {
    return {
      ...base,
      title: 'First Team — Filton Athletic FC',
      description:
        'Filton Athletic FC First Team — squad, fixtures, results, league table, match gallery and latest news for the 2026-27 season.',
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
        'Youth football at Filton Athletic FC — mixed boys’ and girls’ teams from YDS through to U13s, with a full fixtures calendar and a new U13s girls team forming for 2026/27. FA qualified, DBS checked coaches.',
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
        // The date keeps the title unique: the same opponent is played at home
        // in more than one season, and identical titles confuse search results.
        title: `Filton Athletic vs ${programme.fixture.opponent}, ${programme.longDate} — Matchday programme`,
        description: `Matchday programme for Filton Athletic vs ${programme.fixture.opponent}, ${programme.longDate}, kick-off ${programme.fixture.time} at BBS Park North. ${programme.competitionName}.`,
        ogType: 'article',
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'SportsEvent',
            name: `Filton Athletic vs ${programme.fixture.opponent}`,
            // No UTC offset: schema.org reads this as local time at the ground,
            // which stays correct across the BST/GMT switch mid-season.
            startDate: `${programme.isoDate}T${programme.fixture.time}:00`,
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            url: base.canonical,
            location: GROUND,
            competitor: [
              { '@type': 'SportsTeam', name: 'Filton Athletic FC', url: `${SITE_ORIGIN}/` },
              { '@type': 'SportsTeam', name: programme.fixture.opponent },
            ],
            organizer: { '@type': 'SportsOrganization', name: programme.competitionName },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Matchday programmes', path: '/programmes' },
            { name: `vs ${programme.fixture.opponent}`, path: path },
          ]),
        ],
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
        title: `Meet the opposition: ${preview.name} — Filton Athletic FC`,
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
        ogType: 'article',
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            url: base.canonical,
            publisher: {
              '@type': 'SportsTeam',
              name: 'Filton Athletic FC',
              url: `${SITE_ORIGIN}/`,
            },
          },
        ],
      }
    }
  }

  // Unknown path — a 404. Kept out of the index so stray URLs never rank.
  return {
    ...base,
    title: 'Page not found — Filton Athletic FC',
    description:
      'Sorry, we couldn’t find that page. Head back to the Filton Athletic FC home page for fixtures, results, tables and club news.',
    noindex: true,
  }
}
