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
  assembledPosition: { x: number; y: number; rotation: number } // Now using pixels for precise alignment
  size: { width: number; height: number } // Pixel-based sizing for consistent alignment
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
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Large triangle 1 (cat's head)
    color: "oklch(0.65 0.18 280)", // Purple-magenta for head
    scatteredPosition: { x: 10, y: 15, rotation: 45 },
    assembledPosition: { x: 200, y: 50, rotation: -45 }, // Cat's head triangle - precise pixel positioning
    size: { width: 120, height: 120 },
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
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Medium triangle (cat's ear)
    color: "oklch(0.68 0.22 60)", // Yellow for ear accent
    scatteredPosition: { x: 70, y: 10, rotation: -30 },
    assembledPosition: { x: 280, y: 80, rotation: 45 }, // Cat's ear triangle
    size: { width: 85, height: 85 },
  },
  {
    id: "design-branding",
    title: "Design & Branding",
    description: "Branded designs for merch and digital content.",
    details: ["Merchandise design", "Digital content creation", "Brand identity development", "Visual storytelling"],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Large triangle 2 (cat's body)
    color: "oklch(0.6 0.15 140)", // Green for body
    scatteredPosition: { x: 20, y: 70, rotation: 120 },
    assembledPosition: { x: 150, y: 200, rotation: 0 }, // Cat's main body
    size: { width: 120, height: 120 },
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
    shape: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Square (cat's chest)
    color: "oklch(0.58 0.16 35)", // Red-orange square
    scatteredPosition: { x: 80, y: 60, rotation: -45 },
    assembledPosition: { x: 210, y: 260, rotation: 45 }, // Cat's chest area
    size: { width: 60, height: 60 },
  },
  {
    id: "strategic-clarity",
    title: "Strategic Clarity",
    description: "Help you see the patterns and connections that were always there.",
    details: ["System architecture review", "Process optimization", "Strategic planning", "Clarity architecture"],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Small triangle 1 (cat's front leg)
    color: "oklch(0.68 0.22 25)", // Red for small triangle
    scatteredPosition: { x: 5, y: 45, rotation: 90 },
    assembledPosition: { x: 120, y: 320, rotation: 135 }, // Cat's front leg
    size: { width: 60, height: 60 },
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
    shape: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)", // Parallelogram (cat's tail)
    color: "oklch(0.52 0.14 200)", // Blue parallelogram for tail
    scatteredPosition: { x: 60, y: 80, rotation: -60 },
    assembledPosition: { x: 350, y: 200, rotation: -30 }, // Cat's curved tail
    size: { width: 100, height: 50 },
  },
  {
    id: "integration-support",
    title: "Integration Support",
    description: "Helping disconnected pieces find their way to work together.",
    details: ["System integration", "Workflow automation", "Tool connectivity", "Seamless operations"],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)", // Small triangle 2 (cat's back leg)
    color: "oklch(0.55 0.12 60)", // Gold for small triangle
    scatteredPosition: { x: 40, y: 5, rotation: 180 },
    assembledPosition: { x: 270, y: 300, rotation: 90 }, // Cat's back leg
    size: { width: 60, height: 60 },
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
  return "cat"
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
    <div
      className="relative w-[600px] h-[600px] mx-auto mb-12 overflow-hidden border border-border/20 rounded-lg"
      style={{
        backgroundImage: `url('/images/tangram-cat-reference.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.1, // Subtle reference for alignment
      }}
    >
      {/* Inspirational message overlay */}
      {showMessage && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 text-center border border-border shadow-lg">
            <p className="text-lg font-medium mb-2 text-foreground">
              You're not broken — you're just not lined up yet.
            </p>
            <p className="text-sm text-muted-foreground">
              Your word: <span className="font-semibold text-foreground">{randomWord}</span>
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
            <button
              key={service.id}
              className="absolute cursor-pointer transition-all duration-1000 ease-out hover:scale-110 hover:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{
                left: isAssembled ? `${position.x}px` : `${position.x}%`,
                top: isAssembled ? `${position.y}px` : `${position.y}%`,
                width: `${service.size.width}px`,
                height: `${service.size.height}px`,
                transform: `rotate(${position.rotation}deg)`,
                transitionDelay: `${delay}s`,
                clipPath: service.shape,
                backgroundColor: service.color,
                boxShadow: `0 4px 12px ${service.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}
              onClick={() => toggleCard(service.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleCard(service.id)
                }
              }}
              aria-label={`${service.title} - Click to learn more`}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                  clipPath: "inherit",
                  animation: "opalShimmer 3s ease-in-out infinite",
                }}
              />
            </button>
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
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="text-muted-foreground hover:text-foreground text-xl"
                    >
                      ×
                    </button>
                  </div>
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
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
