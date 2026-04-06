import { recommendation } from '../../data/caseStudyData'

const WAVE_COLORS = { '4g': '#3B6FD4', '5g': '#2B8A5E', 'ai': '#7B5EA7' }

const SEVERITY_COLORS = {
  high: '#C0392B',
  medium: '#555555',
  low: '#2B8A5E',
}

export default function RecommendationBrief() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Strategic choice header */}
      <div style={{
        background: '#FFFFFF', border: '1px solid #E5E5E0',
        borderRadius: '8px', padding: '28px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Strategic Recommendation
            </div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: '22px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3, marginBottom: '12px' }}>
              {recommendation.title}
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555555', lineHeight: 1.6, marginBottom: '16px' }}>
              {recommendation.strategicChoice}
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555555', lineHeight: 1.6 }}>
              {recommendation.rationale}
            </div>
          </div>
          <div style={{
            background: '#F7F7F5', border: '1px solid #E5E5E0',
            borderLeft: '3px solid #C0392B',
            borderRadius: '4px', padding: '14px', minWidth: '200px',
          }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              Critical Constraint
            </div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A' }}>
              $90M minimum cash reserve floor
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', marginTop: '6px' }}>
              All wave investments compete for same finite resource pool
            </div>
          </div>
        </div>
      </div>

      {/* Market priority + Resource allocation */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Market priority */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
            Market Priority
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '16px' }}>
            Recommended market sequencing
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {recommendation.marketPriority.map((mp, i) => {
              const colors = ['#2B8A5E', '#3B6FD4', '#7B5EA7']
              const color = colors[i] || '#999999'
              return (
                <div key={mp.market} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  background: '#F7F7F5', border: '1px solid #E5E5E0',
                  borderRadius: '6px', padding: '12px',
                }}>
                  <div style={{
                    fontFamily: 'Newsreader, serif', fontSize: '18px', fontWeight: 700,
                    color, flexShrink: 0, lineHeight: 1,
                    minWidth: '20px',
                  }}>
                    {mp.priority}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A', marginBottom: '4px' }}>
                      {mp.market}
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.4 }}>
                      {mp.rationale}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Risks */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
            Risk Register
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '16px' }}>
            Key risks and mitigations
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {recommendation.risks.map((risk, i) => {
              const color = SEVERITY_COLORS[risk.severity] || '#555555'
              return (
                <div key={i} style={{
                  background: '#FFFFFF', border: '1px solid #E5E5E0',
                  borderLeft: `3px solid ${color}`,
                  borderRadius: '4px', padding: '12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px',
                      color,
                      textTransform: 'uppercase',
                    }}>
                      {risk.severity}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#1A1A1A', marginBottom: '6px', lineHeight: 1.3 }}>
                    {risk.risk}
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>
                    <span style={{ color: '#999999' }}>Mitigation: </span>
                    {risk.mitigation}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Wave Action Plan */}
      {recommendation.waveActionPlan?.length > 0 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
            Wave Action Plan
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '16px' }}>
            Specific actions by technology wave
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recommendation.waveActionPlan.map((wave, i) => {
              const waveKey = wave.wave === 'wave1' ? '4g' : wave.wave === 'wave2' ? '5g' : wave.wave === 'wave3' ? 'ai' : wave.wave
              const color = WAVE_COLORS[waveKey] || '#999999'
              const waveLabels = { '4g': '4G LTE', '5g': '5G', 'ai': 'AI Devices' }
              return (
                <div key={i} style={{
                  background: '#F7F7F5', border: '1px solid #E5E5E0',
                  borderLeft: `3px solid ${color}`,
                  borderRadius: '4px', padding: '14px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, display: 'inline-block' }} />
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color, textTransform: 'uppercase' }}>
                        {waveLabels[waveKey] || waveKey}
                      </span>
                    </span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>
                      {wave.directive || wave.waveLabel || wave.title}
                    </span>
                  </div>
                  {wave.strategicLogic && (
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5, marginBottom: '10px' }}>
                      {wave.strategicLogic}
                    </div>
                  )}
                  {wave.actions?.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {wave.actions.map((action, j) => {
                        const actionText = typeof action === 'string' ? action : action.action
                        return (
                          <div key={j} style={{ display: 'flex', gap: '6px', fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
                            <span style={{ color, flexShrink: 0 }}>›</span>
                            <span>{actionText}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  {wave.what && (
                    <div style={{ marginTop: '8px', fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', lineHeight: 1.4, fontStyle: 'italic' }}>
                      {wave.what}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Investment Sequencing */}
      {recommendation.investmentSequencing?.length > 0 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
            Investment Sequencing
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '16px' }}>
            Cash-floor-constrained phased deployment
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {recommendation.investmentSequencing.map((phase, i) => {
              const isLast = i === recommendation.investmentSequencing.length - 1
              return (
                <div key={i} style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '28px', flexShrink: 0 }}>
                    <div style={{
                      width: '24px', height: '24px',
                      border: '1px solid #D0D0C8',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', fontWeight: 600, color: '#1A1A1A',
                      flexShrink: 0, background: '#FFFFFF', borderRadius: '2px',
                    }}>
                      {i + 1}
                    </div>
                    {!isLast && <div style={{ width: '1px', flex: 1, background: '#E5E5E0', marginTop: '2px', marginBottom: '2px', minHeight: '20px' }} />}
                  </div>
                  <div style={{ flex: 1, paddingBottom: isLast ? 0 : '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '24px', marginBottom: '6px' }}>
                      {phase.period && (
                        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>{phase.period}</span>
                      )}
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>
                        {phase.phase || phase.title}
                      </span>
                    </div>
                    <div style={{
                      background: '#F7F7F5', border: '1px solid #E5E5E0',
                      borderRadius: '4px', padding: '12px',
                    }}>
                      {phase.investments?.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: phase.cashImpact ? '8px' : 0 }}>
                          {phase.investments.map((inv, k) => (
                            <div key={k} style={{ display: 'flex', gap: '6px', fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
                              <span style={{ color: '#3B6FD4', flexShrink: 0 }}>›</span>
                              <span>{inv}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5 }}>
                          {phase.action || phase.description}
                        </div>
                      )}
                      {(phase.cashImpact || phase.cashConstraint) && (
                        <div style={{ marginTop: '6px', fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
                          <span style={{ color: '#999999' }}>Cash impact: </span>{phase.cashImpact || phase.cashConstraint}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Trade-offs */}
      <div id="tradeoffs" style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
          Trade-off Honesty
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginBottom: '16px' }}>
          What we gain vs what we sacrifice
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {recommendation.tradeoffs.map((t, i) => (
            <div key={i} style={{
              background: '#F7F7F5', border: '1px solid #E5E5E0',
              borderRadius: '6px', padding: '16px',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A', marginBottom: '12px' }}>
                {t.choice}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderTop: '3px solid #2B8A5E', borderRadius: '4px', padding: '8px' }}>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#2B8A5E', marginBottom: '4px', textTransform: 'uppercase' }}>Gain</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>{t.gain}</div>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderTop: '3px solid #C0392B', borderRadius: '4px', padding: '8px' }}>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', marginBottom: '4px', textTransform: 'uppercase' }}>Cost</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555' }}>{t.cost}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
