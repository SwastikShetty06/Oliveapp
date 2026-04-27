"use client";

import { motion } from "framer-motion";
import { IconCheck, IconBrandAppleFilled } from "@tabler/icons-react";

export default function FinalCTA() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollVariant}
        className="relative rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center min-h-[450px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80" 
            alt="Family Dinner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-10 md:p-16 text-white w-full">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-8 leading-tight max-w-md">
            Keep your family <br /> safe with Olive
          </h2>
          
          <ul className="space-y-4 mb-10 max-w-md">
            {[
              "Effortless food scanning",
              "Peace of mind for parents",
              "Healthy product recommendations",
            ].map((feature, idx) => (
              <li key={idx} className="flex gap-3 items-center">
                <div className="bg-white rounded-full p-0.5 shrink-0">
                  <IconCheck size={12} className="text-olive-dark stroke-[3]" />
                </div>
                <span className="font-dm-sans text-sm md:text-base font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 bg-white text-olive-dark px-8 py-3.5 rounded-full font-inter font-medium text-sm shadow-md hover:scale-105 transition-transform duration-300">
            <IconBrandAppleFilled size={18} />
            Download for iOS
          </button>
        </div>

        {/* Abstract white lines / graphics if needed */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-10 overflow-hidden">
          <svg className="absolute w-full h-full" fill="none" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path d="M-100,100 C200,300 400,-100 600,100 C800,300 1100,0 1100,0" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <path d="M500,600 C600,300 800,500 900,100 C1000,-100 1100,200 1100,200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
