import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { preloadRoute } from './AppRoutes'

// After a deploy, an open tab can ask for page files that no longer exist.
// Reloading picks up the new build.
window.addEventListener('vite:preloadError', () => window.location.reload())

function start() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Keep the prerendered HTML on screen until the page's code has arrived.
preloadRoute(window.location.pathname).then(start, start)
