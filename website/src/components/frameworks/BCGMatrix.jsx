import { useState } from 'react'
import { bcgMatrix } from '../../data/task2FrameworksData'

const QUADRANT_ICONS = {
  'stars': '\u2605',
  'question-marks': '?',
  'cash-cows': '$',
  'dogs': '\u2193',
}

export default function BCGMatrix() {
  const [activeProduct, setActiveProduct] = useState(null)
  const data = bcgMatrix

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: '17px', fontWeight: 600, color: '#1A1A1A' }}>
          BCG Growth-Share Matrix
        </div>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#999999', marginTop: '4px' }}>
          Portfolio analysis — market growth rate vs relative market share for Mobilé's three technology waves
        </div>
      </div>

      <div className="framework-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Matrix visual */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr', gridTemplateRows: 'auto 1fr 1fr 30px', gap: '0' }}>
            {/* Corner */}
            <div />
            {/* Column headers */}
            <div style={{ textAlign: 'center', padding: '6px', borderBottom: '2px solid #1A1A1A' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase' }}>High Share</div>
            </div>
            <div style={{ textAlign: 'center', padding: '6px', borderBottom: '2px solid #1A1A1A' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase' }}>Low Share</div>
            </div>

            {/* Row 1: High growth */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid #1A1A1A' }}>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textTransform: 'uppercase' }}>High Growth</span>
            </div>
            {/* Stars */}
            <div style={{ background: '#FFF9E6', border: '1px solid #E5E5E0', padding: '16px', position: 'relative', minHeight: '140px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F59E0B', marginBottom: '4px' }}>
                {QUADRANT_ICONS['stars']} Stars
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', lineHeight: 1.5 }}>
                High growth + high share. Generate & consume cash.
              </div>
              <div style={{ position: 'absolute', bottom: '12px', left: '16px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#F59E0B', fontStyle: 'italic' }}>
                Target for 5G (post-launch)
              </div>
            </div>
            {/* Question Marks */}
            <div style={{ background: '#FFF0F0', border: '1px solid #E5E5E0', padding: '16px', position: 'relative', minHeight: '140px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#C0392B', marginBottom: '4px' }}>
                ? Question Marks
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', lineHeight: 1.5, marginBottom: '8px' }}>
                High growth + low share. Cash-hungry, uncertain.
              </div>
              {/* 5G marker */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#2B8A5E', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#2B8A5E', fontWeight: 500 }}>5G (0% share)</span>
              </div>
              {/* AI marker */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#7B5EA7', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#7B5EA7', fontWeight: 500 }}>AI (pre-market)</span>
              </div>
            </div>

            {/* Row 2: Low growth */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid #1A1A1A' }}>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textTransform: 'uppercase' }}>Low Growth</span>
            </div>
            {/* Cash Cows */}
            <div style={{ background: '#EFF6FF', border: '1px solid #E5E5E0', padding: '16px', position: 'relative', minHeight: '140px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#3B6FD4', marginBottom: '4px' }}>
                $ Cash Cows
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', lineHeight: 1.5, marginBottom: '8px' }}>
                Low growth + high share. Surplus cash generators.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#3B6FD4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#FFFFFF', fontSize: '7px', fontFamily: 'IBM Plex Mono, monospace' }}>4G</span>
                </span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#3B6FD4', fontWeight: 500 }}>4G LTE (~$4.8B)</span>
              </div>
            </div>
            {/* Dogs */}
            <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', padding: '16px', minHeight: '140px' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 500, color: '#999999', marginBottom: '4px' }}>
                {QUADRANT_ICONS['dogs']} Dogs
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#999999', lineHeight: 1.5 }}>
                Low growth + low share. No Mobilé product here currently.
              </div>
            </div>

            {/* Bottom labels */}
            <div />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999' }}>RELATIVE MARKET SHARE →</span>
            </div>
            <div />
          </div>

          {/* Cash flow arrow */}
          <div style={{ marginTop: '12px', padding: '10px 14px', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '6px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>Cash Flow Dynamic</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ color: '#3B6FD4', fontWeight: 500 }}>4G Cash Cow</span>
              <span style={{ color: '#999999' }}>→ funds →</span>
              <span style={{ color: '#2B8A5E', fontWeight: 500 }}>5G Question Mark</span>
              <span style={{ color: '#999999' }}>+</span>
              <span style={{ color: '#7B5EA7', fontWeight: 500 }}>AI Question Mark</span>
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#C0392B', marginTop: '4px' }}>
              Constraint: $90M minimum cash reserve floor limits total investment
            </div>
          </div>
        </div>

        {/* Product details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {data.mobileProducts.map(product => {
            const isActive = activeProduct === product.product
            return (
              <div
                key={product.product}
                onClick={() => setActiveProduct(isActive ? null : product.product)}
                style={{
                  background: isActive ? '#F0F0ED' : '#FFFFFF',
                  border: '1px solid #E5E5E0',
                  borderLeft: `3px solid ${product.color}`,
                  borderRadius: '6px', padding: '12px',
                  cursor: 'pointer', transition: 'background 0.15s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A' }}>
                    {product.product}
                  </span>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px',
                      color: '#FFFFFF', background: product.color, padding: '2px 8px',
                      borderRadius: '10px',
                    }}>
                      {product.quadrant === 'cash-cows' ? 'Cash Cow' : product.quadrant === 'question-marks' ? 'Question Mark' : product.quadrant}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>Revenue: {product.annualRevenue}</span>
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>Action: {product.strategicAction}</span>
                </div>

                {isActive && (
                  <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.6 }}>
                      {product.reasoning}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px' }}>
                        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>Market Growth</div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555' }}>{product.marketGrowth}</div>
                      </div>
                      <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '8px' }}>
                        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: '#999999', textTransform: 'uppercase', marginBottom: '4px' }}>Relative Share</div>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555' }}>{product.relativeShare}</div>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#1A1A1A', background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: `3px solid ${product.color}`, borderRadius: '4px', padding: '7px 10px' }}>
                      <span style={{ color: '#999999' }}>Strategic Action — {product.strategicAction}: </span>{product.actionDetail}
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', color: '#555555', background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '7px 10px' }}>
                      <span style={{ color: '#999999' }}>Evidence: </span>{product.evidence}
                    </div>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999' }}>
                      SWOT feed → {product.swotFeed}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {/* Portfolio insight */}
          <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #C0392B', borderRadius: '4px', padding: '14px', marginTop: '4px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#C0392B', marginBottom: '6px', textTransform: 'uppercase' }}>
              Critical Portfolio Vulnerability
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5 }}>
              {data.cashFlowDynamics.keyInsight}
            </div>
          </div>
        </div>
      </div>

      {/* Key findings */}
      <div className="framework-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '16px' }}>
        {Object.entries(data.keyFindings).map(([key, value]) => (
          <div key={key} style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderRadius: '4px', padding: '14px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#999999', marginBottom: '6px', textTransform: 'uppercase' }}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', color: '#555555', lineHeight: 1.5 }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
