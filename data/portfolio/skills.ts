/**
 * Skills Data with Attributes
 * Each skill tracks proficiency, usage, and projects
 */

export interface Skill {
  name: string;
  category: "coding" | "design" | "systems" | "craft" | "tools";
  proficiency: number; // 0-1 scale (0.9 = 90% proficient)
  yearsUsed: number;
  projectsUsed: number;
  certifications?: string[]; // IDs of related certifications
  displayInResume: boolean;
}

export const skills: Skill[] = [
  // Coding Skills
  {
    name: "React",
    category: "coding",
    proficiency: 0.85,
    yearsUsed: 2,
    projectsUsed: 5,
    displayInResume: true,
  },
  {
    name: "TypeScript",
    category: "coding",
    proficiency: 0.80,
    yearsUsed: 2,
    projectsUsed: 5,
    displayInResume: true,
  },
  {
    name: "Next.js",
    category: "coding",
    proficiency: 0.75,
    yearsUsed: 1,
    projectsUsed: 3,
    displayInResume: true,
  },
  {
    name: "Python",
    category: "coding",
    proficiency: 0.70,
    yearsUsed: 2,
    projectsUsed: 4,
    displayInResume: true,
  },

  // Design Skills
  {
    name: "UI/UX Design",
    category: "design",
    proficiency: 0.90,
    yearsUsed: 3,
    projectsUsed: 10,
    displayInResume: true,
  },
  {
    name: "Digital Art",
    category: "design",
    proficiency: 0.95,
    yearsUsed: 5,
    projectsUsed: 50,
    displayInResume: true,
  },
  {
    name: "Adobe Creative Suite",
    category: "tools",
    proficiency: 0.85,
    yearsUsed: 4,
    projectsUsed: 40,
    displayInResume: true,
  },

  // Systems & Architecture
  {
    name: "System Design",
    category: "systems",
    proficiency: 0.90,
    yearsUsed: 3,
    projectsUsed: 8,
    displayInResume: true,
  },
  {
    name: "Notion Architecture",
    category: "systems",
    proficiency: 0.95,
    yearsUsed: 3,
    projectsUsed: 1, // The Neighborhood
    displayInResume: true,
  },
  {
    name: "Prompt Engineering",
    category: "systems",
    proficiency: 0.90,
    yearsUsed: 2,
    projectsUsed: 3,
    displayInResume: true,
  },

  // Craft
  {
    name: "Generative Art",
    category: "craft",
    proficiency: 0.85,
    yearsUsed: 2,
    projectsUsed: 15,
    displayInResume: true,
  },
  {
    name: "AI-Assisted Art",
    category: "craft",
    proficiency: 0.90,
    yearsUsed: 2,
    projectsUsed: 60,
    displayInResume: true,
  },

  // Additional Skills (Certified)
  {
    name: "AI/ML Fundamentals",
    category: "systems",
    proficiency: 0.85,
    yearsUsed: 2,
    projectsUsed: 5,
    displayInResume: true,
  },
  {
    name: "Data Analysis",
    category: "systems",
    proficiency: 0.75,
    yearsUsed: 2,
    projectsUsed: 4,
    displayInResume: true,
  },
  {
    name: "Workflow Automation",
    category: "systems",
    proficiency: 0.80,
    yearsUsed: 2,
    projectsUsed: 6,
    displayInResume: true,
  },
  {
    name: "Photoshop",
    category: "tools",
    proficiency: 0.85,
    yearsUsed: 4,
    projectsUsed: 35,
    displayInResume: true,
  },
  {
    name: "Custom GPT Development",
    category: "systems",
    proficiency: 0.85,
    yearsUsed: 1,
    projectsUsed: 3,
    displayInResume: true,
  },
  {
    name: "Agentic AI Systems",
    category: "systems",
    proficiency: 0.75,
    yearsUsed: 1,
    projectsUsed: 2,
    displayInResume: true,
  },
];

/**
 * Calculate aggregate statistics from skills
 */
export function calculateSkillStats() {
  const displaySkills = skills.filter(s => s.displayInResume);

  return {
    totalSkills: displaySkills.length,
    totalYears: Math.max(...displaySkills.map(s => s.yearsUsed)),
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
