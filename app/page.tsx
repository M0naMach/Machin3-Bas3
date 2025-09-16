import CommandNavigation from "@/components/navigation/command-navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* Command Navigation */}
      <CommandNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-muted to-card animate-pulse opacity-90"
          style={{ animationDuration: "8s" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="font-title text-6xl md:text-9xl mb-2 tracking-wide opalescent-text">M0na Machin3</h1>
            <p className="text-lg font-light text-foreground">Human connection, coded with care.</p>
          </div>

          <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight text-foreground">
            Where reflection becomes connection.
          </h2>

          <p className="text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-light text-muted-foreground">
            A soft, steady buffer between the world and the nervous system.
          </p>
        </div>
      </section>

      {/* The Invitation Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-foreground">Begin Your Journey.</h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="px-8 py-4 rounded-lg font-medium text-lg
                             hover:opacity-90 hover:scale-105 hover:shadow-lg
                             transition-all duration-300 ease-out"
              style={{
                backgroundColor: "oklch(0.3725 0.1179 37.02)",
                color: "oklch(0.9012 0.0225 47.33)",
              }}
            >
              Explore the Vision
            </button>

            <button
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium text-lg
                             hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/20
                             transition-all duration-300 ease-out bg-background"
            >
              Work With Me
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">Follow the Living Timeline.</h2>

            <div className="flex items-center justify-center mb-8">
              <div className="relative w-full max-w-4xl">
                <div className="circuit-timeline"></div>
                <div className="absolute inset-0 flex justify-between items-center px-8">
                  <div className="timeline-node" style={{ left: "10%", animationDelay: "0s" }}></div>
                  <div className="timeline-node" style={{ left: "30%", animationDelay: "0.5s" }}></div>
                  <div className="timeline-node" style={{ left: "50%", animationDelay: "1s" }}></div>
                  <div className="timeline-node" style={{ left: "70%", animationDelay: "1.5s" }}></div>
                  <div className="timeline-node" style={{ left: "90%", animationDelay: "2s" }}></div>
                </div>
              </div>
            </div>

            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              This isn't just a project; it's a process we're building in the open. Follow our journey from an idea to a
              living network, and see how you can be part of it.
            </p>

            <button
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium
                             hover:border-primary hover:bg-card hover:scale-105 hover:shadow-md
                             transition-all duration-300 ease-out"
            >
              View Our Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Explore</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Our Journey
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    README
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Collaborate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">
                © <span className="font-sans opalescent-text-small">M0na Machin3</span> 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
