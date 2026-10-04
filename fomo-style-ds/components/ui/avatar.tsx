import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  src?: string;
  /** Pixel size, default 40. */
  size?: number;
}

/** Round avatar with initials fallback. No external dependencies. */
function Avatar({ name, src, size = 40, className, style, ...props }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-card-2 text-xs font-semibold text-muted-foreground",
        className
      )}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="size-full object-cover" />
      ) : (
        initials
      )}
    </span>
  );
}

export { Avatar };
