"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductScience() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section id="science" className="relative py-20 lg:py-28">
      {/* Background Image with Plants */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/plants-background.jpg"
          alt="Nature background"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Main Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(215,220,212,0.88) 0%, rgba(205,215,208,0.82) 35%, rgba(195,208,200,0.72) 65%, rgba(185,200,190,0.55) 100%)",
            backdropFilter: "blur(40px) saturate(150%)",
            WebkitBackdropFilter: "blur(40px) saturate(150%)",
          }}
        >
          <div className="relative min-h-[480px] lg:min-h-[520px]">
            {/* Left Content */}
            <div className="p-10 lg:p-14 lg:pl-16 lg:pr-[50%] flex flex-col">
              {/* Top Badge */}
              <div className="flex items-center gap-2.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4a7c59]" />
                <span className="text-[11px] text-[#1a3a2e]/60 uppercase tracking-[0.2em] font-medium">
                  COMPOSTABLE® TECHNOLOGY
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#1a3a2e] leading-[1.12] tracking-[-0.02em] mb-10 max-w-[520px]">
                Most &apos;eco&apos; plastics don&apos;t survive composting—BC-01® does.
              </h2>

              {/* Stats Card */}
              <div
                className="inline-flex rounded-xl px-6 py-5 mb-auto max-w-[320px]"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex items-center gap-5">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 border border-[#1a3a2e]/25 rounded-full text-[10px] text-[#1a3a2e]/70 font-medium">
                      BC-01®
                    </span>
                    <p className="text-[13px] text-[#1a3a2e]/70 mt-2 font-normal leading-snug">
                      Increases<br />healthy bacteria by
                    </p>
                  </div>
                  <div className="flex items-baseline">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-1 self-center">
                      <circle cx="12" cy="12" r="10" fill="#4a7c59"/>
                      <path d="M12 16V8M8 12l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[48px] font-light text-[#1a3a2e] tracking-tight leading-none">4.6x</span>
                    <span className="text-sm text-[#1a3a2e]/40 ml-0.5 -mt-6">*</span>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <p className="text-[11px] text-[#1a3a2e]/45 font-normal mt-8">
                *in a clinical trial of n=103 individuals with occasional GI challenges
              </p>
            </div>

            {/* Right Side - Video with Labels */}
            <div className="absolute top-0 right-0 bottom-0 w-[50%] hidden lg:block">
              {/* Outer Capsule Label - Top Left */}
              <div className="absolute top-14 left-4 flex items-start gap-4">
                <div className="max-w-[160px] text-left">
                  <p className="text-[11px] text-[#1a3a2e]/85 uppercase tracking-wider font-semibold mb-1.5">
                    OUTER LAYER
                  </p>
                  <p className="text-[11px] text-[#1a3a2e]/55 leading-relaxed font-normal">
                    Shields products from stomach acid in the digestive tract, while delivering prebiotics to stimulate the growth of beneficial bacteria.
                  </p>
                </div>
                {/* Dashed line */}
                <div className="w-16 border-t border-dashed border-[#1a3a2e]/40 mt-2 flex-shrink-0" />
              </div>

              {/* Video Container - Centered */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[280px] h-auto"
                >
                  <source src="/assets/videos/product-science.mov" type="video/quicktime" />
                  <source src="/assets/videos/product-science.mov" type="video/mp4" />
                </video>
              </div>

              {/* Inner Capsule Label - Bottom Right */}
              <div className="absolute bottom-16 right-8 flex items-start gap-4">
                {/* Dashed line */}
                <div className="w-16 border-t border-dashed border-[#1a3a2e]/40 mt-2 flex-shrink-0" />
                <div className="max-w-[140px] text-left">
                  <p className="text-[11px] text-[#1a3a2e]/85 uppercase tracking-wider font-semibold mb-1.5">
                    INNER CORE
                  </p>
                  <p className="text-[11px] text-[#1a3a2e]/55 leading-relaxed font-normal">
                    Delivers plant-based polymers to the colon, where they&apos;re needed most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
