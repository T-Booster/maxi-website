"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    image: "/mockups/3.png",
    title: "AI Food Scanner",
    description:
      "Point your camera at any meal. Get instant nutrition data, macros, and a hormone optimization score powered by USDA-verified data.",
  },
  {
    image: "/mockups/4.png",
    title: "Hormone Optimization Score",
    description:
      "A personalized 0-100 score tracking your daily progress across sleep, nutrition, training, lifestyle, and consistency.",
  },
  {
    image: "/mockups/5.png",
    title: "Daily Challenges",
    description:
      "Sugar detox, cold showers, screen-free nights, workout routines — gamified challenges across 7 categories that build real habits.",
  },
  {
    image: "/mockups/6.png",
    title: "XP & Leaderboard",
    description:
      "Earn XP from food scans, workouts, and challenge completions. Level up through 30 tiers and compete on the global leaderboard.",
  },
  {
    image: "/mockups/7.png",
    title: "Workout & Sleep Tracking",
    description:
      "Integrated with Apple Health. Track workouts, sleep quality, steps, and active calories — all feeding your optimization score.",
  },
  {
    image: "/mockups/8.png",
    title: "AI Health Chat",
    description:
      "Ask anything about nutrition, hormones, or supplements. Get personalized answers backed by real nutritional science data.",
  },
];

export default function AppShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Explore <span className="text-gradient">MAXI AI</span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl">
            Track your nutrition, optimize your hormones, and get AI-powered insights
            that help you take control of your health.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-8 overflow-x-auto hide-scrollbar px-6 pb-4"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex-shrink-0 w-[280px]">
              <div className="phone-frame w-full mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full aspect-[9/19.5] object-cover bg-dark-surface"
                />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Buttons */}
        <div className="flex gap-3 px-6 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
