import { useState } from 'react'
import { pestleData } from '../../data/caseStudyData'

const CATEGORIES = ['Political', 'Economic', 'Social', 'Technological', 'Legal', 'Environmental']

const CATEGORY_COLORS = {
  Political: '#C0392B',
  Economic: '#3B6FD4',
  Social: '#2B8A5E',
  Technological: '#7B5EA7',
  Legal: '#555555',
  Environmental: '#2B8A5E',
}

const IMPACT_WEIGHTS = { high: 3, medium: 2, low: 1 }
const WAVE_COLORS = { '4g': '#3B6FD4', '5g': '#2B8A5E', 'ai': '#7B5EA7', all: '#999999' }

export default function PESTLEGrid() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [expandedItem, setExpandedItem] = useState(null)

  const filtered = activeCategory
    ? pestleData.filter(f => f.category === activeCategory)
    : pestleData

  return (
    <div id="pestle" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          PESTLE Analysis
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          External macro-environment — Mobilé Inc. context
        </div>
      </div>

      {/* Category filters — underline tabs */}
      <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveCategory(null)}
          style={{
            padding: '5px 14px',
            fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
            background: 'transparent',
            border: 'none',
            borderBottom: !activeCategory ? '2px solid #1A1A1A' : '2px solid transparent',
            color: !activeCategory ? '#1A1A1A' : '#999999',
            cursor: 'pointer',
            marginBottom: '-1px',
          }}
        >
          All
        </button>
        {CATEGORIES.map(cat => {
          const color = CATEGORY_COLORS[cat]
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(isActive ? null : cat)}
              style={{
                padding: '5px 14px',
                fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                background: 'transparent',
                border: 'none',
                borderBottom: isActive ? `2px solid ${color}` : '2px solid transparent',
                color: isActive ? color : '#999999',
                cursor: 'pointer',
                marginBottom: '-1px',
              }}
            >
              {cat.charAt(0)}
            </button>
          )
        })}
      </div>

      {/* PESTLE cards grid */}
      <div className="framework-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {filtered.map((item, i) => {
          const color = CATEGORY_COLORS[item.category] || '#555555'
          const waveColor = WAVE_COLORS[item.wave] || '#999999'
          const isExpanded = expandedItem === i
          const impactLevel = IMPACT_WEIGHTS[item.impact] || 1

          return (
            <div
              key={i}
              onClick={() => setExpandedItem(isExpanded ? null : i)}
              style={{
                background: isExpanded ? '#F0F0ED' : '#FFFFFF',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${color}`,
                borderRadius: '6px', padding: '14px',
                cursor: 'pointer', transition: 'background 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px',
                  color,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>
                  {item.category}
                </span>

                {/* Impact dots */}
                <div style={{ display: 'flex', gap: '2px', marginLeft: 'auto' }}>
                  {[1, 2, 3].map(level => (
                    <div key={level} style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: level <= impactLevel ? color : '#E5E5E0',
                    }} />
                  ))}
                </div>

                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: waveColor, display: 'inline-block' }} />
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: waveColor, textTransform: 'uppercase' }}>
                    {item.wave}
                  </span>
                </span>
              </div>

              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A', marginBottom: isExpanded ? '8px' : '0', lineHeight: 1.4 }}>
                {item.factor}
              </div>

              {isExpanded && (
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', marginBottom: '8px', lineHeight: 1.5 }}>
                    {item.description}
                  </div>
                  {item.evidence && (
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '11px',
                      color: '#555555', background: '#F7F7F5',
                      border: '1px solid #E5E5E0', borderRadius: '4px',
                      padding: '6px 10px',
                    }}>
                      <span style={{ color: '#999999' }}>Evidence: </span>{item.evidence}
                    </div>
                  )}
                  <div style={{
                    marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                    color: item.direction === 'positive' ? '#2B8A5E' : '#C0392B',
                  }}>
                    <span>{item.direction === 'positive' ? '↑' : '↓'}</span>
                    <span style={{ textTransform: 'capitalize' }}>{item.direction} impact</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Category summary row */}
      <div style={{ display: 'flex', gap: '6px', marginTop: '16px', flexWrap: 'wrap' }}>
        {CATEGORIES.map(cat => {
          const color = CATEGORY_COLORS[cat]
          const items = pestleData.filter(f => f.category === cat)
          const highCount = items.filter(f => f.impact === 'high').length
          return (
            <div key={cat} style={{
              flex: 1, minWidth: '80px',
              background: '#F7F7F5', border: '1px solid #E5E5E0',
              borderTop: `3px solid ${color}`,
              borderRadius: '4px', padding: '10px',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', fontWeight: 700, color, marginBottom: '2px' }}>
                {cat.charAt(0)}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', color: '#999999' }}>
                {items.length} factors
              </div>
              {highCount > 0 && (
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', marginTop: '2px' }}>
                  {highCount} high
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
