"use client";

import { motion } from "framer-motion";
import { Shield, HeartPulse, Activity, UserCheck } from "lucide-react";

const stats = [
  {
    number: "24/7",
    label: "Awake Supervision",
    description:
      "Continuous around-the-clock vigilant care, monitoring, and proactive safety.",
    icon: Activity,
  },
  {
    number: "100%",
    label: "Individualized Care",
    description:
      "Meticulously mapped ADL and medication plans customized per resident.",
    icon: Shield,
  },
  {
    number: "RN",
    label: "Clinical Direction",
    description:
      "Direct Registered Nurse management ensuring rigorous professional standards.",
    icon: UserCheck,
  },
  {
    number: "365",
    label: "Annual Continuity",
    description:
      "Uninterrupted operational support for permanent and respite placement.",
    icon: HeartPulse,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function StatsSection() {
  return (
    <div className="w-full bg-white px-6 py-12">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto bg-[#035346] rounded-[2.5rem] lg:rounded-[3.5rem] p-12 lg:p-20 shadow-xl relative overflow-hidden"
      >
        {/* Premium Structural Design Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#DD844B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10 divider-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center px-2 relative group"
              >
                {/* Dynamic Contextual Floating Icon Overlay */}
                <div className="absolute -top-6 text-white/[0.03] group-hover:text-[#DD844B]/10 transition-colors duration-500 transform scale-[2.5] pointer-events-none">
                  <IconComponent strokeWidth={1} />
                </div>

                {/* Main Metric Callout */}
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#DD844B] tracking-tight drop-shadow-sm selection:bg-[#DD844B]/20">
                  {stat.number}
                </h3>

                {/* Structured Text Anchor */}
                <p className="mt-4 text-white font-bold text-sm sm:text-base tracking-wide uppercase">
                  {stat.label}
                </p>

                {/* Micro-Prose Validation Block */}
                <p className="mt-2 text-white/70 text-xs sm:text-sm font-normal leading-relaxed max-w-[220px]">
                  {stat.description}
                </p>

                {/* Elegant Mobile/Desktop Structural Border Separation */}
                {index < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-white/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}
