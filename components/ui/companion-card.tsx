"use client"
// @ts-nocheck

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type CompanionStatus = 'online' | 'offline'

export interface CompanionCardProps {
  name: string
  personality: string
  status: CompanionStatus
  lastInteraction: string | Date
  avatar: string
  /**
   * Applies the organic transform/shape of the existing mosaic cards
   */
  mosaic?: 'large' | 'medium' | 'tall' | 'wide'
  className?: string
  [key: string]: any
}

function formatLastInteraction(value: string | Date): string {
  try {
    if (value instanceof Date) return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(value)
    const date = new Date(value)
    if (!isNaN(date.getTime())) return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
    return value
  } catch {
    return typeof value === 'string' ? value : value.toLocaleString()
  }
}

export function CompanionCard({ name, personality, status, lastInteraction, avatar, mosaic = 'medium', className, ...props }: CompanionCardProps) {
    const mosaicClass =
      mosaic === 'large'
        ? 'mosaic-card-large'
        : mosaic === 'tall'
          ? 'mosaic-card-tall'
          : mosaic === 'wide'
            ? 'mosaic-card-wide'
            : 'mosaic-card-medium'

    const isOnline = status === 'online'

    return (
      <div
        data-status={status}
        className={cn(
          // Organic layout + glass/opalescent system
          'relative overflow-hidden rounded-xl border border-white/20 shadow-lg shadow-black/10',
          'opalescent-green backdrop-blur-sm',
          // Smooth interactive states
          'transition-all duration-300 hover:shadow-xl hover:scale-[1.01]',
          mosaicClass,
          className,
        )}
        {...props}
      >
        {/* Online pulsing circuit-like border aura */}
        {isOnline && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[2px] rounded-[inherit]"
            style={{
              background:
                'linear-gradient(135deg, rgba(8,56,53,0.20) 0%, rgba(180,83,9,0.35) 25%, rgba(220,38,38,0.30) 50%, rgba(180,83,9,0.35) 75%, rgba(8,56,53,0.20) 100%)',
              backgroundSize: '350% 350%',
              animation: 'terminalGlow 6s ease-in-out infinite',
              filter: 'blur(2px)',
            } as any}
          />
        )}

        {/* Inner content plate with subtle glass feel */}
        <div className="relative z-10 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className={cn('size-14 sm:size-16 shadow-md', isOnline ? 'ring-2 ring-[rgba(8,56,53,0.45)] ring-offset-2 ring-offset-background' : 'ring-0') }>
                <AvatarImage src={avatar} alt={`${name} avatar`} />
                <AvatarFallback>{name?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
              </Avatar>
              {/* Status dot */}
              <span
                className={cn(
                  'absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-card',
                  isOnline ? 'bg-[var(--primary)] shadow-[0_0_0_2px_rgba(8,56,53,0.15)]' : 'bg-[var(--border)]',
                )}
                title={isOnline ? 'Online' : 'Offline'}
                aria-label={isOnline ? 'Online' : 'Offline'}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight opalescent-text-small">{name}</h3>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded-full border text-xs',
                    isOnline ? 'border-[rgba(8,56,53,0.35)] text-foreground/90' : 'border-[rgba(0,0,0,0.08)] text-muted-foreground',
                  )}
                >
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>

              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{personality}</p>

              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)] opacity-60" />
                <span>Last interaction</span>
                <span className="opacity-80">•</span>
                <span>{formatLastInteraction(lastInteraction)}</span>
              </div>
            </div>
          </div>

          {/* Subtle opalescent shimmer line under header */}
          <div
            aria-hidden
            className="mt-5 h-px w-full rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(180,83,9,0.35) 20%, rgba(220,38,38,0.30) 50%, rgba(8,56,53,0.35) 80%, transparent 100%)',
              backgroundSize: '300% 300%',
              animation: 'opalShimmer 4s ease-in-out infinite',
              opacity: 0.8,
            } as any}
          />

          {/* Footer actions placeholder (slot) */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2 py-1 rounded-md border border-border/60 bg-card/60">Companion</span>
            <span className="px-2 py-1 rounded-md border border-border/60 bg-card/60">M0na Machin3</span>
          </div>
        </div>
      </div>
    )
}

export default CompanionCard


declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

