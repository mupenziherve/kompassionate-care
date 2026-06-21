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
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface GalleryItem {
  id: string;
  category:
    | "front-porch"
    | "back-porch"
    | "back-rooms"
    | "kitchen"
    | "living-room"
    | "wash-room"
    | "balcony";
  imageUrl: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems = useMemo<GalleryItem[]>(
    () => [
      // === FRONT PORCH ===
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

      // === BACK PORCH ===
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

      // === BACK ROOMS ===
      {
        id: "br-1",
        category: "back-rooms",
        imageUrl: "/images/back-rooms/2.png",
      },
      {
        id: "br-2",
        category: "back-rooms",
        imageUrl: "/images/back-rooms/1.png",
      },
      {
        id: "br-3",
        category: "back-rooms",
        imageUrl: "/images/back-rooms/3.png",
      },
      {
        id: "br-4",
        category: "back-rooms",
        imageUrl: "/images/back-rooms/4.png",
      },
      {
        id: "br-5",
        category: "back-rooms",
        imageUrl: "/images/back-rooms/5.png",
      },
      {
        id: "br-6",
        category: "back-rooms",
        imageUrl: "/images/back-rooms/6.png",
      },
      {
        id: "br-7",
        category: "back-rooms",
        imageUrl: "/images/back-rooms/7.png",
      },

      // === KITCHEN ===
      { id: "ki-2", category: "kitchen", imageUrl: "/images/kitchen/2.png" },
      { id: "ki-3", category: "kitchen", imageUrl: "/images/kitchen/3.png" },
      { id: "ki-4", category: "kitchen", imageUrl: "/images/kitchen/4.png" },
      { id: "ki-5", category: "kitchen", imageUrl: "/images/kitchen/5.png" },
      { id: "ki-6", category: "kitchen", imageUrl: "/images/kitchen/6.png" },

      // === LIVING ROOM ===
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

      // === WASH ROOM ===
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

      // === BALCONY ===
      { id: "ba-1", category: "balcony", imageUrl: "/images/balcony/1.png" },
      { id: "ba-2", category: "balcony", imageUrl: "/images/balcony/2.png" },
      { id: "ba-3", category: "balcony", imageUrl: "/images/balcony/3.png" },
      { id: "ba-4", category: "balcony", imageUrl: "/images/balcony/4.png" },
      { id: "ba-5", category: "balcony", imageUrl: "/images/balcony/5.png" },
    ],
    [],
  );

  // Filter items and securely shuffle images when "View All" is selected
  const filteredItems = useMemo(() => {
    if (activeCategory !== "all") {
      return galleryItems
        .filter((item) => item.category === activeCategory)
        .map((item) => ({
          ...item,
          displayTitle: item.category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        }));
    }

    // Deterministic pseudo-random sorting array based on item ID string hashing
    // This allows the "View All" images to appear mixed up, but prevents unneeded layout jumps
    return [...galleryItems]
      .sort((a, b) => {
        const hashA = a.id
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const hashB = b.id
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return ((hashA * 3) % 10) - ((hashB * 3) % 10);
      })
      .map((item) => ({
        ...item,
        displayTitle: item.category
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      }));
  }, [activeCategory, galleryItems]);

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] min-h-screen">
        {/* HERO HEADER DISPLAY */}
        <section className="relative h-[460px] sm:h-[520px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
              alt="Kompassionate Care Premium Environment"
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent opacity-100" />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-[#035346]/90 backdrop-blur-md rounded-[2rem] p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#DD844B]" />
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase block">
                Visual Sanctuary
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight tracking-wide">
                Experience Our Beautiful Home Inside & Out
              </h1>
              <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed font-light">
                Take a virtual walkthrough of our adult foster care setting.
                Every frame showcases our continuous attention to clinical
                excellence, community comfort, and luxury safety guidelines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* DATA CONTAINER PLATFORM */}
        <section className="pb-24 lg:pb-32 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-12 bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-stone-200/50 border border-stone-200/40 min-h-[500px]"
              >
                {/* FILTER NAVIGATION */}
                <div className="mb-10">
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 text-center lg:text-left">
                    Filter Facility Environments
                  </label>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start bg-stone-100 p-2 rounded-2xl max-w-max mx-auto lg:mx-0">
                    {[
                      { id: "all", label: "View All", icon: Grid },
                      {
                        id: "front-porch",
                        label: "Front Porch",
                        icon: DoorOpen,
                      },
                      { id: "back-porch", label: "Back Porch", icon: TreePine },
                      { id: "back-rooms", label: "Back Rooms", icon: Bed },
                      { id: "kitchen", label: "Kitchen", icon: Utensils },
                      { id: "living-room", label: "Living Room", icon: Tv },
                      { id: "wash-room", label: "Wash Room", icon: Bath },
                      { id: "balcony", label: "Balcony", icon: Compass },
                    ].map((btn) => {
                      const IconComponent = btn.icon;
                      const isActive = activeCategory === btn.id;
                      return (
                        <button
                          key={btn.id}
                          type="button"
                          onClick={() => setActiveCategory(btn.id)}
                          className={`py-3 px-5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 ${
                            isActive
                              ? "bg-[#035346] text-white shadow-md scale-[1.02]"
                              : "text-stone-500 hover:text-stone-800 hover:bg-stone-200/50"
                          }`}
                        >
                          <IconComponent size={14} />
                          <span>{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* IMAGE GRID */}
                <motion.div
                  layout
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                        className="group relative overflow-hidden bg-stone-50 rounded-[2rem] border border-stone-200/40 p-3 shadow-sm hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden bg-stone-200">
                          <img
                            src={item.imageUrl}
                            alt={item.displayTitle}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#023b32]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" />

                          <button
                            type="button"
                            onClick={() => setSelectedImage(item)}
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#035346] p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0 hover:bg-[#035346] hover:text-white"
                          >
                            <Maximize2 size={16} />
                          </button>
                        </div>

                        <div className="p-4 pt-4 pb-2">
                          <span className="text-[#DD844B] text-[10px] font-bold tracking-[2px] uppercase block mb-1">
                            {item.category.replace("-", " ")}
                          </span>
                          <h3 className="text-lg font-serif font-normal text-[#035346] tracking-wide">
                            {item.displayTitle}
                          </h3>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* EMPTY FALLBACK */}
                {filteredItems.length === 0 && (
                  <div className="text-center py-24">
                    <Images size={48} className="mx-auto text-stone-300 mb-4" />
                    <p className="text-stone-500 text-sm">
                      No captures indexed under this room layer yet.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* LIGHTBOX DIALOG OVERLAY */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[2.5rem] overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl relative flex flex-col border border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 bg-stone-900/80 backdrop-blur-md text-white p-2.5 rounded-full hover:bg-[#DD844B] transition-colors z-10 shadow-lg"
                >
                  <X size={18} />
                </button>

                <div className="relative flex-1 overflow-hidden bg-stone-900 min-h-[250px] sm:min-h-[450px]">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.category}
                    className="w-full h-full object-contain max-h-[65vh] mx-auto"
                  />
                </div>

                <div className="p-6 sm:p-10 bg-white border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="text-[#DD844B] text-xs font-bold tracking-[3px] uppercase block mb-1">
                      {selectedImage.category.replace("-", " ")} Showcase Asset
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif text-[#035346]">
                      {selectedImage.category
                        .split("-")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(" ")}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="bg-[#035346] hover:bg-[#023b32] text-white py-3.5 px-6 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-center"
                  >
                    <span>Return To Gallery</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
