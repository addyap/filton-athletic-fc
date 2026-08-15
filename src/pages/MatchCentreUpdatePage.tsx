import { useEffect, useState } from 'react'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { fetchLiveMatches, type LiveMatch, type LiveMatchStatus } from '../data/liveMatches'
import { teams } from '../data/teams'

const PIN_STORAGE_KEY = 'fats-match-centre-pin'

const statusOptions: { value: LiveMatchStatus; label: string }[] = [
  { value: 'scheduled', label: 'Not started yet' },
  { value: 'live', label: 'Live' },
  { value: 'ht', label: 'Half-time' },
  { value: 'ft', label: 'Full-time' },
  { value: 'postponed', label: 'Postponed' },
]

/** A draft row keeps a stable client-side key so React doesn't lose focus
 *  mid-edit; the key never leaves this page. */
type Draft = LiveMatch & { _key: string }

function blankDraft(): Draft {
  return {
    _key: crypto.randomUUID(),
    team: 'first-team',
    opponent: '',
    venue: 'H',
    competition: '',
    kickOff: '15:00',
    status: 'scheduled',
    lastUpdated: '',
  }
}

function nowHHMM(): string {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

function PinGate({ onUnlock }: { onUnlock: (pin: string) => void }) {
  const [pin, setPin] = useState('')

  return (
    <section className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
      <h2 className="text-xl font-bold text-[#0b2d52]">Enter the update PIN</h2>
      <p className="mt-2 text-sm text-slate-600">Ask Antony if you don&rsquo;t have it.</p>
      <form
        className="mt-5 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault()
          if (pin.trim()) onUnlock(pin.trim())
        }}
      >
        <input
          type="tel"
          inputMode="numeric"
          autoFocus
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="PIN"
          className="rounded-lg border border-slate-300 px-4 py-3 text-center text-lg tracking-widest"
        />
        <button
          type="submit"
          className="rounded-full bg-[#0b2d52] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123a68]"
        >
          Unlock
        </button>
      </form>
    </section>
  )
}

