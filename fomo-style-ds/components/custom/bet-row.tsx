import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, money } from "@/lib/utils";

export interface Bet {
  id: string;
  user: { name: string; avatar?: string };
  market: string;
  outcome: string;
  stake: number;
  odds: number;
  timeAgo: string;
  result?: "open" | "win" | "loss";
}

export interface BetRowProps extends React.HTMLAttributes<HTMLDivElement> {
  bet: Bet;
  onFollow?: (userName: string) => void;
}

/** One row of the social feed: who bet how much on what, at which odds. */
export function BetRow({ bet, onFollow, className, ...props }: BetRowProps) {
  const result = bet.result ?? "open";

  return (
    <div
      className={cn(
        "flex items-center gap-4 border-b border-border py-4 last:border-b-0",
        className
      )}
      {...props}
    >
      <Avatar name={bet.user.name} src={bet.user.avatar} size={40} />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm">
          <span className="font-semibold">{bet.user.name}</span>
          <span className="text-muted-foreground"> bet </span>
          <span className="font-semibold">{money(bet.stake)}</span>
          <span className="text-muted-foreground"> on </span>
          <span className="font-semibold">{bet.outcome}</span>
        </p>
        <p className="truncate text-xs text-muted-foreground">
          {bet.market} · {bet.timeAgo}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Badge
          variant={result === "win" ? "win" : result === "loss" ? "loss" : "outline"}
        >
          {result === "open" ? `${bet.odds.toFixed(2)}x` : result}
        </Badge>
        {onFollow && (
          <Button
            size="sm"
            variant="ghost"
            className="hidden sm:inline-flex"
            onClick={() => onFollow(bet.user.name)}
          >
            follow
          </Button>
        )}
      </div>
    </div>
  );
}
