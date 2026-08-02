import { redirect } from "next/navigation"
import { getPortfolioHref } from "@/lib/portfolio"

export default function PortfolioPage() {
  const portfolioHref = getPortfolioHref()
  redirect(
    portfolioHref === "/portfolio"
      ? "https://p0rtf0li0-spac3.machin3.workers.dev"
      : portfolioHref,
  )
}
