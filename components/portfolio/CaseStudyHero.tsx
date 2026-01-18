import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "./CaseStudyCard";

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
  onViewDetails?: () => void;
}

export function CaseStudyHero({ caseStudy, onViewDetails }: CaseStudyHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[2.5rem] overflow-hidden bg-emerald-950/20 mb-16 border border-emerald-500/20 group shadow-[0_0_50px_rgba(16,185,129,0.05)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-primary/5 pointer-events-none" />
      <div className="grid md:grid-cols-2 gap-0 items-center">
        {/* Content */}
        <div className="p-10 md:p-16 lg:p-20 order-2 md:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-8 bg-emerald-500 text-emerald-950 font-black uppercase tracking-widest border-0 shadow-[0_0_20px_rgba(16,185,129,0.4)] px-5 py-1.5 rounded-full">
              System Priority
            </Badge>

            <h1 className="mb-8 text-5xl font-extralight tracking-tighter leading-none text-emerald-50">{caseStudy.title}</h1>

            <p className="text-emerald-100/60 mb-10 text-xl leading-relaxed max-w-xl font-light">
              {caseStudy.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-12">
              {caseStudy.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="px-5 py-2 bg-emerald-500/5 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/20 text-emerald-400"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-5">
              <Button onClick={onViewDetails} className="px-10 py-7 rounded-2xl bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300">
                Execute Protocol
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              {caseStudy.link && (
                <Button variant="outline" asChild className="px-10 py-7 rounded-2xl border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-bold uppercase tracking-widest">
                  <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-3 w-5 h-5" />
                    Interface
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[450px] md:h-full min-h-[600px] order-1 md:order-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#071919] z-10" />
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-20" />
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] hover:grayscale-0"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}