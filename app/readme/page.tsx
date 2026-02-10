"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Book } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReadmePage() {
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
              src="/Under_Machin3_Construction02.png"
              alt="Under Machin3 Construction"
              width={480}
              height={270}
              className="rounded-2xl shadow-2xl border border-border"
              priority
            />
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Book className="w-10 h-10 text-primary" />
            <h1 className="font-aspal text-5xl md:text-6xl tracking-wide opalescent-text">R3ADM3</h1>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              This page is being remodeled with fresh content.
              Check back soon for the updated R3ADM3.
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="px-8 py-4 font-medium">
                <Link href="/">
                  Return Home
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
