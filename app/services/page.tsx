import CommandNavigation from '@/components/navigation/command-navigation'

export const metadata = {
  title: 'Services - M0na Machin3',
  description: 'Building tech through art. Visual branding, process optimization, audits, web design, and agent architecture.',
}

const services = [
  {
    title: 'Visual Branding & Design',
    bg: '#FFFAF6',
    titleColor: '#8B5E3C',
    labelColor: '#8B5E3C',
    borderColor: 'rgba(139,94,60,0.15)',
    quadrants: [
      { label: 'Logo Design &\nIdentity Systems' },
      { label: 'Typography\n& Voice' },
      { label: 'Color Theory\n& Palettes' },
      { label: 'Brand Structure\n& Frameworks' },
    ],
  },
  {
    title: 'Website Design & Development Services',
    bg: '#FFFAF6',
    titleColor: '#8B5E3C',
    labelColor: '#8B5E3C',
    borderColor: 'rgba(139,94,60,0.15)',
    quadrants: [
      { label: 'Digital Landscape\n& Structure' },
      { label: 'Digital Aesthetics\n& Interaction Design' },
      { label: 'Website Audit &\nPerformance Review' },
      { label: 'Global Network &\nInnovation Systems' },
    ],
  },
  {
    title: 'AI Actuarium Audits',
    bg: '#EBF2F8',
    titleColor: '#2C3E5A',
    labelColor: '#4A6178',
    borderColor: 'rgba(44,62,90,0.12)',
    quadrants: [
      { label: 'Algorithmic Risk &\nCoherence Checks' },
      { label: 'Forensic &\nDeterministic Calculation' },
      { label: 'Dual Visual\nModel' },
      { label: 'Transparent Result\nTranslation' },
    ],
  },
  {
    title: 'Accountable AI Architecture',
    bg: '#1A2744',
    titleColor: '#C9A96E',
    labelColor: '#C9A96E',
    borderColor: 'rgba(201,169,110,0.2)',
    quadrants: [
      { label: 'Ethical Governance &\nTransparency Protocols' },
      { label: 'Agent Prompt\n& Identity Design' },
      { label: 'Scalable Architecture\n& Systems Integration' },
      { label: 'Impact &\nCompliance Audits' },
    ],
  },
  {
    title: 'Process Optimization & Roadmaps',
    bg: '#0C3C32',
    titleColor: '#C9A96E',
    labelColor: '#C9A96E',
    borderColor: 'rgba(201,169,110,0.2)',
    quadrants: [
      { label: 'Workflow\nOptimization' },
      { label: 'Strategic\nRoadmapping' },
      { label: 'Performance\nAnalysis' },
      { label: 'Systems\nIntegration' },
    ],
  },
]

