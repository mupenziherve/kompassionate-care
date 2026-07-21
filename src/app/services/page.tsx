"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Clock,
  Brain,
  ShieldPlus,
  HeartPulse,
  Activity,
  UserCheck,
  Utensils,
  Pill,
  Sparkles,
  Home,
  Users,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
  badge?: string;
}

// 1. Specialized Clinical & Medical Programs (Matches Footer & Contact Links)
const SPECIALIZED_PROGRAMS: ServiceItem[] = [
  {
    id: "service-24hr",
    category: "24/7 Clinical Care",
    title: "24-Hour Care & Supervision",
    subtitle: "Continuous Professional Oversight",
    description:
      "Our RN-operated home provides round-the-clock monitoring and dedicated caregiving support. We maintain constant vigilance day and night, ensuring resident safety, immediate medical response, assistance with nighttime routines, and peace of mind for families.",
    highlights: [
      "24/7 Awake Staffing & Monitoring",
      "Nighttime Checks & Mobility Support",
      "Emergency Medical Response System",
    ],
    icon: Clock,
    badge: "Most Requested",
  },
  {
    id: "service-memory",
    category: "Dementia & Alzheimer's",
    title: "Memory Care Support",
    subtitle: "Structured & Safe Environment",
    description:
      "Specialized care plans tailored for individuals living with Alzheimer's, dementia, and cognitive changes. We utilize structured daily routines, gentle redirection techniques, memory enhancement activities, and secure living spaces to foster familiarity and confidence.",
    highlights: [
      "Tailored Memory Enhancement Routines",
      "Symptom Management & Redirection",
      "Secure, Clutter-Free Sanctuary",
    ],
    icon: Brain,
  },
  {
    id: "service-behavioral",
    category: "Specialized Behavioral Care",
    title: "Behavioral Health Support",
    subtitle: "Empathetic & De-escalating Care",
    description:
      "Empathetic, structured support designed for residents requiring behavioral guidance, emotional regulation, and psychological wellness. Our trained staff applies evidence-based de-escalation, individualized coping routines, and close coordination with mental health professionals.",
    highlights: [
      "Individualized Behavior Care Plans",
      "Positive Behavioral Interventions",
      "Close Collaboration with Therapists",
    ],
    icon: ShieldPlus,
  },
  {
    id: "service-hospice",
    category: "Palliative & Comfort",
    title: "Hospice Support",
    subtitle: "Dignified End-of-Life Care",
    description:
      "Comfort-focused palliative support in full collaboration with licensed hospice agencies. We prioritize physical comfort, pain management, emotional peace, and spiritual support, allowing residents to spend their time surrounded by love, dignity, and family.",
    highlights: [
      "Hospice Agency Coordinated Care",
      "Symptom & Pain Management",
      "Family Emotional Support & Privacy",
    ],
    icon: HeartPulse,
  },
  {
    id: "service-therapy",
    category: "Rehabilitation Support",
    title: "Physical & Occupational Therapy Support",
    subtitle: "Restorative Mobility & Strength",
    description:
      "Collaborative support for physical, occupational, and speech therapy routines prescribed by visiting therapists. We encourage daily exercises, gait training, fall-prevention routines, and adaptive equipment usage to maintain maximum physical independence.",
    highlights: [
      "Visiting Therapist Assistance",
      "Daily Mobility & Exercise Routines",
      "Fall Prevention & Safety Equipment",
    ],
    icon: Activity,
  },
  {
    id: "service-dd",
    category: "Adaptive Support",
    title: "Developmental Disabilities (DD) Support",
    subtitle: "Skills Building & Person-Centered Care",
    description:
      "Individualized residential support for adults with developmental disabilities. We empower residents through skill development, community integration, social engagement, personal advocacy, and structured daily living assistance suited to individual abilities.",
    highlights: [
      "Person-Centered Living Plans",
      "Life Skill & Autonomy Development",
      "Social Integration & Activities",
    ],
    icon: UserCheck,
  },
];

