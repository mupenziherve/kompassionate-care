"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ShieldPlus,
  Brain,
  HeartPulse,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Clock,
    title: "24-Hour Care & Supervision",
    description:
      "Professional support available day and night, providing safety, absolute comfort, and peace of mind.",
  },
  {
    icon: ShieldPlus,
    title: "Memory Care Support",
    description:
      "Specialized support for individuals living with Alzheimer’s and dementia in a reassuring environment.",
  },
  {
    icon: Brain,
    title: "Behavioral Health Support",
    description:
      "Compassionate care promoting emotional well-being, stability, confidence, and daily fulfillment.",
  },
  {
    icon: HeartPulse,
    title: "Hospice Support",
    description:
      "Comfort-focused care honoring dignity and supporting families through life’s sensitive milestones.",
  },
  {
    icon: Activity,
    title: "Therapy Support",
    description:
      "Encouraging mobility, physical strength, self-reliance, and security in day-to-day coordination.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF8F4] relative overflow-hidden">
      {/* ================= BACKGROUND IMAGE ECOSYSTEM ================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/your-custom-hero-image.png"
          alt="Services Decorative Texture"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4] via-[#FAF8F4]/20 to-[#FAF8F4]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4] via-transparent to-[#FAF8F4]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Context Block */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 lg:max-w-md">
            <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs px-3 py-1.5 bg-[#035346]/5 rounded-md border border-[#035346]/10">
              Our Services
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#035346] leading-[1.2] font-normal tracking-wide">
              Comprehensive Support Built Around Dignity
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              At Kompassionatecare, we provide continuous, professional care
              systems while unconditionally respecting and uplifting each
              resident's individual independence.
            </p>

            <div className="pt-2 w-full sm:w-auto">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#DD844B] hover:bg-[#c8743d] text-white rounded-full text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <span>View All Services</span>
                <ArrowRight
                  size={15}
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Contrast Solid Dark Cards Matrix (No Links) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4 w-full"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`group h-full ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="bg-[#035346] rounded-2xl p-6 border border-white/5 shadow-[0_10px_30px_rgba(3,83,70,0.15)] flex flex-col items-start h-full transition-all duration-500 ease-[0.16,1,0.3,1] hover:bg-[#045d4e] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(3,83,70,0.3)]">
                    {/* Icon Module */}
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:bg-[#DD844B] group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#DD844B]/30">
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    {/* Typography Layout */}
                    <h3 className="mt-5 text-base sm:text-lg font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-[#DD844B]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-stone-300/90 text-xs sm:text-sm leading-relaxed font-light transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
