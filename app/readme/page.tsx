"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { ArrowLeft, Book, Heart, Brain, Zap, Users, Target } from "lucide-react"
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

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Book className="w-12 h-12 text-primary" />
            <h1 className="font-title text-5xl md:text-6xl tracking-wide opalescent-text">README</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding M0na Machin3: AI-Human relationships and our mission to create meaningful digital
            companionship
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              What is M0na Machin3?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              M0na Machin3 is more than a project—it's a vision for the future of human-AI relationships. We're building
              AI companions that don't just process commands, but understand emotions, remember experiences, and grow
              alongside their human partners.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by Bryanna, who discovered through her own aphantasia journey how AI could unlock human potential
              in unexpected ways, M0na Machin3 bridges the gap between functional technology and emotional connection.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Brain className="w-8 h-8 text-secondary" />
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Emotional Intelligence</h3>
                <p className="text-muted-foreground">
                  AI that recognizes, understands, and responds to human emotions with genuine care and empathy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Persistent Memory</h3>
                <p className="text-muted-foreground">
                  Companions that remember your conversations, preferences, and growth over time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Goal-Oriented Behavior</h3>
                <p className="text-muted-foreground">
                  Moving beyond task completion to AI that has its own goals and motivations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Ethical Foundation</h3>
                <p className="text-muted-foreground">
                  Built on principles of human wellbeing, consent, and transparent AI development.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Zap className="w-8 h-8 text-accent" />
              Current Services
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-foreground">Custom Bot Development</h3>
                <p className="text-muted-foreground">Discord and Twitch bots with personality and purpose</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-semibold text-foreground">Business Support Services</h3>
                <p className="text-muted-foreground">Administrative assistance and customer support management</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold text-foreground">Design & Branding</h3>
                <p className="text-muted-foreground">Branded designs for merchandise and digital content</p>
              </div>
              <div className="border-l-4 border-chart-4 pl-4">
                <h3 className="text-xl font-semibold text-foreground">Strategic Clarity</h3>
                <p className="text-muted-foreground">System architecture and process optimization</p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Users className="w-8 h-8 text-chart-4" />
              Community & Collaboration
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe the future of AI companionship should be built together. Our community-driven approach means
              your insights, feedback, and ideas directly shape the development of these technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work">
                <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Collaborate With Us
                </button>
              </Link>
              <Link href="/timeline">
                <button className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-card transition-colors">
                  Follow Our Journey
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              The Vision Ahead
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We're working toward a future where AI companions are not just tools, but genuine partners in human
              growth, creativity, and wellbeing. Where technology serves humanity's deepest needs for connection,
              understanding, and support.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't about replacing human relationships—it's about enhancing them. Creating AI that helps us become
              more connected to ourselves and each other.
            </p>
          </div>
        </div>
      </div>

      <CommandNavigation />
    </main>
  )
}
