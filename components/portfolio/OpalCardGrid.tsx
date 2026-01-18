import { motion } from "motion/react";
import { ReactNode } from "react";
import { Sparkles, Palette, User } from "lucide-react";

export interface OpalCardGridProps {
  children?: ReactNode;
  title?: string;
  actions?: ReactNode;
  variant?: "contained" | "full";
  showCircuitry?: boolean;
}

export function OpalCardGrid({
  children,
  title = "Opal",
  actions,
  variant = "contained",
  showCircuitry = true,
}: OpalCardGridProps) {
  const containerClasses = variant === "contained" 
    ? "max-w-6xl mx-auto" 
    : "w-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${containerClasses} relative`}
    >
      {/* Copper circuit traces in background */}
      {showCircuitry && (
        <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
          {/* Left side circuits */}
          <svg className="absolute left-0 top-1/4 w-32 h-64 -translate-x-16" viewBox="0 0 100 200">
            <motion.path
              d="M 0 100 L 50 100 L 50 80 L 70 80"
              stroke="#B87333"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 0 120 L 40 120 L 40 140 L 70 140"
              stroke="#B87333"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.circle cx="70" cy="80" r="3" fill="#B87333" opacity="0.8" />
            <motion.circle cx="70" cy="140" r="3" fill="#B87333" opacity="0.8" />
            <motion.circle cx="50" cy="100" r="2" fill="#DA8A67" opacity="0.6" />
          </svg>

          {/* Right side circuits */}
          <svg className="absolute right-0 top-1/3 w-32 h-64 translate-x-16" viewBox="0 0 100 200">
            <motion.path
              d="M 100 80 L 50 80 L 50 60 L 30 60"
              stroke="#B87333"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 0.6 }}
            />
            <motion.path
              d="M 100 110 L 60 110 L 60 130 L 30 130"
              stroke="#B87333"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <motion.circle cx="30" cy="60" r="3" fill="#B87333" opacity="0.8" />
            <motion.circle cx="30" cy="130" r="3" fill="#B87333" opacity="0.8" />
            <motion.circle cx="50" cy="80" r="2" fill="#DA8A67" opacity="0.6" />
          </svg>

          {/* Top circuits */}
          <svg className="absolute top-0 left-1/4 w-64 h-20 -translate-y-10" viewBox="0 0 200 50">
            <motion.path
              d="M 0 25 L 80 25 L 80 10 L 120 10 L 120 25 L 200 25"
              stroke="#B87333"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2.5, delay: 0.4 }}
            />
            <motion.rect x="75" y="5" width="10" height="10" fill="#B87333" opacity="0.7" rx="2" />
            <motion.rect x="115" y="5" width="10" height="10" fill="#B87333" opacity="0.7" rx="2" />
          </svg>
        </div>
      )}

      {/* Container with deep emerald background and subtle border */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0d1b1e] border border-emerald-900/30 shadow-[0_20px_80px_rgba(8,18,18,0.6)]">
        
        {/* Header Bar */}
        <div className="relative bg-gradient-to-r from-[#0d1b1e] via-[#162a2a] to-[#0d1b1e] border-b border-emerald-900/30 px-8 py-5 flex items-center justify-between">
          {/* Ambient glow in header */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
          
          {/* Copper accent line on left */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#B87333] to-transparent opacity-60" />
          
          {/* Title */}
          <motion.div className="flex items-center gap-3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-wide text-emerald-50 relative z-10"
            >
              {title}
            </motion.h2>
            
            {/* Copper decorative element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-1.5 rounded-full overflow-hidden shadow-lg"
            >
              <div className="w-full h-full bg-gradient-to-r from-[#DA8A67] via-[#B87333] to-[#8B5A2B]" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Header Actions */}
          <div className="flex items-center gap-2 relative z-10">
            {actions || (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/40 transition-all group relative overflow-hidden"
                  aria-label="Theme"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B87333]/0 to-[#B87333]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Palette className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 relative z-10" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/40 transition-all group relative overflow-hidden"
                  aria-label="Search"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B87333]/0 to-[#B87333]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Sparkles className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 relative z-10" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/40 transition-all group relative overflow-hidden"
                  aria-label="User"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B87333]/0 to-[#B87333]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <User className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 relative z-10" />
                </motion.button>
              </>
            )}
          </div>
        </div>

        {/* Main Content Area with sand/beige background like the image */}
        <div className="relative bg-gradient-to-br from-[#d8c8b8] via-[#e4d9cc] to-[#cfc0b0] p-8">
          {/* Subtle texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Copper accent corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#B87333]/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#B87333]/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#B87333]/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#B87333]/30 rounded-br-lg" />

          {/* Grid Container */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}