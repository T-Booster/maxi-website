"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  Droplets,
  HeartPulse,
  Languages,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Phone from "./Phone";

// Every claim here is something the shipping app does. Screens are real captures
// (see Phone.tsx). Keep the copy honest: estimates are estimates, scan photos stay
// on the phone, and nothing promises a result.
interface Feature {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  shots: { src: string; alt: string }[];
}

const features: Feature[] = [
  {
    eyebrow: "Food",
    title: "Snap it. Say it. Scan it.",
    body: "Take a photo of your plate, tell the AI chat what you ate, or scan a barcode. FunFit works out the calories, protein, carbs and fat, and you can change any number before you log it.",
    points: [
      "Calories and macros left for today, always on Home",
      "Describe a meal by typing or speaking, in any language",
      "Barcode numbers come from the product's nutrition data, not from AI",
    ],
    shots: [
      { src: "/screens/food.webp", alt: "Food scan result: 550 calories, 26 g protein, 66 g carbs, 21 g fat" },
      { src: "/screens/food-chat.webp", alt: "AI food chat logging a lunch of chicken, rice and salad" },
    ],
  },
  {
    eyebrow: "Workouts",
    title: "Train with a plan, not a guess.",
    body: "Save your routines and start one in a tap, with last time's weights already filled in and a rest timer between sets. Runs, walks, hikes, climbs, rides and swims are tracked too.",
    points: [
      "Sets, reps and weights, with timed holds for planks and hangs",
      "A rest timer that tells you what's next",
      "AI workout and meal plans built around your goal and the days you can train",
    ],
    shots: [
      { src: "/screens/workout.webp", alt: "Active workout with sets, weights and a rest timer" },
      { src: "/screens/plan.webp", alt: "Plan generator with goal, experience and days per week" },
    ],
  },
  {
    eyebrow: "Body scan",
    title: "Score your physique.",
    body: "Take four photos, or one for a quick scan, and get a physique scorecard: a rating for each muscle group, a body-fat estimate and a workout plan built around your weaker areas. Scan again in a few weeks to see what changed.",
    points: [
      "Physique Score and tier, with your past scans side by side",
      "A plan built from your scan, saved to My Plans",
      "Your scan photos stay on your phone",
    ],
    shots: [{ src: "/screens/bodyscan.webp", alt: "AI Body Scan with full and quick scan and previous scores" }],
  },
  {
    eyebrow: "XP and streaks",
    title: "Every rep counts.",
    body: "Workouts, meals and streaks all earn XP. Level up, unlock avatars and work through the milestones on your way to Apex.",
    points: [
      "Daily streaks that reward showing up",
      "Your XP for every day of the week",
      "Avatars that unlock as you level up",
    ],
    shots: [{ src: "/screens/journey.webp", alt: "Weekly XP progress, avatar collection and XP milestones" }],
  },
  {
    eyebrow: "Leaderboards",
    title: "Race your rivals.",
    body: "See where you rank today, over the last 7 days and of all time, by XP or by Physique Score. The top three each week make the Hall of Fame, and a monthly challenge gives everyone a fresh start.",
    points: [
      "XP and Physique leaderboards",
      "Weekly Hall of Fame podiums",
      "Search for friends and follow them",
    ],
    shots: [{ src: "/screens/leaderboard.webp", alt: "Leaderboard podium: ericthgt, andyandrici and shezmasha, with geldizhara fourth" }],
  },
  {
    eyebrow: "Community",
    title: "Never train alone.",
    body: "Join groups for weight loss, muscle gain, nutrition and physique checks, share your workouts and meals on the Feed, and message friends directly with photos and voice notes.",
    points: [
      "Groups and group chats",
      "The Feed: workouts, meals and progress from the community",
      "Real coaches you can add and message",
    ],
    shots: [{ src: "/screens/groups.webp", alt: "Groups: Weight Loss, Muscle Gain, Physique Check and Nutrition" }],
  },
];

const extras: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Droplets, title: "Water", body: "A daily water target based on your age, weight and activity." },
  { icon: Bot, title: "AI nutrition chat", body: "Ask what to eat for dinner or how your day went, and log food just by telling it." },
  { icon: Sparkles, title: "Suggest Food", body: "AI meal ideas that fit the calories and macros you have left." },
  { icon: BookOpen, title: "My Recipes", body: "Save your meals with their nutrition and log them again in one tap." },
  { icon: HeartPulse, title: "Apple Health and Health Connect", body: "Steps, workouts and sleep come in automatically." },
  { icon: Languages, title: "12 languages", body: "English, Spanish, French, German, Japanese, Arabic and six more." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-20"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-medium mb-6">
            Inside the app
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Everything you need to <span className="text-gradient">get fit</span>, in one app
          </h2>
          <p className="text-dark-muted text-lg leading-relaxed">
            Screens from the FunFit app.
          </p>
        </motion.div>

        <div className="space-y-28 md:space-y-36">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -120px 0px" }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <div className="text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
                  {f.eyebrow}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                  {f.title}
                </h3>
                <p className="text-dark-muted text-lg leading-relaxed mb-7">{f.body}</p>
                <ul className="space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3 text-white/80">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`flex justify-center gap-5 ${i % 2 ? "lg:order-1" : ""}`}>
                {f.shots.map((s, j) => (
                  <Phone
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    className={`w-[220px] md:w-[260px] ${j === 1 ? "hidden sm:block mt-16" : ""}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-10">And there&apos;s more</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {extras.map((e) => (
              <div key={e.title} className="rounded-2xl bg-dark-surface border border-dark-border p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <e.icon size={20} className="text-primary" />
                </div>
                <div className="text-white font-bold mb-1.5">{e.title}</div>
                <p className="text-dark-muted text-sm leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
