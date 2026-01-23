/**
 * Resume Statistics Calculator
 * Combines skills and certifications data to generate portfolio stats
 */

import { calculateSkillStats, getDisplaySkills } from "./skills";
import { calculateCertStats, getDisplayCertifications } from "./certifications";

/**
 * Calculate all resume statistics
 * This is the single source of truth for resume numbers
 */
export function calculateResumeStats() {
  const skillStats = calculateSkillStats();
  const certStats = calculateCertStats();

  return {
    // Primary stats for display
    experience: {
      years: skillStats.totalYears,
      label: `${skillStats.totalYears}+ Years`,
      description: "Professional Experience",
    },

    projects: {
      total: skillStats.totalProjects,
      label: `${skillStats.totalProjects}+ Projects`,
      description: "Completed Works",
    },

    skills: {
      total: skillStats.totalSkills,
      label: `${skillStats.totalSkills}+ Skills`,
      description: "Technical & Creative",
    },

    certifications: {
      total: certStats.totalCertifications,
      label: `${certStats.totalCertifications} Certifications`,
      description: "Professional Credentials",
    },

    // Detailed breakdowns
    proficiency: {
      average: Math.round(skillStats.averageProficiency),
      label: `${Math.round(skillStats.averageProficiency)}% Proficiency`,
      description: "Average Skill Level",
    },

    // Category distributions
    categories: skillStats.byCategory,
    certCategories: certStats.byCategoryCount,

    // Validated skills (skills with certifications)
    validatedSkills: certStats.validatedSkills,
  };
}

/**
 * Get formatted resume data for display
 */
export function getResumeData() {
  const stats = calculateResumeStats();
  const topSkills = getDisplaySkills(10);
  const certs = getDisplayCertifications();

  return {
    stats,
    skills: topSkills,
    certifications: certs,

    // Quick stats for header display
    quickStats: [
      stats.experience,
      stats.projects,
      stats.skills,
    ],

    // Optional: Add certifications to quick stats if you have any
    quickStatsWithCerts: certStats.totalCertifications > 0
      ? [stats.experience, stats.projects, stats.skills, stats.certifications]
      : [stats.experience, stats.projects, stats.skills],
  };
}
