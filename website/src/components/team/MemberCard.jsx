const ROLE_COLORS = {
  'Strategy Lead': '#2B8A5E',
  'Strategy Support': '#3B6FD4',
  'Internal Analyst': '#3B6FD4',
  'External Analyst': '#7B5EA7',
  'Synthesis Lead': '#555555',
  'Recommendation Support': '#C0392B',
}

export default function MemberCard({ member }) {
  const color = ROLE_COLORS[member.role] || '#555555'

  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderTop: `3px solid ${color}`,
      borderRadius: '8px', padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{ marginBottom: '14px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '16px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>
          {member.name}
        </div>
        <div style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '12px',
          color,
        }}>
          {member.role}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6px', marginBottom: '12px' }}>
        <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px 10px' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '2px' }}>
            College ID
          </div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: '#1A1A1A' }}>
            {member.collegeId}
          </div>
        </div>
        <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px 10px' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '2px' }}>
            University ID
          </div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: '#1A1A1A' }}>
            {member.universityId}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #E5E5E0', paddingTop: '12px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '6px' }}>
          Task Assignment
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', marginBottom: '8px' }}>
          {member.tasks}
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>
          Presentation
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: color }}>
          {member.presentationRole}
        </div>
      </div>
    </div>
  )
}