function MatchCentreUpdatePage() {
  const [pin, setPin] = useState<string | null>(null)
  const [drafts, setDrafts] = useState<Draft[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null)

  useEffect(() => {
    document.title = 'Match Centre — Update'
    const stored = window.sessionStorage.getItem(PIN_STORAGE_KEY)
    if (stored) setPin(stored)
  }, [])

  useEffect(() => {
    if (!pin) return
    let cancelled = false
    fetchLiveMatches().then((data) => {
      if (cancelled) return
      setDrafts(data.map((m) => ({ ...m, _key: crypto.randomUUID() })))
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [pin])

  function updateDraft(key: string, patch: Partial<Draft>) {
    setDrafts((prev) => prev.map((d) => (d._key === key ? { ...d, ...patch } : d)))
  }

  function removeDraft(key: string) {
    setDrafts((prev) => prev.filter((d) => d._key !== key))
  }

  async function save(next: Draft[]) {
    if (!pin) return
    setSaving(true)
    setMessage(null)
    const stamped = next.map((d) => ({ ...d, lastUpdated: nowHHMM() }))
    const payload = stamped.map(({ _key, ...m }) => m)
    try {
      const res = await fetch('/api/live-matches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-pin': pin },
        body: JSON.stringify(payload),
      })
      if (res.status === 401) {
        window.sessionStorage.removeItem(PIN_STORAGE_KEY)
        setPin(null)
        setMessage({ kind: 'error', text: 'Wrong PIN — try again.' })
        return
      }
      if (!res.ok) {
        setMessage({ kind: 'error', text: 'Save failed — check your connection and try again.' })
        return
      }
      setDrafts(stamped)
      setMessage({ kind: 'ok', text: 'Saved — live on the site now.' })
    } catch {
      setMessage({ kind: 'error', text: 'Save failed — check your connection and try again.' })
    } finally {
      setSaving(false)
    }
  }

  if (!pin) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <PinGate
            onUnlock={(entered) => {
              window.sessionStorage.setItem(PIN_STORAGE_KEY, entered)
              setPin(entered)
              setLoading(true)
            }}
          />
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <h1 className="text-2xl font-bold sm:text-3xl">Match Centre — Update</h1>
          <p className="mt-2 text-sm text-slate-100">
            Changes go live on <span className="font-semibold">/match-centre</span> within seconds of saving.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {loading ? (
          <p className="text-center text-sm text-slate-400">Loading&hellip;</p>
        ) : (
          <>
            {message && (
              <p
                className={`mb-6 rounded-lg px-4 py-3 text-sm font-medium ${
                  message.kind === 'ok' ? 'bg-[#e2f2e6] text-[#1d6038]' : 'bg-red-100 text-red-800'
                }`}
              >
                {message.text}
              </p>
            )}

            <div className="flex flex-col gap-6">
              {drafts.map((d) => (
                <div key={d._key} className="rounded-2xl border border-slate-200 p-5">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <label className="col-span-2 flex flex-col gap-1 text-xs font-semibold text-slate-500 sm:col-span-1">
                      Team
                      <select
                        value={d.team}
                        onChange={(e) => updateDraft(d._key, { team: e.target.value as Draft['team'] })}
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      >
                        {teams.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="col-span-2 flex flex-col gap-1 text-xs font-semibold text-slate-500 sm:col-span-1">
                      Venue
                      <select
                        value={d.venue}
                        onChange={(e) => updateDraft(d._key, { venue: e.target.value as 'H' | 'A' })}
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      >
                        <option value="H">Home</option>
                        <option value="A">Away</option>
                      </select>
                    </label>
                    <label className="col-span-2 flex flex-col gap-1 text-xs font-semibold text-slate-500 sm:col-span-2">
                      Opponent
                      <input
                        value={d.opponent}
                        onChange={(e) => updateDraft(d._key, { opponent: e.target.value })}
                        placeholder="e.g. Tewkesbury Town"
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      />
                    </label>

                    <label className="col-span-1 flex flex-col gap-1 text-xs font-semibold text-slate-500">
                      Competition
                      <input
                        value={d.competition}
                        onChange={(e) => updateDraft(d._key, { competition: e.target.value })}
                        placeholder="GCL"
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      />
                    </label>
                    <label className="col-span-1 flex flex-col gap-1 text-xs font-semibold text-slate-500">
                      Kick-off
                      <input
                        type="time"
                        value={d.kickOff}
                        onChange={(e) => updateDraft(d._key, { kickOff: e.target.value })}
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      />
                    </label>
                    <label className="col-span-2 flex flex-col gap-1 text-xs font-semibold text-slate-500">
                      Status
                      <select
                        value={d.status}
                        onChange={(e) => updateDraft(d._key, { status: e.target.value as LiveMatchStatus })}
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      >
                        {statusOptions.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="col-span-1 flex flex-col gap-1 text-xs font-semibold text-slate-500">
                      Home score
                      <input
                        type="number"
                        min={0}
                        value={d.homeScore ?? ''}
                        onChange={(e) =>
                          updateDraft(d._key, { homeScore: e.target.value === '' ? undefined : Number(e.target.value) })
                        }
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      />
                    </label>
                    <label className="col-span-1 flex flex-col gap-1 text-xs font-semibold text-slate-500">
                      Away score
                      <input
                        type="number"
                        min={0}
                        value={d.awayScore ?? ''}
                        onChange={(e) =>
                          updateDraft(d._key, { awayScore: e.target.value === '' ? undefined : Number(e.target.value) })
                        }
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      />
                    </label>
                    <label className="col-span-2 flex flex-col gap-1 text-xs font-semibold text-slate-500">
                      Note (optional)
                      <input
                        value={d.note ?? ''}
                        onChange={(e) => updateDraft(d._key, { note: e.target.value || undefined })}
                        placeholder="e.g. 45' Anderson"
                        className="rounded-lg border border-slate-300 px-2 py-2 text-sm"
                      />
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeDraft(d._key)}
                    className="mt-4 text-xs font-semibold text-red-700 underline"
                  >
                    Remove this match
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setDrafts((prev) => [...prev, blankDraft()])}
              className="mt-6 w-full rounded-full border border-dashed border-slate-300 px-5 py-3 text-sm font-semibold text-slate-500 transition hover:border-[#0b2d52] hover:text-[#0b2d52]"
            >
              + Add a match
            </button>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                disabled={saving}
                onClick={() => save(drafts)}
                className="flex-1 rounded-full bg-[#0b2d52] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123a68] disabled:opacity-50"
              >
                {saving ? 'Saving…' : 'Save changes'}
              </button>
              {drafts.length > 0 && (
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => {
                    if (window.confirm("Clear every match? Only do this once today's games are all over.")) {
                      setDrafts([])
                      save([])
                    }
                  }}
                  className="rounded-full border border-red-300 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-50"
                >
                  Clear all (day finished)
                </button>
              )}
            </div>
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}

export default MatchCentreUpdatePage
