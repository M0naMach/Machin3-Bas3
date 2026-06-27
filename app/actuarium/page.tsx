"use client"

import { useEffect } from "react"
import { getActuariumHref } from "@/lib/actuarium"

export default function ActuariumPage() {
  const actuariumHref = getActuariumHref()

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace(actuariumHref)
    }
  }, [actuariumHref])

  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Redirecting to AI Audit Actuarium&hellip;
      </p>
    </div>
  )
}
