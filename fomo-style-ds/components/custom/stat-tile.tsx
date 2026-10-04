import * as React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/magic/number-ticker";
import { cn } from "@/lib/utils";

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** ALL-CAPS label, e.g. "TOTAL PNL". */
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Change vs. previous period, in %. Colored win/loss by sign. */
  delta?: number;
}

/** KPI tile for the portfolio: label, animated number, colored delta. */
export function StatTile({
  label,
  value,
  prefix,
  suffix,
  decimals,
  delta,
  className,
  ...props
}: StatTileProps) {
  const positive = (delta ?? 0) >= 0;

  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="flex flex-col gap-3 p-5">
        <span className="label-caps text-muted-foreground">{label}</span>
        <NumberTicker
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          className="text-3xl font-semibold tracking-tight"
        />
        {delta !== undefined && (
          <span
            className={cn(
              "inline-flex items-center gap-1 text-sm font-medium",
              positive ? "text-win" : "text-loss"
            )}
          >
            {positive ? (
              <ArrowUpRight className="size-4" />
            ) : (
              <ArrowDownRight className="size-4" />
            )}
            {Math.abs(delta).toFixed(1)}%
          </span>
        )}
      </CardContent>
    </Card>
  );
}
