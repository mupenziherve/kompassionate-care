"use client";

import { Heart, ShieldCheck, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    text: "Care delivered with kindness and understanding.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Excellence",
    text: "Nurse-led support with attention to every detail.",
  },
  {
    icon: Users,
    title: "Family-Like Care",
    text: "Residents are treated like part of our family.",
  },
  {
    icon: Sparkles,
    title: "Dignity & Respect",
    text: "Every person's story is valued and honored.",
  },
];

export default function CareApproach() {
  return (
    <section className="py-28 bg-[#035346] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#DD844B] uppercase tracking-[3px] text-xs font-bold">
            Our Promise
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">
            More than care. A true sense of home.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                }}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-white/10 backdrop-blur rounded-3xl p-7"
              >
                <Icon size={32} className="text-[#DD844B]" />

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
