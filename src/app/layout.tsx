import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAXI AI — Optimize Your Health with AI",
  description:
    "The AI-powered health app that scans your food, tracks your hormones, and gamifies your wellness journey. Join the waitlist for early access.",
  keywords: [
    "health app",
    "AI nutrition",
    "testosterone optimization",
    "hormone tracking",
    "food scanner",
    "wellness",
    "fitness",
  ],
  openGraph: {
    title: "MAXI AI — Optimize Your Health with AI",
    description:
      "Scan food. Track hormones. Level up your health. Join the waitlist.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAXI AI — Optimize Your Health with AI",
    description:
      "Scan food. Track hormones. Level up your health. Join the waitlist.",
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
