import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  /** Seconds per loop. */
  duration?: number;
  /** Gap between items in px. */
  gap?: number;
}

/** Infinite horizontal scroller for avatars, logos or live bets. CSS-only. */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  duration = 40,
  gap = 24,
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex w-full overflow-hidden", className)}
      style={
        {
          "--duration": `${duration}s`,
          "--gap": `${gap}px`,
          gap: "var(--gap)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className={cn(
            "flex shrink-0 animate-marquee items-center",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ gap: "var(--gap)" }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
