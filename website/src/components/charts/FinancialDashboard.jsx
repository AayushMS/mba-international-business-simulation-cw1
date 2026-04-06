import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { financialMetrics } from '../../data/caseStudyData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#FFFFFF', border: '1px solid #E5E5E0',
        borderRadius: '6px', padding: '10px 14px',
        fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{ color: '#555555', marginBottom: '4px' }}>{label}</div>
        {payload.map(p => (
          <div key={p.dataKey} style={{ color: p.color }}>
            {p.name}: {typeof p.value === 'number' ? `$${p.value}B` : p.value}
          </div>
        ))}
      </div>
    )
  }
  return null
}

const revenueData = [
  { year: '2023', revenue: 4.6, cashFloor: 0.09 },
  { year: '2024', revenue: 4.8, cashFloor: 0.09 },
  { year: '2025', revenue: 4.5, cashFloor: 0.09 },
  { year: '2026', revenue: 5.1, cashFloor: 0.09 },
  { year: '2027', revenue: 5.8, cashFloor: 0.09 },
  { year: '2028', revenue: 6.5, cashFloor: 0.09 },
]

function GaugeBar({ label, value, max, color, unit, warning }) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>{label}</span>
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px',
          color: warning ? '#C0392B' : '#1A1A1A',
        }}>
          {unit}{value}
        </span>
      </div>
      <div style={{ height: '4px', background: '#F0F0ED', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${pct}%`,
          background: warning ? '#C0392B' : color,
          borderRadius: '2px',
          transition: 'width 0.6s ease',
        }} />
      </div>
    </div>
  )
}

function MetricCard({ label, value, sub, color, tag }) {
  return (
    <div style={{
      background: '#FFFFFF', border: '1px solid #E5E5E0',
      borderRadius: '6px', padding: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </div>
      <div style={{ fontFamily: 'Newsreader, serif', fontSize: '24px', fontWeight: 600, color: color || '#1A1A1A', marginBottom: '4px' }}>
        {value}
      </div>
      {sub && <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555' }}>{sub}</div>}
      {tag && (
        <div style={{
          marginTop: '8px',
          display: 'inline-block',
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
          color: '#555555',
          paddingTop: '6px',
          borderTop: '1px solid #E5E5E0',
          width: '100%',
        }}>
          {tag}
        </div>
      )}
    </div>
  )
}

export default function FinancialDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Key metrics row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        <MetricCard label="4G Revenue" value="$4.8B" sub="Annual, mature segment" color="#3B6FD4" tag="4G WAVE" />
        <MetricCard label="Market Share" value="25%" sub="Each of USA/EU/Asia" color="#2B8A5E" tag="EQUAL 4-WAY SPLIT" />
        <MetricCard label="Cash Floor" value="$90M" sub="Minimum reserve" color="#C0392B" tag="BINDING CONSTRAINT" />
        <MetricCard label="5G Status" value="NOT LAUNCHED" sub="Critical gap in 2025" color="#C0392B" tag="URGENT" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
        {/* Revenue trend */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
            Revenue Trajectory
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '16px' }}>
            Projected across wave transitions (placeholder data)
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={revenueData} margin={{ top: 4, right: 4, bottom: 4, left: 0 }}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B6FD4" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3B6FD4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="2 4" stroke="#E5E5E0" />
              <XAxis dataKey="year" tick={{ fill: '#999999', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#999999', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#3B6FD4" strokeWidth={1.5} fill="url(#revenueGrad)" dot={{ fill: '#3B6FD4', r: 3, strokeWidth: 0 }} />
              <Area type="monotone" dataKey="cashFloor" name="Cash Floor" stroke="#C0392B" strokeWidth={1} strokeDasharray="3 3" fill="none" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textAlign: 'center', marginTop: '8px' }}>
            Projected revenue trajectory: 4G-funded, 5G-accelerated growth path. Cash floor $90M maintained throughout.
          </div>
        </div>

        {/* Borrowing capacity */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
            Capital Position
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '20px' }}>
            Borrowing &amp; constraints
          </div>

          <GaugeBar
            label="Normal Borrowing Rate"
            value={4.8}
            max={10}
            color="#3B6FD4"
            unit=""
          />
          <GaugeBar
            label="Emergency Rate"
            value={7.8}
            max={10}
            color="#C0392B"
            unit=""
            warning={true}
          />
          <GaugeBar
            label="Atlanta Plant Utilization"
            value={75}
            max={100}
            color="#2B8A5E"
            unit=""
          />

          <div style={{
            marginTop: '16px', padding: '10px 12px',
            background: '#F7F7F5', border: '1px solid #E5E5E0',
            borderLeft: '3px solid #C0392B',
            borderRadius: '4px',
          }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', marginBottom: '4px', textTransform: 'uppercase' }}>
              Binding Constraint
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>
              3 waves compete for same resource pool. $90M floor is non-negotiable.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
