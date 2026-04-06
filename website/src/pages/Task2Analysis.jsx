import { useState } from 'react'
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
    <div id={id} style={{ marginBottom: '18px' }}>
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

const tabs = [
  { id: 'internal', label: 'Internal Analysis', sub: 'VRIO + Value Chain' },
  { id: 'external', label: 'External Analysis', sub: "PESTLE + Porter's + Strategic Group + CSF" },
  { id: 'strategic', label: 'Strategic Positioning', sub: "Bowman's + Ansoff + BCG + Levels + Integration" },
  { id: 'international', label: 'International Strategy', sub: 'Bartlett & Ghoshal + Entry Modes' },
]

export default function Task2Analysis() {
  const [activeTab, setActiveTab] = useState('internal')

  return (
    <div className="task2-page" style={{ padding: '40px 40px', width: '100%', animation: 'fadeInUp 0.3s ease' }}>
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
          Highest-weight section (30 marks). Internal analysis via VRIO/RBV and Value Chain. External analysis via PESTLE, Porter's Five Forces, Strategic Group, and CSF. Strategic positioning via Bowman's, Ansoff, BCG, and Levels of Strategy. International strategy via Bartlett & Ghoshal IR framework and Entry Mode analysis.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="task2-tabs" style={{
        display: 'flex',
        gap: '0',
        marginBottom: '32px',
        borderBottom: '1px solid #E5E5E0',
        overflowX: 'auto',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid #1A1A1A' : '2px solid transparent',
              cursor: 'pointer',
              textAlign: 'left',
              marginBottom: '-1px',
              flexShrink: 0,
            }}
          >
            <div style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: activeTab === tab.id ? 500 : 400,
              color: activeTab === tab.id ? '#1A1A1A' : '#999999',
              whiteSpace: 'nowrap',
            }}>
              {tab.label}
            </div>
            <div className="tab-sub" style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '11px',
              color: '#999999',
              marginTop: '2px',
              whiteSpace: 'nowrap',
            }}>
              {tab.sub}
            </div>
          </button>
        ))}
      </div>

      {activeTab === 'internal' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <section>
            <SectionHeader
              id="vrio"
              number="2.1"
              title="VRIO Matrix"
              wave="RBV"
              waveColor="#3B6FD4"
              sub="Resource-Based View: evaluates each capability against Valuable, Rare, Inimitable, Organised criteria"
            />
            <VRIOMatrix />
          </section>

          <section>
            <SectionHeader
              id="value-chain"
              number="2.2"
              title="Value Chain Analysis"
              wave="Porter 1985"
              waveColor="#3B6FD4"
              sub="Primary and support activities — identifying value-creating and cost-burdening activities"
            />
            <ValueChainDiagram />
          </section>
        </div>
      )}

      {activeTab === 'external' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <section>
            <SectionHeader
              id="pestle"
              number="2.3"
              title="PESTLE Analysis"
              wave="External Macro"
              waveColor="#2B8A5E"
              sub="Political, Economic, Social, Technological, Legal, Environmental factors — macro-environment scan"
            />
            <PESTLEGrid />
          </section>

          <section>
            <SectionHeader
              id="porters"
              number="2.4"
              title="Porter's Five Forces"
              wave="Industry Structure"
              waveColor="#2B8A5E"
              sub="Competitive rivalry, threat of new entrants, substitutes, buyer power, supplier power"
            />
            <PortersFiveForces />
          </section>

          <section>
            <SectionHeader
              id="strategic-group"
              number="2.5"
              title="Strategic Group Map"
              wave="Competitor Positioning"
              waveColor="#2B8A5E"
              sub="2D positioning of Mobilé Inc. vs competitors on technology leadership and geographic breadth"
            />
            <StrategicGroupMap />
          </section>

          <section>
            <SectionHeader
              id="csf"
              number="2.6"
              title="Critical Success Factors — Gap Analysis"
              wave="Performance vs Benchmark"
              waveColor="#2B8A5E"
              sub="Identifies where Mobilé must excel to win; measures current performance against industry benchmark"
            />
            <CSFTable />
          </section>
        </div>
      )}

      {activeTab === 'strategic' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <section>
            <SectionHeader
              id="bowmans"
              number="2.7"
              title="Bowman's Strategy Clock"
              wave="Competitive Positioning"
              waveColor="#2B8A5E"
              sub="Eight competitive positions on Price vs Perceived Benefit — Mobilé's migration path across three waves"
            />
            <BowmansStrategyClock />
          </section>

          <section>
            <SectionHeader
              id="ansoff"
              number="2.8"
              title="Ansoff Growth Matrix"
              wave="Growth Direction"
              waveColor="#F59E0B"
              sub="Existing/New Products × Existing/New Markets — classifying risk profile of each wave strategy"
            />
            <AnsoffMatrix />
          </section>

          <section>
            <SectionHeader
              id="bcg"
              number="2.9"
              title="BCG Growth-Share Matrix"
              wave="Portfolio Analysis"
              waveColor="#7B5EA7"
              sub="Market growth rate vs relative market share — portfolio balance and cash flow dynamics"
            />
            <BCGMatrix />
          </section>

          <section>
            <SectionHeader
              id="levels"
              number="2.10"
              title="Levels of Strategy"
              wave="Strategic Cascade"
              waveColor="#7B5EA7"
              sub="Corporate → Business → Functional → Operational — how three-wave decisions cascade through the organisation"
            />
            <LevelsOfStrategy />
          </section>

          <section>
            <SectionHeader
              id="integration"
              number="2.11"
              title="Integration Strategies"
              wave="Value Chain Boundaries"
              waveColor="#3B6FD4"
              sub="Horizontal and vertical integration decisions — selective integration across technology waves"
            />
            <IntegrationStrategies />
          </section>
        </div>
      )}

      {activeTab === 'international' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <section>
            <SectionHeader
              id="bartlett-ghoshal"
              number="2.12"
              title="Bartlett & Ghoshal IR Framework"
              wave="Integration-Responsiveness"
              waveColor="#2B8A5E"
              sub="Global integration vs local responsiveness — transition from Global to Transnational strategy"
            />
            <BartlettGhoshal />
          </section>

          <section>
            <SectionHeader
              id="entry-modes"
              number="2.13"
              title="Entry Mode Analysis"
              wave="Market Entry"
              waveColor="#7B5EA7"
              sub="Control–risk–commitment spectrum — different entry modes for each technology wave"
            />
            <EntryModeSpectrum />
          </section>
        </div>
      )}
    </div>
  )
}
