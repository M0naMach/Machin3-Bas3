import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Poiret_One } from "next/font/google"
// import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// const aspal = localFont({
//   src: "./fonts/Aspal.ttf",
//   variable: "--font-aspal",
//   display: "swap",
// })

const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret",
  display: "swap",
})

// const anurati = localFont({
//   src: "./fonts/Anurati-Regular.ttf",
//   variable: "--font-anurati",
//   display: "swap",
// })

export const metadata: Metadata = {
  title: "M0na Machin3 - Bespoke AI Companions",
  description:
    "Creating meaningful digital relationships through bespoke AI companions. Experience genuine connection, emotional support, and growth with personalized digital entities.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poiretOne.variable} ${GeistMono.variable}`}>
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
