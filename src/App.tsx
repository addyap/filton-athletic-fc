import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import ProgrammesIndex from './pages/ProgrammesIndex'
import ProgrammePage from './pages/ProgrammePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join/:slug" element={<PostPage />} />
        <Route path="/programmes" element={<ProgrammesIndex />} />
        <Route path="/programme/:slug" element={<ProgrammePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
