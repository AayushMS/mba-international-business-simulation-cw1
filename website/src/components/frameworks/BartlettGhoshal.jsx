import { useState } from 'react'
import { bartlettGhoshal } from '../../data/task2FrameworksData'

export default function BartlettGhoshal() {
  const [activeView, setActiveView] = useState('matrix')
  const data = bartlettGhoshal

  const quadrantPositions = {
    global: { gridRow: 1, gridCol: 1 },
    transnational: { gridRow: 1, gridCol: 2 },
    international: { gridRow: 2, gridCol: 1 },
    multidomestic: { gridRow: 2, gridCol: 2 },
  }

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
            Bartlett & Ghoshal Integration-Responsiveness Framework
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
            Global integration vs local responsiveness — Mobilé's transition from Global to Transnational strategy
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0' }}>
          {[
            { id: 'matrix', label: 'IR Matrix' },
            { id: 'markets', label: 'Market Profiles' },
            { id: 'progression', label: 'Wave Progression' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              style={{
                padding: '4px 14px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                background: 'transparent', border: 'none',
                borderBottom: activeView === tab.id ? '2px solid #1A1A1A' : '2px solid transparent',
                color: activeView === tab.id ? '#1A1A1A' : '#999999',
                cursor: 'pointer', textTransform: 'uppercase', marginBottom: '-1px',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeView === 'matrix' && (
        <div>
          {/* IR Matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gridTemplateRows: 'auto 1fr 1fr', gap: '0', maxWidth: '700px', margin: '0 auto 20px' }}>
            <div />
            <div style={{ textAlign: 'center', padding: '8px', borderBottom: '2px solid #E5E5E0' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase' }}>Low Responsiveness</div>
            </div>
            <div style={{ textAlign: 'center', padding: '8px', borderBottom: '2px solid #E5E5E0' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase' }}>High Responsiveness</div>
            </div>

            {/* High integration row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid #E5E5E0', padding: '8px' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>High Integration</div>
            </div>
            {data.quadrants.filter(q => q.integration === 'High').map(q => {
              const isCurrent = q.id === data.mobileAnalysis.currentStrategy.type
              const isTarget = q.id === data.mobileAnalysis.targetStrategy.type
              return (
                <div
                  key={q.id}
                  style={{
                    background: isTarget ? `${q.color}10` : isCurrent ? `${q.color}08` : '#F7F7F5',
                    border: isTarget ? `2px solid ${q.color}` : '1px solid #E5E5E0',
                    padding: '16px', position: 'relative', minHeight: '140px',
                  }}
                >
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: q.color, marginBottom: '4px' }}>
                    {q.label}
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.5, marginBottom: '8px' }}>
                    {q.description}
                  </div>
                  {isCurrent && (
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#FFFFFF', background: q.color, padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                      CURRENT (4G)
                    </div>
                  )}
                  {isTarget && (
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#FFFFFF', background: q.color, padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                      TARGET (5G/AI)
                    </div>
                  )}
                </div>
              )
            })}

            {/* Low integration row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid #E5E5E0', padding: '8px' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Low Integration</div>
            </div>
            {data.quadrants.filter(q => q.integration === 'Low').map(q => (
              <div
                key={q.id}
                style={{
                  background: '#F7F7F5',
                  border: '1px solid #E5E5E0',
                  padding: '16px', minHeight: '140px',
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: q.color, marginBottom: '4px' }}>
                  {q.label}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.5 }}>
                  {q.description}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic shift explanation */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '12px', alignItems: 'stretch' }}>
            <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #3B6FD4', borderRadius: '4px', padding: '14px' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#3B6FD4', marginBottom: '6px', textTransform: 'uppercase' }}>Current: Global Strategy</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5, marginBottom: '8px' }}>
                {data.mobileAnalysis.currentStrategy.reasoning}
              </div>
              {data.mobileAnalysis.currentStrategy.limitations.map((l, i) => (
                <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '3px' }}>
                  <span style={{ color: '#C0392B', flexShrink: 0 }}>-</span> {l}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '16px', color: '#999999' }}>→</span>
            </div>
            <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #2B8A5E', borderRadius: '4px', padding: '14px' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#2B8A5E', marginBottom: '6px', textTransform: 'uppercase' }}>Target: Transnational Strategy</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5, marginBottom: '8px' }}>
                {data.mobileAnalysis.targetStrategy.reasoning}
              </div>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', marginBottom: '4px' }}>Integration drivers:</div>
              {data.mobileAnalysis.targetStrategy.integrationDrivers.map((d, i) => (
                <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '3px' }}>
                  <span style={{ color: '#2B8A5E', flexShrink: 0 }}>+</span> {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeView === 'markets' && (
        <div className="market-profiles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {data.marketProfiles.map(market => (
            <div key={market.market} style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '6px', padding: '16px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: 500, color: '#1A1A1A', marginBottom: '8px' }}>
                {market.market}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', background: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', border: '1px solid #E5E5E0' }}>
                  {market.size}
                </span>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', background: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', border: '1px solid #E5E5E0' }}>
                  {market.growth} growth
                </span>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>Integration Need</span>
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#1A1A1A' }}>{market.integrationNeed}</span>
                </div>
                <div style={{ height: '3px', background: '#E5E5E0', borderRadius: '2px' }}>
                  <div style={{
                    height: '100%', borderRadius: '2px',
                    background: '#3B6FD4',
                    width: market.integrationNeed === 'High' ? '80%' : market.integrationNeed === 'Medium' ? '50%' : '25%',
                  }} />
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>Responsiveness Need</span>
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#1A1A1A' }}>{market.responsivenessNeed}</span>
                </div>
                <div style={{ height: '3px', background: '#E5E5E0', borderRadius: '2px' }}>
                  <div style={{
                    height: '100%', borderRadius: '2px',
                    background: '#2B8A5E',
                    width: market.responsivenessNeed === 'Very High' ? '95%' : market.responsivenessNeed === 'High' ? '75%' : '45%',
                  }} />
                </div>
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.5, marginBottom: '6px' }}>
                <span style={{ color: '#999999' }}>Key Drivers: </span>{market.keyDrivers}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#1A1A1A', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px', lineHeight: 1.5 }}>
                <span style={{ color: '#999999' }}>Strategy: </span>{market.strategy}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeView === 'progression' && (
        <div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'stretch' }}>
            {data.mobileAnalysis.waveProgression.map((wp, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {i > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '-18px', top: '50%', transform: 'translateY(-50%)' }}>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '16px', color: '#999999' }}>→</span>
                  </div>
                )}
                <div style={{
                  background: '#F7F7F5', border: '1px solid #E5E5E0',
                  borderTop: `3px solid ${wp.color}`,
                  borderRadius: '6px', padding: '16px', flex: 1, position: 'relative',
                }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: wp.color, marginBottom: '4px' }}>
                    {wp.wave}
                  </div>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#FFFFFF',
                    background: wp.color, padding: '2px 8px', borderRadius: '4px',
                    display: 'inline-block', marginBottom: '8px', textTransform: 'capitalize',
                  }}>
                    {wp.strategy} Strategy
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.6 }}>
                    {wp.reasoning}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow between cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '12px' }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#3B6FD4' }}>Global (standardised)</span>
            <span style={{ color: '#999999' }}>→</span>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#2B8A5E' }}>Transnational (balanced)</span>
            <span style={{ color: '#999999' }}>→</span>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#7B5EA7' }}>Transnational (adaptive)</span>
          </div>
        </div>
      )}

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
