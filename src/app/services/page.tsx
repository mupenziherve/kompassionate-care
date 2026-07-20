"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const services = [
  {
    icon: Utensils,
    title: "Nutrition & Dining",
    category: "Nutrition",
    description:
      "We provide nutritious home-cooked meals through a balanced rotating menu, 24/7 healthy snacks, hydration support, and specialized diets tailored to individual health needs. Our family-style dining environment promotes comfort, dignity, social connection, and personalized nutritional support through ongoing monitoring and collaboration with healthcare providers.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    category: "Clinical Care",
    description:
      "As an RN-operated Adult Foster Home, we provide safe and coordinated medication management, ensuring accurate administration, dosing, and timing. We collaborate with healthcare providers and pharmacies, monitor effectiveness and side effects, and maintain secure documentation to support wellness and reduce medication errors.",
  },
  {
    icon: Sparkles,
    title: "Activities & Engagement",
    category: "Lifestyle",
    description:
      "We encourage an active lifestyle with daily activities suited to each resident's interests—from puzzles to crafts.",
  },
  {
    icon: UserCheck,
    title: "Personal Care Assistance",
    category: "Support",
    description:
      "Respectful assistance with daily living activities including bathing, dressing, and mobility support—preserving dignity.",
  },
  {
    icon: Home,
    title: "Housekeeping & Laundry",
    category: "Environment",
    description:
      "We provide a safe, clean, and comfortable home with clutter-free living spaces, rigorous sanitation and laundry services, secure storage of medications and hazardous materials, and built-in safety features. Our welcoming, accessible environment supports mobility, independence, emotional well-being, and peace of mind for residents and families.",
  },
  {
    icon: Users,
    title: "Companionship",
    category: "Wellness",
    description:
      "We provide genuine companionship. Caregivers take time to know each resident personally, sharing moments together.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] min-h-screen text-stone-800 font-sans antialiased selection:bg-[#035346]/10">
        {/* Hero Section */}
        <section className="relative h-[460px] sm:h-[520px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
              alt="Compassionate Care"
              fill
              priority
              className="object-cover object-center opacity-40 mix-blend-luminosity scale-105"
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
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase block mb-3">
                Our Offerings
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight tracking-wide">
                Residential Support <br />
                <span className="italic text-[#DD844B]">
                  Designed Around Life
                </span>
              </h1>
              <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed font-light opacity-90">
                Uplifting daily independence through structured assistance,
                balanced nutrition, and genuine human companionship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24 lg:pb-32 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-[2rem] p-8 border border-stone-200/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-12 h-12 rounded-xl bg-[#035346]/5 text-[#035346] flex items-center justify-center mb-6 transition-colors group-hover:bg-[#DD844B] group-hover:text-white"
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </motion.div>

                      <span className="text-[#DD844B] text-xs font-bold tracking-[2px] uppercase block mb-2">
                        {service.category}
                      </span>

                      <h2 className="text-xl font-serif font-normal text-[#035346] mb-3 tracking-wide">
                        {service.title}
                      </h2>

                      <p className="text-sm text-stone-600 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-stone-200/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#035346] mb-4">
              Seeking Personal Clarity on Room Openings?
            </h3>
            <p className="text-sm sm:text-base text-stone-600 mb-8 font-normal max-w-lg mx-auto leading-relaxed">
              Our administration coordinates scheduling and intake planning
              directly with family leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#035346] hover:bg-[#023b32] text-white font-semibold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageSquare size={16} />
                <span>Message Us</span>
              </Link>
              <a
                href="tel:+15034438325"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#035346] font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                <Phone size={16} />
                <span>Call Support</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
