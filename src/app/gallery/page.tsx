import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GalleryClient from "./GalleryClient";
import { getGalleryItems } from "@/lib/contentful";

export const revalidate = 0;

export default async function GalleryPage() {
  const contentfulItems = await getGalleryItems();

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F4] min-h-screen">
        <section className="relative h-[460px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
              className="w-full h-full object-cover opacity-40"
              alt="Gallery Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/75 to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <div className="max-w-2xl bg-[#035346]/90 backdrop-blur-md rounded-[2rem] p-10 border border-white/10 shadow-2xl">
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase">
                Visual Sanctuary
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-serif text-white">
                Experience Our Beautiful Home
              </h1>
              <p className="mt-4 text-stone-200 text-sm sm:text-base font-light">
                Take a virtual walkthrough of our facility.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 -mt-12 relative z-20">
          <GalleryClient items={contentfulItems} />
        </section>
      </main>
      <Footer />
    </>
  );
}
