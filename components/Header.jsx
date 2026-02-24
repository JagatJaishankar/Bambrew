"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const glassStyle = {
    background: scrolled
      ? "rgba(255, 255, 255, 0.75)"
      : "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: scrolled
      ? "1px solid rgba(255, 255, 255, 0.6)"
      : "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: scrolled
      ? "0 8px 32px rgba(0, 0, 0, 0.08)"
      : "0 4px 24px rgba(0, 0, 0, 0.04)",
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#1a3a2e] text-white text-center py-2.5 text-sm font-normal">
        <Link href="#" className="hover:underline inline-flex items-center gap-2">
          Is Bambrew Right For Your Home?
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

      {/* Split Navbar - Two Glass Blobs */}
      <div className="sticky top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Left Blob - Logo + Nav Links */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1 px-3 py-2.5 rounded-full transition-all duration-300"
              style={glassStyle}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-1.5 px-3 py-1">
                <Image
                  src="/assets/images/logo.avif"
                  alt="Bambrew"
                  width={80}
                  height={28}
                  className="h-6 w-auto"
                  priority
                />
                <span className="w-2 h-2 rounded-full bg-[#4a7c59]" />
              </Link>

              {/* Nav Links */}
              <div className="hidden md:flex items-center ml-2">
                <Link
                  href="#shop"
                  className="text-sm font-normal text-[#1a3a2e] hover:text-[#4a7c59] transition-colors px-4 py-1.5"
                >
                  Shop
                </Link>
                <Link
                  href="#science"
                  className="text-sm font-normal text-[#1a3a2e] hover:text-[#4a7c59] transition-colors px-4 py-1.5"
                >
                  Science
                </Link>
                <Link
                  href="#learn"
                  className="text-sm font-normal text-[#1a3a2e] hover:text-[#4a7c59] transition-colors px-4 py-1.5"
                >
                  Learn
                </Link>
              </div>
            </motion.div>

            {/* Right Blob - Login + Get Started */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1 px-3 py-2.5 rounded-full transition-all duration-300"
              style={glassStyle}
            >
              <Link
                href="#login"
                className="hidden sm:block text-sm font-normal text-[#1a3a2e] hover:text-[#4a7c59] transition-colors px-4 py-1.5"
              >
                Login
              </Link>
              <button
                className="bg-[#1a3a2e] text-white px-5 py-2 rounded-full text-sm font-normal hover:bg-[#2d5a47] transition-colors"
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
