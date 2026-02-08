"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  Activity,
  Flame,
  Trophy,
  Dumbbell,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "AI Food Scanner",
    description:
      "Point your camera at any meal. Our AI instantly identifies ingredients, calculates macros, and gives you a health optimization score.",
    highlight: "GPT-4 Vision + USDA Data",
  },
  {
    icon: Activity,
    title: "Hormone Optimization Score",
    description:
      "A personalized 0-100 score tracking your daily progress across sleep, nutrition, training, lifestyle, and consistency.",
    highlight: "5 Health Pillars",
  },
  {
    icon: Flame,
    title: "Daily Challenges",
    description:
      "Sugar detox, cold showers, screen-free nights, workout routines — gamified challenges that build real habits.",
    highlight: "7 Challenge Categories",
  },
  {
    icon: Trophy,
    title: "XP & Leaderboard",
    description:
      "Earn XP from food scans, workouts, and challenge completions. Level up through 30 tiers and compete globally.",
    highlight: "30 Levels to Unlock",
  },
  {
    icon: Dumbbell,
    title: "Workout & Sleep Tracking",
    description:
      "Integrated with Apple Health. Track workouts, sleep quality, steps, and active calories — all feeding your optimization score.",
    highlight: "Apple Health Sync",
  },
  {
    icon: Brain,
    title: "AI Health Chat",
    description:
      "Ask anything about nutrition, hormones, or supplements. Get personalized answers backed by real nutritional science data.",
    highlight: "ChatGPT-Powered",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            Everything You Need to{" "}
            <span className="text-gradient">Maximize</span> Your Health
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            AI-powered food analysis, hormone tracking, gamified challenges, and
            a global leaderboard — all in one beautifully designed app.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-surface border border-surface-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-300 hover:glow-green-sm"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={22} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Highlight Badge */}
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {feature.highlight}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
