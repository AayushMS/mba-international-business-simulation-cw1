import { useState } from 'react'
import VRIOMatrix from '../components/frameworks/VRIOMatrix'
import ValueChainDiagram from '../components/frameworks/ValueChainDiagram'
import PESTLEGrid from '../components/frameworks/PESTLEGrid'
import PortersFiveForces from '../components/frameworks/PortersFiveForces'
import StrategicGroupMap from '../components/frameworks/StrategicGroupMap'
import CSFTable from '../components/frameworks/CSFTable'

function SectionHeader({ id, number, title, wave, waveColor, sub }) {
  return (
    <div id={id} style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
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

export default function Task2Analysis() {
  const [activeTab, setActiveTab] = useState('internal')

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
          Highest-weight section (30 marks). Internal analysis via VRIO/RBV and Value Chain reveals competitive capabilities and weaknesses. External analysis via PESTLE, Porter's Five Forces, Strategic Group Map, and CSF Gap Analysis uncovers opportunities and threats across all three technology waves.
        </p>
      </div>

      {/* Tab switcher */}
      <div style={{
        display: 'flex',
        gap: '0',
        marginBottom: '32px',
        borderBottom: '1px solid #E5E5E0',
      }}>
        {[
          { id: 'internal', label: 'Internal Analysis', sub: 'VRIO + Value Chain' },
          { id: 'external', label: 'External Analysis', sub: "PESTLE + Porter's + Strategic Group + CSF" },
        ].map(tab => (
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
            }}
          >
            <div style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: activeTab === tab.id ? 500 : 400,
              color: activeTab === tab.id ? '#1A1A1A' : '#999999',
            }}>
              {tab.label}
            </div>
            <div style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '11px',
              color: '#999999',
              marginTop: '2px',
            }}>
              {tab.sub}
            </div>
          </button>
        ))}
      </div>

      {activeTab === 'internal' ? (
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
      ) : (
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
    </div>
  )
}
