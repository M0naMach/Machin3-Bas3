import CommandNavigation from '@/components/navigation/command-navigation'
import ServicesDeskClient from '@/components/services-desk'

export const metadata = {
  title: 'Services - M0na Machin3',
  description: 'Building tech through art. Visual branding, process optimization, audits, web design, and agent architecture.',
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: '#0a1f1c' }}>
      <CommandNavigation />
      <ServicesDeskClient />
    </main>
  )
}
