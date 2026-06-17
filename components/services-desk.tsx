'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'

interface ServiceData {
  id: string
  title: string
  bg: string
  bgExpanded: string
  titleColor: string
  labelColor: string
  borderColor: string
  accentColor: string
  quadrants: string[]
  description: string
  deliverables: string[]
  pricing: {
    starting: string
    note: string
  }
  rotation: string
  zIndex: number
  position: Record<string, string>
  mobileOrder: number
}

const services: ServiceData[] = [
  {
    id: 'branding',
    title: 'Visual Branding & Design',
    bg: 'rgba(40,40,40,0.55)',
    bgExpanded: 'rgba(30,28,26,0.92)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(220,200,160,0.8)',
    borderColor: 'rgba(180,140,80,0.3)',
    accentColor: 'rgba(180,140,80,0.15)',
    quadrants: [
      'Logo Design &\nIdentity Systems',
      'Typography\n& Voice',
      'Color Theory\n& Palettes',
      'Brand Structure\n& Frameworks',
    ],
    description:
      'Purpose-driven visual systems that translate who you are into what people see. From logo suites to full brand ecosystems — color, type, and layout engineered for emotional resonance and cross-medium consistency.',
    deliverables: [
      'Brand identity audit & strategic direction',
      'Logo design & iconography suite',
      'Color system & typography framework',
      'Brand guidelines & asset deployment kit',
      'Templates, layouts & accessibility review',
    ],
    pricing: {
      starting: 'From $2,500',
      note: 'Scoped per project after discovery call',
    },
    rotation: '-2deg',
    zIndex: 5,
    position: { top: '8%', left: '2%' },
    mobileOrder: 1,
  },
  {
    id: 'roadmaps',
    title: 'Process Optimization & Roadmaps',
    bg: 'rgba(12,60,50,0.6)',
    bgExpanded: 'rgba(10,45,38,0.92)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(220,200,160,0.75)',
    borderColor: 'rgba(180,140,80,0.25)',
    accentColor: 'rgba(100,200,180,0.12)',
    quadrants: [
      'Workflow\nOptimization',
      'Strategic\nRoadmapping',
      'Performance\nAnalysis',
      'Systems\nIntegration',
    ],
    description:
      "Structured thinking for when the workflow doesn't match the vision. I diagram what exists, identify friction, and architect a simpler path forward — with milestones you can actually hit.",
    deliverables: [
      'Current-state process mapping',
      'Bottleneck analysis & friction report',
      'Optimized workflow design',
      'Implementation roadmap with milestones',
      'Accountability scaffold & review cadence',
    ],
    pricing: {
      starting: 'From $1,800',
      note: 'Scoped per project after discovery call',
    },
    rotation: '1.5deg',
    zIndex: 6,
    position: { top: '5%', left: '35%' },
    mobileOrder: 2,
  },
  {
    id: 'actuarium',
    title: 'AI Actuarium Audits',
    bg: 'rgba(200,215,230,0.65)',
    bgExpanded: 'rgba(210,220,235,0.95)',
    titleColor: '#2C3E5A',
    labelColor: 'rgba(44,62,90,0.8)',
    borderColor: 'rgba(44,62,90,0.15)',
    accentColor: 'rgba(44,62,90,0.08)',
    quadrants: [
      'Algorithmic Risk &\nCoherence Checks',
      'Forensic &\nDeterministic Calculation',
      'Dual Visual\nModel',
      'Transparent Result\nTranslation',
    ],
    description:
      "Comprehensive audits that quantify risk, surface blind spots, and ground decisions in data. Whether it's operational exposure, system reliability, or strategic alignment — the numbers tell the story.",
    deliverables: [
      'Risk exposure assessment & scoring',
      'Data integrity & compliance review',
      'Operational efficiency metrics',
      'Findings report with severity tiers',
      'Remediation plan & priority matrix',
    ],
    pricing: {
      starting: 'From $3,000',
      note: 'Scoped per project after discovery call',
    },
    rotation: '2.5deg',
    zIndex: 4,
    position: { top: '6%', right: '2%' },
    mobileOrder: 3,
  },
  {
    id: 'agents',
    title: 'Accountable AI Architecture',
    bg: 'rgba(26,39,68,0.8)',
    bgExpanded: 'rgba(22,32,58,0.95)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(201,169,110,0.8)',
    borderColor: 'rgba(201,169,110,0.25)',
    accentColor: 'rgba(201,169,110,0.1)',
    quadrants: [
      'Ethical Governance &\nTransparency Protocols',
      'Agent Prompt\n& Identity Design',
      'Scalable Architecture\n& Systems Integration',
      'Impact &\nCompliance Audits',
    ],
    description:
      'Design and deployment of AI agent systems with built-in accountability, transparency, and human oversight. Agents that do real work — with audit trails, guardrails, and clear lines of responsibility.',
    deliverables: [
      'Agent capability mapping & scope definition',
      'Guardrail & oversight framework design',
      'Audit trail & logging architecture',
      'Integration spec & deployment plan',
      'Governance documentation & runbook',
    ],
    pricing: {
      starting: 'From $4,000',
      note: 'Scoped per project after discovery call',
    },
    rotation: '-1.5deg',
    zIndex: 7,
    position: { bottom: '8%', left: '5%' },
    mobileOrder: 4,
  },
  {
    id: 'websites',
    title: 'Website Design & Development',
    bg: 'rgba(255,250,246,0.7)',
    bgExpanded: 'rgba(252,248,242,0.96)',
    titleColor: '#8B5E3C',
    labelColor: 'rgba(139,94,60,0.8)',
    borderColor: 'rgba(139,94,60,0.15)',
    accentColor: 'rgba(139,94,60,0.06)',
    quadrants: [
      'Digital Landscape\n& Structure',
      'Digital Aesthetics\n& Interaction Design',
      'Website Audit &\nPerformance Review',
      'Global Network &\nInnovation Systems',
    ],
    description:
      'End-to-end web evaluation and design — from accessibility and performance audits to full redesigns. Sites that load fast, convert intentionally, and look like they belong to you.',
    deliverables: [
      'Technical performance & SEO audit',
      'Accessibility (WCAG) compliance review',
      'UX audit & conversion analysis',
      'Redesign mockups & prototypes',
      'Implementation spec & handoff package',
    ],
    pricing: {
      starting: 'From $3,500',
      note: 'Scoped per project after discovery call',
    },
    rotation: '1deg',
    zIndex: 5,
    position: { bottom: '6%', right: '3%' },
    mobileOrder: 5,
  },
]

