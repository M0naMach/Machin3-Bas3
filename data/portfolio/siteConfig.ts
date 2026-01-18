/**
 * Site Configuration
 * Edit this file to update site-wide settings
 */

export const siteConfig = {
  // Brand Information
  brand: {
    name: "Mona Machin3",
    tagline: "System Terminal",
    logo: "Sparkles", // Lucide icon name
    available: true,
    availabilityMessage: "Available for creative collaborations.",
  },

  // Navigation
  navigation: [
    { label: "Experiments", href: "#experiments" },
    { label: "Extensions", href: "#extensions" },
    { label: "Process", href: "#process" },
    { label: "Resume", href: "#resume" },
  ],

  // Social Links
  social: [
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],

  // Project Categories
  categories: [
    { id: "all", label: "All" },
    { id: "coding", label: "Coding" },
    { id: "craft", label: "Craft" },
    { id: "compositions", label: "Compositions" },
  ],

  // Stats
  stats: [
    { label: "Refined Projects", value: "12+" },
    { label: "Core Technologies", value: "18+" },
    { label: "Awards & Recog", value: "04" },
    { label: "Hours Crafted", value: "2.4k" },
  ],

  // View Modes
  viewModes: [
    { id: "bento", icon: "LayoutGrid", label: "Bento" },
    { id: "grid", icon: "Grid3x3", label: "Grid" },
    { id: "masonry", icon: "Layers", label: "Masonry" },
    { id: "justified", icon: "Maximize", label: "Justified" },
    { id: "carousel", icon: "ChevronRight", label: "Carousel" },
    { id: "timeline", icon: "Clock", label: "Timeline" },
  ],
};