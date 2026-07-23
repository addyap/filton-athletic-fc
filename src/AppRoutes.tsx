import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import ProgrammesIndex from './pages/ProgrammesIndex'
import ProgrammePage from './pages/ProgrammePage'

/** Route table shared by the browser (BrowserRouter) and the prerenderer (StaticRouter). */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join/:slug" element={<PostPage />} />
      <Route path="/programmes" element={<ProgrammesIndex />} />
      <Route path="/programme/:slug" element={<ProgrammePage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
