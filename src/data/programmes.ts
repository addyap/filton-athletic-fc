import {
  firstTeamFixtures,
  firstTeamFixtures2025_26,
  leagueTable2025_26,
  type Fixture,
  type TableRow,
} from './club'

/**
 * Digital matchday programmes.
 *
 * Each HOME first-team fixture automatically becomes a programme at
 * /programme/<slug>. Most of the content (fixtures, league table, squad,
 * sponsors, ground info) is pulled live from ./club.ts, so it can never go
 * stale. On top of that, each match can carry a few hand-written extras below
 * (welcome, dugout notes, visitor profile, charity feature, team sheets).
 *
 * To add the bespoke content for a fixture, add an entry to `programmeExtras`
 * keyed by the fixture slug (slugified opponent name, e.g. 'ruardean-hill-rangers').
 * Everything is optional — omit a field and that section is simply skipped.
 */

export type ProgrammeExtras = {
  /** Sequential programme number, as printed on the cover ("No. 4"). */
  number?: number
  /** URL of the full printable programme PDF (hosted on Vercel Blob). */
  pdfUrl?: string
  /** Chairman's / club welcome for this specific game. */
  welcome?: { author: string; role: string; paragraphs: string[] }
  /** Manager's "From the Dugout" notes. */
  dugout?: { author: string; role: string; matchTitle?: string; paragraphs: string[] }
  /** Profile of the visiting club. */
  visitors?: { name: string; paragraphs: string[] }
  /** Featured charity / good cause. */
  charity?: { name: string; paragraphs: string[]; url?: string }
  /** Named match official. */
  matchOfficial?: string
  /** Team sheets as they appear on matchday. */
  teamSheets?: {
    home: TeamSheet
    away: TeamSheet
  }
}

export type TeamSheet = {
  team: string
  kit?: string
  staff?: string[]
  players: string[]
}

export type Programme = {
  slug: string
  fixture: Fixture
  isoDate: string
  /** e.g. "Saturday 27 September 2025" */
  longDate: string
  competitionName: string
  extras: ProgrammeExtras
}

/** Full competition names, keyed by the abbreviations used in the fixture list. */
const competitionNames: Record<string, string> = {
  GCL: 'Marcliff Gloucestershire County Football League',
  LJC: 'Les James League Cup',
  GFA: 'GFA Senior Amateur Cup',
  SEN: 'Bristol & Suburban Senior League',
  ABC: 'Alf Bosley Cup',
  BSP: 'Bristol & Suburban Premier Division',
  BSPC: 'Bristol & Suburban League Cup',
  BSD4: 'Bristol & Suburban League, Division Four',
}

