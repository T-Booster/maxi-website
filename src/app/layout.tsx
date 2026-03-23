import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FunFit AI — Optimize Your Health with AI",
  description:
    "The AI-powered health app that scans your food, tracks your hormones, and gamifies your wellness journey. Download on the App Store.",
  keywords: [
    "health app",
    "AI nutrition",
    "testosterone optimization",
    "hormone tracking",
    "food scanner",
    "wellness",
    "fitness",
    "gamified health",
  ],
  openGraph: {
    title: "FunFit AI — Optimize Your Health with AI",
    description:
      "Scan food. Track hormones. Level up your health. Download now.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FunFit AI — Optimize Your Health with AI",
    description:
      "Scan food. Track hormones. Level up your health. Download now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/maxilogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
