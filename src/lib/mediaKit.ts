// Everything the /media page offers, in one place. The page renders its files, colors,
// descriptions and facts from this, and the kit ZIP (src/lib/mediaKitZip.ts) and its
// README are built from it, so those cannot drift apart. The one thing kept in two places
// is the icon rules: the illustrated cards are in the page, and logoRules below is their
// plain-text summary for the README. Change them together.
//
// Files live in /public/media. The screens there are PNG copies of /public/screens/*.webp
// (same pixels, a format video editors open); when a screen changes, re-export its PNG.
// Keep every sentence to what the site already says about the app.

export const KIT_ZIP_PATH = "/media/funfit-media-kit.zip";
export const KIT_ZIP_NAME = "funfit-media-kit.zip";

export const CONTACT_EMAIL = "support@funfit.ai";
export const APP_LINK = "https://www.funfit.ai/go";
export const APP_LINK_LABEL = "funfit.ai/go";

export interface KitImage {
  /** Path under /public, which is also the URL. */
  file: string;
  /** File name inside the ZIP and for a single download. */
  name: string;
  title: string;
  note: string;
  width: number;
  height: number;
}

export const logos: KitImage[] = [
  {
    file: "/media/funfit-app-icon-1024.png",
    name: "funfit-app-icon-1024.png",
    title: "App icon",
    note: "Use it wherever you show or mention FunFit: thumbnails, video overlays, end cards and articles.",
    width: 1024,
    height: 1024,
  },
  {
    file: "/media/funfit-app-icon-512.png",
    name: "funfit-app-icon-512.png",
    title: "App icon, small",
    note: "The same icon at half the size, for profile pictures and small spots.",
    width: 512,
    height: 512,
  },
];

export interface KitScreen extends KitImage {
  /** The lighter WebP the page itself shows. */
  preview: string;
}

function screen(slug: string, title: string, note: string, height = 1434): KitScreen {
  return {
    file: `/media/screens/funfit-${slug}.png`,
    name: `funfit-${slug}.png`,
    preview: `/screens/${slug}.webp`,
    title,
    note,
    width: 660,
    height,
  };
}

export const screens: KitScreen[] = [
  screen("home", "Home", "Calories and macros left, steps, water and today's workout."),
  screen("food-log", "Log a meal", "Scan food, chat with AI, browse the food database, pick a saved recipe or get a meal suggestion."),
  screen("food", "Food scan result", "A scanned breakfast with its calories, protein, carbs and fat."),
  screen("food-items", "Scan breakdown", "Each food in the meal, with its portion and calories."),
  screen("food-chat", "AI food chat", "Logging a lunch by describing it."),
  screen("meals", "Today's meals", "The meals logged today."),
  screen("workout", "Active workout", "Sets, reps and weights, with a rest timer."),
  screen("activity", "Activities", "Routines, gym workouts, runs, walks, hikes, climbs, rides and swims."),
  screen("plan", "Plan generator", "An AI workout or meal plan built around your goal."),
  screen("bodyscan", "AI Body Scan", "A full scan or a quick one, with earlier scores below."),
  screen("journey", "XP journey", "XP for the week, the avatar collection and XP milestones."),
  // The leaderboard shot is left out on purpose. It shows the crew's faces and handles,
  // and their consent covers our own website and store pages, not reuse by anyone who
  // downloads this kit. It is also a designed screen rather than a capture. To offer it,
  // confirm with the four of them, re-export its PNG and add:
  //   screen("leaderboard", "Leaderboard", "The XP leaderboard, with the FunFit crew at the top.", 1431),
  screen("groups", "Groups", "Community groups and messages."),
];

export interface KitColor {
  name: string;
  hex: string;
  rgb: string;
  note: string;
  /** Swatch needs a visible edge on the dark page. */
  outlined?: boolean;
}

// The website's own theme tokens (src/app/globals.css).
export const colors: KitColor[] = [
  { name: "Orange", hex: "#E8601C", rgb: "232, 96, 28", note: "Our main color: labels, badges and highlights." },
  { name: "Deep orange", hex: "#C94E14", rgb: "201, 78, 20", note: "The dark end of our gradient." },
  { name: "Light orange", hex: "#F0854A", rgb: "240, 133, 74", note: "The light end of our gradient, and links on dark backgrounds." },
  { name: "Ink", hex: "#09090F", rgb: "9, 9, 15", note: "The dark background of our website.", outlined: true },
  { name: "Panel", hex: "#12121A", rgb: "18, 18, 26", note: "Cards and panels on the dark background.", outlined: true },
  { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", note: "Text on dark, and our light sections." },
];

export const GRADIENT_CSS = "linear-gradient(135deg, #C94E14 0%, #E8601C 50%, #F0854A 100%)";

export const nameRules = {
  write: "FunFit",
  not: ["Fun Fit", "Funfit", "Fun-Fit", "FunFit AI"],
};

export const about = {
  short:
    "FunFit is a fitness app that turns training and eating well into a game. Scan your meals, log your workouts and score your physique. Every workout, meal and streak earns XP. On iPhone and Android.",
  long:
    "FunFit is a fitness app that turns training and eating well into a game. Log a meal with a photo, your voice or a barcode, and it works out the calories and macros. Save your workout routines, follow AI workout and meal plans, and track runs, walks, hikes, rides and swims. An AI body scan scores your physique and estimates your body fat from photos. Workouts, meals and streaks all earn XP, with levels, leaderboards and groups to keep you going. FunFit is on the App Store and Google Play. It is not a medical device, and its numbers are estimates.",
};

export const facts: { label: string; value: string }[] = [
  { label: "Name", value: "FunFit" },
  { label: "Company", value: "INFLUOGEN LLC, Florida, United States" },
  { label: "Available on", value: "iPhone and Android" },
  { label: "Price", value: "Subscription. The price for each country is shown in the store." },
  { label: "Languages", value: "12" },
  { label: "Website", value: "funfit.ai" },
];

export const logoRules: string[] = [
  "Use the app icon as it is. Change only its size.",
  "Keep clear space around it, at least a quarter of its width on every side.",
  "Show it at 32 px or larger.",
  "Don't recolor it, stretch it, tilt it, crop it, redraw it or add effects.",
];

export const brandRules: string[] = [
  "Don't suggest that we sponsor, endorse or partner with you unless we do.",
  "Don't build our name or icon into your own product name, logo, domain or social handle.",
  "Don't put them on merchandise without asking us first.",
];

export const contentRules: { ok: boolean; title: string; body: string }[] = [
  {
    ok: true,
    title: "Show the real app",
    body: "Use these screens or your own recordings of FunFit. Crop, zoom and place them in a phone frame as you like.",
  },
  {
    ok: true,
    title: "Say when it's an ad",
    body: "If your post is paid or gifted, label it as an ad, as your platform and local rules require.",
  },
  {
    ok: false,
    title: "Don't change what a screen shows",
    body: "No edited numbers, and no features or results the app doesn't have.",
  },
  {
    ok: false,
    title: "Don't promise results",
    body: "FunFit is not a medical device and its numbers are estimates. Don't say it guarantees weight loss, muscle gain or any health outcome.",
  },
];

export const PERMISSION =
  "You may use these files to talk about FunFit or to link to our app, as long as you follow these rules. Our name and icon stay ours, and we may change these rules or withdraw permission at any time.";
