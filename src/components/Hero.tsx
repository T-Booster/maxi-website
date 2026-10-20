"use client";

import { motion } from "framer-motion";
import StoreLink from "./StoreLink";
import Phone from "./Phone";
import { AppleMark, PlayMark } from "./StoreMarks";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden bg-grid-dark">
      <div className="absolute inset-0 bg-radial-glow-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center min-h-[calc(100vh-9rem)]">
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
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-7 text-white"
            >
              Get fit.
              <br />
              <span className="text-gradient">Level up.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-dark-muted max-w-xl mb-10 leading-relaxed"
            >
              Scan your meals, log your workouts and score your physique. Every
              workout, meal and streak earns XP, so you can see yourself level
              up and race your friends to the top.
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
                <AppleMark className="w-5 h-5" />
                Download on the App Store
              </StoreLink>
              <StoreLink
                store="play"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#09090f] font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                <PlayMark className="w-5 h-5" />
                Get it on Google Play
              </StoreLink>
            </motion.div>
          </div>

          {/* Two real screens, slightly fanned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center h-[460px] sm:h-[560px] md:h-[640px]"
          >
            <div className="absolute w-[170px] sm:w-[230px] md:w-[270px] -translate-x-[45%] sm:-translate-x-[38%] translate-y-6 -rotate-6 opacity-90">
              <Phone src="/screens/food.webp" alt="FunFit food scan result with calories and macros" />
            </div>
            <div className="absolute w-[190px] sm:w-[250px] md:w-[290px] translate-x-[28%] sm:translate-x-[30%] rotate-3 animate-float">
              <Phone
                src="/screens/home.webp"
                alt="FunFit home screen with calories left, macros, water and today's streak"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
