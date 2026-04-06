import MemberCard from '../components/team/MemberCard'
import ContributionLog from '../components/team/ContributionLog'
import { teamMembers } from '../data/caseStudyData'

export default function TeamPage() {
  return (
    <div style={{ padding: '40px 40px', width: '100%', animation: 'fadeInUp 0.3s ease' }}>
      <div style={{ marginBottom: '36px' }}>
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '12px',
          color: '#999999',
          marginBottom: '10px',
        }}>
          MN7002NI — Group Work
        </div>
        <h1 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '34px',
          fontWeight: 400,
          color: '#1A1A1A',
          margin: '0 0 12px 0',
          letterSpacing: '-0.01em',
        }}>
          Team Members
        </h1>
        <p style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '14px',
          color: '#555555',
          lineHeight: 1.7,
        }}>
          6 members, each with primary responsibilities across the four assignment tasks and 15-minute presentation.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '36px' }}>
        {teamMembers.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      <ContributionLog />
    </div>
  )
}
