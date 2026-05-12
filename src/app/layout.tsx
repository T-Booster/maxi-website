import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FunFit AI. The gym with AI coaches.",
  description:
    "Step into a 3D gym where 8 AI coaches actually train you. Get plans built for your body, scan meals for instant macros, and build real habits. Download on the App Store.",
  keywords: [
    "AI fitness coach",
    "3D fitness app",
    "AI gym",
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
    title: "FunFit AI. The gym with AI coaches.",
    description:
      "A 3D gym where 8 AI coaches actually train you. Scan meals, hit your macros, level up.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FunFit AI. The gym with AI coaches.",
    description:
      "A 3D gym where 8 AI coaches actually train you. Scan meals, hit your macros, level up.",
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
