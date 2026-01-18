import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List, Calendar, Layers, Grid3x3, AlignJustify } from "lucide-react";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: "grid" | "timeline" | "carousel" | "masonry" | "bento" | "justified";
  onViewModeChange: (mode: "grid" | "timeline" | "carousel" | "masonry" | "bento" | "justified") => void;
}

export function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
}: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl p-4 mb-8 sticky top-4 z-20 backdrop-blur-sm bg-card/95"
    >
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground mr-2 self-center">Filter:</span>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* View Mode Toggles */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground mr-2 self-center">View:</span>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => onViewModeChange("grid")}
            className="gap-2"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Grid</span>
          </Button>
          <Button
            variant={viewMode === "masonry" ? "default" : "outline"}
            size="sm"
            onClick={() => onViewModeChange("masonry")}
            className="gap-2"
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Masonry</span>
          </Button>
          <Button
            variant={viewMode === "bento" ? "default" : "outline"}
            size="sm"
            onClick={() => onViewModeChange("bento")}
            className="gap-2"
          >
            <Grid3x3 className="w-4 h-4" />
            <span className="hidden sm:inline">Bento</span>
          </Button>
          <Button
            variant={viewMode === "justified" ? "default" : "outline"}
            size="sm"
            onClick={() => onViewModeChange("justified")}
            className="gap-2"
          >
            <AlignJustify className="w-4 h-4" />
            <span className="hidden sm:inline">Justified</span>
          </Button>
          <Button
            variant={viewMode === "carousel" ? "default" : "outline"}
            size="sm"
            onClick={() => onViewModeChange("carousel")}
            className="gap-2"
          >
            <List className="w-4 h-4" />
            <span className="hidden sm:inline">Carousel</span>
          </Button>
          <Button
            variant={viewMode === "timeline" ? "default" : "outline"}
            size="sm"
            onClick={() => onViewModeChange("timeline")}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Timeline</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
