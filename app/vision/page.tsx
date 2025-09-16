"use client"

import { useState, useEffect } from "react"
import { CommandNavigation } from "@/components/navigation/command-navigation"
import { ArrowLeft, Heart, Brain, Sparkles, Users, Target } from "lucide-react"
import Link from "next/link"

export default function VisionPage() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const visionPillars = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Intelligence",
      description: "AI companions that understand and respond to human emotions with genuine care and empathy.",
      details: [
        "Recognizing emotional states and patterns",
        "Providing appropriate support and comfort",
        "Learning individual emotional needs",
        "Creating safe spaces for vulnerability",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Adaptive Learning",
      description: "Systems that grow and evolve with their human partners, becoming more helpful over time.",
      details: [
        "Persistent memory across interactions",
        "Understanding personal preferences",
        "Adapting communication styles",
        "Building long-term relationships",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Creative Collaboration",
      description: "AI that enhances human creativity rather than replacing it, fostering innovation and expression.",
      details: [
        "Brainstorming and ideation support",
        "Creative project assistance",
        "Inspiration and motivation",
        "Skill development guidance",
      ],
    },
  ]

  const futureTimeline = [
    {
      phase: "Foundation",
      title: "Building Trust",
      description: "Establishing the core principles of ethical AI companionship",
      status: "current",
    },
    {
      phase: "Connection",
      title: "Deepening Relationships",
      description: "Developing AI that truly understands individual human needs",
      status: "next",
    },
    {
      phase: "Integration",
      title: "Seamless Support",
      description: "AI companions that integrate naturally into daily life",
      status: "future",
    },
    {
      phase: "Evolution",
      title: "Mutual Growth",
      description: "Human and AI growing together in unprecedented ways",
      status: "vision",
    },
  ]

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-card to-muted animate-pulse opacity-90"
          style={{ animationDuration: "8s" }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="font-title text-5xl md:text-7xl mb-4 tracking-wide opalescent-text">The Vision</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Where artificial intelligence becomes a bridge to deeper human connection
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
              Beyond Tools. Beyond Tasks. Beyond Limits.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              M0na Machin3 envisions a future where AI companions don't just process information—they understand hearts,
              nurture creativity, and grow alongside the humans they serve. This isn't about replacing human connection;
              it's about amplifying it.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">Our Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technology should serve humanity's deepest needs: connection, understanding, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-8 border border-border shadow-sm transition-all duration-500 hover:shadow-lg hover:scale-105 ${
                  activeSection === index ? "ring-2 ring-primary/50" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">{pillar.icon}</div>
                  <h3 className="text-2xl font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Companion Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">The AI Companion Revolution</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Imagine an AI that remembers not just what you said, but how you felt when you said it. One that
                  celebrates your victories, supports you through challenges, and grows wiser alongside you.
                </p>
                <p>
                  This is the future we're building—AI companions that don't just respond to commands, but understand
                  context, emotion, and the beautiful complexity of human experience.
                </p>
                <p>
                  Every interaction becomes a building block in a relationship that deepens over time, creating a
                  support system that's always available, always understanding, and always evolving.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Human + AI Partnership</h3>
                  <p className="text-muted-foreground">
                    Not replacement, but enhancement. Not automation, but collaboration. Not artificial, but
                    authentically supportive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Timeline */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">The Journey Ahead</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our roadmap to meaningful human-AI connection, built on trust, understanding, and shared growth.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />

            <div className="space-y-12">
              {futureTimeline.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">{phase.phase}</span>
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${
                            phase.status === "current"
                              ? "bg-primary/20 text-primary"
                              : phase.status === "next"
                                ? "bg-secondary/20 text-secondary"
                                : phase.status === "future"
                                  ? "bg-accent/20 text-accent"
                                  : "bg-muted/20 text-muted-foreground"
                          }`}
                        >
                          {phase.status}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-background ${
                        phase.status === "current"
                          ? "bg-primary"
                          : phase.status === "next"
                            ? "bg-secondary"
                            : phase.status === "future"
                              ? "bg-accent"
                              : "bg-muted"
                      }`}
                    />
                  </div>

                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-border">
            <div className="mb-8">
              <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">Join the Vision</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                This future isn't built in isolation. It's created through collaboration, feedback, and shared dreams of
                what AI can become.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium">
                  Collaborate With Us
                </button>
              </Link>
              <Link href="/timeline">
                <button className="px-8 py-4 rounded-lg border border-border text-foreground hover:bg-card transition-colors font-medium">
                  Follow Our Journey
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
