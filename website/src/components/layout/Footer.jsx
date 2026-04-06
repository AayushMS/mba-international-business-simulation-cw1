export default function Footer() {
  return (
    <footer style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E5E5E0',
      marginTop: 'auto',
    }}>
      <div className="footer-inner" style={{
        padding: '20px 48px',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div>
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif',
            fontSize: '13px',
            fontWeight: 400,
            color: '#555555',
            marginBottom: '3px',
          }}>
            Mobilé Inc. Strategic Analysis
          </div>
          <div style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '11px',
            color: '#999999',
          }}>
            MN7002NI — International Business Strategy with Simulation
          </div>
        </div>

        <div className="footer-meta" style={{ display: 'flex', gap: '24px' }}>
          <div style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '11px', color: '#999999' }}>
            Module: MN7002NI
          </div>
          <div style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '11px', color: '#999999' }}>
            Weight: 30%
          </div>
          <div style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '11px', color: '#999999' }}>
            Deadline: <span style={{ color: '#C0392B' }}>10 April 2026</span>
          </div>
        </div>

        <div style={{
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontSize: '11px',
          color: '#999999',
        }}>
          {['Bishwesh', 'Gaurav', 'Bishan', 'Aayush', 'Ruchan', 'Shaswat'].join(' · ')}
        </div>
      </div>
    </footer>
  )
}
