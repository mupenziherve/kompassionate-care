"use client";

import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

export interface ImmutableTestimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly quote: string;
}

const IMMUTABLE_TESTIMONIAL_DATA: readonly ImmutableTestimonial[] = [
  {
    id: "testimonial-daughter",
    name: "Eleanor R.",
    role: "Daughter of Resident",
    quote:
      "The care and compassion shown by the team gave our family absolute peace of mind. We always felt our loved one was safe, respected, and genuinely valued.",
  },
  {
    id: "testimonial-son",
    name: "Marcus K.",
    role: "Son of Resident",
    quote:
      "The staff treated my father like family from day one. Communication was flawless, operational transparency was absolute, and the environment was warm.",
  },
  {
    id: "testimonial-advocate",
    name: "David V.",
    role: "Resident Advocate",
    quote:
      "Professional, caring, and structurally attentive to clinical guidelines. We are incredibly grateful for the support provided during a critical transition.",
  },
] as const;

const CONTAINER_STAGGER_PIPELINE: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const CARD_ANIMATION_PIPELINE: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TestimonialsSection() {
  const dataset = useMemo(() => IMMUTABLE_TESTIMONIAL_DATA, []);

  return (
    <section
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      style={
        {
          contentVisibility: "auto",
          containIntrinsicSize: "0 650px",
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
            Trusted by Families & Healthcare Partners
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Our commitment is to deliver unwavering clinical excellence,
            dignity, and true emotional security for every individual in our
            care.
          </p>
        </div>

        <motion.div
          variants={CONTAINER_STAGGER_PIPELINE}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20"
        >
          {dataset.map((item) => (
            <motion.div
              key={item.id}
              variants={CARD_ANIMATION_PIPELINE}
              whileHover={{ y: -4 }}
              className="bg-[#f6f6f3]/70 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/40 flex flex-col justify-between items-start [will-change:transform]"
            >
              <figure className="w-full flex flex-col h-full justify-between">
                <div>
                  <div
                    className="flex gap-1 text-[#DD844B]"
                    aria-label="Validated 5-star evaluation rating"
                  >
                    <Star size={16} fill="currentColor" aria-hidden="true" />
                    <Star size={16} fill="currentColor" aria-hidden="true" />
                    <Star size={16} fill="currentColor" aria-hidden="true" />
                    <Star size={16} fill="currentColor" aria-hidden="true" />
                    <Star size={16} fill="currentColor" aria-hidden="true" />
                  </div>

                  <blockquote className="mt-6">
                    <p className="text-gray-600 text-base leading-relaxed font-normal italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>

                <figcaption className="mt-8 pt-6 border-t border-stone-200/50 w-full">
                  <h4 className="font-bold text-[#035346] text-base tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-normal uppercase tracking-wider mt-1">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
