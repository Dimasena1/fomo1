import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/** ALL-CAPS pill label, like "LEADERBOARD" above a feature caption. */
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase leading-none tracking-[0.08em] whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-card-2 text-muted-foreground",
        accent: "bg-primary-soft text-primary",
        win: "bg-win/15 text-win",
        loss: "bg-loss/15 text-loss",
        outline: "border border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
