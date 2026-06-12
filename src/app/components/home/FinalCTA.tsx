"use client";

import { motion } from "framer-motion";
import { Phone, CalendarHeart } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="
absolute inset-0 
bg-gradient-to-br
from-[#035346]
to-[#013b32]
"
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#DD844B]">
            Begin the Journey
          </p>

          <h2
            className="
mt-6
text-4xl
md:text-6xl
font-heading
leading-tight
"
          >
            A place where your loved one
            <br />
            feels truly at home
          </h2>

          <p
            className="
mt-6
max-w-2xl
mx-auto
text-white/80
text-lg
"
          >
            Schedule a personal tour and discover compassionate, professional
            care built around your family's needs.
          </p>

          <div
            className="
mt-10
flex
flex-col
sm:flex-row
justify-center
gap-4
"
          >
            <a
              href="tel:+19713711444"
              className="
flex items-center
justify-center
gap-2
bg-[#DD844B]
px-8
py-4
rounded-full
font-semibold
hover:scale-105
transition
"
            >
              <Phone size={18} />
              Call Us
            </a>

            <a
              href="/contact"
              className="
flex items-center
justify-center
gap-2
border
border-white/30
px-8
py-4
rounded-full
font-semibold
hover:bg-white/10
transition
"
            >
              <CalendarHeart size={18} />
              Schedule Tour
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
