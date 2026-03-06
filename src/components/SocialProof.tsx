"use client";

import { motion } from "framer-motion";
import { Zap, Trophy, Target, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Zap, value: "6+", label: "AI-Powered Features" },
  { icon: Trophy, value: "30", label: "Levels to Master" },
  { icon: Target, value: "7", label: "Challenge Categories" },
  { icon: ShieldCheck, value: "USDA", label: "Verified Data" },
];

export default function Mission() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-surface-border text-sm text-muted font-medium mb-8">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Built for Those Who Want{" "}
              <span className="text-gradient">More</span> From Their Health
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Most health apps give you numbers. MAXI AI gives you understanding.
              We combine AI-powered food analysis with hormone tracking, gamified
              challenges, and science-backed insights so you don&apos;t just track
              your health, you optimize it.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Whether it&apos;s scanning your meals for their hormonal impact, competing
              on global leaderboards, or building daily habits that compound,
              MAXI AI is your all-in-one health optimization platform.
            </p>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-surface border border-surface-border rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={22} className="text-primary" />
                </div>
                <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
