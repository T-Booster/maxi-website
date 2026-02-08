"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Ready to <span className="text-gradient">Optimize</span>?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Join the waitlist today. Get free weekly health tips and be first to
            access MAXI AI when it launches.
          </p>

          <WaitlistForm />

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted/60">
            <span>✓ 100% Free to Join</span>
            <span>✓ Weekly Health Tips</span>
            <span>✓ Early Access</span>
            <span>✓ No Spam Ever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
