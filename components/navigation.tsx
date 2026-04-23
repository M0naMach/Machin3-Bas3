import { getPortfolioHref } from "@/lib/portfolio";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: getPortfolioHref() },
  { name: "Our Mission", href: "/mission" }, // fixed href for Our Mission
  { name: "Timeline", href: "/timeline" },
  { name: "Work With Me", href: "/work" },
  { name: "First Contact", href: "/contact" }, // fixed href for First Contact
]
