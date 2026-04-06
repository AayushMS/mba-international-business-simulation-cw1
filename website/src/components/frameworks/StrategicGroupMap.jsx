import { useState } from 'react'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ZAxis,
} from 'recharts'
import { strategicGroupData } from '../../data/caseStudyData'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload
    return (
      <div style={{
        background: '#FFFFFF', border: '1px solid #E5E5E0',
        borderRadius: '6px', padding: '12px 16px',
        fontFamily: 'Outfit, sans-serif', fontSize: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '14px', color: d.isUs ? '#3B6FD4' : '#1A1A1A', marginBottom: '6px' }}>
          {d.name} {d.isUs && <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#3B6FD4' }}>[MOBILÉ]</span>}
        </div>
        <div style={{ color: '#555555' }}>Tech Leadership: {d.x}/10</div>
        <div style={{ color: '#555555' }}>Geographic Breadth: {d.y}/10</div>
        <div style={{ color: '#999999', marginTop: '6px', fontSize: '11px' }}>{d.notes}</div>
      </div>
    )
  }
  return null
}

export default function StrategicGroupMap() {
  const [hoveredId, setHoveredId] = useState(null)

  const scatterData = strategicGroupData.groups.map(g => ({
    ...g,
    x: g.x,
    y: g.y,
    z: g.size,
  }))

  return (
    <div id="strategic-group" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Strategic Group Map
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Competitor positioning — technology leadership vs geographic breadth
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <ResponsiveContainer width="100%" height={280}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="#E5E5E0" />
            <XAxis
              type="number"
              dataKey="x"
              domain={[0, 10]}
              name={strategicGroupData.axes.x.label}
              tick={{ fill: '#999999', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
              label={{ value: strategicGroupData.axes.x.label, position: 'bottom', fill: '#999999', fontSize: 11, fontFamily: 'Outfit, sans-serif', offset: -10 }}
              axisLine={{ stroke: '#E5E5E0' }}
              tickLine={false}
            />
            <YAxis
              type="number"
              dataKey="y"
              domain={[0, 10]}
              name={strategicGroupData.axes.y.label}
              tick={{ fill: '#999999', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
              label={{ value: strategicGroupData.axes.y.label, angle: -90, position: 'left', fill: '#999999', fontSize: 11, fontFamily: 'Outfit, sans-serif', offset: 10 }}
              axisLine={{ stroke: '#E5E5E0' }}
              tickLine={false}
            />
            <ZAxis type="number" dataKey="z" range={[300, 600]} />
            <Tooltip content={<CustomTooltip />} />
            <Scatter data={scatterData} isAnimationActive={true}>
              {scatterData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  fillOpacity={entry.isUs ? 0.9 : 0.5}
                  stroke={entry.color}
                  strokeWidth={entry.isUs ? 2 : 1}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
          {strategicGroupData.groups.map(g => (
            <div
              key={g.id}
              style={{
                background: g.isUs ? '#F0F0ED' : '#FFFFFF',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${g.color}`,
                borderRadius: '6px', padding: '10px 12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A' }}>
                  {g.name}
                </span>
                {g.isUs && (
                  <span style={{
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px',
                    color: g.color, padding: '1px 5px',
                    border: `1px solid ${g.color}`,
                    borderRadius: '3px',
                  }}>
                    US
                  </span>
                )}
              </div>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#999999' }}>
                Tech: {g.x}/10 · Geo: {g.y}/10
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', marginTop: '4px' }}>
                {g.notes}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '16px', padding: '10px 14px',
        background: '#F7F7F5', border: '1px solid #E5E5E0',
        borderRadius: '6px',
        fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555',
      }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>NOTE: </span>
        [CONTENT: Insert strategic group interpretation — where Mobilé sits relative to competitors and what this means for competitive strategy]
      </div>
    </div>
  )
}
