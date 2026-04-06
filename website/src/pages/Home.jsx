import { Link } from 'react-router-dom'
import ThreeWaveTimeline from '../components/charts/ThreeWaveTimeline'
import FinancialDashboard from '../components/charts/FinancialDashboard'
import MarketComparison from '../components/charts/MarketComparison'
import { executiveSummary, waves, company } from '../data/caseStudyData'

const taskCards = [
  {
    path: '/task1',
    number: '01',
    title: 'Strategy Process',
    marks: '15 marks',
    description: 'Vision, Mission, Strategic Goals & SMART Objectives',
    color: '#3B6FD4',
    items: ['Vision Statement', 'Mission Statement', 'Strategic Goals', 'SMART Objectives'],
  },
  {
    path: '/task2',
    number: '02',
    title: 'Internal & External Analysis',
    marks: '30 marks',
    description: "VRIO, Value Chain, PESTLE, Porter's Five Forces, Strategic Group, CSF",
    color: '#2B8A5E',
    items: ['VRIO Matrix', 'Value Chain', 'PESTLE', "Porter's Five Forces", 'Strategic Group Map', 'CSF Gap Analysis'],
  },
  {
    path: '/task3',
    number: '03',
    title: 'SWOT Synthesis',
    marks: '15 marks',
    description: 'Evidence-based SWOT with wave colour-coding and framework evidence trails',
    color: '#7B5EA7',
    items: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'],
  },
  {
    path: '/task4',
    number: '04',
    title: 'Strategic Recommendation',
    marks: '15 marks',
    description: 'Clear strategic choice with resource allocation, market priority & trade-offs',
    color: '#2B8A5E',
    items: ['Strategic Choice', 'Resource Allocation', 'Market Priority', 'Risk & Trade-offs'],
  },
]

const waveCards = [
  { label: 'Wave 1 — 4G LTE', sub: 'Defend cash engine', status: 'Cash Engine', color: '#3B6FD4' },
  { label: 'Wave 2 — 5G', sub: 'URGENT: Not yet launched', status: 'Launch Now', color: '#2B8A5E' },
  { label: 'Wave 3 — AI Devices', sub: 'R&D window opens now', status: 'Invest', color: '#7B5EA7' },
]

const metrics = [
  { label: 'Annual Revenue', value: '$4.8B', sub: '4G segment', mono: true },
  { label: 'Market Share', value: '25%', sub: 'USA · Europe · Asia', mono: true },
  { label: 'Cash Reserve Floor', value: '$90M', sub: 'Minimum constraint', mono: true, urgent: true },
  { label: '5G Handset', value: 'Not launched', sub: 'Critical 2025 gap', mono: false, urgent: true },
]

export default function Home() {
  return (
    <div style={{ padding: '48px 56px', maxWidth: '1440px', margin: '0 auto', width: '100%', animation: 'fadeInUp 0.3s ease' }}>
      {/* Hero */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '12px',
          color: '#999999',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}>
          MN7002NI · International Business Strategy with Simulation
        </div>
        <h1 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '42px',
          fontWeight: 400,
          color: '#1A1A1A',
          lineHeight: 1.15,
          margin: '0 0 16px 0',
          letterSpacing: '-0.02em',
        }}>
          Mobilé Inc.<br />
          <span style={{ color: '#555555', fontWeight: 300 }}>Strategic Analysis 2025</span>
        </h1>
        <p style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '15px',
          color: '#555555',
          maxWidth: '560px',
          lineHeight: 1.7,
        }}>
          {executiveSummary.situation || 'A US smartphone manufacturer navigating three simultaneous technology waves — 4G defence, 5G launch urgency, and AI-device R&D — while constrained by a $90M cash reserve floor.'}
        </p>
      </div>

      {/* Three wave status */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '11px',
          color: '#999999',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '14px',
        }}>
          Strategic Posture — Three Technology Waves
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {waveCards.map(w => (
            <div key={w.label} style={{
              background: '#FFFFFF',
              border: '1px solid #E5E5E0',
              borderRadius: '6px',
              padding: '18px',
              borderTop: `3px solid ${w.color}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: w.color, display: 'inline-block' }} />
                <span style={{
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '11px',
                  color: w.color,
                  fontWeight: 500,
                }}>
                  {w.status}
                </span>
              </div>
              <div style={{
                fontFamily: 'Newsreader, Georgia, serif',
                fontSize: '15px',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '4px',
              }}>
                {w.label}
              </div>
              <div style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '12px',
                color: '#999999',
              }}>
                {w.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '40px' }}>
        {metrics.map(m => (
          <div key={m.label} style={{
            background: '#FFFFFF',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            padding: '18px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '11px',
              color: '#999999',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '10px',
            }}>
              {m.label}
            </div>
            <div style={{
              fontFamily: m.mono ? 'IBM Plex Mono, monospace' : 'Newsreader, Georgia, serif',
              fontSize: m.mono ? '20px' : '18px',
              fontWeight: m.mono ? 500 : 400,
              color: m.urgent ? '#C0392B' : '#1A1A1A',
              marginBottom: '4px',
            }}>
              {m.value}
            </div>
            <div style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '11px',
              color: '#999999',
            }}>
              {m.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Three wave timeline */}
      <div style={{ marginBottom: '40px' }}>
        <ThreeWaveTimeline />
      </div>

      {/* Task cards */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '11px',
          color: '#999999',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '14px',
        }}>
          Assignment Tasks
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {taskCards.map(card => (
            <Link key={card.path} to={card.path} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E5E0',
                  borderRadius: '6px',
                  padding: '22px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'background 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F7F7F5' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    color: '#999999',
                  }}>
                    Task {card.number}
                  </span>
                  <span style={{
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontSize: '11px',
                    color: '#999999',
                  }}>
                    {card.marks}
                  </span>
                </div>
                <div style={{
                  fontFamily: 'Newsreader, Georgia, serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  marginBottom: '6px',
                  borderLeft: `3px solid ${card.color}`,
                  paddingLeft: '10px',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '12px',
                  color: '#555555',
                  marginBottom: '14px',
                  lineHeight: 1.5,
                }}>
                  {card.description}
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {card.items.map(item => (
                    <span key={item} style={{
                      fontFamily: 'Outfit, system-ui, sans-serif',
                      fontSize: '11px',
                      color: '#999999',
                      border: '1px solid #E5E5E0',
                      padding: '2px 8px',
                      borderRadius: '3px',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Market comparison */}
      <MarketComparison />

      {/* Note */}
      <div style={{
        marginTop: '28px',
        padding: '14px 18px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '6px',
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: '12px',
        color: '#999999',
        lineHeight: 1.6,
      }}>
        <span style={{ color: '#555555' }}>Note: </span>
        Content marked [CONTENT] is placeholder data awaiting integration from the content-writer agent. Core structural data (revenue $4.8B, cash floor $90M, market shares, plant costs) is drawn directly from the case study.
      </div>
    </div>
  )
}
