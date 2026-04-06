import { useState } from 'react'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from 'recharts'
import { portersData } from '../../data/caseStudyData'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#FFFFFF', border: '1px solid #E5E5E0',
        borderRadius: '6px', padding: '10px 14px',
        fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{ color: '#555555' }}>{payload[0].payload.name}</div>
        <div style={{ color: '#1A1A1A', marginTop: '4px' }}>Intensity: {payload[0].value}/100</div>
      </div>
    )
  }
  return null
}

function IntensityBar({ value, color }) {
  return (
    <div style={{ height: '3px', background: '#E5E5E0', borderRadius: '2px', overflow: 'hidden', marginTop: '6px' }}>
      <div style={{
        height: '100%', width: `${value}%`,
        background: color,
        borderRadius: '2px',
        transition: 'width 0.5s ease',
      }} />
    </div>
  )
}

export default function PortersFiveForces() {
  const [selectedForce, setSelectedForce] = useState(null)

  const radarData = portersData.forces.map(f => ({
    name: f.name,
    intensity: f.intensity,
    id: f.id,
  }))

  const selected = selectedForce
    ? portersData.forces.find(f => f.id === selectedForce)
    : null

  return (
    <div id="porters" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Porter's Five Forces
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Industry structure analysis — smartphone market 2025
        </div>
      </div>

      <div className="framework-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Radar chart */}
        <div>
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <PolarGrid stroke="#E5E5E0" />
              <PolarAngleAxis
                dataKey="name"
                tick={{ fill: '#555555', fontSize: 11, fontFamily: 'Outfit, sans-serif' }}
              />
              <PolarRadiusAxis
                angle={90} domain={[0, 100]}
                tick={{ fill: '#999999', fontSize: 9, fontFamily: 'IBM Plex Mono, monospace' }}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Radar
                name="Intensity"
                dataKey="intensity"
                stroke="#3B6FD4"
                fill="#3B6FD4"
                fillOpacity={0.08}
                strokeWidth={1.5}
                dot={{ fill: '#3B6FD4', r: 3, strokeWidth: 0 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Force list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {portersData.forces.map(force => {
            const isSelected = selectedForce === force.id
            return (
              <div
                key={force.id}
                onClick={() => setSelectedForce(isSelected ? null : force.id)}
                style={{
                  background: isSelected ? '#F0F0ED' : '#FFFFFF',
                  border: '1px solid #E5E5E0',
                  borderLeft: `3px solid ${force.color}`,
                  borderRadius: '6px', padding: '12px',
                  cursor: 'pointer', transition: 'background 0.15s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A' }}>
                    {force.name}
                  </span>
                  <span style={{
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', fontWeight: 600,
                    color: force.color,
                  }}>
                    {force.intensity}
                  </span>
                </div>
                <IntensityBar value={force.intensity} color={force.color} />

                {isSelected && (
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', marginBottom: '8px', lineHeight: 1.5 }}>
                      {force.description}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {force.keyDrivers.map((d, i) => (
                        <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', display: 'flex', gap: '6px' }}>
                          <span style={{ color: force.color, flexShrink: 0 }}>•</span> {d}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Overall assessment */}
      <div style={{
        marginTop: '16px', padding: '12px 16px',
        background: '#F7F7F5', border: '1px solid #E5E5E0',
        borderRadius: '6px',
      }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Overall Industry Attractiveness:{' '}
        </span>
        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555555' }}>
          {portersData.overallAttractiveness}
        </span>
      </div>
    </div>
  )
}
