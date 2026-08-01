import CommandNavigation from "@apps/APPS-Components/navigation/command-navigation"
import { Button } from "@apps/APPS-Components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function VisionPage() {
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

      {/* Construction Sign */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8 flex justify-center">
            <img
              src="/PUBL-Images/Under_Machin3_Construction03.png"
              alt="Under Machin3 Construction"
              width={600}
              height={338}
              className="rounded-2xl shadow-2xl border border-border"
            />
          </div>

          <h1 className="font-title text-5xl md:text-7xl mb-4 tracking-wide opalescent-text">
            The Vision
          </h1>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              This page is being remodeled to better reflect where we're heading.
              Check back soon for the updated vision.
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="font-medium">
                <Link to="/">
                  Return Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CommandNavigation />
    </main>
  )
}
