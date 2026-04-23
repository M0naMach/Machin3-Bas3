const DEFAULT_PORTFOLIO_URL = "https://p0rtf0li0-spac3.m0nalisa.workers.dev";

const rawPortfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL?.trim() || DEFAULT_PORTFOLIO_URL;

const normalizedPortfolioUrl = rawPortfolioUrl.replace(/\/$/, "");

export function hasExternalPortfolioUrl() {
  return normalizedPortfolioUrl.length > 0;
}

export function getPortfolioHref() {
  return normalizedPortfolioUrl || "/portfolio";
}

