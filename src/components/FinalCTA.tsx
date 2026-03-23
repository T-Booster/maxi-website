"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden" id="newsletter">
      <div className="absolute inset-0 bg-radial-glow-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="phone-frame w-[260px] md:w-[300px] animate-float">
              <img
                src="/mockups/12.png"
                alt="FunFit AI App"
                className="w-full aspect-[9/19.5] object-cover bg-dark-surface"
              />
            </div>
          </motion.div>

          {/* Right: CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Stay in the <span className="text-gradient">Loop</span>
            </h2>
            <p className="text-dark-muted text-lg mb-10 max-w-lg">
              Get the latest feature updates, health articles, and optimization
              tips delivered straight to your inbox.
            </p>

            <WaitlistForm />

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-dark-muted">
              <span>&#10003; Feature Updates</span>
              <span>&#10003; Health Articles</span>
              <span>&#10003; No Spam Ever</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
