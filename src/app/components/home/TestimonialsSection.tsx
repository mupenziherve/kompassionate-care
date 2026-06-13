"use client";

import React, { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Star, Check } from "lucide-react";

export interface ImmutableTestimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly headline: string;
  readonly quote: string;
  readonly image: string;
  readonly rating: number;
  readonly tags: readonly string[];
}

const IMMUTABLE_TESTIMONIAL_DATA: readonly ImmutableTestimonial[] = [
  {
    id: "testimonial-dorothy",
    name: "Dorothy M.",
    role: "Resident (Age 84)",
    headline: "A Warm, Safe Home",
    quote:
      "Moving here was the best decision I could have made. The team treats me with so much dignity, helps me patiently with my daily routines, and makes me feel truly independent.",
    image: "/images/testimonials/dorothy.png",
    rating: 5,
    tags: ["Assisted Daily Living", "Mobility Support", "Home-Cooked Meals"],
  },
  {
    id: "testimonial-thomas",
    name: "Thomas B.",
    role: "Son of Resident",
    headline: "Exceptional Dementia Care",
    quote:
      "Finding a home that truly understands advanced Alzheimer's care for my elderly father was difficult. The staff here provides a patient, safe, and deeply loving environment.",
    image: "/images/testimonials/thomas.png",
    rating: 4,
    tags: ["Memory Loss Care", "Alzheimer's Support", "Medication Safety"],
  },
  {
    id: "testimonial-martha",
    name: "Martha W.",
    role: "Resident (Age 79)",
    headline: "True Companionship & Care",
    quote:
      "I was worried about feeling isolated living on my own, but the companionship here is wonderful. There is always someone to share stories with and look after my medical needs.",
    image: "/images/testimonials/martha.jpg",
    rating: 5,
    tags: ["24-Hour Supervision", "Companion Support", "Wellness Tracking"],
  },
] as const;

const CONTAINER_STAGGER_PIPELINE: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

function TestimonialCard({ item }: { readonly item: ImmutableTestimonial }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={CARD_ANIMATION_PIPELINE}
      className="relative h-[460px] w-full rounded-[2.5rem] overflow-hidden shadow-sm cursor-pointer select-none border border-stone-200/30 bg-white [will-change:transform]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-[#035346]/80 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
      </div>

      <div
        className={`absolute inset-0 p-8 flex flex-col justify-end z-10 transition-all duration-500 ease-[0.16,1,0.3,1] ${
          isHovered
            ? "opacity-0 pointer-events-none translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        <h3 className="text-white font-serif text-2xl tracking-wide font-medium">
          {item.name}
        </h3>
        <p className="text-[#DD844B] text-xs font-bold uppercase tracking-widest mt-1">
          {item.role}
        </p>
        <div className="w-8 h-[2px] bg-white/40 my-3 rounded-full" />
        <p className="text-gray-200 text-sm font-medium line-clamp-2 leading-relaxed italic">
          "{item.headline}"
        </p>
      </div>

      <div
        className={`absolute inset-0 p-8 flex flex-col justify-between items-start z-20 transition-all duration-500 ease-[0.16,1,0.3,1] border-2 border-[#035346]/20 rounded-[2.5rem] ${
          isHovered
            ? "opacity-100 translate-y-0 bg-gradient-to-b from-[#fdfdfb] to-[#f4f6f4]"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="w-full">
          <div
            className="flex gap-1 text-[#DD844B]"
            aria-label={`Rated ${item.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                fill={index < item.rating ? "currentColor" : "none"}
                className={
                  index < item.rating ? "text-[#DD844B]" : "text-stone-300"
                }
                aria-hidden="true"
              />
            ))}
          </div>

          <blockquote className="mt-5">
            <p className="text-[#035346] text-sm sm:text-base leading-relaxed font-medium italic">
              &ldquo;{item.quote}&rdquo;
            </p>
          </blockquote>

          <p className="text-xs text-[#035346]/60 font-bold tracking-wide mt-3 uppercase">
            — {item.role === "Son of Resident" ? "Review by" : "Shared by"}{" "}
            {item.name}
          </p>
        </div>

        <div className="w-full pt-4 border-t border-stone-200/60">
          <span className="text-xs text-[#035346] font-bold tracking-wider block mb-2.5 uppercase">
            Specialized Care Provided:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 bg-white border border-[#035346]/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-[#035346] text-xs py-1 px-2.5 rounded-full font-semibold"
              >
                <Check size={10} className="text-[#DD844B] stroke-[3.5]" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const dataset = useMemo(() => IMMUTABLE_TESTIMONIAL_DATA, []);

  return (
    <section
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      style={
        {
          contentVisibility: "auto",
          containIntrinsicSize: "0 700px",
        } as React.CSSProperties
      }
      aria-labelledby="testimonials-section-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs">
            Testimonials
          </span>

          <h2
            id="testimonials-section-heading"
            className="mt-4 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15] font-normal tracking-wide"
          >
            Loved by Residents, Trusted by Families
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Our commitment is to deliver unwavering care, senior safety,
            dignity, and true peace of mind for your loved ones.
          </p>
        </div>

        <motion.div
          variants={CONTAINER_STAGGER_PIPELINE}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20"
        >
          {dataset.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
