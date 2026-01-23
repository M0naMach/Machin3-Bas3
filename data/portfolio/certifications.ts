/**
 * Certifications Data
 * Tracks professional certifications and their associated skills
 */

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateEarned: string; // YYYY-MM format
  expiryDate?: string; // YYYY-MM format (if applicable)
  credentialUrl?: string;
  skills: string[]; // Skill names this certification validates
  category: "technical" | "design" | "business" | "specialty";
  displayInResume: boolean;
}

export const certifications: Certification[] = [
  // Add your certifications here
  // Example:
  // {
  //   id: "cert-1",
  //   name: "AWS Certified Solutions Architect",
  //   issuer: "Amazon Web Services",
  //   dateEarned: "2025-01",
  //   expiryDate: "2028-01",
  //   credentialUrl: "https://...",
  //   skills: ["System Design", "Cloud Architecture"],
  //   category: "technical",
  //   displayInResume: true,
  // },
];

/**
 * Calculate certification statistics
 */
export function calculateCertStats() {
  const activeCerts = certifications.filter(cert => {
    if (!cert.displayInResume) return false;
    if (!cert.expiryDate) return true; // No expiry = always active

    const now = new Date();
    const expiry = new Date(cert.expiryDate + "-01");
    return expiry > now;
  });

  return {
    totalCertifications: activeCerts.length,
    byCategoryCount: {
      technical: activeCerts.filter(c => c.category === "technical").length,
      design: activeCerts.filter(c => c.category === "design").length,
      business: activeCerts.filter(c => c.category === "business").length,
      specialty: activeCerts.filter(c => c.category === "specialty").length,
    },

    // Get all unique skills validated by certifications
    validatedSkills: [...new Set(activeCerts.flatMap(c => c.skills))],
  };
}

/**
 * Get certifications for display (sorted by date, newest first)
 */
export function getDisplayCertifications() {
  return certifications
    .filter(c => c.displayInResume)
    .sort((a, b) => {
      const dateA = new Date(a.dateEarned + "-01");
      const dateB = new Date(b.dateEarned + "-01");
      return dateB.getTime() - dateA.getTime();
    });
}

/**
 * Check if a certification is expired
 */
export function isCertificationActive(cert: Certification): boolean {
  if (!cert.expiryDate) return true;

  const now = new Date();
  const expiry = new Date(cert.expiryDate + "-01");
  return expiry > now;
}