const tools = [
  { icon: '\u{1F4D0}', label: 'Measure' },
  { icon: '✏️', label: 'Draft' },
  { icon: '\u{1F4CF}', label: 'Align' },
  { icon: '\u{1F9F9}', label: 'Clear' },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CommandNavigation />

      <div className="flex min-h-screen">
        {/* Tool Palette Sidebar */}
        <aside
          className="hidden md:flex flex-col items-center gap-1 pt-24 pb-8 px-2 shrink-0"
          style={{
            width: '56px',
            background: 'rgba(0,57,51,0.06)',
            borderRight: '1px solid rgba(0,57,51,0.12)',
          }}
        >
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-10 h-10 rounded-md cursor-default transition-colors duration-200"
              style={{
                background: i === 0 ? 'rgba(0,57,51,0.1)' : 'transparent',
                border: i === 0 ? '1px solid rgba(0,57,51,0.15)' : '1px solid transparent',
              }}
              title={tool.label}
            >
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>{tool.icon}</span>
            </div>
          ))}

          <div className="w-6 h-px my-3" style={{ background: 'rgba(0,57,51,0.12)' }} />

          {services.map((s, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full my-1"
              style={{ background: 'rgba(0,57,51,0.2)' }}
              title={s.title}
            />
          ))}

          <div className="mt-auto">
            <span
              className="font-anurati block"
              style={{
                fontSize: '0.45rem',
                letterSpacing: '0.1em',
                color: 'rgba(0,57,51,0.25)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
            >
              M0NA MACHIN3
            </span>
          </div>
        </aside>

        {/* Work Canvas */}
        <div
          className="flex-1 relative"
          style={{
            backgroundColor: '#FFFAF6',
            backgroundImage: `
              linear-gradient(rgba(0,57,51,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,57,51,0.25) 1px, transparent 1px),
              linear-gradient(rgba(0,57,51,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,57,51,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

            {/* Header */}
            <header className="pt-24 pb-14">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px flex-1 max-w-[60px]" style={{ background: 'rgba(0,57,51,0.25)' }} />
                <span
                  className="font-anurati text-xs tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(0,57,51,0.45)' }}
                >
                  Service Index
                </span>
              </div>

              <h1
                className="font-aspal tracking-tight mb-4"
                style={{ fontSize: '3.5rem', lineHeight: '1.1', color: '#1a1a1a' }}
              >
                The Drafting Table
              </h1>

              <p
                className="font-caviar max-w-xl"
                style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'rgba(0,57,51,0.55)' }}
              >
                Every project begins here — measured, considered, and drawn with care.
                These are the services I draft from.
              </p>
            </header>

            {/* Service book covers */}
            <section className="pb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-hidden transition-transform duration-500 hover:-translate-y-1"
                  style={{
                    background: service.bg,
                    boxShadow: `
                      0 4px 20px rgba(0,0,0,0.08),
                      0 1px 4px rgba(0,0,0,0.05),
                      inset 0 1px 0 rgba(255,255,255,0.4)
                    `,
                    aspectRatio: '1 / 1.05',
                  }}
                >
                  {/* Book edge texture — left spine */}
                  <div
                    className="absolute top-2 bottom-2 left-0 w-1 rounded-r-sm"
                    style={{
                      background: `linear-gradient(180deg, ${service.borderColor}, transparent 30%, transparent 70%, ${service.borderColor})`,
                    }}
                  />

                  {/* Corner ornaments for dark cards */}
                  {(service.bg === '#1A2744' || service.bg === '#0C3C32') && (
                    <>
                      <div
                        className="absolute top-3 left-3 w-4 h-4"
                        style={{
                          borderTop: `1px solid ${service.borderColor}`,
                          borderLeft: `1px solid ${service.borderColor}`,
                        }}
                      />
                      <div
                        className="absolute top-3 right-3 w-4 h-4"
                        style={{
                          borderTop: `1px solid ${service.borderColor}`,
                          borderRight: `1px solid ${service.borderColor}`,
                        }}
                      />
                      <div
                        className="absolute bottom-3 left-3 w-4 h-4"
                        style={{
                          borderBottom: `1px solid ${service.borderColor}`,
                          borderLeft: `1px solid ${service.borderColor}`,
                        }}
                      />
                      <div
                        className="absolute bottom-3 right-3 w-4 h-4"
                        style={{
                          borderBottom: `1px solid ${service.borderColor}`,
                          borderRight: `1px solid ${service.borderColor}`,
                        }}
                      />
                    </>
                  )}

                  <div className="relative h-full flex flex-col p-5 md:p-6">
                    {/* Title */}
                    <h2
                      className="font-anurati text-center mb-4 tracking-[0.12em] uppercase"
                      style={{
                        fontSize: '0.7rem',
                        lineHeight: '1.6',
                        color: service.titleColor,
                      }}
                    >
                      {service.title}
                    </h2>

                    {/* 2x2 Quadrant Panel */}
                    <div
                      className="flex-1 rounded-lg overflow-hidden grid grid-cols-2 grid-rows-2"
                      style={{
                        border: `1px solid ${service.borderColor}`,
                        boxShadow: `inset 0 2px 8px rgba(0,0,0,0.06)`,
                      }}
                    >
                      {service.quadrants.map((q, qi) => (
                        <div
                          key={qi}
                          className="relative flex items-end p-3 md:p-4 transition-colors duration-300"
                          style={{
                            background: (service.bg === '#1A2744' || service.bg === '#0C3C32')
                              ? 'rgba(255,255,255,0.04)'
                              : 'rgba(255,255,255,0.5)',
                            borderRight: qi % 2 === 0 ? `1px solid ${service.borderColor}` : 'none',
                            borderBottom: qi < 2 ? `1px solid ${service.borderColor}` : 'none',
                          }}
                        >
                          <span
                            className="font-caviar font-bold uppercase leading-tight"
                            style={{
                              fontSize: '0.65rem',
                              letterSpacing: '0.06em',
                              color: service.labelColor,
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {q.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Footer CTA */}
            <section className="pb-20 text-center">
              <div
                className="h-px mx-auto mb-8 max-w-[180px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,57,51,0.12), transparent)' }}
              />
              <p className="font-caviar mb-1" style={{ fontSize: '0.9rem', color: 'rgba(30,30,30,0.4)' }}>
                Ready to draft something together?
              </p>
              <p
                className="font-anurati"
                style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(0,57,51,0.35)' }}
              >
                START WITH /CONNECT
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
