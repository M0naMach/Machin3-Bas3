import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"

import "./globals.css"
import { Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
V0_Font_Geist({ weight: ["100","200","300","400","500","600","700","800","900"] })
V0_Font_Geist_Mono({ weight: ["100","200","300","400","500","600","700","800","900"] })
V0_Font_Source_Serif_4({ weight: ["200","300","400","500","600","700","800","900"] })

// Custom fonts are defined in globals.css and loaded via @font-face
// No need to import Google Fonts since we're using custom fonts

export const metadata: Metadata = {
  title: "M0na Machin3 - Human connection, coded with care",
  description:
    "Creating meaningful digital experiences through thoughtful design and development. Where reflection becomes connection in the digital space.",
  generator: "v0.app",
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cacheKey = Date.now()

  return (
    <html lang="en">
      <body className="font-sans antialiased" data-cache-key={cacheKey}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            {children}
          </Suspense>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
