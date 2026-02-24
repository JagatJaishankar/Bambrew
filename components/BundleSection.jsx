"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BundleSection() {
  return (
    <section className="relative py-20 lg:py-28 rounded-t-[48px] -mt-8 z-10 overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl"
        style={{
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(245,243,237,0.9) 50%, rgba(255,255,255,0.7) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1.5 bg-[#d4f4dd] text-[#1a3a2e] rounded text-xs font-normal mb-6">
              Bundle + Save 25%
            </span>

            <h2 className="text-3xl lg:text-5xl font-medium text-[#1a3a2e] leading-tight mb-4">
              Daily essentials for nutrition and digestive health.
            </h2>

            <p className="text-base text-[#666666] leading-relaxed mb-8 max-w-md font-normal">
              Clinically proven daily probiotic and new daily multivitamin that help cover nutrient gaps, reduce bloating, and promote healthy regularity.*
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a3a2e] text-white px-7 py-3.5 rounded-full text-sm font-normal hover:bg-[#2d5a47] transition-colors"
            >
              Shop Daily Essentials Duo
            </motion.button>
          </motion.div>

          {/* Right - Product Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphic Card */}
            <div
              className="rounded-3xl p-8 lg:p-12 border border-white/50"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(245,243,237,0.6) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Product Labels */}
              <div className="flex justify-between mb-4">
                <span className="px-3 py-1 border border-[#1a3a2e] rounded-full text-xs text-[#1a3a2e] font-normal">
                  BC-01
                </span>
                <span className="px-3 py-1 border border-[#1a3a2e] rounded-full text-xs text-[#1a3a2e] font-normal">
                  HK-02
                </span>
              </div>

              {/* Product Images */}
              <div className="flex justify-center items-end gap-6">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/assets/images/product-daily-carry.png"
                    alt="Daily Carry Bags"
                    width={180}
                    height={180}
                    className="w-32 lg:w-40 h-auto object-contain"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Image
                    src="/assets/images/product-home-kitchen.png"
                    alt="Home & Kitchen"
                    width={180}
                    height={180}
                    className="w-32 lg:w-40 h-auto object-contain"
                  />
                </motion.div>
              </div>

              {/* Product Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#1a3a2e] rounded-2xl p-4 text-white">
                  <p className="text-xs opacity-80 mb-1 font-normal">BC-01 DAILY CARRY</p>
                  <p className="text-sm font-normal">Essential shopping bags for everyday errands.</p>
                </div>
                <div className="bg-[#4a7c59] rounded-2xl p-4 text-white">
                  <p className="text-xs opacity-80 mb-1 font-normal">HK-02 HOME KITCHEN</p>
                  <p className="text-sm font-normal">Bin liners and wraps for a cleaner home.</p>
                </div>
              </div>
            </div>

            {/* Lifestyle Images Row */}
            <div className="flex gap-4 mt-6 justify-center">
              <div className="w-24 h-16 rounded-lg overflow-hidden border border-white/30"
                style={{
                  background: "linear-gradient(135deg, rgba(168,213,186,0.5) 0%, rgba(74,124,89,0.4) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              />
              <div className="w-24 h-16 rounded-lg overflow-hidden border border-white/30"
                style={{
                  background: "linear-gradient(135deg, rgba(212,244,221,0.5) 0%, rgba(168,213,186,0.4) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              />
              <div className="w-24 h-16 rounded-lg overflow-hidden border border-white/30"
                style={{
                  background: "linear-gradient(135deg, rgba(74,124,89,0.5) 0%, rgba(26,58,46,0.4) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
