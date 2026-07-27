"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import * as Icons from "lucide-react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export interface UnifiedService {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string;
  badge?: string;
  programType: "clinical" | "daily";
}

interface ServicesClientProps {
  clinicalPrograms: UnifiedService[];
  dailyServices: UnifiedService[];
}

// Dynamically retrieves Lucide Icon component with PascalCase fallback
function DynamicIcon({ name, size = 26 }: { name: string; size?: number }) {
  if (!name) return <Icons.Sparkles size={size} strokeWidth={1.75} />;

  // Formats string to PascalCase (e.g., "clock" -> "Clock", "heart-pulse" -> "HeartPulse")
  const formattedName = name
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  const IconComponent =
    (Icons as Record<string, React.ElementType>)[formattedName] ||
    (Icons as Record<string, React.ElementType>)[name] ||
    Icons.Sparkles;

  return <IconComponent size={size} strokeWidth={1.75} />;
}

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesClient({
  clinicalPrograms,
  dailyServices,
}: ServicesClientProps) {
  const [activeTab, setActiveTab] = useState<"all" | "clinical" | "daily">(
    "all",
  );

  return (
    <section className="pb-24 lg:pb-32 -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Pill Navigation */}
        <div className="bg-white rounded-[2rem] p-3 shadow-xl border border-stone-200/50 mb-12 flex flex-wrap items-center justify-center sm:justify-between gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400 pl-4 hidden sm:block">
            Care Programs:
          </span>
          <div className="flex gap-2 w-full sm:w-auto">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "clinical", label: "Clinical & Specialized" },
              { id: "daily", label: "Daily Living & Wellness" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as "all" | "clinical" | "daily")
                }
                className={`flex-1 sm:flex-initial py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#035346] text-white shadow-md"
                    : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: CLINICAL & SPECIALIZED PROGRAMS */}
        {(activeTab === "all" || activeTab === "clinical") && (
          <div className="mb-20">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[#DD844B] text-xs font-bold tracking-[3px] uppercase block mb-1">
                RN-Supervised Healthcare
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#035346]">
                Specialized Medical & Clinical Care
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl font-light">
                Directly linked to our admissions intake and customized care
                planning for complex health needs.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {clinicalPrograms.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </div>
        )}

        {/* SECTION 2: DAILY LIVING & RESIDENTIAL SUPPORT */}
        {(activeTab === "all" || activeTab === "daily") && (
          <div>
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[#DD844B] text-xs font-bold tracking-[3px] uppercase block mb-1">
                Warm Residential Environment
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#035346]">
                Daily Living & Residential Support
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl font-light">
                Promoting everyday comfort, home-style dining, safety, and
                continuous engagement.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {dailyServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: UnifiedService }) {
  const highlights = Array.isArray(service.highlights)
    ? service.highlights
    : [];

  return (
    <motion.div
      id={service.id}
      variants={cardVariants}
      className="group relative bg-white rounded-[2.2rem] p-8 sm:p-10 border border-stone-200/80 hover:border-[#035346]/40 shadow-sm hover:shadow-2xl hover:shadow-[#035346]/10 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#035346]/[0.03] via-transparent to-[#DD844B]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#035346] to-[#DD844B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#035346]/10 text-[#035346] group-hover:bg-[#DD844B] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
            <DynamicIcon name={service.iconName} />
          </div>
          {service.badge ? (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#DD844B]/15 text-[#DD844B] px-3 py-1.5 rounded-full border border-[#DD844B]/20">
              {service.badge}
            </span>
          ) : (
            <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
              {service.category}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-serif text-[#035346] group-hover:text-[#023b32] transition-colors mb-1 font-medium">
          {service.title}
        </h3>
        <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B] mb-4">
          {service.subtitle}
        </p>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
          {service.description}
        </p>

        {highlights.length > 0 && (
          <ul className="space-y-2.5 pt-4 border-t border-stone-100 mb-8">
            {highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium"
              >
                <CheckCircle2 size={16} className="text-[#035346] shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href={`/contact?type=tour&service=${service.id}`}
        className="inline-flex items-center justify-between w-full pt-4 border-t border-stone-100 text-xs font-bold uppercase tracking-wider text-[#035346] group-hover:text-[#DD844B] transition-colors"
      >
        <span>
          {service.programType === "clinical"
            ? "Inquire For Care"
            : "Schedule Walkthrough"}
        </span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1.5 transition-transform"
        />
      </Link>
    </motion.div>
  );
}
