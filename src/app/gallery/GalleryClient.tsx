"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "@/lib/contentful";
import {
  LayoutGrid,
  DoorOpen,
  Bell,
  Armchair,
  Utensils,
  ChefHat,
  Bed,
  Bath,
  Shirt,
  MoveRight,
  TrendingUp,
  Compass,
  X,
  ZoomIn,
} from "lucide-react";

interface GalleryClientProps {
  items: GalleryItem[];
}

const CATEGORY_TABS = [
  { name: "View All", icon: LayoutGrid },
  { name: "Front Porch", icon: DoorOpen },
  { name: "Back Porch", icon: Bell },
  { name: "Living", icon: Armchair },
  { name: "Dining", icon: Utensils },
  { name: "Kitchen", icon: ChefHat },
  { name: "Bedrooms", icon: Bed },
  { name: "Wash Room", icon: Bath },
  { name: "Laundry", icon: Shirt },
  { name: "Corridor", icon: MoveRight },
  { name: "Stairs", icon: TrendingUp },
  { name: "Balcony", icon: Compass },
];

/** Helper to ensure Contentful protocol-relative URLs have https: */
const getValidImageUrl = (url?: string) => {
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url;
};

/** Helper to normalize strings for flexible category matching */
const normalizeString = (str?: string) => {
  if (!str) return "";
  return str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Removes spaces, hyphens, and special chars
};

export default function GalleryClient({ items = [] }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("View All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Filter items safely against missing properties or string mismatches
  const filteredItems =
    activeCategory === "View All"
      ? items
      : items.filter((item) => {
          const itemCat = normalizeString(item.category);
          const activeCat = normalizeString(activeCategory);
          return itemCat.includes(activeCat) || activeCat.includes(itemCat);
        });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Category Navigation Pills Bar */}
      <div className="bg-[#F4F2EE] p-3 sm:p-4 rounded-3xl mb-12 border border-stone-200/60 shadow-inner">
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.name;

            return (
              <button
                key={tab.name}
                onClick={() => setActiveCategory(tab.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                  isActive
                    ? "bg-[#035346] text-white shadow-md scale-[1.02]"
                    : "text-stone-600 hover:text-[#035346] hover:bg-white/80"
                }`}
              >
                <Icon
                  size={14}
                  className={isActive ? "text-white" : "text-stone-500"}
                />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200/80 max-w-md mx-auto shadow-sm">
          <p className="text-stone-500 text-sm font-medium">
            No photos uploaded for{" "}
            <span className="font-semibold text-[#035346]">
              {activeCategory}
            </span>{" "}
            yet.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const imageSrc = getValidImageUrl(item.imageUrl);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={item.title || "Gallery photo"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-medium">
                        No Image Available
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#035346]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-11 h-11 rounded-full bg-white text-[#035346] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <ZoomIn size={22} />
                      </div>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-5 flex items-center justify-between bg-white">
                    <div>
                      <h3 className="font-serif text-lg text-[#035346] font-medium leading-tight">
                        {item.title || item.category || "Untitled Photo"}
                      </h3>
                      {item.caption && (
                        <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                          {item.caption}
                        </p>
                      )}
                    </div>
                    {item.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DD844B] bg-[#DD844B]/10 px-3 py-1 rounded-full border border-[#DD844B]/20 shrink-0 ml-3">
                        {item.category}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[16/10] w-full bg-stone-900">
                {selectedImage.imageUrl && (
                  <Image
                    src={getValidImageUrl(selectedImage.imageUrl)}
                    alt={selectedImage.title || "Selected gallery photo"}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl text-[#035346] font-medium">
                    {selectedImage.title || selectedImage.category || "Photo"}
                  </h3>
                  {selectedImage.category && (
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DD844B] bg-[#DD844B]/10 px-3 py-1 rounded-full border border-[#DD844B]/20">
                      {selectedImage.category}
                    </span>
                  )}
                </div>
                {selectedImage.caption && (
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {selectedImage.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
