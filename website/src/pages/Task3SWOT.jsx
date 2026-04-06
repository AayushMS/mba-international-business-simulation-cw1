import SWOTMatrix from '../components/frameworks/SWOTMatrix'
import { swotData } from '../data/caseStudyData'

const WAVE_COLORS = {
  '4g': '#3B6FD4',
  '5g': '#2B8A5E',
  'ai': '#7B5EA7',
  'all': '#999999',
}

function ConnectionsPanel() {
  const connections = [
    {
      from: 'Strength: Dual-plant manufacturing',
      to: 'Opportunity: 5G market adoption',
      type: 'SO',
      color: '#2B8A5E',
      implication: 'Vietnam capacity can be redirected to 5G production at scale',
    },
    {
      from: 'Weakness: No 5G handset',
      to: 'Threat: Competitors 5G-capable',
      type: 'WT',
      color: '#C0392B',
      implication: 'Critical vulnerability — permanent market share loss without urgent action',
    },
    {
      from: 'Strength: Existing R&D infrastructure',
      to: 'Opportunity: AI-device window (2027–28)',
      type: 'SO',
      color: '#2B8A5E',
      implication: 'R&D base can be redirected toward AI if $150M commitment is made now — existing capability accelerates entry',
    },
    {
      from: 'Weakness: Cash at $90M floor',
      to: 'Threat: Simultaneous capital demands',
      type: 'WT',
      color: '#C0392B',
      implication: 'Cannot fund all three waves from cash alone — borrowing strategy required',
    },
  ]

  return (
    <div id="connections" style={{
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '6px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <h3 style={{
        fontFamily: 'Newsreader, Georgia, serif',
        fontSize: '18px',
        fontWeight: 400,
        color: '#1A1A1A',
        margin: '0 0 4px 0',
      }}>
        Internal–External Connections
      </h3>
      <div style={{
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: '12px',
        color: '#999999',
        marginBottom: '20px',
      }}>
        How strengths/weaknesses connect to opportunities/threats — strategic implications
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {connections.map((c, i) => (
          <div key={i} style={{
            background: '#F7F7F5',
            border: '1px solid #E5E5E0',
            borderLeft: `3px solid ${c.color}`,
            borderRadius: '4px',
            padding: '14px',
          }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '11px',
                color: '#555555',
                flex: 1,
                minWidth: '100px',
              }}>
                {c.from}
              </span>
              <span style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '12px',
                color: '#999999',
                flexShrink: 0,
              }}>
                →
              </span>
              <span style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '11px',
                color: '#555555',
                flex: 1,
                minWidth: '100px',
              }}>
                {c.to}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '10px',
                color: c.color,
                fontWeight: 500,
                flexShrink: 0,
              }}>
                {c.type}
              </span>
              <span style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '11px',
                color: '#555555',
                lineHeight: 1.4,
              }}>
                {c.implication}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '16px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { type: 'SO', label: 'Strength × Opportunity — exploit', color: '#2B8A5E' },
          { type: 'ST', label: 'Strength × Threat — neutralise', color: '#3B6FD4' },
          { type: 'WO', label: 'Weakness × Opportunity — convert', color: '#7B5EA7' },
          { type: 'WT', label: 'Weakness × Threat — defend', color: '#C0392B' },
        ].map(t => (
          <div key={t.type} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '10px',
              color: t.color,
              fontWeight: 500,
            }}>
              {t.type}
            </span>
            <span style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '11px',
              color: '#999999',
            }}>
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Task3SWOT() {
  const allItems = [
    ...swotData.strengths,
    ...swotData.weaknesses,
    ...swotData.opportunities,
    ...swotData.threats,
  ]
  const waveCounts = {
    '4g': allItems.filter(i => i.wave === '4g').length,
    '5g': allItems.filter(i => i.wave === '5g').length,
    'ai': allItems.filter(i => i.wave === 'ai').length,
    'all': allItems.filter(i => i.wave === 'all').length,
  }

  return (
    <div style={{ padding: '40px 40px', width: '100%', animation: 'fadeInUp 0.3s ease' }}>
      {/* Header */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '12px',
          color: '#999999',
          marginBottom: '10px',
        }}>
          Task 03 · 15 Marks — LO2+LO3
        </div>
        <h1 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '34px',
          fontWeight: 400,
          color: '#1A1A1A',
          margin: '0 0 12px 0',
          letterSpacing: '-0.01em',
        }}>
          SWOT Synthesis
        </h1>
        <p style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '14px',
          color: '#555555',
          lineHeight: 1.7,
          maxWidth: '640px',
        }}>
          Every SWOT point must trace directly to Task 2 evidence — no new information here. Colour-coded by wave to show which technology dimension each point belongs to.
        </p>

        {/* Wave distribution */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
          {Object.entries(waveCounts).map(([wave, count]) => (
            <div key={wave} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: WAVE_COLORS[wave], display: 'inline-block' }} />
              <span style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '12px',
                color: '#555555',
              }}>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', color: WAVE_COLORS[wave] }}>{count}</span>
                {' '}{wave === 'all' ? 'all waves' : wave.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <section>
          <SWOTMatrix />
        </section>

        <section>
          <ConnectionsPanel />
        </section>
      </div>
    </div>
  )
}
