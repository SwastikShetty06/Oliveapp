"use client";

import { motion } from "framer-motion";

export default function Independence() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollVariant}
        className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
      >
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-inter font-bold text-[#FFA6B6] leading-[1.1] tracking-tight">
            100% Independent.<br />Always.
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-xl md:text-2xl font-inter font-bold text-[#3D6E3D] leading-snug">
            We <span className="text-[#B9D066]">never monetize</span> through brand deals, affiliate links, or ads — so <span className="text-[#B9D066]">you can trust</span> our recommendations are always aligned with our users.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
