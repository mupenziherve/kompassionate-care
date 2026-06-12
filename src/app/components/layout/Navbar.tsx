"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Clock,
  Heart,
  Shield,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_DATA = [
  {
    title: "24-Hour Care",
    desc: "Continuous around-the-clock supervision, companion support, and absolute safety.",
    icon: Clock,
    href: "/services/24-hour-care",
  },
  {
    title: "Hospice Support",
    desc: "Compassionate end-of-life care focusing on comfort, grace, and family support.",
    icon: Heart,
    href: "/services/hospice-support",
  },
  {
    title: "Specialized Care",
    desc: "Dedicated programs tailored for memory loss, Alzheimer's, and recovery.",
    icon: Shield,
    href: "/services/specialized-care",
  },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile dropdown state when master menu closes
  useEffect(() => {
    if (!isOpen) setMobileServicesOpen(false);
  }, [isOpen]);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

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
          {NAV_LINKS.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <div
                key={link.href}
                className="relative h-full flex items-center"
                onMouseEnter={() => {
                  setHoveredIndex(idx);
                  if (link.hasDropdown) handleMouseEnter(link.name);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (link.hasDropdown) handleMouseLeave();
                }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide rounded-full flex items-center gap-1 transition-all duration-300 transform ${
                    isActive
                      ? "text-[#DD844B]"
                      : "text-gray-600 hover:text-[#035346] hover:-translate-y-[0.5px]"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeMenu === link.name ? "rotate-180" : ""}`}
                    />
                  )}

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

                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#035346]/[0.08] to-[#035346]/[0.02] rounded-full -z-10 border border-[#035346]/[0.12] shadow-[0_4px_12px_-3px_rgba(3,83,70,0.06)] backdrop-blur-[2px]"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                      }}
                    />
                  )}
                </Link>

                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-3xl p-6 shadow-2xl border border-gray-100/80 z-50 grid gap-4"
                      >
                        <div className="bg-[#035346]/5 rounded-2xl p-3 px-4 flex items-center gap-2 text-xs text-[#035346] font-medium">
                          <MapPin size={14} className="text-[#DD844B]" />
                          <span>Adult Foster Care • Hillsboro, Oregon</span>
                        </div>

                        <div className="flex flex-col gap-1">
                          {SERVICES_DATA.map((service) => {
                            const IconComp = service.icon;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                              >
                                <div className="bg-[#035346]/5 text-[#035346] p-2.5 rounded-xl group-hover/item:bg-[#DD844B] group-hover/item:text-white transition-colors duration-200 shrink-0">
                                  <IconComp size={18} />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-sm group-hover/item:text-[#035346] transition-colors">
                                    {service.title}
                                  </h4>
                                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                                    {service.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Global Action Controls Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+19713711444"
            className="group flex items-center gap-2.5 text-[#035346] font-bold text-sm transition-opacity hover:opacity-90"
          >
            <div className="bg-[#035346]/5 p-2 rounded-full group-hover:bg-[#035346]/10 transition-colors">
              <Phone size={14} className="text-[#035346]" fill="currentColor" />
            </div>
            <span>(971) 371-1444</span>
          </a>

          <motion.button
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#DD844B] hover:bg-[#c8743d] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200 shadow-md shadow-[#DD844B]/10"
          >
            Schedule Tour
          </motion.button>
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

                // Mobile link layout with dropdown nesting support
                if (link.hasDropdown) {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                          mobileServicesOpen || isLinkActive
                            ? "text-[#035346] bg-[#035346]/[0.05]"
                            : "text-gray-800 active:bg-gray-50"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 text-gray-500 ${
                            mobileServicesOpen
                              ? "rotate-180 text-[#035346]"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Smooth Collapsible Drawer for Services */}
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-3 flex flex-col gap-1 mt-1 border-l-2 border-[#035346]/10 ml-4"
                          >
                            {SERVICES_DATA.map((service) => {
                              const SubIcon = service.icon;
                              return (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-gray-600 font-medium transition-colors active:bg-[#035346]/[0.04] active:text-[#035346]"
                                >
                                  <div className="bg-[#035346]/5 text-[#035346] p-1.5 rounded-md">
                                    <SubIcon size={14} />
                                  </div>
                                  <span>{service.title}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Standard Mobile Navigation Link
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

              {/* Mobile Context Info & Action Panel */}
              <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-4">
                <div className="text-xs text-gray-400 font-medium flex items-center gap-2 px-4">
                  <MapPin size={14} className="text-gray-400" />
                  <span>5110 SE Drake Rd, Hillsboro OR, 97123</span>
                </div>

                <a
                  href="tel:+19713711444"
                  className="flex items-center gap-3 text-[#035346] font-bold py-2 px-4 rounded-xl active:bg-[#035346]/[0.04] transition-colors"
                >
                  <Phone size={16} />
                  <span>Call (971) 371-1444</span>
                </a>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#DD844B] text-white py-3.5 rounded-full font-semibold text-sm shadow-md shadow-[#DD844B]/10 transition-colors active:bg-[#c8743d]"
                >
                  Schedule Tour
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
