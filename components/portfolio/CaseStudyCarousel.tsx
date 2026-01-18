import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "./CaseStudyCard";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
  onViewDetails?: (caseStudy: CaseStudy) => void;
}

export function CaseStudyCarousel({ caseStudies, onViewDetails }: CaseStudyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = caseStudies.length - 1;
      if (newIndex >= caseStudies.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentCaseStudy = caseStudies[currentIndex];

  return (
    <div className="relative">
      <div className="relative h-[550px] md:h-[650px] rounded-[3rem] overflow-hidden bg-emerald-950/20 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.05)] backdrop-blur-sm">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
          >
            <div className="relative h-full grid md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-3 relative h-64 md:h-full overflow-hidden">
                <img
                  src={currentCaseStudy.image}
                  alt={currentCaseStudy.title}
                  className="w-full h-full object-cover grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#071919]/20 to-[#071919]" />
                <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay" />
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center relative z-10">
                <Badge className="mb-6 w-fit bg-emerald-500 text-emerald-950 font-black uppercase tracking-widest border-0">
                  {currentCaseStudy.category}
                </Badge>

                <h2 className="text-4xl font-extralight tracking-tighter mb-6 text-emerald-50 leading-tight">
                  {currentCaseStudy.title}
                </h2>

                <p className="text-emerald-100/60 mb-10 text-lg leading-relaxed font-light">
                  {currentCaseStudy.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {currentCaseStudy.tags.slice(0, 5).map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-emerald-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => onViewDetails?.(currentCaseStudy)}
                  className="w-fit px-10 py-7 rounded-2xl bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300"
                >
                  Analyze Terminal
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 right-10 flex gap-4 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-2xl border-emerald-500/30 bg-emerald-950/80 backdrop-blur-xl text-emerald-400 hover:bg-emerald-500 hover:text-emerald-950 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-2xl border-emerald-500/30 bg-emerald-950/80 backdrop-blur-xl text-emerald-400 hover:bg-emerald-500 hover:text-emerald-950 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Pagination Info */}
        <div className="absolute bottom-12 left-12 z-20 flex items-center gap-6">
          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-emerald-500 w-12 shadow-[0_0_10px_rgba(16,185,129,1)]"
                    : "bg-emerald-900 w-4"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60">
            {currentIndex + 1} <span className="mx-2">/</span> {caseStudies.length}
          </span>
        </div>
      </div>
    </div>
  );
}