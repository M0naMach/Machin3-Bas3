'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Shield, Database, GitBranch, Monitor, Palette } from 'lucide-react'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface ServiceData {
  id: string
  title: string
  descriptor: string
  image: string
  icon: 'shield' | 'database' | 'gitbranch' | 'monitor' | 'palette'
  gradientAngle: number
  isDark: boolean
  bgExpanded: string
  titleColor: string
  labelColor: string
  borderColor: string
  accentColor: string
  description: string
  deliverables: string[]
  mobileOrder: number
  position: { top: string; left: string }
}

const ICON_MAP = {
  shield: Shield,
  database: Database,
  gitbranch: GitBranch,
  monitor: Monitor,
  palette: Palette,
} as const

const services: ServiceData[] = [
  {
    id: 'agents',
    title: 'Accountable AI Architecture',
    descriptor: 'Agent design, ethical governance & system architecture for AI that you can actually explain.',
    image: '/PUBL-Service_Cards/SERVICES-Accountable.png',
    icon: 'shield',
    gradientAngle: 135,
    isDark: true,
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
    mobileOrder: 1,
    position: { top: '79.75%', left: '63.49%' },
  },
  {
    id: 'actuarium',
    title: 'AI Actuarium Audit',
    descriptor: "Forensic review of your existing AI — surfaces what it's really doing vs. what it's supposed to. AI Actuarium® framework.",
    image: '/PUBL-Service_Cards/SERVICES-Actuarium.png',
    icon: 'database',
    gradientAngle: 210,
    isDark: false,
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
    mobileOrder: 2,
    position: { top: '19.79%', left: '8%' },
  },
  {
    id: 'roadmaps',
    title: 'Process Optimization & Roadmap',
    descriptor: 'Workflow audit, strategic roadmap, and systems integration for operations that need to scale.',
    image: '/PUBL-Service_Cards/SERVICES-Automations-nobg.png',
    icon: 'gitbranch',
    gradientAngle: 45,
    isDark: true,
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
    mobileOrder: 3,
    position: { top: '4.81%', left: '30.30%' },
  },
  {
    id: 'websites',
    title: 'Website Design & Development',
    descriptor: 'Full-stack websites in Next.js — from information architecture through launch.',
    image: '/PUBL-Service_Cards/SERVICES-Web.png',
    icon: 'monitor',
    gradientAngle: 160,
    isDark: false,
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
    mobileOrder: 4,
    position: { top: '4.81%', left: '75.30%' },
  },
  {
    id: 'branding',
    title: 'Visual Branding & Design',
    descriptor: 'Logo systems, color, typography, and brand frameworks built to last.',
    image: '/PUBL-Service_Cards/SERVICES-Branding.png',
    icon: 'palette',
    gradientAngle: 300,
    isDark: true,
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
    mobileOrder: 5,
    position: { top: '53.23%', left: '77.38%' },
  },
]

