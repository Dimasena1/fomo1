import {
  ArrowRight,
  Bell,
  Download,
  Flame,
  Layers,
  Sparkles,
  Trophy,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrbitingCircles } from "@/components/magic/orbiting-circles";
import { NumberTicker } from "@/components/magic/number-ticker";
import { Marquee } from "@/components/magic/marquee";
import { FeatureCard } from "@/components/custom/feature-card";
import { BetSlip } from "@/components/custom/bet-slip";
import { BetRow, type Bet } from "@/components/custom/bet-row";
import { StatTile } from "@/components/custom/stat-tile";
import { LeaderboardTable, type Trader } from "@/components/custom/leaderboard-table";

/* ------------------------------------------------------------------ */
/* Demo data — replace with real data from your backend               */
/* ------------------------------------------------------------------ */

const features = [
  { label: "leaderboard", caption: "become a legend, top the leaderboard", icon: Trophy },
  { label: "feed", caption: "discover and follow the best bettors", icon: Users },
  { label: "alerts", caption: "real-time notifications for what the best are betting", icon: Bell },
  { label: "easy onboarding", caption: "create an account in an instant", icon: Zap },
  { label: "zero complexity", caption: "sports, prediction markets and crypto in one place", icon: Layers },
  { label: "one tap to fund", caption: "top up with apple pay", icon: Wallet },
];

const bets: Bet[] = [
  { id: "1", user: { name: "Nova Kim" }, market: "Lakers vs Celtics", outcome: "Lakers to win", stake: 250, odds: 2.4, timeAgo: "2m ago" },
  { id: "2", user: { name: "Max Orbit" }, market: "BTC above $100k by Friday?", outcome: "yes", stake: 1000, odds: 1.8, timeAgo: "6m ago" },
  { id: "3", user: { name: "Lena Flux" }, market: "Arsenal vs Chelsea", outcome: "draw", stake: 100, odds: 3.6, timeAgo: "14m ago", result: "win" },
  { id: "4", user: { name: "Ivan Comet" }, market: "US CPI below 3%?", outcome: "no", stake: 500, odds: 2.1, timeAgo: "31m ago", result: "loss" },
  { id: "5", user: { name: "Aria Pulsar" }, market: "F1 Monza — podium", outcome: "Norris", stake: 75, odds: 4.2, timeAgo: "1h ago" },
];

const traders: Trader[] = [
  { rank: 1, name: "Nova Kim", roi: 184.2, winRate: 71, pnl: 48210 },
  { rank: 2, name: "Max Orbit", roi: 122.7, winRate: 64, pnl: 31780 },
  { rank: 3, name: "Lena Flux", roi: 96.4, winRate: 68, pnl: 19940 },
  { rank: 4, name: "Ivan Comet", roi: 41.3, winRate: 55, pnl: 8120 },
  { rank: 5, name: "Aria Pulsar", roi: -12.8, winRate: 44, pnl: -2140 },
];

const crowd: { name: string; roi: number }[] = [
  { name: "Nova Kim", roi: 184 },
  { name: "Max Orbit", roi: 122 },
  { name: "Lena Flux", roi: 96 },
  { name: "Sol Vega", roi: 77 },
  { name: "Kai Nebula", roi: 64 },
  { name: "Mira Quasar", roi: 58 },
  { name: "Ivan Comet", roi: 41 },
  { name: "Aria Pulsar", roi: 33 },
];

