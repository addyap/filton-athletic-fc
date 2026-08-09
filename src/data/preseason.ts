/**
 * First-team pre-season preparation fixtures.
 *
 * These are friendlies, kept separate from the league fixture list so they
 * never affect the league table or the "next match" logic. Dates are taken
 * from the club's July 2026 pre-season calendar; results and scorers from the
 * management team.
 *
 * `result` is written from Filton's perspective ("W 3-2", "L 1-3"). Set
 * `cancelled: true` for a called-off game and leave `result` undefined.
 */

export type PreSeasonFixture = {
  /** Human date label, e.g. "Wed 1 Jul". */
  label: string
  /** ISO date for correct chronological sorting. */
  iso: string
  opponent: string
  venue: 'H' | 'A' | 'N'
  /** Extra venue note, e.g. "Patchway 4G" or "Venue TBC". */
  venueNote?: string
  result?: string
  scorers?: string
  cancelled?: boolean
}

export const preSeason2026: PreSeasonFixture[] = [
  {
    label: 'Wed 1 Jul',
    iso: '2026-07-01',
    opponent: 'Boco',
    venue: 'H',
    venueNote: "St Bede's School",
    result: 'W 3-2',
    scorers: 'M Hoare, F Venables 2',
  },
  {
    label: 'Wed 15 Jul',
    iso: '2026-07-15',
    opponent: 'Shire',
    venue: 'A',
    venueNote: 'Mangotsfield',
    result: 'L 1-3',
    scorers: 'T Merrett',
  },
  {
    label: 'Sat 18 Jul',
    iso: '2026-07-18',
    opponent: 'Oldland',
    venue: 'A',
    result: 'L 0-2',
  },
  {
    label: 'Tue 21 Jul',
    iso: '2026-07-21',
    opponent: 'Avonmouth',
    venue: 'A',
    cancelled: true,
  },
  {
    label: 'Sat 25 Jul',
    iso: '2026-07-25',
    opponent: 'Old Sodbury',
    venue: 'H',
    venueNote: 'Elm Park, BS34 7PS',
    result: 'L 2-3',
    scorers: 'Moustaffa',
  },
  {
    label: 'Tue 28 Jul',
    iso: '2026-07-28',
    opponent: 'Southmead',
    venue: 'H',
    venueNote: 'Elm Park, BS34 7PS',
    result: 'W 7-2',
    scorers: 'T Anderson, K Thomas, M Hoare, S Hassan 2, Raf, C Peacock',
  },
]

/**
 * 'A' team pre-season friendlies, building up to their 2026/27 league
 * campaign. All kick off at 2pm at Patchway High School, BS32 4AJ.
 */
export const aTeamPreSeason2026: PreSeasonFixture[] = [
  {
    label: 'Sat 1 Aug',
    iso: '2026-08-01',
    opponent: 'Hanham A',
    venue: 'H',
    venueNote: 'Patchway High, BS32 4AJ',
    result: 'L 2-6',
  },
  {
    label: 'Sat 8 Aug',
    iso: '2026-08-08',
    opponent: 'Stoke Lane Old Boys',
    venue: 'H',
    venueNote: 'Patchway High, BS32 4AJ',
    result: 'D 2-2',
    scorers: 'O Keeble, T Johnston',
  },
  {
    label: 'Sat 15 Aug',
    iso: '2026-08-15',
    opponent: 'Almondsbury A',
    venue: 'H',
    venueNote: 'Patchway High, BS32 4AJ',
  },
  {
    label: 'Sat 22 Aug',
    iso: '2026-08-22',
    opponent: 'Stoke Gifford A',
    venue: 'H',
    venueNote: 'Patchway High, BS32 4AJ',
  },
]

/**
 * Reserve team pre-season friendlies, building up to their 2026/27 league
 * campaign.
 */
export const reserveTeamPreSeason2026: PreSeasonFixture[] = [
  {
    label: 'Wed 5 Aug',
    iso: '2026-08-05',
    opponent: 'Avonmouth Res',
    venue: 'A',
    venueNote: 'Avonmouth Football Club',
    result: 'D 2-2',
    scorers: 'H Garrett, R Evans',
  },
  {
    label: 'Sat 8 Aug',
    iso: '2026-08-08',
    opponent: 'Redfield Rovers',
    venue: 'A',
    cancelled: true,
  },
  {
    label: 'Wed 12 Aug',
    iso: '2026-08-12',
    opponent: 'Southmead',
    venue: 'N',
    venueNote: 'Elm Park / Jarratts Road – TBC',
  },
  {
    label: 'Sat 15 Aug',
    iso: '2026-08-15',
    opponent: 'Lawrence Weston',
    venue: 'A',
    venueNote: 'Kingsweston Lane',
  },
  {
    label: 'Sat 22 Aug',
    iso: '2026-08-22',
    opponent: 'Boco Res',
    venue: 'A',
    venueNote: 'AEK Boco, Greenbank Road',
  },
  {
    label: 'Wed 26 Aug',
    iso: '2026-08-26',
    opponent: 'Longwell Green Res',
    venue: 'A',
    venueNote: 'Longwell Green FC',
  },
]

/** Played/won/lost summary, excluding cancelled games. */
export function preSeasonRecord(fixtures: PreSeasonFixture[]) {
  const played = fixtures.filter((f) => f.result && /^[WDL]/.test(f.result))
  const won = played.filter((f) => f.result!.startsWith('W')).length
  const drawn = played.filter((f) => f.result!.startsWith('D')).length
  const lost = played.filter((f) => f.result!.startsWith('L')).length
  const cancelled = fixtures.filter((f) => f.cancelled).length
  return { played: played.length, won, drawn, lost, cancelled }
}
