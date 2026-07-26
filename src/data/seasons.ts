import type { Fixture, ReserveFixture, TableRow, Squaddie } from './club'
import {
  firstTeamFixtures2023_24,
  leagueTable2023_24,
  firstTeamFixtures2024_25,
  leagueTable2024_25,
  reserveFixtures2024_25,
  reserveTable2024_25,
  firstTeamFixtures2025_26,
  leagueTable2025_26,
  reserveFixtures2025_26,
  reserveTable2025_26,
  squad2025_26,
} from './club'
import { playerPhotos2025_26 } from './playerPhotos'

export type SeasonArchive = {
  slug: string
  label: string
  standing: string
  table: TableRow[]
  fixtures: Fixture[]
  squad?: Squaddie[]
  playerPhotos?: Record<string, string>
  reserveStanding?: string
  reserveTable?: TableRow[]
  reserveFixtures?: ReserveFixture[]
}

/** All archived seasons, most recent first. Add a new entry here once a season is fully archived. */
export const seasons: SeasonArchive[] = [
  {
    slug: '2025-26',
    label: '2025/26',
    standing: 'First team finished 2nd in the Marcliff Gloucestershire County Football League.',
    table: leagueTable2025_26,
    fixtures: firstTeamFixtures2025_26,
    squad: squad2025_26,
    playerPhotos: playerPhotos2025_26,
    reserveStanding: 'Reserves finished 3rd in the Bristol & Suburban League, Senior division.',
    reserveTable: reserveTable2025_26,
    reserveFixtures: reserveFixtures2025_26,
  },
  {
    slug: '2024-25',
    label: '2024/25',
    standing: 'First team finished 6th in the Marcliff Gloucestershire County Football League, Division 1.',
    table: leagueTable2024_25,
    fixtures: firstTeamFixtures2024_25,
    reserveStanding: 'Reserves finished 4th in the Bristol & Suburban League, Division Four.',
    reserveTable: reserveTable2024_25,
    reserveFixtures: reserveFixtures2024_25,
  },
  {
    slug: '2023-24',
    label: '2023/24',
    standing: 'First team finished 1st, Champions of the Bristol & Suburban Premier Division — promoted to the Gloucestershire County League.',
    table: leagueTable2023_24,
    fixtures: firstTeamFixtures2023_24,
  },
]

export function findSeason(slug: string | undefined): SeasonArchive | undefined {
  return seasons.find((s) => s.slug === slug)
}
