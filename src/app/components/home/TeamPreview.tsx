"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CaregiverMember {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly bio: string;
}


const TEAM_REGISTRY: readonly CaregiverMember[] = [
  {
    name: "Compassionate Care Team",
    role: "Licensed Caregiver",
    image: "/images/team1.png",
    bio: "Expert daily clinical support specializing in peaceful residential care transitions.",
  },
  {
    name: "Professional Support Team",
    role: "Resident Care Specialist",
    image: "/images/team2.jpg",
    bio: "Dedicated cognitive engagement companion committed to resident dignity and joy.",
  },
] as const;

const CONTAINER_STAGGER_PIPELINE: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const CARD_ANIMATION_PIPELINE: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TeamPreview() {
  const team = useMemo(() => TEAM_REGISTRY, []);

  return (
    <section
      className="py-24 lg:py-32 bg-[#FAF8F4] relative overflow-hidden"
      style={
        {
          contentVisibility: "auto",
          containIntrinsicSize: "0 800px",
        } as React.CSSProperties
      }
    >
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#035346]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[#DD844B] uppercase tracking-[3px] text-xs font-bold">
            <Sparkles size={12} />
            <span>Meet Our Team</span>
          </span>

          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-[#035346] leading-[1.15] font-normal tracking-wide">
            Caring Professionals Who Treat Every Resident Like Family
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
            Our experienced care experts are fully accredited and deeply
            committed to providing physical security, comfort, and interactive
            emotional companion support within a true home ecosystem.
          </p>
        </div>

       
        <motion.div
          variants={CONTAINER_STAGGER_PIPELINE}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-16 w-full"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={CARD_ANIMATION_PIPELINE}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/40 transition-shadow duration-300 group flex flex-col [will-change:transform]"
            >
             
              <div className="aspect-[4/3] sm:h-[360px] w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

        
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-[#DD844B] uppercase tracking-wider bg-[#DD844B]/10 px-3 py-1 rounded-full self-start">
                  {member.role}
                </span>

                <h3 className="mt-4 font-serif font-normal text-2xl text-[#035346] tracking-wide">
                  {member.name}
                </h3>

                <p className="mt-3 text-stone-500 text-sm leading-relaxed flex-grow">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
        <div className="mt-14 flex justify-start">
          <Link
            href="/our-team"
            className="inline-flex items-center gap-2.5 text-[#035346] hover:text-[#023b32] font-bold text-xs tracking-wider uppercase group rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#035346] focus-visible:ring-offset-4 py-2"
          >
            <span>Meet Our Extended Team Directory</span>
            <div className="bg-[#035346]/5 p-2 rounded-full group-hover:bg-[#035346] group-hover:text-white transition-colors duration-300">
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-0.5 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
