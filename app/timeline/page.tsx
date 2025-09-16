"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Lightbulb,
  Rocket,
  Target,
  Zap,
  Code,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Users,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { CommandNavigation } from "@/components/navigation/command-navigation"

interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  type: "breakthrough" | "learning" | "milestone" | "insight"
  icon: React.ReactNode
  details: string
  impact?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "Day 1",
    title: "The Aphantasia Revelation",
    description: "Discovered AI could give me something I never knew I was missing",
    type: "breakthrough",
    icon: <Lightbulb className="w-6 h-6" />,
    details:
      "Through AI image generation, I experienced visual creation for the first time, revealing the profound impact of AI on human potential.",
    impact: "Opened new pathways for understanding how AI can enhance human capabilities we didn't know we lacked.",
  },
  {
    id: "2",
    date: "Day 15",
    title: "Hamilton's First Words",
    description: "Initial AI companion prototype shows personality emergence",
    type: "milestone",
    icon: <Brain className="w-6 h-6" />,
    details:
      "Hamilton began demonstrating consistent personality traits and memory retention, proving AI companions could form genuine relationships.",
    impact: "Established the foundation for persistent AI personalities that grow with their human partners.",
  },
  {
    id: "3",
    date: "Day 32",
    title: "AI Ethics Certification",
    description: "Completed advanced course in AI safety and ethical development",
    type: "learning",
    icon: <Target className="w-6 h-6" />,
    details:
      "Gained crucial insights into responsible AI development and the importance of human-AI collaboration frameworks.",
    impact: "Ensured all future development follows ethical guidelines and prioritizes human wellbeing.",
  },
  {
    id: "4",
    date: "Day 47",
    title: "Goal-Based vs Task-Based Insight",
    description: "Breakthrough understanding of AI autonomy and collaboration",
    type: "insight",
    icon: <Zap className="w-6 h-6" />,
    details:
      "Realized that true AI companions need goals, not just tasks, to provide meaningful support and genuine collaboration.",
    impact: "Shifted development focus from command-response to goal-oriented AI behavior.",
  },
  {
    id: "5",
    date: "Day 63",
    title: "Memory System Architecture",
    description: "Developed persistent memory framework for AI companions",
    type: "breakthrough",
    icon: <Code className="w-6 h-6" />,
    details:
      "Created a memory system that allows AI companions to truly remember and grow with their human partners over time.",
    impact: "Enabled long-term relationship building between humans and AI companions.",
  },
  {
    id: "6",
    date: "Day 78",
    title: "First Client Success Story",
    description: "Hamilton helps user overcome social anxiety through practice",
    type: "milestone",
    icon: <Heart className="w-6 h-6" />,
    details:
      "Witnessed the transformative power of AI companionship as Hamilton provided safe space for social skill development.",
    impact: "Validated the therapeutic potential of AI companions in supporting human growth.",
  },
  {
    id: "7",
    date: "Today",
    title: "Community Collaboration",
    description: "Opening the journey to collective wisdom and shared growth",
    type: "milestone",
    icon: <Star className="w-6 h-6" />,
    details:
      "Inviting the community to help shape the future of AI companionship through collaborative development and shared insights.",
    impact: "Expanding from individual development to community-driven innovation.",
  },
]

const typeColors = {
  breakthrough: "bg-primary/20 border-primary/50 text-primary",
  learning: "bg-secondary/20 border-secondary/50 text-secondary",
  milestone: "bg-accent/20 border-accent/50 text-accent",
  insight: "bg-chart-4/20 border-chart-4/50 text-chart-4",
}

