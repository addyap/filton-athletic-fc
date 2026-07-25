import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import ProgrammesIndex from './pages/ProgrammesIndex'
import ProgrammePage from './pages/ProgrammePage'
import FixturesPage from './pages/FixturesPage'
import TablePage from './pages/TablePage'
import YouthPage from './pages/YouthPage'
import ContactPage from './pages/ContactPage'
import ArchivePage from './pages/ArchivePage'
import ReservesPage from './pages/ReservesPage'
import AsTeamPage from './pages/AsTeamPage'

/** Route table shared by the browser (BrowserRouter) and the prerenderer (StaticRouter). */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join/:slug" element={<PostPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/programmes" element={<ProgrammesIndex />} />
      <Route path="/programme/:slug" element={<ProgrammePage />} />
      <Route path="/fixtures" element={<FixturesPage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/reserves" element={<ReservesPage />} />
      <Route path="/as-team" element={<AsTeamPage />} />
      <Route path="/youth" element={<YouthPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
