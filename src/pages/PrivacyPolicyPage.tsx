import { useEffect } from 'react'
import LegalPage, { LegalSection, Todo } from '../components/LegalPage'

function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LegalPage icon="clipboard" title="Privacy policy" lastUpdated={<Todo>DD Month YYYY</Todo>}>
      <LegalSection title="Who we are">
        <p>
          This website is run by Filton Athletic FC, an amateur football club based in Filton, Bristol.
          For anything relating to this policy, contact us at{' '}
          <a className="underline" href="mailto:filtonathleticfc@outlook.com">
            filtonathleticfc@outlook.com
          </a>
          .
        </p>
        <p>
          Data controller / person responsible for data protection: <Todo>name and role, e.g. Club Secretary</Todo>
        </p>
      </LegalSection>

      <LegalSection title="What this website collects">
        <p>
          This website does not have any sign-up forms, accounts, or ways to submit personal data directly —
          browsing it does not send us any personal information. The site does embed a Google Map on the
          Contact page to show the ground&rsquo;s location; interacting with that map is subject to{' '}
          <a
            className="underline"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google&rsquo;s own privacy policy
          </a>
          , not this one.
        </p>
        <p>
          The home page also embeds our Facebook page feed (Facebook&rsquo;s official page plugin) so you can
          see our latest posts and live match updates. This loads content from Facebook, which may set its own
          cookies and is subject to{' '}
          <a
            className="underline"
            href="https://www.facebook.com/privacy/policy"
            target="_blank"
            rel="noreferrer"
          >
            Facebook&rsquo;s own privacy policy
          </a>
          , not this one.
        </p>
        <p>
          Links to Facebook, X/Twitter and our club shop take you to third-party sites with their own privacy
          policies — we don&rsquo;t control what they collect.
        </p>
      </LegalSection>

      <LegalSection title="Data collected outside the website">
        <p>
          The club separately holds information about members, players and parents/guardians for running the
          club — for example team sheets, registration details, and emergency contacts.
        </p>
        <p>
          <Todo>
            Describe what&rsquo;s collected (e.g. name, date of birth, address, emergency contact, medical
            info), why, how long it&rsquo;s kept, and where/how it&rsquo;s stored (e.g. paper forms, a
            spreadsheet, the FA&rsquo;s Whole Game System).
          </Todo>
        </p>
      </LegalSection>

      <LegalSection title="Children's data">
        <p>
          The club runs youth teams, so some of the data described above relates to children. See our{' '}
          <a className="underline" href="/safeguarding">
            Safeguarding policy
          </a>{' '}
          for how we protect young players.
        </p>
        <p>
          <Todo>
            Confirm who can consent on a child&rsquo;s behalf (parent/guardian) and how consent is recorded.
          </Todo>
        </p>
      </LegalSection>

      <LegalSection title="Photography and images">
        <p>
          We sometimes publish photos from matches and club events on this website and our social media.
        </p>
        <p>
          <Todo>
            Describe the club&rsquo;s photo consent process — e.g. an opt-out at registration, or asking
            before publishing photos of youth players.
          </Todo>
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>Under UK data protection law, you have the right to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>ask what personal data we hold about you and get a copy of it</li>
          <li>ask us to correct inaccurate data</li>
          <li>ask us to delete your data, in some circumstances</li>
          <li>object to how your data is used, in some circumstances</li>
        </ul>
        <p>
          To use any of these rights, email{' '}
          <a className="underline" href="mailto:filtonathleticfc@outlook.com">
            filtonathleticfc@outlook.com
          </a>
          . If you&rsquo;re unhappy with our response, you can complain to the{' '}
          <a
            className="underline"
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noreferrer"
          >
            Information Commissioner&rsquo;s Office (ICO)
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>We&rsquo;ll update this page if what we collect or how we use it changes.</p>
      </LegalSection>
    </LegalPage>
  )
}

export default PrivacyPolicyPage
