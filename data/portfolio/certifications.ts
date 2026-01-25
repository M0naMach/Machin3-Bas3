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
  // SPECIALIZATIONS
  {
    id: "spec-google-prompting",
    name: "Google Prompting Essentials",
    issuer: "Google / Coursera",
    dateEarned: "2025-11",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/CO8H88RZSFA1",
    skills: ["Prompt Engineering", "AI/ML Fundamentals"],
    category: "specialty",
    displayInResume: true,
  },
  {
    id: "spec-google-ai",
    name: "Google AI Essentials",
    issuer: "Google / Coursera",
    dateEarned: "2025-11",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/AQHZQDXFL3CF",
    skills: ["AI/ML Fundamentals", "Prompt Engineering"],
    category: "specialty",
    displayInResume: true,
  },

  // AI & PROMPT ENGINEERING CERTIFICATIONS
  {
    id: "cert-ai-business",
    name: "AI, Business & the Future of Work",
    issuer: "Coursera",
    dateEarned: "2025-10",
    skills: ["AI/ML Fundamentals", "Workflow Automation"],
    category: "business",
    displayInResume: true,
  },
  {
    id: "cert-prompts-everyday",
    name: "Design Prompts for Everyday Work Tasks",
    issuer: "Coursera",
    dateEarned: "2025-09",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/FSZTRJ4NEA3Z",
    skills: ["Prompt Engineering", "Workflow Automation"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-creative-partner",
    name: "Use AI as a Creative or Expert Partner",
    issuer: "Coursera",
    dateEarned: "2025-09",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/ZQ8IU05RDBPX",
    skills: ["Prompt Engineering", "AI-Assisted Art"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-data-analysis",
    name: "Speed Up Data Analysis and Presentation Building",
    issuer: "Coursera",
    dateEarned: "2025-09",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/839LM20WTKHN",
    skills: ["Data Analysis", "AI/ML Fundamentals"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-prompts-pro",
    name: "Start Writing Prompts like a Pro",
    issuer: "Coursera",
    dateEarned: "2025-08",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/6N00R9FQONDP",
    skills: ["Prompt Engineering"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-intro-ai",
    name: "Introduction to AI",
    issuer: "Coursera",
    dateEarned: "2025-08",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/24LWK4GVZ7B6",
    skills: ["AI/ML Fundamentals"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-productivity-ai",
    name: "Maximize Productivity With AI Tools",
    issuer: "Coursera",
    dateEarned: "2025-08",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/XVV32ZL4BY6Z",
    skills: ["Workflow Automation", "AI/ML Fundamentals"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-art-prompting",
    name: "Discover the Art of Prompting",
    issuer: "Coursera",
    dateEarned: "2025-07",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/X2SPOGO3P6OH",
    skills: ["Prompt Engineering"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-responsible-ai",
    name: "Use AI Responsibly",
    issuer: "Coursera",
    dateEarned: "2025-07",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/FAHZ1JI2ZR0T",
    skills: ["AI/ML Fundamentals"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-ai-curve",
    name: "Stay Ahead of the AI Curve",
    issuer: "Coursera",
    dateEarned: "2025-08",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/9KXN4N2HFYSU",
    skills: ["AI/ML Fundamentals"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-custom-gpts",
    name: "OpenAI GPTs: Creating Your Own Custom AI Assistants",
    issuer: "Coursera",
    dateEarned: "2025-06",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/QIZHPLFTBOCL",
    skills: ["Custom GPT Development", "Prompt Engineering"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-photoshop-ai",
    name: "Adobe Photoshop for Beginners: Generative AI Images",
    issuer: "Coursera",
    dateEarned: "2024-06",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/5W9Q5KF90T72",
    skills: ["Photoshop", "AI-Assisted Art", "Generative Art"],
    category: "design",
    displayInResume: true,
  },
  {
    id: "cert-ai-creativity",
    name: "AI Foundations for Creativity",
    issuer: "Coursera",
    dateEarned: "2024-05",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/7RFUGK8VAXE3",
    skills: ["AI-Assisted Art", "Generative Art", "AI/ML Fundamentals"],
    category: "design",
    displayInResume: true,
  },
  {
    id: "cert-agentic-automation",
    name: "Introduction to Agentic Automation",
    issuer: "Coursera",
    dateEarned: "2024-04",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/DNHDPCD0397J",
    skills: ["Agentic AI Systems", "Workflow Automation"],
    category: "technical",
    displayInResume: true,
  },
  {
    id: "cert-python",
    name: "Crash Course on Python",
    issuer: "Coursera",
    dateEarned: "2025-12",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/TN86H8J6K9S7",
    skills: ["Python"],
    category: "technical",
    displayInResume: true,
  },

  // NOTION ACADEMY CERTIFICATIONS
  {
    id: "cert-notion-essentials",
    name: "Notion Academy: Essentials",
    issuer: "Notion",
    dateEarned: "2025-03",
    credentialUrl: "http://verify.skilljar.com/c/9n6euucf8aff",
    skills: ["Notion Architecture"],
    category: "specialty",
    displayInResume: true,
  },
  {
    id: "cert-notion-workflows",
    name: "Notion Academy: Workflows",
    issuer: "Notion",
    dateEarned: "2025-04",
    credentialUrl: "http://verify.skilljar.com/c/atadt29zv6sg",
    skills: ["Notion Architecture", "Workflow Automation"],
    category: "specialty",
    displayInResume: true,
  },
  {
    id: "cert-notion-advanced",
    name: "Notion Academy: Advanced",
    issuer: "Notion",
    dateEarned: "2024-05",
    credentialUrl: "http://verify.skilljar.com/c/54pvqrwpabyp",
    skills: ["Notion Architecture", "System Design"],
    category: "specialty",
    displayInResume: true,
  },
  {
    id: "intro-to-agentic-automation",
    name: "Introduction to agentic automation",
    issuer: "UiPath",
    dateEarned: "2025-12",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/DNHDPCD0397J",
    skills: ["Robotic Process Automation", "System Design", "Accountability", "Agentic systems",
"Responsible AI", "Business Process Automation", "Decision Making","Data Security", "AI Security", "AI Enablement", "Automation"
],
    category: "specialty",
    displayInResume: true,
  },
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
