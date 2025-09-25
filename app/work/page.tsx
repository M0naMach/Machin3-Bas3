"use client"

import type React from "react"

import { useState } from "react"
import { CommandNavigation } from "@/components/navigation/command-navigation"
import TangramServiceCards from "@/components/tangram-service-cards"

export default function WorkPage() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", project: "", message: "" })
        setTimeout(() => {
          setShowContactForm(false)
          setSubmitStatus("idle")
        }, 3000)
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">Work With Me</h1>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/30 mb-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Welcome to M0na Machin3</h2>
              <p className="text-lg italic text-muted-foreground">
                Where bots have personality, design has meaning, and support feels human.
              </p>
            </div>

            <div className="prose prose-lg mx-auto text-center">
              <p className="mb-6 text-muted-foreground">
                I'm <span className="font-semibold text-foreground">Bryanna</span>, the founder, developer, and creative
                behind the screen. I started M0na Machin3 to bridge the gap between functional tech and emotional
                connection. While I'm studying and evolving toward a future of AI companions that can support wellness
                and creativity, right now I'm here to help real people do real things—more efficiently, beautifully, and
                a little more magically.
              </p>
            </div>
          </div>

          <TangramServiceCards />

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/30 shadow-sm mt-12">
            <div className="text-center">
              <p className="mb-6 text-lg text-muted-foreground">
                Every project is shaped by both professional care and personal curiosity—because this isn't just a
                service, it's a vision in motion.
              </p>
              <p className="mb-8 text-muted-foreground">
                Whether you're here to delegate, design, or dream up your next automation—we're here to build it with
                you.
              </p>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-3 rounded-lg transition-colors shadow-sm bg-primary text-primary-foreground hover:opacity-90"
              >
                Let's Create Together
              </button>
            </div>
          </div>
        </div>
      </div>

      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card rounded-xl p-8 max-w-2xl w-full border border-border shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-foreground">Let's Create Together</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-muted-foreground hover:text-foreground text-2xl"
              >
                ×
              </button>
            </div>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✨</div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a project type</option>
                    <option value="Custom Bot Development">Custom Bot Development</option>
                    <option value="Business Support Services">Business Support Services</option>
                    <option value="Design & Branding">Design & Branding</option>
                    <option value="Strategic Clarity">Strategic Clarity</option>
                    <option value="Integration Support">Integration Support</option>
                    <option value="Other / Not Sure">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="What are you looking to create? What challenges are you facing? What's your vision?"
                  />
                </div>

                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>

                {submitStatus === "error" && (
                  <div className="text-center text-red-500 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}

      <CommandNavigation />
    </main>
  )
}
