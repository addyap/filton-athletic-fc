import { useEffect } from 'react'
import LegalPage, { LegalSection, Todo } from '../components/LegalPage'

function SafeguardingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LegalPage icon="shield" title="Safeguarding" lastUpdated={<Todo>DD Month YYYY</Todo>}>
      <LegalSection title="Statement of intent">
        <p>
          Filton Athletic FC is committed to the safety and wellbeing of every child and young person
          involved with the club, in line with the FA&rsquo;s safeguarding children policies and
          procedures.
        </p>
      </LegalSection>

      <LegalSection title="Club Welfare Officer">
        <p>Our designated Club Welfare Officer is:</p>
        <p>
          <Todo>Name, phone number, and email address</Todo>
        </p>
        <p>Any concern about a child&rsquo;s welfare should be raised with the Welfare Officer directly.</p>
      </LegalSection>

      <LegalSection title="Reporting a concern">
        <p>If you have a concern about a child&rsquo;s welfare, you can:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Contact our Club Welfare Officer (above)</li>
          <li>
            Contact the{' '}
            <Todo>relevant County FA Designated Safeguarding Officer — name and contact details</Todo>
          </li>
          <li>
            Call the NSPCC 24-hour helpline on{' '}
            <a className="underline" href="tel:08088005000">
              0808 800 5000
            </a>
          </li>
          <li>In an emergency, call the police on 999</li>
        </ul>
      </LegalSection>

      <LegalSection title="DBS checks">
        <p>
          <Todo>
            Describe the club&rsquo;s process for DBS (criminal record) checks on coaches and volunteers
            working with young players.
          </Todo>
        </p>
      </LegalSection>

      <LegalSection title="Code of conduct">
        <p>
          <Todo>
            Link to or summarise the club&rsquo;s code of conduct for players, coaches, parents and
            spectators, if one exists separately from this page.
          </Todo>
        </p>
      </LegalSection>

      <LegalSection title="Photography and images of young players">
        <p>
          <Todo>
            Describe the club&rsquo;s policy on photographing/filming youth players and publishing images
            on this website or social media (e.g. consent obtained at registration, no names published
            alongside photos of children, opt-out process).
          </Todo>
        </p>
      </LegalSection>
    </LegalPage>
  )
}

export default SafeguardingPage
