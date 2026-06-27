const DEFAULT_ACTUARIUM_URL = "https://ai-audit-actuarium.pages.dev";

const rawActuariumUrl = process.env.NEXT_PUBLIC_ACTUARIUM_URL?.trim() || DEFAULT_ACTUARIUM_URL;

const normalizedActuariumUrl = rawActuariumUrl.replace(/\/$/, "");

export function getActuariumHref() {
  return normalizedActuariumUrl || "/actuarium";
}
