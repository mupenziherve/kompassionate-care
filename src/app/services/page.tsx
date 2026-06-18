"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Clock,
  HeartPulse,
  Brain,
  ShieldPlus,
  Activity,
  ClipboardCheck,
  Utensils,
  Pill,
  Sparkles,
  UserCheck,
  Home,
  Users,
  MessageSquare,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FADE_UP_ANIMATION: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const specializedServices = [
  {
    icon: Clock,
    title: "24-Hour Care & Supervision",
    description:
      "Professional support is available day and night, providing safety, comfort, and peace of mind for residents and families.",
    href: "/services/24-hour-care",
  },
  {
    icon: ShieldPlus,
    title: "Memory Care Support",
    description:
      "Specialized support for individuals living with Alzheimer’s disease and other memory-related conditions in a structured, reassuring environment.",
    href: "/services/memory-care",
  },
  {
    icon: Brain,
    title: "Behavioral Health Support",
    description:
      "Compassionate care that promotes emotional well-being, stability, confidence, and meaningful daily living.",
    href: "/services/behavioral-health",
  },
  {
    icon: HeartPulse,
    title: "Hospice Support",
    description:
      "Comfort-focused care that honors dignity, supports families, and provides compassionate guidance during life’s most sensitive moments.",
    href: "/services/hospice-support",
  },
  {
    icon: Activity,
    title: "Physical & Occupational Therapy Support",
    description:
      "Working alongside therapy professionals to encourage mobility, strength, independence, and confidence in daily activities.",
    href: "/services/therapy-support",
  },
];

const generalServices = [
  {
    icon: Utensils,
    title: "Home-Cooked Meals",
    description:
      "Nutritious, delicious meals prepared fresh daily in our home kitchen. We accommodate dietary needs and preferences, and residents are welcome to enjoy meals together in our dining area.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Our trained caregivers ensure medications are taken correctly and on schedule. We coordinate with healthcare providers and pharmacies to manage prescriptions safely.",
  },
  {
    icon: Sparkles,
    title: "Activities & Engagement",
    description:
      "We encourage an active, engaged lifestyle with daily activities suited to each resident's interests and abilities. From puzzles and games to gardening and crafts, there's always something to enjoy.",
  },
  {
    icon: UserCheck,
    title: "Personal Care Assistance",
    description:
      "Respectful assistance with daily living activities including bathing, dressing, grooming, and mobility support—always preserving dignity and encouraging independence.",
  },
  {
    icon: Home,
    title: "Housekeeping & Laundry",
    description:
      "A clean, comfortable home is essential. We handle all housekeeping and laundry so residents can simply relax and enjoy their home.",
  },
  {
    icon: Users,
    title: "Companionship",
    description:
      "Perhaps most importantly, we provide genuine companionship. Our caregivers take time to know each resident personally, sharing conversations, activities, and daily moments together.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] min-h-screen">
        {/* HERO HEADER DISPLAY (Structured to match Gallery page setup) */}
        <section className="relative h-[460px] sm:h-[520px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
              alt="Compassionate Care and Support Scene"
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent opacity-100" />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-[#035346]/90 backdrop-blur-md rounded-[2rem] p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#DD844B]" />
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase block">
                What We Offer
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight tracking-wide">
                Our Professional <br />
                <span className="italic text-[#DD844B]">
                  Care & Support Services
                </span>
              </h1>
              <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed font-light">
                Providing comprehensive support while respecting each resident's
                unique independence, safety, and human dignity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* DATA CONTAINER PLATFORM */}
        <section className="pb-24 lg:pb-32 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section 1: Clinical Care Tracks */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-stone-200/50 border border-stone-200/40 mb-12">
              <div className="max-w-3xl mb-16">
                <span className="text-[#DD844B] font-bold text-xs tracking-[3px] uppercase">
                  Specialized Frameworks
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#035346] font-normal tracking-wide">
                  Clinical Care Specializations
                </h2>
                <p className="mt-4 text-stone-600 text-base leading-relaxed">
                  Meticulously planned frameworks designed for medical
                  stability, continuous security supervision, and advanced
                  wellness management.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {specializedServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={FADE_UP_ANIMATION}
                      className="bg-[#FAF8F4] rounded-2xl p-8 border border-stone-200/40 flex flex-col justify-between hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-[#035346] text-white flex items-center justify-center shadow-sm">
                          <Icon size={20} />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-[#035346] tracking-tight">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-stone-600 text-sm leading-relaxed font-normal">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-stone-200/30">
                        <Link
                          href={service.href}
                          className="text-xs font-bold text-[#DD844B] tracking-wider uppercase hover:text-[#c8743d] transition-colors inline-flex items-center gap-1"
                        >
                          <span>View Details</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Referral Placement Callout Block */}
                <motion.div
                  variants={FADE_UP_ANIMATION}
                  className="bg-gradient-to-br from-[#035346] to-[#023b32] rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-md"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-[#DD844B] flex items-center justify-center shadow-inner">
                      <ClipboardCheck size={20} />
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                      Clinical Placement Coordination
                    </h3>
                    <p className="mt-3 text-white/80 text-sm leading-relaxed font-normal">
                      Are you a clinical case manager coordinating quick medical
                      discharge timelines or long-term care placements? We
                      communicate directly with hospitals.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center w-full bg-[#DD844B] hover:bg-[#c8743d] text-white py-3.5 px-6 rounded-xl text-xs font-bold tracking-wider uppercase shadow-md transition-colors duration-200"
                    >
                      Submit Referral Pack
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Section 2: Residential Lifestyle Care */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-stone-200/50 border border-stone-200/40">
              <div className="max-w-3xl mb-16">
                <span className="text-[#035346] font-bold text-xs tracking-[3px] uppercase">
                  Daily Living Frameworks
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#035346] font-normal tracking-wide">
                  Comprehensive Residential Support
                </h2>
                <p className="mt-4 text-stone-600 text-base leading-relaxed">
                  Every single day, we provide practical living help centered on
                  family-oriented warmth, continuous independence, and healthy
                  physical routines.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {generalServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={FADE_UP_ANIMATION}
                      className="bg-[#FAF8F4] rounded-2xl p-8 border border-stone-200/30 hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#DD844B]/10 text-[#DD844B] flex items-center justify-center shadow-xs">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-6 text-lg font-bold text-[#035346] tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-stone-500 text-sm leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Bottom CTA Action Frame */}
        <section className="py-20 bg-white border-t border-stone-200/60">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#035346] mb-4">
              Have Questions About Specific Care Arrangements?
            </h3>
            <p className="text-stone-500 text-sm sm:text-base max-w-xl mx-auto mb-10 font-light">
              Our registered clinical team is on standby to guide you through
              medical assessments and availability schedules.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#035346] hover:bg-[#023b32] text-white font-bold px-8 py-4 rounded-xl shadow-md transition-colors text-sm uppercase tracking-wider shadow-[#035346]/10"
              >
                <MessageSquare size={18} />
                <span>Send Us a Message</span>
              </Link>
              <a
                href="tel:+19713711444"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[#035346] font-bold px-8 py-4 rounded-xl border-2 border-[#035346] transition-colors text-sm uppercase tracking-wider"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
