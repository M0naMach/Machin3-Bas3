"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { ArrowLeft, Construction, HardHat, Book } from "lucide-react"
import Link from "next/link"

export default function ReadmePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-card transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>

      {/* Construction Sign */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-yellow-500/20 border-4 border-yellow-500/60 border-dashed flex items-center justify-center -rotate-3">
                <Construction className="w-16 h-16 text-yellow-500" />
              </div>
              <div className="absolute -top-3 -left-3">
                <HardHat className="w-10 h-10 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Book className="w-10 h-10 text-primary" />
            <h1 className="font-aspal text-5xl md:text-6xl tracking-wide opalescent-text">R3ADM3</h1>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-8 bg-yellow-500 rounded-full" />
              <span className="text-sm font-medium uppercase tracking-widest text-yellow-500">
                Under Construction
              </span>
              <div className="h-1 w-8 bg-yellow-500 rounded-full" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              This page is being remodeled with fresh content.
              Check back soon for the updated R3ADM3.
            </p>

            <div className="flex justify-center">
              <Link href="/">
                <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium">
                  Return Home
                </button>
              </Link>
            </div>
          </div>

          {/* Decorative construction stripes */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-8 bg-yellow-500/40 rounded-sm"
                  style={{ transform: `skewX(-12deg)` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CommandNavigation />
    </main>
  )
}
