import type { ReactNode } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SectionHeading from './SectionHeading'

/** Wraps a `[TODO: ...]` marker in an obvious highlight so drafts can't be mistaken for finished copy. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-amber-200 px-1.5 py-0.5 font-semibold text-amber-900">{children}</mark>
  )
}

/** A single heading + prose block within a legal page. */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[#0b2d52]">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  )
}

/**
 * Shared layout for legal/policy pages. Pages built with this render a visible
 * amber "draft" banner until `draft` is set to false — flip it once the club
 * has supplied and reviewed the real content, and remove any remaining <Todo>
 * markers at the same time.
 */
function LegalPage({
  icon,
  title,
  lastUpdated,
  draft = true,
  children,
}: {
  icon: string
  title: string
  lastUpdated: ReactNode
  draft?: boolean
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-14">
        <SectionHeading icon={icon} title={title} as="h1" />
        <p className="mt-4 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        {draft && (
          <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold">Draft — not yet reviewed by the club</p>
            <p className="mt-1">
              This page is scaffolded and awaiting real details from the club (marked{' '}
              <Todo>like this</Todo>). Do not treat it as a finished policy until those are filled
              in and this notice is removed.
            </p>
          </div>
        )}

        <div className="mt-8 space-y-6 text-slate-700">{children}</div>
      </section>
      <SiteFooter />
    </div>
  )
}

export default LegalPage
