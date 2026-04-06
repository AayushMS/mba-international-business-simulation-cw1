import RecommendationBrief from '../components/strategy/RecommendationBrief'
import ResourceAllocation from '../components/charts/ResourceAllocation'

export default function Task4Recommendation() {
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
          Task 04 · 15 Marks — LO3+LO4
        </div>
        <h1 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '34px',
          fontWeight: 400,
          color: '#1A1A1A',
          margin: '0 0 12px 0',
          letterSpacing: '-0.01em',
        }}>
          Strategic Recommendation
        </h1>
        <p style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '14px',
          color: '#555555',
          lineHeight: 1.7,
          maxWidth: '640px',
        }}>
          A clear, specific, actionable strategic choice — not a summary of analysis. Must acknowledge trade-offs honestly, address the $90M cash floor constraint, and differentiate recommendations by market and technology wave.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <section id="choice">
          <RecommendationBrief />
        </section>

        <section id="resources">
          <div style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '11px',
            color: '#999999',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '14px',
          }}>
            Resource Allocation Across Technology Waves
          </div>
          <ResourceAllocation />
        </section>

        {/* Financial projection placeholder */}
        <section>
          <div style={{
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
              Financial Projection
            </h3>
            <div style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '12px',
              color: '#999999',
              marginBottom: '16px',
            }}>
              Expected outcomes under recommended strategy
            </div>
            <div style={{
              padding: '16px',
              background: '#F7F7F5',
              border: '1px dashed #D0D0C8',
              borderRadius: '4px',
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '13px',
              color: '#999999',
              textAlign: 'center',
            }}>
              [CONTENT: Financial projections to be integrated from content-writer analysis — revenue outlook, cash position under recommended wave investment sequencing, ROI timelines]
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
