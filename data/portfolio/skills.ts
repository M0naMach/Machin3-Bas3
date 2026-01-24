/**
 * Skills Data with Attributes
 * Each skill tracks proficiency, usage, and projects
 */

export interface Skill {
  name: string;
  category: "coding" | "design" | "systems" | "craft" | "tools";
  proficiency: number; // 0-1 scale (0.9 = 90% proficient)
  startDate: string; // YYYY-MM-DD format
  projectsUsed: number;
  certifications?: string[]; // IDs of related certifications
  displayInResume: boolean;
}

/**
 * Calculate years of experience from start date to now
 */
export function calculateYearsFromStart(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffInMs = now.getTime() - start.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const years = diffInDays / 365.25; // Account for leap years
  return Math.round(years * 10) / 10; // Round to 1 decimal place
}

/**
 * Get human-readable duration (e.g., "1.2 years", "3 months")
 */
export function getSkillDuration(startDate: string): string {
  const years = calculateYearsFromStart(startDate);

  if (years >= 1) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }

  const start = new Date(startDate);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());

  return `${months} month${months !== 1 ? 's' : ''}`;
}

export const skills: Skill[] = [
  // Coding Skills
  {
    name: "React",
    category: "coding",
    proficiency: 0.85,
    startDate: "2023-01-01", // Adjust to your actual start date
    projectsUsed: 5,
    displayInResume: true,
  },
  {
    name: "TypeScript",
    category: "coding",
    proficiency: 0.80,
    startDate: "2023-01-01", // Adjust to your actual start date
    projectsUsed: 5,
    displayInResume: true,
  },
  {
    name: "Next.js",
    category: "coding",
    proficiency: 0.75,
    startDate: "2024-01-01", // Adjust to your actual start date
    projectsUsed: 3,
    displayInResume: true,
  },
  {
    name: "Python",
    category: "coding",
    proficiency: 0.70,
    startDate: "2023-12-01", // Based on Python cert date
    projectsUsed: 4,
    displayInResume: true,
  },

  // Design Skills
  {
    name: "UI/UX Design",
    category: "design",
    proficiency: 0.90,
    startDate: "2022-01-01", // Adjust to your actual start date
    projectsUsed: 10,
    displayInResume: true,
  },
  {
    name: "Digital Art",
    category: "design",
    proficiency: 0.95,
    startDate: "2020-01-01", // Adjust to your actual start date
    projectsUsed: 50,
    displayInResume: true,
  },
  {
    name: "Adobe Creative Suite",
    category: "tools",
    proficiency: 0.85,
    startDate: "2021-01-01", // Adjust to your actual start date
    projectsUsed: 40,
    displayInResume: true,
  },

  // Systems & Architecture
  {
    name: "System Design",
    category: "systems",
    proficiency: 0.90,
    startDate: "2022-01-01", // Adjust to your actual start date
    projectsUsed: 8,
    displayInResume: true,
  },
  {
    name: "Notion Architecture",
    category: "systems",
    proficiency: 0.95,
    startDate: "2022-01-01", // Adjust based on when you started The Neighborhood
    projectsUsed: 1, // The Neighborhood
    displayInResume: true,
  },
  {
    name: "Prompt Engineering",
    category: "systems",
    proficiency: 0.90,
    startDate: "2024-01-01", // Adjust to your actual start date
    projectsUsed: 3,
    displayInResume: true,
  },

  // Craft
  {
    name: "Generative Art",
    category: "craft",
    proficiency: 0.85,
    startDate: "2024-11-01", // You said November 2024
    projectsUsed: 15,
    displayInResume: true,
  },
  {
    name: "AI-Assisted Art",
    category: "craft",
    proficiency: 0.90,
    startDate: "2024-01-01", // Adjust to your actual start date
    projectsUsed: 60,
    displayInResume: true,
  },

  // Additional Skills (Certified)
  {
    name: "AI/ML Fundamentals",
    category: "systems",
    proficiency: 0.85,
    startDate: "2024-01-01", // Adjust based on when you started learning AI
    projectsUsed: 5,
    displayInResume: true,
  },
  {
    name: "Data Analysis",
    category: "systems",
    proficiency: 0.75,
    startDate: "2024-01-01", // Adjust to your actual start date
    projectsUsed: 4,
    displayInResume: true,
  },
  {
    name: "Workflow Automation",
    category: "systems",
    proficiency: 0.80,
    startDate: "2024-01-01", // Adjust to your actual start date
    projectsUsed: 6,
    displayInResume: true,
  },
  {
    name: "Photoshop",
    category: "tools",
    proficiency: 0.85,
    startDate: "2021-01-01", // Adjust to your actual start date
    projectsUsed: 35,
    displayInResume: true,
  },
  {
    name: "Custom GPT Development",
    category: "systems",
    proficiency: 0.85,
    startDate: "2024-06-01", // Based on Custom GPT cert date
    projectsUsed: 3,
    displayInResume: true,
  },
  {
    name: "Agentic AI Systems",
    category: "systems",
    proficiency: 0.75,
    startDate: "2024-04-01", // Based on Agentic Automation cert date
    projectsUsed: 2,
    displayInResume: true,
  },
];

/**
 * Calculate aggregate statistics from skills
 */
export function calculateSkillStats() {
  const displaySkills = skills.filter(s => s.displayInResume);

  // Calculate years for each skill and get the maximum
  const yearsArray = displaySkills.map(s => calculateYearsFromStart(s.startDate));
  const maxYears = Math.max(...yearsArray);

  return {
    totalSkills: displaySkills.length,
    totalYears: Math.ceil(maxYears), // Round up for display (e.g., 2.1 years → 3 years)
    totalProjects: displaySkills.reduce((sum, s) => sum + s.projectsUsed, 0),
    averageProficiency: (
      displaySkills.reduce((sum, s) => sum + s.proficiency, 0) / displaySkills.length
    ) * 100, // Convert to percentage

    // Category breakdowns
    byCategory: {
      coding: displaySkills.filter(s => s.category === "coding").length,
      design: displaySkills.filter(s => s.category === "design").length,
      systems: displaySkills.filter(s => s.category === "systems").length,
      craft: displaySkills.filter(s => s.category === "craft").length,
      tools: displaySkills.filter(s => s.category === "tools").length,
    }
  };
}

/**
 * Get skills for display (sorted by proficiency)
 */
export function getDisplaySkills(limit?: number) {
  const displaySkills = skills
    .filter(s => s.displayInResume)
    .sort((a, b) => b.proficiency - a.proficiency);

  return limit ? displaySkills.slice(0, limit) : displaySkills;
}
