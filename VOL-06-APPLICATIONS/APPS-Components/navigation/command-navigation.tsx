import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Terminal } from 'lucide-react'
import { getPortfolioHref } from "@lib/LIBR-Utils/portfolio"
import { getActuariumHref } from "@lib/LIBR-Utils/actuarium"
import { lockBodyScroll, unlockBodyScroll } from "@lib/LIBR-Utils/body-scroll-lock"

interface NavigationCommand {
  command: string
  label: string
  description: string
  action: () => void
}

interface CommandNavigationProps {
  compact?: boolean
}

const dynamicPrompts = [
  "Where does your curiosity lead?",
  "What brings you here today?",
  "Ready to explore together?",
  "Tell me what you're seeking...",
  "How can I assist your journey?",
  "What story shall we discover?",
]


const CommandNavigation = ({ compact = false }: CommandNavigationProps) => {
  const navigate = useNavigate()
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
        return () => {}
      }
    }
  }, [isOpen])

  useEffect(() => {
    try {
      if (isOpen && !compact) {
        lockBodyScroll()
        return () => unlockBodyScroll()
      }
    } catch (error) {
      return () => {}
    }
  }, [isOpen, compact])

  useEffect(() => {
    if (isOpen && !compact) {
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
          setTimeout(() => setBootSequence(false), 150)
        }
      }, 300)

      return () => clearInterval(bootInterval)
    } else {
      setBootSequence(false)
      setBootText("")
    }
  }, [isOpen, compact])

  const navigateTo = (path: string) => {
    navigate(path)
    setIsOpen(false)
    setInput("")
  }

  const navigateSameTab = (path: string) => {
    window.location.assign(path)
    setIsOpen(false)
    setInput("")
  }

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
    setInput("")
  }

  const commands: NavigationCommand[] = [
    {
      command: "hom3bas3",
      label: "Hom3 Bas3",
      description: "Return to the M0na Machin3 home page",
      action: () => navigateTo("/"),
    },
    {
      command: "portfolio",
      label: "Portfolio",
      description: "View my portfolio showcase",
      action: () => navigateSameTab(getPortfolioHref()),
    },
    {
      command: "services",
      label: "Services",
      description: "View all available services and offerings",
      action: () => navigateTo("/work"),
    },
    {
      command: "work",
      label: "Work",
      description: "Portfolio and collaboration showcase",
      action: () => navigateTo("/work"),
    },
    {
      command: "vision",
      label: "Vision",
      description: "Purpose and creative direction",
      action: () => navigateTo("/vision"),
    },
    {
      command: "journey",
      label: "Timeline",
      description: "Project journey and development process",
      action: () => navigateTo("/timeline"),
    },
    {
      command: "actuarium",
      label: "AI Actuarium",
      description: "AI audit and evaluation framework",
      action: () => openExternal(getActuariumHref()),
    },
    {
      command: "support",
      label: "Support",
      description: "Get help and find answers to common questions",
      action: () => navigateTo("/support"),
    },
    {
      command: "readme",
      label: "README",
      description: "Read about AI-human relationships and our mission",
      action: () => navigateTo("/readme"),
    },
    {
      command: "privacy",
      label: "Privacy Policy",
      description: "Learn about data privacy and security practices",
      action: () => navigateTo("/privacy"),
    },
    {
      command: "terms",
      label: "Terms of Service",
      description: "View the terms and conditions",
      action: () => navigateTo("/terms"),
    },
  ]

  const filteredCommands = commands.filter((cmd) => {
    const searchTerm = input.toLowerCase()
    if (searchTerm === "philosophy" || searchTerm === "mission") return cmd.command === "readme"
    if (searchTerm === "offerings") return cmd.command === "services"
    if (searchTerm === "journey") return cmd.command === "timeline"
    if (searchTerm === "audit" || searchTerm === "ai") return cmd.command === "actuarium"

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

  const renderCompactCommand = (cmd: NavigationCommand, index: number) => {
    const optionId = `compact-option-${cmd.command}`
    return (
      <button
        key={cmd.command}
        id={optionId}
        type="button"
        role="option"
        aria-selected={index === selectedIndex}
        className={`w-full px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 text-left ${
          index === selectedIndex
            ? "bg-white/10 border border-white/20"
            : "hover:bg-white/5"
        }`}
        onClick={cmd.action}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-xs px-1.5 py-0.5 rounded shadow-sm"
            style={{
              backgroundColor: "oklch(0.4572 0.1828 10.2)",
              color: "oklch(0.9779 0.02 100.44)",
            }}
          >
            {cmd.command}
          </span>
          <span
            className="font-semibold text-sm font-terminal"
            style={{ color: "oklch(0.4572 0.1828 10.2)" }}
          >
            {cmd.label}
          </span>
          {index === selectedIndex && (
            <kbd className="ml-auto px-1.5 py-0.5 bg-white/10 rounded text-xs backdrop-blur-sm text-muted-foreground">ENTER</kbd>
          )}
        </div>
      </button>
    )
  }

  const renderFullCommand = (cmd: NavigationCommand, index: number) => {
    const optionId = `full-option-${cmd.command}`
    return (
      <button
        key={cmd.command}
        id={optionId}
        type="button"
        role="option"
        aria-selected={index === selectedIndex}
        className={`w-full p-3 rounded-lg cursor-pointer transition-all duration-150 text-left ${
          index === selectedIndex
            ? "bg-white/10 border border-white/20 shadow-lg backdrop-blur-sm"
            : "hover:bg-white/5 hover:backdrop-blur-sm"
        }`}
        onClick={cmd.action}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-xs px-1.5 py-0.5 rounded shadow-sm"
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
              className="font-semibold text-base font-terminal"
              style={{ color: "oklch(0.4572 0.1828 10.2)" }}
            >
              {cmd.label}
            </div>
            <div className="text-sm mt-1" style={{ color: "oklch(0.9779 0.02 100.44)" }}>
              {cmd.description}
            </div>
          </div>
          {index === selectedIndex && (
            <div className="text-sm text-muted-foreground">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs backdrop-blur-sm">ENTER</kbd>
            </div>
          )}
        </div>
      </button>
    )
  }

  return (
    <>
      {/* Trigger Input */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
          <div className="flex items-center gap-2 md:gap-3 terminal-glassmorphic border border-primary/30 rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(184,83,9,0.3)] group-hover:scale-105 max-w-xs md:max-w-md">
            <Terminal className="w-4 h-4 md:w-5 md:h-5 text-primary opalescent-text-small" />
            <span
              className="text-foreground select-none transition-all duration-500 font-terminal text-sm md:text-base opalescent-text-small truncate"
              style={{ color: "oklch(0.85 0.05 100)" }}
            >
              {currentPrompt}
            </span>
            <div className="text-xs md:text-sm text-foreground/90 ml-auto flex-shrink-0">
              Press{" "}
              <kbd className="px-1 py-0.5 md:px-1.5 md:py-0.5 bg-primary text-primary-foreground rounded text-xs font-terminal border border-primary">
                {"/"}
              </kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Spotlight Mode */}
      {compact && isOpen && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-md px-4">
          <div
            className="absolute inset-0 -top-[100vh] -left-[100vw] -right-[100vw]"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative terminal-glassmorphic rounded-xl overflow-hidden shadow-2xl border border-primary/20">
            {/* Input */}
            <div className="p-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-mono text-xs px-1.5 py-0.5 rounded shadow-sm bg-primary text-primary-foreground">
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
                  placeholder="Navigate to..."
                  className="flex-1 bg-transparent border-none outline-none text-sm font-mono text-[rgba(0,255,205,1)]"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="compact-command-listbox"
                  aria-activedescendant={
                    filteredCommands[selectedIndex]
                      ? `compact-option-${filteredCommands[selectedIndex].command}`
                      : undefined
                  }
                />
                <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs text-muted-foreground">ESC</kbd>
              </div>
            </div>

            {/* Compact command list */}
            <div className="max-h-64 overflow-y-auto p-2">
              <div
                id="compact-command-listbox"
                className="space-y-1"
                role="listbox"
                aria-label="Navigation commands"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, index) => renderCompactCommand(cmd, index))
                ) : (
                  <div className="text-center py-4 text-sm text-muted-foreground">
                    No commands found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Modal Mode */}
      {!compact && isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-2xl max-h-[70vh] command-overlay-enter terminal-glassmorphic rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  <h1 className="text-2xl md:text-3xl font-bold opalescent-text-small text-foreground font-terminal">
                    M0na Machin3 Navigation
                  </h1>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">ESC</kbd>
                </button>
              </div>

              {/* Command Input */}
              <div className="p-4">
                <div className="relative">
                  <div className="flex items-center gap-2 text-base">
                    <span className="font-mono text-xs px-1.5 py-0.5 rounded shadow-sm bg-primary text-primary-foreground">
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
                      className="flex-1 bg-transparent border-none outline-none text-base font-mono text-[rgba(0,255,205,1)]"
                      role="combobox"
                      aria-expanded="true"
                      aria-controls="full-command-listbox"
                      aria-activedescendant={
                        filteredCommands[selectedIndex]
                          ? `full-option-${filteredCommands[selectedIndex].command}`
                          : undefined
                      }
                    />
                    <span className="command-prompt-blink text-base text-primary">|</span>
                  </div>
                </div>
              </div>

              {/* Commands List */}
              <div className="flex-1 px-4 pb-4 overflow-y-auto max-h-80">
                {bootSequence ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center">
                      <div className="text-lg font-mono text-primary mb-2">{bootText}</div>
                      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    </div>
                  </div>
                ) : (
                  <div
                    id="full-command-listbox"
                    className="space-y-2"
                    role="listbox"
                    aria-label="Navigation commands"
                  >
                    {filteredCommands.length > 0 ? (
                      filteredCommands.map((cmd, index) => renderFullCommand(cmd, index))
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-base mb-2 text-muted-foreground">No commands found</div>
                        <div className="text-sm text-muted-foreground">
                          Try typing "hom3bas3", "portfolio", "services", "readme", "privacy", or "terms"
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer Help */}
              <div className="p-4 border-t border-white/10">
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
