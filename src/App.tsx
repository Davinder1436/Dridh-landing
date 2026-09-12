import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import { SchedulerProvider } from './scheduler/SchedulerContext'
import SchedulerModal from './scheduler/SchedulerModal'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Reading from './pages/Reading'
import Article from './pages/Article'

/** Links like /#offer arrive as a hash on a fresh page — scroll to it once mounted. */
function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <SchedulerProvider>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/reading/:slug" element={<Article />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Footer />
      <SchedulerModal />
      </SchedulerProvider>
    </BrowserRouter>
  )
}
