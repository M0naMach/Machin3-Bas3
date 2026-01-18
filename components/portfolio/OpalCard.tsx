import { motion } from "motion/react";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { getOpalTexture, getCopperTexture } from "./OpalTextures";

export interface OpalCardProps {
  title: string;
  description?: string;
  tag?: string;
  actionLabel?: string;
  onAction?: () => void;
  decorative?: boolean;
  copperAccent?: boolean;
  size?: "small" | "medium" | "large";
  icon?: LucideIcon;
  className?: string;
  children?: ReactNode;
  
  // Texture customization - pass your own URLs or use defaults
  opalTexture?: string;        // Custom opal/pearl background texture
  copperTexture?: string;      // Custom copper texture for icon/accents
  accentBarTexture?: string;   // Custom texture for the bottom copper bar
}

export function OpalCard({
  title,
  description,
  tag,
  actionLabel,
  onAction,
  decorative = false,
  copperAccent = false,
  size = "medium",
  icon: Icon,
  className = "",
  children,
  opalTexture,
  copperTexture,
  accentBarTexture,
}: OpalCardProps) {
  const sizeClasses = {
    small: "p-6 min-h-[200px]",
    medium: "p-8 min-h-[280px]",
    large: "p-10 min-h-[360px]",
  };

  // Use custom textures or fall back to defaults
  const backgroundTexture = opalTexture || getOpalTexture(0);
  const iconTexture = copperTexture || getCopperTexture(0);
  const barTexture = accentBarTexture || getCopperTexture(1);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      {/* Copper corner decorations */}
      {copperAccent && (
        <>
          {/* Top left corner */}
          <div className="absolute top-0 left-0 w-16 h-16 z-20">
            <div className="absolute top-3 left-3 w-10 h-10 rounded-tl-2xl border-t-2 border-l-2 border-[#B87333] opacity-70" />
            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#DA8A67] to-[#B87333] shadow-lg" />
          </div>
          
          {/* Top right corner */}
          <div className="absolute top-0 right-0 w-16 h-16 z-20">
            <div className="absolute top-3 right-3 w-10 h-10 rounded-tr-2xl border-t-2 border-r-2 border-[#B87333] opacity-70" />
            <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#DA8A67] to-[#B87333] shadow-lg" />
          </div>
          
          {/* Bottom copper accent bar */}
          <div className="absolute bottom-6 left-8 right-8 h-12 z-20">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_4px_20px_rgba(184,115,51,0.4)] group-hover:shadow-[0_4px_30px_rgba(184,115,51,0.6)] transition-shadow duration-500">
              {/* Copper gradient base */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C97A3A] via-[#B87333] to-[#8B5A2B]" />
              
              {/* Real brushed copper texture */}
              <div 
                className="absolute inset-0 opacity-60 mix-blend-multiply"
                style={{
                  backgroundImage: `url(${barTexture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Brushed metal lines effect */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.1) 2px,
                    rgba(255, 255, 255, 0.1) 3px
                  )`,
                }}
              />
              
              {/* Shine highlight */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </>
      )}

      {/* Copper border with glow */}
      <div className="absolute inset-0 rounded-3xl border-[3px] border-[#B87333]/40 group-hover:border-[#B87333]/70 transition-all duration-500 shadow-[inset_0_0_60px_rgba(184,115,51,0.15)] group-hover:shadow-[inset_0_0_80px_rgba(184,115,51,0.25)]" />
      
      {/* Opalescent gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5]/95 via-[#eeeeee]/90 to-[#e8e8e8]/95" />
      
      {/* Real opal/pearl texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Enhanced Opalescent shimmer overlay - Multiple layers for depth */}
      <motion.div 
        className="absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(255, 182, 193, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, rgba(173, 216, 230, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(221, 160, 221, 0.2) 0%, transparent 45%),
            radial-gradient(circle at 20% 70%, rgba(152, 251, 152, 0.15) 0%, transparent 40%)
          `,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Second opalescent layer - shifting colors */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 80% 30%, rgba(184, 115, 51, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 40% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 45%),
            radial-gradient(ellipse at 60% 70%, rgba(255, 218, 185, 0.2) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Pearlescent highlight sweep */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.4) 30%, 
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.4) 70%,
            transparent 100%
          )`,
        }}
        animate={{
          x: ['-100%', '200%'],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle noise texture for realism */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circuit pattern (optional) */}
      {decorative && (
        <div className="absolute right-4 bottom-4 top-4 w-32 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 200">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.path
                key={i}
                d={`M ${20 + i * 15} 0 L ${20 + i * 15} 30 L ${40 + i * 15} 30 L ${40 + i * 15} 60 L ${20 + i * 15} 60 L ${20 + i * 15} 200`}
                stroke="#B87333"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            ))}
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={`circle-${i}`}
                cx={30 + i * 30}
                cy={40 + i * 40}
                r="4"
                fill="#B87333"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6, delay: i * 0.3 + 0.5 }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          {/* Tag */}
          {tag && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm mb-4"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-700 font-black">
                {tag}
              </span>
            </motion.div>
          )}

          {/* Icon */}
          {Icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg">
                {/* Copper gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#DA8A67] via-[#B87333] to-[#8B5A2B]" />
                
                {/* Real copper texture */}
                <div 
                  className="absolute inset-0 opacity-50 mix-blend-multiply"
                  style={{
                    backgroundImage: `url(${iconTexture})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Brushed lines overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 1px,
                      rgba(255, 255, 255, 0.3) 1px,
                      rgba(255, 255, 255, 0.3) 2px
                    )`,
                  }}
                />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-2xl font-bold mb-3 text-[#0d1b1e] tracking-tight"
          >
            {title}
          </motion.h3>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm leading-relaxed text-[#2d3d40] opacity-80 max-w-[85%]"
            >
              {description}
            </motion.p>
          )}

          {/* Custom children */}
          {children}
        </div>

        {/* Action Button */}
        {actionLabel && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAction}
            className="mt-6 self-start px-6 py-2.5 rounded-xl relative overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#B87333]/30 transition-all duration-300"
          >
            {/* Copper gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C97A3A] via-[#B87333] to-[#A0632F]" />
            
            {/* Brushed texture */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(255, 255, 255, 0.2) 2px,
                  rgba(255, 255, 255, 0.2) 3px
                )`,
              }}
            />
            
            <span className="relative z-10 text-white text-sm font-bold uppercase tracking-wider">
              {actionLabel}
            </span>
          </motion.button>
        )}
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(184, 115, 51, 0.15), transparent 60%)`,
        }}
      />
    </motion.div>
  );
}