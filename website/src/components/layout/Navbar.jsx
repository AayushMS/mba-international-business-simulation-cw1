import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/task1', label: 'Task 1' },
  { path: '/task2', label: 'Task 2' },
  { path: '/task3', label: 'Task 3' },
  { path: '/task4', label: 'Task 4' },
  { path: '/team', label: 'Team' },
  { path: '/references', label: 'References' },
]

export default function Navbar() {
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
        <NavLink to="/" style={{ textDecoration: 'none', marginRight: '20px', flexShrink: 0 }}>
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

        <div style={{ display: 'flex', gap: '0', flex: 1, overflowX: 'auto' }}>
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

        <div style={{
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
