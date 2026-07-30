"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100/50 h-20"
          : "bg-white shadow-sm h-24"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="relative flex items-center h-full group">
          <Image
            src="/images/logo.png"
            alt="Kompassionate Care"
            width={220}
            height={80}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 relative h-full">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide rounded-full flex items-center gap-1 transition-all duration-300 transform ${
                  isActive
                    ? "text-[#DD844B]"
                    : "text-gray-600 hover:text-[#035346] hover:-translate-y-[0.5px]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navActiveTrack"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#DD844B]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Global Action Controls Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+15034874894"
            className="group flex items-center gap-2.5 text-[#035346] font-bold text-sm transition-opacity hover:opacity-90"
          >
            <div className="bg-[#035346]/5 p-2 rounded-full group-hover:bg-[#035346]/10 transition-colors">
              <Phone size={14} className="text-[#035346]" fill="currentColor" />
            </div>
            <span>1 (503) 487-4894</span>
          </a>

          <Link href="/contact?type=tour">
            <motion.button
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#DD844B] hover:bg-[#c8743d] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200 shadow-md shadow-[#DD844B]/10"
            >
              Schedule Tour
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle Trigger */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Responsive Mobile Layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl overflow-y-auto max-h-[calc(100vh-6rem)] z-40"
          >
            <div className="px-6 pt-4 pb-8 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isLinkActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isLinkActive
                        ? "text-[#DD844B] bg-[#DD844B]/[0.06]"
                        : "text-gray-800 active:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-4">
                <div className="text-xs text-gray-400 font-medium flex items-center gap-2 px-4">
                  <MapPin size={14} className="text-gray-400" />
                  <span>5110 SE Drake Rd, Hillsboro OR, 97129</span>
                </div>

                <a
                  href="tel:+15034874894"
                  className="flex items-center gap-3 text-[#035346] font-bold py-2 px-4 rounded-xl active:bg-[#035346]/[0.04] transition-colors"
                >
                  <Phone size={16} />
                  <span>Call 1 (503) 487 4894</span>
                </a>

                <Link
                  href="/contact?type=tour"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#DD844B] text-white py-3.5 rounded-full font-semibold text-sm shadow-md shadow-[#DD844B]/10 transition-colors active:bg-[#c8743d]"
                  >
                    Schedule Tour
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