function isDarkCard(bg: string) {
  return bg.includes('26,39,68') || bg.includes('12,60,50') || bg.includes('40,40,40')
}

function QuadrantGrid({ service, compact }: { service: ServiceData; compact?: boolean }) {
  const dark = isDarkCard(service.bg)
  return (
    <div
      className="rounded-lg overflow-hidden grid grid-cols-2 grid-rows-2"
      style={{
        border: `1px solid ${service.borderColor}`,
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      {service.quadrants.map((label, qi) => (
        <div
          key={qi}
          className="flex items-end p-3"
          style={{
            minHeight: compact ? '60px' : '70px',
            background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.45)',
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
      ))}
    </div>
  )
}

function ExpandedPanel({
  service,
  onClose,
}: {
  service: ServiceData
  onClose: () => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const dark = isDarkCard(service.bgExpanded)
  const textPrimary = dark ? 'rgba(220,200,160,0.92)' : service.titleColor
  const textSecondary = dark ? 'rgba(220,200,160,0.6)' : `${service.titleColor}99`
  const textBody = dark ? 'rgba(220,200,160,0.7)' : `${service.titleColor}cc`
  const dividerColor = service.borderColor

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-in fade-in duration-300"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl animate-in zoom-in-95 fade-in duration-300"
        style={{
          background: service.bgExpanded,
          backdropFilter: 'blur(24px)',
          border: `1px solid ${service.borderColor}`,
          boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
          style={{
            background: service.accentColor,
            border: `1px solid ${service.borderColor}`,
            color: textPrimary,
            fontSize: '1rem',
            padding: 0,
          }}
          >
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>

        <div className="p-6 md:p-8">
          {/* Title */}
          <h2
            className="font-anurati tracking-[0.14em] uppercase mb-6 pr-10"
            style={{ fontSize: '0.7rem', lineHeight: '1.6', color: service.titleColor }}
          >
            {service.title}
          </h2>

          {/* Quadrant grid — smaller in expanded view */}
          <div className="mb-6 max-w-xs">
            <QuadrantGrid service={service} compact />
          </div>

          {/* Divider */}
          <div className="h-px mb-6" style={{ background: dividerColor }} />

          {/* Description */}
          <p
            className="font-caviar mb-6"
            style={{ fontSize: '0.95rem', lineHeight: '1.75', color: textBody }}
          >
            {service.description}
          </p>

          {/* Deliverables + Pricing — side by side on desktop */}
          <div className="md:flex md:gap-8">
            {/* Deliverables */}
            <div className="flex-1 mb-6 md:mb-0">
              <h3
                className="font-anurati tracking-[0.2em] uppercase mb-3"
                style={{ fontSize: '0.5rem', color: textSecondary }}
              >
                Deliverables
              </h3>
              <ul className="space-y-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="font-caviar flex items-start gap-2.5">
                    <span
                      className="shrink-0 mt-[8px] block w-1.5 h-px"
                      style={{ background: service.borderColor }}
                    />
                    <span style={{ fontSize: '0.8rem', lineHeight: '1.5', color: textBody }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div
              className="md:w-[200px] shrink-0 rounded-lg p-4"
              style={{
                background: service.accentColor,
                border: `1px solid ${service.borderColor}`,
              }}
            >
              <h3
                className="font-anurati tracking-[0.2em] uppercase mb-3"
                style={{ fontSize: '0.5rem', color: textSecondary }}
              >
                Pricing
              </h3>
              <p
                className="font-caviar font-bold mb-1"
                style={{ fontSize: '1.1rem', color: textPrimary }}
              >
                {service.pricing.starting}
              </p>
              <p
                className="font-caviar"
                style={{ fontSize: '0.7rem', lineHeight: '1.5', color: textSecondary }}
              >
                {service.pricing.note}
              </p>

              {/* CTA */}
              <div className="mt-4 pt-3" style={{ borderTop: `1px solid ${service.borderColor}` }}>
                <span
                  className="font-anurati block text-center"
                  style={{ fontSize: '0.45rem', letterSpacing: '0.2em', color: textSecondary }}
                >
                  /CONNECT TO START
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesDeskClient() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleClose = useCallback(() => setExpandedId(null), [])

  const expandedService = services.find((s) => s.id === expandedId) ?? null

  useEffect(() => {
    if (!expandedId) return

    lockBodyScroll()
    return () => unlockBodyScroll()
  }, [expandedId])

  return (
    <>
      {/* === Desk Surface Background === */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/SERVICE_PAGE-Full.png"
          alt="Desk surface background"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      </div>

      {/* === Desktop: Scattered cards === */}
      <div className="relative z-10 hidden md:block" style={{ minHeight: '100vh' }}>
        {services.map((service) => {
          const posStyle: React.CSSProperties = {
            position: 'absolute',
            width: 'clamp(280px, 30vw, 380px)',
            zIndex: service.zIndex,
            transform: `rotate(${service.rotation})`,
            ...service.position,
          }

          return (
            <div
              key={service.id}
              className="group transition-all duration-500 hover:scale-[1.03] hover:z-50 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A96E]/60"
              style={posStyle}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              onClick={() => setExpandedId(service.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setExpandedId(service.id)
                }
              }}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: service.bg,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${service.borderColor}`,
                  boxShadow:
                    '0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
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

                <div className="mx-3 mb-3">
                  <QuadrantGrid service={service} />
                </div>
              </div>
            </div>
          )
        })}

        {/* Center gold M0NA card */}
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
              style={{
                fontSize: '0.5rem',
                color: 'rgba(26,26,26,0.5)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Machin3
            </span>
          </div>
        </div>

        {/* Scattered papers */}
        <div className="absolute z-[2]" style={{ top: '30%', left: '38%', transform: 'rotate(-4deg)' }}>
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
                <div
                  key={i}
                  className="h-px"
                  style={{ width: `${w}%`, background: 'rgba(139,94,60,0.12)' }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute z-[2]" style={{ top: '35%', left: '50%', transform: 'rotate(2deg)' }}>
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

        {[...services]
          .sort((a, b) => a.mobileOrder - b.mobileOrder)
          .map((service) => (
            <div
              key={service.id}
              className="rounded-xl overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
              style={{
                background: service.bg,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${service.borderColor}`,
                boxShadow: '0 6px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
              onClick={() => setExpandedId(service.id)}
            >
              <div className="p-4 pb-3">
                <h2
                  className="font-anurati tracking-[0.12em] uppercase text-center"
                  style={{ fontSize: '0.6rem', lineHeight: '1.6', color: service.titleColor }}
                >
                  {service.title}
                </h2>
              </div>

              <div className="mx-3 mb-3">
                <QuadrantGrid service={service} compact />
              </div>
            </div>
          ))}
      </div>

      {/* === Expanded panel overlay === */}
      {expandedService && <ExpandedPanel service={expandedService} onClose={handleClose} />}
    </>
  )
}
