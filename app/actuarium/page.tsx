import { redirect } from "next/navigation"
import { getActuariumHref } from "@/lib/actuarium"

export default function ActuariumPage() {
  const href = getActuariumHref()
  redirect(href)
}
