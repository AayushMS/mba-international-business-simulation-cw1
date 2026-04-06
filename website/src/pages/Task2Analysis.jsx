import VRIOMatrix from '../components/frameworks/VRIOMatrix'
import ValueChainDiagram from '../components/frameworks/ValueChainDiagram'
import PESTLEGrid from '../components/frameworks/PESTLEGrid'
import PortersFiveForces from '../components/frameworks/PortersFiveForces'
import StrategicGroupMap from '../components/frameworks/StrategicGroupMap'
import CSFTable from '../components/frameworks/CSFTable'
import BowmansStrategyClock from '../components/frameworks/BowmansStrategyClock'
import AnsoffMatrix from '../components/frameworks/AnsoffMatrix'
import BCGMatrix from '../components/frameworks/BCGMatrix'
import LevelsOfStrategy from '../components/frameworks/LevelsOfStrategy'
import IntegrationStrategies from '../components/frameworks/IntegrationStrategies'
import BartlettGhoshal from '../components/frameworks/BartlettGhoshal'
import EntryModeSpectrum from '../components/frameworks/EntryModeSpectrum'

function SectionHeader({ id, number, title, wave, waveColor, sub }) {
  return (
    <div id={id} style={{ marginBottom: '18px', scrollMarginTop: '68px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' }}>
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
      {sub && (
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '13px',
          color: '#999999',
          marginLeft: '36px',
          lineHeight: 1.5,
        }}>
          {sub}
        </div>
      )}
    </div>
  )
}

function GroupDivider({ label, color }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '8px 0', marginTop: '20px',
    }}>
      <div style={{ height: '1px', flex: 1, background: '#E5E5E0' }} />
      <span style={{
        fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
        color: color || '#999999', textTransform: 'uppercase', letterSpacing: '0.08em',
        flexShrink: 0,
      }}>
        {label}
      </span>
      <div style={{ height: '1px', flex: 1, background: '#E5E5E0' }} />
    </div>
  )
}

export default function Task2Analysis() {
  return (
    <div className="task2-page" style={{ padding: '40px', width: '100%', animation: 'fadeInUp 0.3s ease' }}>
      {/* Header */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '12px',
          color: '#999999',
          marginBottom: '10px',
        }}>
          Task 02 · 30 Marks — LO2
        </div>
        <h1 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '34px',
          fontWeight: 400,
          color: '#1A1A1A',
          margin: '0 0 12px 0',
          letterSpacing: '-0.01em',
        }}>
          Internal & External Analysis
        </h1>
        <p style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '14px',
          color: '#555555',
          lineHeight: 1.7,
          maxWidth: '640px',
        }}>
          Highest-weight section (30 marks). 13 strategic frameworks applied specifically to Mobilé Inc. — internal capabilities, external environment, strategic positioning, and international strategy.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

        {/* ── INTERNAL ANALYSIS ── */}
        <GroupDivider label="Internal Analysis" color="#3B6FD4" />

        <section>
          <SectionHeader
            id="vrio" number="2.1" title="VRIO Matrix"
            wave="RBV" waveColor="#3B6FD4"
            sub="Resource-Based View: evaluates each capability against Valuable, Rare, Inimitable, Organised criteria"
          />
          <VRIOMatrix />
        </section>

        <section>
          <SectionHeader
            id="value-chain" number="2.2" title="Value Chain Analysis"
            wave="Porter 1985" waveColor="#3B6FD4"
            sub="Primary and support activities — identifying value-creating and cost-burdening activities"
          />
          <ValueChainDiagram />
        </section>

        {/* ── EXTERNAL ANALYSIS ── */}
        <GroupDivider label="External Analysis" color="#2B8A5E" />

        <section>
          <SectionHeader
            id="pestle" number="2.3" title="PESTLE Analysis"
            wave="External Macro" waveColor="#2B8A5E"
            sub="Political, Economic, Social, Technological, Legal, Environmental factors — macro-environment scan"
          />
          <PESTLEGrid />
        </section>

        <section>
          <SectionHeader
            id="porters" number="2.4" title="Porter's Five Forces"
            wave="Industry Structure" waveColor="#2B8A5E"
            sub="Competitive rivalry, threat of new entrants, substitutes, buyer power, supplier power"
          />
          <PortersFiveForces />
        </section>

        <section>
          <SectionHeader
            id="strategic-group" number="2.5" title="Strategic Group Map"
            wave="Competitor Positioning" waveColor="#2B8A5E"
            sub="2D positioning of Mobilé Inc. vs competitors on technology leadership and geographic breadth"
          />
          <StrategicGroupMap />
        </section>

        <section>
          <SectionHeader
            id="csf" number="2.6" title="Critical Success Factors — Gap Analysis"
            wave="Performance vs Benchmark" waveColor="#2B8A5E"
            sub="Identifies where Mobilé must excel to win; measures current performance against industry benchmark"
          />
          <CSFTable />
        </section>

        {/* ── STRATEGIC POSITIONING ── */}
        <GroupDivider label="Strategic Positioning" color="#7B5EA7" />

        <section>
          <SectionHeader
            id="bowmans" number="2.7" title="Bowman's Strategy Clock"
            wave="Competitive Positioning" waveColor="#2B8A5E"
            sub="Eight competitive positions on Price vs Perceived Benefit — Mobilé's migration path across three waves"
          />
          <BowmansStrategyClock />
        </section>

        <section>
          <SectionHeader
            id="ansoff" number="2.8" title="Ansoff Growth Matrix"
            wave="Growth Direction" waveColor="#F59E0B"
            sub="Existing/New Products × Existing/New Markets — classifying risk profile of each wave strategy"
          />
          <AnsoffMatrix />
        </section>

        <section>
          <SectionHeader
            id="bcg" number="2.9" title="BCG Growth-Share Matrix"
            wave="Portfolio Analysis" waveColor="#7B5EA7"
            sub="Market growth rate vs relative market share — portfolio balance and cash flow dynamics"
          />
          <BCGMatrix />
        </section>

        <section>
          <SectionHeader
            id="levels" number="2.10" title="Levels of Strategy"
            wave="Strategic Cascade" waveColor="#7B5EA7"
            sub="Corporate → Business → Functional → Operational — how three-wave decisions cascade through the organisation"
          />
          <LevelsOfStrategy />
        </section>

        <section>
          <SectionHeader
            id="integration" number="2.11" title="Integration Strategies"
            wave="Value Chain Boundaries" waveColor="#3B6FD4"
            sub="Horizontal and vertical integration decisions — selective integration across technology waves"
          />
          <IntegrationStrategies />
        </section>

        {/* ── INTERNATIONAL STRATEGY ── */}
        <GroupDivider label="International Strategy" color="#2B8A5E" />

        <section>
          <SectionHeader
            id="bartlett-ghoshal" number="2.12" title="Bartlett & Ghoshal IR Framework"
            wave="Integration-Responsiveness" waveColor="#2B8A5E"
            sub="Global integration vs local responsiveness — transition from Global to Transnational strategy"
          />
          <BartlettGhoshal />
        </section>

        <section>
          <SectionHeader
            id="entry-modes" number="2.13" title="Entry Mode Analysis"
            wave="Market Entry" waveColor="#7B5EA7"
            sub="Control–risk–commitment spectrum — different entry modes for each technology wave"
          />
          <EntryModeSpectrum />
        </section>
      </div>
    </div>
  )
}
