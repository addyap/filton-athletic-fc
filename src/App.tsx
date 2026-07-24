import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  )
}

export default App
