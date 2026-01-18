"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, LayoutGrid, Clock, Maximize, Zap, Flame, Leaf, Droplet } from "lucide-react";
import { CaseStudyHero } from "@/components/portfolio/CaseStudyHero";
import { CaseStudyGrid } from "@/components/portfolio/CaseStudyGrid";
import { CaseStudyCarousel } from "@/components/portfolio/CaseStudyCarousel";
import { CaseStudyTimeline } from "@/components/portfolio/CaseStudyTimeline";
import { CaseStudyBentoGrid } from "@/components/portfolio/CaseStudyBentoGrid";
import { CaseStudyJustifiedGrid } from "@/components/portfolio/CaseStudyJustifiedGrid";
import { CaseStudyDetail } from "@/components/portfolio/CaseStudyDetail";
import { CaseStudy } from "@/components/portfolio/CaseStudyCard";
import { OpalCard } from "@/components/portfolio/OpalCard";
import { OpalCardGrid } from "@/components/portfolio/OpalCardGrid";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { siteConfig } from "@/data/portfolio/siteConfig";
import { caseStudies } from "@/data/portfolio/caseStudies";
import { opalShowcase } from "@/data/portfolio/opalShowcase";

export default function PortfolioPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"bento" | "justified" | "timeline">("bento");

  const filteredCaseStudies =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  const featuredCaseStudy = caseStudies.find((cs) => cs.featured);

  // Icon mapping for dynamic icon rendering
  const iconMap: Record<string, any> = {
    Sparkles,
    LayoutGrid,
    Maximize,
    Clock,
    Zap,
    Flame,
    Leaf,
    Droplet,
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans selection:bg-primary/30">
      {/* Dynamic Emerald Background System */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden bg-background">
        {/* The Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Large Glowing Orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(16,185,129,0.07)_0%,transparent_70%)] rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(184,115,51,0.05)_0%,transparent_70%)] rounded-full blur-[160px]" />

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(26,48,48,0.5)_0%,transparent_70%)] rounded-full blur-[120px]" />

        {/* Fine Detail Glows */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px]"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-emerald-900/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40"
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#B87333] via-[#DA8A67] to-[#8B5A2B] p-2.5 rounded-xl shadow-[0_0_20px_rgba(184,115,51,0.3)]"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h1 className="text-xl tracking-widest uppercase bg-gradient-to-r from-emerald-400 via-emerald-200 to-primary bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-brand, inherit)' }}>
                  {siteConfig.brand.name}
                </h1>
                <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/80 font-black">{siteConfig.brand.tagline}</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
               <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 relative z-10">
        {/* Featured Hero */}
        {featuredCaseStudy && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-16"
          >
            <CaseStudyHero
              caseStudy={featuredCaseStudy}
              onViewDetails={() => setSelectedCaseStudy(featuredCaseStudy)}
            />
          </motion.div>
        )}

        {/* View Switcher & Filters */}
        <div className="sticky top-[89px] z-30 py-4 bg-background/90 backdrop-blur-2xl -mx-6 px-6 mb-12 border-y border-emerald-900/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-bold mr-2">Filter</span>
              {siteConfig.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${
                    activeCategory === cat.id
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      : "bg-emerald-950/30 text-emerald-600/70 border-emerald-900/50 hover:border-emerald-700 hover:text-emerald-400"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 bg-emerald-950/40 p-1.5 rounded-2xl border border-emerald-900/50 self-start md:self-auto">
              {[
                { id: "bento", icon: LayoutGrid, label: "Bento Grid" },
                { id: "justified", icon: Maximize, label: "Justified" },
                { id: "timeline", icon: Clock, label: "Timeline" },
              ].map((view) => (
                <button
                  key={view.id}
                  onClick={() => setViewMode(view.id as any)}
                  className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 border ${
                    viewMode === view.id
                      ? "bg-emerald-500 text-emerald-950 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "text-emerald-500/40 border-transparent hover:text-emerald-400 hover:bg-emerald-500/10"
                  }`}
                  title={view.label}
                >
                  <view.icon className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wide">{view.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content based on view mode */}
        <motion.div
          key={viewMode + activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="min-h-[600px]"
        >
          {viewMode === "bento" && (
            <CaseStudyBentoGrid
              caseStudies={filteredCaseStudies}
              onCardClick={setSelectedCaseStudy}
            />
          )}

          {viewMode === "justified" && (
            <CaseStudyJustifiedGrid
              caseStudies={filteredCaseStudies}
              onCardClick={setSelectedCaseStudy}
              targetRowHeight={320}
            />
          )}

          {viewMode === "timeline" && (
            <CaseStudyTimeline
              caseStudies={filteredCaseStudies}
              onViewDetails={setSelectedCaseStudy}
            />
          )}
        </motion.div>

        {/* Opal Cards Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 mb-32"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-primary to-emerald-300 bg-clip-text text-transparent"
            >
              Opaline Components
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-emerald-400/70 text-sm tracking-wide"
            >
              Iridescent UI modules with copper accents and emerald-tinted glassmorphism
            </motion.p>
          </div>

          <OpalCardGrid title="Opal Interface Modules">
            <OpalCard
              title="Cleymmire"
              tag="Eff68"
              description="Cinone style Opal Fire sompraste tinod Preacrourso ant ertho tpseou."
              actionLabel="Gave"
              onAction={() => console.log("Gave clicked")}
              icon={Flame}
              size="medium"
              copperAccent
            />

            <OpalCard
              title="Tlapper"
              tag="Gleaknpe"
              size="medium"
              icon={Zap}
              decorative
              copperAccent
              opalTexture={opalShowcase.getOpalTexture(1)}
              copperTexture={opalShowcase.getCopperTexture(2)}
            />

            <OpalCard
              title="Gusesse Aiiny"
              description="Whenna groups opally Ciocjea opnaind you preecoung orient yrom granit silyera aoule.ad sour stermey fonmericad."
              actionLabel="Gicw"
              onAction={() => console.log("Gicw clicked")}
              icon={Leaf}
              size="medium"
              decorative
            />

            <OpalCard
              title="Buspercs"
              description="Diary ont Claneinne style Oiercal Fire a sompeaning the peice duffnopal exercital"
              size="medium"
              icon={Droplet}
              decorative
              copperAccent
              accentBarTexture={opalShowcase.getCopperTexture(0)}
            />
          </OpalCardGrid>
        </motion.div>

        {/* Stats Section with Emerald Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 p-12 rounded-[2rem] border border-emerald-500/20 bg-emerald-950/20 relative overflow-hidden group shadow-[0_0_50px_rgba(16,185,129,0.05)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]" />

          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-5xl font-extralight mb-3 text-emerald-50 bg-gradient-to-b from-white to-emerald-400/50 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-black">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Resume Section */}
        <ResumeSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24 bg-secondary/30">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             </div>
             <span className="text-sm font-medium tracking-wide">{siteConfig.brand.availabilityMessage}</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {siteConfig.social.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 {siteConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Detail Modal */}
      <CaseStudyDetail
        caseStudy={selectedCaseStudy}
        open={selectedCaseStudy !== null}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
