"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"

type TangramPiece = {
  id: string
  title: string
  description: string
  details: string[]
  shape: string // clip-path: polygon(...) in %
  color: string
  scatteredPosition: { x: string; y: string; rotation: number } // % strings
  assembledPosition: { x: number; y: number; rotation: number } // px numbers
  size: { width: number; height: number } // px
}

/* =========================
   YOUR DATA (edit this only)
   ========================= */
const SERVICES_INITIAL: TangramPiece[] = [
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
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)",
    color: "oklch(0.65 0.18 280)",
    scatteredPosition: { x: "10%", y: "15%", rotation: 45 },
    assembledPosition: { x: 250, y: 80, rotation: 0 },
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
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)",
    color: "oklch(0.68 0.22 60)",
    scatteredPosition: { x: "70%", y: "10%", rotation: -30 },
    assembledPosition: { x: 220, y: 60, rotation: 0 },
    size: { width: 60, height: 60 },
  },
  {
    id: "design-branding",
    title: "Design & Branding",
    description: "Branded designs for merch and digital content.",
    details: ["Merchandise design", "Digital content creation", "Brand identity development", "Visual storytelling"],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)",
    color: "oklch(0.6 0.15 140)",
    scatteredPosition: { x: "20%", y: "70%", rotation: 120 },
    assembledPosition: { x: 200, y: 200, rotation: 0 },
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
    shape: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    color: "oklch(0.58 0.16 35)",
    scatteredPosition: { x: "80%", y: "60%", rotation: -45 },
    assembledPosition: { x: 320, y: 60, rotation: 0 },
    size: { width: 60, height: 60 },
  },
  {
    id: "strategic-clarity",
    title: "Strategic Clarity",
    description: "Help you see the patterns and connections that were always there.",
    details: ["System architecture review", "Process optimization", "Strategic planning", "Clarity architecture"],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)",
    color: "oklch(0.68 0.22 25)",
    scatteredPosition: { x: "5%", y: "45%", rotation: 90 },
    assembledPosition: { x: 180, y: 320, rotation: 0 },
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
    shape: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    color: "oklch(0.52 0.14 200)",
    scatteredPosition: { x: "60%", y: "80%", rotation: -60 },
    assembledPosition: { x: 380, y: 250, rotation: 0 },
    size: { width: 100, height: 50 },
  },
  {
    id: "integration-support",
    title: "Integration Support",
    description: "Helping disconnected pieces find their way to work together.",
    details: ["System integration", "Workflow automation", "Tool connectivity", "Seamless operations"],
    shape: "polygon(0% 0%, 100% 0%, 50% 100%)",
    color: "oklch(0.55 0.12 60)",
    scatteredPosition: { x: "40%", y: "5%", rotation: 180 },
    assembledPosition: { x: 320, y: 320, rotation: 0 },
    size: { width: 60, height: 60 },
  },
]

/* ============ helpers ============ */
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}
function randInt(min: number, max: number) {
  return Math.floor(rand(min, max))
}
function randomizeScattered(p: TangramPiece): TangramPiece {
  // Keep scattered in percentages for responsiveness
  return {
    ...p,
    scatteredPosition: {
      x: `${randInt(5, 85)}%`,
      y: `${randInt(5, 85)}%`,
      rotation: randInt(-180, 180),
    },
  }
}

