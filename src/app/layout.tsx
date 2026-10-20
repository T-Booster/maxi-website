import type { Metadata } from "next";
import "./globals.css";

const description =
  "Scan your meals, log your workouts and score your physique. Every workout, meal and streak earns XP. Race your friends up the leaderboard. On the App Store and Google Play.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.funfit.ai"),
  title: "FunFit. Get fit. Level up.",
  description,
  keywords: [
    "fitness app",
    "calorie counter",
    "AI food scanner",
    "macro tracker",
    "workout tracker",
    "body scan",
    "physique score",
    "fitness leaderboard",
    "gamified fitness",
  ],
  openGraph: {
    title: "FunFit. Get fit. Level up.",
    description,
    type: "website",
    locale: "en_US",
    siteName: "FunFit",
    images: [{ url: "/screens/home.webp", width: 660, height: 1434, alt: "The FunFit app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FunFit. Get fit. Level up.",
    description,
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
