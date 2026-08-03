import { useEffect } from "react"
import { getActuariumHref } from "@lib/LIBR-Utils/actuarium"

export default function ActuariumPage() {
  const href = getActuariumHref()

  useEffect(() => {
    window.location.href = href
  }, [href])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Redirecting to Actuarium...</p>
    </main>
  )
}
