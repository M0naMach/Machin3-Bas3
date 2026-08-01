import CommandNavigation from '@apps/APPS-Components/navigation/command-navigation'
import ServicesDeskClient from '@apps/APPS-Components/services-desk'

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
