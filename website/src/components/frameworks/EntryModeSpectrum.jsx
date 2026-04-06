import { useState } from 'react'
import { entryModeAnalysis } from '../../data/task2FrameworksData'

const WAVE_COLORS = { '4g': '#3B6FD4', '5g': '#2B8A5E', 'ai': '#7B5EA7' }

export default function EntryModeSpectrum() {
  const [activeMode, setActiveMode] = useState(null)
  const [activeWave, setActiveWave] = useState('all')
  const data = entryModeAnalysis

  const relevantModes = data.spectrum.filter(m => m.mobileRelevance)
  const filteredModes = activeWave === 'all'
    ? relevantModes
    : relevantModes.filter(m => m.waveId === activeWave)

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
            Entry Mode Analysis
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
            Control–risk–commitment spectrum — Mobilé uses different entry modes for each technology wave
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #E5E5E0' }}>
          {['all', '4g', '5g', 'ai'].map(f => (
            <button
              key={f}
              onClick={() => setActiveWave(f)}
              style={{
                padding: '4px 14px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                background: 'transparent', border: 'none',
                borderBottom: activeWave === f ? `2px solid ${WAVE_COLORS[f] || '#1A1A1A'}` : '2px solid transparent',
                color: activeWave === f ? (WAVE_COLORS[f] || '#1A1A1A') : '#999999',
                cursor: 'pointer', textTransform: 'uppercase', marginBottom: '-1px',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Spectrum bar */}
      <div style={{ marginBottom: '20px', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#2B8A5E' }}>LOW CONTROL / LOW RISK</span>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B' }}>HIGH CONTROL / HIGH RISK</span>
        </div>
        <div style={{ height: '6px', background: 'linear-gradient(to right, #2B8A5E, #F59E0B, #C0392B)', borderRadius: '3px', position: 'relative' }}>
          {/* Position markers for Mobilé's actual modes */}
          {relevantModes.map(mode => {
            const pos = ((mode.control - 1) / 4) * 100
            return (
              <div
                key={mode.mode}
                style={{
                  position: 'absolute', left: `${pos}%`, top: '-4px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: WAVE_COLORS[mode.waveId] || '#999999',
                  border: '2px solid #FFFFFF',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveMode(activeMode === mode.mode ? null : mode.mode)}
              />
            )
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
          {data.spectrum.map(mode => (
            <div key={mode.mode} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '8px', color: mode.mobileRelevance ? '#555555' : '#CCCCCC', textAlign: 'center', maxWidth: '60px' }}>
              {mode.mode}
            </div>
          ))}
        </div>
      </div>

      {/* Entry modes detail */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filteredModes.map(mode => {
          const isActive = activeMode === mode.mode
          const color = WAVE_COLORS[mode.waveId] || '#999999'
          return (
            <div
              key={mode.mode}
              onClick={() => setActiveMode(isActive ? null : mode.mode)}
              style={{
                background: isActive ? '#F0F0ED' : '#FFFFFF',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${color}`,
                borderRadius: '6px', padding: '12px',
                cursor: 'pointer', transition: 'background 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A' }}>
                    {mode.mode}
                  </span>
                  <span style={{
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                    color: '#FFFFFF', background: color, padding: '2px 8px', borderRadius: '10px',
                  }}>
                    {mode.waveId.toUpperCase()}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} style={{
                        width: '8px', height: '8px', borderRadius: '2px',
                        background: i <= mode.control ? color : '#E5E5E0',
                      }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>Control</span>
                </div>
              </div>

              {isActive && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.6 }}>
                    {mode.mobileApplication}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '2px' }}>Control</div>
                      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '14px', color: color, fontWeight: 600 }}>{mode.control}/5</div>
                    </div>
                    <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '2px' }}>Risk</div>
                      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '14px', color: color, fontWeight: 600 }}>{mode.risk}/5</div>
                    </div>
                    <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '2px' }}>Commitment</div>
                      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '14px', color: color, fontWeight: 600 }}>{mode.commitment}/5</div>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '7px 10px' }}>
                    <span style={{ color: '#999999' }}>Evidence: </span>{mode.evidence}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Wave entry mode summary */}
      <div className="framework-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '16px' }}>
        {data.waveEntryModes.map(we => (
          <div key={we.wave} style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderTop: `3px solid ${we.color}`, borderRadius: '4px', padding: '14px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: we.color, marginBottom: '4px' }}>
              {we.wave}
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '6px' }}>
              Control: {we.controlLevel}
            </div>
            {we.modes.map((m, i) => (
              <div key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', display: 'flex', gap: '6px', marginBottom: '3px' }}>
                <span style={{ color: we.color, flexShrink: 0 }}>•</span> {m}
              </div>
            ))}
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', marginTop: '6px', lineHeight: 1.5, borderTop: '1px solid #E5E5E0', paddingTop: '6px' }}>
              {we.reasoning}
            </div>
          </div>
        ))}
      </div>

      {/* Key findings */}
      <div className="framework-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '16px' }}>
        {Object.entries(data.keyFindings).map(([key, value]) => (
          <div key={key} style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '14px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '6px', textTransform: 'uppercase' }}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5 }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
