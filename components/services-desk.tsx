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
  price: string
  pricing: {
    starting: string
    note: string
  }
  mobileOrder: number
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
    image: '/SERVICES-Accountable.png',
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
    price: '$500–$7,500',
    pricing: {
      starting: 'From $4,000',
      note: 'Scoped per project after discovery call',
    },
    mobileOrder: 1,
  },
  {
    id: 'actuarium',
    title: 'AI Actuarium Audit',
    descriptor: "Forensic review of your existing AI — surfaces what it's really doing vs. what it's supposed to. AI Actuarium® framework.",
    image: '/SERVICES-Actuarium.png',
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
    price: '$900–$5,000 + $750–$1,500/mo',
    pricing: {
      starting: 'From $3,000',
      note: 'Scoped per project after discovery call',
    },
    mobileOrder: 2,
  },
  {
    id: 'roadmaps',
    title: 'Process Optimization & Roadmap',
    descriptor: 'Workflow audit, strategic roadmap, and systems integration for operations that need to scale.',
    image: '/SERVICES-Automations-nobg.png',
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
    price: '$250–$6,000',
    pricing: {
      starting: 'From $1,800',
      note: 'Scoped per project after discovery call',
    },
    mobileOrder: 3,
  },
  {
    id: 'websites',
    title: 'Website Design & Development',
    descriptor: 'Full-stack websites in Next.js — from information architecture through launch.',
    image: '/SERVICES-Web.png',
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
    price: '$400–$5,500',
    pricing: {
      starting: 'From $3,500',
      note: 'Scoped per project after discovery call',
    },
    mobileOrder: 4,
  },
  {
    id: 'branding',
    title: 'Visual Branding & Design',
    descriptor: 'Logo systems, color, typography, and brand frameworks built to last.',
    image: '/SERVICES-Branding.png',
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
    price: '$450–$3,500',
    pricing: {
      starting: 'From $2,500',
      note: 'Scoped per project after discovery call',
    },
    mobileOrder: 5,
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
      </DialogContent>
    </Dialog>
  )
}

function ServiceCard({
  service,
  onClick,
}: {
  service: ServiceData
  onClick: () => void
}) {
  const IconComponent = ICON_MAP[service.icon]

  return (
    <article
      role="button"
      tabIndex={0}
      className="relative w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between overflow-hidden"
      style={{
        aspectRatio: '1.8125',
        background: `linear-gradient(${service.gradientAngle}deg, rgba(252,240,232,0.90) 0%, rgba(243,232,255,0.82) 35%, rgba(224,245,255,0.85) 65%, rgba(220,255,248,0.78) 100%)`,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1.5px solid rgba(184,115,51,0.70)',
        borderRadius: 'clamp(10px, 0.83vw, 16px)',
        padding: 'clamp(16px, 1.67vw, 28px)',
        boxSizing: 'border-box',
      }}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
    >
      {/* Shimmer strip */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(235,140,184,1) 0%, rgba(204,140,242,1) 28%, rgba(115,184,250,1) 58%, rgba(77,230,210,1) 82%, rgba(235,140,184,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content row */}
      <div className="flex items-start" style={{ gap: 'clamp(12px, 1vw, 18px)', marginTop: '6px' }}>
        {/* Icon box */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 'clamp(52px, 4.4vw, 80px)',
            height: 'clamp(52px, 4.4vw, 80px)',
            border: '1px solid rgba(184,115,51,0.60)',
            borderRadius: 'clamp(8px, 0.6vw, 12px)',
            color: 'rgba(184,115,51,0.85)',
          }}
          aria-hidden="true"
        >
          <IconComponent style={{ width: '55%', height: '55%' }} />
        </div>

        {/* Text stack */}
        <div className="min-w-0 flex flex-col" style={{ gap: 'clamp(4px, 0.3vw, 8px)' }}>
          <h3
            className="font-caviar font-bold m-0"
            style={{
              fontSize: 'clamp(18px, 2.2vw, 36px)',
              lineHeight: '1.15',
              color: 'rgb(184,115,51)',
              textShadow: '0 0 6px rgba(255,255,230,0.95), 0 0 18px rgba(255,185,64,0.80), 0 0 36px rgba(153,235,255,0.50), 0 0 64px rgba(255,217,128,0.30)',
            }}
          >
            {service.title}
          </h3>
          <p
            className="font-caviar m-0"
            style={{
              fontSize: 'clamp(13px, 1vw, 17px)',
              lineHeight: '1.5',
              color: 'rgba(60,40,20,0.70)',
            }}
          >
            {service.descriptor}
          </p>
        </div>
      </div>

      {/* Price badge */}
      <div
        className="self-end font-caviar font-bold whitespace-nowrap"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%)',
          background: 'rgb(184,115,51)',
          color: '#fff',
          fontSize: 'clamp(11px, 0.85vw, 14px)',
          padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 18px)',
          borderRadius: '3px 3px 0 3px',
        }}
        aria-label={`Price range: ${service.price}`}
      >
        {service.price}
      </div>
    </article>
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

      {/* Services grid */}
      <div
        className="relative z-10 w-full"
        style={{ padding: 'clamp(32px, 4vw, 80px) clamp(24px, 4.4vw, 80px)' }}
      >
        {/* Mobile header */}
        <header className="md:hidden mb-6">
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

        <div className="services-grid">
          {[...services]
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => setExpandedId(service.id)}
              />
            ))}
        </div>
      </div>

      {/* Expanded overlay */}
      {expandedService && <ExpandedPanel service={expandedService} onClose={handleClose} />}

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 580px), 1fr));
          gap: clamp(16px, 2vw, 32px);
          max-width: 1440px;
          margin: 0 auto;
        }

        @media (min-width: 1280px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-grid > :last-child:nth-child(odd) {
            grid-column: 1 / -1;
            max-width: calc(50% - 16px);
            margin: 0 auto;
          }
        }

        @media (min-width: 1600px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .services-grid > :last-child:nth-child(odd) {
            grid-column: auto;
            max-width: none;
            margin: 0;
          }
        }
      `}</style>
    </>
  )
}
