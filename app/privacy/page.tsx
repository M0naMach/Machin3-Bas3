"use client"

import { CommandNavigation } from "@/components/navigation/command-navigation"
import { ArrowLeft, Shield, Eye, Lock, Users, Database, Bell } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="font-title text-5xl md:text-6xl tracking-wide opalescent-text">Privacy Policy</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy and data security are fundamental to everything we build at M0na Machin3
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Eye className="w-8 h-8 text-primary" />
              Our Privacy Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At M0na Machin3, we believe that meaningful AI companionship requires trust, and trust requires
              transparency. We are committed to protecting your privacy while building AI that truly understands and
              grows with you.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="text-foreground font-medium">
                We will never sell your personal data. Your conversations and interactions with our AI companions are
                private and used solely to improve your experience.
              </p>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Database className="w-8 h-8 text-secondary" />
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Information You Provide</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Contact information when you reach out to us</li>
                  <li>• Project details and requirements for collaboration</li>
                  <li>• Feedback and suggestions you share with us</li>
                  <li>• Communications through our contact forms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Automatically Collected Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Basic website analytics (page views, time spent, general location)</li>
                  <li>• Technical information (browser type, device type, IP address)</li>
                  <li>• Usage patterns to improve our services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">AI Interaction Data</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Conversations with AI companions (stored securely and privately)</li>
                  <li>• Preferences and customization settings</li>
                  <li>• Usage patterns to improve AI responses and personality</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Lock className="w-8 h-8 text-accent" />
              How We Protect Your Data
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Encryption</h3>
                <p className="text-muted-foreground">
                  All data is encrypted in transit and at rest using industry-standard encryption protocols.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Access Control</h3>
                <p className="text-muted-foreground">
                  Strict access controls ensure only authorized personnel can access your data when necessary.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Data Minimization</h3>
                <p className="text-muted-foreground">
                  We collect only the data necessary to provide and improve our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Regular Audits</h3>
                <p className="text-muted-foreground">
                  Regular security audits and updates to maintain the highest protection standards.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Users className="w-8 h-8 text-chart-4" />
              Your Rights
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold text-foreground">Access Your Data</h3>
                <p className="text-muted-foreground">Request a copy of all personal data we have about you</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-lg font-semibold text-foreground">Correct Your Data</h3>
                <p className="text-muted-foreground">Update or correct any inaccurate information</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold text-foreground">Delete Your Data</h3>
                <p className="text-muted-foreground">Request deletion of your personal data (with some exceptions)</p>
              </div>
              <div className="border-l-4 border-chart-4 pl-4">
                <h3 className="text-lg font-semibold text-foreground">Data Portability</h3>
                <p className="text-muted-foreground">Export your data in a machine-readable format</p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <Bell className="w-8 h-8 text-primary" />
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to
              reach out. We're committed to transparency and will respond to all privacy-related inquiries promptly.
            </p>
            <Link href="/services">
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Contact Us About Privacy
              </button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 border border-border text-center">
            <p className="text-muted-foreground">
              This privacy policy may be updated from time to time. We will notify you of any significant changes and
              always maintain the same high standards of data protection.
            </p>
          </div>
        </div>
      </div>

      <CommandNavigation />
    </main>
  )
}
