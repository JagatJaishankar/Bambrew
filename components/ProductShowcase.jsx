"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    badge: "Bestseller",
    badgeColor: "bg-[#1a3a2e]",
    sku: "BC-01®",
    title: "Daily Carry Bags",
    image: "/assets/images/product-daily-carry.png",
    price: "₹49.99",
    priceSuffix: "per piece",
  },
  {
    badge: "New",
    badgeColor: "bg-[#4a7c59]",
    sku: "HK-02™",
    title: "Home & Kitchen",
    image: "/assets/images/product-home-kitchen.png",
    price: "₹39.99",
    priceSuffix: "per piece",
  },
  {
    badge: "New",
    badgeColor: "bg-[#4a7c59]",
    sku: "CS-03™",
    title: "Creator & Shipping",
    image: "/assets/images/product-creator-shipping.png",
    price: "₹34.99",
    priceSuffix: "per piece",
  },
  {
    badge: "New",
    badgeColor: "bg-[#4a7c59]",
    sku: "OG-04™",
    title: "Office & Gifting",
    image: "/assets/images/product-office-gifting.png",
    price: "₹34.99",
    priceSuffix: "per piece",
  },
];

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="shop"
      className="bg-[#1a3a2e] pt-20 lg:pt-28 pb-24 lg:pb-32 relative overflow-hidden rounded-t-[48px] -mt-12"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16"
        >
          <h2 className="text-3xl lg:text-[3.25rem] font-normal text-white leading-[1.1] max-w-md italic">
            Whole body health starts in the gut.
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="text-sm text-white/70 max-w-sm lg:text-right font-normal leading-relaxed">
              Formulations that provide fast-acting and sustained support using
              scientifically and clinically studied ingredients.
            </p>
            <Link
              href="#shop-all"
              className="text-white hover:text-[#a8d5ba] transition-colors flex items-center gap-1.5 text-sm font-medium underline underline-offset-4"
            >
              Shop All
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Product Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-end h-[480px]"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {products.map((product, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Badge - positioned above the card */}
                <div className="absolute -top-3 left-4 z-20">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium text-white shadow-md ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Card Container */}
                <motion.div
                  className="relative rounded-[24px] overflow-hidden cursor-pointer flex flex-col items-center bg-[#487858] shadow-lg"
                  initial={false}
                  animate={{
                    height: isActive ? 460 : 400,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Card Inner Content */}
                  <div className="flex flex-col items-center w-full h-full pt-10 pb-5 px-5">
                    {/* SKU Badge */}
                    <div className="mb-2">
                      <span className="px-3 py-1 border border-white/25 rounded-full text-[10px] text-white/80 font-medium tracking-wide">
                        {product.sku}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-white text-center mb-4 leading-tight">
                      {product.title}
                    </h3>

                    {/* Product Image Container */}
                    <div className="flex-1 flex items-center justify-center w-full relative">
                      <motion.div
                        initial={false}
                        animate={{
                          scale: isActive ? 1.08 : 1,
                          y: isActive ? -5 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={220}
                          height={220}
                          className="w-auto h-[180px] object-contain drop-shadow-xl"
                        />
                      </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <div className="w-full mt-auto">
                      {/* Shop Now Button */}
                      <motion.div
                        className="flex justify-center mb-3"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 15,
                          scale: isActive ? 1 : 0.95,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <button className="bg-white text-[#1a3a2e] px-7 py-3 rounded-full text-sm font-medium hover:bg-[#f5f3ed] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
                          Shop Now
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </motion.div>

                      {/* Price */}
                      <p className="text-[11px] text-white/60 text-center font-normal">
                        Starting at{" "}
                        <span className="text-white/90 font-medium">
                          {product.price}
                        </span>{" "}
                        {product.priceSuffix}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
