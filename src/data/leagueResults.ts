/**
 * League-wide results — every game in the Marcliff Gloucestershire County
 * Football League (Division 1), not just Filton's, with goalscorers. Sourced
 * from FA Full-Time. Add the newest round at the top of the array.
 */

export type LeagueMatch = {
  home: string
  away: string
  homeScore: number
  awayScore: number
  homeScorers?: string
  awayScorers?: string
}

export type LeagueRound = {
  label: string
  /** ISO date of the round, for ordering. */
  iso: string
  matches: LeagueMatch[]
}

export const leagueResults2026_27: LeagueRound[] = [
  {
    label: 'Matchday 2',
    iso: '2026-08-08',
    matches: [
      {
        home: 'AFC Mangotsfield Rocks',
        away: 'Filton Athletic',
        homeScore: 2,
        awayScore: 2,
        homeScorers: 'R Smith, T Waterman',
        awayScorers: 'T Anderson, Y Abdulrahman',
      },
      {
        home: 'Bishops Cleeve Development',
        away: 'Tewkesbury Town',
        homeScore: 0,
        awayScore: 1,
        awayScorers: 'J Goodwin',
      },
      {
        home: 'Frampton United',
        away: 'Totterdown United',
        homeScore: 2,
        awayScore: 1,
        homeScorers: 'F Porter, H Bain',
        awayScorers: 'T Carter',
      },
      {
        home: 'Longlevens Reserves',
        away: 'Broadwell Amateurs',
        homeScore: 0,
        awayScore: 2,
        awayScorers: 'B Fishwick (2)',
      },
      {
        home: 'Quedgeley Wanderers',
        away: 'Ruardean Hill Rangers',
        homeScore: 7,
        awayScore: 0,
        homeScorers: 'M Cornwall (3), F Jenner, H Reynolds, H Miles, R Stokes',
      },
      {
        home: 'Stoke Gifford SGS United',
        away: 'University of Bristol',
        homeScore: 3,
        awayScore: 2,
        homeScorers: 'J Smith, D Manley, H Cole',
        awayScorers: 'J Pool, F Deche',
      },
      {
        home: 'Wick',
        away: 'Chalford',
        homeScore: 0,
        awayScore: 0,
      },
    ],
  },
  {
    label: 'Matchday 1',
    iso: '2026-08-01',
    matches: [
      {
        home: 'AFC Mangotsfield Rocks',
        away: 'Bishops Cleeve Development',
        homeScore: 0,
        awayScore: 2,
        awayScorers: 'M New, H Davis',
      },
      {
        home: 'Filton Athletic',
        away: 'University of Bristol',
        homeScore: 1,
        awayScore: 2,
        homeScorers: 'C Hillyer',
        awayScorers: 'M Whilby, C Goon',
      },
      {
        home: 'Frampton United',
        away: 'Wick',
        homeScore: 1,
        awayScore: 1,
        homeScorers: 'K Bulley',
        awayScorers: 'E Clarke',
      },
      {
        home: 'Quedgeley Wanderers',
        away: 'Longlevens Reserves',
        homeScore: 2,
        awayScore: 2,
        homeScorers: 'H Miles, R Stokes',
        awayScorers: 'B Martin, F Rankin',
      },
      {
        home: 'Stoke Gifford SGS United',
        away: 'Chalford',
        homeScore: 0,
        awayScore: 0,
      },
      {
        home: 'Totterdown United',
        away: 'Henbury & Rockleaze',
        homeScore: 0,
        awayScore: 1,
        awayScorers: 'K Mannings',
      },
    ],
  },
]
