import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { getArchiveFeature } from '../data/archiveFeatures'

/** The scanned clipping — click to open full size, with a graceful fallback if
 *  the image file has not been added to /public/archive yet. */
function ClippingScan({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <p className="font-semibold text-[#0b2d52]">Original scan coming soon</p>
        <p className="mt-1 max-w-sm text-sm text-slate-500">
          We&rsquo;re adding the scanned newspaper page here. In the meantime, the full article is
          transcribed below.
        </p>
      </div>
    )
  }

  return (
    <figure className="m-0">
      <a href={src} target="_blank" rel="noreferrer" className="group block">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full rounded-lg border border-slate-200 shadow-sm transition group-hover:shadow-md"
        />
      </a>
      <figcaption className="mt-2 text-center text-xs text-slate-400">
        Tap the cutting to view the full page.
      </figcaption>
    </figure>
  )
}

function ArchiveFeaturePage() {
  const { slug } = useParams()
  const feature = getArchiveFeature(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (feature) {
      document.title = `${feature.headline} — From the archive — Filton Athletic FC`
    }
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [feature])

  if (!feature) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#0b2d52]">Article not found</h1>
          <p className="mt-3 text-slate-600">That archive piece may have moved or the link is wrong.</p>
          <Link to="/#history" className="mt-6 inline-block text-[#0b2d52] underline">
            Back to our history
          </Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link to="/#history" className="text-sm text-[#0b2d52] underline">
          &larr; Back to our history
        </Link>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e7f0e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f6b45]">
          From the archive
        </p>

        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          {feature.publication}
          <span className="mx-2 text-slate-300">&middot;</span>
          <time dateTime={feature.isoDate}>{feature.edition}</time>
        </p>

        <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#0b2d52] sm:text-4xl">
          {feature.headline}
        </h1>

        {feature.byline && (
          <p className="mt-3 text-sm text-slate-500">By {feature.byline}</p>
        )}

        <div className="mt-8">
          <ClippingScan src={feature.scan.src} alt={feature.scan.alt} />
        </div>

        {feature.photoCaption && (
          <p className="mt-4 border-l-2 border-[#0b2d52]/20 pl-4 text-sm italic text-slate-600">
            <span className="font-semibold not-italic text-[#0b2d52]">The 2009 squad &mdash; </span>
            {feature.photoCaption}
          </p>
        )}

        <div className="mt-10 border-t border-slate-200 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            The article, transcribed
          </p>

          <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-800 first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-[#0b2d52]">
            {feature.standfirst}
          </p>

          <div className="mt-5 space-y-4 text-slate-700">
            {feature.body.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-slate-200 bg-[#f7faf8] p-6 text-center">
          <p className="text-slate-700">
            More than a decade on, the club is still going strong at Elm Park.
          </p>
          <Link
            to="/#squad"
            className="mt-3 inline-block rounded-full bg-[#0b2d52] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123c6c]"
          >
            Meet today&rsquo;s squad &rarr;
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  )
}

export default ArchiveFeaturePage
