import type { TeamId } from './teams'

/**
 * Match Centre — today's live scoreline(s), updated by hand on matchday.
 *
 * There's no live data feed: on a matchday morning add an entry here for each
 * fixture, flip `status` to 'live' at kick-off, keep the score current as it
 * happens, then 'ft' at the final whistle. Commit + push each update — the
 * site redeploys in about a minute, and the Match Centre page auto-refreshes
 * itself while a match is live/at half-time so supporters watching don't have
 * to reload by hand.
 *
 * Once all of the day's games are full-time and written up as news, clear
 * this back to an empty array. It only ever holds *today's* matches — there's
 * no history here, that's what the fixtures/results pages are for.
 */

export type LiveMatchStatus = 'scheduled' | 'live' | 'ht' | 'ft' | 'postponed'

export type LiveMatch = {
  team: TeamId
  opponent: string
  venue: 'H' | 'A'
  ground?: string
  competition: string
  /** Kick-off time, e.g. "15:00". */
  kickOff: string
  status: LiveMatchStatus
  homeScore?: number
  awayScore?: number
  /** Short free-text note, e.g. "45' Anderson" or "Postponed — waterlogged pitch". */
  note?: string
  /** "HH:MM" — shown as "Updated 15:42". Bump this on every edit. */
  lastUpdated: string
}

export const liveMatches: LiveMatch[] = []

export function hasLiveActivity(matches: LiveMatch[] = liveMatches): boolean {
  return matches.some((m) => m.status === 'live' || m.status === 'ht')
}
