"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ShieldAlert,
  Clock,
  Fingerprint,
  Home,
} from "lucide-react";

const promises = [
  {
    icon: Fingerprint,
    title: "Dignity",
    description:
      "Preserving personal identity, privacy, and absolute self-worth in every moment.",
  },
  {
    icon: ShieldAlert,
    title: "Respect",
    description:
      "Honoring choices, boundaries, and individual preferences unconditionally.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Delivering empathetic, gentle care from a place of deep understanding.",
  },
  {
    icon: Clock,
    title: "Patience",
    description:
      "Providing a calm, unhurried space where residents set their own natural pace.",
  },
  {
    icon: Sparkles,
    title: "Professional Excellence",
    description:
      "Rigorous clinical nursing oversight ensuring safety and optimal health outcomes.",
  },
  {
    icon: Home,
    title: "Family-Like Care",
    description:
      "Creating an environment wrapped in the genuine warmth and safety of home.",
  },
];

export default function CareApproach() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] text-[#035346] relative overflow-hidden">
      {/* Structural Visual Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#DD844B]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#035346]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Centered Luxury Header Block */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-[1px] w-8 bg-[#DD844B]" />
            <p className="text-[#DD844B] uppercase tracking-[4px] text-xs font-bold">
              Our Promise
            </p>
            <span className="h-[1px] w-8 bg-[#DD844B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#035346] leading-[1.2] font-normal tracking-wide">
            Every resident who enters our home will be treated with:
          </h2>
        </div>

        {/* Premium 3-Column Symmetrical Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
          {promises.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                  ease: [0.215, 0.61, 0.355, 1.0],
                }}
                className="group bg-white hover:bg-[#035346] p-6 rounded-2xl shadow-[0_4px_25px_rgba(3,83,70,0.02)] border border-[#035346]/5 transition-all duration-300 flex flex-col items-start hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-[#035346]/5 group-hover:bg-white/10 p-3 rounded-xl shrink-0 text-[#035346] group-hover:text-[#DD844B] transition-colors duration-300 mb-4">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide text-[#035346] group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 group-hover:text-stone-200/80 text-sm mt-2 leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Centered Blockquote Signature Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-stone-200/80 flex flex-col items-center gap-4 w-full max-w-2xl text-center"
        >
          <div className="bg-[#DD844B]/10 px-4 py-1.5 rounded-lg text-[#DD844B] text-xs font-bold uppercase tracking-widest w-fit">
            The Core Philosophy
          </div>
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#035346] italic font-light tracking-wide leading-relaxed">
            “Because every life has a story worth honoring.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
