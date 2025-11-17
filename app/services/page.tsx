import CommandNavigation from '@/components/navigation/command-navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Services - M0na Machin3',
  description: 'Building tech through art. Creative design, systems architecture, and strategic clarity.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CommandNavigation />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-gray-400">
            Each detail is a pixel. Zoom out to see the design.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-12">
          
          {/* Artistic Rendering */}
          <div className="border border-gray-800 bg-gray-950 p-6 md:p-8 rounded-lg hover:border-gray-700 transition-colors">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Artistic Rendering & Creative Computation
            </h2>
            <p className="text-sm text-gray-500 mb-4">(Custom Art with Meaning)</p>
            
            <p className="text-gray-400 italic mb-6">
              "Stories in pixels — symbolism with technical finesse."
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description:</h3>
                <p className="text-gray-300">
                  Purpose-driven computational aesthetics. Spanning identity portraits to coherent visual languages, 
                  each creation merges narrative intelligence, symbolic resonance, and deployment-ready craftsmanship.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What I do:</h3>
                <p className="text-gray-300">
                  Translate requirements into visual systems that scale across mediums with consistency.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Deliverables:</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>▸ Thought Topology</li>
                  <li>▸ Digital Entity Design & Metamorphosis</li>
                  <li>▸ Emblematic Assets & Iconography Compendium</li>
                  <li>▸ Perceptual Ecosystem Choreography & Meaning Matrices</li>
                  <li>▸ Asset Alchemy & Cross-Medium Mastercrafts</li>
                  <li>▸ Source Artifacts Repository</li>
                  <li>▸ High-Fidelity Digital Canvas</li>
                  <li>▸ Licensing Protocol & Deployment Plan (Optional)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clarity Architecture */}
          <div className="border border-gray-800 bg-gray-950 p-6 md:p-8 rounded-lg hover:border-gray-700 transition-colors">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Clarity Architecture & Perception Reframing
            </h2>
            
            <p className="text-gray-400 italic mb-6">
              "Reflections that reset perception — and return you to signal."
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description:</h3>
                <p className="text-gray-300">
                  Structured thinking for when the map and the terrain don't match. We diagram patterns, 
                  reframe constraints, and choose a simpler path forward.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What I do:</h3>
                <p className="text-gray-300">
                  Facilitate clear decisions with visual artifacts and a small, durable plan.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Deliverables:</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>▸ 1:1 clarity session</li>
                  <li>▸ Pattern map</li>
                  <li>▸ Perception reframe plan</li>
                  <li>▸ Accountability scaffold</li>
                  <li>▸ Resource kit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Client Experience Operations */}
          <div className="border border-gray-800 bg-gray-950 p-6 md:p-8 rounded-lg hover:border-gray-700 transition-colors">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Client Experience Operations & Admin Systems
            </h2>
            
            <p className="text-gray-400 italic mb-6">
              "Back-office with a heartbeat — precision that feels human."
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description:</h3>
                <p className="text-gray-300">
                  Clean, dependable ops that protect your energy and elevate your client experience. 
                  Quiet systems, clear inboxes, and responses that sound like your voice.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What I do:</h3>
                <p className="text-gray-300">
                  Design lightweight admin flows and client support patterns, then run them with care — 
                  so the engine hums while you create.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Deliverables:</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>▸ Inbox and calendar architecture</li>
                  <li>▸ CRM and ticketing workflows</li>
                  <li>▸ SOPs that read like checklists</li>
                  <li>▸ Email setup and deliverability audits</li>
                  <li>▸ Persona chatbots for support</li>
                  <li>▸ Optional coverage windows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Systems Architecture & Automation */}
          <div className="border border-gray-800 bg-gray-950 p-6 md:p-8 rounded-lg hover:border-gray-700 transition-colors">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Systems Architecture & Automation
            </h2>
            
            <p className="text-gray-400 italic mb-6">
              "Systems that think with you — Protocol. Process. Presence."
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description:</h3>
                <p className="text-gray-300">
                  Design and deploy calm, resilient systems. We translate messy workflows into modular 
                  automations and human-friendly interfaces. So momentum manifests motion.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What I do:</h3>
                <p className="text-gray-300">
                  Map, simplify, and instrument your stack. Your inputs give me the blueprint to encode 
                  your rules once — for successful use everywhere.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Deliverables:</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>▸ Systems blueprint and bottleneck brief</li>
                  <li>▸ Automation spec</li>
                  <li>▸ Integration matrix</li>
                  <li>▸ Operations dashboard</li>
                  <li>▸ Runbook kit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Branding & Identity */}
          <div className="border border-gray-800 bg-gray-950 p-6 md:p-8 rounded-lg hover:border-gray-700 transition-colors">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Visual Branding & Identity
            </h2>
            
            <p className="text-gray-400 italic mb-6">
              "Beyond aesthetics: your unique vision translated into pixels."
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description:</h3>
                <p className="text-gray-300">
                  I decode visual styles by dissecting color palettes and processing parallels found in everyday paragraphs. 
                  Your brand's essence sings your truth through typographic symphonies. Colors hold weight — 
                  their pigments spell out your intentions and cross-examine them against your mission.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What I do:</h3>
                <p className="text-gray-300">
                  Brand visuals that go beyond "looking nice." I create emotional resonance through typography, color, and layout.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Deliverables:</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>▸ Identity Forensics & Strategic Aesthetics (Audit & Direction)</li>
                  <li>▸ Bespoke Identity Evolution Framework (Brand Kit)</li>
                  <li>▸ Asset Deployment Matrix (Usage Guide)</li>
                  <li>▸ Insignia Your Way: Reimagined or Refined (Logo)</li>
                  <li>▸ Organizational Schemas, Visual Architectures, & Content Patterns (Templates & Layouts)</li>
                  <li>▸ Accessibility-Enhanced Frameworks</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
