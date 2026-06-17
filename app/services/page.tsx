import CommandNavigation from '@/components/navigation/command-navigation'

export const metadata = {
  title: 'Services - M0na Machin3',
  description: 'Building tech through art. Visual branding, process optimization, audits, web design, and agent architecture.',
}

const services = [
  {
    number: '01',
    icon: '◇',
    title: 'Visual Branding & Design',
    tagline: 'Your identity, rendered with intention.',
    description:
      'Purpose-driven visual systems that translate who you are into what people see. From logo suites to full brand ecosystems — color, type, and layout engineered for emotional resonance and cross-medium consistency.',
    deliverables: [
      'Brand identity audit & strategic direction',
      'Logo design & iconography suite',
      'Color system & typography framework',
      'Brand guidelines & asset deployment kit',
      'Templates, layouts & accessibility review',
    ],
  },
  {
    number: '02',
    icon: '⟁',
    title: 'Process Optimization & Roadmaps',
    tagline: 'Clarity from chaos — one system at a time.',
    description:
      'Structured thinking for when the workflow doesn\'t match the vision. I diagram what exists, identify friction, and architect a simpler path forward — with milestones you can actually hit.',
    deliverables: [
      'Current-state process mapping',
      'Bottleneck analysis & friction report',
      'Optimized workflow design',
      'Implementation roadmap with milestones',
      'Accountability scaffold & review cadence',
    ],
  },
  {
    number: '03',
    icon: '⊞',
    title: 'Actuarium Audits',
    tagline: 'Measure twice. Build once.',
    description:
      'Comprehensive audits that quantify risk, surface blind spots, and ground decisions in data. Whether it\'s operational exposure, system reliability, or strategic alignment — the numbers tell the story.',
    deliverables: [
      'Risk exposure assessment & scoring',
      'Data integrity & compliance review',
      'Operational efficiency metrics',
      'Findings report with severity tiers',
      'Remediation plan & priority matrix',
    ],
  },
  {
    number: '04',
    icon: '⬡',
    title: 'Website Audits & Design',
    tagline: 'Performance meets presence.',
    description:
      'End-to-end web evaluation and design — from accessibility and performance audits to full redesigns. Sites that load fast, convert intentionally, and look like they belong to you.',
    deliverables: [
      'Technical performance & SEO audit',
      'Accessibility (WCAG) compliance review',
      'UX audit & conversion analysis',
      'Redesign mockups & prototypes',
      'Implementation spec & handoff package',
    ],
  },
  {
    number: '05',
    icon: '⟐',
    title: 'Accountable Agent Architecture',
    tagline: 'AI that answers to someone.',
    description:
      'Design and deployment of AI agent systems with built-in accountability, transparency, and human oversight. Agents that do real work — with audit trails, guardrails, and clear lines of responsibility.',
    deliverables: [
      'Agent capability mapping & scope definition',
      'Guardrail & oversight framework design',
      'Audit trail & logging architecture',
      'Integration spec & deployment plan',
      'Governance documentation & runbook',
    ],
  },
]

const tools = [
  { icon: '📐', label: 'Measure' },
  { icon: '✏️', label: 'Draft' },
  { icon: '📏', label: 'Align' },
  { icon: '🧹', label: 'Clear' },
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

          <div
            className="w-6 h-px my-3"
            style={{ background: 'rgba(0,57,51,0.12)' }}
          />

          {/* Service shortcut dots */}
          {services.map((s) => (
            <div
              key={s.number}
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

        {/* Work Canvas — cream grid background */}
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
          {/* Blueprint content area */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">

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
                style={{
                  fontSize: '3.5rem',
                  lineHeight: '1.1',
                  color: '#1a1a1a',
                }}
              >
                The Drafting Table
              </h1>

              <p
                className="font-caviar max-w-xl"
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'rgba(0,57,51,0.55)',
                }}
              >
                Every project begins here — measured, considered, and drawn with care.
                These are the services I draft from.
              </p>
            </header>

            {/* Service cards */}
            <section className="pb-28 space-y-5">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group relative rounded-lg transition-all duration-500"
                  style={{
                    background: 'rgba(255,255,255,0.72)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0,57,51,0.1)',
                    boxShadow: '0 1px 8px rgba(0,57,51,0.04)',
                  }}
                >
                  {/* Hover accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0,57,51,0.25), transparent)',
                    }}
                  />

                  <div className="p-6 md:p-8 lg:p-10">
                    {/* Number + Icon + Title */}
                    <div className="flex items-start gap-5 mb-5">
                      <div className="shrink-0 flex flex-col items-center gap-1 mt-1 select-none">
                        <span
                          style={{
                            fontSize: '1.2rem',
                            lineHeight: 1,
                            color: 'rgba(0,57,51,0.3)',
                          }}
                        >
                          {service.icon}
                        </span>
                        <span
                          className="font-anurati"
                          style={{
                            fontSize: '0.55rem',
                            letterSpacing: '0.12em',
                            color: 'rgba(0,57,51,0.22)',
                          }}
                        >
                          {service.number}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h2
                          className="font-aspal tracking-tight mb-1 group-hover:translate-x-1 transition-transform duration-300"
                          style={{
                            fontSize: '1.65rem',
                            lineHeight: '1.2',
                            color: '#1a1a1a',
                          }}
                        >
                          {service.title}
                        </h2>
                        <p
                          className="font-caviar italic"
                          style={{
                            fontSize: '0.9rem',
                            color: 'rgba(0,57,51,0.45)',
                          }}
                        >
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description + Deliverables */}
                    <div className="md:flex md:gap-10 md:pl-[3rem]">
                      <p
                        className="font-caviar md:flex-1 mb-5 md:mb-0"
                        style={{
                          fontSize: '0.95rem',
                          lineHeight: '1.75',
                          color: 'rgba(30,30,30,0.6)',
                        }}
                      >
                        {service.description}
                      </p>

                      <div className="md:w-[260px] shrink-0">
                        <span
                          className="font-anurati block mb-2.5"
                          style={{
                            fontSize: '0.5rem',
                            letterSpacing: '0.25em',
                            color: 'rgba(0,57,51,0.3)',
                            textTransform: 'uppercase',
                          }}
                        >
                          Deliverables
                        </span>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className="font-caviar flex items-start gap-2"
                              style={{
                                fontSize: '0.8rem',
                                lineHeight: '1.5',
                                color: 'rgba(30,30,30,0.5)',
                              }}
                            >
                              <span
                                className="shrink-0 mt-[7px] block w-1.5 h-px"
                                style={{ background: 'rgba(0,57,51,0.2)' }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Footer CTA */}
            <section className="pb-20 text-center">
              <div
                className="h-px mx-auto mb-8 max-w-[180px]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0,57,51,0.12), transparent)',
                }}
              />
              <p
                className="font-caviar mb-1"
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(30,30,30,0.4)',
                }}
              >
                Ready to draft something together?
              </p>
              <p
                className="font-anurati"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(0,57,51,0.35)',
                }}
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
