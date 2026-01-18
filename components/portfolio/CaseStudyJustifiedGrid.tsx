import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CaseStudy } from "./CaseStudyCard";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Terminal } from "lucide-react";

interface CaseStudyJustifiedGridProps {
  caseStudies: CaseStudy[];
  onCardClick?: (caseStudy: CaseStudy) => void;
  targetRowHeight?: number;
}

interface PositionedCard {
  caseStudy: CaseStudy;
  width: number;
  height: number;
  x: number;
  y: number;
}

export function CaseStudyJustifiedGrid({
  caseStudies,
  onCardClick,
  targetRowHeight = 320,
}: CaseStudyJustifiedGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<PositionedCard[]>([]);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const calculateLayout = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const gap = 24; // 1.5rem gap

      const cardsWithAspects = caseStudies.map((cs, index) => ({
        caseStudy: cs,
        aspectRatio: [1.4, 1.2, 1.6, 1.3, 1.5, 1.1][index % 6],
      }));

      const positioned: PositionedCard[] = [];
      let currentRow: typeof cardsWithAspects = [];
      let currentRowWidth = 0;
      let currentY = 0;

      cardsWithAspects.forEach((item, index) => {
        const width = targetRowHeight * item.aspectRatio;
        currentRow.push(item);
        currentRowWidth += width;

        const isLastItem = index === cardsWithAspects.length - 1;
        const rowWithGaps = currentRowWidth + gap * (currentRow.length - 1);

        if (rowWithGaps >= containerWidth * 0.92 || isLastItem) {
          const totalGaps = gap * (currentRow.length - 1);
          const availableWidth = containerWidth - totalGaps;
          const scaleFactor = availableWidth / currentRowWidth;

          let currentX = 0;
          currentRow.forEach((rowItem) => {
            const scaledWidth = targetRowHeight * rowItem.aspectRatio * scaleFactor;
            const scaledHeight = targetRowHeight * scaleFactor;

            positioned.push({
              caseStudy: rowItem.caseStudy,
              width: scaledWidth,
              height: scaledHeight,
              x: currentX,
              y: currentY,
            });

            currentX += scaledWidth + gap;
          });

          currentY += targetRowHeight * scaleFactor + gap;
          currentRow = [];
          currentRowWidth = 0;
        }
      });

      setPositions(positioned);
      setContainerHeight(currentY);
    };

    calculateLayout();
    const resizeObserver = new ResizeObserver(calculateLayout);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    
    return () => resizeObserver.disconnect();
  }, [caseStudies, targetRowHeight]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "coding":
        return "bg-emerald-500 text-emerald-950";
      case "artwork":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-emerald-900 text-emerald-400";
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: containerHeight || "600px" }}
    >
      {positions.map((item, index) => (
        <motion.div
          key={item.caseStudy.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ y: -5, zIndex: 10 }}
          className="absolute cursor-pointer group"
          style={{
            left: item.x,
            top: item.y,
            width: item.width,
            height: item.height,
          }}
          onClick={() => onCardClick?.(item.caseStudy)}
        >
          <div className="relative w-full h-full bg-emerald-950/20 border border-emerald-500/20 rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.02)] hover:shadow-[0_0_50px_rgba(16,185,129,0.1)] transition-all duration-700 backdrop-blur-sm">
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={item.caseStudy.image}
                alt={item.caseStudy.title}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071919] via-[#071919]/40 to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex items-start justify-between z-20">
                <Badge
                  className={`${getCategoryColor(item.caseStudy.category)} text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-xl border-0 shadow-lg`}
                >
                  {item.caseStudy.category}
                </Badge>
                <div className="opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500">
                  {item.caseStudy.link && (
                    <div className="bg-emerald-950/80 backdrop-blur-xl p-2 rounded-xl border border-emerald-500/20 text-emerald-400">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3 z-10">
                <h3 className="text-emerald-50 text-xl font-extralight tracking-tight leading-tight group-hover:text-emerald-400 transition-colors duration-500">
                  {item.caseStudy.title}
                </h3>

                <div className="flex items-center gap-2.5 text-emerald-500/50 text-[9px] font-black uppercase tracking-[0.2em] mb-4">
                  <Terminal className="w-3 h-3" />
                  <span>{item.caseStudy.date}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.caseStudy.tags.slice(0, item.width > 220 ? 3 : 1).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-emerald-500/5 rounded-lg text-emerald-500/40 border border-emerald-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}