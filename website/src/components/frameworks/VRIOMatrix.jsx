import { useState } from 'react'
import { vrioData, vrioData as vrioDataBridge } from '../../data/caseStudyData'
import { vrioAnalysis } from '../../data/task2Data'

const IMPLICATION_COLORS = {
  'Sustainable Competitive Advantage': '#2B8A5E',
  'Temporary Competitive Advantage': '#3B6FD4',
  'Competitive Parity': '#7B5EA7',
  'Competitive Parity (and declining)': '#555555',
  'Competitive Disadvantage': '#C0392B',
  'Unused Competitive Advantage': '#7B5EA7',
  'Potential (Unrealised) Advantage': '#7B5EA7',
}

const WAVE_COLORS = {
  '4g': '#3B6FD4',
  '5g': '#2B8A5E',
  'ai': '#7B5EA7',
  'all': '#999999',
}

function CheckIcon({ value }) {
  return (
    <span style={{
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '13px',
      color: value ? '#2B8A5E' : '#C0392B',
      display: 'block',
      textAlign: 'center',
    }}>
      {value ? '✓' : '✗'}
    </span>
  )
}

export default function VRIOMatrix() {
  const [activeRow, setActiveRow] = useState(null)
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? vrioData
    : vrioData.filter(r => r.wave === filter || r.implication === filter)

  return (
    <div id="vrio" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
            VRIO Analysis
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
            Resource-Based View — Mobilé Inc. internal capabilities
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0' }}>
          {['all', '4g', '5g', 'ai'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '4px 14px',
                fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                background: 'transparent',
                border: 'none',
                borderBottom: filter === f ? `2px solid ${WAVE_COLORS[f] || '#1A1A1A'}` : '2px solid transparent',
                color: filter === f ? (WAVE_COLORS[f] || '#1A1A1A') : '#999999',
                cursor: 'pointer', textTransform: 'uppercase',
                marginBottom: '-1px',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F7F7F5' }}>
              {['Resource / Capability', 'Valuable', 'Rare', 'Inimitable', 'Organized', 'Wave', 'Competitive Implication'].map(h => (
                <th key={h} style={{
                  padding: '10px 12px', textAlign: h === 'Resource / Capability' ? 'left' : 'center',
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                  color: '#999999', letterSpacing: '0.08em', textTransform: 'uppercase',
                  borderBottom: '1px solid #E5E5E0', whiteSpace: 'nowrap',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => {
              const isActive = activeRow === i
              const implColor = IMPLICATION_COLORS[row.implication] || '#555555'
              const waveColor = WAVE_COLORS[row.wave] || '#999999'

              return (
                <tr
                  key={i}
                  onClick={() => setActiveRow(isActive ? null : i)}
                  style={{
                    background: isActive ? '#F0F0ED' : (i % 2 === 0 ? '#F7F7F5' : '#FFFFFF'),
                    cursor: 'pointer',
                    borderLeft: isActive ? `3px solid ${implColor}` : '3px solid transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  <td style={{ padding: '12px 12px', borderBottom: '1px solid #E5E5E0' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#1A1A1A', marginBottom: isActive ? '6px' : '0' }}>
                      {row.resource}
                    </div>
                    {isActive && (
                      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {row.evidence && (
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '7px 10px' }}>
                            <span style={{ color: '#999999' }}>Evidence: </span>{row.evidence}
                          </div>
                        )}
                        {row.implicationDetail && (
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#1A1A1A', background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: `3px solid ${implColor}`, borderRadius: '4px', padding: '7px 10px' }}>
                            <span style={{ color: '#999999' }}>Implication: </span>{row.implicationDetail}
                          </div>
                        )}
                        {row.swotFeed && (
                          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>
                            SWOT feed → {row.swotFeed}
                          </div>
                        )}
                        {row.waveConnection && (
                          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>
                            Wave: {row.waveConnection}
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                  {[row.valuable, row.rare, row.inimitable, row.organized].map((val, j) => (
                    <td key={j} style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E5E0' }}>
                      <CheckIcon value={val} />
                    </td>
                  ))}
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E5E0' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: waveColor, display: 'inline-block', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: waveColor, textTransform: 'uppercase' }}>
                        {row.wave}
                      </span>
                    </span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #E5E5E0' }}>
                    <span style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '11px',
                      color: implColor,
                      whiteSpace: 'nowrap',
                    }}>
                      {row.implication}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
        {Object.entries(IMPLICATION_COLORS).map(([label, color]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: 8, height: 8, borderRadius: '2px', background: color, flexShrink: 0 }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Key findings */}
      {vrioAnalysis?.keyFindings && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
          <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #2B8A5E', borderRadius: '4px', padding: '14px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#2B8A5E', marginBottom: '8px', textTransform: 'uppercase' }}>Advantage Sources</div>
            {vrioAnalysis.keyFindings.advantageSources.map((f, i) => (
              <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '4px' }}>
                <span style={{ color: '#2B8A5E', flexShrink: 0 }}>+</span> {f}
              </div>
            ))}
          </div>
          <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #C0392B', borderRadius: '4px', padding: '14px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', marginBottom: '8px', textTransform: 'uppercase' }}>Strategic Vulnerabilities</div>
            {vrioAnalysis.keyFindings.strategicVulnerabilities.map((f, i) => (
              <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '4px' }}>
                <span style={{ color: '#C0392B', flexShrink: 0 }}>–</span> {f}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
