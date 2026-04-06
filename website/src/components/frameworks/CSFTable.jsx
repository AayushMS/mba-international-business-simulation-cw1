import { csfData } from '../../data/caseStudyData'

const WAVE_COLORS = {
  '4g': '#3B6FD4',
  '5g': '#2B8A5E',
  'ai': '#7B5EA7',
  'all': '#999999',
}

const IMPORTANCE_COLORS = {
  'Critical': '#C0392B',
  'High': '#3B6FD4',
  'Medium': '#555555',
}

function ProgressBar({ value, benchmark, color }) {
  const pct = typeof value === 'number' ? value : 0
  const benchPct = typeof benchmark === 'number' ? benchmark : 0

  return (
    <div style={{ position: 'relative', height: '4px', background: '#E5E5E0', borderRadius: '2px', overflow: 'visible' }}>
      {/* Benchmark marker */}
      {benchPct > 0 && (
        <div style={{
          position: 'absolute',
          left: `${benchPct}%`,
          top: '-3px', bottom: '-3px',
          width: '2px',
          background: '#D0D0C8',
          borderRadius: '1px',
          zIndex: 2,
        }} />
      )}
      {/* Fill */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: `${Math.min(pct, 100)}%`,
        background: pct < 30 ? '#C0392B' : pct < 60 ? '#555555' : color,
        borderRadius: '2px',
        transition: 'width 0.5s ease',
        zIndex: 1,
      }} />
    </div>
  )
}

export default function CSFTable() {
  return (
    <div id="csf" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Critical Success Factors — Gap Analysis
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Mobilé Inc. performance vs industry benchmark · Progress bars show current score (marker = benchmark)
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {csfData.map((csf) => {
          const waveColor = WAVE_COLORS[csf.wave] || '#999999'
          const importanceColor = IMPORTANCE_COLORS[csf.importance] || '#555555'
          const score = typeof csf.mobileScore === 'number' ? csf.mobileScore : null
          const benchmark = typeof csf.industryBenchmark === 'number' ? csf.industryBenchmark : null
          const isCriticalGap = score !== null && benchmark !== null && score < benchmark * 0.5

          return (
            <div
              key={csf.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E5E0',
                borderLeft: `3px solid ${isCriticalGap ? '#C0392B' : waveColor}`,
                borderRadius: '6px', padding: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A' }}>
                      {csf.factor}
                    </span>
                    {isCriticalGap && (
                      <span style={{
                        fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px',
                        color: '#C0392B',
                        border: '1px solid #C0392B',
                        padding: '1px 5px', borderRadius: '3px',
                      }}>
                        CRITICAL GAP
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                      color: importanceColor,
                    }}>
                      {csf.importance}
                    </span>
                    <span style={{ color: '#D0D0C8' }}>·</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: waveColor, display: 'inline-block' }} />
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: waveColor, textTransform: 'uppercase' }}>
                        {csf.wave}
                      </span>
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', flexShrink: 0 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '2px' }}>MOBILÉ</div>
                    <div style={{
                      fontFamily: 'Newsreader, serif', fontSize: '22px', fontWeight: 600,
                      color: score !== null ? (score < 40 ? '#C0392B' : score < 65 ? '#555555' : '#2B8A5E') : '#999999',
                    }}>
                      {score !== null ? `${score}` : '—'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '2px' }}>BENCHMARK</div>
                    <div style={{ fontFamily: 'Newsreader, serif', fontSize: '22px', fontWeight: 600, color: '#D0D0C8' }}>
                      {benchmark !== null ? `${benchmark}` : '—'}
                    </div>
                  </div>
                </div>
              </div>

              {score !== null && (
                <ProgressBar value={score} benchmark={benchmark} color={waveColor} />
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
                <div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '4px', textTransform: 'uppercase' }}>
                    Gap Assessment
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: isCriticalGap ? '#C0392B' : '#555555' }}>
                    {csf.gap}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '4px', textTransform: 'uppercase' }}>
                    Required Actions
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>
                    {csf.actions}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
