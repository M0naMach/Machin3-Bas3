import CommandNavigation from '@/components/navigation/command-navigation'

export const metadata = {
  title: 'Services - M0na Machin3',
  description: 'Building tech through art. Visual branding, process optimization, audits, web design, and agent architecture.',
}

const services = [
  {
    number: '01',
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

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CommandNavigation />

      {/* Drafting desk background */}
      <div className="fixed inset-0 z-0">
        {/* Base — warm dark surface like worn drafting paper */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, #1a1c1e 0%, #1e2024 40%, #1c1e21 70%, #191b1d 100%)',
          }}
        />

        {/* Blueprint grid — fine lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,160,180,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,160,180,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Blueprint grid — major lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,160,180,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,160,180,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />

        {/* Drafting desk edge shadow — top */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
          }}
        />

        {/* Desk lamp warm glow — upper right */}
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse, rgba(184,83,9,0.8), transparent 70%)',
          }}
        />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(0,0,0,0.3) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-24 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'rgba(184,83,9,0.5)' }} />
              <span
                className="font-anurati text-xs tracking-[0.3em] uppercase"
                style={{ color: 'rgba(184,83,9,0.7)' }}
              >
                Service Index
              </span>
            </div>

            <h1
              className="font-aspal tracking-tight mb-4"
              style={{
                fontSize: '3.5rem',
                lineHeight: '1.1',
                color: 'rgba(235,225,210,0.95)',
              }}
            >
              The Drafting Table
            </h1>

            <p
              className="font-caviar max-w-xl"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'rgba(180,170,155,0.7)',
              }}
            >
              Every project begins here — measured, considered, and drawn with care.
              These are the services I draft from.
            </p>
          </div>
        </header>

        {/* Service cards */}
        <section className="px-4 pb-32">
          <div className="max-w-5xl mx-auto space-y-6">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative rounded-lg transition-all duration-500"
                style={{
                  background: 'rgba(28,30,33,0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(100,160,180,0.1)',
                }}
              >
                {/* Top drafting line accent */}
                <div
                  className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(184,83,9,0.4), transparent)',
                  }}
                />

                <div className="p-6 md:p-8 lg:p-10">
                  {/* Number + Title row */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Number — like a drafting notation */}
                    <span
                      className="font-anurati shrink-0 mt-1 select-none"
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        color: 'rgba(100,160,180,0.4)',
                      }}
                    >
                      {service.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h2
                        className="font-aspal tracking-tight mb-1 group-hover:translate-x-1 transition-transform duration-300"
                        style={{
                          fontSize: '1.75rem',
                          lineHeight: '1.2',
                          color: 'rgba(235,225,210,0.92)',
                        }}
                      >
                        {service.title}
                      </h2>
                      <p
                        className="font-caviar italic"
                        style={{
                          fontSize: '0.95rem',
                          color: 'rgba(184,83,9,0.6)',
                        }}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description + Deliverables — two-column on desktop */}
                  <div className="md:flex md:gap-10 md:pl-[3.25rem]">
                    <p
                      className="font-caviar md:flex-1 mb-6 md:mb-0"
                      style={{
                        fontSize: '1rem',
                        lineHeight: '1.75',
                        color: 'rgba(180,170,155,0.7)',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Deliverables — styled like drafting annotations */}
                    <div className="md:w-[280px] shrink-0">
                      <span
                        className="font-anurati block mb-3"
                        style={{
                          fontSize: '0.6rem',
                          letterSpacing: '0.25em',
                          color: 'rgba(100,160,180,0.35)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="font-caviar flex items-start gap-2"
                            style={{
                              fontSize: '0.85rem',
                              lineHeight: '1.5',
                              color: 'rgba(180,170,155,0.55)',
                            }}
                          >
                            <span
                              className="shrink-0 mt-[7px] block w-1.5 h-px"
                              style={{ background: 'rgba(184,83,9,0.35)' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom rule */}
                <div
                  className="mx-8 h-px"
                  style={{
                    background: 'linear-gradient(90deg, rgba(100,160,180,0.08), rgba(100,160,180,0.04), transparent)',
                  }}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-4 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className="h-px mx-auto mb-10 max-w-[200px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(100,160,180,0.15), transparent)',
              }}
            />
            <p
              className="font-caviar mb-1"
              style={{
                fontSize: '0.95rem',
                color: 'rgba(180,170,155,0.45)',
              }}
            >
              Ready to draft something together?
            </p>
            <p
              className="font-anurati"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: 'rgba(184,83,9,0.4)',
              }}
            >
              START WITH /CONNECT
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
