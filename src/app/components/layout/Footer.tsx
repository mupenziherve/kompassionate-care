"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#035346] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="flex flex-col items-start">
            <img
              src="/images/logo2.png"
              alt="Kompassionate Care"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-6 text-stone-200 text-sm leading-relaxed font-normal">
              Compassionate, professional, and family-centered care in a safe
              and comfortable home environment.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#DD844B] tracking-wide mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3 text-sm text-stone-200">
              <Link
                href="/"
                className="hover:text-[#DD844B] transition-colors duration-200 w-fit"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-[#DD844B] transition-colors duration-200 w-fit"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-[#DD844B] transition-colors duration-200 w-fit"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[#DD844B] transition-colors duration-200 w-fit"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#DD844B] transition-colors duration-200 w-fit"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#DD844B] tracking-wide mb-6">
              Services
            </h3>
            <div className="flex flex-col space-y-3 text-sm text-stone-200 font-normal">
              <p className="hover:text-[#DD844B] transition-colors duration-200 cursor-default">
                24-Hour Care
              </p>
              <p className="hover:text-[#DD844B] transition-colors duration-200 cursor-default">
                Memory Care
              </p>
              <p className="hover:text-[#DD844B] transition-colors duration-200 cursor-default">
                Hospice Support
              </p>
              <p className="hover:text-[#DD844B] transition-colors duration-200 cursor-default">
                Behavioral Health
              </p>
              <p className="hover:text-[#DD844B] transition-colors duration-200 cursor-default">
                Therapy Support
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#DD844B] tracking-wide mb-6">
              Contact
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm text-stone-200 font-normal">
              <p className="leading-relaxed">
                5110 SE Drake Rd
                <br />
                Hillsboro OR, 97123
              </p>
              <p className="hover:text-[#DD844B] transition-colors duration-200 w-fit">
                <a href="tel:9713711444">+1 (971) 371-1444</a>
              </p>
              <p className="hover:text-[#DD844B] transition-colors duration-200 w-fit">
                <a href="mailto:info@kompassionatecare.com">
                  info@kompassionatecare.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-stone-300 font-normal tracking-wider">
          &copy; 2026 Kompassionate Care. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
