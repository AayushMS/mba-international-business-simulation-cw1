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

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#F7F7F5' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1, maxWidth: '1600px', width: '100%', margin: '0 auto' }}>
        {!isHome && <Sidebar />}
        <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task1" element={<Task1StrategyProcess />} />
            <Route path="/task2" element={<Task2Analysis />} />
            <Route path="/task3" element={<Task3SWOT />} />
            <Route path="/task4" element={<Task4Recommendation />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/references" element={<References />} />
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
