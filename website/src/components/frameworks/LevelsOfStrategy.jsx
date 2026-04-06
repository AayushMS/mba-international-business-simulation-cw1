import { useState } from 'react'
import { levelsOfStrategy } from '../../data/task2FrameworksData'

export default function LevelsOfStrategy() {
  const [activeLevel, setActiveLevel] = useState(null)
  const data = levelsOfStrategy

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Levels of Strategy
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          How Mobilé's three-wave decisions cascade from corporate portfolio to operational execution
        </div>
      </div>

      {/* Pyramid visualisation */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '20px' }}>
        {data.levels.map((level, i) => {
          const isActive = activeLevel === i
          const widthPercent = 40 + (i * 20)
          return (
            <div
              key={level.level}
              onClick={() => setActiveLevel(isActive ? null : i)}
              style={{
                width: `${widthPercent}%`, minWidth: '200px',
                background: isActive ? '#F0F0ED' : '#F7F7F5',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${level.color}`,
                borderRadius: '4px', padding: '12px 16px',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: level.color }}>
                    {level.level}
                  </span>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', marginTop: '2px' }}>
                    {level.question}
                  </div>
                </div>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>
                  {isActive ? '−' : '+'}
                </span>
              </div>

              {isActive && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Mobilé Application
                    </div>
                    {level.mobileApplication.map((app, j) => (
                      <div key={j} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '3px', lineHeight: 1.5 }}>
                        <span style={{ color: level.color, flexShrink: 0 }}>•</span> {app}
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '10px' }}>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Key Decisions at This Level
                    </div>
                    {level.decisionExamples.map((d, j) => (
                      <div key={j} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '3px' }}>
                        <span style={{ color: level.color, flexShrink: 0 }}>→</span> {d}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Key finding */}
      <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #7B5EA7', borderRadius: '4px', padding: '14px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#7B5EA7', marginBottom: '6px', textTransform: 'uppercase' }}>
          Key Insight
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5 }}>
          {data.keyFinding}
        </div>
      </div>
    </div>
  )
}
