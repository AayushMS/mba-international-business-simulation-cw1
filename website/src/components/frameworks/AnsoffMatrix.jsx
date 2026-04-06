import { useState } from 'react'
import { ansoffMatrix } from '../../data/task2FrameworksData'

const RISK_COLORS = { Low: '#2B8A5E', Medium: '#F59E0B', High: '#C0392B' }

export default function AnsoffMatrix() {
  const [activeQuadrant, setActiveQuadrant] = useState(null)
  const data = ansoffMatrix

  const gridPositions = {
    'market-penetration': { row: 1, col: 1 },
    'product-development': { row: 1, col: 2 },
    'market-development': { row: 2, col: 1 },
    'diversification': { row: 2, col: 2 },
  }

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Ansoff Growth Matrix
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Product–Market growth directions — Mobilé's three-wave strategy spans all four quadrants simultaneously
        </div>
      </div>

      {/* Matrix Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gridTemplateRows: 'auto 1fr 1fr', gap: '0', maxWidth: '700px', margin: '0 auto' }}>
        {/* Corner */}
        <div />
        {/* Column headers */}
        <div style={{ textAlign: 'center', padding: '8px', borderBottom: '2px solid #E5E5E0' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase' }}>Existing Products</div>
        </div>
        <div style={{ textAlign: 'center', padding: '8px', borderBottom: '2px solid #E5E5E0' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase' }}>New Products</div>
        </div>

        {/* Row 1 header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid #E5E5E0', padding: '8px' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Existing Markets</div>
        </div>
        {/* Market Penetration */}
        {data.quadrants.filter(q => gridPositions[q.id]?.row === 1).map(q => {
          const isActive = activeQuadrant === q.id
          return (
            <div
              key={q.id}
              onClick={() => setActiveQuadrant(isActive ? null : q.id)}
              style={{
                background: isActive ? '#F0F0ED' : '#F7F7F5',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${q.color}`,
                padding: '16px', cursor: 'pointer',
                transition: 'background 0.15s',
                minHeight: '120px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A' }}>{q.label}</span>
                <span style={{
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', fontWeight: 500,
                  color: RISK_COLORS[q.risk], background: `${RISK_COLORS[q.risk]}15`,
                  padding: '2px 6px', borderRadius: '4px',
                }}>
                  {q.risk} Risk
                </span>
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', marginBottom: '8px' }}>{q.subtitle}</div>
              {q.strategies.map((s, i) => (
                <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5, marginBottom: '4px' }}>
                  <span style={{ color: q.color, fontWeight: 500 }}>{s.strategy}</span>
                </div>
              ))}
              {isActive && q.strategies.map((s, i) => (
                <div key={`detail-${i}`} style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.6 }}>{s.description}</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '7px 10px' }}>
                    <span style={{ color: '#999999' }}>Evidence: </span>{s.evidence}
                  </div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginTop: '2px' }}>
                    Actions:
                  </div>
                  {s.actions.map((a, j) => (
                    <div key={j} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', display: 'flex', gap: '6px', paddingLeft: '4px' }}>
                      <span style={{ color: q.color, flexShrink: 0 }}>•</span> {a}
                    </div>
                  ))}
                </div>
              ))}
              {isActive && (
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginTop: '8px' }}>
                  SWOT feed → {q.swotFeed}
                </div>
              )}
            </div>
          )
        })}

        {/* Row 2 header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid #E5E5E0', padding: '8px' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>New Markets</div>
        </div>
        {/* Market Development & Diversification */}
        {data.quadrants.filter(q => gridPositions[q.id]?.row === 2).map(q => {
          const isActive = activeQuadrant === q.id
          return (
            <div
              key={q.id}
              onClick={() => setActiveQuadrant(isActive ? null : q.id)}
              style={{
                background: isActive ? '#F0F0ED' : '#F7F7F5',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${q.color}`,
                padding: '16px', cursor: 'pointer',
                transition: 'background 0.15s',
                minHeight: '120px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A' }}>{q.label}</span>
                <span style={{
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', fontWeight: 500,
                  color: RISK_COLORS[q.risk], background: `${RISK_COLORS[q.risk]}15`,
                  padding: '2px 6px', borderRadius: '4px',
                }}>
                  {q.risk} Risk
                </span>
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', marginBottom: '8px' }}>{q.subtitle}</div>
              {q.strategies.map((s, i) => (
                <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5, marginBottom: '4px' }}>
                  <span style={{ color: q.color, fontWeight: 500 }}>{s.strategy}</span>
                </div>
              ))}
              {isActive && q.strategies.map((s, i) => (
                <div key={`detail-${i}`} style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.6 }}>{s.description}</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '7px 10px' }}>
                    <span style={{ color: '#999999' }}>Evidence: </span>{s.evidence}
                  </div>
                  {s.actions.map((a, j) => (
                    <div key={j} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', display: 'flex', gap: '6px', paddingLeft: '4px' }}>
                      <span style={{ color: q.color, flexShrink: 0 }}>•</span> {a}
                    </div>
                  ))}
                </div>
              ))}
              {isActive && (
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginTop: '8px' }}>
                  SWOT feed → {q.swotFeed}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Risk arrow */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#2B8A5E' }}>LOW RISK</span>
        <div style={{ width: '200px', height: '3px', background: 'linear-gradient(to right, #2B8A5E, #F59E0B, #C0392B)', borderRadius: '2px' }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B' }}>HIGH RISK</span>
      </div>

      {/* Key findings */}
      <div className="framework-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '16px' }}>
        {Object.entries(data.keyFindings).map(([key, value]) => (
          <div key={key} style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '14px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '6px', textTransform: 'uppercase' }}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5 }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
