"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const TRUST_REASONS = [
  "Safe and comfortable home environment",
  "Compassionate experienced caregivers",
  "Open communication with families",
  "Respect for independence and dignity",
  "Commitment to quality of life",
  "Professional nursing oversight",
];

export default function WhyFamiliesTrust() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="uppercase tracking-[3px] text-xs font-bold text-[#DD844B]">
            Why Families Trust Us
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-[#035346] font-bold leading-tight">
            Care built around trust, comfort and dignity
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Every resident receives personalized support in a home environment
            where families find total peace of mind, consistency, and highly
            professional staff navigation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="p-6 rounded-3xl bg-[#FAF8F4] flex gap-4 items-start h-full border border-stone-100">
                <CircleCheck className="w-5 h-5 text-[#DD844B] shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium leading-normal">
                  {reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
