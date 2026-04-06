import { useState } from 'react'

const WAVES = [
  {
    id: '4g',
    label: 'Wave 1: 4G LTE',
    color: '#3B6FD4',
    status: 'Defend',
    startYear: 2020,
    peakYear: 2023,
    endYear: 2027,
    startX: 0,
    endX: 60,
    description: 'Mature cash engine. ~$4.8B revenue. Under price pressure post-DOJ.',
    milestones: [
      { year: 2020, label: '4G dominance', x: 0 },
      { year: 2023, label: 'Revenue peak $4.8B', x: 28 },
      { year: 2025, label: 'DOJ intervention — price war', x: 45 },
    ],
  },
  {
    id: '5g',
    label: 'Wave 2: 5G',
    color: '#2B8A5E',
    status: 'Launch URGENT',
    startYear: 2023,
    peakYear: 2026,
    endYear: 2029,
    startX: 28,
    endX: 85,
    description: '70%+ urban 5G coverage. Mobilé has NOT launched. Critical gap.',
    milestones: [
      { year: 2024, label: '38% US adoption', x: 38 },
      { year: 2025, label: 'Mobilé: no 5G product', x: 45 },
      { year: 2026, label: 'Planned 5G launch', x: 55 },
    ],
  },
  {
    id: 'ai',
    label: 'Wave 3: AI Devices',
    color: '#7B5EA7',
    status: 'Invest Now',
    startYear: 2025,
    peakYear: 2028,
    endYear: 2031,
    startX: 45,
    endX: 100,
    description: 'Commercial window 2027–28. R&D investment decisions must happen NOW.',
    milestones: [
      { year: 2025, label: 'R&D invest now', x: 45 },
      { year: 2027, label: 'AI commercial launch', x: 68 },
      { year: 2028, label: 'Peak AI adoption', x: 78 },
    ],
  },
]

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
const START_YEAR = 2020
const END_YEAR = 2030
const yearToX = (year) => ((year - START_YEAR) / (END_YEAR - START_YEAR)) * 100

export default function ThreeWaveTimeline() {
  const [activeWave, setActiveWave] = useState(null)
  const [hoveredMilestone, setHoveredMilestone] = useState(null)

  const currentYear = 2025
  const nowX = yearToX(currentYear)

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
            Three-Wave Technology Timeline
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555555', marginTop: '3px' }}>
            Mobilé Inc.'s simultaneous value wave challenge
          </div>
        </div>
        <div style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px',
          padding: '4px 10px', border: '1px solid #C0392B',
          color: '#C0392B', borderRadius: '4px',
          background: 'transparent',
        }}>
          NOW: 2025
        </div>
      </div>

      {/* Timeline SVG */}
      <div style={{ position: 'relative', padding: '8px 0' }}>
        <svg viewBox="0 0 100 72" preserveAspectRatio="none" style={{ width: '100%', height: '200px' }}>
          {/* Background grid */}
          {YEARS.map(year => {
            const x = yearToX(year)
            return (
              <line key={year} x1={x} y1={0} x2={x} y2={68}
                stroke="#E5E5E0" strokeWidth="0.2" strokeDasharray="1,2" />
            )
          })}

          {/* Wave curves */}
          {WAVES.map((wave, i) => {
            const yBase = 16 + i * 18
            const isActive = activeWave === wave.id || activeWave === null
            const opacity = isActive ? 1 : 0.2

            const x1 = wave.startX
            const xPeak = (wave.startX + wave.endX) / 2
            const x2 = wave.endX
            const h = 12

            const path = `M ${x1},${yBase + h/2} C ${x1 + (xPeak-x1)*0.4},${yBase + h/2} ${xPeak - 8},${yBase} ${xPeak},${yBase} C ${xPeak + 8},${yBase} ${x2 - (x2-xPeak)*0.4},${yBase + h/2} ${x2},${yBase + h/2}`
            const fillPath = `${path} L ${x2},${yBase + h} L ${x1},${yBase + h} Z`

            return (
              <g key={wave.id} style={{ opacity, cursor: 'pointer' }}
                onClick={() => setActiveWave(activeWave === wave.id ? null : wave.id)}>
                <path d={fillPath} fill={wave.color} fillOpacity={0.06} />
                <path d={path} fill="none" stroke={wave.color} strokeWidth="0.6" />

                {/* Label */}
                <text x={xPeak} y={yBase - 2} textAnchor="middle"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '3px', fill: wave.color, letterSpacing: '0.05em' }}>
                  {wave.id.toUpperCase()}
                </text>

                {/* Milestones */}
                {wave.milestones.map((m, mi) => (
                  <g key={mi}>
                    <circle cx={m.x} cy={yBase + h/4}
                      r={hoveredMilestone === `${wave.id}-${mi}` ? 1.2 : 0.8}
                      fill={wave.color}
                      style={{ cursor: 'pointer', transition: 'r 0.1s' }}
                      onMouseEnter={() => setHoveredMilestone(`${wave.id}-${mi}`)}
                      onMouseLeave={() => setHoveredMilestone(null)}
                    />
                    {hoveredMilestone === `${wave.id}-${mi}` && (
                      <text x={m.x} y={yBase + h/4 - 2.5} textAnchor="middle"
                        style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5px', fill: '#1A1A1A' }}>
                        {m.year}: {m.label}
                      </text>
                    )}
                  </g>
                ))}
              </g>
            )
          })}

          {/* NOW line */}
          <line x1={nowX} y1={0} x2={nowX} y2={68}
            stroke="#C0392B" strokeWidth="0.4" strokeDasharray="2,1" />
          <text x={nowX + 1} y={4}
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '3px', fill: '#C0392B' }}>
            2025
          </text>

          {/* Year labels */}
          {YEARS.filter(y => y % 2 === 0).map(year => (
            <text key={year} x={yearToX(year)} y={71} textAnchor="middle"
              style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '3px', fill: '#999999' }}>
              {year}
            </text>
          ))}
        </svg>
      </div>

      {/* Wave cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '16px' }}>
        {WAVES.map(wave => (
          <button
            key={wave.id}
            onClick={() => setActiveWave(activeWave === wave.id ? null : wave.id)}
            style={{
              background: activeWave === wave.id ? '#F0F0ED' : '#FFFFFF',
              border: '1px solid #E5E5E0',
              borderLeft: activeWave === wave.id ? `3px solid ${wave.color}` : '1px solid #E5E5E0',
              borderRadius: '6px', padding: '12px',
              cursor: 'pointer', textAlign: 'left',
              transition: 'all 0.15s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: wave.color, display: 'inline-block', flexShrink: 0,
              }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: wave.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {wave.id}
              </span>
              <span style={{
                marginLeft: 'auto',
                fontFamily: 'Outfit, sans-serif', fontSize: '10px',
                color: '#555555',
              }}>
                {wave.status}
              </span>
            </div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
              {wave.label}
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
              {wave.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
