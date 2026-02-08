"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Heart, Users } from "lucide-react";

const stats = [
  { icon: Zap, value: "6+", label: "Core AI Features" },
  { icon: Heart, value: "5", label: "Health Pillars Tracked" },
  { icon: Shield, value: "USDA", label: "Verified Nutrition Data" },
  { icon: Users, value: "Global", label: "Leaderboard Competition" },
];

export default function SocialProof() {
  return (
    <section className="py-20 relative bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white border border-surface-border card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={22} className="text-primary" />
              </div>
              <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-surface-border card-shadow">
            <Shield size={18} className="text-primary" />
            <span className="text-sm text-muted">
              Built with real nutritional science. No pseudoscience. No fads.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
