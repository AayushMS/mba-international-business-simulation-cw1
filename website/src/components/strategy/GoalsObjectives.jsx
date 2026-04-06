import { useState } from 'react'
import { strategyProcess } from '../../data/caseStudyData'

const WAVE_COLORS = { '4g': '#3B6FD4', '5g': '#2B8A5E', 'ai': '#7B5EA7' }
const WAVE_LABELS = { '4g': '4G LTE', '5g': '5G', 'ai': 'AI Devices' }

function GoalCard({ goal, index }) {
  const color = WAVE_COLORS[goal.wave] || '#999999'
  return (
    <div style={{
      background: '#FFFFFF', border: '1px solid #E5E5E0',
      borderRadius: '8px', padding: '18px',
      borderTop: `3px solid ${color}`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, display: 'inline-block' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color, textTransform: 'uppercase' }}>
            {WAVE_LABELS[goal.wave] || goal.wave}
          </span>
        </span>
        {goal.timeframe && (
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginLeft: 'auto' }}>
            {goal.timeframe}
          </span>
        )}
      </div>
      <div style={{ fontFamily: 'Newsreader, serif', fontSize: '16px', fontWeight: 600, color: '#1A1A1A', marginBottom: '6px', lineHeight: 1.3 }}>
        {goal.title}
      </div>
      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555555', lineHeight: 1.5, marginBottom: goal.keyActions?.length ? '12px' : 0 }}>
        {goal.description}
      </div>

      {goal.rationale && (
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', lineHeight: 1.4, marginBottom: '10px', fontStyle: 'italic' }}>
          {goal.rationale}
        </div>
      )}

      {goal.keyActions?.length > 0 && (
        <div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
            Key Actions
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {goal.keyActions.map((action, j) => (
              <div key={j} style={{ display: 'flex', gap: '6px', fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
                <span style={{ color, flexShrink: 0 }}>›</span>
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {goal.successMetric && goal.successMetric !== goal.timeframe && (
        <div style={{ marginTop: '10px', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '6px 10px' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '2px' }}>Success Metric</div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: color, lineHeight: 1.4 }}>{goal.successMetric}</div>
        </div>
      )}
    </div>
  )
}

export default function GoalsObjectives() {
  const [activeTab, setActiveTab] = useState('goals')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Tab switcher — underline style */}
      <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0', width: 'fit-content' }}>
        {[
          { id: 'goals', label: 'Strategic Goals' },
          { id: 'smart', label: 'SMART Objectives' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '7px 18px',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid #1A1A1A' : '2px solid transparent',
              color: activeTab === tab.id ? '#1A1A1A' : '#999999',
              cursor: 'pointer',
              marginBottom: '-1px',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'goals' ? (
        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '14px' }}>
            Mobilé Inc. strategic goals — organised by technology wave priority
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {strategyProcess.goals.map((goal, i) => (
              <GoalCard key={goal.id} goal={goal} index={i} />
            ))}
          </div>
        </div>
      ) : (
        <div id="smart">
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '14px' }}>
            SMART objectives — Specific, Measurable, Achievable, Relevant, Time-bound
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {strategyProcess.smartObjectives.map((obj, i) => {
              const color = WAVE_COLORS[obj.wave] || '#999999'
              return (
                <div key={obj.id} style={{
                  background: '#FFFFFF', border: '1px solid #E5E5E0',
                  borderLeft: `3px solid ${color}`,
                  borderRadius: '6px', padding: '16px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#999999' }}>
                      OBJ {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color, textTransform: 'uppercase' }}>
                        {WAVE_LABELS[obj.wave] || obj.wave}
                      </span>
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                    {[
                      { key: 'specific', label: 'S', full: 'Specific', value: obj.specific },
                      { key: 'measurable', label: 'M', full: 'Measurable', value: obj.measurable },
                      { key: 'achievable', label: 'A', full: 'Achievable', value: obj.achievable },
                      { key: 'relevant', label: 'R', full: 'Relevant', value: obj.relevant },
                      { key: 'timeBound', label: 'T', full: 'Time-Bound', value: obj.timeBound },
                    ].map(criterion => (
                      <div key={criterion.key} style={{
                        background: '#F7F7F5', border: '1px solid #E5E5E0',
                        borderRadius: '5px', padding: '10px',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                          <span style={{
                            fontFamily: 'Newsreader, serif', fontSize: '14px', fontWeight: 700, color,
                          }}>
                            {criterion.label}
                          </span>
                          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999' }}>
                            {criterion.full}
                          </span>
                        </div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
                          {criterion.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
