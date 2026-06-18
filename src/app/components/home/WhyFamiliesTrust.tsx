"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Registered Nurse Managed",
    description:
      "Continuous clinical oversight ensures changes in health are caught early and addressed with professional medical competence.",
  },
  {
    icon: Award,
    title: "Premium Living Space",
    description:
      "A pristine, highly secure environment designed to offer both luxury comfort and absolute structural safety.",
  },
  {
    icon: Users,
    title: "High Caregiver Ratio",
    description:
      "Our dedicated staffing structure ensures your loved one receives rapid, unhurried attention whenever they need it.",
  },
  {
    icon: HeartHandshake,
    title: "An Intentional Family",
    description:
      "We are family-owned and values-driven. We foster deep emotional ties, real friendships, and genuine belonging.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WhyFamiliesTrust() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs px-3 py-1.5 bg-[#035346]/5 rounded-md inline-block mb-4">
            Unwavering Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#035346] tracking-wide leading-tight">
            Why Discerning Families <br />
            <span className="italic text-[#DD844B]">Choose Our Home</span>
          </h2>
          <p className="mt-4 text-stone-500 text-sm sm:text-base font-light max-w-xl mx-auto">
            We understand the weight of your decision. We have structured our
            entire operational framework to give you total peace of mind.
          </p>
        </div>

        {/* Content Reason Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center sm:items-start text-center sm:text-left group"
              >
                {/* Minimalist Icon Block */}
                <div className="w-12 h-12 rounded-xl bg-[#035346]/5 text-[#035346] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#035346] group-hover:text-white">
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                {/* Typography block */}
                <h3 className="text-base sm:text-lg font-bold text-[#035346] tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
