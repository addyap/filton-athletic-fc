import crest from './assets/img/filton-athletic-crest.jpg'
import {
  officials,
  squad,
  firstTeamFixtures,
  leagueTable,
  reserveTable,
  sponsors,
  groundInfo,
} from './data/club'

const navLinks = [
  { href: '#news', label: 'News' },
  { href: '#history', label: 'History' },
  { href: '#squad', label: 'Squad' },
  { href: '#fixtures', label: 'Fixtures' },
  { href: '#table', label: 'Table' },
  { href: '#youth', label: 'Youth' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#contact', label: 'Contact' },
]

function resultBadge(result?: string) {
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-500'
}

function LeagueTable({ rows, highlight }: { rows: typeof leagueTable; highlight: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full text-sm">
        <thead className="bg-[#0b2d52] text-white">
          <tr>
            {['Pos', 'Team', 'P', 'W', 'D', 'L', 'F', 'A', 'GD', 'Pts'].map((h) => (
              <th key={h} className="px-3 py-2 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.team}
              className={`border-t border-slate-200 ${r.team === highlight ? 'bg-[#e7f0e9] font-semibold text-[#0b2d52]' : 'odd:bg-white even:bg-slate-50'}`}
            >
              <td className="px-3 py-1.5">{r.pos}</td>
              <td className="px-3 py-1.5">{r.team}</td>
              <td className="px-3 py-1.5">{r.p}</td>
              <td className="px-3 py-1.5">{r.w}</td>
              <td className="px-3 py-1.5">{r.d}</td>
              <td className="px-3 py-1.5">{r.l}</td>
              <td className="px-3 py-1.5">{r.f}</td>
              <td className="px-3 py-1.5">{r.a}</td>
              <td className="px-3 py-1.5">{r.gd}</td>
              <td className="px-3 py-1.5">{r.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#0b2d52] text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <img src={crest} alt="Filton Athletic FC crest" className="h-14 w-14 object-contain" />
          <div>
            <h1 className="text-xl font-bold leading-tight">Filton Athletic FC</h1>
            <p className="text-xs text-slate-300">Est. Filton, Bristol &middot; #FATS #UTF</p>
          </div>
        </div>
        <nav className="border-t border-white/10 bg-[#0a2745]">
          <div className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-6 py-2 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="whitespace-nowrap text-slate-200 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#7f9ad6] via-[#1c3f6e] to-[#0a2340] text-white">
        <img
          src={crest}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-[28rem] w-[28rem] opacity-10 sm:h-[34rem] sm:w-[34rem]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-wide text-[#a9e0b8]">Marcliff Gloucestershire County Football League</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Home of Filton Athletic FC</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100">
            First team, reserves and youth football in the north of Bristol since the 1960s. Come down to
            Pen Park or Elm Park and back the lads.
          </p>
        </div>
      </section>

      {/* News / Chairman's welcome */}
      <section id="news" className="mx-auto max-w-6xl px-6 py-14">
        <h3 className="text-2xl font-bold text-[#0b2d52]">Chairman&rsquo;s welcome</h3>
        <div className="mt-4 rounded-lg border border-slate-200 bg-[#f7faf8] p-6">
          <p className="italic text-slate-700">
            &ldquo;Following our impressive victory against Almondsbury in the cup we are hoping to take
            that form into the league and move back up the table from our current 8th place. We look
            forward to welcoming everyone back at the Filton Feast after the game for some amazing food
            and a few beers.&rdquo;
          </p>
          <p className="mt-4 font-semibold text-[#0b2d52]">Ollie Keeble &mdash; Chairman, Filton Athletic FC</p>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 p-6">
          <h4 className="text-lg font-semibold text-[#0b2d52]">From the dugout</h4>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Filton Athletic 3 &ndash; 0 Almondsbury (GFA Cup, 14 December 2024)
          </p>
          <p className="mt-3 text-slate-700">
            &ldquo;A great performance in the cup against a very good Almondsbury side. Our skipper scored
            from his own half in the first few seconds, and from there it was a dominant first-half
            performance. We finished the game with 10 men due to injury and a lack of bench, but 3-0, job
            done onto the next round.&rdquo;
          </p>
          <p className="mt-2 font-semibold text-[#0b2d52]">Mike Humby &mdash; First Team Manager</p>
        </div>
      </section>

      {/* History */}
      <section id="history" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h3 className="text-2xl font-bold text-[#0b2d52]">Our history</h3>
          <p className="mt-4 max-w-3xl text-slate-700">
            Filton Athletic FC are a long-standing amateur football club based in the north of Bristol. We
            started out as St. Andrews Meth back in the 1960s, then changed to Filton Athletic FC in 1986.
          </p>
          <p className="mt-3 max-w-3xl text-slate-700">
            We are currently made up of two adult football teams who both play regularly on a Saturday
            afternoon. Our first team compete in the Marcliff Gloucestershire County Football League,
            having been promoted as Champions from the Bristol &amp; Suburban Premier Division in 2023-24.
            They play their home games at {groundInfo.firstTeam.name}. Our Reserve team compete in the
            Bristol &amp; Suburban Senior Division, playing home games at {groundInfo.reserves.name}.
          </p>
          <p className="mt-3 max-w-3xl text-slate-700">
            In 2023 we established the Filton Athletic FC Youth Team, consisting of U7, U8, U9, U10, U11
            and YDS age groups. The club is run by an enthusiastic and committed committee, and is
            fortunate to be supported by some of the best fans in the world &mdash; the self-proclaimed
            Filton Ultras!
          </p>

          <h4 className="mt-10 text-lg font-semibold text-[#0b2d52]">Club officials</h4>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold">Chairman</p>
              <p className="text-slate-700">{officials.chairman}</p>
            </div>
            <div>
              <p className="font-semibold">Vice-Chairman</p>
              <p className="text-slate-700">{officials.viceChairman}</p>
            </div>
            <div>
              <p className="font-semibold">Club Secretary</p>
              <p className="text-slate-700">{officials.secretary}</p>
            </div>
            <div>
              <p className="font-semibold">First Team Manager</p>
              <p className="text-slate-700">{officials.firstTeamManager}</p>
            </div>
            <div>
              <p className="font-semibold">First Team Coaches</p>
              <p className="text-slate-700">{officials.firstTeamCoaches.join(', ')}</p>
            </div>
            <div>
              <p className="font-semibold">Reserve Team Manager</p>
              <p className="text-slate-700">{officials.reserveTeamManager}</p>
            </div>
            <div>
              <p className="font-semibold">Reserve Team Coaches</p>
              <p className="text-slate-700">{officials.reserveTeamCoaches.join(', ')}</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <p className="font-semibold">General Committee</p>
              <p className="text-slate-700">{officials.committee.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Squad */}
      <section id="squad" className="mx-auto max-w-6xl px-6 py-14">
        <h3 className="text-2xl font-bold text-[#0b2d52]">First team squad</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {squad.map((p) => (
            <div key={p.name} className="rounded-lg border border-slate-200 p-4">
              <p className="font-semibold text-[#0b2d52]">{p.name}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-[#3f8a5b]">{p.position}</p>
              <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fixtures & Results */}
      <section id="fixtures" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h3 className="text-2xl font-bold text-[#0b2d52]">Fixtures &amp; results</h3>
          <p className="mt-1 text-sm text-slate-500">
            First team &mdash; Marcliff Gloucestershire County Football League 2024-25
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0b2d52] text-white">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Date</th>
                  <th className="px-3 py-2 text-left font-semibold">Comp</th>
                  <th className="px-3 py-2 text-left font-semibold">Opponent</th>
                  <th className="px-3 py-2 text-left font-semibold">Venue</th>
                  <th className="px-3 py-2 text-left font-semibold">Result</th>
                  <th className="px-3 py-2 text-left font-semibold">Scorers</th>
                </tr>
              </thead>
              <tbody>
                {firstTeamFixtures.map((f) => (
                  <tr key={`${f.date}-${f.opponent}`} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="whitespace-nowrap px-3 py-1.5">
                      {f.date} <span className="text-slate-400">{f.time}</span>
                    </td>
                    <td className="px-3 py-1.5">{f.competition}</td>
                    <td className="px-3 py-1.5">{f.opponent}</td>
                    <td className="px-3 py-1.5">{f.venue}</td>
                    <td className="px-3 py-1.5">
                      <span className={`rounded px-2 py-0.5 text-xs font-semibold ${resultBadge(f.result)}`}>
                        {f.result ?? 'Upcoming'}
                      </span>
                    </td>
                    <td className="px-3 py-1.5 text-slate-600">{f.scorers ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* League table */}
      <section id="table" className="mx-auto max-w-6xl px-6 py-14">
        <h3 className="text-2xl font-bold text-[#0b2d52]">League table</h3>
        <p className="mt-1 text-sm text-slate-500">Marcliff Gloucestershire County Football League 2024-25</p>
        <div className="mt-6">
          <LeagueTable rows={leagueTable} highlight="Filton Athletic" />
        </div>

        <h4 className="mt-12 text-xl font-bold text-[#0b2d52]">Filton Reserves</h4>
        <p className="mt-1 text-sm text-slate-500">Bristol &amp; Suburban Senior League 2024-25</p>
        <div className="mt-6">
          <LeagueTable rows={reserveTable} highlight="Filton Athletic Reserves" />
        </div>
      </section>

      {/* Youth */}
      <section id="youth" className="border-t border-slate-200 bg-[#0b2d52] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h3 className="text-2xl font-bold">Filton Athletic Youth FC</h3>
          <p className="mt-4 max-w-3xl text-slate-200">
            Various age groups, mixed groups of boys and girls: YDS (Year 1 and below), U7s (Year 2), U8s
            (Year 3), U9s (Year 4), U10s (Year 5) and U11s (Year 6). FA qualified coaches, DBS checked.
            Be part of a team and most importantly have fun!
          </p>
          <p className="mt-4 text-slate-200">Home games at Elm Park Playing Fields, Filton.</p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <p>Email: <a className="underline" href="mailto:filtonathleticfc@outlook.com">filtonathleticfc@outlook.com</a></p>
            <p>Kev: 07710 581381</p>
            <p>Ollie: 07429 595476</p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="mx-auto max-w-6xl px-6 py-14">
        <h3 className="text-2xl font-bold text-[#0b2d52]">Club sponsors</h3>
        <p className="mt-1 text-sm text-slate-500">Thank you to our sponsors&hellip;</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => (
            <div key={s.name} className="rounded-lg border border-slate-200 p-4">
              <p className="font-semibold text-[#0b2d52]">{s.name}</p>
              <p className="mt-1 text-sm text-slate-600">{s.blurb}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Interested in advertising with the club? Contact{' '}
          <a className="text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">
            filtonathleticfc@outlook.com
          </a>
        </p>
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h3 className="text-2xl font-bold text-[#0b2d52]">Contact &amp; grounds</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-semibold">First team &amp; matchdays</p>
              <p className="text-slate-700">{groundInfo.firstTeam.name}</p>
              <p className="text-slate-700">{groundInfo.firstTeam.address}</p>
            </div>
            <div>
              <p className="font-semibold">Reserves &amp; youth</p>
              <p className="text-slate-700">{groundInfo.reserves.name}</p>
              <p className="text-slate-700">{groundInfo.reserves.address}</p>
            </div>
          </div>
          <div className="mt-8 text-sm text-slate-600">
            <p>Email: <a className="text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">filtonathleticfc@outlook.com</a></p>
            <p className="mt-1">Twitter/X: @FiltonAthletic</p>
          </div>
          <p className="mt-10 text-xs text-slate-400">&copy; {new Date().getFullYear()} Filton Athletic FC. #FATS #UTF</p>
        </div>
      </footer>
    </div>
  )
}

export default App
