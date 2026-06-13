"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Heart, ClipboardList } from "lucide-react";

interface TrustItem {
  icon: React.ReactNode;
  text: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: <Shield className="w-5 h-5 text-[#DD844B]" />,
    text: "Nurse-Owned & Nurse-Led",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#DD844B]" />,
    text: "24-Hour Personalized Support",
  },
  {
    icon: <Heart className="w-5 h-5 text-[#DD844B]" />,
    text: "Family-Focused Care",
  },
  {
    icon: <ClipboardList className="w-5 h-5 text-[#DD844B]" />,
    text: "Individual Care Plans",
  },
];

export default function TrustBar() {
  return (
    <div className="bg-[#035346] py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/10 p-3 rounded-2xl shrink-0">
                  {item.icon}
                </div>
                <p className="text-sm font-medium leading-tight text-white">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
