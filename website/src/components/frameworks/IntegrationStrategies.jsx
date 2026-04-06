import { useState } from 'react'
import { integrationStrategies } from '../../data/task2FrameworksData'

const WAVE_COLORS = { '5g': '#2B8A5E', 'ai': '#7B5EA7', 'all': '#999999' }

export default function IntegrationStrategies() {
  const [activeType, setActiveType] = useState(null)
  const data = integrationStrategies

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Integration Strategies
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Horizontal and vertical integration decisions across Mobilé's three technology waves
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {data.types.map(type => {
          const isActive = activeType === type.type
          return (
            <div
              key={type.type}
              onClick={() => setActiveType(isActive ? null : type.type)}
              style={{
                background: isActive ? '#F0F0ED' : '#FFFFFF',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${type.color}`,
                borderRadius: '6px', padding: '14px',
                cursor: 'pointer', transition: 'background 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A' }}>
                    {type.type}
                  </span>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', marginTop: '2px' }}>
                    {type.description}
                  </div>
                </div>
                <span style={{
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                  color: type.color, background: `${type.color}15`,
                  padding: '2px 8px', borderRadius: '4px',
                }}>
                  {type.mobileDecisions.length} decision{type.mobileDecisions.length !== 1 ? 's' : ''}
                </span>
              </div>

              {isActive && (
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {type.mobileDecisions.map((decision, i) => {
                    const waveColor = WAVE_COLORS[decision.wave] || '#999999'
                    return (
                      <div key={i} style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A' }}>
                            {decision.decision}
                          </span>
                          <span style={{
                            fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                            color: '#FFFFFF', background: waveColor, padding: '2px 6px', borderRadius: '10px',
                          }}>
                            {decision.wave.toUpperCase()}
                          </span>
                        </div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.6, marginBottom: '6px' }}>
                          {decision.explanation}
                        </div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#FFFFFF', border: '1px solid #E5E5E0', borderLeft: `3px solid ${waveColor}`, borderRadius: '4px', padding: '7px 10px' }}>
                          <span style={{ color: '#999999' }}>Trade-off: </span>{decision.tradeoff}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Key finding */}
      <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #3B6FD4', borderRadius: '4px', padding: '14px', marginTop: '16px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#3B6FD4', marginBottom: '6px', textTransform: 'uppercase' }}>
          Key Insight
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5 }}>
          {data.keyFinding}
        </div>
      </div>
    </div>
  )
}
