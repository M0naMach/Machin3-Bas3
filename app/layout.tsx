import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"

import "./globals.css"

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

// Using local Geist fonts from the geist package for Cloudflare compatibility
// Source Serif will use system serif fonts as fallback
const geist = GeistSans
const geistMono = GeistMono

// Create a variable for Source Serif fallback
const sourceSerif4 = {
  variable: "--font-source-serif",
  className: ""
}

export const metadata: Metadata = {
  title: "M0na Machin3 - Human connection, coded with care",
  description:
    "Creating meaningful digital experiences through thoughtful design and development. Where reflection becomes connection in the digital space.",
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
      <body
        className={`font-sans antialiased ${geist.variable} ${geistMono.variable} ${sourceSerif4.variable}`}
        data-cache-key={cacheKey}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            {children}
          </Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
