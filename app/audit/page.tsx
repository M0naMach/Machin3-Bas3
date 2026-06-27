"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuditPage() {
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

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="font-title text-5xl md:text-7xl mb-6 tracking-wide opalescent-text">
            Audit
          </h1>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Repository audit reports and governance logs are being compiled.
              Check back soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-medium">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-medium">
                <a
                  href="https://ai-audit-actuarium.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI Audit Actuarium ↗
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CommandNavigation />
    </main>
  )
}
