import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** ALL-CAPS label, e.g. "LEADERBOARD". */
  label: string;
  /** Lowercase caption, e.g. "become a legend, top the leaderboard". */
  caption: string;
  /** Screenshot or illustration URL. */
  image?: string;
  /** Custom visual instead of an image. */
  children?: React.ReactNode;
}

/**
 * One of the six feature cards from the FOMO landing:
 * caps label + lowercase caption + app screenshot in a rounded frame.
 */
export function FeatureCard({
  label,
  caption,
  image,
  children,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card className={cn("group overflow-hidden", className)} {...props}>
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <Badge variant="accent" className="w-fit">
          {label}
        </Badge>
        <p className="text-xl font-medium lowercase leading-snug tracking-tight">
          {caption}
        </p>
        <div className="mt-auto aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-card-2">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt=""
              className="size-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
            />
          ) : (
            children
          )}
        </div>
      </CardContent>
    </Card>
  );
}
