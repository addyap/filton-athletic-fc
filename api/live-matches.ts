import type { VercelRequest, VercelResponse } from '@vercel/node'
import { put } from '@vercel/blob'

/**
 * Deliberately not imported from src/data/liveMatches.ts: that file is
 * compiled under the app's bundler-mode tsconfig, this one under a plain
 * Node/nodenext tsconfig, and mixing the two via a cross-project import
 * makes tsc apply the wrong extension-resolution rules to whichever file
 * is checked second. Kept in sync by hand — the shape is small and stable.
 */
type LiveMatchStatus = 'scheduled' | 'live' | 'ht' | 'ft' | 'postponed'

type LiveMatch = {
  team: string
  opponent: string
  venue: 'H' | 'A'
  ground?: string
  competition: string
  kickOff: string
  status: LiveMatchStatus
  homeScore?: number
  awayScore?: number
  note?: string
  lastUpdated: string
}

/**
 * Backs the Match Centre's live scorelines. There's no database — the
 * current state is a single JSON blob in Vercel Blob storage (the same
 * store the club's PDF programmes live in), overwritten wholesale on every
 * update rather than patched, since at most one or two people ever edit
 * this at once.
 *
 * GET is public (the Match Centre page polls it). POST requires the shared
 * PIN (MATCH_CENTRE_PIN, set on Vercel) in an `x-pin` header — that's the
 * only gate: anyone at the ground with the PIN can update scores from
 * /match-centre/update, deliberately, since it's meant to be usable by a
 * volunteer on their phone, not just Antony.
 */

const PATHNAME = 'match-centre/live-matches.json'
const BLOB_BASE = 'https://3p4oewzml4cd0fez.public.blob.vercel-storage.com'

const STATUSES: LiveMatchStatus[] = ['scheduled', 'live', 'ht', 'ft', 'postponed']

function isValidMatch(value: unknown): value is LiveMatch {
  if (typeof value !== 'object' || value === null) return false
  const m = value as Record<string, unknown>
  return (
    typeof m.team === 'string' &&
    typeof m.opponent === 'string' &&
    (m.venue === 'H' || m.venue === 'A') &&
    typeof m.competition === 'string' &&
    typeof m.kickOff === 'string' &&
    typeof STATUSES.find((s) => s === m.status) === 'string' &&
    (m.homeScore === undefined || typeof m.homeScore === 'number') &&
    (m.awayScore === undefined || typeof m.awayScore === 'number') &&
    (m.ground === undefined || typeof m.ground === 'string') &&
    (m.note === undefined || typeof m.note === 'string') &&
    typeof m.lastUpdated === 'string'
  )
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method === 'GET') {
    const upstream = await fetch(`${BLOB_BASE}/${PATHNAME}?t=${Date.now()}`, { cache: 'no-store' })
    if (!upstream.ok) {
      res.status(200).json([])
      return
    }
    const data = await upstream.json()
    res.status(200).json(Array.isArray(data) ? data : [])
    return
  }

  if (req.method === 'POST') {
    const pin = req.headers['x-pin']
    if (!process.env.MATCH_CENTRE_PIN || pin !== process.env.MATCH_CENTRE_PIN) {
      res.status(401).json({ error: 'Wrong PIN' })
      return
    }

    const matches: unknown = req.body
    if (!Array.isArray(matches) || !matches.every(isValidMatch)) {
      res.status(400).json({ error: 'Expected an array of matches with the right shape' })
      return
    }

    await put(PATHNAME, JSON.stringify(matches), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
      cacheControlMaxAge: 0,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })

    res.status(200).json(matches)
    return
  }

  res.status(405).json({ error: 'Method not allowed' })
}
