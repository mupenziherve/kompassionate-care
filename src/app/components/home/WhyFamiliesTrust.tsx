"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const TRUST_REASONS = [
  "Registered Nurse (RN) Led Care",
  "24-Hour Personalized Support",
  "Safe and Comfortable Home Environment",
  "Family-Centered Approach",
  "Compassionate and Experienced Caregivers",
  "Individualized Care Plans",
  "Respect for Independence and Dignity",
  "Open Communication with Families",
  "Commitment to Exceptional Quality of Life",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as any, // Fixed TypeScript build error
    },
  },
};

export default function WhyFamiliesTrust() {
  return (
    <section className="py-16 lg:py-20 bg-[#035346] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="space-y-3">
              <span className="uppercase tracking-[3px] text-xs font-bold text-[#DD844B] block">
                Why Families Trust Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-[1.2] tracking-wide">
                Care Built Around Trust, Comfort & Dignity
              </h2>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-light">
                Every resident receives personalized support in a home
                environment where families find total peace of mind,
                consistency, and highly professional coordination.
              </p>
            </div>

            <div className="relative pt-[75%] sm:pt-[55%] lg:pt-[80%] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#023b32] group">
              <img
                src="/yeah.jpg"
                alt="Kompassionate Care Community Standard"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-103"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-[#035346]/90 backdrop-blur-sm py-2.5 px-4 rounded-xl border border-white/10">
                <p className="text-[11px] font-bold text-white tracking-wider uppercase">
                  Kompassionate Standard
                </p>
              </div>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5 w-full"
          >
            {TRUST_REASONS.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group h-full ${
                  index === TRUST_REASONS.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="p-4.5 rounded-xl bg-white border border-stone-100 flex gap-3.5 items-center h-full transition-all duration-300 hover:shadow-lg hover:border-[#DD844B]/20">
                  <div className="w-8 h-8 rounded-lg bg-[#035346]/10 text-[#035346] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-[#DD844B] group-hover:text-white">
                    <CircleCheck size={16} strokeWidth={2.5} />
                  </div>

                  <p className="text-[#035346] font-semibold text-xs sm:text-sm tracking-tight">
                    {reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
