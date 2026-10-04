"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NumberTickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  /** Animation length in ms. */
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to show. */
  decimals?: number;
}

/**
 * Counts up from 0 to `value` when it scrolls into view —
 * for "join 2,500,000 traders" and live balances.
 */
export function NumberTicker({
  value,
  duration = 1600,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  ...props
}: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;

    const run = () => {
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(value * eased);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} {...props}>
      {prefix}
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
