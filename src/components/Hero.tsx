"use client";

import { motion } from "framer-motion";

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
                Now Available on the App Store
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-white"
            >
              Your Health,
              <br />
              <span className="text-gradient">Maximized by AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-muted max-w-xl mb-10 leading-relaxed"
            >
              Scan your meals with AI. Track your hormone optimization score.
              Complete daily challenges. Level up your wellness, all in one app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://apps.apple.com/lb/app/maxi-ai-maximize-your-health/id6754610107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#09090f] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border border-dark-border text-white font-semibold rounded-full hover:bg-white/5 transition-colors text-sm"
              >
                Explore Features
              </a>
            </motion.div>
          </div>

          {/* Right: Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center lg:justify-end"
          >
            <div className="relative">
              <div className="phone-frame w-[240px] md:w-[270px] animate-float">
                <img
                  src="/mockups/1.png"
                  alt="MAXI AI - Home Dashboard"
                  className="w-full aspect-[9/19.5] object-cover bg-dark-surface"
                />
              </div>
              <div className="phone-frame w-[240px] md:w-[270px] absolute top-12 left-40 md:left-48 animate-float-delayed">
                <img
                  src="/mockups/2.png"
                  alt="MAXI AI - Food Scanner"
                  className="w-full aspect-[9/19.5] object-cover bg-dark-surface"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