// 2. Foundational Daily Living Services
const DAILY_LIVING_SERVICES: ServiceItem[] = [
  {
    id: "service-nutrition",
    category: "Nutritional Health",
    title: "Nutrition & Family Dining",
    subtitle: "Chef-Prepared Balanced Meals",
    description:
      "Nutritious, home-cooked meals prepared daily using fresh ingredients. We offer balanced rotating menus, 24/7 healthy snacks, personalized hydration tracking, and specialized dietary accommodations (diabetic, low-sodium, pureed) managed under clinical guidance.",
    highlights: [
      "Home-Cooked Rotating Menus",
      "Specialized Diet Accommodations",
      "Family-Style Social Dining",
    ],
    icon: Utensils,
  },
  {
    id: "service-medication",
    category: "Clinical Administration",
    title: "Medication Management",
    subtitle: "RN Oversight & Precision Timing",
    description:
      "Comprehensive medication administration operated under Registered Nurse oversight. We handle prescription orders, pharmacy deliveries, dosage tracking, side-effect monitoring, and meticulous documentation to ensure absolute safety and adherence.",
    highlights: [
      "RN Oversight & Dose Auditing",
      "Pharmacy Integration & Delivery",
      "Secure Digital Logging & Records",
    ],
    icon: Pill,
  },
  {
    id: "service-housekeeping",
    category: "Environment & Safety",
    title: "Housekeeping & Sanitization",
    subtitle: "Pristine & Safe Living Quarters",
    description:
      "Rigorous cleaning, sanitation, and fresh laundry services tailored to maintain a healthy environment. Living quarters are kept pristine, clutter-free, and sanitized, with safety features like grab bars and zero-threshold transitions.",
    highlights: [
      "Daily Cleaning & Sanitization",
      "Personalized Laundry & Linen Service",
      "Safe, Barrier-Free Environment",
    ],
    icon: Home,
  },
  {
    id: "service-personal-care",
    category: "Dignified Support",
    title: "Personal Care Assistance",
    subtitle: "Respectful Daily Living Help",
    description:
      "Gentle, respectful assistance with activities of daily living (ADLs), including bathing, dressing, grooming, hygiene, and mobility transfer. Our caregivers treat every resident with the utmost respect, preserving dignity at every interaction.",
    highlights: [
      "Bathing, Grooming & Dressing",
      "Transfer & Incontinence Support",
      "Dignity-Preserving Caregiving",
    ],
    icon: Sparkles,
  },
  {
    id: "service-companionship",
    category: "Mental Wellness",
    title: "Companionship & Social Life",
    subtitle: "Warm, Family-Centered Bonds",
    description:
      "Meaningful human connection and social engagement. Caregivers build genuine relationships with residents through conversations, games, arts and crafts, outdoor garden walks, music, and seasonal celebration events.",
    highlights: [
      "Daily One-on-One Engagement",
      "Arts, Crafts, Games & Music",
      "Outdoor Garden & Porch Relaxation",
    ],
    icon: Users,
  },
];

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

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "clinical" | "daily">(
    "all",
  );

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] min-h-screen text-stone-800 font-sans antialiased selection:bg-[#035346]/10">
        {/* HERO HEADER SECTION */}
        <section className="relative h-[480px] sm:h-[560px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
              alt="Kompassionate Care Professional Services"
              fill
              priority
              className="object-cover object-center opacity-35 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent opacity-100" />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-[#035346]/90 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2.5 h-full bg-[#DD844B]" />
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase block mb-3">
                Comprehensive Care Disciplines
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-[1.15] tracking-wide">
                Specialized Support <br />
                <span className="italic text-[#DD844B]">
                  Tailored for Dignity
                </span>
              </h1>
              <p className="mt-4 text-stone-200 text-base sm:text-lg leading-relaxed font-light opacity-95">
                From 24-hour clinical supervision and memory care to home-cooked
                nutrition and genuine companionship, our RN-operated home
                supports every dimension of life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICE FILTER & GRID CONTAINER */}
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
                    onClick={() => setActiveTab(tab.id as any)}
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
                  {SPECIALIZED_PROGRAMS.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        id={service.id}
                        variants={cardVariants}
                        className="group relative bg-white rounded-[2.2rem] p-8 sm:p-10 border border-stone-200/80 hover:border-[#035346]/40 shadow-sm hover:shadow-2xl hover:shadow-[#035346]/10 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2"
                      >
                        {/* Hover Ambient Glow Accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#035346]/[0.03] via-transparent to-[#DD844B]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#035346] to-[#DD844B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div>
                          {/* Header Line */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-[#035346]/10 text-[#035346] group-hover:bg-[#DD844B] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                              <IconComponent size={26} strokeWidth={1.75} />
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

                          {/* Titles */}
                          <h3 className="text-2xl font-serif text-[#035346] group-hover:text-[#023b32] transition-colors mb-1 font-medium">
                            {service.title}
                          </h3>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B] mb-4">
                            {service.subtitle}
                          </p>

                          {/* Description */}
                          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                            {service.description}
                          </p>

                          {/* Bullet Highlights */}
                          <ul className="space-y-2.5 pt-4 border-t border-stone-100 mb-8">
                            {service.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="text-[#035346] shrink-0"
                                />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Card Footer Action */}
                        <Link
                          href={`/contact?type=tour&service=${service.id}`}
                          className="inline-flex items-center justify-between w-full pt-4 border-t border-stone-100 text-xs font-bold uppercase tracking-wider text-[#035346] group-hover:text-[#DD844B] transition-colors"
                        >
                          <span>Inquire For Care</span>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1.5 transition-transform"
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
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
                  {DAILY_LIVING_SERVICES.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        id={service.id}
                        variants={cardVariants}
                        className="group relative bg-white rounded-[2.2rem] p-8 sm:p-10 border border-stone-200/80 hover:border-[#035346]/40 shadow-sm hover:shadow-2xl hover:shadow-[#035346]/10 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2"
                      >
                        {/* Hover Ambient Glow Accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#035346]/[0.03] via-transparent to-[#DD844B]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#035346] to-[#DD844B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-[#035346]/10 text-[#035346] group-hover:bg-[#DD844B] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                              <IconComponent size={26} strokeWidth={1.75} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
                              {service.category}
                            </span>
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

                          <ul className="space-y-2.5 pt-4 border-t border-stone-100 mb-8">
                            {service.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="text-[#035346] shrink-0"
                                />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href="/contact?type=tour"
                          className="inline-flex items-center justify-between w-full pt-4 border-t border-stone-100 text-xs font-bold uppercase tracking-wider text-[#035346] group-hover:text-[#DD844B] transition-colors"
                        >
                          <span>Schedule Walkthrough</span>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1.5 transition-transform"
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            )}
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section className="py-20 border-t border-stone-200/60 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-[#DD844B] text-xs font-bold tracking-[3px] uppercase block mb-3">
              Direct Family Support
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#035346] mb-4">
              Have Questions About Room Availability or Custom Care Plans?
            </h2>
            <p className="text-base sm:text-lg text-stone-600 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
              Our Registered Nurse manager coordinates directly with families to
              discuss individual care needs, room options, and facility tours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=tour"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#035346] hover:bg-[#023b32] text-white font-semibold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Calendar size={16} />
                <span>Book Private Tour</span>
              </Link>
              <a
                href="tel:+15034438325"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#035346] font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                <Phone size={16} />
                <span>Call Care Manager: (503) 443-8325</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
