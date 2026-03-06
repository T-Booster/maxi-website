"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    image: "/mockups/3.png",
    title: "Workout Tracking",
    description:
      "Log runs, walks, rides, hikes, swims, and gym sessions. Track duration, distance, and intensity with Apple Health integration.",
  },
  {
    image: "/mockups/4.png",
    title: "AI Food Scanner",
    description:
      "Snap a photo, chat with AI, or browse the USDA database. Multiple ways to log your meals with instant nutrition analysis.",
  },
  {
    image: "/mockups/5.png",
    title: "Health Insights",
    description:
      "Your daily readiness score across nutrition, workouts, sleep, and more. See exactly where you stand and what to improve.",
  },
  {
    image: "/mockups/6.png",
    title: "AI Food Analysis",
    description:
      "Every scan gives you a T-Impact Score, full macro breakdown, calories, protein, carbs, and fats. Powered by USDA-verified data.",
  },
  {
    image: "/mockups/7.png",
    title: "Hormone Optimization Score",
    description:
      "A personalized 0-100 score tracking your natural optimization level across sleep, nutrition, and lifestyle factors.",
  },
  {
    image: "/mockups/8.png",
    title: "Daily Challenges & Home",
    description:
      "Daily wisdom, active challenges, and your personalized dashboard. Stay on track with gamified habits across 7 categories.",
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
