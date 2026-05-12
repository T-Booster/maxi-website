"use client";

import { motion } from "framer-motion";

type CoachTag = "MOST POPULAR" | "NEW" | "LEGEND" | "IFBB PRO";

interface Coach {
  id: string;
  name: string;
  photo: string;
  title: string;
  specialty: string;
  tag?: CoachTag;
}

// Source of truth for the eight coaches who live inside the FunFit gym.
// Photos sit in /public/coaches/*.jpg. Tag chips mirror the in-app palette:
// orange for popular, green for new, yellow for legend.
const coaches: Coach[] = [
  {
    id: "geldi",
    name: "Geldi Zhara",
    photo: "/coaches/geldi.jpg",
    title: "BODYBUILDER",
    specialty: "Strength and form",
    tag: "NEW",
  },
  {
    id: "heath",
    name: "Heath Blessing",
    photo: "/coaches/heath.jpg",
    title: "STRENGTH COACH",
    specialty: "Foundations",
  },
  {
    id: "eddie",
    name: "Eddie Hall",
    photo: "/coaches/eddie.jpg",
    title: "WORLD'S STRONGEST",
    specialty: "Strength and power",
    tag: "MOST POPULAR",
  },
  {
    id: "eric",
    name: "Ericthgt",
    photo: "/coaches/eric.jpg",
    title: "ATHLETE",
    specialty: "Conditioning",
  },
  {
    id: "johny",
    name: "Johny Munster",
    photo: "/coaches/johny.jpg",
    title: "BODYBUILDER",
    specialty: "Mass building",
  },
  {
    id: "freddie",
    name: "Freddie McGowan",
    photo: "/coaches/freddie.jpg",
    title: "COACH",
    specialty: "Discipline",
  },
  {
    id: "greg",
    name: "Greg Doucette",
    photo: "/coaches/greg.jpg",
    title: "IFBB PRO",
    specialty: "Cutting and physique",
    tag: "LEGEND",
  },
  {
    id: "sash",
    name: "Sash",
    photo: "/coaches/sash.jpg",
    title: "TRAINER",
    specialty: "Conditioning",
  },
];

// Map each tag to its chip styling. Mirrors the in-app palette so the
// website feels like a continuation of the app, not a separate brand.
function tagStyles(tag?: CoachTag): { bg: string; fg: string } {
  switch (tag) {
    case "MOST POPULAR":
      return { bg: "bg-primary", fg: "text-white" };
    case "NEW":
      return { bg: "bg-emerald-500", fg: "text-white" };
    case "LEGEND":
      return { bg: "bg-amber-400", fg: "text-[#09090f]" };
    case "IFBB PRO":
      return { bg: "bg-white/15", fg: "text-white" };
    default:
      return { bg: "bg-white/10", fg: "text-white" };
  }
}

export default function Coaches() {
  return (
    <section
      id="coaches"
      className="py-24 md:py-32 bg-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-glow-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-medium mb-6">
            8 AI Coaches
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Pick the voice that{" "}
            <span className="text-gradient">pushes you</span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl leading-relaxed">
            Each coach has their own personality, training style, and voice.
            Walk up to one inside the gym, talk shop, get a plan, get sent to
            the right machine.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, i) => {
            const tag = tagStyles(coach.tag);
            return (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="group relative rounded-2xl bg-dark-surface border border-dark-border overflow-hidden hover:border-primary/40 transition-colors"
              >
                {coach.tag && (
                  <span
                    className={`absolute top-4 right-4 z-10 ${tag.bg} ${tag.fg} text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full`}
                  >
                    {coach.tag}
                  </span>
                )}
                <div className="aspect-[4/5] w-full overflow-hidden bg-dark-surface">
                  <img
                    src={coach.photo}
                    alt={`${coach.name}, ${coach.title.toLowerCase()}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-white font-bold text-lg leading-tight">
                    {coach.name}
                  </div>
                  <div className="text-primary text-[11px] font-black tracking-widest mt-1">
                    {coach.title}
                  </div>
                  <div className="text-dark-muted text-sm mt-2">
                    {coach.specialty}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-dark-muted/70 text-sm text-center mt-12"
        >
          More coaches added regularly. Switch between them any time inside the
          app.
        </motion.p>
      </div>
    </section>
  );
}
