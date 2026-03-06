"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is MAXI AI?",
    answer:
      "MAXI AI is an AI-powered health optimization app that combines food scanning, hormone tracking, gamified challenges, and a global leaderboard. It helps you understand and improve your health through science-backed insights and verified nutritional data.",
  },
  {
    question: "How does the AI food scanner work?",
    answer:
      "Point your camera at any meal and our AI instantly identifies ingredients, calculates macros and calories, and gives you a hormone optimization score. All data is cross-referenced with the USDA FoodData Central database for accuracy. You can also scan barcodes or search foods manually.",
  },
  {
    question: "What is the Hormone Optimization Score?",
    answer:
      "It's a personalized 0-100 score that tracks your daily progress across five health pillars: sleep, nutrition, training, lifestyle, and consistency. Every food scan, workout, and challenge completion feeds into your score, giving you a clear picture of your overall optimization.",
  },
  {
    question: "Is MAXI AI free to use?",
    answer:
      "MAXI AI offers both free and premium tiers. Core features like food scanning and basic tracking are available for free. Premium unlocks AI-generated meal and workout plans, advanced analytics, and additional features to accelerate your health journey.",
  },
  {
    question: "What challenges are available?",
    answer:
      "MAXI AI includes 7 challenge categories: Nutrition (sugar detox), Sleep (screen-free nights), Hydration (alcohol-free), Sport (workout routines), Sunshine (outdoor time), Stress (cold exposure), and discipline challenges. Each has daily checklists, streak tracking, and XP rewards.",
  },
  {
    question: "How does the leveling system work?",
    answer:
      "You earn XP from food scans, workouts, and completing daily challenges. Progress through 30 levels across 5 tiers — Wood, Bronze, Silver, Gold, and Diamond. Compete on global leaderboards and track your growth over time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-foreground mb-12"
        >
          FAQs
        </motion.h2>

        <div className="divide-y divide-surface-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="py-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <span className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
