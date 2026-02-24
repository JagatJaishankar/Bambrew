"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  products: {
    title: "PRODUCTS",
    links: ["Shop All", "Daily Carry", "Home & Kitchen", "Creator Kits", "Office & Gifting"],
  },
  about: {
    title: "ABOUT",
    links: ["Science", "Sustainability", "Bambrew Labs", "Our Story"],
  },
  inquire: {
    title: "INQUIRE",
    links: ["Partner", "Practitioners", "Press"],
  },
  help: {
    title: "HELP",
    links: ["Help", "Contact", "My Account", "International"],
  },
  social: {
    title: "SOCIAL",
    links: ["Instagram", "Twitter", "LinkedIn", "Refer"],
  },
  legal: {
    title: "LEGAL",
    links: ["Terms + Conditions", "Privacy Policy", "Accessibility", "Consent Preferences"],
  },
};

export default function Footer() {
  return (
    <footer className="relative">
      {/* Main Footer Content */}
      <div className="bg-[#1a3a2e] pt-16 pb-8">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Left - Brand */}
            <div>
              <Image
                src="/assets/images/logo.avif"
                alt="Bambrew"
                width={100}
                height={32}
                className="h-8 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-lg text-white leading-relaxed max-w-md font-normal">
                Pioneering{" "}
                <span className="inline-flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#a8d5ba]">
                    <path d="M12 2a10 10 0 1 0 10 10"/>
                  </svg>
                </span>{" "}
                advanced biopolymer materials{" "}
                <span className="px-2 py-0.5 bg-[#2d5a47] rounded text-xs font-normal">R&D</span>{" "}
                for human and planetary health{" "}
                <span className="inline-flex items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#a8d5ba]">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </span>{" "}
                since 2020.
              </p>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-sm text-white/60 mb-2 font-normal">
                  Science with Bambrew—nerdy reads for your inbox.
                </p>
                <p className="text-xs text-white/40 mb-4 font-normal">
                  By signing up you consent to receive Bambrew emails.
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1 max-w-xs">
                    <input
                      type="email"
                      placeholder="Sign Up For Our Newsletter"
                      className="w-full bg-transparent border-b border-white/30 py-2 pr-10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors font-normal"
                    />
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Join Link */}
            <div className="lg:text-right">
              <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors font-normal">
                Join
              </Link>
            </div>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
          >
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-xs text-white/40 font-normal mb-4 tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-white/70 hover:text-white transition-colors text-sm font-normal"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-white/10 pt-8"
          >
            <p className="text-[10px] text-white/30 max-w-2xl font-normal">
              *These statements have not been evaluated by the Food and Drug Administration.
              This product is not intended to diagnose, treat, cure or prevent any disease.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Extended Plant Background Section with GIF overlay */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Plant Background Image */}
        <Image
          src="/assets/images/plants-background.jpg"
          alt="Nature background"
          fill
          className="object-cover"
        />

        {/* Gradient overlay from dark green */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a2e] via-[#1a3a2e]/60 to-transparent" />

        {/* GIF Overlay - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-3xl h-[200px]"
          >
            <Image
              src="/assets/gifs/stay-small-leave-less.gif"
              alt="Stay small, leave less"
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
        </div>

        {/* Copyright Section at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1a3a2e]/90 backdrop-blur-sm py-6">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright Text */}
              <p className="text-xs text-white/50 font-normal">
                © 2025 Bambrew (Bambrew Health, Inc.). All rights reserved.
              </p>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-normal">
                  Terms of Service
                </Link>
                <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-normal">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-normal">
                  Cookie Policy
                </Link>
                <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-normal">
                  Accessibility
                </Link>
              </div>

              {/* Made with love */}
              <p className="text-xs text-white/40 font-normal">
                Made with 🌱 for the planet
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
