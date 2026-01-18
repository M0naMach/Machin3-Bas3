import { motion } from "motion/react";
import { CaseStudy } from "./CaseStudyCard";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Terminal, Calendar } from "lucide-react";

interface CaseStudyBentoGridProps {
  caseStudies: CaseStudy[];
  onCardClick?: (caseStudy: CaseStudy) => void;
}

export function CaseStudyBentoGrid({ caseStudies, onCardClick }: CaseStudyBentoGridProps) {
  const bentoPattern = [
    "md:col-span-2 md:row-span-2", // Large
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-2", // Tall
    "md:col-span-2 md:row-span-1", // Wide
    "md:col-span-1 md:row-span-1", // Small
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "coding":
        return "bg-emerald-500 text-emerald-950";
      case "artwork":
        return "bg-primary text-primary-foreground";
      case "design":
        return "bg-cyan-500 text-white";
      case "mixed":
        return "bg-amber-500 text-white";
      default:
        return "bg-emerald-900 text-emerald-400";
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        show: { transition: { staggerChildren: 0.05 } }
      }}
      className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-8"
    >
      {caseStudies.map((caseStudy, index) => {
        const layoutClass = bentoPattern[index % bentoPattern.length];
        const isLarge = layoutClass.includes("col-span-2") && layoutClass.includes("row-span-2");
        const isTall = layoutClass.includes("row-span-2") && !isLarge;
        const isWide = layoutClass.includes("col-span-2") && !isLarge;

        return (
          <motion.div
            key={caseStudy.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            whileHover={{ y: -8 }}
            className={`${layoutClass} cursor-pointer group`}
            onClick={() => onCardClick?.(caseStudy)}
          >
            <div className="relative w-full h-full bg-emerald-950/20 border border-emerald-500/20 rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.02)] hover:shadow-[0_0_60px_rgba(16,185,129,0.1)] transition-all duration-700 backdrop-blur-sm">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071919] via-[#071919]/40 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                {/* Top badges */}
                <div className="absolute top-8 left-8 right-8 flex items-start justify-between z-20">
                  <Badge className={`${getCategoryColor(caseStudy.category)} text-[9px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-xl border-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]`}>
                    {caseStudy.category}
                  </Badge>
                  <div className="flex gap-2">
                    {caseStudy.link && (
                      <div className="bg-emerald-950/80 backdrop-blur-xl p-2.5 rounded-xl border border-emerald-500/20 text-emerald-400 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-4">
                  <h3 className={`text-emerald-50 font-extralight tracking-tight leading-tight group-hover:text-emerald-400 transition-colors duration-500 ${isLarge ? "text-4xl" : "text-xl"}`}>
                    {caseStudy.title}
                  </h3>
                  
                  {(isLarge || isTall || isWide) && (
                    <p className="text-emerald-100/40 text-sm line-clamp-2 leading-relaxed max-w-md font-light">
                      {caseStudy.description}
                    </p>
                  )}

                  <div className="flex items-center gap-3 text-emerald-500/50 text-[10px] font-black uppercase tracking-[0.2em]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{caseStudy.date}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {caseStudy.tags.slice(0, isLarge ? 5 : 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 bg-emerald-500/5 rounded-lg text-emerald-500/60 border border-emerald-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}