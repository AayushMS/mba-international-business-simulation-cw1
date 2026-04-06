import { useState } from 'react'
import { valueChain } from '../../data/caseStudyData'

const WAVE_COLORS = { '4g': '#3B6FD4', '5g': '#2B8A5E', 'ai': '#7B5EA7' }

function ActivityBlock({ activity, isSelected, onSelect }) {
  const color = WAVE_COLORS[activity.wave] || '#999999'
  const selected = isSelected === activity.id
  return (
    <div
      onClick={() => onSelect(selected ? null : activity.id)}
      style={{
        flex: 1, minWidth: '100px',
        background: selected ? '#F0F0ED' : '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '6px', padding: '12px 10px',
        cursor: 'pointer', textAlign: 'center',
        transition: 'background 0.15s',
        borderTop: `3px solid ${color}`,
      }}
    >
      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 500, color: '#1A1A1A', lineHeight: 1.3 }}>
        {activity.name}
      </div>
      <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color, textTransform: 'uppercase' }}>
          {activity.wave}
        </span>
      </div>
    </div>
  )
}

export default function ValueChainDiagram() {
  const [selectedId, setSelectedId] = useState(null)

  const selectedActivity = selectedId
    ? [...valueChain.primary, ...valueChain.support].find(a => a.id === selectedId)
    : null

  return (
    <div id="value-chain" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Value Chain Analysis
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Click any activity to see strengths, weaknesses &amp; wave linkage
        </div>
      </div>

      {/* Support activities */}
      <div style={{ marginBottom: '8px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Support Activities
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
          {valueChain.support.map(activity => (
            <div
              key={activity.id}
              onClick={() => setSelectedId(selectedId === activity.id ? null : activity.id)}
              style={{
                background: selectedId === activity.id ? '#F0F0ED' : '#F7F7F5',
                border: '1px solid #E5E5E0',
                borderRadius: '6px', padding: '10px',
                cursor: 'pointer', textAlign: 'center',
                transition: 'background 0.15s',
              }}
            >
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 500, color: '#1A1A1A' }}>
                {activity.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary activities */}
      <div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Primary Activities
        </div>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'stretch' }}>
          {valueChain.primary.map((activity, i) => (
            <div key={activity.id} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ActivityBlock activity={activity} isSelected={selectedId} onSelect={setSelectedId} />
              {i < valueChain.primary.length - 1 && (
                <div style={{ color: '#D0D0C8', fontSize: '16px', flexShrink: 0 }}>→</div>
              )}
            </div>
          ))}

          {/* Margin indicator */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '44px', flexShrink: 0,
            background: '#F7F7F5',
            border: '1px solid #E5E5E0', borderRadius: '6px',
            color: '#2B8A5E', fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px',
            writingMode: 'vertical-rl', textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Margin
          </div>
        </div>
      </div>

      {/* Detail panel */}
      {selectedActivity && (
        <div style={{
          marginTop: '16px',
          background: '#F7F7F5', border: '1px solid #E5E5E0',
          borderRadius: '6px', padding: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: '16px', fontWeight: 600, color: '#1A1A1A' }}>
              {selectedActivity.name}
            </div>
            {selectedActivity.wave && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: WAVE_COLORS[selectedActivity.wave] || '#999999', display: 'inline-block' }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: WAVE_COLORS[selectedActivity.wave] || '#999999', textTransform: 'uppercase' }}>
                  {selectedActivity.wave}
                </span>
              </span>
            )}
          </div>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555555', marginBottom: '12px', lineHeight: 1.5 }}>
            {selectedActivity.description}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {selectedActivity.strengths && (
              <div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#2B8A5E', marginBottom: '6px', textTransform: 'uppercase' }}>Strengths</div>
                {selectedActivity.strengths.map((s, i) => (
                  <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#2B8A5E', flexShrink: 0 }}>+</span> {s}
                  </div>
                ))}
              </div>
            )}
            {selectedActivity.weaknesses && (
              <div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', marginBottom: '6px', textTransform: 'uppercase' }}>Weaknesses</div>
                {selectedActivity.weaknesses.map((w, i) => (
                  <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#C0392B', flexShrink: 0 }}>–</span> {w}
                  </div>
                ))}
              </div>
            )}
            {selectedActivity.notes && (
              <div style={{ gridColumn: '1 / -1' }}>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '6px', textTransform: 'uppercase' }}>Notes</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>{selectedActivity.notes}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
