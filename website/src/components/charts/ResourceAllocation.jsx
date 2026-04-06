import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { recommendation } from '../../data/caseStudyData'

const SCENARIOS = [
  {
    id: 'recommended',
    label: 'Recommended',
    allocations: [
      { wave: '4G Defense', color: '#3B6FD4', pct: 30 },
      { wave: '5G Launch', color: '#2B8A5E', pct: 50 },
      { wave: 'AI R&D', color: '#7B5EA7', pct: 20 },
    ],
    description: 'Prioritize 5G launch while defending 4G cash engine and seeding AI R&D',
  },
  {
    id: 'conservative',
    label: 'Conservative',
    allocations: [
      { wave: '4G Defense', color: '#3B6FD4', pct: 55 },
      { wave: '5G Launch', color: '#2B8A5E', pct: 35 },
      { wave: 'AI R&D', color: '#7B5EA7', pct: 10 },
    ],
    description: 'Protect existing 4G revenue stream, moderate 5G investment',
  },
  {
    id: 'aggressive',
    label: 'Aggressive',
    allocations: [
      { wave: '4G Defense', color: '#3B6FD4', pct: 15 },
      { wave: '5G Launch', color: '#2B8A5E', pct: 55 },
      { wave: 'AI R&D', color: '#7B5EA7', pct: 30 },
    ],
    description: 'Full 5G + AI pivot, accept 4G market share erosion',
  },
]

export default function ResourceAllocation() {
  const [activeScenario, setActiveScenario] = useState('recommended')
  const scenario = SCENARIOS.find(s => s.id === activeScenario)

  const barData = scenario.allocations.map(a => ({
    name: a.wave,
    value: a.pct,
    color: a.color,
  }))

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
            Resource Allocation
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '2px' }}>
            Investment distribution across technology waves
          </div>
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', padding: '4px 10px', border: '1px solid #C0392B', borderRadius: '4px' }}>
          $90M FLOOR CONSTRAINT
        </div>
      </div>

      {/* Scenario selector — underline style */}
      <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0', marginBottom: '16px' }}>
        {SCENARIOS.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveScenario(s.id)}
            style={{
              padding: '6px 16px',
              fontFamily: 'Outfit, sans-serif', fontSize: '13px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeScenario === s.id ? '2px solid #1A1A1A' : '2px solid transparent',
              color: activeScenario === s.id ? '#1A1A1A' : '#999999',
              cursor: 'pointer',
              marginBottom: '-1px',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Stacked horizontal bars */}
        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', marginBottom: '12px' }}>
            {scenario.description}
          </div>

          {/* Stacked bar visualization */}
          <div style={{ height: '28px', borderRadius: '4px', overflow: 'hidden', display: 'flex', marginBottom: '16px' }}>
            {scenario.allocations.map((a, i) => (
              <div
                key={a.wave}
                style={{
                  width: `${a.pct}%`,
                  background: a.color,
                  opacity: 0.8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px',
                  color: 'white', fontWeight: 500,
                  transition: 'width 0.4s ease',
                  borderRight: i < scenario.allocations.length - 1 ? '1px solid rgba(255,255,255,0.3)' : 'none',
                }}
              >
                {a.pct}%
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {scenario.allocations.map(a => (
              <div key={a.wave} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', flex: 1 }}>{a.wave}</span>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: a.color }}>{a.pct}%</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '16px', padding: '10px 12px', borderRadius: '4px', background: '#F7F7F5', border: '1px solid #E5E5E0' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '4px', textTransform: 'uppercase' }}>Estimated allocation</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555' }}>
              4G Defence: ~$1.4B (cost reduction via Vietnam) · 5G Launch: ~$2.4B (licensing + production + marketing) · AI R&D: ~$150M (dedicated team + 2 partnerships)
            </div>
          </div>
        </div>

        {/* Bar chart */}
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 60 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="#E5E5E0" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#999999', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
            <YAxis type="category" dataKey="name" tick={{ fill: '#555555', fontSize: 11, fontFamily: 'Outfit, sans-serif' }} axisLine={false} tickLine={false} width={60} />
            <Tooltip formatter={(v) => [`${v}%`]} contentStyle={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }} />
            <Bar dataKey="value" radius={[0, 3, 3, 0]}>
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
