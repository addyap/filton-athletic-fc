import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { RisingStarsMark } from '../SectionArt'
import YouthFixturesCalendar from '../YouthFixturesCalendar'
import u13sGirlsTeamFlyer from '../../assets/img/u13s-girls-team.jpg'
import u8sPlayersWantedFlyer from '../../assets/img/u8s-players-wanted.jpg'
import accreditedClubBadge from '../../assets/img/accredited-club-england.jpeg'
import apdAspireLogo from '../../assets/img/sponsors/youth-apd-aspire.webp'
import templineLogo from '../../assets/img/sponsors/youth-templine.webp'
import premiereInstallationsLogo from '../../assets/img/sponsors/youth-premiere-installations.webp'
import youthNewHappyPalaceLogo from '../../assets/img/sponsors/youth-new-happy-palace.webp'

const youthSponsors = [
  { team: 'U8', name: 'APD Aspire Property Design', blurb: 'Carpentry, joinery, renovations & fit-outs — 07518 250520', logo: apdAspireLogo },
  { team: 'U9', name: 'Templine Electrical Services', blurb: 'Jordan@templine-electrical.co.uk', logo: templineLogo },
  { team: 'U10', name: 'Premiere Installations SW', blurb: 'Bathroom design & installations — 07585 957594', logo: premiereInstallationsLogo },
  { team: 'U13', name: 'New Happy Palace', blurb: 'Chinese takeaway, 553 Filton Avenue, BS7 0QH — 0117 969 3739', logo: youthNewHappyPalaceLogo },
]

function YouthSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  return (
    <>
    <section id="youth" className="relative overflow-hidden border-t border-slate-200 bg-[#0b2d52] text-white">
      <RisingStarsMark className="pointer-events-none absolute -right-6 -top-6 h-56 w-56 text-white/[0.08] sm:h-72 sm:w-72" />
      <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="star" title="Filton Athletic Youth FC" tone="dark" className="justify-center lg:justify-start" as={headingLevel} />
        <div className="mt-4 flex flex-col gap-8 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="lg:flex-1">
            <p className="mx-auto max-w-3xl text-slate-200 lg:mx-0">
              Various age groups, mixed groups of boys and girls: YDS (Year 1 and below), U7s (Year 2), U8s
              (Year 3), U9s (Year 4), U10s (Year 5), U11s (Year 6), U12s and U13s. FA qualified coaches, DBS checked.
              Be part of a team and most importantly have fun!
            </p>
            <p className="mt-4 text-slate-200">Home games at BBS Park North, Elm Park, Filton.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm lg:justify-start">
              <p>Email: <a className="underline" href="mailto:filtonathleticfc@outlook.com">filtonathleticfc@outlook.com</a></p>
              <p>Ollie: 07429 595476</p>
            </div>
            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-white/20">
                <img
                  src={accreditedClubBadge}
                  alt="FA Accredited Club — part of England Football"
                  className="h-10 w-auto"
                />
                <span className="max-w-[9rem] text-xs font-semibold leading-tight text-[#0b2d52]">
                  An FA Accredited Club &mdash; part of England Football
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-[580px] lg:flex-none">
            <div>
              <img
                src={u8sPlayersWantedFlyer}
                alt="Players wanted — join Filton Athletic U8s for the 2026/27 season, boys and girls welcome. Date of birth range: 1 September 2018 to 31 August 2019 (players must be 7 on or before 31 August 2026). Interested? Contact Coach Tristen on 07858 225172 or email filtonathleticfc@outlook.com."
                className="mx-auto w-full max-w-[280px] rounded-lg border border-white/20 shadow-sm lg:mx-0"
              />
              <p className="mt-3 text-center text-sm text-slate-200 lg:text-left">
                Players wanted: U8s for 2026/27 &mdash; born 1 Sep 2018 to 31 Aug 2019.
              </p>
            </div>
            <div>
              <img
                src={u13sGirlsTeamFlyer}
                alt="Filton Athletic Youth are looking to create a U13s girls team. Date of birth range for the 26/27 season (school year 8): 1 September 2013 to 31 August 2014, with players up to a year older or younger welcome. Training and friendlies in 26/27, looking to join a league for 27/28. FA qualified and UEFA licensed coaches. Interested? Call 07429 595476 or email filtonathleticfc@outlook.com."
                className="mx-auto w-full max-w-[280px] rounded-lg border border-white/20 shadow-sm lg:mx-0"
              />
              <p className="mt-3 text-center text-sm text-slate-200 lg:text-left">
                New for 2026/27: we&rsquo;re looking to form a U13s girls team &mdash; get in touch if
                you&rsquo;re interested.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-12">
          <h3 className="text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Youth team sponsors</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-base text-slate-300">A big thank you to the businesses backing our young players&hellip;</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {youthSponsors.map((s) => (
              <div key={s.team} className="flex flex-col rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-white/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl sm:p-8">
                <span className="mb-5 inline-flex self-center rounded-full bg-[#0b2d52] px-5 py-1.5 text-base font-extrabold uppercase tracking-wide text-white">{s.team}</span>
                <div className="flex flex-1 items-center justify-center">
                  <img src={s.logo} alt={`${s.name} — ${s.team} team sponsor`} className="h-40 w-full object-contain sm:h-48" />
                </div>
                <p className="mt-5 text-xl font-bold text-[#0b2d52]">{s.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    <YouthFixturesCalendar />
    </>
  )
}

export default YouthSection
