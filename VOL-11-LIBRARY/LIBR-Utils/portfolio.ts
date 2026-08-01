const rawPortfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL?.trim() || "";

const normalizedPortfolioUrl = rawPortfolioUrl.replace(/\/$/, "");

export function hasExternalPortfolioUrl() {
  return normalizedPortfolioUrl.length > 0;
}

export function getPortfolioHref() {
  return normalizedPortfolioUrl || "/portfolio";
}

