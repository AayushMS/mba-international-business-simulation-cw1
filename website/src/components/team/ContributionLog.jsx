import { teamMembers } from '../../data/caseStudyData'

const ROLE_COLORS = {
  'Strategy Lead': '#2B8A5E',
  'Strategy Support': '#3B6FD4',
  'Internal Analyst': '#3B6FD4',
  'External Analyst': '#7B5EA7',
  'Synthesis Lead': '#555555',
  'Recommendation Support': '#C0392B',
}

export default function ContributionLog() {
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          Team Contribution Log
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          MN7002NI — Group Work Assignment Record
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F7F7F5' }}>
              {['#', 'Name', 'College ID', 'University ID', 'Role', 'Tasks', 'Presentation'].map(h => (
                <th key={h} style={{
                  padding: '10px 12px',
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                  color: '#999999', letterSpacing: '0.08em', textTransform: 'uppercase',
                  borderBottom: '1px solid #E5E5E0',
                  textAlign: h === '#' ? 'center' : 'left',
                  whiteSpace: 'nowrap',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, i) => {
              const color = ROLE_COLORS[member.role] || '#555555'
              return (
                <tr key={member.id} style={{
                  background: i % 2 === 0 ? '#F7F7F5' : '#FFFFFF',
                  borderBottom: '1px solid #E5E5E0',
                }}>
                  <td style={{ padding: '12px', textAlign: 'center', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: '#999999' }}>
                    {member.id}
                  </td>
                  <td style={{ padding: '12px', fontFamily: 'Newsreader, serif', fontSize: '14px', fontWeight: 600, color: '#1A1A1A', whiteSpace: 'nowrap' }}>
                    {member.name}
                  </td>
                  <td style={{ padding: '12px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#555555', whiteSpace: 'nowrap' }}>
                    {member.collegeId}
                  </td>
                  <td style={{ padding: '12px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#555555', whiteSpace: 'nowrap' }}>
                    {member.universityId}
                  </td>
                  <td style={{ padding: '12px', whiteSpace: 'nowrap' }}>
                    <span style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '12px',
                      color,
                    }}>
                      {member.role}
                    </span>
                  </td>
                  <td style={{ padding: '12px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', minWidth: '160px' }}>
                    {member.tasks}
                  </td>
                  <td style={{ padding: '12px', fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', minWidth: '200px' }}>
                    {member.presentationRole}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '16px', padding: '12px 16px', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '6px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '4px', textTransform: 'uppercase' }}>
          Module
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555555' }}>
          MN7002NI — International Business Strategy with Simulation · Islington College (Teesside University)
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: '#C0392B', marginTop: '6px' }}>
          Deadline: 10 April 2026 · Weight: 30%
        </div>
      </div>
    </div>
  )
}
