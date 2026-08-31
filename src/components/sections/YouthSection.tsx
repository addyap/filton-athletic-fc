import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { RisingStarsMark } from '../SectionArt'
import YouthFixturesCalendar from '../YouthFixturesCalendar'
import u13sGirlsTeamFlyer from '../../assets/img/u13s-girls-team.jpg'
import u8sPlayersWantedFlyer from '../../assets/img/u8s-players-wanted.jpg'
import accreditedClubBadge from '../../assets/img/accredited-club-england.jpeg'

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
      </Reveal>
    </section>

    <YouthFixturesCalendar />
    </>
  )
}

export default YouthSection
