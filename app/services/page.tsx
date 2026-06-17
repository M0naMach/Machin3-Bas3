import CommandNavigation from '@/components/navigation/command-navigation'

export const metadata = {
  title: 'Services - M0na Machin3',
  description: 'Building tech through art. Visual branding, process optimization, audits, web design, and agent architecture.',
}

const services = [
  {
    title: 'Visual Branding & Design',
    bg: 'rgba(40,40,40,0.55)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(220,200,160,0.8)',
    borderColor: 'rgba(180,140,80,0.3)',
    quadrants: [
      'Logo Design &\nIdentity Systems',
      'Typography\n& Voice',
      'Color Theory\n& Palettes',
      'Brand Structure\n& Frameworks',
    ],
    rotation: '-2deg',
    zIndex: 5,
    position: { top: '8%', left: '2%' },
    mobileOrder: 1,
  },
  {
    title: 'Process Optimization & Roadmaps',
    bg: 'rgba(12,60,50,0.6)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(220,200,160,0.75)',
    borderColor: 'rgba(180,140,80,0.25)',
    quadrants: [
      'Workflow\nOptimization',
      'Strategic\nRoadmapping',
      'Performance\nAnalysis',
      'Systems\nIntegration',
    ],
    rotation: '1.5deg',
    zIndex: 6,
    position: { top: '5%', left: '35%' },
    mobileOrder: 2,
  },
  {
    title: 'AI Actuarium Audits',
    bg: 'rgba(200,215,230,0.65)',
    titleColor: '#2C3E5A',
    labelColor: 'rgba(44,62,90,0.8)',
    borderColor: 'rgba(44,62,90,0.15)',
    quadrants: [
      'Algorithmic Risk &\nCoherence Checks',
      'Forensic &\nDeterministic Calculation',
      'Dual Visual\nModel',
      'Transparent Result\nTranslation',
    ],
    rotation: '2.5deg',
    zIndex: 4,
    position: { top: '6%', right: '2%' },
    mobileOrder: 3,
  },
  {
    title: 'Accountable AI Architecture',
    bg: 'rgba(26,39,68,0.8)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(201,169,110,0.8)',
    borderColor: 'rgba(201,169,110,0.25)',
    quadrants: [
      'Ethical Governance &\nTransparency Protocols',
      'Agent Prompt\n& Identity Design',
      'Scalable Architecture\n& Systems Integration',
      'Impact &\nCompliance Audits',
    ],
    rotation: '-1.5deg',
    zIndex: 7,
    position: { bottom: '8%', left: '5%' },
    mobileOrder: 4,
  },
  {
    title: 'Website Design & Development',
    bg: 'rgba(255,250,246,0.7)',
    titleColor: '#8B5E3C',
    labelColor: 'rgba(139,94,60,0.8)',
    borderColor: 'rgba(139,94,60,0.15)',
    quadrants: [
      'Digital Landscape\n& Structure',
      'Digital Aesthetics\n& Interaction Design',
      'Website Audit &\nPerformance Review',
      'Global Network &\nInnovation Systems',
    ],
    rotation: '1deg',
    zIndex: 5,
    position: { bottom: '6%', right: '3%' },
    mobileOrder: 5,
  },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: '#0a1f1c' }}>
      <CommandNavigation />

      {/* === Desk Surface Background === */}
      <div className="fixed inset-0 z-0">
        {/* Background image */}
        <img
          src="/SERVICE_PAGE-Full.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />

        {/* Subtle overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      </div>

      {/* === Desktop: Scattered cards on desk === */}
      <div className="relative z-10 hidden md:block" style={{ minHeight: '100vh' }}>
        {services.map((service, idx) => {
          const posStyle: React.CSSProperties = {
            position: 'absolute',
            width: 'clamp(280px, 30vw, 380px)',
            zIndex: service.zIndex,
            transform: `rotate(${service.rotation})`,
            ...service.position,
          }

          return (
            <div
              key={idx}
              className="group transition-all duration-500 hover:scale-[1.03] hover:z-50"
              style={posStyle}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: service.bg,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${service.borderColor}`,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              >
                <div className="p-4 pb-3">
                  <h2
                    className="font-anurati tracking-[0.12em] uppercase text-center"
                    style={{
                      fontSize: '0.6rem',
                      lineHeight: '1.6',
                      color: service.titleColor,
                    }}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* 2x2 Quadrant grid */}
                <div
                  className="mx-3 mb-3 rounded-lg overflow-hidden grid grid-cols-2 grid-rows-2"
                  style={{
                    border: `1px solid ${service.borderColor}`,
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  {service.quadrants.map((label, qi) => {
                    const isDark = service.bg.includes('26,39,68') || service.bg.includes('12,60,50') || service.bg.includes('40,40,40')
                    return (
                      <div
                        key={qi}
                        className="flex items-end p-3 min-h-[70px]"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.45)',
                          borderRight: qi % 2 === 0 ? `1px solid ${service.borderColor}` : 'none',
                          borderBottom: qi < 2 ? `1px solid ${service.borderColor}` : 'none',
                        }}
                      >
                        <span
                          className="font-caviar font-bold uppercase leading-tight"
                          style={{
                            fontSize: '0.55rem',
                            letterSpacing: '0.04em',
                            color: service.labelColor,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}

        {/* Center desk element — gold M0NA card */}
        <div
          className="absolute z-[3]"
          style={{
            top: '42%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-0.5deg)',
            width: '160px',
          }}
        >
          <div
            className="rounded-md p-4 text-center"
            style={{
              background: 'linear-gradient(135deg, #C9A96E, #DFC28A)',
              boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
            }}
          >
            <span
              className="font-anurati block"
              style={{ fontSize: '1.2rem', color: '#1a1a1a', letterSpacing: '0.15em' }}
            >
              M0NA
            </span>
            <span
              className="font-caviar block mt-1"
              style={{ fontSize: '0.5rem', color: 'rgba(26,26,26,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Machin3
            </span>
          </div>
        </div>

        {/* Scattered paper elements */}
        <div
          className="absolute z-[2]"
          style={{ top: '30%', left: '38%', transform: 'rotate(-4deg)' }}
        >
          <div
            className="w-52 h-40 rounded-sm"
            style={{
              background: 'linear-gradient(135deg, #f5f0e8, #ede7dc)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              padding: '1rem',
            }}
          >
            <div className="space-y-2">
              {[65, 80, 50, 70, 40, 60].map((w, i) => (
                <div key={i} className="h-px" style={{ width: `${w}%`, background: 'rgba(139,94,60,0.12)' }} />
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute z-[2]"
          style={{ top: '35%', left: '50%', transform: 'rotate(2deg)' }}
        >
          <div
            className="w-56 h-44 rounded-sm"
            style={{
              background: 'linear-gradient(145deg, #f0ebe3, #e8e2d8)',
              boxShadow: '0 5px 25px rgba(0,0,0,0.25)',
              padding: '1.25rem',
            }}
          >
            <p
              className="font-anurati text-center mb-3"
              style={{ fontSize: '0.4rem', color: 'rgba(30,30,30,0.35)', letterSpacing: '0.1em' }}
            >
              Actuarium Results &amp; Accountability Framework
            </p>
            {/* Geometric sketch */}
            <svg width="100%" height="70" viewBox="0 0 160 70" fill="none" style={{ opacity: 0.2 }}>
              <polygon points="80,5 130,60 30,60" stroke="#8B5E3C" strokeWidth="0.8" fill="none" />
              <polygon points="80,15 115,52 45,52" stroke="#8B5E3C" strokeWidth="0.5" fill="none" />
              <circle cx="80" cy="38" r="18" stroke="#8B5E3C" strokeWidth="0.5" fill="none" />
              <line x1="40" y1="38" x2="120" y2="38" stroke="#8B5E3C" strokeWidth="0.3" />
              <line x1="80" y1="5" x2="80" y2="65" stroke="#8B5E3C" strokeWidth="0.3" />
            </svg>
          </div>
        </div>
      </div>

      {/* === Mobile: Stacked cards === */}
      <div className="md:hidden relative z-10 px-4 pt-24 pb-20 space-y-5">
        <header className="mb-8">
          <h1
            className="font-aspal tracking-tight mb-2"
            style={{ fontSize: '2.5rem', lineHeight: '1.1', color: 'rgba(235,225,210,0.95)' }}
          >
            The Drafting Table
          </h1>
          <p
            className="font-caviar"
            style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(180,170,155,0.6)' }}
          >
            Every project begins here.
          </p>
        </header>

        {services
          .sort((a, b) => a.mobileOrder - b.mobileOrder)
          .map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden"
              style={{
                background: service.bg,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${service.borderColor}`,
                boxShadow: '0 6px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <div className="p-4 pb-3">
                <h2
                  className="font-anurati tracking-[0.12em] uppercase text-center"
                  style={{ fontSize: '0.6rem', lineHeight: '1.6', color: service.titleColor }}
                >
                  {service.title}
                </h2>
              </div>

              <div
                className="mx-3 mb-3 rounded-lg overflow-hidden grid grid-cols-2 grid-rows-2"
                style={{
                  border: `1px solid ${service.borderColor}`,
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                {service.quadrants.map((label, qi) => {
                  const isDark = service.bg.includes('26,39,68') || service.bg.includes('12,60,50') || service.bg.includes('40,40,40')
                  return (
                    <div
                      key={qi}
                      className="flex items-end p-3 min-h-[60px]"
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.45)',
                        borderRight: qi % 2 === 0 ? `1px solid ${service.borderColor}` : 'none',
                        borderBottom: qi < 2 ? `1px solid ${service.borderColor}` : 'none',
                      }}
                    >
                      <span
                        className="font-caviar font-bold uppercase leading-tight"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.04em',
                          color: service.labelColor,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
      </div>
    </main>
  )
}
