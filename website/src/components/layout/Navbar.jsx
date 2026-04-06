import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/overview', label: 'Quick Overview' },
  { path: '/task1', label: 'Task 1' },
  { path: '/task2', label: 'Task 2' },
  { path: '/task3', label: 'Task 3' },
  { path: '/task4', label: 'Task 4' },
  { path: '/team', label: 'Team' },
  { path: '/references', label: 'References' },
]

export default function Navbar({ onMenuToggle, menuOpen }) {
  const location = useLocation()

  return (
    <header style={{
      background: '#FFFFFF',
      borderBottom: '1px solid #E5E5E0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <nav style={{
        padding: '0 40px',
        maxWidth: '1600px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '52px',
        gap: '4px',
      }}>
        {/* Hamburger menu button */}
        <button
          className="mobile-menu-btn"
          onClick={onMenuToggle}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            marginRight: '8px',
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M5 5L15 15M15 5L5 15" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="15" x2="17" y2="15" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>

        <NavLink to="/" className="nav-brand" style={{ textDecoration: 'none', marginRight: '20px', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'Newsreader, Georgia, serif',
            fontSize: '17px',
            fontWeight: 500,
            color: '#1A1A1A',
            letterSpacing: '-0.01em',
          }}>
            Mobilé Inc.
          </span>
        </NavLink>

        <div className="nav-links" style={{ display: 'flex', gap: '0', flex: 1, overflowX: 'auto' }}>
          {navItems.map(item => {
            const isActive = item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path)
            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: 'none',
                  padding: '6px 14px',
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '13px',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? '#1A1A1A' : '#999999',
                  borderBottom: isActive ? '2px solid #1A1A1A' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s, border-color 0.15s',
                  lineHeight: '38px',
                }}
              >
                {item.label}
              </NavLink>
            )
          })}
        </div>

        <div className="nav-cash-floor" style={{
          marginLeft: '8px',
          flexShrink: 0,
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '11px',
          color: '#999999',
        }}>
          Floor:{' '}
          <span style={{ color: '#C0392B', fontWeight: 500 }}>$90M</span>
        </div>
      </nav>
    </header>
  )
}
