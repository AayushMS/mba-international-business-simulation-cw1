import { useState } from 'react'
import { swotData } from '../../data/caseStudyData'

const WAVE_COLORS = {
  '4g': '#3B6FD4',
  '5g': '#2B8A5E',
  'ai': '#7B5EA7',
  'all': '#999999',
}

const QUADRANT_CONFIG = {
  strengths: { label: 'Strengths', color: '#2B8A5E', icon: 'S', corner: 'Internal Positive' },
  weaknesses: { label: 'Weaknesses', color: '#C0392B', icon: 'W', corner: 'Internal Negative' },
  opportunities: { label: 'Opportunities', color: '#3B6FD4', icon: 'O', corner: 'External Positive' },
  threats: { label: 'Threats', color: '#555555', icon: 'T', corner: 'External Negative' },
}

function SWOTItem({ item, color, onSelect, isSelected }) {
  const waveColor = WAVE_COLORS[item.wave] || '#999999'

  return (
    <div
      onClick={() => onSelect()}
      style={{
        padding: '10px 12px', borderRadius: '4px',
        background: isSelected ? '#F0F0ED' : '#FFFFFF',
        border: '1px solid #E5E5E0',
        cursor: 'pointer', transition: 'background 0.15s',
        marginBottom: '6px',
        borderLeft: isSelected ? `3px solid ${color}` : '1px solid #E5E5E0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0, marginTop: '2px' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: waveColor, display: 'inline-block' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: waveColor, textTransform: 'uppercase' }}>
            {item.wave === 'all' ? '∀' : item.wave}
          </span>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 500, color: '#1A1A1A', lineHeight: 1.4, marginBottom: '2px' }}>
            {item.text}
          </div>
          {!isSelected && item.body && (
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', lineHeight: 1.4, marginTop: '4px' }}>
              {item.body.length > 120 ? item.body.slice(0, 120) + '…' : item.body}
            </div>
          )}

          {isSelected && (
            <div style={{ marginTop: '8px' }}>
              {item.body && (
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5, marginBottom: '8px' }}>
                  {item.body}
                </div>
              )}
              {item.evidenceDetail && (
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '6px 8px', marginBottom: '6px' }}>
                  <span style={{ color: '#999999' }}>Case evidence → </span>
                  <span>{item.evidenceDetail}</span>
                </div>
              )}
              {item.evidence && !item.evidenceDetail && (
                <div style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '11px',
                  color: '#555555', background: '#F7F7F5',
                  border: '1px solid #E5E5E0', borderRadius: '4px',
                  padding: '6px 8px', marginBottom: '6px',
                }}>
                  <span style={{ color: '#999999' }}>Evidence → </span>
                  <span>{item.evidence}</span>
                </div>
              )}
              {item.strategicImplication && (
                <div style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '11px',
                  color: '#1A1A1A', background: '#F7F7F5',
                  border: '1px solid #E5E5E0', borderLeft: `3px solid ${color}`,
                  borderRadius: '4px',
                  padding: '6px 8px',
                }}>
                  <span style={{ color: '#999999' }}>Implication → </span>
                  {item.strategicImplication}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SWOTMatrix() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [waveFilter, setWaveFilter] = useState('all')

  const filterItems = (items) => {
    if (waveFilter === 'all') return items
    return items.filter(item => item.wave === waveFilter || item.wave === 'all')
  }

  return (
    <div id="swot" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
            SWOT Synthesis
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
            Click any point to see evidence trail and strategic implication
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0' }}>
          {[
            { id: 'all', label: 'All' },
            { id: '4g', label: '4G' },
            { id: '5g', label: '5G' },
            { id: 'ai', label: 'AI' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setWaveFilter(f.id)}
              style={{
                padding: '4px 12px',
                fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                background: 'transparent',
                border: 'none',
                borderBottom: waveFilter === f.id ? `2px solid ${WAVE_COLORS[f.id] || '#1A1A1A'}` : '2px solid transparent',
                color: waveFilter === f.id ? (WAVE_COLORS[f.id] || '#1A1A1A') : '#999999',
                cursor: 'pointer', textTransform: 'uppercase',
                marginBottom: '-1px',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Axis labels */}
      <div className="framework-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '0' }}>
        <div style={{ textAlign: 'center', padding: '6px', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRight: 'none', borderBottom: 'none', borderRadius: '4px 0 0 0' }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Internal
          </span>
        </div>
        <div style={{ textAlign: 'center', padding: '6px', background: '#F7F7F5', border: '1px solid #E5E5E0', borderBottom: 'none', borderRadius: '0 4px 0 0' }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            External
          </span>
        </div>
      </div>

      {/* 2x2 Grid */}
      <div className="framework-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #E5E5E0', borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
        {Object.entries(QUADRANT_CONFIG).map(([key, config]) => {
          const items = filterItems(swotData[key] || [])
          return (
            <div
              key={key}
              style={{
                padding: '16px',
                borderRight: key === 'strengths' || key === 'opportunities' ? '1px solid #E5E5E0' : 'none',
                borderBottom: key === 'strengths' || key === 'weaknesses' ? '1px solid #E5E5E0' : 'none',
                minHeight: '220px',
                background: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'Newsreader, serif', fontSize: '18px', fontWeight: 700,
                  color: config.color,
                }}>
                  {config.icon}
                </span>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>
                    {config.label}
                  </div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>
                    {config.corner} · {items.length} points
                  </div>
                </div>
              </div>

              <div>
                {items.map((item) => (
                  <SWOTItem
                    key={item.id}
                    item={item}
                    color={config.color}
                    isSelected={selectedItem === item.id}
                    onSelect={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                  />
                ))}
                {items.length === 0 && (
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#D0D0C8', textAlign: 'center', padding: '20px 0' }}>
                    No items for selected wave
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Wave color legend */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '12px', justifyContent: 'flex-end' }}>
        {[
          { wave: '4g', label: '4G LTE' },
          { wave: '5g', label: '5G' },
          { wave: 'ai', label: 'AI Devices' },
          { wave: 'all', label: 'All Waves' },
        ].map(w => (
          <div key={w.wave} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: WAVE_COLORS[w.wave], display: 'inline-block' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999' }}>{w.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
