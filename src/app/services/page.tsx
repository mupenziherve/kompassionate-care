"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
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

const services = [
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] min-h-screen text-stone-800 font-sans antialiased selection:bg-[#035346]/10">
        <section className="relative h-[360px] sm:h-[400px] w-full overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
              alt="Compassionate Care Context Setup"
              className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl bg-[#035346]/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DD844B]" />
              <span className="text-[#DD844B] text-xs font-bold tracking-[3px] uppercase block mb-2">
                Our Offerings
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-normal text-white leading-tight tracking-wide">
                Residential Support <br />
                <span className="italic text-[#DD844B]">
                  Designed Around Life
                </span>
              </h1>
              <p className="mt-3 text-stone-200 text-xs sm:text-sm leading-relaxed font-light opacity-90">
                Uplifting daily independence through structured assistance,
                balanced nutrition, and genuine human companionship.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 lg:pb-32 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col items-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#035346]/20 hover:shadow-[0_22px_45px_rgba(3,83,70,0.07)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#035346]/5 text-[#035346] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#DD844B] group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#DD844B]/20">
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <h2 className="mt-5 text-base sm:text-lg font-bold text-[#035346] tracking-tight transition-colors duration-300">
                      {service.title}
                    </h2>

                    <p className="mt-2.5 text-stone-500 text-xs sm:text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-stone-200/40 relative">
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h3 className="font-serif text-xl sm:text-2xl text-[#035346] mb-3 font-normal tracking-wide">
              Seeking Personal Clarity on Room Openings or Onboarding?
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-light">
              Our administration coordinates scheduling, layout viewing
              arrangements, and intake planning directly with family leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#035346] hover:bg-[#023b32] text-white font-semibold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-[#035346]/10 transition-colors duration-200"
              >
                <MessageSquare size={14} />
                <span>Send Us a Message</span>
              </Link>
              <a
                href="tel:+19713711444"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[#035346] font-bold px-6 py-3.5 rounded-xl border-2 border-[#035346] text-xs uppercase tracking-wider transition-colors duration-200"
              >
                <Phone size={14} />
                <span>Call Community Support</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
