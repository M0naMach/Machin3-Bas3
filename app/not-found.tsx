import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background font-sans flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted to-card animate-pulse opacity-90"
        style={{ animationDuration: "8s" }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* 🎨 CUSTOMIZABLE: Add your own image here! 
            Replace the commented section below with your custom artwork.
            Supported formats: PNG, JPG, SVG, GIF, WebP
            Example:
            <div className="mb-8 flex justify-center">
              <Image 
                src="/your-custom-404-image.png" 
                alt="404 Error" 
                width={400} 
                height={400}
                className="w-full max-w-md"
              />
            </div>
        */}
        
        <div className="mb-8">
          {/* 🎨 CUSTOMIZABLE: Change the heading text and styling */}
          <h1 className="font-title text-7xl md:text-[10rem] lg:text-[12rem] mb-6 tracking-wide opalescent-text leading-none">
            404
          </h1>
          {/* 🎨 CUSTOMIZABLE: Change the subtitle */}
          <p className="text-lg md:text-xl font-light text-foreground/90 mb-4">
            Page Not Found
          </p>
        </div>

        {/* 🎨 CUSTOMIZABLE: Change the description text */}
        <p className="text-base md:text-lg font-light leading-relaxed text-foreground/80 mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* 🎨 CUSTOMIZABLE: Change button text, links, and styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-lg font-medium text-lg
                       hover:opacity-90 transform hover:translate-y-[-2px]
                       transition-all duration-300 ease-out will-change-transform
                       relative border-2 cursor-pointer
                       terminal-glassmorphic border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(184,83,9,0.3)]"
            style={{
              backgroundColor: "oklch(0.1987 0.0246 194.77)",
              color: "oklch(0.9407 0.0227 172.37)",
              borderImage:
                "linear-gradient(45deg, rgba(255,215,0,0.4), rgba(255,255,255,0.3), rgba(255,215,0,0.4)) 1",
            }}
          >
            <span className="relative z-10 dark:text-[color:oklch(0.8897_0.1937_172.37)]">
              Return Home
            </span>
          </Link>

          <Link
            href="/work"
            className="px-8 py-4 rounded-lg font-medium text-lg
                       hover:opacity-90 transform hover:translate-y-[-2px]
                       transition-all duration-300 ease-out will-change-transform
                       relative border-2 cursor-pointer
                       terminal-glassmorphic border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(184,83,9,0.3)]"
            style={{
              backgroundColor: "oklch(0.1987 0.0246 194.77)",
              color: "oklch(0.9407 0.0227 45.59)",
              borderImage:
                "linear-gradient(45deg, rgba(0,255,255,0.4), rgba(255,255,255,0.3), rgba(0,255,255,0.4)) 1",
            }}
          >
            <span className="relative z-10">Explore Work</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
