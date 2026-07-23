import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/PostPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join/:slug" element={<PostPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
