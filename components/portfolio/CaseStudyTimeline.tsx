import { motion } from "motion/react";
import { Calendar, ExternalLink, Github, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "./CaseStudyCard";

interface CaseStudyTimelineProps {
  caseStudies: CaseStudy[];
  onViewDetails?: (caseStudy: CaseStudy) => void;
}

export function CaseStudyTimeline({ caseStudies, onViewDetails }: CaseStudyTimelineProps) {
  return (
    <div className="relative py-12">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />

      <div className="space-y-32">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className={`relative flex flex-col md:flex-row gap-12 items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-emerald-500 rounded-full border-4 border-[#071919] shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10" />

            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-emerald-950/20 border border-emerald-500/10 rounded-[2.5rem] p-10 backdrop-blur-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <Terminal className="w-4 h-4 text-emerald-500/60" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60">{caseStudy.date}</span>
                </div>

                <h3 className="text-3xl font-extralight tracking-tighter mb-6 text-emerald-50 group-hover:text-emerald-400 transition-colors duration-500">{caseStudy.title}</h3>

                <Badge variant="outline" className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                  {caseStudy.category}
                </Badge>

                <p className="text-emerald-100/40 text-sm mb-10 leading-relaxed font-light max-w-md mx-0 ml-auto mr-auto md:ml-auto md:mr-0">
                  {caseStudy.description}
                </p>

                <div className={`flex flex-wrap gap-2.5 mb-10 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  {caseStudy.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-emerald-500/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex flex-wrap gap-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <Button
                    onClick={() => onViewDetails?.(caseStudy)}
                    className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-bold uppercase tracking-widest px-6 py-5 rounded-xl text-[11px]"
                  >
                    Details
                  </Button>
                  {caseStudy.link && (
                    <Button variant="outline" className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 rounded-xl px-4" asChild>
                      <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 pl-20 md:pl-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video cursor-pointer border border-emerald-500/20 group"
                onClick={() => onViewDetails?.(caseStudy)}
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071919]/80 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}