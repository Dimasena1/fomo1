"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, money } from "@/lib/utils";

const PRESETS = [10, 100, 500, 1000];

export interface BetSlipProps {
  /** Market name, e.g. "Lakers vs Celtics". */
  market: string;
  /** Selected outcome, e.g. "Lakers to win". */
  outcome: string;
  /** Decimal odds, e.g. 2.4. */
  odds: number;
  /** Available balance in $. */
  balance?: number;
  /** Initial stake in $. */
  defaultStake?: number;
  onSubmit?: (stake: number) => void;
  className?: string;
}

/**
 * The buy panel from FOMO, reworked for bets:
 * presets $10/$100/$500/$1000, custom amount, slider, potential payout, CTA.
 */
export function BetSlip({
  market,
  outcome,
  odds,
  balance = 1250,
  defaultStake = 100,
  onSubmit,
  className,
}: BetSlipProps) {
  const [stake, setStake] = React.useState(defaultStake);
  const payout = stake * odds;
  const max = Math.max(balance, 1);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>place your bet</CardTitle>
        <CardDescription>{market}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-center justify-between rounded-md border border-border bg-card-2 px-4 py-3">
          <span className="text-sm text-muted-foreground">{outcome}</span>
          <span className="font-semibold text-primary">{odds.toFixed(2)}x</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setStake(preset)}
              className={cn(
                "h-10 rounded-full border text-sm font-semibold transition-colors",
                stake === preset
                  ? "border-primary bg-primary-soft text-primary"
                  : "border-border bg-transparent text-muted-foreground hover:bg-card-2"
              )}
            >
              ${preset}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <Input
            type="number"
            min={1}
            max={max}
            value={stake}
            onChange={(e) => setStake(Number(e.target.value) || 0)}
            aria-label="Stake in dollars"
          />
          <input
            type="range"
            min={1}
            max={max}
            value={Math.min(stake, max)}
            onChange={(e) => setStake(Number(e.target.value))}
            className="w-full"
            aria-label="Stake slider"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$1</span>
            <span>balance {money(balance)}</span>
          </div>
        </div>

        <div className="flex items-baseline justify-between border-t border-border pt-4">
          <span className="text-sm text-muted-foreground">potential payout</span>
          <span className="text-2xl font-semibold tabular-nums text-win">
            {money(payout)}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" size="lg" onClick={() => onSubmit?.(stake)}>
          place bet
        </Button>
      </CardFooter>
    </Card>
  );
}
