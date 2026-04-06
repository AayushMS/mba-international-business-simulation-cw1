/**
 * Quick Overview — The entire Mobilé Inc. strategy in plain language.
 * For someone with 2 minutes who just needs to understand the situation.
 */

const Section = ({ emoji, title, children }) => (
  <div style={{ marginBottom: '48px' }}>
    <h2 style={{
      fontFamily: 'Newsreader, Georgia, serif',
      fontSize: '24px', fontWeight: 400, color: '#1A1A1A',
      margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '12px',
    }}>
      <span style={{ fontSize: '28px' }}>{emoji}</span> {title}
    </h2>
    {children}
  </div>
)

const Card = ({ color, title, children }) => (
  <div style={{
    background: '#FFFFFF', border: '1px solid #E5E5E0',
    borderLeft: `4px solid ${color}`,
    borderRadius: '6px', padding: '20px 24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  }}>
    {title && (
      <h3 style={{
        fontFamily: 'Outfit, sans-serif', fontSize: '15px',
        fontWeight: 600, color: '#1A1A1A', margin: '0 0 8px',
      }}>
        {title}
      </h3>
    )}
    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7 }}>
      {children}
    </div>
  </div>
)

const Stat = ({ value, label, color }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '28px', fontWeight: 600, color: color || '#1A1A1A',
    }}>
      {value}
    </div>
    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#999', marginTop: '4px' }}>
      {label}
    </div>
  </div>
)

