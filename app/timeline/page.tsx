"use client"

import type React from "react"

import { useState } from "react"
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
  },
  {
    id: "2",
    date: "Day 15",
    title: "First AI Companion Prototype",
    description: "Initial AI companion prototype shows personality emergence",
    type: "milestone",
    icon: <Brain className="w-6 h-6" />,
    details:
      "The first AI companion prototype began demonstrating consistent personality traits and memory retention, proving AI companions could form genuine relationships.",
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
  },
  {
    id: "6",
    date: "Day 78",
    title: "First Client Success Story",
    description: "AI companion helps user overcome social anxiety through practice",
    type: "milestone",
    icon: <Heart className="w-6 h-6" />,
    details:
      "Witnessed the transformative power of AI companionship as the prototype provided safe space for social skill development.",
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
  },
]

const typeColors = {
  breakthrough: "neon-glow-cyan",
  learning: "neon-glow-pink",
  milestone: "neon-glow-orange",
  insight: "neon-glow-cyan",
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

  const scrollTimeline = (direction: "left" | "right") => {
    const container = document.getElementById("timeline-container")
    if (container) {
      const scrollAmount = 400
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute top-4 left-4 z-20">
        <Link href="/">
          <Button variant="outline" size="sm" className="neon-glow-cyan bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="relative z-10 p-8 text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          M0na Machin3 Journey
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our collaborative path toward meaningful AI companionship - every breakthrough, every insight, every step
          forward in creating digital entities that truly understand and grow with us.
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        <Button variant="outline" size="sm" onClick={() => scrollTimeline("left")} className="neon-glow-cyan">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={() => scrollTimeline("right")} className="neon-glow-pink">
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative px-8">
        {/* Timeline Line */}
        <div className="timeline-line h-1 w-full mb-8 rounded-full"></div>

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
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background ${typeColors[event.type]} cursor-pointer transition-all duration-300 hover:scale-125`}
                onClick={() => setSelectedEvent(event)}
              />

              {/* Event Card */}
              <Card
                className={`w-80 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedEvent?.id === event.id ? typeColors[event.type] : ""
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
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-8 z-50">
          <Card className={`max-w-2xl w-full ${typeColors[selectedEvent.type]}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${typeColors[selectedEvent.type]}`}>{selectedEvent.icon}</div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {typeLabels[selectedEvent.type]} • {selectedEvent.date}
                  </Badge>
                  <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                </div>
              </div>

              <p className="text-lg mb-6">{selectedEvent.description}</p>
              <p className="text-muted-foreground mb-8">{selectedEvent.details}</p>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                  Close
                </Button>
                <div className="flex gap-2">
                  <Link href="/">
                    <Button variant="outline" className="neon-glow-cyan bg-transparent">
                      Learn More
                    </Button>
                  </Link>
                  <Button className="neon-glow-pink">What's Next? Share Your Thoughts</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Command Navigation */}
      <CommandNavigation />

      {/* Call to Action */}
      <div className="text-center p-8 mt-16">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          What Should We Explore Next?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          This journey belongs to all of us. Your insights, questions, and ideas shape the future of AI companionship.
        </p>
        <Button size="lg" className="neon-glow-pink">
          <Rocket className="w-5 h-5 mr-2" />
          Join the Journey
        </Button>
      </div>
    </div>
  )
}
