import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FunFit. Coaches that train you.",
  description:
    "Chat with four AI coaches for plans and guidance. Scan meals for instant macros, score your physique with body scans, and build real habits. Download on the App Store and Google Play.",
  keywords: [
    "AI fitness coach",
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
    title: "FunFit. Coaches that train you.",
    description:
      "Four AI coaches you can chat with for plans and guidance. Scan meals, hit your macros, level up.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FunFit. Coaches that train you.",
    description:
      "Four AI coaches you can chat with for plans and guidance. Scan meals, hit your macros, level up.",
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
        <link rel="icon" href="/funfitlogo.png" />
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
