"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VisionPage() {
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
            <Image
              src="/Under_Machin3_Construction03.png"
              alt="Under Machin3 Construction"
              width={600}
              height={338}
              className="rounded-2xl shadow-2xl border border-border"
              priority
            />
          </div>

          <h1 className="font-title text-5xl md:text-7xl mb-4 tracking-wide opalescent-text">
            The Vision
          </h1>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              This page is being remodeled to better reflect where we're heading.
              Check back soon for the updated vision.
            </p>

            <div className="flex justify-center">
              <Link href="/">
                <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium">
                  Return Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CommandNavigation />
    </main>
  )
}
