"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function CTASection() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const images = [
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1605296830714-7c02e14957ac?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1200&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollVariant}
        className="bg-[#3A563F] rounded-[3rem] flex flex-col items-center overflow-hidden w-full relative shadow-xl"
      >
        {/* Top Image Area */}
        <div 
          className="w-full relative h-[350px] md:h-[450px] overflow-hidden mb-12"
          style={{ borderBottomLeftRadius: '50% 20%', borderBottomRightRadius: '50% 20%' }}
        >
          {/* Black overlay for better text/dot contrast */}
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
          
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="Cooking" 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          {/* Carousel dots inside the image area near the bottom */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
              />
            ))}
          </div>
        </div>

        {/* Text Area */}
        <div className="text-center px-8 pb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-inter font-bold text-white mb-8 leading-tight">
            Protect Your Family <br /> From Hidden Toxins
          </h2>
          <button className="bg-white text-[#3A563F] px-8 py-3.5 rounded-full font-inter font-bold text-sm shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
            Sign up for Olive today
          </button>
        </div>
      </motion.div>
    </section>
  );
}
