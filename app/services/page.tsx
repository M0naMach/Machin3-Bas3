import CommandNavigation from '@/components/navigation/command-navigation'

export const metadata = {
  title: 'Services - M0na Machin3',
  description: 'Building tech through art. Visual branding, process optimization, audits, web design, and agent architecture.',
}

const services = [
  {
    id: 'branding',
    title: 'Visual Branding and Design',
    position: 'top-left',
    items: ['Color palettes', 'Font specimens', 'Logo systems', 'Brand guidelines'],
  },
  {
    id: 'roadmaps',
    title: 'Process Optimization and Roadmaps',
    position: 'top-right',
    items: ['Workflow mapping', 'Milestone planning', 'Bottleneck analysis', 'Systems integration'],
  },
  {
    id: 'actuarium',
    title: 'Actuarium Audits',
    position: 'bottom-left',
    items: ['Data classification', 'Risk heatmaps', 'Trend analysis', 'Result translation'],
  },
  {
    id: 'agents',
    title: 'Accountable Agent Architecture',
    position: 'bottom-center',
    items: ['AI node configuration', 'Security parameters', 'Transparency bodies', 'Governance protocols'],
  },
  {
    id: 'websites',
    title: 'Website Audits and Design',
    position: 'bottom-right',
    items: ['User flows', 'Accessibility checks', 'Performance review', 'Interaction design'],
  },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: '#0a1f1c' }}>
      <CommandNavigation />

      {/* Desk surface */}
      <div className="fixed inset-0 z-0">
        {/* Dark teal base with subtle gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, #0d2926 0%, #0a201d 30%, #081a18 60%, #0b1f1c 100%)',
          }}
        />

        {/* Blueprint grid — minor lines */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,200,190,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,200,190,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Blueprint grid — major lines */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,200,190,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,200,190,0.7) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Desk lamp warm glow — upper left */}
        <div
          className="absolute -top-10 left-[15%] w-[500px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 20%, rgba(255,200,120,0.08), transparent 70%)',
          }}
        />

        {/* Secondary warm glow — center */}
        <div
          className="absolute top-[30%] left-[40%] w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(184,130,70,0.04), transparent 60%)',
          }}
        />

        {/* Vignette edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* Desk edge — bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            background: 'linear-gradient(to top, rgba(60,40,20,0.3), transparent)',
            borderTop: '1px solid rgba(140,100,60,0.15)',
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Center desk area — scattered papers */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="relative w-full max-w-3xl">
            {/* Main paper — Accountability Framework */}
            <div
              className="relative mx-auto w-[90%] max-w-lg rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #f5f0e8, #ede7dc)',
                padding: '2rem 2.5rem',
                transform: 'rotate(-1deg)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
              }}
            >
              <h2
                className="font-anurati text-center mb-6 tracking-[0.15em] uppercase"
                style={{ fontSize: '0.55rem', color: 'rgba(30,30,30,0.5)' }}
              >
                Actuarium Results &amp; Accountability Framework
              </h2>

              {/* Geometric sketch placeholder */}
              <div className="flex justify-center mb-6">
                <svg width="160" height="120" viewBox="0 0 160 120" fill="none" style={{ opacity: 0.25 }}>
                  <polygon points="80,10 140,90 20,90" stroke="#8B5E3C" strokeWidth="1" fill="none" />
                  <polygon points="80,30 120,80 40,80" stroke="#8B5E3C" strokeWidth="0.5" fill="none" />
                  <circle cx="80" cy="60" r="25" stroke="#8B5E3C" strokeWidth="0.5" fill="none" />
                  <line x1="30" y1="60" x2="130" y2="60" stroke="#8B5E3C" strokeWidth="0.3" />
                  <line x1="80" y1="10" x2="80" y2="100" stroke="#8B5E3C" strokeWidth="0.3" />
                </svg>
              </div>

              <div className="space-y-2">
                {['Technical transparency & efficiency', 'Systems framework assessment', 'Branding final refinement'].map((line, i) => (
                  <div
                    key={i}
                    className="h-px"
                    style={{
                      background: `linear-gradient(90deg, rgba(139,94,60,${0.15 + i * 0.05}), transparent ${70 - i * 15}%)`,
                    }}
                  />
                ))}
              </div>

              <p
                className="font-caviar mt-4 text-center italic"
                style={{ fontSize: '0.7rem', color: 'rgba(30,30,30,0.3)' }}
              >
                M0na Machin3 — Drafting Table
              </p>
            </div>

            {/* Secondary paper — tilted right */}
            <div
              className="absolute -top-6 -right-4 md:right-8 w-48 h-32 rounded-sm hidden md:block"
              style={{
                background: 'linear-gradient(145deg, #f0ebe3, #e8e2d8)',
                transform: 'rotate(4deg)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                padding: '1rem',
              }}
            >
              <div className="space-y-1.5">
                {[70, 55, 40, 60, 30].map((w, i) => (
                  <div
                    key={i}
                    className="h-px"
                    style={{
                      width: `${w}%`,
                      background: 'rgba(139,94,60,0.15)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Small note — bottom left */}
            <div
              className="absolute -bottom-4 -left-2 md:left-4 w-36 h-24 rounded-sm hidden md:block"
              style={{
                background: 'linear-gradient(160deg, #f2ede5, #eae4da)',
                transform: 'rotate(-3deg)',
                boxShadow: '0 3px 15px rgba(0,0,0,0.2)',
                padding: '0.75rem',
              }}
            >
              <div className="space-y-1">
                {[50, 65, 35].map((w, i) => (
                  <div
                    key={i}
                    className="h-px"
                    style={{ width: `${w}%`, background: 'rgba(139,94,60,0.12)' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphic service HUD panels */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Visual Branding — top left */}
          <div
            className="pointer-events-auto absolute top-20 left-4 md:left-8 lg:left-12 w-[280px] md:w-[320px]"
            style={{
              background: 'rgba(12,30,28,0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(180,140,80,0.25)',
              borderRadius: '6px',
              padding: '1rem 1.25rem',
              boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <h3
              className="font-anurati tracking-[0.15em] uppercase mb-3"
              style={{ fontSize: '0.55rem', color: 'rgba(220,200,160,0.9)' }}
            >
              Visual Branding and Design
            </h3>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {['#8B5E3C', '#C9A96E', '#2C3E5A', '#E8E2D8'].map((c, i) => (
                <div key={i} className="h-4 rounded-sm" style={{ background: c, opacity: 0.8 }} />
              ))}
            </div>
            <div className="flex gap-3 items-end">
              <span style={{ fontFamily: 'serif', fontSize: '1.5rem', color: 'rgba(220,200,160,0.7)' }}>Aa</span>
              <span style={{ fontFamily: 'sans-serif', fontSize: '1.1rem', color: 'rgba(220,200,160,0.5)' }}>Aa</span>
              <div className="flex gap-1.5 ml-auto">
                {['M', 'M', 'M'].map((l, i) => (
                  <span
                    key={i}
                    className="font-anurati"
                    style={{
                      fontSize: '0.6rem',
                      color: 'rgba(220,200,160,0.4)',
                      padding: '2px 4px',
                      border: '1px solid rgba(180,140,80,0.15)',
                      borderRadius: '2px',
                    }}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Process Optimization — top right */}
          <div
            className="pointer-events-auto absolute top-20 right-4 md:right-8 lg:right-12 w-[280px] md:w-[320px]"
            style={{
              background: 'rgba(12,30,28,0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(180,140,80,0.25)',
              borderRadius: '6px',
              padding: '1rem 1.25rem',
              boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <h3
              className="font-anurati tracking-[0.15em] uppercase mb-3"
              style={{ fontSize: '0.55rem', color: 'rgba(220,200,160,0.9)' }}
            >
              Process Optimization and Roadmaps
            </h3>
            <div className="space-y-1.5">
              {['Discovery', 'Analysis', 'Roadmap', 'Milestones'].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: i < 2 ? 'rgba(100,200,180,0.6)' : 'rgba(180,140,80,0.4)' }}
                  />
                  <div
                    className="flex-1 h-px"
                    style={{ background: `rgba(100,200,180,${0.15 + i * 0.05})` }}
                  />
                  <span
                    className="font-caviar"
                    style={{ fontSize: '0.6rem', color: 'rgba(220,200,160,0.5)' }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actuarium Audits — bottom left */}
          <div
            className="pointer-events-auto absolute bottom-16 left-4 md:left-8 lg:left-12 w-[280px] md:w-[300px]"
            style={{
              background: 'rgba(12,30,28,0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(180,140,80,0.25)',
              borderRadius: '6px',
              padding: '1rem 1.25rem',
              boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <h3
              className="font-anurati tracking-[0.15em] uppercase mb-3"
              style={{ fontSize: '0.55rem', color: 'rgba(220,200,160,0.9)' }}
            >
              Actuarium Audits
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {['Data classification', 'Data visualization', 'Risk heatmaps', 'Trend analysis'].map((item, i) => (
                <span
                  key={i}
                  className="font-caviar"
                  style={{ fontSize: '0.55rem', color: 'rgba(220,200,160,0.45)' }}
                >
                  {item}
                </span>
              ))}
            </div>
            {/* Mini bar chart */}
            <div className="flex items-end gap-1 mt-3 h-6">
              {[40, 65, 50, 80, 35, 70, 55].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 3
                      ? 'rgba(180,140,80,0.5)'
                      : 'rgba(100,200,180,0.25)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Accountable Agent Architecture — bottom center */}
          <div
            className="pointer-events-auto absolute bottom-16 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] hidden md:block"
            style={{
              background: 'rgba(12,30,28,0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(180,140,80,0.25)',
              borderRadius: '6px',
              padding: '1rem 1.25rem',
              boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <h3
              className="font-anurati tracking-[0.15em] uppercase mb-3"
              style={{ fontSize: '0.55rem', color: 'rgba(220,200,160,0.9)' }}
            >
              Accountable Agent Architecture
            </h3>
            {/* Node diagram */}
            <div className="flex items-center justify-center gap-3 mb-2">
              {['AI', 'AI', 'AI'].map((label, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      border: '1px solid rgba(100,200,180,0.3)',
                      background: 'rgba(100,200,180,0.08)',
                    }}
                  >
                    <span style={{ fontSize: '0.45rem', color: 'rgba(100,200,180,0.7)' }}>{label}</span>
                  </div>
                  {i < 2 && (
                    <div className="w-8 h-px mt-1" style={{ background: 'rgba(180,140,80,0.2)' }} />
                  )}
                </div>
              ))}
            </div>
            <span
              className="font-caviar block text-center"
              style={{ fontSize: '0.5rem', color: 'rgba(220,200,160,0.35)' }}
            >
              Security parameters &middot; Governance protocols
            </span>
          </div>

          {/* Website Audits — bottom right */}
          <div
            className="pointer-events-auto absolute bottom-16 right-4 md:right-8 lg:right-12 w-[280px] md:w-[300px]"
            style={{
              background: 'rgba(12,30,28,0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(180,140,80,0.25)',
              borderRadius: '6px',
              padding: '1rem 1.25rem',
              boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <h3
              className="font-anurati tracking-[0.15em] uppercase mb-3"
              style={{ fontSize: '0.55rem', color: 'rgba(220,200,160,0.9)' }}
            >
              Website Audits and Design
            </h3>
            <div className="grid grid-cols-3 gap-1.5">
              {['User frames', 'User flow', 'Accessibility', 'Wireframes', 'Performance', 'UX audit'].map((item, i) => (
                <div
                  key={i}
                  className="rounded-sm flex items-center justify-center"
                  style={{
                    height: '24px',
                    background: 'rgba(100,200,180,0.06)',
                    border: '1px solid rgba(100,200,180,0.1)',
                  }}
                >
                  <span
                    className="font-caviar"
                    style={{ fontSize: '0.4rem', color: 'rgba(220,200,160,0.4)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile fallback — stacked cards */}
        <div className="md:hidden relative z-20 px-4 pb-20 space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                background: 'rgba(12,30,28,0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(180,140,80,0.25)',
                borderRadius: '6px',
                padding: '1rem 1.25rem',
              }}
            >
              <h3
                className="font-anurati tracking-[0.15em] uppercase mb-2"
                style={{ fontSize: '0.55rem', color: 'rgba(220,200,160,0.9)' }}
              >
                {service.title}
              </h3>
              <div className="grid grid-cols-2 gap-1">
                {service.items.map((item, i) => (
                  <span
                    key={i}
                    className="font-caviar"
                    style={{ fontSize: '0.6rem', color: 'rgba(220,200,160,0.45)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
