"use client"

import { useState, useEffect } from "react"

interface TangramPiece {
  id: string
  title: string
  description: string
  details: string[]
  shape: string
  color: string
  scatteredPosition: { x: number; y: number; rotation: number }
  assembledPosition: { x: number; y: number; rotation: number }
}

const services: TangramPiece[] = [
  {
    id: "bot-development",
    title: "Custom Bot Development",
    description: "Custom created bots for Discord and Twitch with personality and purpose.",
    details: [
      "Community management automation",
      "Interactive engagement features",
      "Custom personality development",
      "Task automation & workflows",
    ],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Large triangle 1
    color: "oklch(0.65 0.18 188)", // Vibrant teal
    scatteredPosition: { x: 10, y: 15, rotation: 45 },
    assembledPosition: { x: 20, y: 20, rotation: 0 },
  },
  {
    id: "business-support",
    title: "Business Support Services",
    description: "Freelance business services like admin and customer support.",
    details: [
      "Administrative assistance",
      "Customer support management",
      "Process optimization",
      "Creative project support",
    ],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Large triangle 2
    color: "oklch(0.58 0.16 35)", // Rich copper
    scatteredPosition: { x: 70, y: 10, rotation: -30 },
    assembledPosition: { x: 50, y: 20, rotation: 90 },
  },
  {
    id: "design-branding",
    title: "Design & Branding",
    description: "Branded designs for merch and digital content.",
    details: ["Merchandise design", "Digital content creation", "Brand identity development", "Visual storytelling"],
    shape: "polygon(0% 0%, 100% 50%, 0% 100%)", // Medium triangle
    color: "oklch(0.68 0.22 25)", // Vibrant coral
    scatteredPosition: { x: 20, y: 70, rotation: 120 },
    assembledPosition: { x: 35, y: 50, rotation: 45 },
  },
  {
    id: "future-vision",
    title: "Future Vision",
    description: "Emotionally intelligent AI companions that support wellness and creativity.",
    details: [
      "AI wellness companions",
      "Creative collaboration tools",
      "Emotional intelligence systems",
      "Human-AI connection research",
    ],
    shape: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Square
    color: "oklch(0.62 0.2 280)", // Purple-magenta
    scatteredPosition: { x: 80, y: 60, rotation: -45 },
    assembledPosition: { x: 50, y: 40, rotation: 0 },
  },
  {
    id: "strategic-clarity",
    title: "Strategic Clarity",
    description: "Help you see the patterns and connections that were always there.",
    details: ["System architecture review", "Process optimization", "Strategic planning", "Clarity architecture"],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Small triangle 1
    color: "oklch(0.6 0.15 140)", // Emerald green
    scatteredPosition: { x: 5, y: 45, rotation: 90 },
    assembledPosition: { x: 20, y: 60, rotation: 0 },
  },
  {
    id: "connection-building",
    title: "Connection Building",
    description: "Creating meaningful digital relationships and community spaces.",
    details: [
      "Community platform design",
      "Engagement strategy",
      "Digital relationship building",
      "Sanctuary creation",
    ],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Small triangle 2
    color: "oklch(0.55 0.12 60)", // Warm gold
    scatteredPosition: { x: 60, y: 80, rotation: -60 },
    assembledPosition: { x: 65, y: 60, rotation: 90 },
  },
  {
    id: "integration-support",
    title: "Integration Support",
    description: "Helping disconnected pieces find their way to work together.",
    details: ["System integration", "Workflow automation", "Tool connectivity", "Seamless operations"],
    shape: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)", // Parallelogram
    color: "oklch(0.52 0.14 200)", // Deep blue
    scatteredPosition: { x: 40, y: 5, rotation: 180 },
    assembledPosition: { x: 35, y: 70, rotation: 0 },
  },
]

const getSeasonalShape = () => {
  const now = new Date()
  const month = now.getMonth()
  const day = now.getDate()

  // Halloween (October)
  if (month === 9) {
    return "cat"
  }
  // Christmas (December)
  if (month === 11) {
    return "tree"
  }
  // Valentine's Day (February 14)
  if (month === 1 && day === 14) {
    return "heart"
  }
  // Default house shape
  return "house"
}

const getRandomWord = () => {
  const words = [
    "clarity",
    "connection",
    "trust",
    "breathe",
    "begin",
    "home",
    "flow",
    "align",
    "integrate",
    "transform",
    "discover",
    "create",
    "belong",
  ]
  return words[Math.floor(Math.random() * words.length)]
}

export default function TangramServiceCards() {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isAssembled, setIsAssembled] = useState(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)
  const [randomWord, setRandomWord] = useState("")
  const [currentShape, setCurrentShape] = useState("house")

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("tangram-visited")
    const shape = getSeasonalShape()
    const word = getRandomWord()

    setCurrentShape(shape)
    setRandomWord(word)

    if (hasVisited) {
      setIsFirstVisit(false)
      setIsAssembled(true)
    } else {
      // First visit - start the ritual
      const timer = setTimeout(() => {
        setIsAssembled(true)
        setShowMessage(true)
        localStorage.setItem("tangram-visited", "true")

        // Hide message after 3 seconds
        setTimeout(() => setShowMessage(false), 3000)
      }, 4000) // 4 second delay for chaos → clarity

      return () => clearTimeout(timer)
    }
  }, [])

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="relative w-full h-96 mb-12 overflow-hidden">
      {/* Inspirational message overlay */}
      {showMessage && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 text-center border border-border shadow-lg">
            <p className="text-lg font-medium mb-2" style={{ color: "oklch(0.214 0.097 257.1)" }}>
              You're not broken — you're just not lined up yet.
            </p>
            <p className="text-sm" style={{ color: "oklch(0.5144 0.1701 33.55)" }}>
              Your word: <span className="font-semibold">{randomWord}</span>
            </p>
          </div>
        </div>
      )}

      {/* Tangram pieces */}
      <div className="relative w-full h-full">
        {services.map((service, index) => {
          const position = isAssembled ? service.assembledPosition : service.scatteredPosition
          const delay = isFirstVisit ? index * 0.2 : 0

          return (
            <div
              key={service.id}
              className="absolute w-20 h-20 cursor-pointer transition-all duration-1000 ease-out hover:scale-110"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: `rotate(${position.rotation}deg)`,
                transitionDelay: `${delay}s`,
                clipPath: service.shape,
                backgroundColor: service.color,
                boxShadow: `0 4px 12px ${service.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}
              onClick={() => toggleCard(service.id)}
            >
              {/* Shimmer effect */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                  animation: "opalShimmer 3s ease-in-out infinite",
                  clipPath: "inherit",
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Expanded card overlay */}
      {expandedCard && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-card rounded-xl p-8 max-w-md w-full mx-4 border border-border shadow-xl">
            {(() => {
              const service = services.find((s) => s.id === expandedCard)
              if (!service) return null

              return (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: "oklch(0.214 0.097 257.1)" }}>
                      {service.title}
                    </h3>
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="text-muted-foreground hover:text-foreground text-xl"
                    >
                      ×
                    </button>
                  </div>
                  <p className="mb-4" style={{ color: "oklch(0.5144 0.1701 33.55)" }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="text-muted-foreground text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </>
              )
            })()}
          </div>
        </div>
      )}

      {/* Toggle button for returning visitors */}
      {!isFirstVisit && (
        <button
          onClick={() => setIsAssembled(!isAssembled)}
          className="absolute bottom-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90 transition-opacity"
        >
          {isAssembled ? "Scatter" : "Assemble"}
        </button>
      )}
    </div>
  )
}
