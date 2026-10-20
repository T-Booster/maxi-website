"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is FunFit?",
    answer:
      "FunFit is a fitness app that turns training and eating well into a game. You log meals and workouts, scan your physique, and earn XP for everything you do, with streaks, levels, leaderboards and groups to keep you going. It's on iPhone and Android.",
  },
  {
    question: "How does the food scanner work?",
    answer:
      "Take a photo of your meal, describe it by voice, or scan a barcode. For a photo or a description, AI estimates the foods, portions, calories and macros. For a barcode, the numbers come from the product's nutrition data (Open Food Facts or USDA), not from AI. Estimates can be off, so every number can be changed before you log it.",
  },
  {
    question: "What happens to my body scan photos?",
    answer:
      "They stay on your phone. To score them, the app sends them to our AI provider, which returns the result; FunFit does not keep a copy on its servers. Only your scores are saved to your account. A photo is only ever shown to other people if you choose to post it yourself.",
  },
  {
    question: "How much does FunFit cost?",
    answer:
      "FunFit is a subscription app. The price for your country is shown in the App Store or Google Play before you pay, and you can cancel any time in your Apple or Google account settings.",
  },
  {
    question: "Does it work with Apple Health?",
    answer:
      "Yes. FunFit reads steps, workouts and sleep from Apple Health on iPhone and from Health Connect on Android, with your permission. It never writes to them.",
  },
  {
    question: "How do XP and levels work?",
    answer:
      "You earn XP for logging workouts and meals and for keeping your streak. XP is about showing up, not how much you lift. It moves you up levels and up the leaderboards, which run for today, the last 7 days and all time. The top three each week go into the Hall of Fame.",
  },
  {
    question: "Is FunFit medical advice?",
    answer:
      "No. FunFit is not a medical device and its numbers are estimates. Talk to a doctor or a qualified professional before making big changes to your diet or training.",
  },
  {
    question: "How do I get help or delete my account?",
    answer:
      "Email support@funfit.ai. You can delete your account inside the app under Settings, or from the delete-account page on our support site.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-foreground mb-12"
        >
          Questions
        </motion.h2>

        <div className="divide-y divide-surface-border">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <span className="text-lg font-semibold text-foreground pr-8">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted leading-relaxed pt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
