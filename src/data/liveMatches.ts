import type { TeamId } from './teams'

/**
 * Match Centre — today's live scoreline(s).
 *
 * There's no static data here any more: scores are entered at /match-centre/update
 * (PIN-gated, meant to be usable by anyone at the ground) and stored via
 * api/live-matches.ts in Vercel Blob, so an update from pitchside shows up on
 * the public page within seconds — no commit, no redeploy. This file just
 * holds the shared shape both pages agree on, and the fetch helper.
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

export function hasLiveActivity(matches: LiveMatch[]): boolean {
  return matches.some((m) => m.status === 'live' || m.status === 'ht')
}

/** GET the current live matches from the API. Never throws — a network hiccup
 *  or an empty store both just mean "nothing to show". */
export async function fetchLiveMatches(): Promise<LiveMatch[]> {
  try {
    const res = await fetch('/api/live-matches', { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}
