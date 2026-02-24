"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SeedLabs() {
  return (
    <section className="bg-[#f5f3ed] py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Card - Bambrew Labs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] overflow-hidden min-h-[480px] group cursor-pointer"
          >
            {/* Background Image/Gradient */}
            <div className="absolute inset-0">
              <Image
                src="/assets/images/plants-background.jpg"
                alt="Bambrew Labs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Vertical Text */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
              <span className="text-[10px] text-white/60 uppercase tracking-widest whitespace-nowrap font-normal">
                R&D · RESEARCH · IMPACT
              </span>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
              <h3 className="text-3xl lg:text-4xl font-medium text-white leading-tight mb-3">
                Bambrew [Labs]
              </h3>
              <p className="text-base text-white/80 leading-relaxed mb-6 max-w-sm font-normal">
                Because sustainability is not just human.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="self-start px-6 py-3 rounded-full text-sm font-normal text-white transition-colors border border-white/30"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                Read More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Card - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-[32px] overflow-hidden min-h-[480px] bg-gradient-to-br from-[#2d5a47] via-[#3d6a57] to-[#4a7c59]"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-32 h-32 border border-white/30 rounded-full" />
              <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/20 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center p-8 lg:p-10">
              {/* Icon */}
              <div className="w-16 h-16 mb-6 opacity-80">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="32" cy="20" rx="8" ry="16" fill="white" fillOpacity="0.3"/>
                  <ellipse cx="32" cy="44" rx="8" ry="16" fill="white" fillOpacity="0.3"/>
                  <circle cx="32" cy="32" r="6" fill="white" fillOpacity="0.5"/>
                </svg>
              </div>

              <h3 className="text-2xl lg:text-3xl font-medium text-white leading-tight mb-3">
                Change your plastic footprint for good.
              </h3>
              <p className="text-base text-white/80 leading-relaxed mb-8 max-w-sm font-normal">
                Feel lasting relief in one week with BC-01®
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#1a3a2e] px-8 py-3.5 rounded-full text-sm font-normal hover:bg-[#f5f3ed] transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
