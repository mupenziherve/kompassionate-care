"use client";

import { motion } from "framer-motion";
import {
  Clock,
  HeartPulse,
  Brain,
  ShieldPlus,
  Activity,
  ArrowUpRight,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Clock,
    title: "24-Hour Care Services",
    description:
      "Awake, round-the-clock supervision and comprehensive assistance with activities of daily living (ADLs), ensuring safety and steady companionship.",
    href: "/services/24-hour-care",
  },
  {
    icon: HeartPulse,
    title: "Hospice Support",
    description:
      "Comfort-focused care delivered in partnership with local hospice agencies, preserving absolute dignity, pain management, and family peace of mind.",
    href: "/services/hospice-support",
  },
  {
    icon: Brain,
    title: "Behavioral Health Support",
    description:
      "Individualized, structural support plans constructed to nurture emotional wellness, cognitive stability, and balanced daily routines.",
    href: "/services/behavioral-health",
  },
  {
    icon: ShieldPlus,
    title: "Memory Support Care",
    description:
      "Specialized, highly secure care environments tailored gently for seniors navigating the sensitive progressive stages of Dementia and Alzheimer's.",
    href: "/services/memory-care",
  },
  {
    icon: Activity,
    title: "Therapy & Recovery Support",
    description:
      "Dedicated restorative support for mobility, strength building, and coordinated post-surgical or illness rehabilitation routines.",
    href: "/services/therapy-support",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f6f6f3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#035346]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs">
            Our Care Specializations
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15] font-normal">
            Personalized Care Frameworks Built Around Every Resident
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            We provide a licensed ecosystem of comprehensive care services
            meticulously optimized for comfort, physical safety, and holistic
            cognitive well-being.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#035346]/5 text-[#035346] flex items-center justify-center group-hover:bg-[#035346] group-hover:text-white transition-all duration-300 ease-in-out shrink-0">
                    <Icon
                      size={24}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#035346] tracking-wide">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-500 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-[#035346]/40 group-hover:text-[#DD844B] transition-colors duration-300">
                  <span className="uppercase tracking-wider">
                    Explore Care Protocol
                  </span>
                  <div className="transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-[#035346] to-[#023b32] rounded-[2rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-white/5 relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#DD844B] flex items-center justify-center shrink-0">
                <ClipboardCheck size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white tracking-wide">
                Hospital & Case Manager Placement
              </h3>

              <p className="mt-4 text-white/80 text-sm leading-relaxed font-normal">
                Seeking a seamless, licensed residential option for short-term
                respite transitions, medical discharges, or long-term placement?
                We coordinate directly with clinical teams.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-[#DD844B] hover:bg-[#c8743d] text-white py-3.5 px-6 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors duration-200 shadow-sm"
              >
                <span>Submit Referral Pack</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
