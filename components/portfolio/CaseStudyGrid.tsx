import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { CaseStudyCard, CaseStudy } from "./CaseStudyCard";

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  onCardClick?: (caseStudy: CaseStudy) => void;
  columns?: number;
  variant?: "masonry" | "grid";
}

export function CaseStudyGrid({
  caseStudies,
  onCardClick,
  columns = 3,
  variant = "masonry",
}: CaseStudyGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (variant === "masonry") {
    return (
      <motion.div variants={container} initial="hidden" animate="show">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: columns }}
        >
          <Masonry gutter="1.5rem">
            {caseStudies.map((caseStudy) => (
              <motion.div key={caseStudy.id} variants={item}>
                <CaseStudyCard
                  caseStudy={caseStudy}
                  onClick={() => onCardClick?.(caseStudy)}
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`grid gap-6 ${
        columns === 1
          ? "grid-cols-1"
          : columns === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {caseStudies.map((caseStudy) => (
        <motion.div key={caseStudy.id} variants={item}>
          <CaseStudyCard
            caseStudy={caseStudy}
            onClick={() => onCardClick?.(caseStudy)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
