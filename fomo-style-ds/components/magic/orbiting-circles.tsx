import * as React from "react";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Spin counter-clockwise. */
  reverse?: boolean;
  /** Seconds per full rotation. */
  duration?: number;
  /** Orbit radius in px. */
  radius?: number;
  /** Draw the faint orbit ring. */
  path?: boolean;
  /** Size of each orbiting item in px. */
  iconSize?: number;
}

/**
 * Icons orbiting around the centre of a `relative flex items-center justify-center`
 * container — the "inner-circle / outer-circle" effect from the FOMO hero.
 * Pure CSS animation (keyframes `orbit` live in globals.css), no JS runtime.
 */
export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 40,
  ...props
}: OrbitingCirclesProps) {
  const count = React.Children.count(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 size-full"
          aria-hidden
        >
          <circle
            className="stroke-border"
            strokeWidth="1"
            strokeDasharray="4 6"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / count) * index;
        return (
          <div
            style={
              {
                "--duration": duration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              "absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full",
              reverse && "[animation-direction:reverse]",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
