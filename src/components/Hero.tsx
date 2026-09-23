"use client";

import { motion } from "framer-motion";
import StoreLink from "./StoreLink";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden bg-grid-dark">
      <div className="absolute inset-0 bg-radial-glow-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">
                Now on the App Store &amp; Google Play
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-white"
            >
              Coaches that train you,
              <br />
              <span className="text-gradient">not just track you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-xl mb-10 leading-relaxed"
            >
              Chat with four AI coaches for plans and guidance. Scan meals
              for instant macros, score your physique with body scans, and
              level up while building real habits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
            >
              <StoreLink
                store="apple"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#09090f] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </StoreLink>
              <StoreLink
                store="play"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#09090f] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </StoreLink>
              <a
                href="#coaches"
                className="inline-flex items-center justify-center px-8 py-4 border border-dark-border text-white font-semibold rounded-full hover:bg-white/5 transition-colors text-sm"
              >
                Meet the Coaches
              </a>
            </motion.div>
          </div>

          {/* Right: app screenshot, alone, centered in the column. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="phone-frame w-[260px] md:w-[300px] animate-float">
              <img
                src="/mockups/home.webp"
                alt="FunFit home screen with daily health score, macros and today's plan"
                className="w-full aspect-[9/19.5] object-cover bg-dark-surface"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
