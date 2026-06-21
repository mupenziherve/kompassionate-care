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
      "Preserving personal identity and absolute self-worth in every moment.",
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
      "Rigorous clinical nursing oversight ensuring safety and optimal health.",
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
    <section className="py-16 lg:py-20 bg-[#FAF8F5] text-[#035346] relative overflow-hidden border-t border-stone-200/30">
      {/* Structural Ambient Glow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#DD844B]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Fixed Luxury Copy Block (Saves huge vertical space) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 lg:max-w-md">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#DD844B]" />
              <p className="text-[#DD844B] uppercase tracking-[3px] text-xs font-bold">
                Our Promise
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#035346] leading-[1.25] font-normal tracking-wide">
              Every resident who enters our home will be treated with absolute
              devotion.
            </h2>

            {/* Re-positioned Core Philosophy (Integrated directly instead of occupying its own row at the bottom) */}
            <div className="pt-6 border-t border-stone-200 w-full">
              <span className="text-xs font-bold text-[#DD844B] uppercase tracking-wider block mb-2">
                The Core Philosophy
              </span>
              <p className="font-serif text-lg text-[#035346]/90 italic font-light leading-relaxed">
                “Because every life has a story worth honoring.”
              </p>
            </div>
          </div>

          {/* Right Column: High-Density Micro-Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 w-full">
            {promises.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group bg-white hover:bg-[#035346] p-5 rounded-2xl border border-stone-200/50 shadow-xs transition-all duration-300 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="bg-[#035346]/5 group-hover:bg-white/10 p-2.5 rounded-xl shrink-0 text-[#035346] group-hover:text-[#DD844B] w-fit transition-colors duration-300">
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold tracking-tight text-stone-800 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 group-hover:text-stone-200/80 text-xs sm:text-sm mt-1 leading-relaxed transition-colors duration-300 font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
