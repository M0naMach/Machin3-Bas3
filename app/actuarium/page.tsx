"use client"

import { useEffect } from "react"

export default function ActuariumPage() {
  useEffect(() => {
    window.location.replace("https://machin3.space/actuarium")
  }, [])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Redirecting to Actuarium...</p>
    </main>
  )
}
