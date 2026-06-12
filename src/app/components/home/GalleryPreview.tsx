"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
  "/images/gallery5.png",
  "/images/gallery6.png",
];

export default function GalleryPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs">
            Our Home
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15]">
            Explore Our Beautiful Living Environment
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Designed for comfort, safety, and dignity. Every space is carefully
            maintained to provide a peaceful and welcoming experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image}
                alt="Kompassionate Care Gallery"
                className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-[#035346] hover:bg-[#023b32] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
          >
            View Full Gallery
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
