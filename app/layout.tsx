import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"
import "./globals.css"

const anurati = localFont({
  src: "../public/fonts/Anurati-Regular.ttf",
  variable: "--font-anurati",
  display: "swap",
})

export const metadata: Metadata = {
  title: "M0na Machin3 - Bespoke AI Companions",
  description:
    "Creating meaningful digital relationships through bespoke AI companions. Experience genuine connection, emotional support, and growth with personalized digital entities.",
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
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="preload" href="/fonts/Anurati-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased ${anurati.variable}`} data-cache-key={cacheKey}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            {children}
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
