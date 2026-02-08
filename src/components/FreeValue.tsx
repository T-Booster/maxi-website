"use client";

import { motion } from "framer-motion";
import {
  Salad,
  Moon,
  Droplets,
  Dumbbell,
  Sun,
  Snowflake,
} from "lucide-react";

const tips = [
  {
    icon: Salad,
    category: "Nutrition",
    title: "Top T-Boosting Foods",
    description:
      "Learn which everyday foods naturally optimize your hormone levels — and which ones secretly suppress them.",
  },
  {
    icon: Moon,
    category: "Sleep",
    title: "Sleep Optimization Protocols",
    description:
      "Science-backed techniques to improve deep sleep — the #1 factor in natural hormone production.",
  },
  {
    icon: Droplets,
    category: "Hydration",
    title: "Hydration & Hormone Health",
    description:
      "How your water intake and alcohol consumption directly impact your health markers.",
  },
  {
    icon: Dumbbell,
    category: "Training",
    title: "Workout Strategies",
    description:
      "The best exercise types, durations, and intensities for maximum hormonal benefit.",
  },
  {
    icon: Sun,
    category: "Lifestyle",
    title: "Sunshine & Vitamin D",
    description:
      "Why 15 minutes of daily sunlight could be the simplest health hack you're not doing.",
  },
  {
    icon: Snowflake,
    category: "Recovery",
    title: "Cold Exposure Benefits",
    description:
      "The science behind cold showers and ice baths for hormonal health and mental resilience.",
  },
];

export default function FreeValue() {
  return (
    <section id="free-value" className="py-24 md:py-32 relative">
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
            Free Weekly Tips
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            Get Value <span className="text-gradient">Before</span> the App
            Launches
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Join the waitlist and receive free, science-backed health education
            every week. Here&apos;s a taste of what you&apos;ll learn:
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-surface border border-surface-border rounded-2xl p-6 hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <tip.icon size={18} className="text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {tip.category}
                </span>
              </div>
              <h3 className="text-base font-bold mb-2">{tip.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary-light transition-colors pulse-green"
          >
            Get Free Tips — Join the Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
