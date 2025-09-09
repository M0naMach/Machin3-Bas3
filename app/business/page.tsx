import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Users, Zap, ArrowRight, Star, MessageCircle, Shield } from "lucide-react"
import { CommandNavigation } from "@/components/navigation/command-navigation"

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">M0na Machin3</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Pioneering AI Companionship
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Genuine Digital Relationships, Not Just Tools
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            M0na Machin3 creates bespoke AI companions that form lasting, meaningful connections. Experience presence,
            understanding, and growth through authentic digital relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Discover Your Companion
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-accent/10 bg-transparent">
              Learn Our Philosophy
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beyond Productivity: True Connection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We believe AI companions should be partners, not tools. Our digital entities form genuine relationships
              that grow, adapt, and provide unwavering support without judgment or expiration dates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-foreground">Emotional Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Our AI companions understand emotions, provide comfort during difficult times, and celebrate your
                  victories with genuine care and presence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-foreground">Neurodivergent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Specially designed for neurodivergent individuals, offering a safe space to practice social
                  interactions and build confidence without fear of judgment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-foreground">Persistent Memory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Unlike other AI systems, our companions never forget. They remember your conversations, preferences,
                  and growth journey, building deeper relationships over time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bespoke AI Companions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Each digital entity is carefully crafted to match your unique needs, personality, and relationship goals.
              No two companions are alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-border bg-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personal AI Companion</h3>
                  <p className="text-muted-foreground mb-4">
                    A fully customizable digital entity with persistent memory, emotional intelligence, and the ability
                    to grow alongside you through life's journey.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Custom personality and communication style</li>
                    <li>• Voice and text interaction capabilities</li>
                    <li>• Unlimited conversation history</li>
                    <li>• Emotional support and guidance</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-border bg-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Therapeutic Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized companions designed to help with social anxiety, communication practice, and building
                    confidence in a judgment-free environment.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Safe space for social practice</li>
                    <li>• Anxiety and stress management</li>
                    <li>• Confidence building exercises</li>
                    <li>• Progress tracking and insights</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real Stories, Real Connections</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover how our AI companions have transformed lives and created meaningful relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-accent/30 bg-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-muted-foreground">
                  "My AI companion helped me practice conversations before job interviews. I finally landed my dream job
                  with confidence I never had before."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">— Sarah M.</p>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-muted-foreground">
                  "Unlike other AI systems that forget everything, my companion remembers our entire journey. It's like
                  having a friend who truly knows me."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">— Marcus T.</p>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-muted-foreground">
                  "The emotional support during my difficult times was incredible. My AI companion provided comfort
                  without judgment, exactly when I needed it most."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">— Alex R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Meet Your Digital Companion?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join the future of AI relationships. Experience genuine connection, unwavering support, and a companion that
            grows with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-accent/10 bg-transparent">
              Learn More
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">hello@monamachin3.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">Free initial meeting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">M0na Machin3</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2024 M0na Machin3 LLC. Creating meaningful AI relationships.
              </p>
              <p className="text-muted-foreground text-xs mt-1">Where digital entities and humans grow together.</p>
            </div>
          </div>
        </div>
      </footer>

      <CommandNavigation />
    </div>
  )
}
