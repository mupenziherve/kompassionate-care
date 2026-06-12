"use client";

import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  UserRoundCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: ShieldCheck,
    text: "Nurse-Owned & Nurse-Led",
  },
  {
    icon: Clock,
    text: "24-Hour Personalized Support",
  },
  {
    icon: HeartHandshake,
    text: "Family-Focused Care",
  },
  {
    icon: UserRoundCheck,
    text: "Individual Care Plans",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#035346] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.text}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="
flex
items-center
gap-4
text-white
"
              >
                <div
                  className="
bg-white/10
p-3
rounded-2xl
"
                >
                  <Icon size={24} />
                </div>

                <p
                  className="
text-sm
font-medium
leading-tight
"
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