/* ============ component ============ */
export default function TangramServiceCards() {
  // Work with a copy in state while editing
  const [data, setData] = useState<TangramPiece[]>(() => JSON.parse(JSON.stringify(SERVICES_INITIAL)))
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isAssembled, setIsAssembled] = useState(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)
  const [randomWord, setRandomWord] = useState("")
  const [showReference, setShowReference] = useState(false)

  // Editor
  const [devMode, setDevMode] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragState = useRef<{ id: string; dx: number; dy: number } | null>(null)

  // Init: randomize scattered for first visit, then auto-assemble
  useEffect(() => {
    const hasVisited = localStorage.getItem("tangram-visited")
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
    setRandomWord(words[Math.floor(Math.random() * words.length)])
    if (!hasVisited) {
      setData((prev) => prev.map(randomizeScattered))
    }
    if (hasVisited) {
      setIsFirstVisit(false)
      setIsAssembled(true)
    } else {
      const t = setTimeout(() => {
        setIsAssembled(true)
        setShowMessage(true)
        localStorage.setItem("tangram-visited", "true")
        setTimeout(() => setShowMessage(false), 3000)
      }, 4000)
      return () => clearTimeout(t)
    }
  }, [])

  /* -------- Dev drag + rotate (assembled only) -------- */
  const beginDrag = useCallback(
    (e: React.PointerEvent, id: string) => {
      if (!devMode || !isAssembled) return
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      dragState.current = { id, dx: e.clientX - rect.left, dy: e.clientY - rect.top }
      setSelectedId(id)
      ;(e.currentTarget as HTMLElement).setPointerCapture?.((e as any).pointerId)
    },
    [devMode, isAssembled],
  )

  const onDragMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current || !containerRef.current) return
    const id = dragState.current.id
    const crect = containerRef.current.getBoundingClientRect()
    const x = Math.round(e.clientX - crect.left - dragState.current.dx)
    const y = Math.round(e.clientY - crect.top - dragState.current.dy)
    setData((prev) =>
      prev.map((p) => (p.id === id ? { ...p, assembledPosition: { ...p.assembledPosition, x, y } } : p)),
    )
  }, [])

  const endDrag = useCallback(() => {
    dragState.current = null
  }, [])

  // Rotate with Q/E and nudge with arrows
  useEffect(() => {
    if (!devMode || !selectedId) return
    const onKey = (e: KeyboardEvent) => {
      if (!selectedId) return
      const k = e.key.toLowerCase()
      if (k === "q" || k === "e") {
        setData((prev) =>
          prev.map((p) =>
            p.id === selectedId
              ? {
                  ...p,
                  assembledPosition: {
                    ...p.assembledPosition,
                    rotation: p.assembledPosition.rotation + (k === "q" ? -1 : 1),
                  },
                }
              : p,
          ),
        )
      }
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) {
        e.preventDefault()
        const dx = k === "arrowleft" ? -1 : k === "arrowright" ? 1 : 0
        const dy = k === "arrowup" ? -1 : k === "arrowdown" ? 1 : 0
        setData((prev) =>
          prev.map((p) =>
            p.id === selectedId
              ? {
                  ...p,
                  assembledPosition: {
                    ...p.assembledPosition,
                    x: p.assembledPosition.x + dx,
                    y: p.assembledPosition.y + dy,
                  },
                }
              : p,
          ),
        )
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [devMode, selectedId])

  // Copy current JSON back to clipboard
  const copyJSON = async () => {
    const payload = JSON.stringify(data, null, 2)
    try {
      await navigator.clipboard.writeText(payload)
      alert("Updated Tangram JSON copied.")
    } catch {
      console.log(payload)
      alert("Clipboard blocked. Printed in console.")
    }
  }

  // Assemble/Scatter with fresh random scatter
  const toggleAssemble = () => {
    if (isAssembled) setData((prev) => prev.map(randomizeScattered))
    setIsAssembled(!isAssembled)
  }

  const toggleCard = useCallback(
    (cardId: string) => {
      if (devMode) {
        setSelectedId(cardId)
        return
      }
      setExpandedCard((prev) => (prev === cardId ? null : cardId))
    },
    [devMode],
  )

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setExpandedCard(null)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-[600px] h-[600px] mx-auto mb-12 overflow-hidden border border-border/20 rounded-lg"
      style={{
        ...(showReference && {
          backgroundImage: `url('/images/tangram-cat-reference.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.3,
        }),
      }}
      onPointerMove={onDragMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      {showMessage && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 text-center border border-border shadow-lg">
            <p className="text-lg font-medium mb-2 text-foreground">
              {"You're not broken — you're just not lined up yet."}
            </p>
            <p className="text-sm text-muted-foreground">
              Your word: <span className="font-semibold text-foreground">{randomWord}</span>
            </p>
          </div>
        </div>
      )}

      <div className="relative w-full h-full">
        {data.map((service, index) => {
          const position = isAssembled ? service.assembledPosition : service.scatteredPosition
          const delay = isFirstVisit ? index * 0.2 : 0
          const left = isAssembled ? `${(position as any).x}px` : (position as any).x
          const top = isAssembled ? `${(position as any).y}px` : (position as any).y

          const isSelected = devMode && selectedId === service.id

          return (
            <button
              key={service.id}
              className={`absolute cursor-pointer transition-all duration-1000 ease-out hover:scale-110 hover:z-10 focus:outline-none ${isSelected ? "ring-2 ring-primary" : ""}`}
              style={{
                left,
                top,
                width: `${service.size.width}px`,
                height: `${service.size.height}px`,
                transform: `rotate(${(position as any).rotation}deg)`,
                transitionDelay: `${delay}s`,
                clipPath: service.shape,
                backgroundColor: service.color,
                boxShadow: `0 4px 12px ${service.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                // in dev, move immediately while dragging
                transitionProperty: devMode ? "box-shadow, transform" : undefined,
              }}
              onClick={() => toggleCard(service.id)}
              onPointerDown={(e) => beginDrag(e, service.id)}
              aria-label={`${service.title} - Click to learn more`}
            >
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                  clipPath: "inherit",
                }}
              />
            </button>
          )
        })}
      </div>

      {expandedCard && !devMode && (
        <div
          className="absolute inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="bg-card rounded-xl p-8 max-w-md w-full mx-4 border border-border shadow-xl">
            {(() => {
              const service = data.find((s) => s.id === expandedCard)
              if (!service) return null
              return (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="text-muted-foreground hover:text-foreground text-2xl w-8 h-8 flex items-center justify-center rounded hover:bg-muted/50 transition-colors"
                      aria-label="Close"
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

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {!isFirstVisit && (
          <button
            onClick={toggleAssemble}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            {isAssembled ? "Scatter" : "Assemble"}
          </button>
        )}
        {!isFirstVisit && (
          <button
            onClick={() => setShowReference(!showReference)}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            {showReference ? "Hide Ref" : "Show Ref"}
          </button>
        )}
        <button
          onClick={() => {
            setDevMode(!devMode)
            setSelectedId(null)
          }}
          className="px-3 py-2 bg-amber-600 text-white rounded-lg text-sm hover:opacity-90"
          title="Toggle in-app editor"
        >
          {devMode ? "Exit Dev" : "Dev Mode"}
        </button>
        {devMode && (
          <>
            <select
              value={selectedId ?? ""}
              onChange={(e) => setSelectedId(e.target.value || null)}
              className="px-2 py-2 bg-muted text-foreground rounded text-sm"
              title="Select piece"
            >
              <option value="">Select piece…</option>
              {data.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title}
                </option>
              ))}
            </select>
            <button
              onClick={copyJSON}
              className="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:opacity-90"
              title="Copy updated JSON to clipboard"
            >
              Copy JSON
            </button>
          </>
        )}
      </div>
    </div>
  )
}
