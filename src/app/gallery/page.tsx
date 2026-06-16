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
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Interface for Gallery Items
interface GalleryItem {
  id: string;
  category:
    | "back-porch"
    | "back-rooms"
    | "front-porch"
    | "kitchen"
    | "living-room"
    | "wash-room"
    | "balcony";
  title: string;
  description: string;
  imageUrl: string;
}

export default function GalleryPage() {
  // Defaulting to "back-porch" since "View All" is removed
  const [activeCategory, setActiveCategory] = useState<string>("back-porch");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Complete dataset mapped out exactly by image quotas
  const galleryItems = useMemo<GalleryItem[]>(
    () => [
      // === BACK PORCH (5 Images) ===
      {
        id: "bp-1",
        category: "back-porch",
        title: "Morning Sun Deck",
        description:
          "A peaceful outdoor retreat designed for fresh morning air and scenic backyard views.",
        imageUrl: "/images/back-porch/img1.jpg",
      },
      {
        id: "bp-2",
        category: "back-porch",
        title: "Shaded Veranda Seating",
        description:
          "Comfortable, sheltered outdoor lounge area perfect for quiet reading and relaxation.",
        imageUrl: "/images/back-porch/img2.jpg",
      },
      {
        id: "bp-3",
        category: "back-porch",
        title: "Afternoon Courtyard View",
        description:
          "Overlooking manicured, secure green spaces built to support restful fresh air exposure.",
        imageUrl: "/images/back-porch/img3.jpg",
      },
      {
        id: "bp-4",
        category: "back-porch",
        title: "Evening Sunset Patio",
        description:
          "Warmly lit evening deck area structured with non-slip surfaces for independent walks.",
        imageUrl: "/images/back-porch/img4.jpg",
      },
      {
        id: "bp-5",
        category: "back-porch",
        title: "Accessible Porch Ramp Overview",
        description:
          "Seamlessly integrated architectural safety parameters combined with a premium wood design.",
        imageUrl: "/images/back-porch/img5.jpg",
      },

      // === BACK ROOMS (7 Images) ===
      {
        id: "br-1",
        category: "back-rooms",
        title: "Premium Private Suite A",
        description:
          "Serene, private residency space configured for quiet resting and personal comfort.",
        imageUrl: "/images/back-rooms/img1.jpg",
      },
      {
        id: "br-2",
        category: "back-rooms",
        title: "Sunlit Private Suite B",
        description:
          "Large, bright window layout showcasing a secure and therapeutic environment layout.",
        imageUrl: "/images/back-rooms/img2.jpg",
      },
      {
        id: "br-3",
        category: "back-rooms",
        title: "Orthopedic Suite Layout",
        description:
          "Fully configured independent living quarters prioritizing premium rest and tranquility.",
        imageUrl: "/images/back-rooms/img3.jpg",
      },
      {
        id: "br-4",
        category: "back-rooms",
        title: "Restful Night Setting",
        description:
          "Ambient personal light matrices customized to balance healthy deep sleep and visibility.",
        imageUrl: "/images/back-rooms/img4.jpg",
      },
      {
        id: "br-5",
        category: "back-rooms",
        title: "En-Suite Resident Quarters",
        description:
          "Spacious individual configuration layers optimizing personal spatial requirements.",
        imageUrl: "/images/back-rooms/img5.jpg",
      },
      {
        id: "br-6",
        category: "back-rooms",
        title: "Comfort Lounge Quarter",
        description:
          "Elegant, clutter-free private environments tailored to promote absolute peace of mind.",
        imageUrl: "/images/back-rooms/img6.jpg",
      },
      {
        id: "br-7",
        category: "back-rooms",
        title: "Integrated Safety Suite",
        description:
          "Discreetly placed supportive accessories paired perfectly with warm interior lines.",
        imageUrl: "/images/back-rooms/img7.jpg",
      },

      // === FRONT PORCH (6 Images) ===
      {
        id: "fp-1",
        category: "front-porch",
        title: "Welcoming Facility Entrance",
        description:
          "A wide, majestic front entryway built to welcome arriving families and guests.",
        imageUrl: "/images/front-porch/img1.jpg",
      },
      {
        id: "fp-2",
        category: "front-porch",
        title: "Morning Social Porch",
        description:
          "Spacious outdoor setup optimal for socializing and greeting community visitors.",
        imageUrl: "/images/front-porch/img2.jpg",
      },
      {
        id: "fp-3",
        category: "front-porch",
        title: "Front Gardens Panorama",
        description:
          "Beautifully landscape-integrated seating layout boasting clean lines and safety visibility.",
        imageUrl: "/images/front-porch/img3.jpg",
      },
      {
        id: "fp-4",
        category: "front-porch",
        title: "Shaded Entry Promenade",
        description:
          "High awning structure shielding residents from intense heat while keeping airflow constant.",
        imageUrl: "/images/front-porch/img4.jpg",
      },
      {
        id: "fp-5",
        category: "front-porch",
        title: "Accessible Entrance Staging",
        description:
          "Zero-barrier transition paths allowing flawless mobility support into the building.",
        imageUrl: "/images/front-porch/img5.jpg",
      },
      {
        id: "fp-6",
        category: "front-porch",
        title: "Sunset Front Sitting Area",
        description:
          "Calm evening drop-off zones framed by comforting community light patterns.",
        imageUrl: "/images/front-porch/img6.jpg",
      },

      // === KITCHEN (6 Images) ===
      {
        id: "ki-1",
        category: "kitchen",
        title: "Culinary Station Alpha",
        description:
          "Modern, professional clinical kitchen focusing on hygienic nutritional management.",
        imageUrl: "/images/kitchen/img1.jpg",
      },
      {
        id: "ki-2",
        category: "kitchen",
        title: "Fresh Dietary Prep Zone",
        description:
          "Dedicated sanitization lines where specialized partner menus are curated daily.",
        imageUrl: "/images/kitchen/img2.jpg",
      },
      {
        id: "ki-3",
        category: "kitchen",
        title: "Baking & Pastry Corner",
        description:
          "Dynamic therapeutic prep area encouraging fine motor skills through food arts.",
        imageUrl: "/images/kitchen/img3.jpg",
      },
      {
        id: "ki-4",
        category: "kitchen",
        title: "High-Tier Sanitization Equipment",
        description:
          "Completely certified industrial appliances upholding strict clinical safety guidelines.",
        imageUrl: "/images/kitchen/img4.jpg",
      },
      {
        id: "ki-5",
        category: "kitchen",
        title: "Organized Meal Staging",
        description:
          "Efficient plate and nutrition tracking logs prepared for swift dining delivery.",
        imageUrl: "/images/kitchen/img5.jpg",
      },
      {
        id: "ki-6",
        category: "kitchen",
        title: "Fresh Produce Storage",
        description:
          "Climate-controlled asset preservation layers ensuring maximum vitamin retention.",
        imageUrl: "/images/kitchen/img6.jpg",
      },

      // === LIVING ROOM (6 Images) ===
      {
        id: "lr-1",
        category: "living-room",
        title: "Main Communal Hearth",
        description:
          "The heartwarming core of our facility, perfect for group gathering and storytelling.",
        imageUrl: "/images/living-room/img1.jpg",
      },
      {
        id: "lr-2",
        category: "living-room",
        title: "Entertainment Lounge Area",
        description:
          "Cozy multimedia tracking zone set up for shared movie screenings and music therapy.",
        imageUrl: "/images/living-room/img2.jpg",
      },
      {
        id: "lr-3",
        category: "living-room",
        title: "Quiet Reading Sanctuary",
        description:
          "Sunlit alcoves featuring comfortable structural seating to assist independent focus.",
        imageUrl: "/images/living-room/img3.jpg",
      },
      {
        id: "lr-4",
        category: "living-room",
        title: "Interactive Game Layout",
        description:
          "Recreational table surfaces curated to stimulate healthy group interaction.",
        imageUrl: "/images/living-room/img4.jpg",
      },
      {
        id: "lr-5",
        category: "living-room",
        title: "Central Living Atrium",
        description:
          "Beautifully high ceilings providing open visual lines and premium ventilation controls.",
        imageUrl: "/images/living-room/img5.jpg",
      },
      {
        id: "lr-6",
        category: "living-room",
        title: "Family Meeting Pavilion",
        description:
          "Warm, luxury visitor spaces tailored to maintain tight-knit family relationships.",
        imageUrl: "/images/living-room/img6.jpg",
      },

      // === WASH ROOM (3 Images) ===
      {
        id: "wr-1",
        category: "wash-room",
        title: "Accessible Suite Bath",
        description:
          "Zero-barrier roll-in showers optimized for individual mobility and private dignity.",
        imageUrl: "/images/wash-room/img1.jpg",
      },
      {
        id: "wr-2",
        category: "wash-room",
        title: "Premium Safety Rail Layout",
        description:
          "High-tier security handrails integrated cleanly into high-end stone styling.",
        imageUrl: "/images/wash-room/img2.jpg",
      },
      {
        id: "wr-3",
        category: "wash-room",
        title: "Non-Slip Care Station",
        description:
          "Hygienic flooring materials mapped out meticulously to protect independent movement.",
        imageUrl: "/images/wash-room/img3.jpg",
      },

      // === BALCONY (5 Images) ===
      {
        id: "ba-1",
        category: "balcony",
        title: "Elevated View Deck",
        description:
          "Beautiful upper levels displaying scenic panoramas of the surrounding grounds.",
        imageUrl: "/images/balcony/img1.jpg",
      },
      {
        id: "ba-2",
        category: "balcony",
        title: "Breezy Morning Loggia",
        description:
          "Fresh air pocket spaces structured with reinforced architectural safety barriers.",
        imageUrl: "/images/balcony/img2.jpg",
      },
      {
        id: "ba-3",
        category: "balcony",
        title: "Upper Observation Point",
        description:
          "Calming outdoor vistas optimized to provide safe, comfortable environmental clarity.",
        imageUrl: "/images/balcony/img3.jpg",
      },
      {
        id: "ba-4",
        category: "balcony",
        title: "Relaxed Sunset Terrace",
        description:
          "Warm, sky-facing communal spots perfect for peaceful unwinding in the evening.",
        imageUrl: "/images/balcony/img4.jpg",
      },
      {
        id: "ba-5",
        category: "balcony",
        title: "Secure High Vista Walk",
        description:
          "Comfortable perimeter pathways providing safe outside tracking layers.",
        imageUrl: "/images/balcony/img5.jpg",
      },
    ],
    [],
  );

  // Filter computation logic (No more "all" check)
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => item.category === activeCategory);
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
                {/* FILTER NAVIGATION - NO VIEW ALL, NO NUMBERS */}
                <div className="mb-10">
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 text-center lg:text-left">
                    Filter Facility Environments
                  </label>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start bg-stone-100 p-2 rounded-2xl max-w-max mx-auto lg:mx-0">
                    {[
                      { id: "back-porch", label: "Back Porch", icon: TreePine },
                      { id: "back-rooms", label: "Back Rooms", icon: Bed },
                      {
                        id: "front-porch",
                        label: "Front Porch",
                        icon: DoorOpen,
                      },
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
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#023b32]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" />

                          {/* ZOOM EXPANSION ACTIVATOR */}
                          <button
                            type="button"
                            onClick={() => setSelectedImage(item)}
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#035346] p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0 hover:bg-[#035346] hover:text-white"
                          >
                            <Maximize2 size={16} />
                          </button>
                        </div>

                        <div className="p-4 pt-5">
                          <span className="text-[#DD844B] text-[10px] font-bold tracking-[2px] uppercase block mb-1">
                            {item.category.replace("-", " ")}
                          </span>
                          <h3 className="text-lg font-serif font-normal text-[#035346] tracking-wide mb-2">
                            {item.title}
                          </h3>
                          <p className="text-stone-500 text-xs leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* EMPTY FALLBACK CONFIGURATION */}
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
                    alt={selectedImage.title}
                    className="w-full h-full object-contain max-h-[65vh] mx-auto"
                  />
                </div>

                <div className="p-6 sm:p-10 bg-white border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="text-[#DD844B] text-xs font-bold tracking-[3px] uppercase block mb-1">
                      {selectedImage.category.replace("-", " ")} Showcase Asset
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif text-[#035346]">
                      {selectedImage.title}
                    </h2>
                    <p className="mt-2 text-stone-500 text-xs sm:text-sm leading-relaxed font-light">
                      {selectedImage.description}
                    </p>
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
