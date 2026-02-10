"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Button asChild variant="outline" className="bg-card/80 backdrop-blur-sm hover:bg-card">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Construction Sign */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8 flex justify-center">
            <Image
              src="/Machin3s_at_Work06.png"
              alt="Machin3 Engineers at Work"
              width={600}
              height={338}
              className="rounded-2xl shadow-2xl border border-border"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="text-foreground">Machin</span>
            <span className="text-primary">3</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            M3chanics at Work
          </h2>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              Algorithn3ring som3thing sp3cial. Ch3ck back soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-4 font-medium">
                <Link href="/">
                  Return Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-4 font-medium">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CommandNavigation />
    </main>
  )
}