export function competitionName(code: string): string {
  return competitionNames[code] ?? code
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Parse the fixture 'DD/MM/YY' date into a real Date. */
function parseFixtureDate(date: string): Date {
  const [dd, mm, yy] = date.split('/').map(Number)
  return new Date(2000 + yy, mm - 1, dd)
}

function isoDate(date: string): string {
  const d = parseFixtureDate(date)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

function longDate(date: string): string {
  return parseFixtureDate(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Hand-written extras per fixture. Keyed by slugified opponent name.
 * Add new matches here as their content is ready.
 */
const programmeExtras: Record<string, ProgrammeExtras> = {
  'ruardean-hill-rangers': {
    number: 4,
    pdfUrl:
      'https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%204%20-%2027.09.25.pdf',
    welcome: {
      author: 'Ollie Keeble',
      role: 'Chairman, Filton Athletic FC',
      paragraphs: [
        'After almost a month of away games we finally get to another game at home, and we are looking forward to seeing everyone cheer the lads on. In that time, we have advanced to the next round of the cup but have only picked up two points in the league. We do love a draw!!',
        'This weekend we welcome Ruardean Hill Rangers to BBS Park North @ Elm Park who currently sit in eleventh place in the league having only played three games so far. In those three games they have picked up four points with a win, a draw and a loss to their name so far this season. I am sure they will be hoping to double their wins tally against us this weekend.',
        'We currently sit in fourth place on nine points having picked up two wins and three draws so far. Last season the points were shared between the teams with each taking three points home in the away fixtures, so we are expecting a tough game this time around as well. A win this weekend would help us keep up with the top of the table teams and help with some teams around us having played a game less.',
        'Our next game is away and sees us travel up the M5 again to Quedgeley, but the rest of October sees us stay closer to home as in the league Hanham visit BBS Park North and we take the quick trip over to the Lawns to play Cribbs. The other clash in October sees us kick off our GFA cup campaign on the Downs to Saints Old Boys.',
        'We hope to see all the fans as well as all the Ruardean players and coaches back at the feast after the game for some food, some beer and a bit of a disco.',
      ],
    },
    dugout: {
      author: 'Kyle Thomas',
      role: 'First Team Manager',
      matchTitle: 'Filton Athletic vs Ruardean Hill Rangers',
      paragraphs: [
        'Firstly, welcome to the management, players, and supporters of Ruardean. It is the first time we have played a home fixture since the 30th of August, which was our abandoned game against Tiv Rocks.',
        'Six games into the season now and still undefeated. Five in the league and through to the next round in the cup. It has been a positive start given new management, new style of play and a new home ground. Lots to build and work on. Draws against Henbury, Broadwell and Tewkesbury in the league. Similar to last season, we need to start turning some of the draws into wins. Although after a really poor first half performance against Tewkesbury, we had a positive reaction second half and should have won the game in the end. Credit to Tewkesbury though, it will be a tough place to go for teams during the season.',
        'There is no easy game in the league this year. Unlike last season where you had the bottom two adrift, this year will be tough from the bottom to the top. Ruardean have had a mixed bag of results, beating Gifford away in the cup and four points from three games in the league. We lost 4-1 at home in the league last season where I thought they were clinical going forwards. I am expecting a tough physical game like last season, from an honest bunch who will work hard for each other. It would be great to finish September still unbeaten, but we need to be at it from the first whistle.',
      ],
    },
    visitors: {
      name: 'Ruardean Hill Rangers',
      paragraphs: [
        'Ruardean Hill Rangers play their football on the highest point in the Forest of Dean, 920 feet above sea level.',
        "Formed in 1919, Ruardean Hill played in the old Forest of Dean league until its termination in the late 1950's, where they moved into the North Gloucestershire League and have remained there in some capacity ever since.",
        "Ruardean Hill gained their first promotion to the Northern Senior League in 1994/95 and competed there for several seasons before being relegated in 2001. They immediately gained promotion the following year, only to be relegated again in 2004. In the 2011/12 season they gained a last-day promotion back to the senior league and also reached the final of the 'Amateur Cup'. The 2012/13 season brought the club its first promotion to the Northern Senior League Division 1 for back-to-back titles.",
        "The 'Hill' finished in the top eight for each of the next three seasons before finally winning the Division 1 title last season, scoring an incredible 125 goals and conceding just 34 in 35 games. Ruardean Hill's current first team has a good mixture of youth and experience.",
        "The club's promotions owe a lot to the depth of its other senior teams and the junior ranks. Ruardean Hill now field 3 senior teams and an Under 14's team who became Champions of their league and gained promotion to Division 1 of the Cheltenham Youth League last season with an undefeated season.",
        'The club are this season competing in their 9th season in the Marcliff County League and are hoping for a strong showing again this year having established themselves.',
      ],
    },
    charity: {
      name: 'The Ben Saunders Foundation',
      url: 'https://www.bensaundersfoundation.org/',
      paragraphs: [
        'The Ben Saunders Foundation (BSF) has been started to raise funds to support children and young adults with cancer within the UK.',
        'I (the founder) Ben Saunders was diagnosed with a rare form of cancer, a sarcoma attached to my heart, which I have been fighting since October 2019. It has spread into my lungs and I have faced many challenges along the way. These include two major open-heart surgeries and 6 rounds of very intense chemotherapy, which I am now currently back on!',
        'These are just some of the things I have experienced along my cancer journey, and I am looking to help and offer whatever I can alongside my family and the foundation to support young people with cancer like myself.',
        'I have been fortunate enough throughout my journey so far to have received the support I have, whether that be mentally, physically or a short holiday with friends recently to Center Parcs. I feel everyone in these circumstances deserves to be given as much support and happiness through the very difficult times they come across.',
      ],
    },
    matchOfficial: 'Matt Dyer',
    teamSheets: {
      home: {
        team: 'Filton Athletic',
        kit: 'Navy shirts, navy shorts, navy socks',
        staff: ['Kyle Thomas (Manager)', 'Josh Phillipps', 'Mike Slade'],
        players: [
          'Tom Bradley',
          'Chris Hillyer',
          'Jack Cole',
          'Jack Willmor',
          'Tom Fry',
          'Joe Mitchell',
          'Kieran Daniels',
          'Dan Matthews',
          'Callum Mitchell',
          'Liam Dorman',
          'Fraser Venables',
          'Yusuf Abdulrahman',
          'Charlie Peacock',
          'Matt Tovey',
          'Fabien Pereira',
          'Dylan Quick',
          'Dan Payne',
          'Trey Merrett',
          'Said Hassan',
          'Kieran Cooper',
        ],
      },
      away: {
        team: 'Ruardean Hill Rangers',
        kit: 'Light blue shirts, navy shorts, navy socks',
        staff: ['Bobby Walding (Manager)', 'Luke Brown'],
        players: [
          'Aaron Underwood',
          'Steve Bowles',
          'Bobby Walding',
          'Jack Meek',
          'Ricky Tingle',
          'Blaine Smith',
          'Dan Bowles',
          'Isaac Hunter',
          'Dan Matthews',
          'Ryan Smith',
          'Mitch Griffin',
          'Stuart Cornwell-Boote',
          'Dan Mason',
          'Steve Coombs',
          'Charley Mason',
          'Luke Brown',
          'Ben Ball',
          'Kane Fellows',
          'Luke Johnson',
          'Shaun Tingle',
        ],
      },
    },
  },
}

/** All 2025/26 home first-team fixtures, each turned into an archived programme, in date order. */
export const programmes: Programme[] = firstTeamFixtures2025_26
  .filter((f) => f.venue === 'H')
  .map((fixture) => {
    const base = slugify(fixture.opponent)
    return {
      slug: base,
      fixture,
      isoDate: isoDate(fixture.date),
      longDate: longDate(fixture.date),
      competitionName: competitionName(fixture.competition),
      extras: programmeExtras[base] ?? {},
    }
  })

// Guard against two home games against the same opponent colliding on a slug.
const seen = new Map<string, number>()
for (const p of programmes) {
  const count = seen.get(p.slug) ?? 0
  if (count > 0) p.slug = `${p.slug}-${p.isoDate}`
  seen.set(p.slug, count + 1)
}

export function getProgramme(slug: string | undefined): Programme | undefined {
  return programmes.find((p) => p.slug === slug)
}

/** The next home game still to be played (no result recorded), else the last one. */
export function nextProgramme(): Programme | undefined {
  return programmes.find((p) => !p.fixture.result) ?? programmes[programmes.length - 1]
}

function normaliseTeam(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(reserves|development|first|1st|2nd|saturday|res)\b/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Find a 2025/26 league-table row for a fixture opponent, tolerating naming differences. */
export function findTableRow(team: string): TableRow | undefined {
  const target = normaliseTeam(team)
  return leagueTable2025_26.find((r) => {
    const t = normaliseTeam(r.team)
    return t === target || t.startsWith(target) || target.startsWith(t)
  })
}

export const filtonTableRow = findTableRow('Filton Athletic')

/** Last `count` completed 2025/26 first-team results before `beforeIso`, oldest → newest. */
export function formBefore(beforeIso: string, count = 5): Array<'W' | 'D' | 'L'> {
  return firstTeamFixtures2025_26
    .filter((f) => f.result && /^[WDL]/.test(f.result) && isoDate(f.date) < beforeIso)
    .sort((a, b) => isoDate(a.date).localeCompare(isoDate(b.date)))
    .slice(-count)
    .map((f) => f.result![0] as 'W' | 'D' | 'L')
}

/** The reverse (away) 2025/26 fixture against the same opponent, if any. */
export function reverseFixtureFor(opponent: string): Fixture | undefined {
  return firstTeamFixtures2025_26.find((f) => f.opponent === opponent && f.venue === 'A')
}

/** The next first-team fixture still to be played (no result recorded yet). */
export const nextFirstTeamFixture: Fixture | undefined = firstTeamFixtures.find(
  (f) => !f.result,
)

/** The most recent completed first-team result (win, draw or loss). */
export const lastFirstTeamResult: Fixture | undefined = [...firstTeamFixtures]
  .reverse()
  .find((f) => f.result != null && /^[WDL]/.test(f.result))

/** The home programme that belongs to a given fixture, if it is a home game. */
export function programmeForFixture(fixture: Fixture): Programme | undefined {
  return programmes.find((p) => p.fixture === fixture)
}

/** Long human date (e.g. "Saturday 27 September 2025") for any fixture date. */
export function fixtureLongDate(date: string): string {
  return longDate(date)
}
