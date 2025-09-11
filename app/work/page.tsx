import { CommandNavigation } from "@/components/navigation/command-navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 text-center">Work With Me</h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-ivory-dark/30 mb-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">Welcome to M0na Machin3</h2>
              <p className="text-lg text-charcoal/70 italic">
                Where bots have personality, design has meaning, and support feels human.
              </p>
            </div>

            <div className="prose prose-lg mx-auto text-center">
              <p className="text-charcoal/80 mb-6">
                I'm <span className="font-semibold text-teal-dark">Bryanna</span>, the founder, developer, and creative
                behind the screen. I started M0na Machin3 to bridge the gap between functional tech and emotional
                connection. While I'm studying and evolving toward a future of AI companions that can support wellness
                and creativity, right now I'm here to help real people do real things—more efficiently, beautifully, and
                a little more magically.
              </p>
            </div>
          </div>

          <div className="mosaic-grid mt-12">
            <Accordion
              type="multiple"
              className="mosaic-card-large opalescent-green backdrop-blur-sm rounded-xl border border-white/20 shadow-lg shadow-black/10"
            >
              <AccordionItem value="bot-development" className="border-none">
                <AccordionTrigger className="text-2xl font-semibold text-white px-8 pt-8 pb-4 hover:no-underline">
                  Custom Bot Development
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <p className="text-white/90 mb-4">
                    Custom created bots for Discord and Twitch with personality and purpose, designed to automate tasks,
                    enhance interaction, and bring communities to life.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Community management automation</li>
                    <li>• Interactive engagement features</li>
                    <li>• Custom personality development</li>
                    <li>• Task automation & workflows</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion
              type="multiple"
              className="mosaic-card-medium opalescent-green backdrop-blur-sm rounded-xl border border-white/20 shadow-lg shadow-black/10"
            >
              <AccordionItem value="business-support" className="border-none">
                <AccordionTrigger className="text-xl font-semibold text-white px-6 pt-6 pb-3 hover:no-underline">
                  Business Support Services
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-white/90 mb-3 text-sm">
                    For our professional allies, we offer freelance business services like admin and customer support to
                    help small teams and solo creators breathe easier.
                  </p>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>• Administrative assistance</li>
                    <li>• Customer support management</li>
                    <li>• Process optimization</li>
                    <li>• Creative project support</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion
              type="multiple"
              className="mosaic-card-tall opalescent-green backdrop-blur-sm rounded-xl border border-white/20 shadow-lg shadow-black/10"
            >
              <AccordionItem value="design-branding" className="border-none">
                <AccordionTrigger className="text-xl font-semibold text-white px-6 pt-6 pb-3 hover:no-underline">
                  Design & Branding
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-white/90 mb-3 text-sm">
                    Branded designs for merch and digital content—the vision is to help clients get more done with less
                    friction.
                  </p>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>• Merchandise design</li>
                    <li>• Digital content creation</li>
                    <li>• Brand identity development</li>
                    <li>• Visual storytelling</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion
              type="multiple"
              className="mosaic-card-wide opalescent-green backdrop-blur-sm rounded-xl border border-white/20 shadow-lg shadow-black/10"
            >
              <AccordionItem value="future-vision" className="border-none">
                <AccordionTrigger className="text-2xl font-semibold text-white px-8 pt-8 pb-4 hover:no-underline">
                  Future Vision
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <p className="text-white/90 mb-4">
                    Our current work powers real-world productivity, while our future vision is bold: emotionally
                    intelligent AI companions that support wellness, creativity, and connection.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• AI wellness companions</li>
                    <li>• Creative collaboration tools</li>
                    <li>• Emotional intelligence systems</li>
                    <li>• Human-AI connection research</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-ivory-dark/30 shadow-sm mt-12">
            <div className="text-center">
              <p className="text-charcoal/80 mb-6 text-lg">
                Every project is shaped by both professional care and personal curiosity—because this isn't just a
                service, it's a vision in motion.
              </p>
              <p className="text-charcoal/70 mb-8">
                Whether you're here to delegate, design, or dream up your next automation—we're here to build it with
                you.
              </p>
              <button className="bg-teal-dark text-ivory px-8 py-3 rounded-lg hover:bg-teal-dark/80 transition-colors shadow-sm">
                Let's Create Together
              </button>
            </div>
          </div>
        </div>
      </div>
      <CommandNavigation />
    </div>
  )
}
