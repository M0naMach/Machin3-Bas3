"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 font-sans">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-title mb-4 opalescent-text">Machin3</h1>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">M3chanics at Work</h2>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/30 shadow-sm">
          <p className="text-xl text-muted-foreground mb-4 font-light">This section is currently under construction.</p>
          <p className="text-lg text-muted-foreground font-light">Algorithn3ring som3thing sp3cial. Ch3ck back soon.</p>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p className="font-light">In the meantime, explore services via the terminal.</p>
        </div>
      </div>

      <CommandNavigation />
    </main>
  )
}