function ExpandedPanel({
  service,
  onClose,
}: {
  service: ServiceData
  onClose: () => void
}) {
  const textPrimary = service.isDark ? 'rgba(220,200,160,0.92)' : service.titleColor
  const textSecondary = service.isDark ? 'rgba(220,200,160,0.6)' : `${service.titleColor}99`
  const textBody = service.isDark ? 'rgba(220,200,160,0.7)' : `${service.titleColor}cc`

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="w-full max-h-[90vh] overflow-y-auto rounded-xl p-0 gap-0 border-0 sm:max-w-3xl"
        style={{
          background: service.bgExpanded,
          backdropFilter: 'blur(24px)',
          border: `1px solid ${service.borderColor}`,
          boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <DialogTitle className="sr-only">{service.title}</DialogTitle>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 z-10"
          style={{
            background: service.accentColor,
            border: `1px solid ${service.borderColor}`,
            color: textPrimary,
            fontSize: '1rem',
            padding: 0,
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="p-6 md:p-8">
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
                className="font-caviar font-bold tracking-wide mb-4"
                style={{ fontSize: '1.3rem', lineHeight: '1.3', color: service.titleColor }}
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

          <div>
            <h3
              className="font-caviar font-bold tracking-[0.15em] uppercase mb-3"
              style={{ fontSize: '0.65rem', color: textSecondary }}
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
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ServiceCard({
  service,
  onClick,
  mobile,
}: {
  service: ServiceData
  onClick: () => void
  mobile: boolean
}) {
  const IconComponent = ICON_MAP[service.icon]

  return (
    <article
      role="button"
      tabIndex={0}
      className={`cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 flex flex-col justify-between overflow-hidden ${mobile ? 'relative' : 'absolute'}`}
      style={{
        ...(mobile
          ? { width: '100%', padding: '14px 16px', borderRadius: '12px' }
          : {
              width: '21.12%',
              aspectRatio: '406 / 224',
              top: service.position.top,
              left: service.position.left,
              borderRadius: 'clamp(8px, 0.6vw, 12px)',
              padding: 'clamp(6px, 0.5vw, 10px)',
            }),
        background: 'rgba(10,31,28,0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(184,115,51,0.50)',
        boxSizing: 'border-box',
      }}
      aria-haspopup="dialog"
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
    >
      {/* Shimmer strip */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(184,115,51,0.6) 0%, rgba(184,115,51,0.9) 50%, rgba(184,115,51,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content row */}
      <div className="flex items-start" style={{ gap: mobile ? '12px' : 'clamp(4px, 0.4vw, 8px)', marginTop: '2px' }}>
        {/* Icon box */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: mobile ? '36px' : 'clamp(20px, 1.6vw, 32px)',
            height: mobile ? '36px' : 'clamp(20px, 1.6vw, 32px)',
            border: '1px solid rgba(184,115,51,0.50)',
            borderRadius: mobile ? '8px' : 'clamp(4px, 0.3vw, 6px)',
            color: 'rgba(184,115,51,0.85)',
          }}
          aria-hidden="true"
        >
          <IconComponent style={{ width: '55%', height: '55%' }} />
        </div>

        {/* Text stack */}
        <div className="min-w-0 flex flex-col" style={{ gap: mobile ? '4px' : 'clamp(1px, 0.1vw, 3px)' }}>
          <h3
            className="font-caviar font-bold m-0"
            style={{
              fontSize: mobile ? '14px' : 'clamp(7px, 0.65vw, 12px)',
              lineHeight: '1.2',
              color: 'rgb(184,115,51)',
            }}
          >
            {service.title}
          </h3>
          <p
            className="font-caviar m-0"
            style={{
              fontSize: mobile ? '12px' : 'clamp(6px, 0.45vw, 9px)',
              lineHeight: '1.35',
              color: 'rgba(200,190,170,0.65)',
            }}
          >
            {service.descriptor}
          </p>
        </div>
      </div>

    </article>
  )
}

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    setMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches)
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
    mq.addListener(handler)
    return () => mq.removeListener(handler)
  }, [breakpoint])
  return mobile
}

export default function ServicesDeskClient() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const handleClose = useCallback(() => setExpandedId(null), [])
  const expandedService = services.find((s) => s.id === expandedId) ?? null
  const mobile = useIsMobile()

  useEffect(() => {
    if (!expandedId) return
    lockBodyScroll()
    return () => unlockBodyScroll()
  }, [expandedId])

  return (
    <>
      {/* Desk background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/PUBL-Service_Page/SERVICE_PAGE-Full.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'center center' }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)',
          }}
        />
      </div>

      {mobile ? (
        /* Mobile: stacked cards with scroll */
        <div className="relative z-10 w-full min-h-screen flex flex-col gap-4 px-5 py-8">
          <header className="mb-2">
            <h2
              className="font-aspal tracking-tight mb-1"
              style={{ fontSize: '2rem', lineHeight: '1.1', color: 'rgba(235,225,210,0.95)' }}
            >
              The Drafting Table
            </h2>
            <p
              className="font-caviar"
              style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'rgba(180,170,155,0.6)' }}
            >
              Tap a card to explore.
            </p>
          </header>
          {[...services]
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                mobile
                onClick={() => setExpandedId(service.id)}
              />
            ))}
        </div>
      ) : (
        /* Desktop: absolute positioned cards matching desk image */
        <div className="relative z-10 w-full overflow-hidden" style={{ aspectRatio: '1800 / 1200', minHeight: '100vh' }}>
          {[...services]
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                mobile={false}
                onClick={() => setExpandedId(service.id)}
              />
            ))}
        </div>
      )}

      {/* Expanded overlay */}
      {expandedService && <ExpandedPanel service={expandedService} onClose={handleClose} />}

    </>
  )
}
