import CommandNavigation from "@/components/navigation/command-navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle, Route, MessageCircle, Clock, Sparkles } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Button asChild variant="outline" className="bg-card/80 backdrop-blur-sm hover:bg-card">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-12 h-12 text-primary" />
            <h1 className="font-title text-5xl md:text-6xl tracking-wide opalescent-text">Support</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answers, process details, and ways to connect with M0na Machin3
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* FAQ Section */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">What services does M0na Machin3 offer?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer Visual Branding & Design, Process Optimization & Roadmaps, AI Actuarium Audits,
                  Website Design & Development, and Accountable AI Architecture. Each engagement is shaped
                  around your specific needs and goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Who is this for?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work with founders, small teams, and organizations who want technology that reflects their
                  values. If you care about thoughtful design, ethical AI, and building something that lasts,
                  we should talk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Do you take on ongoing retainer work?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We primarily work on a project basis, but we do offer ongoing advisory and support
                  arrangements for clients who need continued guidance on AI strategy, branding, or
                  process optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">What does an AI Actuarium Audit include?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  An audit examines your current or planned AI systems for accountability, bias, transparency,
                  and alignment with your stated values. You receive a clear report with actionable
                  recommendations, not just a checklist.
                </p>
              </div>
            </div>
          </div>

          {/* Project Process */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Route className="w-8 h-8 text-secondary" />
              How We Work Together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every project follows a clear, human-centered process. No surprises, no black boxes.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold text-foreground">1. Discovery Call</h3>
                <p className="text-muted-foreground">
                  We start with a conversation. You share what you are building, what challenges you face,
                  and what success looks like. We listen, ask questions, and determine if there is a good fit.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-lg font-semibold text-foreground">2. Scoping & Proposal</h3>
                <p className="text-muted-foreground">
                  Based on our conversation, we define the scope, timeline, and investment. You receive a
                  clear proposal so you know exactly what to expect before any work begins.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold text-foreground">3. Deliverables & Iteration</h3>
                <p className="text-muted-foreground">
                  We work in focused cycles, sharing progress along the way. You are never left wondering
                  what is happening. Feedback is built into the process, not bolted on at the end.
                </p>
              </div>
              <div className="border-l-4 border-chart-4 pl-4">
                <h3 className="text-lg font-semibold text-foreground">4. Review & Handoff</h3>
                <p className="text-muted-foreground">
                  We walk through everything together, ensure you are confident in the deliverables, and
                  provide documentation so your team can carry the work forward independently.
                </p>
              </div>
            </div>
          </div>

          {/* Response Times & Communication */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Clock className="w-8 h-8 text-accent" />
              Response Times & Communication
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Initial Inquiries</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We respond to new inquiries within 1-2 business days. If your request requires research
                  or a more detailed reply, we will let you know and follow up within the week.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Active Projects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  During an active engagement, you can expect regular check-ins and responses within
                  one business day. We agree on a communication cadence at the start of each project
                  so expectations are clear on both sides.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Preferred Channels</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We communicate primarily through email and scheduled calls. For active projects, we
                  can also work within shared project management tools if your team prefers that workflow.
                </p>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 mt-6">
              <p className="text-foreground font-medium">
                We believe clear communication is the foundation of good work. If something is unclear
                at any point, just ask. There are no bad questions here.
              </p>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-chart-4" />
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Visual Branding & Design</h3>
                <p className="text-muted-foreground">
                  Identity systems, visual language, and design that communicates who you are at a glance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Process Optimization & Roadmaps</h3>
                <p className="text-muted-foreground">
                  Clarity for your workflows, team structures, and strategic direction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">AI Actuarium Audits</h3>
                <p className="text-muted-foreground">
                  Accountability-first reviews of your AI systems, policies, and practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Website Design & Development</h3>
                <p className="text-muted-foreground">
                  Purposeful, performant websites built with care and modern tooling.
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Accountable AI Architecture</h3>
                <p className="text-muted-foreground">
                  Designing AI systems that are transparent, explainable, and aligned with human values.
                </p>
              </div>
            </div>
          </div>

          {/* Contact / Get in Touch */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-primary" />
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ready to start a conversation? Whether you have a specific project in mind or just want
              to explore what is possible, we would love to hear from you. The first step is always a
              conversation, not a commitment.
            </p>
            <Button asChild>
              <Link href="/work">
                Start a Conversation
              </Link>
            </Button>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 border border-border text-center">
            <p className="text-muted-foreground">
              This page is kept up to date as our services and processes evolve.
              If you have a question not covered here, do not hesitate to reach out.
            </p>
          </div>
        </div>
      </div>

      <CommandNavigation />
    </main>
  )
}
