/**
 * Site Configuration
 * Edit this file to update site-wide settings
 */

// 1. IMPORT YOUR DATA SOURCES
import { caseStudies } from "@/data/portfolio/caseStudies"; 
// Assuming you have a skills file based on our Resume discussion:
import { skills } from "@/data/portfolio/skills"; 

// 2. CALCULATE THE NUMBERS
const projectCount = caseStudies.filter(p => !p.tags.includes("Coming Soon")).length;
const techCount = skills.length; // Or use a unique count of tags from projects if you prefer

export const siteConfig = {
  // Brand Information
  brand: {
    name: "M0na Machin3",
    tagline: "M0na's Pr0ductivity M3tric",
    logo: "Sparkles", 
    available: true,
    availabilityMessage: "Status: Eagerly Idle. On Call for Craft, Code, & Collaboration.",
  },

  // ... [Navigation, Social, Categories remain the same] ...

  // Stats (WIRED UP)
  stats: [
    { 
      label: "Refined Projects", 
      value: projectCount.toString() // Automatically counts your real projects
    },
    { 
      label: "Core Technologies", 
      value: techCount.toString() // Automatically counts your skills
    },
    { 
      label: "Awards & Recog", 
      value: "3" // Manual for now (Certs? Upwork completions? Keep this one manual)
    },
    { 
      label: "Hours Crafted", 
      value: "∞" // The "Mastery" number. Or use your "550k Words" metric?
    },
  ],

  // ... [View Modes remain the same] ...
};

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
