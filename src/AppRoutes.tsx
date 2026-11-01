import { Suspense } from 'react'
import { Routes, Route, matchPath } from 'react-router-dom'
import { usePageHead } from './usePageHead'
import { lazyPage } from './lazyPage'

const Home = lazyPage(() => import('./pages/Home'))
const PostPage = lazyPage(() => import('./pages/PostPage'))
const ProgrammesIndex = lazyPage(() => import('./pages/ProgrammesIndex'))
const ProgrammePage = lazyPage(() => import('./pages/ProgrammePage'))
const OpponentPreviewPage = lazyPage(() => import('./pages/OpponentPreviewPage'))
const FixturesPage = lazyPage(() => import('./pages/FixturesPage'))
const FirstTeamPage = lazyPage(() => import('./pages/FirstTeamPage'))
const TablePage = lazyPage(() => import('./pages/TablePage'))
const YouthPage = lazyPage(() => import('./pages/YouthPage'))
const ContactPage = lazyPage(() => import('./pages/ContactPage'))
const ArchivePage = lazyPage(() => import('./pages/ArchivePage'))
const FirstTeamArchiveHub = lazyPage(() => import('./pages/FirstTeamArchiveHub'))
const ReservesArchiveHub = lazyPage(() => import('./pages/ReservesArchiveHub'))
const TeamSeasonArchivePage = lazyPage(() => import('./pages/TeamSeasonArchivePage'))
const ReservesPage = lazyPage(() => import('./pages/ReservesPage'))
const AsTeamPage = lazyPage(() => import('./pages/AsTeamPage'))
const PrivacyPolicyPage = lazyPage(() => import('./pages/PrivacyPolicyPage'))
const SafeguardingPage = lazyPage(() => import('./pages/SafeguardingPage'))
const EveningPost2009ArchivePage = lazyPage(() => import('./pages/EveningPost2009ArchivePage'))
const TeamPhotographArchivePage = lazyPage(() => import('./pages/TeamPhotographArchivePage'))
const HistoricTeamPhotoPage = lazyPage(() => import('./pages/HistoricTeamPhotoPage'))
const NotFoundPage = lazyPage(() => import('./pages/NotFoundPage'))

const pages = [
  { path: '/', page: Home, element: <Home /> },
  { path: '/join/:slug', page: PostPage, element: <PostPage /> },
  { path: '/archive', page: ArchivePage, element: <ArchivePage /> },
  { path: '/archive/filton-athletic-evening-post-2009', page: EveningPost2009ArchivePage, element: <EveningPost2009ArchivePage /> },
  { path: '/archive/team-photographs', page: TeamPhotographArchivePage, element: <TeamPhotographArchivePage /> },
  { path: '/archive/team-photographs/:slug', page: HistoricTeamPhotoPage, element: <HistoricTeamPhotoPage /> },
  { path: '/archive/first-team', page: FirstTeamArchiveHub, element: <FirstTeamArchiveHub /> },
  { path: '/archive/reserves', page: ReservesArchiveHub, element: <ReservesArchiveHub /> },
  { path: '/archive/first-team/:season', page: TeamSeasonArchivePage, element: <TeamSeasonArchivePage team="first-team" /> },
  { path: '/archive/reserves/:season', page: TeamSeasonArchivePage, element: <TeamSeasonArchivePage team="reserves" /> },
  { path: '/programmes', page: ProgrammesIndex, element: <ProgrammesIndex /> },
  { path: '/programme/:slug', page: ProgrammePage, element: <ProgrammePage /> },
  { path: '/preview/:slug', page: OpponentPreviewPage, element: <OpponentPreviewPage /> },
  { path: '/first-team', page: FirstTeamPage, element: <FirstTeamPage /> },
  { path: '/fixtures', page: FixturesPage, element: <FixturesPage /> },
  { path: '/table', page: TablePage, element: <TablePage /> },
  { path: '/reserves', page: ReservesPage, element: <ReservesPage /> },
  { path: '/as-team', page: AsTeamPage, element: <AsTeamPage /> },
  { path: '/youth', page: YouthPage, element: <YouthPage /> },
  { path: '/contact', page: ContactPage, element: <ContactPage /> },
  { path: '/privacy-policy', page: PrivacyPolicyPage, element: <PrivacyPolicyPage /> },
  { path: '/safeguarding', page: SafeguardingPage, element: <SafeguardingPage /> },
]

/** Load the page for a path before rendering it, so the first render isn't blank. */
export function preloadRoute(pathname: string): Promise<void> {
  const route = pages.find(({ path }) => matchPath(path, pathname))
  return (route?.page ?? NotFoundPage).preload()
}

/** Route table shared by the browser (BrowserRouter) and the prerenderer (StaticRouter). */
function AppRoutes() {
  usePageHead()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-[#0b2d52] focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Suspense fallback={null}>
        <Routes>
          {pages.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoutes
