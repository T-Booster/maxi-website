"use client";

import { motion } from "framer-motion";

const steps = [
  {
    image: "/mockups/9.png",
    title: "Scan Your Meals",
    description:
      "Use AI-powered vision to identify ingredients, calculate macros, and score your food's hormonal impact — all in seconds.",
  },
  {
    image: "/mockups/10.png",
    title: "Complete Challenges",
    description:
      "Take on daily challenges across nutrition, sleep, training, and lifestyle. Build streaks, earn XP, and develop lasting habits.",
  },
  {
    image: "/mockups/11.png",
    title: "Level Up Your Health",
    description:
      "Track your progress through 30 levels and 5 tiers. Compete on the global leaderboard and optimize your daily score.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-surface-border text-sm text-muted font-medium mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Built Around <span className="text-gradient">Your Day</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="phone-frame-light w-[260px] mx-auto mb-8">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full aspect-[9/19.5] object-cover bg-[#111]"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
