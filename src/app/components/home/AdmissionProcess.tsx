"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: PhoneCall,
    stepNumber: "01",
    title: "Initial Connection",
    description:
      "Reach out to our team to share your family's story, ask questions about availability, and schedule a private guided tour of our sanctuary.",
  },
  {
    icon: ClipboardCheck,
    stepNumber: "02",
    title: "Clinical Care Assessment",
    description:
      "Our Registered Nurse, Gisele BSN RN, conducts a thoughtful, comprehensive evaluation to design a care plan customized to your loved one’s lifestyle.",
  },
  {
    icon: Home,
    stepNumber: "03",
    title: "A Warm Welcome Home",
    description:
      "We coordinate closely with hospital discharge teams, medical providers, and family members to ensure a seamless, stress-free move-in day.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function AdmissionProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-stone-100">
      <div
        className="absolute inset-0 bg-[radial-gradient(#035346_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs px-3 py-1.5 bg-[#DD844B]/10 rounded-md inline-block">
            Simple & Transparent
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-[#035346] leading-[1.2] font-normal tracking-wide">
            How to Get Started with Us
          </h2>
          <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
            We understand that choosing a care setting is a significant family
            transition. We make our onboarding journey warm, clear, and
            thoroughly supportive.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative bg-[#FAF8F4] border border-stone-200/40 rounded-3xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:shadow-stone-200/30 transition-all duration-300 min-h-[320px]"
              >
                <span className="absolute top-6 right-8 font-serif text-4xl font-normal text-stone-200/80 group-hover:text-[#DD844B]/20 transition-colors duration-300">
                  {step.stepNumber}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#035346]/5 text-[#035346] flex items-center justify-center shadow-xs transition-colors duration-300 group-hover:bg-[#035346] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-stone-800 tracking-tight group-hover:text-[#035346] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#035346] hover:bg-[#023b32] text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-[#035346]/10 transition-all duration-300 transform hover:scale-[1.02] group"
          >
            <span>Begin Admission Inquiry</span>
            <ArrowRight
              size={15}
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
