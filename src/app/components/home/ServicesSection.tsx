"use client";

import React, { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Clock,
  Brain,
  ShieldPlus,
  HeartPulse,
  Activity,
  UserCheck,
  Check,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

export interface ImmutableService {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly image: string;
  readonly icon: LucideIcon;
  readonly tags: readonly string[];
}

const IMMUTABLE_SERVICES_DATA: readonly ImmutableService[] = [
  {
    id: "service-24hr",
    title: "24-Hour Care & Supervision",
    category: "Continuous Support",
    description:
      "Professional support is available day and night, providing safety, comfort, and peace of mind for residents and families through round-the-clock monitoring.",
    image: "/images/services/24-hour-care.png",
    icon: Clock,
    tags: ["24/7 Monitoring", "Night Supervision", "Peace of Mind"],
  },
  {
    id: "service-memory",
    title: "Memory Care Support",
    category: "Specialized Care",
    description:
      "Specialized support for individuals living with Alzheimer’s disease and other memory-related conditions in a structured, reassuring environment.",
    image: "/images/services/memory-care.png",
    icon: Brain,
    tags: ["Alzheimer's Care", "Dementia Support", "Structured Routines"],
  },
  {
    id: "service-behavioral",
    title: "Behavioral Health Support",
    category: "Emotional Wellness",
    description:
      "Compassionate care that promotes emotional well-being, stability, confidence, and meaningful daily living tailored to individual behavioral goals.",
    image: "/images/services/behavioral-health.png",
    icon: ShieldPlus,
    tags: ["Emotional Stability", "Daily Engagement", "Personalized Care"],
  },
  {
    id: "service-hospice",
    title: "Hospice Support",
    category: "Comfort & Dignity",
    description:
      "Comfort-focused care that honors dignity, supports families, and provides compassionate guidance during life’s most sensitive moments.",
    image: "/images/services/hospice-support.png",
    icon: HeartPulse,
    tags: ["Dignity First", "Pain Management", "Family Support"],
  },
  {
    id: "service-therapy",
    title: "Physical & Occupational Therapy Support",
    category: "Rehabilitation",
    description:
      "Working alongside therapy professionals to encourage mobility, strength, independence, and confidence in daily activities.",
    image: "/images/services/physical-therapy.png",
    icon: Activity,
    tags: ["Mobility Support", "Strength Building", "Daily Function"],
  },
  {
    id: "service-dd",
    title: "Developmental Disabilities (DD) Support",
    category: "Individualized Support",
    description:
      "We provide compassionate, individualized support for residents with developmental disabilities, promoting independence, daily well-being, and safety.",
    image: "/images/services/dd-support.png",
    icon: UserCheck,
    tags: ["Adaptive Care", "Skill Building", "Community Life"],
  },
] as const;

const CONTAINER_STAGGER_PIPELINE: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const CARD_ANIMATION_PIPELINE: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function ServiceCard({ item }: { readonly item: ImmutableService }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      variants={CARD_ANIMATION_PIPELINE}
      className="relative h-[460px] w-full rounded-[2.5rem] overflow-hidden shadow-sm cursor-pointer select-none border border-stone-200/30 bg-[#035346] [will-change:transform]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-[#035346]/70 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
      </div>

      {/* Front Overlay: Default view matching AboutPreview aesthetics */}
      <div
        className={`absolute inset-0 p-8 flex flex-col justify-end z-10 transition-all duration-500 ease-[0.16,1,0.3,1] ${
          isHovered
            ? "opacity-0 pointer-events-none translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="w-10 h-10 rounded-xl bg-[#DD844B] text-white flex items-center justify-center mb-3 shadow-md">
          <Icon size={20} strokeWidth={2} />
        </div>

        <p className="text-[#DD844B] text-xs font-bold uppercase tracking-[3px]">
          {item.category}
        </p>

        <h3 className="text-white font-serif text-2xl sm:text-3xl tracking-wide font-normal leading-[1.2] mt-1">
          {item.title}
        </h3>

        <div className="w-8 h-[2px] bg-white/40 my-3 rounded-full" />

        <p className="text-stone-200 text-xs font-medium tracking-wider uppercase flex items-center gap-1.5">
          <span>Tap / Hover to View Details</span>
          <ArrowRight size={12} className="text-[#DD844B]" />
        </p>
      </div>

      {/* Back Overlay: Matched font sizes with AboutPreview narrative sections */}
      <div
        className={`absolute inset-0 p-8 flex flex-col justify-between items-start z-20 transition-all duration-500 ease-[0.16,1,0.3,1] border-2 border-[#035346]/20 rounded-[2.5rem] ${
          isHovered
            ? "opacity-100 translate-y-0 bg-gradient-to-b from-[#fdfdfb] via-[#FAF8F4] to-[#f4f6f4]"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-[#DD844B] text-xs font-bold uppercase tracking-[3px]">
              {item.category}
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#035346]/10 text-[#035346] flex items-center justify-center">
              <Icon size={18} strokeWidth={2} />
            </div>
          </div>

          <h3 className="mt-3 text-2xl sm:text-3xl font-serif text-[#035346] leading-[1.2] font-normal tracking-wide">
            {item.title}
          </h3>

          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        <div className="w-full pt-4 border-t border-stone-200/80">
          <span className="text-xs font-bold text-[#035346] uppercase tracking-wider block mb-2.5">
            Service Highlights:
          </span>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 bg-white border border-[#035346]/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-[#035346] text-xs py-1 px-2.5 rounded-full font-medium"
              >
                <Check size={10} className="text-[#DD844B] stroke-[3.5]" />
                <span>{tag}</span>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#035346] hover:text-[#DD844B] uppercase tracking-wider transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const dataset = useMemo(() => IMMUTABLE_SERVICES_DATA, []);

  return (
    <section
      className="py-24 lg:py-32 bg-[#FAF8F4] relative overflow-hidden"
      style={
        {
          contentVisibility: "auto",
          containIntrinsicSize: "0 700px",
        } as React.CSSProperties
      }
      aria-labelledby="services-section-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge strictly matching AboutPreview */}
          <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs px-3 py-1.5 bg-[#035346]/5 rounded-md border border-[#035346]/10">
            Our Services
          </span>

          {/* Section Heading matching AboutPreview font size, leading, weight, and tracking */}
          <h2
            id="services-section-heading"
            className="mt-4 text-3xl sm:text-4xl font-serif text-[#035346] leading-[1.2] font-normal tracking-wide"
          >
            Comprehensive Support Built Around Dignity
          </h2>

          {/* Section Paragraph matching AboutPreview */}
          <p className="mt-6 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            At Kompassionate Care, we provide continuous, professional care
            systems while unconditionally respecting and uplifting each
            resident's independence.
          </p>
        </div>

        <motion.div
          variants={CONTAINER_STAGGER_PIPELINE}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20"
        >
          {dataset.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
