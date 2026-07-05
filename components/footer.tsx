"use client"

import { getPortfolioHref } from "@/lib/portfolio"
import { getActuariumHref } from "@/lib/actuarium"

export function Footer() {
  const portfolioHref = getPortfolioHref()
  const actuariumHref = getActuariumHref()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Spac3 */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Spac3</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/work" className="hover:text-secondary transition-colors cursor-pointer">
                  Hello World!
                </a>
              </li>
              <li>
                <a href="/vision" className="hover:text-secondary transition-colors cursor-pointer">
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/m0nalisasmil3d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Proj3cts */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Proj3cts</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href={portfolioHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href={actuariumHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  AI Actuarium
                </a>
              </li>
              <li>
                <a href="/work" className="hover:text-secondary transition-colors cursor-pointer">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Journ3y */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Journ3y</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/readme" className="hover:text-secondary transition-colors cursor-pointer">
                  Mine
                </a>
              </li>
              <li>
                <a href="/timeline" className="hover:text-secondary transition-colors cursor-pointer">
                  Ours
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/60 cursor-not-allowed">Yours</span>
              </li>
            </ul>
          </div>

          {/* Cont3xt */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Cont3xt</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-secondary transition-colors cursor-pointer">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-secondary transition-colors cursor-pointer">
                  Terms
                </a>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm mt-6">
              &copy; <span className="font-sans opalescent-text-small">M0na Machin3</span> 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
