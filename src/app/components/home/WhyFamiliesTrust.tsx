"use client";

import { CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";

const reasons = [
  "Safe and comfortable home environment",

  "Compassionate experienced caregivers",

  "Open communication with families",

  "Respect for independence and dignity",

  "Commitment to quality of life",

  "Professional nursing oversight",
];

export default function WhyFamiliesTrust() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p
            className="
uppercase
tracking-[3px]
text-xs
font-bold
text-[#DD844B]
"
          >
            Why Families Trust Us
          </p>

          <h2
            className="
mt-4
font-serif
text-4xl
lg:text-5xl
text-[#035346]
"
          >
            Care built around trust, comfort and dignity
          </h2>

          <p
            className="
mt-5
text-gray-600
text-lg
"
          >
            Every resident receives personalized support in a home environment
            where families feel confident.
          </p>
        </div>

        <div
          className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="
p-6
rounded-3xl
bg-[#FAF8F4]
flex
gap-4
items-start
"
            >
              <CheckCircle2 className="text-[#DD844B] shrink-0" />

              <p
                className="
text-gray-700
font-medium
"
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
