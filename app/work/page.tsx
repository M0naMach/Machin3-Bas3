"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-foreground">Machin</span>
            <span className="text-primary">3</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            M3chanics at Work
          </h2>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/30 shadow-sm">
          <p className="text-xl text-muted-foreground mb-4">
            This section is currently under construction.
          </p>
          <p className="text-lg text-muted-foreground">
            Algorithn3ring som3thing sp3cial. Ch3ck back soon.
          </p>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>In the meantime, explore services via the terminal.</p>
        </div>
      </div>

      <CommandNavigation />
    </main>
  )
}
