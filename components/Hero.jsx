"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#f5f3ed] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh]">
          {/* Left Content - Vertically Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="z-10 order-2 lg:order-1 flex flex-col justify-center h-full"
          >
            {/* Product Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="px-3 py-1 border border-[#1a3a2e] rounded-full text-xs font-normal text-[#1a3a2e]">
                BAMBREW
              </span>
              <span className="text-sm text-[#1a3a2e] font-normal">Plastic-Free Living</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#2d5a47] leading-[1.1] tracking-tight mb-6">
              A plastic-free life can change your world.
            </h1>

            <p className="text-base lg:text-lg text-[#666666] leading-relaxed mb-8 max-w-md font-normal">
              Our advanced plant-based materials replace single-use plastic in the products you use every day — bags, liners, wraps, and more.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1a3a2e] text-white px-7 py-3.5 rounded-full text-sm font-normal hover:bg-[#2d5a47] transition-colors"
              >
                Shop Essentials
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-[#1a3a2e] text-sm font-normal hover:text-[#4a7c59] transition-colors inline-flex items-center gap-2 underline underline-offset-4"
              >
                Take The Quiz
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2 h-full"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/images/hero-product.png"
                alt="Bambrew eco-friendly products"
                width={800}
                height={800}
                className="w-[400px] sm:w-[450px] lg:w-[520px] xl:w-[580px] h-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
