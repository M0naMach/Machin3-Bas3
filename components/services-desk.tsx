'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'

interface ServiceData {
  id: string
  title: string
  image: string
  bgExpanded: string
  titleColor: string
  labelColor: string
  borderColor: string
  accentColor: string
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
    image: '/SERVICES-Branding.png',
    bgExpanded: 'rgba(30,28,26,0.94)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(220,200,160,0.8)',
    borderColor: 'rgba(180,140,80,0.3)',
    accentColor: 'rgba(180,140,80,0.15)',
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
    rotation: '-3deg',
    zIndex: 5,
    position: { top: '6%', left: '3%' },
    mobileOrder: 1,
  },
  {
    id: 'roadmaps',
    title: 'Process Optimization & Roadmaps',
    image: '/SERVICES-Automations-nobg.png',
    bgExpanded: 'rgba(10,45,38,0.94)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(220,200,160,0.75)',
    borderColor: 'rgba(180,140,80,0.25)',
    accentColor: 'rgba(100,200,180,0.12)',
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
    rotation: '2deg',
    zIndex: 6,
    position: { top: '4%', left: '36%' },
    mobileOrder: 2,
  },
  {
    id: 'actuarium',
    title: 'AI Actuarium Audits',
    image: '/SERVICES-Actuarium.png',
    bgExpanded: 'rgba(210,220,235,0.96)',
    titleColor: '#2C3E5A',
    labelColor: 'rgba(44,62,90,0.8)',
    borderColor: 'rgba(44,62,90,0.15)',
    accentColor: 'rgba(44,62,90,0.08)',
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
    rotation: '3deg',
    zIndex: 4,
    position: { top: '5%', right: '3%' },
    mobileOrder: 3,
  },
  {
    id: 'agents',
    title: 'Accountable AI Architecture',
    image: '/SERVICES-Accountable.png',
    bgExpanded: 'rgba(22,32,58,0.96)',
    titleColor: '#C9A96E',
    labelColor: 'rgba(201,169,110,0.8)',
    borderColor: 'rgba(201,169,110,0.25)',
    accentColor: 'rgba(201,169,110,0.1)',
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
    rotation: '-2deg',
    zIndex: 7,
    position: { bottom: '6%', left: '5%' },
    mobileOrder: 4,
  },
  {
    id: 'websites',
    title: 'Website Design & Development',
    image: '/SERVICES-Web.png',
    bgExpanded: 'rgba(252,248,242,0.97)',
    titleColor: '#8B5E3C',
    labelColor: 'rgba(139,94,60,0.8)',
    borderColor: 'rgba(139,94,60,0.15)',
    accentColor: 'rgba(139,94,60,0.06)',
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
    rotation: '1.5deg',
    zIndex: 5,
    position: { bottom: '5%', right: '4%' },
    mobileOrder: 5,
  },
]

function isDarkPanel(bg: string) {
  return bg.includes('30,28,26') || bg.includes('10,45,38') || bg.includes('22,32,58')
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

  const dark = isDarkPanel(service.bgExpanded)
  const textPrimary = dark ? 'rgba(220,200,160,0.92)' : service.titleColor
  const textSecondary = dark ? 'rgba(220,200,160,0.6)' : `${service.titleColor}99`
  const textBody = dark ? 'rgba(220,200,160,0.7)' : `${service.titleColor}cc`

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(10px)' }}
      />

      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl"
        style={{
          background: service.bgExpanded,
          backdropFilter: 'blur(24px)',
          border: `1px solid ${service.borderColor}`,
          boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 z-10"
          style={{
            background: service.accentColor,
            border: `1px solid ${service.borderColor}`,
            color: textPrimary,
            fontSize: '1rem',
            padding: 0,
          }}
        >
          &times;
        </button>

        <div className="p-6 md:p-8">
          {/* Card image + title */}
          <div className="md:flex md:gap-8 mb-6">
            <div className="shrink-0 mb-4 md:mb-0 md:w-[220px]">
              <Image
                src={service.image}
                alt={service.title}
                width={440}
                height={440}
                className="w-full h-auto rounded-lg"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                }}
              />
            </div>

            <div className="flex-1">
              <h2
                className="font-anurati tracking-[0.12em] uppercase mb-4"
                style={{ fontSize: '0.7rem', lineHeight: '1.6', color: service.titleColor }}
              >
                {service.title}
              </h2>

              <p
                className="font-caviar"
                style={{ fontSize: '0.95rem', lineHeight: '1.75', color: textBody }}
              >
                {service.description}
              </p>
            </div>
          </div>

          <div className="h-px mb-6" style={{ background: service.borderColor }} />

          {/* Deliverables + Pricing */}
          <div className="md:flex md:gap-8">
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
    if (expandedId) {
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }
    return () => unlockBodyScroll()
  }, [expandedId])

  return (
    <>
      {/* Desk background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/SERVICE_PAGE-Full.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)',
          }}
        />
      </div>

      {/* Desktop: Glassmorphic UI panels — 2 top, 1 center, 2 bottom */}
      <div className="relative z-10 hidden md:flex flex-col items-center justify-center gap-8 px-8 py-16" style={{ minHeight: '100vh' }}>
        {/* Top row */}
        <div className="flex gap-8 justify-center">
          {[services[0], services[1]].map((service) => (
            <div
              key={service.id}
              className="cursor-pointer transition-all duration-300 hover:scale-[1.03] rounded-xl overflow-hidden"
              style={{
                width: 'clamp(240px, 22vw, 320px)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(180,83,9,0.2)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              onClick={() => setExpandedId(service.id)}
            >
              <Image src={service.image} alt={service.title} width={680} height={680} className="w-full h-auto" />
            </div>
          ))}
        </div>
        {/* Center */}
        <div className="flex justify-center">
          <div
            className="cursor-pointer transition-all duration-300 hover:scale-[1.03] rounded-xl overflow-hidden"
            style={{
              width: 'clamp(240px, 22vw, 320px)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(180,83,9,0.2)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
            onClick={() => setExpandedId(services[2].id)}
          >
            <Image src={services[2].image} alt={services[2].title} width={680} height={680} className="w-full h-auto" />
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex gap-8 justify-center">
          {[services[3], services[4]].map((service) => (
            <div
              key={service.id}
              className="cursor-pointer transition-all duration-300 hover:scale-[1.03] rounded-xl overflow-hidden"
              style={{
                width: 'clamp(240px, 22vw, 320px)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(180,83,9,0.2)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              onClick={() => setExpandedId(service.id)}
            >
              <Image src={service.image} alt={service.title} width={680} height={680} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Stacked glassmorphic panels */}
      <div className="md:hidden relative z-10 px-4 pt-24 pb-20 space-y-5">
        <header className="mb-6">
          <h2
            className="font-aspal tracking-tight mb-2"
            style={{ fontSize: '2.5rem', lineHeight: '1.1', color: 'rgba(235,225,210,0.95)' }}
          >
            The Drafting Table
          </h2>
          <p
            className="font-caviar"
            style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(180,170,155,0.6)' }}
          >
            Tap a card to explore.
          </p>
        </header>

        {[...services]
          .sort((a, b) => a.mobileOrder - b.mobileOrder)
          .map((service) => (
            <div
              key={service.id}
              className="cursor-pointer active:scale-[0.98] transition-transform rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(180,83,9,0.2)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              onClick={() => setExpandedId(service.id)}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={680}
                height={680}
                className="w-full h-auto"
              />
            </div>
          ))}
      </div>

      {/* Expanded overlay */}
      {expandedService && <ExpandedPanel service={expandedService} onClose={handleClose} />}
    </>
  )
}
