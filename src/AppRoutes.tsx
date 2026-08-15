import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import ProgrammesIndex from './pages/ProgrammesIndex'
import ProgrammePage from './pages/ProgrammePage'
import OpponentPreviewPage from './pages/OpponentPreviewPage'
import FixturesPage from './pages/FixturesPage'
import FirstTeamPage from './pages/FirstTeamPage'
import TablePage from './pages/TablePage'
import YouthPage from './pages/YouthPage'
import ContactPage from './pages/ContactPage'
import ArchivePage from './pages/ArchivePage'
import FirstTeamArchiveHub from './pages/FirstTeamArchiveHub'
import ReservesArchiveHub from './pages/ReservesArchiveHub'
import TeamSeasonArchivePage from './pages/TeamSeasonArchivePage'
import ReservesPage from './pages/ReservesPage'
import AsTeamPage from './pages/AsTeamPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import SafeguardingPage from './pages/SafeguardingPage'
import MatchCentreComingSoonPage from './pages/MatchCentreComingSoonPage'

/** Route table shared by the browser (BrowserRouter) and the prerenderer (StaticRouter). */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join/:slug" element={<PostPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/archive/first-team" element={<FirstTeamArchiveHub />} />
      <Route path="/archive/reserves" element={<ReservesArchiveHub />} />
      <Route path="/archive/first-team/:season" element={<TeamSeasonArchivePage team="first-team" />} />
      <Route path="/archive/reserves/:season" element={<TeamSeasonArchivePage team="reserves" />} />
      <Route path="/programmes" element={<ProgrammesIndex />} />
      <Route path="/programme/:slug" element={<ProgrammePage />} />
      <Route path="/preview/:slug" element={<OpponentPreviewPage />} />
      <Route path="/first-team" element={<FirstTeamPage />} />
      <Route path="/fixtures" element={<FixturesPage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/reserves" element={<ReservesPage />} />
      <Route path="/as-team" element={<AsTeamPage />} />
      <Route path="/youth" element={<YouthPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/safeguarding" element={<SafeguardingPage />} />
      <Route path="/match-centre" element={<MatchCentreComingSoonPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
