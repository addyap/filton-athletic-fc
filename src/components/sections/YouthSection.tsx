import SectionHeading from '../SectionHeading'
import u13sGirlsTeamFlyer from '../../assets/img/u13s-girls-team.jpg'

function YouthSection() {
  return (
    <section id="youth" className="border-t border-slate-200 bg-[#0b2d52] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="star" title="Filton Athletic Youth FC" tone="dark" className="justify-center lg:justify-start" />
        <div className="mt-4 flex flex-col gap-8 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="lg:flex-1">
            <p className="mx-auto max-w-3xl text-slate-200 lg:mx-0">
              Various age groups, mixed groups of boys and girls: YDS (Year 1 and below), U7s (Year 2), U8s
              (Year 3), U9s (Year 4), U10s (Year 5), U11s (Year 6) and U12s. FA qualified coaches, DBS checked.
              Be part of a team and most importantly have fun!
            </p>
            <p className="mt-4 text-slate-200">Home games at BBS Park North, Elm Park, Filton.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm lg:justify-start">
              <p>Email: <a className="underline" href="mailto:filtonathleticfc@outlook.com">filtonathleticfc@outlook.com</a></p>
              <p>Kev: 07710 581381</p>
              <p>Ollie: 07429 595476</p>
            </div>
          </div>
          <div className="lg:w-[280px] lg:flex-none">
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
    </section>
  )
}

export default YouthSection
