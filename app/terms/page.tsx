"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { ArrowLeft, FileText, Scale, Handshake, AlertTriangle, Gavel, Heart } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-card transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-12 h-12 text-primary" />
            <h1 className="font-title text-5xl md:text-6xl tracking-wide opalescent-text">Terms of Service</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear, fair terms that protect both you and M0na Machin3 as we build the future of AI companionship together
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              These terms reflect our values: transparency, fairness, and mutual respect. We're building AI companions
              that enhance human connection, and our terms are designed to protect that mission while ensuring a
              positive experience for everyone.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="text-foreground font-medium">
                By using M0na Machin3 services, you agree to these terms. If you don't agree with any part, please
                contact us to discuss your concerns.
              </p>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Handshake className="w-8 h-8 text-secondary" />
              Services We Provide
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Current Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom bot development for Discord and Twitch platforms</li>
                  <li>• Business support services including administrative assistance</li>
                  <li>• Design and branding services for digital and physical media</li>
                  <li>• Strategic clarity and system optimization consulting</li>
                  <li>• AI companion development and consultation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Future Services</h3>
                <p className="text-muted-foreground">
                  As we develop AI companion technology, new services may be added. You'll be notified of any changes to
                  terms that affect existing services.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Scale className="w-8 h-8 text-accent" />
              Your Rights and Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Your Rights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Receive services as described and agreed upon</li>
                  <li>• Privacy protection according to our Privacy Policy</li>
                  <li>• Clear communication about project timelines and costs</li>
                  <li>• Ownership of your content and intellectual property</li>
                  <li>• Fair resolution of any disputes or concerns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Your Responsibilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide accurate information for project requirements</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Use services ethically and legally</li>
                  <li>• Communicate clearly and professionally</li>
                  <li>• Pay agreed-upon fees in a timely manner</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-chart-4" />
              AI Companion Guidelines
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Ethical Use</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI companions are designed to support human wellbeing and growth. They should be used in ways that
                  enhance, not replace, human relationships and personal development.
                </p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• AI companions are not substitutes for professional medical or psychological care</li>
                  <li>• Interactions should be respectful and constructive</li>
                  <li>• AI companions are designed to encourage healthy human connections</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Data and Privacy</h3>
                <p className="text-muted-foreground">
                  Your interactions with AI companions are private and used solely to improve your experience. We never
                  share personal conversations or use them for purposes beyond service improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Gavel className="w-8 h-8 text-primary" />
              Limitation of Liability
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                While we strive for excellence in all our services, we provide them "as is" without warranties. Our
                liability is limited to the amount paid for services, except where prohibited by law.
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Important Note</h3>
                <p className="text-muted-foreground text-sm">
                  AI companions are not medical devices or professional counseling services. If you're experiencing
                  mental health concerns, please consult with qualified healthcare professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update these terms as our services evolve. Significant changes will be communicated clearly, and
              you'll have the opportunity to review them before they take effect.
            </p>
            <p className="text-muted-foreground">
              For questions about these terms or to discuss any concerns, please reach out through our contact form. We
              believe in open communication and fair resolution of any issues.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-8 border border-border text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Questions or Concerns?</h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. If anything in these terms is unclear or if you have suggestions for improvement,
              please don't hesitate to reach out.
            </p>
            <Link href="/services">
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <CommandNavigation />
    </main>
  )
}
