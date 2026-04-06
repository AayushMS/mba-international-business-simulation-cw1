import { strategyProcess } from '../../data/caseStudyData'

const WAVE_COLORS = { '4g': '#3B6FD4', '5g': '#2B8A5E', 'ai': '#7B5EA7' }

export default function VisionMission() {
  const { vision, mission } = strategyProcess

  return (
    <div id="vision" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Vision */}
      <div style={{
        background: '#FFFFFF', border: '1px solid #E5E5E0',
        borderRadius: '8px', padding: '28px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Vision Statement
        </div>
        <blockquote style={{
          fontFamily: 'Newsreader, serif', fontSize: '20px', fontWeight: 600,
          color: '#1A1A1A', lineHeight: 1.5, margin: 0,
          borderLeft: '3px solid #3B6FD4', paddingLeft: '16px',
        }}>
          {vision.statement}
        </blockquote>

        {/* Wave connections */}
        {vision.waveConnections && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
            {[
              { key: 'wave1', color: '#3B6FD4', label: 'Wave 1 (4G)', text: vision.waveConnections.wave1 },
              { key: 'wave2', color: '#2B8A5E', label: 'Wave 2 (5G)', text: vision.waveConnections.wave2 },
              { key: 'wave3', color: '#7B5EA7', label: 'Wave 3 (AI)', text: vision.waveConnections.wave3 },
            ].map(w => (
              <div key={w.key} style={{
                background: '#F7F7F5', border: '1px solid #E5E5E0',
                borderTop: `3px solid ${w.color}`,
                borderRadius: '4px', padding: '10px 12px',
              }}>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: w.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  {w.label}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.4 }}>
                  {w.text}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Justification bullets */}
        {vision.justification && (
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>
              Justification
            </div>
            {vision.justification.map((j, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>
                <span style={{ color: '#3B6FD4', flexShrink: 0 }}>→</span>
                <span><strong style={{ color: '#1A1A1A', fontWeight: 500 }}>{j.point}:</strong> {j.detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mission */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Mission Statement
        </div>
        <div style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '15px',
          color: '#1A1A1A', lineHeight: 1.7, marginBottom: '20px',
          borderLeft: '3px solid #2B8A5E', paddingLeft: '16px',
        }}>
          {mission.statement}
        </div>

        {/* Mission components */}
        {mission.components && (
          <div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '10px' }}>
              Mission Components
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {mission.components.map((comp, i) => {
                const waveColor = comp.element.includes('Wave 1') ? '#3B6FD4'
                  : comp.element.includes('Wave 2') ? '#2B8A5E'
                  : comp.element.includes('Wave 3') ? '#7B5EA7'
                  : comp.element.includes('constraint') ? '#C0392B'
                  : '#999999'
                return (
                  <div key={i} style={{
                    background: '#F7F7F5', border: '1px solid #E5E5E0',
                    borderLeft: `3px solid ${waveColor}`,
                    borderRadius: '4px', padding: '12px 14px',
                    display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '12px',
                    alignItems: 'start',
                  }}>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: waveColor, textTransform: 'uppercase', lineHeight: 1.4 }}>
                      {comp.element}
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#1A1A1A', lineHeight: 1.5 }}>
                      {comp.text}
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
                      <span style={{ color: '#999999' }}>Evidence: </span>{comp.caseEvidence}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
