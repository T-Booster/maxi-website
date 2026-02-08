"use client";

import { motion } from "framer-motion";
import { UserPlus, Mail, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Join the Waitlist",
    description:
      "Enter your email above. It takes 5 seconds and you'll be first in line when we launch.",
  },
  {
    icon: Mail,
    step: "02",
    title: "Get Free Weekly Tips",
    description:
      "We'll send you science-backed health optimization tips every week. Real value, zero fluff, completely free.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Get Early Access",
    description:
      "When MAXI AI launches, waitlist members get exclusive early access, a special discount, and priority support.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-surface/50">
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
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            Three Simple <span className="text-gradient">Steps</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Join the community now and be ready when we launch.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Step Number Circle */}
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-2xl bg-surface border border-surface-border flex items-center justify-center mx-auto relative z-10">
                  <step.icon size={28} className="text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center z-20">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
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
