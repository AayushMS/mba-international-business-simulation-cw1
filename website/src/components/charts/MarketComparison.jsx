import { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Legend,
} from 'recharts'

const barData = [
  { market: 'USA', growth: 17, penetration: 88, fiveG: 38 },
  { market: 'Europe', growth: 19, penetration: 75, fiveG: 28 },
  { market: 'Asia', growth: 26, penetration: 62, fiveG: 35 },
]

const radarData = [
  { metric: 'Market Size', USA: 90, Europe: 70, Asia: 85 },
  { metric: 'Growth Rate', USA: 60, Europe: 65, Asia: 80 },
  { metric: '5G Readiness', USA: 70, Europe: 55, Asia: 65 },
  { metric: 'Penetration', USA: 95, Europe: 80, Asia: 55 },
  { metric: 'Competition', USA: 75, Europe: 70, Asia: 80 },
  { metric: 'Profitability', USA: 80, Europe: 75, Asia: 70 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#FFFFFF', border: '1px solid #E5E5E0',
        borderRadius: '6px', padding: '10px 14px',
        fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{ color: '#555555', marginBottom: '6px' }}>{label}</div>
        {payload.map(p => (
          <div key={p.dataKey} style={{ color: p.fill || p.color, marginBottom: '2px' }}>
            {p.name}: {p.value}%
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function MarketComparison() {
  const [view, setView] = useState('bar')

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
            Market Comparison
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '2px' }}>
            USA vs Europe vs Asia — key indicators
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0' }}>
          {['bar', 'radar'].map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: '5px 14px',
                fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px',
                background: 'transparent',
                border: 'none',
                borderBottom: view === v ? '2px solid #1A1A1A' : '2px solid transparent',
                color: view === v ? '#1A1A1A' : '#999999',
                cursor: 'pointer', textTransform: 'uppercase',
                marginBottom: '-1px',
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === 'bar' ? (
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={barData} barGap={4} margin={{ top: 4, right: 4, bottom: 4, left: 0 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="#E5E5E0" vertical={false} />
            <XAxis dataKey="market" tick={{ fill: '#555555', fontSize: 12, fontFamily: 'Outfit, sans-serif' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#999999', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }} />
            <Bar dataKey="growth" name="Growth Rate %" fill="#2B8A5E" radius={[3, 3, 0, 0]} />
            <Bar dataKey="penetration" name="Penetration %" fill="#3B6FD4" radius={[3, 3, 0, 0]} />
            <Bar dataKey="fiveG" name="5G Adoption %" fill="#7B5EA7" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={220}>
          <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
            <PolarGrid stroke="#E5E5E0" />
            <PolarAngleAxis dataKey="metric" tick={{ fill: '#555555', fontSize: 11, fontFamily: 'Outfit, sans-serif' }} />
            <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
            <Radar name="USA" dataKey="USA" stroke="#3B6FD4" fill="#3B6FD4" fillOpacity={0.1} />
            <Radar name="Europe" dataKey="Europe" stroke="#2B8A5E" fill="#2B8A5E" fillOpacity={0.1} />
            <Radar name="Asia" dataKey="Asia" stroke="#7B5EA7" fill="#7B5EA7" fillOpacity={0.1} />
            <Legend wrapperStyle={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }} />
          </RadarChart>
        </ResponsiveContainer>
      )}

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '16px' }}>
        {[
          { market: 'USA', color: '#3B6FD4', size: '~$80B', growth: '14–20%', highlight: '88% penetration, mature' },
          { market: 'Europe', color: '#2B8A5E', size: '450M users', growth: '16–22%', highlight: '55% 5G coverage' },
          { market: 'Asia', color: '#7B5EA7', size: '~1B users', growth: '22–30%', highlight: 'Bifurcated: premium + mass' },
        ].map(m => (
          <div key={m.market} style={{
            background: '#F7F7F5', border: '1px solid #E5E5E0',
            borderRadius: '6px', padding: '12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: m.color, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Newsreader, serif', fontSize: '14px', fontWeight: 600, color: '#1A1A1A' }}>{m.market}</span>
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#999999', marginBottom: '2px' }}>Market: {m.size}</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: m.color }}>Growth: {m.growth}</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', marginTop: '4px' }}>{m.highlight}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
