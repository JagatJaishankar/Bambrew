"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

export default function Education() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl =
      "https://stream.mux.com/f93ezdDcsqOn02W018Of4DyqRyAk01Zcc800c900Td5NTGEc.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari native HLS support
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section id="learn" className="bg-[#f5f3ed] py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-sm text-[#1a3a2e] font-normal">Seed</span>
              <span className="text-sm text-[#666]">[</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a3a2e"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              <span className="text-sm text-[#666]">]</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-medium text-[#1a3a2e] leading-tight mb-6">
              You are more than human.
            </h2>

            <p className="text-base text-[#666666] leading-relaxed mb-8 max-w-md font-normal">
              Your body isn&apos;t yours alone—it&apos;s home to 38 trillion
              microbes that power your digestion, immunity and more. Take a few
              minutes to learn how their health impacts your health—and how to
              maximize both.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a3a2e] text-white pl-6 pr-4 py-3 rounded-full text-sm font-normal hover:bg-[#2d5a47] transition-colors inline-flex items-center gap-3"
            >
              Discover
              <span className="w-8 h-8 bg-[#4a7c59] rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
            </motion.button>

            <p className="text-xs text-[#666] mt-8 uppercase tracking-wider font-normal">
              SCIENCE / Microbiome 101
            </p>
          </motion.div>

          {/* Right Video - HLS Stream */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#e8e4dc] border border-green-800">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
