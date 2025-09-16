import { CommandNavigation } from "@/components/navigation/command-navigation"
import TangramServiceCards from "@/components/tangram-service-cards"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">Work With Me</h1>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/30 mb-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Welcome to M0na Machin3</h2>
              <p className="text-lg italic text-muted-foreground">
                Where bots have personality, design has meaning, and support feels human.
              </p>
            </div>

            <div className="prose prose-lg mx-auto text-center">
              <p className="mb-6 text-muted-foreground">
                I'm <span className="font-semibold text-foreground">Bryanna</span>, the founder, developer, and creative
                behind the screen. I started M0na Machin3 to bridge the gap between functional tech and emotional
                connection. While I'm studying and evolving toward a future of AI companions that can support wellness
                and creativity, right now I'm here to help real people do real things—more efficiently, beautifully, and
                a little more magically.
              </p>
            </div>
          </div>

          <TangramServiceCards />

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/30 shadow-sm mt-12">
            <div className="text-center">
              <p className="mb-6 text-lg text-muted-foreground">
                Every project is shaped by both professional care and personal curiosity—because this isn't just a
                service, it's a vision in motion.
              </p>
              <p className="mb-8 text-muted-foreground">
                Whether you're here to delegate, design, or dream up your next automation—we're here to build it with
                you.
              </p>
              <button className="px-8 py-3 rounded-lg transition-colors shadow-sm bg-primary text-primary-foreground hover:opacity-90">
                Let's Create Together
              </button>
            </div>
          </div>
        </div>
      </div>
      <CommandNavigation />
    </main>
  )
}
