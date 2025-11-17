"use client"

import { useState, useEffect, useRef } from "react"
import { Terminal } from 'lucide-react'

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
  const [currentPrompt, setCurrentPrompt] = useState(dynamicPrompts[0])
  const [bootSequence, setBootSequence] = useState(false)
  const [bootText, setBootText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) {
      try {
        const interval = setInterval(() => {
          setCurrentPrompt(dynamicPrompts[Math.floor(Math.random() * dynamicPrompts.length)])
        }, 3000)
        return () => clearInterval(interval)
      } catch (error) {
        // Fail silently for accessibility tools
        return () => {}
      }
    }
  }, [isOpen])

  useEffect(() => {
    try {
      if (typeof document !== "undefined" && document.body) {
        if (isOpen) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = "unset"
        }
      }

      return () => {
        try {
          if (typeof document !== "undefined" && document.body) {
            document.body.style.overflow = "unset"
          }
        } catch (error) {
          // Fail silently
        }
      }
    } catch (error) {
      // Fail silently for accessibility tools
      return () => {}
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setBootSequence(true)
      setBootText("")

      const bootMessages = [
        "Initializing M0na Machin3...",
        "Loading neural pathways...",
        "Establishing connection...",
        "Ready for interaction.",
      ]

      let messageIndex = 0
      const bootInterval = setInterval(() => {
        if (messageIndex < bootMessages.length) {
          setBootText(bootMessages[messageIndex])
          messageIndex++
        } else {
          clearInterval(bootInterval)
          setTimeout(() => setBootSequence(false), 500)
        }
      }, 800)

      return () => clearInterval(bootInterval)
    } else {
      setBootSequence(false)
      setBootText("")
    }
  }, [isOpen]) // Removed bootSequence from dependencies to allow re-triggering

  const commands: NavigationCommand[] = [
    {
      command: "hom3bas3",
      label: "Hom3 Bas3",
      description: "Return to the M0na Machin3 home page",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "journey",
      label: "Our Journey",
      description: "Explore the M0na Machin3 timeline and philosophy",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/timeline"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "vision",
      label: "The Vision",
      description: "Discover the future of human-AI connection",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/vision"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "work",
      label: "Work With Me",
      description: "Discover AI companion services and collaboration",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/work"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "services",
      label: "Services",
      description: "View all available services and offerings",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/services"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
    ...easterEggCommands,
    {
      command: "readme",
      label: "README",
      description: "Read about AI-human relationships and our mission",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/readme"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "privacy",
      label: "Privacy Policy",
      description: "Learn about data privacy and security practices",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/privacy"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
    {
      command: "terms",
      label: "Terms of Service",
      description: "View the terms and conditions",
      action: () => {
        try {
          if (typeof window !== "undefined" && window.location) {
            window.location.href = "/terms"
          }
        } catch (error) {
          // Fail silently
        }
        setIsOpen(false)
        setInput("")
      },
    },
  ]

  const filteredCommands = commands.filter((cmd) => {
    const searchTerm = input.toLowerCase()
    if (searchTerm === "lost" || searchTerm === "timeline") return cmd.command === "journey"
    if (searchTerm === "collaborate" || searchTerm === "partnership") return cmd.command === "work"
    if (searchTerm === "philosophy" || searchTerm === "mission") return cmd.command === "readme"
    if (searchTerm === "future" || searchTerm === "ai" || searchTerm === "companion") return cmd.command === "vision"
    if (searchTerm === "services" || searchTerm === "offerings") return cmd.command === "services"

    return (
      cmd.command.toLowerCase().includes(searchTerm) ||
      cmd.label.toLowerCase().includes(searchTerm) ||
      cmd.description.toLowerCase().includes(searchTerm)
    )
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      try {
        if (e.key === "Escape") {
          setIsOpen(false)
          setInput("")
          setSelectedIndex(0)
        }

        if (e.key === "/" && !isOpen) {
          e.preventDefault()
          setIsOpen(true)
        }

        if (isOpen) {
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
      } catch (error) {
        // Fail silently for accessibility tools
      }
    }

    try {
      if (typeof document !== "undefined") {
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
      }
    } catch (error) {
      return () => {}
    }
  }, [isOpen, filteredCommands, selectedIndex])

  useEffect(() => {
    try {
      if (isOpen && inputRef.current) {
        inputRef.current.focus()
      }
    } catch (error) {
      // Fail silently
    }
  }, [isOpen])

  return (
    <>
      {/* Trigger Input */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
          <div className="flex items-center gap-2 md:gap-3 terminal-glassmorphic border border-primary/30 rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(184,83,9,0.3)] group-hover:scale-105 max-w-xs md:max-w-md">
            <Terminal className="w-4 h-4 md:w-5 md:h-5 text-primary opalescent-text-small" />
            <span
              className="text-foreground select-none transition-all duration-500 font-terminal text-lg md:text-2xl opalescent-text-small truncate"
              style={{ color: "oklch(0.85 0.05 100)" }}
            >
              {currentPrompt}
            </span>
            <div className="text-sm text-foreground/90 ml-auto flex-shrink-0">
              Press{" "}
              <kbd className="px-1 py-0.5 md:px-1.5 md:py-0.5 bg-primary text-primary-foreground rounded text-xs font-terminal border border-primary">
                {"/"}
              </kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Command Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-4xl max-h-[80vh] command-overlay-enter terminal-glassmorphic rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-primary" />
                  <h1 className="text-4xl font-bold opalescent-text-small text-foreground font-terminal">
                    M0na Machin3 Navigation
                  </h1>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">ESC</kbd>
                </button>
              </div>

              {/* Command Input */}
              <div className="p-6">
                <div className="relative">
                  <div className="flex items-center gap-3 text-xl">
                    <span className="font-mono text-sm px-2 py-1 rounded shadow-sm bg-primary text-primary-foreground">
                      $
                    </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value)
                        setSelectedIndex(0)
                      }}
                      placeholder={currentPrompt}
                      className="flex-1 bg-transparent border-none outline-none text-xl font-mono text-[rgba(0,255,205,1)]"
                    />
                    <span className="command-prompt-blink text-xl text-primary">|</span>
                  </div>
                </div>
              </div>

              {/* Commands List */}
              <div className="flex-1 px-6 pb-6 overflow-y-auto max-h-96">
                {bootSequence ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center">
                      <div className="text-2xl font-mono text-primary mb-2">{bootText}</div>
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </div>
                  </div>
                ) : (
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
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span
                                className="font-mono text-base px-2 py-1 rounded shadow-sm"
                                style={{
                                  backgroundColor: "oklch(0.4572 0.1828 10.2)",
                                  color: "oklch(0.9779 0.02 100.44)",
                                }}
                              >
                                {cmd.command}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div
                                className="font-semibold text-2xl font-terminal"
                                style={{ color: "oklch(0.4572 0.1828 10.2)" }}
                              >
                                {cmd.label}
                              </div>
                              <div className="text-lg mt-1" style={{ color: "oklch(0.9779 0.02 100.44)" }}>
                                {cmd.description}
                              </div>
                            </div>
                            {index === selectedIndex && (
                              <div className="text-sm text-muted-foreground">
                                <kbd className="px-2 py-1 bg-white/10 rounded text-xs backdrop-blur-sm">ENTER</kbd>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-lg mb-2 text-muted-foreground">No commands found</div>
                        <div className="text-sm text-muted-foreground">
                          Try typing "work", "services", "readme", "hom3bas3", "journey", "vision", or discover hidden commands...
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer Help */}
              <div className="p-6 border-t border-white/10">
                <div className="text-sm flex items-center justify-center gap-6 text-muted-foreground">
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
