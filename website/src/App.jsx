import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Task1StrategyProcess from './pages/Task1StrategyProcess'
import Task2Analysis from './pages/Task2Analysis'
import Task3SWOT from './pages/Task3SWOT'
import Task4Recommendation from './pages/Task4Recommendation'
import TeamPage from './pages/TeamPage'
import References from './pages/References'
import QuickOverview from './pages/QuickOverview'

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Close menu on resize back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#F7F7F5' }}>
      <Navbar onMenuToggle={() => setMenuOpen(prev => !prev)} menuOpen={menuOpen} />
      <div style={{ display: 'flex', flex: 1, maxWidth: '1600px', width: '100%', margin: '0 auto' }}>
        {!isHome && (
          <>
            <div
              className={`sidebar-overlay${menuOpen ? ' sidebar-open' : ''}`}
              onClick={() => setMenuOpen(false)}
            />
            <Sidebar className={menuOpen ? 'sidebar-open' : ''} />
          </>
        )}
        <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task1" element={<Task1StrategyProcess />} />
            <Route path="/task2" element={<Task2Analysis />} />
            <Route path="/task3" element={<Task3SWOT />} />
            <Route path="/task4" element={<Task4Recommendation />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/references" element={<References />} />
            <Route path="/overview" element={<QuickOverview />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
