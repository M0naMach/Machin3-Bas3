import CommandNavigation from '@/components/navigation/command-navigation'
import ServicesDeskClient from '@/components/services-desk'

export const metadata = {
  title: 'Work - M0na Machin3',
  description: 'Building tech through art. Visual branding, process optimization, audits, web design, and agent architecture.',
}

export default function WorkPage() {
  return (
    <>
      <style>{`footer { display: none !important; }`}</style>
      <main className="relative min-h-screen overflow-hidden" style={{ background: '#0a1f1c' }}>
        <h1 className="sr-only">Work With Me</h1>
        <CommandNavigation />
        <ServicesDeskClient />
      </main>
    </>
  )
}
