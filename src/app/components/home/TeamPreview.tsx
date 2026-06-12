"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caregivers = [
  {
    name: "Compassionate Care Team",
    role: "Licensed Caregiver",
    image: "/images/team1.jpg",
  },
  {
    name: "Professional Support Team",
    role: "Resident Care Specialist",
    image: "/images/team2.jpg",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-24 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-[#DD844B] uppercase tracking-[3px] text-xs font-bold">
            Meet Our Team
          </span>

          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-[#035346]">
            Caring professionals who treat every resident like family
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our experienced caregivers are dedicated to providing comfort,
            dignity, and personalized support in a warm home environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {caregivers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm"
            >
              <div className="h-[380px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl text-[#035346]">
                  {member.name}
                </h3>

                <p className="text-[#DD844B] mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/our-team"
            className="inline-flex items-center gap-3 text-[#035346] font-semibold group"
          >
            Meet Our Team
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
