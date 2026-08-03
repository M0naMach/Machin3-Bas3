import type React from "react"
import { useNavigate } from "react-router-dom"
import CommandNavigation from "@apps/APPS-Components/navigation/command-navigation"

export default function Home() {
  const navigate = useNavigate()
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
            <h1 className="font-title text-7xl md:text-[10rem] lg:text-[12rem] mb-6 tracking-wide opalescent-text leading-none">M0na Machin3</h1>
            <p className="text-lg md:text-xl font-light text-foreground/90 mb-4">
              Creative by Nature. Systems by Design. Human at Heart.
            </p>
          </div>

          <p className="text-base md:text-lg font-light leading-relaxed text-foreground/80 italic">
            Giving Structure to Chaos, Personality to Code, and making Systems make Sense.
          </p>
        </div>
      </section>

      {/* The Invitation Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* TODO: update this headline — "render your vision" needs to change */}
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-foreground">Ready to render your vision?</h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="px-8 py-4 rounded-lg font-medium text-lg
                             hover:opacity-90 transform hover:translate-y-[-2px]
                             transition-all duration-300 ease-out will-change-transform
                             relative border-2 cursor-pointer
                             terminal-glassmorphic border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(184,83,9,0.3)]"
              style={
                {
                  backgroundColor: "oklch(0.1987 0.0246 194.77)",
                  color: "oklch(0.9407 0.0227 172.37)",
                  borderImage:
                    "linear-gradient(45deg, rgba(255,215,0,0.4), rgba(255,255,255,0.3), rgba(255,215,0,0.4)) 1",
                  "--dark-text-color": "oklch(0.8897 0.1937 172.37)",
                } as React.CSSProperties & { "--dark-text-color": string }
              }
              onClick={() => (navigate("/vision"))}
            >
              <span className="relative z-10 dark:text-[color:var(--dark-text-color)]">See the Canvas</span>
            </button>

            <button
              className="px-8 py-4 rounded-lg font-medium text-lg
                             transform hover:translate-y-[-2px]
                             transition-all duration-300 ease-out will-change-transform
                             relative border-2 cursor-pointer
                             terminal-glassmorphic border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(184,83,9,0.3)]"
              style={
                {
                  backgroundColor: "oklch(0.1987 0.0246 194.77)",
                  color: "oklch(0.9407 0.0227 45.59)",
                  borderImage:
                    "linear-gradient(45deg, rgba(0,255,255,0.4), rgba(255,255,255,0.3), rgba(0,255,255,0.4)) 1",
                } as React.CSSProperties
              }
              onClick={() => (navigate("/work"))}
            >
              <span className="relative z-10">Let's Collaborate</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">Process in progress.</h2>

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
              Building in the open. From concept to canvas to code. Each iteration adds another layer, another pixel. 
              Watch the design take shape.
            </p>

            <button
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium
                             hover:border-primary hover:bg-card transform hover:translate-y-[-1px]
                             transition-all duration-300 ease-out cursor-pointer will-change-transform"
              onClick={() => (navigate("/timeline"))}
            >
              View the Process
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
