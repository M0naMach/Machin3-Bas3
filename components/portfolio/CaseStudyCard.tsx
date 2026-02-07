import { motion } from "motion/react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: "coding" | "craft" | "compositions";
  image: string;
  tags: string[];
  date: string;
  link?: string;
  github?: string;
  featured?: boolean;
  displayMode?: "minimal" | "detailed" | "image-only";
  overview?: string;
  features?: string[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onClick?: () => void;
  layout?: "compact" | "default" | "detailed";
}

export function CaseStudyCard({ caseStudy, onClick, layout = "default" }: CaseStudyCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "coding":
        return "bg-primary/10 text-primary border-primary/20";
      case "craft":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "compositions":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const displayMode = caseStudy.displayMode || "detailed";
  const isImageOnly = displayMode === "image-only";
  const isMinimal = displayMode === "minimal";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-[2rem] overflow-hidden h-full flex flex-col shadow-[0_0_30px_rgba(16,185,129,0.02)] hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-700 backdrop-blur-sm">
        {/* Image */}
        <div className={`relative overflow-hidden ${isImageOnly ? 'aspect-square' : 'aspect-[16/11]'}`}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071919]/95 via-[#071919]/20 to-transparent opacity-90 transition-opacity duration-500" />
          
          {/* Status Badge */}
          {caseStudy.featured && (
            <div className="absolute top-5 left-5 z-10">
               <div className="bg-emerald-500 text-emerald-950 text-[9px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                 Active Link
               </div>
            </div>
          )}

          {/* Overlay icons */}
          <div className="absolute top-5 right-5 flex flex-col gap-2 translate-x-14 group-hover:translate-x-0 transition-transform duration-500 ease-out">
            {caseStudy.link && (
              <div className="bg-emerald-500/10 backdrop-blur-xl p-2.5 rounded-xl shadow-xl border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-emerald-950 transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        {!isImageOnly && (
          <div className="p-8 flex-1 flex flex-col relative z-10">
            <div className="flex items-center justify-between gap-2 mb-5">
              <Badge variant="outline" className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-lg border border-emerald-500/30 ${getCategoryColor(caseStudy.category)}`}>
                {caseStudy.category}
              </Badge>
              <div className="flex items-center gap-2 text-emerald-500/50 text-[10px] font-black uppercase tracking-[0.1em]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{caseStudy.date}</span>
              </div>
            </div>

            <h3 className="text-xl font-light mb-4 group-hover:text-emerald-400 transition-colors duration-500 leading-snug text-emerald-50">
              {caseStudy.title}
            </h3>

            {!isMinimal && (
              <p className="text-emerald-100/40 text-sm mb-8 flex-1 line-clamp-2 leading-relaxed font-light">
                {caseStudy.description}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.slice(0, layout === "compact" ? 2 : 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1.5 bg-emerald-500/5 rounded-lg text-emerald-500/60 border border-emerald-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Image-only mode: Title overlay */}
        {isImageOnly && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#071919] via-[#071919]/80 to-transparent">
            <Badge variant="outline" className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-lg border border-emerald-500/30 mb-3 ${getCategoryColor(caseStudy.category)}`}>
              {caseStudy.category}
            </Badge>
            <h3 className="text-lg font-light group-hover:text-emerald-400 transition-colors duration-500 text-emerald-50">
              {caseStudy.title}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}