import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "fomo-style design system",
  description:
    "Starter design system: dark cosmic fintech look with lowercase display type, pill buttons and a violet glow.",
};

export const viewport: Viewport = {
  themeColor: "#060510",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-dvh bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
