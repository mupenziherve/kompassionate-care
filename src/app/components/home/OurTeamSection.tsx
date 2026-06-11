"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Award, Heart } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  credential: string;
  bio: string;
  image: string;
}

const TEAM_DATASET: readonly TeamMember[] = [
  {
    name: "Sarah Jenkins",
    role: "Facility Director & Proprietor",
    credential: "Registered Nurse (RN)",
    bio: "Over 14 years of clinical care oversight specializing in customized adult foster home safety protocols and wellness planning.",
    image: "/images/team1.jpg",
  },
  {
    name: "David Vance",
    role: "Resident Care Coordinator",
    credential: "Certified Administrator",
    bio: "Dedicated to structural operational management, community transparency, and maintaining high-quality daily residential care workflows.",
    image: "/images/team2.jpg",
  },
  {
    name: "Elena Rostova",
    role: "Lead Support Specialist",
    credential: "CNA / Med-Certified",
    bio: "Expertly manages individual dietary mapping and accurate operational distribution of daily prescription medication protocols.",
    image: "/images/team3.jpg",
  },
];

const STAGGER_CONTAINER_PIPELINE: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const CARD_ENTRANCE_PIPELINE: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OurTeamSection() {
  return (
    <section
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      style={
        {
          contentVisibility: "auto",
          containIntrinsicSize: "0 800px",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs">
            Expert Leadership
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15] font-normal tracking-wide">
            Clinical Professionals You Can Depend On
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Our home is actively managed by certified medical specialists who
            prioritize security, proper clinical execution, and individual
            resident dignity.
          </p>
        </div>

        <motion.div
          variants={STAGGER_CONTAINER_PIPELINE}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {TEAM_DATASET.map((member, index) => (
            <motion.div
              key={index}
              variants={CARD_ENTRANCE_PIPELINE}
              className="group flex flex-col items-start bg-[#f6f6f3]/60 rounded-[2.5rem] p-6 border border-stone-200/40 hover:shadow-xl transition-all duration-300 [will-change:transform]"
            >
              <div className="w-full aspect-[4/4] rounded-[2rem] overflow-hidden bg-stone-200 relative shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-[#035346] text-white py-1.5 px-3.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border border-white/10 flex items-center gap-1.5">
                  <ShieldCheck size={12} className="text-[#DD844B]" />
                  <span>{member.credential}</span>
                </div>
              </div>

              <div className="mt-6 px-2 w-full">
                <h3 className="text-xl font-bold text-[#035346] tracking-wide">
                  {member.name}
                </h3>
                <p className="text-xs text-[#DD844B] font-bold uppercase tracking-wider mt-1">
                  {member.role}
                </p>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed font-normal">
                  {member.bio}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-stone-200/60 text-[11px] text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Award size={13} className="text-[#035346]" />
                    <span>Background Checked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart size={13} className="text-[#035346]" />
                    <span>Certified Caregiver</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
