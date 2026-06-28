import { redirect } from "next/navigation"
import { getActuariumHref } from "@/lib/actuarium"

export default function ActuariumPage() {
  const href = getActuariumHref()
  if (href === "/actuarium") {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Actuarium is not configured.</p>
      </main>
    )
  }
  redirect(href)
}
