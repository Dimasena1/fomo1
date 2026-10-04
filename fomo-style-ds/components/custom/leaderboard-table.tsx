import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { cn, money } from "@/lib/utils";

export interface Trader {
  rank: number;
  name: string;
  avatar?: string;
  /** Return on investment, %. */
  roi: number;
  /** Share of bets won, %. */
  winRate: number;
  /** Profit and loss, $. */
  pnl: number;
}

export interface LeaderboardTableProps extends React.HTMLAttributes<HTMLDivElement> {
  traders: Trader[];
}

/** Ranked table of top bettors — top three ranks highlighted in the accent color. */
export function LeaderboardTable({ traders, className, ...props }: LeaderboardTableProps) {
  return (
    <div
      className={cn("overflow-hidden rounded-lg border border-border bg-card", className)}
      {...props}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="label-caps px-5 py-3 font-semibold text-muted-foreground">#</th>
            <th className="label-caps px-5 py-3 font-semibold text-muted-foreground">bettor</th>
            <th className="label-caps px-5 py-3 text-right font-semibold text-muted-foreground">roi</th>
            <th className="label-caps hidden px-5 py-3 text-right font-semibold text-muted-foreground sm:table-cell">win rate</th>
            <th className="label-caps px-5 py-3 text-right font-semibold text-muted-foreground">pnl</th>
          </tr>
        </thead>
        <tbody>
          {traders.map((t) => (
            <tr
              key={t.rank}
              className="border-b border-border transition-colors last:border-b-0 hover:bg-card-2"
            >
              <td
                className={cn(
                  "px-5 py-3 font-semibold tabular-nums",
                  t.rank <= 3 ? "text-primary" : "text-muted-foreground"
                )}
              >
                {t.rank}
              </td>
              <td className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <Avatar name={t.name} src={t.avatar} size={32} />
                  <span className="font-medium">{t.name}</span>
                </div>
              </td>
              <td
                className={cn(
                  "px-5 py-3 text-right font-semibold tabular-nums",
                  t.roi >= 0 ? "text-win" : "text-loss"
                )}
              >
                {t.roi >= 0 ? "+" : ""}
                {t.roi.toFixed(1)}%
              </td>
              <td className="hidden px-5 py-3 text-right tabular-nums text-muted-foreground sm:table-cell">
                {t.winRate.toFixed(0)}%
              </td>
              <td
                className={cn(
                  "px-5 py-3 text-right font-semibold tabular-nums",
                  t.pnl >= 0 ? "text-win" : "text-loss"
                )}
              >
                {t.pnl >= 0 ? "+" : "-"}
                {money(Math.abs(t.pnl))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