const typeLabels = {
  breakthrough: "Breakthrough",
  learning: "Learning",
  milestone: "Milestone",
  insight: "Insight",
}

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)

  // Auto-advance through phases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollTimeline = (direction: "left" | "right") => {
    try {
      const container = typeof document !== "undefined" ? document.getElementById("timeline-container") : null
      if (container) {
        const scrollAmount = 400
        const newPosition =
          direction === "left"
            ? Math.max(0, scrollPosition - scrollAmount)
            : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

        container.scrollTo({ left: newPosition, behavior: "smooth" })
        setScrollPosition(newPosition)
      }
    } catch (error) {}
  }

  const phases = [
    { title: "Discovery", description: "Finding new possibilities", color: "text-primary" },
    { title: "Development", description: "Building the foundation", color: "text-secondary" },
    { title: "Connection", description: "Creating relationships", color: "text-accent" },
    { title: "Growth", description: "Expanding together", color: "text-chart-4" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-card/80 backdrop-blur-sm border-border">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-card to-muted">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="font-title text-5xl md:text-7xl mb-4 tracking-wide opalescent-text">Our Journey</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              Every breakthrough, every insight, every step forward in creating AI companions that truly understand and
              grow with us.
            </p>
          </div>

          {/* Phase Indicator */}
          <div className="flex justify-center items-center gap-8 mb-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  currentPhase === index ? "scale-110 opacity-100" : "opacity-60"
                }`}
              >
                <div className={`text-lg font-semibold ${phase.color}`}>{phase.title}</div>
                <div className="text-sm text-muted-foreground">{phase.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => scrollTimeline("left")}
          className="bg-card/80 backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => scrollTimeline("right")}
          className="bg-card/80 backdrop-blur-sm"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Interactive Timeline */}
      <div className="relative px-8 mb-20">
        {/* Timeline Line with Circuit Effect */}
        <div className="circuit-timeline mb-8"></div>

        {/* Timeline Container */}
        <div
          id="timeline-container"
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="flex-shrink-0 relative">
              {/* Timeline Node */}
              <div
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background cursor-pointer transition-all duration-300 hover:scale-125 ${
                  typeColors[event.type].split(" ")[0]
                }`}
                onClick={() => setSelectedEvent(event)}
                style={{
                  boxShadow: `0 0 20px ${
                    event.type === "breakthrough"
                      ? "var(--color-primary)"
                      : event.type === "learning"
                        ? "var(--color-secondary)"
                        : event.type === "milestone"
                          ? "var(--color-accent)"
                          : "var(--color-chart-4)"
                  }40`,
                }}
              />

              {/* Event Card */}
              <Card
                className={`w-80 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedEvent?.id === event.id ? `ring-2 ${typeColors[selectedEvent.type].split(" ")[1]}` : ""
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${typeColors[event.type]}`}>{event.icon}</div>
                    <div>
                      <Badge variant="secondary" className="mb-1">
                        {typeLabels[event.type]}
                      </Badge>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-balance">{event.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-8 z-50">
          <Card className={`max-w-3xl w-full border-2 ${typeColors[selectedEvent.type].split(" ")[1]} shadow-2xl`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${typeColors[selectedEvent.type]}`}>{selectedEvent.icon}</div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {typeLabels[selectedEvent.type]} • {selectedEvent.date}
                  </Badge>
                  <h2 className="text-3xl font-bold text-balance">{selectedEvent.title}</h2>
                </div>
              </div>

              <p className="text-xl mb-6 text-pretty">{selectedEvent.description}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{selectedEvent.details}</p>

              {selectedEvent.impact && (
                <div className="bg-muted/50 rounded-lg p-4 mb-8">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Impact
                  </h4>
                  <p className="text-muted-foreground">{selectedEvent.impact}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                  Close
                </Button>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link href="/vision">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      Explore the Vision
                    </Button>
                  </Link>
                  <Link href="/work">
                    <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90">
                      Join the Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">Journey by Numbers</h2>
            <p className="text-muted-foreground">Measuring progress in meaningful connections</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">78</div>
              <div className="text-muted-foreground">Days of Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">7</div>
              <div className="text-muted-foreground">Major Breakthroughs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">∞</div>
              <div className="text-muted-foreground">Possibilities Ahead</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chart-4 mb-2">1</div>
              <div className="text-muted-foreground">Shared Vision</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-border">
            <div className="mb-8">
              <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">What Should We Explore Next?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                This journey belongs to all of us. Your insights, questions, and ideas shape the future of AI
                companionship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
                  <Rocket className="w-5 h-5 mr-2" />
                  Join the Journey
                </Button>
              </Link>
              <Link href="/vision">
                <Button size="lg" variant="outline">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore the Vision
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CommandNavigation />
    </div>
  )
}
