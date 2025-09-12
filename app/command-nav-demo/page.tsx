import CommandNavigation from "@/components/navigation/command-navigation"

export default function CommandNavDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Demo Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">M0na Machin3 Navigation Demo</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This demonstrates the unique command-line style navigation you requested. Click the "Where to?" input at the
            bottom or press <kbd className="px-2 py-1 bg-muted rounded text-sm">/</kbd> to open the command interface.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="font-semibold text-card-foreground mb-2">Our Journey</h3>
              <p className="text-sm text-muted-foreground">
                Explore the M0na Machin3 timeline and philosophy behind AI companionship.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="font-semibold text-card-foreground mb-2">Work With Me</h3>
              <p className="text-sm text-muted-foreground">
                Discover AI companion services and collaboration opportunities.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="font-semibold text-card-foreground mb-2">Manifesto</h3>
              <p className="text-sm text-muted-foreground">
                Read about AI-human relationships and our mission for better digital connections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Command Navigation Component */}
      <CommandNavigation />
    </div>
  )
}
