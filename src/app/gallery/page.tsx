"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronRight,
  Images,
  TreePine,
  Bed,
  DoorOpen,
  Utensils,
  Tv,
  Bath,
  Compass,
  Grid,
  Shirt,
  ArrowRight,
  MoveUpRight,
  ChefHat,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface GalleryItem {
  id: string;
  category:
    | "front-porch"
    | "back-porch"
    | "living-room"
    | "dining-room"
    | "kitchen"
    | "bedrooms"
    | "wash-room"
    | "laundry-room"
    | "corridor"
    | "stairs"
    | "balcony";
  imageUrl: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems = useMemo<GalleryItem[]>(
    () => [
      // --- EXTERIOR ---
      {
        id: "fp-1",
        category: "front-porch",
        imageUrl: "/images/front-porch/1.png",
      },
      {
        id: "fp-2",
        category: "front-porch",
        imageUrl: "/images/front-porch/2.png",
      },
      {
        id: "fp-3",
        category: "front-porch",
        imageUrl: "/images/front-porch/3.png",
      },
      {
        id: "fp-4",
        category: "front-porch",
        imageUrl: "/images/front-porch/4.png",
      },
      {
        id: "fp-5",
        category: "front-porch",
        imageUrl: "/images/front-porch/5.png",
      },
      {
        id: "fp-6",
        category: "front-porch",
        imageUrl: "/images/front-porch/6.png",
      },
      {
        id: "bp-1",
        category: "back-porch",
        imageUrl: "/images/back-porch/1.png",
      },
      {
        id: "bp-3",
        category: "back-porch",
        imageUrl: "/images/back-porch/3.png",
      },
      {
        id: "bp-4",
        category: "back-porch",
        imageUrl: "/images/back-porch/4.png",
      },
      { id: "ba-1", category: "balcony", imageUrl: "/images/balcony/1.png" },
      { id: "ba-2", category: "balcony", imageUrl: "/images/balcony/2.png" },
      { id: "ba-3", category: "balcony", imageUrl: "/images/balcony/3.png" },
      { id: "ba-4", category: "balcony", imageUrl: "/images/balcony/4.png" },
      { id: "ba-5", category: "balcony", imageUrl: "/images/balcony/5.png" },

      // --- LIVING & KITCHEN ---
      {
        id: "lr-1",
        category: "living-room",
        imageUrl: "/images/living-room/1.png",
      },
      {
        id: "lr-2",
        category: "living-room",
        imageUrl: "/images/living-room/2.png",
      },
      {
        id: "lr-3",
        category: "living-room",
        imageUrl: "/images/living-room/3.png",
      },
      {
        id: "lr-4",
        category: "living-room",
        imageUrl: "/images/living-room/4.png",
      },
      {
        id: "lr-5",
        category: "living-room",
        imageUrl: "/images/living-room/5.png",
      },
      {
        id: "lr-6",
        category: "living-room",
        imageUrl: "/images/living-room/6.png",
      },
      {
        id: "dr-1",
        category: "dining-room",
        imageUrl: "/images/dining-room/1.png",
      },
      {
        id: "dr-2",
        category: "dining-room",
        imageUrl: "/images/dining-room/2.png",
      },
      { id: "ki-1", category: "kitchen", imageUrl: "/images/kitchen/1.png" },
      { id: "ki-2", category: "kitchen", imageUrl: "/images/kitchen/2.png" },

      // --- PRIVATE & UTILITY ---
      { id: "bed-1", category: "bedrooms", imageUrl: "/images/bedrooms/1.png" },
      { id: "bed-2", category: "bedrooms", imageUrl: "/images/bedrooms/2.png" },
      {
        id: "wr-1",
        category: "wash-room",
        imageUrl: "/images/wash-room/1.png",
      },
      {
        id: "wr-2",
        category: "wash-room",
        imageUrl: "/images/wash-room/2.png",
      },
      {
        id: "wr-3",
        category: "wash-room",
        imageUrl: "/images/wash-room/3.png",
      },
      {
        id: "lau-1",
        category: "laundry-room",
        imageUrl: "/images/laundry-room/1.png",
      },
      {
        id: "lau-2",
        category: "laundry-room",
        imageUrl: "/images/laundry-room/2.png",
      },
      { id: "cor-1", category: "corridor", imageUrl: "/images/corridor/1.png" },
      { id: "sta-1", category: "stairs", imageUrl: "/images/stairs/1.png" },
    ],
    [],
  );

  const filteredItems = useMemo(() => {
    // 1. Logic for individual categories (Keep order consistent)
    if (activeCategory !== "all") {
      return galleryItems
        .filter((item) => item.category === activeCategory)
        .map((item) => ({
          ...item,
          displayTitle: item.category
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
        }));
    }

    // 2. Logic for "all" (Stable Randomized Shuffle)
    return [...galleryItems]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => ({
        ...value,
        displayTitle: value.category
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" "),
      }));
  }, [activeCategory, galleryItems]);

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F4] min-h-screen">
        <section className="relative h-[460px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
              className="w-full h-full object-cover opacity-40"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/75 to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-[#035346]/90 backdrop-blur-md rounded-[2rem] p-10 border border-white/10 shadow-2xl"
            >
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase">
                Visual Sanctuary
              </span>
              <h1 className="mt-3 text-5xl font-serif text-white">
                Experience Our Beautiful Home
              </h1>
              <p className="mt-4 text-stone-200">
                Take a virtual walkthrough of our facility.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-[2.5rem] p-12 shadow-xl border border-stone-200/40">
              <div className="mb-10">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start bg-stone-100 p-2 rounded-2xl max-w-max">
                  {[
                    { id: "all", label: "View All", icon: Grid },
                    { id: "front-porch", label: "Front Porch", icon: DoorOpen },
                    { id: "back-porch", label: "Back Porch", icon: TreePine },
                    { id: "living-room", label: "Living", icon: Tv },
                    { id: "dining-room", label: "Dining", icon: Utensils },
                    { id: "kitchen", label: "Kitchen", icon: ChefHat },
                    { id: "bedrooms", label: "Bedrooms", icon: Bed },
                    { id: "wash-room", label: "Wash Room", icon: Bath },
                    { id: "laundry-room", label: "Laundry", icon: Shirt },
                    { id: "corridor", label: "Corridor", icon: ArrowRight },
                    { id: "stairs", label: "Stairs", icon: MoveUpRight },
                    { id: "balcony", label: "Balcony", icon: Compass },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setActiveCategory(btn.id)}
                      className={`py-3 px-5 text-xs font-bold uppercase rounded-xl flex items-center gap-2 transition-all ${activeCategory === btn.id ? "bg-[#035346] text-white shadow-md" : "text-stone-500 hover:bg-stone-200"}`}
                    >
                      <btn.icon size={14} /> {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group relative overflow-hidden bg-stone-50 rounded-[2rem] p-3 border border-stone-200/40"
                    >
                      <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden">
                        <img
                          src={item.imageUrl}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt={item.displayTitle}
                        />
                        <button
                          onClick={() => setSelectedImage(item)}
                          className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-[#035346] hover:text-white"
                        >
                          <Maximize2 size={16} />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-[#035346]">
                          {item.displayTitle}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
