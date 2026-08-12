import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type MatchGalleryItem = {
  opponent: string
  date: string
  result?: string
  photos: { src: string; alt: string }[]
}

type Props = {
  matches: MatchGalleryItem[]
  headingLevel?: 'h1' | 'h3'
}

function MatchGallery({ matches, headingLevel }: Props) {
  if (matches.length === 0) return null

  return (
    <section id="match-gallery" className="border-t border-slate-200 bg-white">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="camera" title="Match gallery" className="justify-center" as={headingLevel} />
        <div className="mt-6 space-y-10">
          {matches.map((m) => (
            <div key={`${m.date}-${m.opponent}`}>
              <h3 className="text-center text-sm font-bold uppercase tracking-widest text-[#0b2d52]">
                {m.opponent} &mdash; {m.date}
                {m.result && <span className="ml-2 font-normal text-slate-500">({m.result})</span>}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-5">
                {m.photos.map((p, i) => (
                  <img
                    key={p.src}
                    src={p.src}
                    alt={p.alt}
                    className={`w-full rounded object-cover ${i === 0 ? 'col-span-2 row-span-2 aspect-[16/10]' : 'aspect-video'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default MatchGallery
