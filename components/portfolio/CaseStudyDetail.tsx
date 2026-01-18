import { motion } from "motion/react";
import { X, ExternalLink, Github, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "./CaseStudyCard";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy | null;
  open: boolean;
  onClose: () => void;
}

export function CaseStudyDetail({ caseStudy, open, onClose }: CaseStudyDetailProps) {
  if (!caseStudy) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-[#071919] border-emerald-500/20 text-emerald-50 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
        <DialogHeader className="sr-only">
          <DialogTitle>{caseStudy.title}</DialogTitle>
          <DialogDescription>{caseStudy.description}</DialogDescription>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071919] via-[#071919]/40 to-transparent" />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-6 right-6 bg-emerald-950/80 backdrop-blur-md hover:bg-emerald-500 hover:text-emerald-950 transition-all border border-emerald-500/20 z-50 rounded-xl"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-10 md:p-16 -mt-24 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-emerald-500 text-emerald-950 font-black uppercase tracking-widest px-4 py-1 border-0">
                {caseStudy.category}
              </Badge>
              <div className="flex items-center gap-2 text-emerald-500/60 font-black uppercase tracking-widest text-[10px]">
                <Calendar className="w-4 h-4" />
                <span>{caseStudy.date}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extralight tracking-tighter mb-6 text-emerald-50">{caseStudy.title}</h1>

            <p className="text-emerald-100/60 text-xl mb-10 leading-relaxed max-w-2xl font-light">
              {caseStudy.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {caseStudy.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-emerald-500/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-12">
              {caseStudy.link && (
                <Button className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-bold uppercase tracking-widest px-8 py-6 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)]" asChild>
                  <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-3 w-5 h-5" />
                    System Interface
                  </a>
                </Button>
              )}
              {caseStudy.github && (
                <Button variant="outline" className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-bold uppercase tracking-widest px-8 py-6 rounded-2xl" asChild>
                  <a href={caseStudy.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 w-5 h-5" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-12 border-t border-emerald-900/30 pt-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Project Overview</h3>
                  <p className="text-emerald-100/40 leading-relaxed font-light">
                    This {caseStudy.category} project showcases {caseStudy.tags.join(", ")}. 
                    It demonstrates advanced techniques and creative solutions to complex challenges, 
                    pushing the boundaries of what's possible in modern web development and design.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Key Features</h3>
                  <ul className="space-y-3 text-emerald-100/40">
                    {[
                      "Responsive and mobile-first design approach",
                      "Modern tech stack with cutting-edge frameworks",
                      "Optimized performance and accessibility",
                      "Clean, maintainable, and scalable codebase"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Technical Stack</h3>
                <div className="grid grid-cols-2 gap-3">
                  {caseStudy.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="p-4 bg-emerald-950/40 rounded-xl text-center border border-emerald-900/50 text-emerald-300 text-[11px] font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}