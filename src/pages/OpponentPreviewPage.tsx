import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import crest from '../assets/img/filton-athletic-crest-transparent.webp'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { SectionIcon } from '../components/SectionHeading'
import { groundInfo } from '../data/club'
import { fixtureLongDate, competitionName } from '../data/programmes'
import {
  getOpponentPreview,
  fixtureForPreview,
  type OpponentPreview,
} from '../data/opponents'

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string
  title: string
  icon?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="relative overflow-hidden border-t border-slate-200 py-8">
      <div className="flex items-center gap-3">
        {icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f0e9] text-[#2f6b45]">
            <SectionIcon name={icon} className="h-5 w-5" />
          </span>
        )}
        <h2 className="relative text-xl font-bold text-[#0b2d52]">{title}</h2>
      </div>
      <div className="relative mt-4">{children}</div>
    </section>
  )
}

function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window === 'undefined' ? '' : window.location.href
  const shareText = encodeURIComponent(title)
  const shareUrl = encodeURIComponent(url)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-slate-600">Share:</span>
      <a
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
        href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
      >
        {copied ? 'Link copied' : 'Copy link'}
      </button>
    </div>
  )
}

function PlayerCard({ name, position, age }: { name: string; position: string; age?: number }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <p className="font-semibold text-[#0b2d52]">{name}</p>
      <p className="text-xs font-medium uppercase tracking-wide text-[#3f8a5b]">{position}</p>
      {age != null && <p className="mt-1 text-sm text-slate-500">Age {age}</p>}
    </div>
  )
}

function OpponentPreviewInner({ preview }: { preview: OpponentPreview }) {
  const fixture = fixtureForPreview(preview)
  const title = `Meet the visitors: ${preview.name}`

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link to="/first-team#fixtures" className="text-sm text-[#0b2d52] underline">
        &larr; Fixtures
      </Link>

      {/* Cover */}
      <header className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] px-6 py-10 text-center text-white sm:py-14">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">
          <span>Next match preview</span>
          {preview.occasion && (
            <>
              <span className="text-white/30">&middot;</span>
              <span>{preview.occasion}</span>
            </>
          )}
        </div>
        <img src={crest} alt="Filton Athletic FC crest" className="mx-auto mt-6 h-24 w-24 object-contain sm:h-28 sm:w-28" />
        <h1 className="mt-6 text-2xl font-bold sm:text-4xl">
          Filton Athletic{' '}
          <span className="block text-base font-normal text-slate-300 sm:inline sm:text-2xl">vs</span>{' '}
          {preview.name}
        </h1>
        {fixture ? (
          <>
            <p className="mt-4 text-sm text-slate-100 sm:text-base">{fixtureLongDate(fixture.date)}</p>
            <p className="text-sm text-slate-100 sm:text-base">
              Kick-off {fixture.time} &middot; {fixture.venue === 'H' ? groundInfo.name : 'Away'}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">
              {competitionName(fixture.competition)}
            </p>
          </>
        ) : (
          <p className="mt-4 text-sm text-slate-200">Fixture details to be confirmed.</p>
        )}
      </header>

      {/* Programme note */}
      <div className="mt-6 rounded-lg border border-[#a9e0b8] bg-[#f2f8f4] p-4 text-sm text-slate-700">
        <span className="font-semibold text-[#0b2d52]">Full matchday programme coming Friday.</span>{' '}
        The complete programme — welcome, team news, squads and league standings — will be published{' '}
        <Link to="/programmes" className="font-semibold text-[#0b2d52] underline">
          on the programmes page
        </Link>{' '}
        ahead of kick-off. In the meantime, here&rsquo;s who we&rsquo;re up against.
      </div>

      <div className="mt-6">
        <ShareBar title={title} />
      </div>

      {/* Quick facts */}
      {preview.quickFacts && preview.quickFacts.length > 0 && (
        <Section id="facts" title="At a glance" icon="shield">
          <dl className="grid gap-4 sm:grid-cols-2">
            {preview.quickFacts.map((f) => (
              <div key={f.label} className="rounded-lg border border-slate-200 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[#3f8a5b]">{f.label}</dt>
                <dd className="mt-1 font-semibold text-[#0b2d52]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {/* Club history */}
      {preview.history.length > 0 && (
        <Section id="history" title={`About ${preview.name}`} icon="clock">
          <div className="space-y-4 text-slate-700">
            {preview.history.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Section>
      )}

      {/* Honours */}
      {preview.honours && preview.honours.length > 0 && (
        <Section id="honours" title="Recent honours" icon="star">
          <ul className="space-y-2">
            {preview.honours.map((h) => (
              <li key={h} className="flex items-start gap-2 text-slate-700">
                <span aria-hidden="true" className="mt-1 text-[#2f6b45]">&#9679;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Key players */}
      {preview.keyPlayers && preview.keyPlayers.length > 0 && (
        <Section id="players" title="Players to watch" icon="shirt">
          {preview.manager && (
            <p className="mb-4 text-sm text-slate-600">
              <span className="font-semibold text-[#0b2d52]">Manager: </span>
              {preview.manager}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {preview.keyPlayers.map((p) => (
              <PlayerCard key={p.name} name={p.name} position={p.position} age={p.age} />
            ))}
          </div>
        </Section>
      )}

      {/* Full squad */}
      {preview.fullSquad && preview.fullSquad.length > 0 && (
        <Section id="squad" title="Full squad" icon="clipboard">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-700 sm:grid-cols-3">
            {preview.fullSquad.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Section>
      )}

      {preview.sourceNote && (
        <p className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-400">{preview.sourceNote}</p>
      )}

      <div className="mt-6">
        <ShareBar title={title} />
      </div>
    </article>
  )
}

function OpponentPreviewPage() {
  const { slug } = useParams()
  const preview = getOpponentPreview(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (preview) {
      document.title = `Meet the visitors: ${preview.name} — Filton Athletic FC`
    }
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [preview])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      {preview ? (
        <OpponentPreviewInner preview={preview} />
      ) : (
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#0b2d52]">Preview not found</h1>
          <p className="mt-3 text-slate-600">There&rsquo;s no opponent preview at this address.</p>
          <Link to="/first-team#fixtures" className="mt-6 inline-block text-[#0b2d52] underline">
            Back to fixtures
          </Link>
        </main>
      )}
      <SiteFooter />
    </div>
  )
}

export default OpponentPreviewPage
