"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// The creators who train with FunFit (owner's line-up, 2026-10-20). Photos sit in
// /public/crew/*.jpg (4:5, chosen by the owner); a card without a photo shows the initial.
// Keep the wording to what is true: these are real people and creators who work with
// FunFit, not characters inside the app.
interface Member {
  id: string;
  name: string;
  handle: string;
  href: string;
  role: string;
  photo?: string;
}

const crew: Member[] = [
  {
    id: "andy",
    name: "Andy",
    handle: "@andyandrici",
    href: "https://www.instagram.com/andyandrici/",
    role: "FunFit creator",
    photo: "/crew/andy.jpg",
  },
  {
    id: "masha",
    name: "Masha",
    handle: "@shezmasha",
    href: "https://www.instagram.com/shezmasha/",
    role: "FunFit creator",
    photo: "/crew/masha.jpg",
  },
  {
    id: "eric",
    name: "Eric English",
    handle: "@ericthgt",
    href: "https://www.ericthgt.com",
    role: "Athlete · author of The Blueprint",
    photo: "/crew/eric.jpg",
  },
  {
    id: "geldi",
    name: "Geldi Zhara",
    handle: "@geldizhara",
    href: "https://www.instagram.com/geldizhara/",
    role: "Bodybuilder",
    photo: "/crew/geldi.jpg",
  },
];

export default function Crew() {
  return (
    <section id="crew" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-surface-border text-sm text-muted font-medium mb-6">
            The FunFit crew
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-5">
            Train with the <span className="text-gradient">crew</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Athletes and creators who train with FunFit. Follow them for workouts,
            meals and the daily grind.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {crew.map((m, i) => (
            <motion.a
              key={m.id}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group block rounded-2xl bg-surface border border-surface-border overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[#1b1b24] to-[#0d0d14] flex items-center justify-center">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-7xl font-black text-gradient" aria-hidden="true">
                    {m.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-foreground font-bold text-base md:text-lg leading-tight">
                    {m.name}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-primary transition-colors flex-shrink-0"
                  />
                </div>
                <div className="text-primary text-sm font-semibold mt-0.5">{m.handle}</div>
                <div className="text-muted text-sm mt-2">{m.role}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
