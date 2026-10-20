"use client";

import { motion } from "framer-motion";
import Phone from "./Phone";

const steps = [
  {
    image: "/screens/plan.webp",
    title: "Tell FunFit your goal",
    description:
      "Build muscle, lose fat, get stronger or stay fit. Your answers set your daily calories, macros and water, and shape a workout plan around the days you can train.",
  },
  {
    image: "/screens/home.webp",
    title: "Log your day",
    description:
      "Scan your meals, record your workouts and tap in your water. Home shows what's left for today at a glance.",
  },
  {
    image: "/screens/leaderboard.webp",
    title: "Level up",
    description:
      "Earn XP, keep your streak alive and climb the leaderboard. Scan your physique every few weeks to see the change.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-surface-border bg-white text-sm text-muted font-medium mb-6">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Three steps. <span className="text-gradient">Every day.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-14 md:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <Phone src={step.image} alt={step.title} light className="w-[240px] mx-auto mb-8" />
              <div className="text-primary text-xs font-black tracking-[0.2em] mb-2">STEP {i + 1}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
