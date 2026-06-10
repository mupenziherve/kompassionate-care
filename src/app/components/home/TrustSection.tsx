"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "RN-Operated Safety",
    description:
      "Led directly by a Registered Nurse, ensuring high-standard clinical oversight, medication management, and daily peace of mind.",
  },
  {
    icon: Clock,
    title: "Continuous 24/7 Support",
    description:
      "Round-the-clock awake care and watchful supervision designed for safety, steady companionship, and immediate assistance.",
  },
  {
    icon: HeartHandshake,
    title: "Dignified Care Culture",
    description:
      "Personalized, warm support delivered in a high-comfort, residential setting where independence is valued and preserved.",
  },
  {
    icon: Users,
    title: "Family-Centered Alignment",
    description:
      "We work hand-in-hand with families, case managers, and discharge planners to engineer a seamless long-term care journey.",
  },
];

// Motion configurations for smooth entry cascades
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafaf9] relative overflow-hidden">
      {/* Structural Accent Blur Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#035346]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Value Proposition */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start">
            <span className="text-[#DD844B] font-semibold uppercase tracking-[3px] text-xs">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15] font-normal">
              Why Families & Professionals Trust Us
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Kompassionate Care bridges the gap between clinical excellence and
              the warmth of a true family environment. We provide a licensed,
              secure refuge tailored to support seniors navigating memory,
              dignity, and recovery.
            </p>

            {/* Quick Context CTA */}
            <div className="mt-8 group flex items-center gap-3 cursor-pointer">
              <span className="text-sm font-bold text-[#035346] border-b-2 border-[#035346]/20 group-hover:border-[#DD844B] pb-1 transition-colors duration-200">
                Learn more about our standards
              </span>
              <div className="bg-[#035346] text-white p-2 rounded-full group-hover:bg-[#DD844B] transition-colors duration-200">
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* Right Column: Premium Staggered Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8 items-start"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              // Apply vertical displacement to the second column on large screens
              const isEvenColumn = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden group ${
                    isEvenColumn ? "lg:translate-y-12" : ""
                  }`}
                >
                  {/* Subtle Top Slide Hover Bar Accent */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#DD844B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Icon Wrapper Component */}
                  <div className="w-14 h-14 rounded-2xl bg-[#035346]/5 text-[#035346] flex items-center justify-center group-hover:bg-[#035346] group-hover:text-white transition-all duration-300 ease-in-out">
                    <Icon
                      size={24}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#035346] tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="mt-3.5 text-gray-500 text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
