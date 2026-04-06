import { references } from '../data/caseStudyData'

function RefGroup({ title, items, color }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <div style={{ width: '3px', height: '16px', borderRadius: '2px', background: color, flexShrink: 0 }} />
        <h3 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '16px',
          fontWeight: 400,
          color: '#1A1A1A',
          margin: 0,
        }}>
          {title}
        </h3>
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '11px',
          color: '#999999',
        }}>
          {items.length} source{items.length !== 1 ? 's' : ''}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map((ref, i) => (
          <div key={ref.id} style={{
            background: '#F7F7F5',
            border: '1px solid #E5E5E0',
            borderRadius: '4px',
            padding: '12px 16px',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
          }}>
            <span style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '11px',
              color: '#999999',
              flexShrink: 0,
              marginTop: '1px',
            }}>
              [{String(i + 1).padStart(2, '0')}]
            </span>
            <span style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '13px',
              color: '#555555',
              lineHeight: 1.6,
            }}>
              {ref.citation}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function References() {
  return (
    <div style={{ padding: '40px 40px', width: '100%', animation: 'fadeInUp 0.3s ease' }}>
      <div style={{ marginBottom: '36px' }}>
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '12px',
          color: '#999999',
          marginBottom: '10px',
        }}>
          Harvard Format
        </div>
        <h1 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '34px',
          fontWeight: 400,
          color: '#1A1A1A',
          margin: '0 0 12px 0',
          letterSpacing: '-0.01em',
        }}>
          References
        </h1>
        <p style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '14px',
          color: '#555555',
          lineHeight: 1.7,
        }}>
          All citations in Harvard format. Sources organised by type: Case Study materials, Academic sources (frameworks, theory), and Industry data.
        </p>
      </div>

      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '6px',
        padding: '28px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <RefGroup
          title="Case Study Materials"
          items={references.caseStudy}
          color="#3B6FD4"
        />
        <RefGroup
          title="Academic Sources"
          items={references.academic}
          color="#2B8A5E"
        />
        <RefGroup
          title="Industry Data"
          items={references.industry}
          color="#7B5EA7"
        />
      </div>

      <div style={{
        marginTop: '16px',
        padding: '14px 18px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '6px',
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: '12px',
        color: '#999999',
        lineHeight: 1.6,
      }}>
        <span style={{ color: '#555555' }}>Harvard format guidance: </span>
        Author, A. (Year) <em>Title</em>. Edition. Place of publication: Publisher.
      </div>
    </div>
  )
}
