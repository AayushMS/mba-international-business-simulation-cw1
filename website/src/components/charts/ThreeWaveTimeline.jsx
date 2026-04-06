import { useState } from 'react'

const WAVES = [
  {
    id: '4g',
    label: 'Wave 1 — 4G LTE',
    color: '#3B6FD4',
    status: 'Defend',
    period: '2020–2027',
    description: 'Mature cash engine. ~$4.8B revenue. Under price pressure post-DOJ.',
    milestones: [
      { year: 2020, label: '4G market dominance' },
      { year: 2023, label: 'Revenue peak $4.8B' },
      { year: 2025, label: 'DOJ ends price coordination' },
    ],
  },
  {
    id: '5g',
    label: 'Wave 2 — 5G',
    color: '#2B8A5E',
    status: 'Launch URGENT',
    period: '2023–2029',
    description: '70%+ urban 5G coverage. Mobilé has NOT launched a handset. Critical gap.',
    milestones: [
      { year: 2024, label: '38% US consumer adoption' },
      { year: 2025, label: 'Mobilé has no 5G product' },
      { year: 2026, label: 'Target: first 5G launch' },
    ],
  },
  {
    id: 'ai',
    label: 'Wave 3 — AI Devices',
    color: '#7B5EA7',
    status: 'Invest Now',
    period: '2025–2031',
    description: 'Commercial window 2027–28. R&D investment decisions must happen NOW.',
    milestones: [
      { year: 2025, label: 'R&D commitment required' },
      { year: 2027, label: 'Prototype target (Q4)' },
      { year: 2028, label: 'Commercial launch window' },
    ],
  },
]

const ALL_YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
const START = 2020
const END = 2030

export default function ThreeWaveTimeline() {
  const [activeWave, setActiveWave] = useState(null)

  const pct = (year) => ((year - START) / (END - START)) * 100

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '28px 32px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '18px', fontWeight: 400, color: '#1A1A1A', margin: 0 }}>
            Three-Wave Technology Timeline
          </h3>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#999', margin: '4px 0 0' }}>
            Mobilé Inc.'s simultaneous value wave challenge — 2020 to 2030
          </p>
        </div>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: '#C0392B' }}>
          Now: 2025
        </span>
      </div>

      {/* Horizontal bar timeline */}
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        {/* Year axis */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', padding: '0 1px' }}>
          {ALL_YEARS.map(y => (
            <span key={y} style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '11px',
              color: y === 2025 ? '#C0392B' : '#999',
              fontWeight: y === 2025 ? 600 : 400,
              width: 0,
              textAlign: 'center',
            }}>
              {y}
            </span>
          ))}
        </div>

        {/* Tick marks */}
        <div style={{ position: 'relative', height: '4px', background: '#E5E5E0', borderRadius: '2px', marginBottom: '6px' }}>
          {/* Current year marker */}
          <div style={{
            position: 'absolute',
            left: `${pct(2025)}%`,
            top: '-6px', width: '2px', height: '16px',
            background: '#C0392B', borderRadius: '1px',
          }} />
        </div>

        {/* Wave bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {WAVES.map(wave => {
            const isActive = activeWave === wave.id || activeWave === null
            const startYear = parseInt(wave.period.split('–')[0])
            const endYear = parseInt(wave.period.split('–')[1])
            const left = pct(startYear)
            const width = pct(endYear) - pct(startYear)

            return (
              <div
                key={wave.id}
                onClick={() => setActiveWave(activeWave === wave.id ? null : wave.id)}
                style={{ position: 'relative', height: '32px', cursor: 'pointer' }}
              >
                <div style={{
                  position: 'absolute',
                  left: `${left}%`,
                  width: `${width}%`,
                  height: '100%',
                  background: wave.color,
                  opacity: isActive ? 0.15 : 0.05,
                  borderRadius: '4px',
                  transition: 'opacity 0.2s',
                }} />
                <div style={{
                  position: 'absolute',
                  left: `${left}%`,
                  width: `${width}%`,
                  height: '100%',
                  border: `1.5px solid ${wave.color}`,
                  borderRadius: '4px',
                  opacity: isActive ? 0.5 : 0.15,
                  transition: 'opacity 0.2s',
                }} />
                <div style={{
                  position: 'absolute',
                  left: `${left + 1}%`,
                  top: '50%', transform: 'translateY(-50%)',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  pointerEvents: 'none',
                }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: wave.color, flexShrink: 0,
                    opacity: isActive ? 1 : 0.4,
                  }} />
                  <span style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '12px',
                    fontWeight: 500, color: isActive ? '#1A1A1A' : '#999',
                    whiteSpace: 'nowrap',
                  }}>
                    {wave.label}
                  </span>
                  <span style={{
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                    color: wave.color, opacity: isActive ? 1 : 0.5,
                    whiteSpace: 'nowrap',
                  }}>
                    {wave.status}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Wave detail cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '20px' }}>
        {WAVES.map(wave => {
          const isActive = activeWave === wave.id
          return (
            <div
              key={wave.id}
              onClick={() => setActiveWave(isActive ? null : wave.id)}
              style={{
                padding: '16px',
                borderRadius: '6px',
                border: `1px solid ${isActive ? wave.color : '#E5E5E0'}`,
                background: isActive ? '#FAFAF8' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: wave.color }} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>
                  {wave.label}
                </span>
              </div>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555', lineHeight: 1.5, margin: '0 0 10px' }}>
                {wave.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {wave.milestones.map((m, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: wave.color, flexShrink: 0 }}>
                      {m.year}
                    </span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555' }}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
