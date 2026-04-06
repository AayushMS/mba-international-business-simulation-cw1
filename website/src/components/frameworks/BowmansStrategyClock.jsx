import { useState } from 'react'
import { bowmansStrategyClock } from '../../data/task2FrameworksData'

const WAVE_COLORS = { '4g': '#3B6FD4', '5g': '#2B8A5E', 'ai': '#7B5EA7' }

export default function BowmansStrategyClock() {
  const [activePosition, setActivePosition] = useState(null)
  const data = bowmansStrategyClock

  const clockRadius = 120
  const centerX = 150
  const centerY = 150

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Bowman's Strategy Clock
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Competitive positioning across price and perceived benefit — Mobilé's migration path through three waves
        </div>
      </div>

      <div className="framework-grid-2" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '24px' }}>
        {/* Clock visualisation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width="300" height="300" viewBox="0 0 300 300">
            {/* Outer circle */}
            <circle cx={centerX} cy={centerY} r={clockRadius} fill="none" stroke="#E5E5E0" strokeWidth="1" />
            <circle cx={centerX} cy={centerY} r={clockRadius * 0.6} fill="none" stroke="#E5E5E0" strokeWidth="0.5" strokeDasharray="4 4" />

            {/* Axis labels */}
            <text x={centerX} y={18} textAnchor="middle" style={{ fontSize: '10px', fontFamily: 'IBM Plex Mono, monospace', fill: '#999999' }}>HIGH BENEFIT</text>
            <text x={centerX} y={292} textAnchor="middle" style={{ fontSize: '10px', fontFamily: 'IBM Plex Mono, monospace', fill: '#999999' }}>LOW BENEFIT</text>
            <text x={12} y={centerY + 4} textAnchor="start" style={{ fontSize: '10px', fontFamily: 'IBM Plex Mono, monospace', fill: '#999999' }}>LOW</text>
            <text x={288} y={centerY + 4} textAnchor="end" style={{ fontSize: '10px', fontFamily: 'IBM Plex Mono, monospace', fill: '#999999' }}>HIGH</text>
            <text x={12} y={centerY + 14} textAnchor="start" style={{ fontSize: '10px', fontFamily: 'IBM Plex Mono, monospace', fill: '#999999' }}>PRICE</text>
            <text x={288} y={centerY + 14} textAnchor="end" style={{ fontSize: '10px', fontFamily: 'IBM Plex Mono, monospace', fill: '#999999' }}>PRICE</text>

            {/* Position markers */}
            {data.positions.map(pos => {
              const angleRad = (pos.angle - 90) * (Math.PI / 180)
              const x = centerX + clockRadius * 0.82 * Math.cos(angleRad)
              const y = centerY + clockRadius * 0.82 * Math.sin(angleRad)
              const isActive = activePosition === pos.id
              const isMobilePosition = data.mobilePositions.some(
                mp => mp.currentPosition === pos.id || mp.targetPosition === pos.id
              )
              return (
                <g key={pos.id} onClick={() => setActivePosition(isActive ? null : pos.id)} style={{ cursor: 'pointer' }}>
                  <circle
                    cx={x} cy={y} r={isMobilePosition ? 16 : 12}
                    fill={isMobilePosition ? '#F7F7F5' : '#FFFFFF'}
                    stroke={isMobilePosition ? '#1A1A1A' : '#E5E5E0'}
                    strokeWidth={isMobilePosition ? 1.5 : 1}
                  />
                  <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', fill: '#1A1A1A', fontWeight: isMobilePosition ? 600 : 400 }}>
                    {pos.id}
                  </text>
                </g>
              )
            })}

            {/* Mobilé wave markers */}
            {data.mobilePositions.map((mp, i) => {
              const posId = mp.currentPosition || mp.targetPosition
              const pos = data.positions.find(p => p.id === posId)
              if (!pos) return null
              const angleRad = (pos.angle - 90) * (Math.PI / 180)
              const markerR = clockRadius * 0.55
              const x = centerX + markerR * Math.cos(angleRad)
              const y = centerY + markerR * Math.sin(angleRad)
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r={8} fill={mp.color} opacity={0.9} />
                  <text x={x} y={y + 3} textAnchor="middle" style={{ fontSize: '7px', fontFamily: 'IBM Plex Mono, monospace', fill: '#FFFFFF', fontWeight: 600 }}>
                    {mp.waveId.toUpperCase()}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Mobilé positions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {data.mobilePositions.map((mp, i) => {
            const isActive = activePosition === (mp.currentPosition || mp.targetPosition)
            return (
              <div
                key={i}
                onClick={() => setActivePosition(isActive ? null : (mp.currentPosition || mp.targetPosition))}
                style={{
                  background: isActive ? '#F0F0ED' : '#FFFFFF',
                  border: '1px solid #E5E5E0',
                  borderLeft: `3px solid ${mp.color}`,
                  borderRadius: '6px', padding: '12px',
                  cursor: 'pointer', transition: 'background 0.15s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A' }}>
                    {mp.wave}
                  </span>
                  <span style={{
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                    color: '#FFFFFF', background: mp.color, padding: '2px 8px',
                    borderRadius: '10px',
                  }}>
                    {mp.positionLabel}
                  </span>
                </div>

                {isActive && (
                  <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.6 }}>
                      {mp.reasoning}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '4px' }}>
                      <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px' }}>
                        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>Price Level</div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555' }}>{mp.priceLevel}</div>
                      </div>
                      <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px' }}>
                        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>Perceived Benefit</div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555' }}>{mp.perceivedBenefit}</div>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '7px 10px' }}>
                      <span style={{ color: '#999999' }}>Evidence: </span>{mp.evidence}
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#1A1A1A', background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: `3px solid ${mp.color}`, borderRadius: '4px', padding: '7px 10px' }}>
                      <span style={{ color: '#999999' }}>Strategic Implication: </span>{mp.strategicImplication}
                    </div>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>
                      SWOT feed → {mp.swotFeed}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
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

      {/* Position legend */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
        {data.positions.map(pos => (
          <div key={pos.id} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {pos.id}
            </span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#999999' }}>{pos.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
