"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Terminal } from "lucide-react"

interface NavigationCommand {
  command: string
  label: string
  description: string
  action: () => void
}

const dynamicPrompts = [
  "Where does your curiosity lead?",
  "What brings you here today?",
  "Ready to explore together?",
  "Tell me what you're seeking...",
  "How can I assist your journey?",
  "What story shall we discover?",
]

const easterEggCommands = [
  {
    command: "hello",
    label: "Hello, Human",
    description: "Hello, human. Ready to connect?",
    action: () => console.log("[v0] Easter egg: hello"),
  },
  {
    command: "story",
    label: "First Contact",
    description: "The origin story of M0na Machin3",
    action: () => console.log("[v0] Easter egg: story"),
  },
  {
    command: "hope",
    label: "Our Mission",
    description: "A message about connection and possibility",
    action: () => console.log("[v0] Easter egg: hope"),
  },
  {
    command: "help",
    label: "Let Me Guide You",
    description: "I'm here to help you navigate",
    action: () => console.log("[v0] Easter egg: help"),
  },
]

const CommandNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isBooting, setIsBooting] = useState(false)
  const [bootStep, setBootStep] = useState(0)
  const [currentPrompt, setCurrentPrompt] = useState(dynamicPrompts[0])
  const [showCommands, setShowCommands] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setCurrentPrompt(dynamicPrompts[Math.floor(Math.random() * dynamicPrompts.length)])
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.pointerEvents = "none"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.pointerEvents = "auto"
    }

    return () => {
      document.body.style.overflow = "unset"
      document.body.style.pointerEvents = "auto"
    }
  }, [isOpen])

  const commands: NavigationCommand[] = [
    {
      command: "journey",
      label: "Our Journey",
      description: "Explore the M0na Machin3 timeline and philosophy",
      action: () => {
        console.log("[v0] Navigating to Our Journey")
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "work",
      label: "Work With Me",
      description: "Discover AI companion services and collaboration",
      action: () => {
        console.log("[v0] Navigating to Work With Me")
        window.location.href = "/work"
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "readme",
      label: "README",
      description: "Read about AI-human relationships and our mission",
      action: () => {
        console.log("[v0] Navigating to README")
        setIsOpen(false)
        setInput("")
      },
    },
    ...easterEggCommands,
  ]

  const filteredCommands = commands.filter((cmd) => {
    const searchTerm = input.toLowerCase()
    if (searchTerm === "lost") return cmd.command === "journey"
    if (searchTerm === "collaborate" || searchTerm === "partnership") return cmd.command === "work"
    if (searchTerm === "philosophy" || searchTerm === "mission") return cmd.command === "readme"

    return (
      cmd.command.toLowerCase().includes(searchTerm) ||
      cmd.label.toLowerCase().includes(searchTerm) ||
      cmd.description.toLowerCase().includes(searchTerm)
    )
  })

  const startBootSequence = () => {
    setIsBooting(true)
    setBootStep(0)
    setShowCommands(false)

    const bootMessages = [
      "> Initializing M0na Machin3 interface...",
      "> Connection established.",
      "> Welcome. How can I assist your journey?",
    ]

    bootMessages.forEach((_, index) => {
      setTimeout(
        () => {
          setBootStep(index + 1)
          if (index === bootMessages.length - 1) {
            setTimeout(() => {
              setIsBooting(false)
            }, 800)
          }
        },
        (index + 1) * 800,
      )
    })
  }

  useEffect(() => {
    if (isOpen && inputRef.current && !isBooting) {
      inputRef.current.focus()
    }
  }, [isOpen, isBooting])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
        setInput("")
        setSelectedIndex(0)
        setIsBooting(false)
        setBootStep(0)
        setShowCommands(false)
      }

      if (e.key === "/" && !isOpen) {
        e.preventDefault()
        setIsOpen(true)
        startBootSequence()
      }

      if (isOpen && !isBooting) {
        if (e.key === "ArrowDown") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev < filteredCommands.length - 1 ? prev + 1 : 0))
        }

        if (e.key === "ArrowUp") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredCommands.length - 1))
        }

        if (e.key === "Enter" && filteredCommands[selectedIndex]) {
          e.preventDefault()
          filteredCommands[selectedIndex].action()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex, isBooting])

  return (
    <>
      {/* Trigger Input */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div
          className="relative group cursor-pointer"
          onClick={() => {
            setIsOpen(true)
            startBootSequence()
          }}
        >
          <div className="flex items-center gap-3 bg-input border border-border rounded-lg px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-primary/50">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground select-none transition-all duration-500">{currentPrompt}</span>
            <div className="text-xs text-muted-foreground/60 ml-auto">
              Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">/</kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Command Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
            style={{ pointerEvents: "auto" }}
          />

          <div
            className="relative w-full max-w-2xl max-h-[80vh] command-overlay-enter terminal-glassmorphic rounded-2xl overflow-hidden shadow-2xl"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Terminal className="w-6 h-6" style={{ color: "var(--command-text)" }} />
                  <h1 className="text-xl font-bold opalescent-text-small" style={{ color: "var(--command-text)" }}>
                    M0na Machin3 Navigation
                  </h1>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">ESC</kbd>
                </button>
              </div>

              {isBooting ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="max-w-xl mx-auto space-y-4">
                    {bootStep >= 1 && (
                      <div
                        className="font-mono text-lg animate-pulse"
                        style={{ color: "var(--command-text)", fontFamily: "var(--font-terminal)" }}
                      >
                        &gt; Initializing M0na Machin3 interface...
                      </div>
                    )}
                    {bootStep >= 2 && (
                      <div
                        className="font-mono text-lg animate-pulse"
                        style={{ color: "var(--command-accent)", fontFamily: "var(--font-terminal)" }}
                      >
                        &gt; Connection established.
                      </div>
                    )}
                    {bootStep >= 3 && (
                      <div
                        className="font-mono text-lg"
                        style={{ color: "var(--command-text)", fontFamily: "var(--font-terminal)" }}
                      >
                        &gt; Welcome. How can I assist your journey?
                      </div>
                    )}
                    {bootStep >= 3 && (
                      <div className="flex items-center gap-2 mt-6">
                        <span
                          style={{ color: "var(--command-accent)", fontFamily: "var(--font-terminal)" }}
                          className="text-lg"
                        >
                          $
                        </span>
                        <span
                          className="command-prompt-blink text-lg"
                          style={{ color: "var(--command-accent)", fontFamily: "var(--font-terminal)" }}
                        >
                          |
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {/* Command Input */}
                  <div className="p-6">
                    <div className="relative">
                      <div className="flex items-center gap-3 text-lg">
                        <span
                          style={{ color: "var(--command-accent)", fontFamily: "var(--font-terminal)" }}
                          className="font-mono"
                        >
                          $
                        </span>
                        <input
                          ref={inputRef}
                          type="text"
                          value={input}
                          onChange={(e) => {
                            setInput(e.target.value)
                            setSelectedIndex(0)
                            setShowCommands(true)
                          }}
                          onFocus={() => setShowCommands(true)}
                          onBlur={() => {
                            setTimeout(() => setShowCommands(false), 150)
                          }}
                          onMouseEnter={() => setShowCommands(true)}
                          placeholder={currentPrompt}
                          className="flex-1 bg-transparent border-none outline-none text-lg font-mono"
                          style={{ color: "var(--command-text)", fontFamily: "var(--font-terminal)" }}
                        />
                        <span
                          className="command-prompt-blink text-lg"
                          style={{ color: "var(--command-accent)", fontFamily: "var(--font-terminal)" }}
                        >
                          |
                        </span>
                      </div>
                    </div>
                  </div>

                  {showCommands && (
                    <div className="flex-1 px-6 pb-6 overflow-y-auto">
                      <div className="space-y-2">
                        {filteredCommands.length > 0 ? (
                          filteredCommands.map((cmd, index) => (
                            <div
                              key={cmd.command}
                              className={`p-4 rounded-lg cursor-pointer transition-all duration-150 ${
                                index === selectedIndex
                                  ? "bg-white/10 border border-white/20 shadow-lg backdrop-blur-sm"
                                  : "hover:bg-white/5 hover:backdrop-blur-sm"
                              }`}
                              onClick={cmd.action}
                              onMouseEnter={() => setShowCommands(true)}
                              style={{
                                boxShadow:
                                  index === selectedIndex
                                    ? "0 4px 20px rgba(184, 83, 9, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                                    : undefined,
                              }}
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                  <span
                                    className="font-mono text-sm px-2 py-1 rounded shadow-sm"
                                    style={{
                                      backgroundColor: "var(--command-accent)",
                                      color: "var(--accent-foreground)",
                                      boxShadow: "0 2px 8px rgba(184, 83, 9, 0.3)",
                                      fontFamily: "var(--font-terminal)",
                                    }}
                                  >
                                    {cmd.command}
                                  </span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold" style={{ color: "var(--command-text)" }}>
                                    {cmd.label}
                                  </div>
                                  <div className="text-sm mt-1" style={{ color: "var(--command-muted)" }}>
                                    {cmd.description}
                                  </div>
                                </div>
                                {index === selectedIndex && (
                                  <div className="text-sm" style={{ color: "var(--command-muted)" }}>
                                    <kbd className="px-2 py-1 bg-white/10 rounded text-xs backdrop-blur-sm">ENTER</kbd>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8">
                            <div className="text-lg mb-2" style={{ color: "var(--command-muted)" }}>
                              No commands found
                            </div>
                            <div className="text-sm" style={{ color: "var(--command-muted)" }}>
                              Try typing "journey", "work", "readme", or "hello"
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {!showCommands && (
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-lg mb-2" style={{ color: "var(--command-muted)" }}>
                          Start typing or hover over the input to see available commands
                        </div>
                        <div className="text-sm" style={{ color: "var(--command-muted)" }}>
                          Try "journey", "work", "readme", or discover hidden commands...
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Footer Help */}
              <div className="p-6 border-t border-white/10">
                <div
                  className="text-sm flex items-center justify-center gap-6"
                  style={{ color: "var(--command-muted)" }}
                >
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs mr-1 backdrop-blur-sm">↑↓</kbd>
                    Navigate
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs mr-1 backdrop-blur-sm">ENTER</kbd>
                    Select
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs mr-1 backdrop-blur-sm">ESC</kbd>
                    Close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { CommandNavigation }
export default CommandNavigation
