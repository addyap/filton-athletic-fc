import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { getHistoricTeamPhoto, historicTeamPhotos } from '../data/historicTeamPhotos'

function HistoricTeamPhotoPage() {
  const { slug } = useParams<{ slug: string }>()
  const photo = getHistoricTeamPhoto(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [photo])

  if (!photo) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <SectionHeading icon="camera" title="Photograph not found" />
          <p className="mt-4 text-slate-600">This historic team-photograph record is not available.</p>
          <Link to="/archive/team-photographs" className="mt-6 inline-block font-semibold text-[#0b2d52] underline hover:text-[#2f6b45]">
            Browse the photograph archive &rarr;
          </Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const relatedPhotos = historicTeamPhotos.filter((entry) => entry.slug !== photo.slug && entry.team === photo.team).slice(0, 3)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9e0b8]">Club photograph archive · {photo.team}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{photo.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg">{photo.collectionLabel}</p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(290px,0.72fr)] lg:items-start">
          <article className="order-2 lg:order-1">
            <SectionHeading icon="clock" title="A preserved club record" />
            <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
              <p>{photo.summary}</p>
              <p>
                The archive uses a carefully framed presentation crop for clarity, while retaining the supplied original with its wider clubhouse context as the archival source.
              </p>
            </div>

            <section className="mt-9 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f6b45]">Archive record</p>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">Team</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">{photo.team}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">Season</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">{photo.season}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">Source</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">Club archive supply</dd>
                </div>
              </dl>
            </section>

            <aside className="mt-8 border-l-4 border-[#2f6b45] bg-[#e7f0e9] px-5 py-4 text-sm leading-6 text-[#173f2d]">
              <p className="font-semibold">Archive note</p>
              <p className="mt-1">{photo.archiveNote}</p>
            </aside>

            <section className="mt-10" aria-labelledby="player-identification-heading">
              <SectionHeading icon="shirt" title="Player identification & squad list" as="h2" />
              {photo.playerIdentification ? (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <p id="player-identification-heading" className="text-sm leading-6 text-slate-600">
                    {photo.playerIdentification.sourceNote}
                  </p>
                  <div className="mt-6 space-y-6">
                    {photo.playerIdentification.groups.map((group) => (
                      <div key={group.label}>
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#2f6b45]">{group.label}</h3>
                        <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.label}>
                          {group.people.map((person) => (
                            <li key={person} className="rounded-full border border-[#b9d6c0] bg-[#edf6ef] px-3 py-1.5 text-sm font-medium text-[#173f2d]">
                              {person}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm leading-6 text-slate-600 sm:p-6">
                  The supplied photograph does not contain a readable squad caption, so no player identities have been inferred for this archive record.
                </div>
              )}
            </section>

            {relatedPhotos.length > 0 && (
              <section className="mt-10">
                <SectionHeading icon="camera" title={`More ${photo.team} photographs`} as="h2" />
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {relatedPhotos.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/archive/team-photographs/${related.slug}`}
                      className="rounded-xl border border-slate-200 p-4 transition hover:border-[#2f6b45] hover:shadow-sm"
                    >
                      <p className="text-sm font-bold text-[#0b2d52]">{related.title}</p>
                      <p className="mt-2 text-sm text-slate-600">View archive record &rarr;</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <p className="mt-10 text-sm text-slate-600">
              <Link to="/archive/team-photographs" className="font-semibold text-[#0b2d52] underline hover:text-[#2f6b45]">
                Browse all historic team photographs &rarr;
              </Link>
            </p>
          </article>

          <aside className="order-1 lg:order-2 lg:sticky lg:top-6">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <a href={photo.originalImageUrl} target="_blank" rel="noreferrer" className="block bg-slate-100 p-2">
                <img src={photo.imageUrl} alt={photo.alt} className="h-auto w-full rounded-xl" />
              </a>
              <figcaption className="p-4">
                <p className="text-sm font-semibold text-[#0b2d52]">Presentation crop</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{photo.collectionLabel}. Framed for the archive while retaining the full original below.</p>
                <a href={photo.originalImageUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#0b2d52] underline hover:text-[#2f6b45]">
                  Open the original supplied image &rarr;
                </a>
              </figcaption>
            </figure>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

export default HistoricTeamPhotoPage
