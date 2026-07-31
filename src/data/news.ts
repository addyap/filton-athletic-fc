import type { TeamId } from './teams'
import fatsWorldCupFlag from '../assets/img/fats-world-cup-flag.png'
import councilMeetingPhoto from '../assets/img/council-meeting-ground-improvements.jpg'
import councilGroundPlansPhoto from '../assets/img/filton-council-ground-plans.jpg'
import macmillanGolfPhoto from '../assets/img/macmillan-golf-challenge.jpg'

export type NewsImage = { src: string; alt: string }

export type NewsItem = {
  slug: string
  title: string
  /** ISO date (YYYY-MM-DD). */
  date: string
  /**
   * The team(s) the item belongs to. Use ['club'] for club-wide news that should
   * appear on the front page and on every team page. A single item can belong to
   * more than one team.
   */
  teams: TeamId[]
  excerpt: string
  /** Optional images. Two images render side by side inside the card. */
  images?: NewsImage[]
  /** Optional call-to-action link. */
  link?: { href: string; label: string; external?: boolean }
}

/**
 * Club and team news.
 *
 * To add news going forward: drop a new object at the top of this array, tag it
 * with the team(s) it belongs to, and it appears automatically — on the front
 * page (newest first, across all teams) and on each tagged team's page. No page
 * edits required.
 */
export const news: NewsItem[] = [
  {
    slug: 'as-team-pre-season-fixtures',
    title: "A's pre-season fixtures confirmed",
    date: '2026-07-31',
    teams: ['as'],
    excerpt:
      'Four warm-up friendlies for the A’s ahead of their 2026/27 league campaign, all kicking off 2pm at Patchway High: Hanham A (1 Aug), Stoke Lane Old Boys (8 Aug), Almondsbury A (15 Aug) and Stoke Gifford A (22 Aug). League fixtures and squad to follow.',
    link: { href: '/as-team', label: "See the A's" },
  },
  {
    slug: 'pre-season-2026-wrap',
    title: 'Pre-season done — First Team ready for the opener',
    date: '2026-07-29',
    teams: ['first-team'],
    excerpt:
      'That’s pre-season wrapped up. Six friendlies gave the squad valuable minutes ahead of the 2026/27 campaign: a 3-2 win over Boco at St Bede’s School to get going, then tough tests against Shire (1-3 at Mangotsfield), Oldland (0-2 away) and Old Sodbury (2-3 at Elm Park), with the Avonmouth game called off. The lads signed off in style with an emphatic 7-2 win away at Southmead. Two wins, plenty of lessons and everyone raring to go — the competitive season kicks off on Saturday 1 August at home to University of Bristol. #FATS #UTF',
    link: { href: '/#pre-season', label: 'See the pre-season results' },
  },
  {
    slug: 'fats-at-the-world-cup',
    title: 'Flying the flag at the World Cup',
    date: '2026-07-25',
    teams: ['first-team'],
    excerpt:
      'First Team Manager Kyle Thomas took the #FATS flag all the way to the World Cup — Filton Athletic flying proudly alongside the Three Lions on the game’s biggest stage. Full story and photos to come, so watch this space. #FATS #UTF',
    images: [
      {
        src: fatsWorldCupFlag,
        alt: 'The Filton Athletic #FATS supporters’ flag — a St George’s Cross with the England crest, the Filton Athletic FC crest and a “Lest We Forget” poppy — taken to the World Cup by First Team Manager Kyle Thomas.',
      },
    ],
  },
  {
    slug: 'ground-improvements-meeting',
    title: 'Thank you to local residents — ground improvements meeting',
    date: '2026-07-14',
    teams: ['club'],
    excerpt:
      'Thank you to everyone who came along to this week’s meeting with Filton Town Council about improving our ground. Since moving back to Elm Park in 2024, the Club and Council have worked in partnership on the pitch-wide barrier — and with the first team pushing up the leagues, any future promotion would mean facilities need to meet FA standards. Your feedback and ideas on the outline plans were greatly appreciated, and we’re proud to be working with the Council to support our club, our ground and our community.',
    images: [
      {
        src: councilMeetingPhoto,
        alt: 'Filton Athletic FC and Filton Town Council — thank you to local residents for coming along to the meeting about ground improvements.',
      },
      {
        src: councilGroundPlansPhoto,
        alt: 'Aerial view of BBS Park North, Elm Park, showing the outline plans for potential ground improvements.',
      },
    ],
  },
  {
    slug: 'macmillan-golf-2026',
    title: 'Macmillan Longest Day Golf Challenge — £1,750 raised',
    date: '2026-06-03',
    teams: ['club'],
    excerpt:
      'Congratulations to Oliver Keeble, Mark Woodrow and Matthew Price for completing the Macmillan Longest Day Golf Challenge on 3 June 2026, raising an amazing £1,750 so far for Macmillan Cancer Support.',
    images: [
      {
        src: macmillanGolfPhoto,
        alt: "Filton's Finest completed the Macmillan Longest Day Golf Challenge on 3rd June 2026, raising £1,750 so far for Macmillan Cancer Support.",
      },
    ],
    link: {
      href: 'https://longestdaygolf.macmillan.org.uk/Team/filtonsfinest',
      label: 'Donate to Filton’s Finest',
      external: true,
    },
  },
]

const byDateDesc = (a: NewsItem, b: NewsItem) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)

/** All news, newest first, optionally capped at `limit`. */
export function latestNews(limit?: number): NewsItem[] {
  const sorted = [...news].sort(byDateDesc)
  return limit ? sorted.slice(0, limit) : sorted
}

/**
 * News relevant to one team — the team's own items plus club-wide items — newest
 * first, optionally capped at `limit`.
 */
export function newsForTeam(teamId: TeamId, limit?: number): NewsItem[] {
  const items = news
    .filter((n) => n.teams.includes(teamId) || n.teams.includes('club'))
    .sort(byDateDesc)
  return limit ? items.slice(0, limit) : items
}

export function formatNewsDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
