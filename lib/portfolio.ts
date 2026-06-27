const DEFAULT_PORTFOLIO_URL = "";

const rawPortfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL?.trim() || DEFAULT_PORTFOLIO_URL;

const normalizedPortfolioUrl = rawPortfolioUrl.replace(/\/$/, "");

export function hasExternalPortfolioUrl() {
  return normalizedPortfolioUrl.length > 0;
}

export function getPortfolioHref() {
  return normalizedPortfolioUrl || "/portfolio";
}

