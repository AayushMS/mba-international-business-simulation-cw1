import VisionMission from '../components/strategy/VisionMission'
import GoalsObjectives from '../components/strategy/GoalsObjectives'

function PageHeader({ taskNum, title, marks, description }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <div style={{
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: '12px',
        color: '#999999',
        marginBottom: '10px',
      }}>
        Task {taskNum} · {marks}
      </div>
      <h1 style={{
        fontFamily: 'Newsreader, Georgia, serif',
        fontSize: '34px',
        fontWeight: 400,
        color: '#1A1A1A',
        margin: '0 0 12px 0',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h1>
      <p style={{
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: '14px',
        color: '#555555',
        lineHeight: 1.7,
        maxWidth: '640px',
      }}>
        {description}
      </p>
    </div>
  )
}

function SectionHeader({ id, number, title, wave, waveColor }) {
  return (
    <div id={id} style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '18px', paddingTop: '8px' }}>
      <span style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '11px',
        color: '#999999',
      }}>
        {number}
      </span>
      <h2 style={{
        fontFamily: 'Newsreader, Georgia, serif',
        fontSize: '22px',
        fontWeight: 400,
        color: '#1A1A1A',
        margin: 0,
      }}>
        {title}
      </h2>
      {wave && (
        <span style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '11px',
          color: waveColor,
        }}>
          {wave}
        </span>
      )}
    </div>
  )
}

export default function Task1StrategyProcess() {
  return (
    <div style={{ padding: '40px 40px', width: '100%', animation: 'fadeInUp 0.3s ease' }}>
      <PageHeader
        taskNum="01"
        title="Strategy Process"
        marks="15 Marks — LO1"
        description="Defines Mobilé Inc.'s strategic direction: where we're going (Vision), how we'll get there (Mission), what we'll achieve (Goals), and how we'll measure success (SMART Objectives). Each element anchored to the three-wave technology challenge."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <section>
          <SectionHeader id="vision" number="1.1" title="Vision & Mission" wave="4G → AI" waveColor="#7B5EA7" />
          <VisionMission />
        </section>

        <section>
          <SectionHeader id="goals" number="1.2" title="Strategic Goals & SMART Objectives" wave="All Waves" waveColor="#999999" />
          <GoalsObjectives />
        </section>
      </div>
    </div>
  )
}
