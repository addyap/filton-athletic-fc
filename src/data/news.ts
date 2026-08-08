import type { TeamId } from './teams'
import fatsWorldCupFlag from '../assets/img/fats-world-cup-flag.png'
import councilMeetingPhoto from '../assets/img/council-meeting-ground-improvements.jpg'
import councilGroundPlansPhoto from '../assets/img/filton-council-ground-plans.jpg'
import macmillanGolfPhoto from '../assets/img/macmillan-golf-challenge.jpg'
import matchdayUniversityOfBristolPhoto from '../assets/img/matchday-university-of-bristol.jpg'
import thankYouSouthmeadPhoto from '../assets/img/thank-you-southmead-ben.jpg'
import matchdayAfcMangotsfieldRocksPhoto from '../assets/img/matchday-afc-mangotsfield-rocks.jpg'

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
    slug: 'first-team-result-afc-mangotsfield-rocks',
    title: 'First point on the board — 2-2 away at AFC Mangotsfield Rocks',
    date: '2026-08-08',
    teams: ['first-team'],
    excerpt:
      'A hard-fought 2-2 draw at Cossham Street gives the Firsts their first point of the 2026/27 Marcliff Gloucestershire County League season. Goals for Filton from Taylor Anderson and Yusuf Abdulrahman. Next up: Stoke Gifford SGS United at home on Wednesday 12 August, 6.30pm. #FATS #UTF',
    link: { href: '/table', label: 'See the league table' },
  },
  {
    slug: 'as-team-matchday-stoke-lane',
    title: "Matchday — Filton A face Stoke Lane in their second pre-season friendly",
    date: '2026-08-07',
    teams: ['as'],
    excerpt:
      'The A’s are back in action for their second pre-season friendly, at home to Stoke Lane Old Boys. Saturday 8 August, 2pm kick-off at Patchway High School, BS32 4AJ. Come down and support the lads. 🔵⚪️ #FATS #UTF',
    link: { href: '/as-team', label: "See the A's fixtures" },
  },
  {
    slug: 'thank-you-southmead-ben-fundraiser',
    title: 'A heartfelt thank you from Southmead FC — £1,170 raised for Ben and his family',
    date: '2026-08-06',
    teams: ['club'],
    excerpt:
      'Following our pre-season friendly against Southmead FC, Filton organised a collection for Ben and his family — raising an incredible £1,170 through cash and card donations on the day. Every penny was handed to Southmead FC in cash, safely banked, and added to Ben’s GoFundMe page. Southmead have sent us a heartfelt thank you in return, quoting a line that says it all: “Football has no colours.” Thank you to every player, volunteer and supporter who gave so generously — a real credit to this club. #FATS #UTF',
    images: [
      {
        src: thankYouSouthmeadPhoto,
        alt: 'Thank you to Filton Athletic FC from Southmead Football Club — £1,170 raised on behalf of Ben and his family. "Football has no colours."',
      },
    ],
    link: { href: '/#pre-season', label: 'See the Southmead friendly' },
  },
  {
    slug: 'matchday-afc-mangotsfield-rocks',
    title: "Away day details — First Team travel to AFC Mangotsfield Rocks",
    date: '2026-08-06',
    teams: ['first-team'],
    excerpt:
      'The First Team are on the road this Saturday 8 August for the second game of the Marcliff Gloucestershire County League season. Gates 1pm, kick-off 3pm at Cossham Street, Mangotsfield, BS16 9EN. Food & drink available. Admission: Adults £3. Come and support the lads.',
    images: [
      {
        src: matchdayAfcMangotsfieldRocksPhoto,
        alt: 'Filton Athletic FC Matchday graphic — AFC Mangotsfield Rocks vs Filton Athletic, this Saturday, Cossham Street, Mangotsfield, BS16 9EN, kick-off 3pm.',
      },
    ],
    link: { href: '/#matchday', label: 'See matchday details' },
  },
  {
    slug: 'reserves-result-avonmouth',
    title: 'Reserves open pre-season with a 2-2 draw at Avonmouth',
    date: '2026-08-06',
    teams: ['reserves'],
    excerpt:
      'A really good first run out for the Reserves last night, and a chance to blow off the cobwebs. A very competitive game against a tough side — thanks for the fixture and for hosting us, Avonmouth Football Club. Goals for Filton from Harry Garrett and a debut goal for Reece Evans.',
    link: { href: '/reserves', label: 'See the Reserves' },
  },
  {
    slug: 'first-team-result-university-of-bristol',
    title: 'Opening day ends in disappointment for the Firsts',
    date: '2026-08-01',
    teams: ['first-team'],
    excerpt:
      'Narrowly beaten 2-1 by newcomers University of Bristol on the opening day of the 2026/27 Marcliff Gloucestershire County League season. Filton’s goal came from Chris Hillyer. #FATS #UTF',
    link: { href: '/programme/university-of-bristol', label: 'Read the matchday programme' },
  },
  {
    slug: 'as-team-result-hanham',
    title: 'Good first run out for Filton A side against a very good Hanham Athletic A team',
    date: '2026-08-01',
    teams: ['as'],
    excerpt:
      'The A’s went down 6-2 in their opening pre-season friendly against a strong Hanham Athletic A side at Patchway High — some vital minutes in the legs for the lads going forward, and thanks to Hanham for the fixture and all the best for their season.',
    link: { href: '/as-team', label: "See the A's" },
  },
  {
    slug: 'season-opener-university-of-bristol',
    title: 'Season opener this Saturday — Filton Athletic vs University of Bristol',
    date: '2026-07-31',
    teams: ['first-team'],
    excerpt:
      'It’s matchday. The First Team kicks off the 2026/27 Marcliff Gloucestershire County League campaign at home to University of Bristol, Saturday 1 August, 3pm at Elm Park (BBS Park North, BS34 7PS). Come along and support the FATS — one club, one community, one family.',
    images: [
      {
        src: matchdayUniversityOfBristolPhoto,
        alt: 'Filton Athletic FC Season Opener matchday graphic — Filton Athletic vs University of Bristol, Saturday 1 August, kick-off 3pm at Elm Park, BS34 7PS.',
      },
    ],
    link: { href: '/programme/university-of-bristol', label: 'Read the matchday programme' },
  },
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