/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <main className="bg-space">
      {/* ---------------- NAV ---------------- */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2 font-semibold lowercase tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-white shadow-glow-sm">
            <Sparkles className="size-4" />
          </span>
          yourbrand
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">features</a>
          <a href="#app" className="hover:text-foreground">the app</a>
          <a href="#leaderboard" className="hover:text-foreground">leaderboard</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">log in</Button>
          <Button size="sm">start betting</Button>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="accent">social-first betting</Badge>
            <h1 className="display mt-6">where bettors become legends.</h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              follow the best, copy their bets, climb the leaderboard. sports and
              prediction markets in one app — on web and mobile.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">
                start betting <ArrowRight />
              </Button>
              <Button size="lg" variant="ghost">
                <Download /> download app
              </Button>
            </div>
          </div>

          <div className="relative flex h-[440px] items-center justify-center">
            <div className="absolute size-48 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative z-10 flex size-20 animate-float items-center justify-center rounded-full bg-primary text-white shadow-glow">
              <Sparkles className="size-8" />
            </div>
            <OrbitingCircles radius={110} duration={24} iconSize={44}>
              <OrbitIcon><Trophy className="size-5" /></OrbitIcon>
              <OrbitIcon><Flame className="size-5" /></OrbitIcon>
              <OrbitIcon><Bell className="size-5" /></OrbitIcon>
            </OrbitingCircles>
            <OrbitingCircles radius={185} duration={40} iconSize={40} reverse>
              <OrbitIcon><Users className="size-4" /></OrbitIcon>
              <OrbitIcon><Wallet className="size-4" /></OrbitIcon>
              <OrbitIcon><Zap className="size-4" /></OrbitIcon>
              <OrbitIcon><Layers className="size-4" /></OrbitIcon>
            </OrbitingCircles>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES (bento) ---------------- */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="heading">never miss out again</h2>
        <p className="mt-3 text-lg text-muted-foreground">the only social-first betting app</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ label, caption, icon: Icon }) => (
            <FeatureCard key={label} label={label} caption={caption}>
              <div className="flex size-full items-center justify-center bg-linear-to-br from-card-2 to-card">
                <Icon className="size-10 text-primary" />
              </div>
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* ---------------- SOCIAL PROOF ---------------- */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="heading">a betting app for the rest of us</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          join{" "}
          <NumberTicker value={2500000} className="font-semibold text-foreground" />{" "}
          bettors making their name
        </p>
        <Marquee className="mt-10" duration={30}>
          {crowd.map(({ name, roi }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2"
            >
              <Avatar name={name} size={28} />
              <span className="text-sm">{name}</span>
              <Badge variant="win">+{roi}%</Badge>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ---------------- APP PREVIEW ---------------- */}
      <section id="app" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="heading">trade from anywhere. never lose a beat.</h2>
        <p className="mt-3 text-lg text-muted-foreground">
          open a bet on your phone, close it on your desktop — all in one app.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>live feed</CardTitle>
              <Badge variant="accent">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" /> live
              </Badge>
            </CardHeader>
            <CardContent className="pt-4">
              {bets.map((bet) => (
                <BetRow key={bet.id} bet={bet} />
              ))}
            </CardContent>
          </Card>

          <BetSlip market="Lakers vs Celtics" outcome="Lakers to win" odds={2.4} balance={1250} />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <StatTile label="total pnl" value={48210} prefix="$" delta={12.4} />
          <StatTile label="win rate" value={71} suffix="%" delta={3.1} />
          <StatTile label="open bets" value={14} delta={-8.5} />
        </div>
      </section>

      {/* ---------------- LEADERBOARD ---------------- */}
      <section id="leaderboard" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="heading">this week&apos;s legends</h2>
        <p className="mt-3 text-lg text-muted-foreground">ranked by accuracy and profit</p>
        <LeaderboardTable traders={traders} className="mt-10" />
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-semibold lowercase tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-white">
                <Sparkles className="size-4" />
              </span>
              yourbrand
            </div>
            <p className="mt-4 text-sm text-muted-foreground">© 2026 YourBrand Inc.</p>
          </div>
          <FooterColumn title="about" links={["blog", "faq", "affiliates", "careers"]} />
          <FooterColumn title="social" links={["discord", "x / twitter", "instagram", "youtube"]} />
          <FooterColumn title="legal" links={["privacy policy", "terms of service", "responsible betting"]} />
        </div>
      </footer>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Small page-local helpers                                            */
/* ------------------------------------------------------------------ */

function OrbitIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-full items-center justify-center rounded-full border border-border bg-card text-foreground shadow-glow-sm">
      {children}
    </span>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="label-caps text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