export default function QuickOverview() {
  return (
    <div style={{
      maxWidth: '900px', margin: '0 auto', width: '100%',
      padding: '48px 40px',
      animation: 'fadeInUp 0.3s ease',
    }}>
      {/* Hero */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#999', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          2-minute read
        </p>
        <h1 style={{
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: '36px', fontWeight: 400, color: '#1A1A1A',
          margin: '0 0 16px', lineHeight: 1.2,
        }}>
          The Whole Story, Simply
        </h1>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '16px',
          color: '#555', lineHeight: 1.7, margin: 0, maxWidth: '640px',
        }}>
          Mobilé Inc. is a phone company facing three big problems at once.
          Here's what's going on, what's at stake, and what we think they should do —
          without the business jargon.
        </p>
      </div>

      {/* The Company */}
      <Section emoji="📱" title="The Company">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '20px' }}>
          <Stat value="$4.8B" label="Revenue per year" />
          <Stat value="25%" label="Market share" />
          <Stat value="3" label="Markets (US, EU, Asia)" />
          <Stat value="4" label="Equal-size competitors" />
        </div>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7 }}>
          Mobilé makes smartphones and sells them in the US, Europe, and Asia.
          They're one of four companies that each own exactly 25% of the market.
          They make <strong>$4.8 billion a year</strong> — entirely from 4G phones.
          They have two factories: one in Atlanta (expensive but experienced)
          and one in Vietnam (cheap but still growing).
        </p>
      </Section>

      {/* What Just Happened */}
      <Section emoji="⚡" title="What Just Changed">
        <Card color="#C0392B" title="The government broke up a price-fixing arrangement">
          <p style={{ margin: 0 }}>
            Until early 2025, the four phone companies had an unspoken agreement to keep prices high.
            The US Department of Justice stepped in and ended it. Now all four companies are
            <strong> competing on price for the first time</strong>, which means profit margins are shrinking.
            The easy money is over.
          </p>
        </Card>
      </Section>

      {/* Three Problems */}
      <Section emoji="🔥" title="Three Problems at Once">
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>
          Mobilé isn't just dealing with the price war. They're facing three different technology
          challenges at the same time, and they all need money:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Card color="#3B6FD4" title="Problem 1: Their cash cow is under attack">
            All their money comes from 4G phones. But with the price war, that revenue
            is shrinking. They can't just keep doing what they've been doing — competitors
            will undercut them. They need to <strong>protect this income</strong> because it funds everything else.
          </Card>
          <Card color="#2B8A5E" title="Problem 2: They don't have a 5G phone (and everyone else does)">
            <strong>This is the big one.</strong> 5G networks already cover 70%+ of US cities.
            38% of American consumers already own a 5G device.
            And Mobilé has <strong>zero 5G products</strong>. Nothing.
            Every month they wait, competitors grab customers who won't easily switch back.
          </Card>
          <Card color="#7B5EA7" title="Problem 3: AI phones are coming, and they're not ready">
            Apple, Samsung, and Qualcomm are all building phones with built-in AI
            (think: on-device photo enhancement, health monitoring, personal assistants —
            no cloud needed). These hit the market in 2027–28.
            If Mobilé doesn't start R&D <strong>now</strong>, they'll be permanently behind.
          </Card>
        </div>
      </Section>

      {/* The Catch */}
      <Section emoji="💰" title="The Catch">
        <div style={{
          background: '#FFF5F5', border: '1px solid #E8D0D0',
          borderRadius: '8px', padding: '24px',
        }}>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', color: '#1A1A1A', lineHeight: 1.7, margin: 0 }}>
            All three problems need money. But Mobilé has a hard rule:
            they <strong>must keep at least $90 million in cash at all times</strong>.
            If they dip below that, they have to borrow at an emergency rate
            (7.8% instead of 4.8%) which is expensive and looks bad to investors.
          </p>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, margin: '12px 0 0' }}>
            So they can't just throw money at everything. They have to choose carefully
            what to fund, in what order, and how much.
          </p>
        </div>
      </Section>

      {/* What We Found */}
      <Section emoji="🔍" title="What Our Analysis Found">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', color: '#2B8A5E', flexShrink: 0 }}>1.</span>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
              <strong>Mobilé has no unique advantage</strong> — all four companies start from the same position.
              The only edge is Atlanta's factory experience (they've been making phones there for years and are
              really efficient at it), but that fades over time.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', color: '#2B8A5E', flexShrink: 0 }}>2.</span>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
              <strong>Speed to 5G is everything.</strong> The first company to launch a good 5G phone
              wins customer loyalty that's very hard for later companies to break.
              The window is open now but closing fast.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', color: '#2B8A5E', flexShrink: 0 }}>3.</span>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
              <strong>Waiting is the worst option.</strong> Companies that wait for 5G to be "safe"
              before investing in AI will be permanently behind on both.
              You have to invest in the future while the present is still paying the bills.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Recommend */}
      <Section emoji="🎯" title="What We Recommend">
        <div style={{
          background: '#FFFFFF', border: '2px solid #2B8A5E',
          borderRadius: '8px', padding: '28px',
          marginBottom: '20px',
        }}>
          <h3 style={{
            fontFamily: 'Newsreader, Georgia, serif', fontSize: '20px',
            fontWeight: 400, color: '#1A1A1A', margin: '0 0 12px',
          }}>
            Launch 5G fast by licensing the technology, while starting AI research on the side
          </h3>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Don't try to build 5G from scratch — that takes too long.
            License 5G technology from someone who already has it,
            get a phone to market by mid-2026, and start building your own 5G tech
            for the next generation. Meanwhile, commit $150M to AI R&D so you're
            not caught flat-footed when AI phones arrive in 2028.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div style={{
            background: '#F0F4FF', border: '1px solid #D0DCEF',
            borderRadius: '8px', padding: '20px',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 600, color: '#3B6FD4', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              4G: Defend
            </div>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>
              Keep making money from 4G. Cut costs by shifting production to Vietnam.
              Accept losing a little market share (25% → 22%) — that's okay because
              the freed-up money goes to 5G and AI.
            </p>
          </div>
          <div style={{
            background: '#EEFAF4', border: '1px solid #C0E5D5',
            borderRadius: '8px', padding: '20px',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 600, color: '#2B8A5E', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              5G: Launch fast
            </div>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>
              License 5G technology for a quick launch in the US and Europe by Q2 2026.
              Target 10% of the US 5G market within a year.
              Start building your own 5G tech simultaneously for version 2.
            </p>
          </div>
          <div style={{
            background: '#F5F0FA', border: '1px solid #DDD0EE',
            borderRadius: '8px', padding: '20px',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 600, color: '#7B5EA7', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              AI: Invest now
            </div>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.6, margin: 0 }}>
              Put $150M into AI research over the next 2 years.
              Build a dedicated team, partner with chip and software companies.
              Have a working prototype by late 2027, launch commercially in 2028.
            </p>
          </div>
        </div>
      </Section>

      {/* The Trade-offs */}
      <Section emoji="⚖️" title="The Honest Trade-offs">
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
          No strategy is free. Here's what Mobilé gives up with this plan:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { give: 'Licensing 5G means depending on a supplier (no own technology at first)', get: 'But you get to market 12+ months sooner than building from scratch' },
            { give: '4G market share drops from 25% to ~22%', get: 'But freed resources fund 5G launch and AI R&D' },
            { give: '$150M for AI is a bet — it might not pay off until 2028', get: 'But not investing means permanent technology follower status' },
            { give: 'Cash stays tight — $120M buffer leaves little room for error', get: 'But disciplined spending avoids the 7.8% emergency borrowing penalty' },
          ].map((t, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
              border: '1px solid #E5E5E0', borderRadius: '6px', overflow: 'hidden',
            }}>
              <div style={{ padding: '14px 16px', background: '#FFF8F8', borderRight: '1px solid #E5E5E0' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 600, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Give up</span>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.5, margin: '4px 0 0' }}>{t.give}</p>
              </div>
              <div style={{ padding: '14px 16px', background: '#F8FFF8' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 600, color: '#2B8A5E', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Get</span>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.5, margin: '4px 0 0' }}>{t.get}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom Line */}
      <div style={{
        background: '#1A1A1A', borderRadius: '8px', padding: '32px',
        marginBottom: '48px',
      }}>
        <h2 style={{
          fontFamily: 'Newsreader, Georgia, serif', fontSize: '22px',
          fontWeight: 400, color: '#FFFFFF', margin: '0 0 12px',
        }}>
          The Bottom Line
        </h2>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '15px',
          color: '#CCCCCC', lineHeight: 1.7, margin: 0,
        }}>
          Mobilé is a profitable company that's about to get disrupted if it doesn't act fast.
          The 4G money won't last forever, 5G is already here and they have nothing to sell,
          and AI phones are coming in 3 years. The plan: <strong style={{ color: '#FFFFFF' }}>use today's profits
          to buy a ticket to tomorrow</strong> — license 5G for speed, invest in AI for the long game,
          and manage the cash carefully so you don't run out along the way.
          It's not about doing everything perfectly. It's about not being left behind.
        </p>
      </div>
    </div>
  )
}
