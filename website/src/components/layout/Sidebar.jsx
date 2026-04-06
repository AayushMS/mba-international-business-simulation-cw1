import { NavLink, useLocation } from 'react-router-dom'

const taskLinks = [
  {
    group: 'Task 1: Strategy Process',
    wave: '4g',
    color: '#3B6FD4',
    path: '/task1',
    anchors: [
      { label: 'Vision & Mission', anchor: '#vision' },
      { label: 'Strategic Goals', anchor: '#goals' },
      { label: 'SMART Objectives', anchor: '#smart' },
    ],
  },
  {
    group: 'Task 2: Analysis',
    wave: '5g',
    color: '#2B8A5E',
    path: '/task2',
    anchors: [
      { label: 'VRIO Matrix', anchor: '#vrio' },
      { label: 'Value Chain', anchor: '#value-chain' },
      { label: 'PESTLE', anchor: '#pestle' },
      { label: "Porter's Five Forces", anchor: '#porters' },
      { label: 'Strategic Group', anchor: '#strategic-group' },
      { label: 'CSF Analysis', anchor: '#csf' },
    ],
  },
  {
    group: 'Task 3: SWOT',
    wave: 'ai',
    color: '#7B5EA7',
    path: '/task3',
    anchors: [
      { label: 'SWOT Matrix', anchor: '#swot' },
      { label: 'Wave Connections', anchor: '#connections' },
    ],
  },
  {
    group: 'Task 4: Recommendation',
    wave: '5g',
    color: '#2B8A5E',
    path: '/task4',
    anchors: [
      { label: 'Strategic Choice', anchor: '#choice' },
      { label: 'Resource Allocation', anchor: '#resources' },
      { label: 'Risk & Constraints', anchor: '#risks' },
      { label: 'Trade-offs', anchor: '#tradeoffs' },
    ],
  },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside style={{
      width: '200px',
      flexShrink: 0,
      background: '#FFFFFF',
      borderRight: '1px solid #E5E5E0',
      padding: '20px 0',
      overflowY: 'auto',
      position: 'sticky',
      top: '52px',
      height: 'calc(100vh - 52px)',
    }}>
      {taskLinks.map(section => {
        const isActive = location.pathname === section.path
        return (
          <div key={section.group} style={{ marginBottom: '2px' }}>
            <NavLink to={section.path} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                background: isActive ? '#F7F7F5' : 'transparent',
                borderLeft: `2px solid ${isActive ? section.color : 'transparent'}`,
                transition: 'background 0.15s',
              }}>
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: section.color,
                  flexShrink: 0,
                  opacity: isActive ? 1 : 0.4,
                }} />
                <span style={{
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? '#1A1A1A' : '#555555',
                  lineHeight: 1.35,
                }}>
                  {section.group}
                </span>
              </div>
            </NavLink>

            {isActive && section.anchors.map(anchor => (
              <a
                key={anchor.anchor}
                href={anchor.anchor}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  padding: '4px 16px 4px 36px',
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '11px',
                  color: '#999999',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.target.style.color = '#555555'}
                onMouseLeave={e => e.target.style.color = '#999999'}
              >
                {anchor.label}
              </a>
            ))}
          </div>
        )
      })}

      <div style={{ margin: '16px 16px 0', borderTop: '1px solid #E5E5E0', paddingTop: '16px' }}>
        <NavLink to="/team" style={{ textDecoration: 'none' }}>
          <div style={{
            padding: '6px 0',
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: location.pathname === '/team' ? 500 : 400,
            color: location.pathname === '/team' ? '#1A1A1A' : '#999999',
          }}>
            Team
          </div>
        </NavLink>
        <NavLink to="/references" style={{ textDecoration: 'none' }}>
          <div style={{
            padding: '6px 0',
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: location.pathname === '/references' ? 500 : 400,
            color: location.pathname === '/references' ? '#1A1A1A' : '#999999',
          }}>
            References
          </div>
        </NavLink>
      </div>
    </aside>
  )
}
