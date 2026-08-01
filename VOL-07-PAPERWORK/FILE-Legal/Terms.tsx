import CommandNavigation from "@apps/APPS-Components/navigation/command-navigation"
import { Button } from "@apps/APPS-Components/ui/button"
import { ArrowLeft, FileText, Scale, Handshake, AlertTriangle, Gavel, Heart } from "lucide-react"
import { Link } from "react-router-dom"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Button asChild variant="outline" className="bg-card/80 backdrop-blur-sm hover:bg-card">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-12 h-12 text-primary" />
            <h1 className="font-title text-5xl md:text-6xl tracking-wide opalescent-text">Terms of Service</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear, fair terms that protect both you and M0na Machin3 as we work together on design, strategy, and technology
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              These terms reflect our values: transparency, fairness, and mutual respect. We provide design, consulting,
              and AI architecture services that put people first, and our terms are designed to protect that mission
              while ensuring a positive experience for everyone.
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
                  <li>• Visual Branding & Design (from $2,500)</li>
                  <li>• Process Optimization & Roadmaps (from $1,800)</li>
                  <li>• AI Actuarium Audits (from $3,000)</li>
                  <li>• Website Design & Development (from $3,500)</li>
                  <li>• Accountable AI Architecture (from $4,000)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Evolving Services</h3>
                <p className="text-muted-foreground">
                  As our practice grows, new services and packages may be introduced. You will be notified of any changes
                  to terms that affect existing engagements.
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
              AI & Technology Services
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Responsible AI Practices</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI architecture and audit services are grounded in accountability, transparency, and
                  human-centered design. We help organizations build AI systems that are fair, explainable, and aligned
                  with their values.
                </p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• AI Actuarium Audits evaluate risk, bias, and compliance across your AI systems</li>
                  <li>• Accountable AI Architecture engagements produce documentation and governance frameworks</li>
                  <li>• Recommendations are advisory and do not constitute legal or regulatory compliance guarantees</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Data and Privacy</h3>
                <p className="text-muted-foreground">
                  Any data shared during consulting engagements is treated as confidential and used solely for the
                  purpose of delivering the agreed-upon services. We never share client information for purposes
                  beyond your engagement.
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
                  AI audit findings and architecture recommendations are advisory in nature. They do not constitute
                  legal advice or guarantee regulatory compliance. Consult qualified legal counsel for compliance matters.
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
            <Button asChild>
              <Link to="/work">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <CommandNavigation />
    </main>
  )
}
