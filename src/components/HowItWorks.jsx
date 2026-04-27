"use client";

import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";

export default function HowItWorks() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const carouselImages = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?auto=format&fit=crop&w=200&q=80",
  ];

  return (
    <section id="features" className="py-24 px-4 md:px-8 max-w-6xl mx-auto w-full">
      <div className="mb-16 flex justify-center items-center gap-6 md:gap-8">
        <h2 className="text-3xl md:text-5xl font-inter text-olive-dark font-bold text-left leading-tight">
          How the Olive Food <br /> Scanner App Works
        </h2>
        <span className="text-5xl md:text-6xl">🥑</span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollVariant}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1: Scan & Detect */}
        <div className="bg-[#F5F9F6] rounded-[2rem] p-8 flex flex-col items-start relative overflow-hidden group">
          <h3 className="font-inter text-lg md:text-xl text-[#2E4A31] font-semibold mb-8">
            Scan & Detect
          </h3>
          
          <div className="relative w-full flex-1 min-h-[180px] flex items-center justify-center mb-8">
            {/* Scan Frame */}
            <div className="absolute top-2 left-6 w-10 h-10 border-t-2 border-l-2 border-[#A3B3A6] rounded-tl-[1rem]"></div>
            <div className="absolute top-2 right-6 w-10 h-10 border-t-2 border-r-2 border-[#A3B3A6] rounded-tr-[1rem]"></div>
            <div className="absolute bottom-2 left-6 w-10 h-10 border-b-2 border-l-2 border-[#A3B3A6] rounded-bl-[1rem]"></div>
            <div className="absolute bottom-2 right-6 w-10 h-10 border-b-2 border-r-2 border-[#A3B3A6] rounded-br-[1rem]"></div>
            
            {/* Sparkles */}
            <svg className="absolute top-6 left-12 text-[#A3B3A6] w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <svg className="absolute bottom-10 left-10 text-[#A3B3A6] w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <svg className="absolute top-1/2 right-10 text-[#A3B3A6] w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            {/* Avocado with Barcode */}
            <div className="relative z-10 flex items-center justify-center pb-4">
              <img
                src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=200&q=80"
                alt="Avocado"
                className="w-28 h-36 object-cover object-center rounded-[2rem] mix-blend-multiply"
              />
              <div className="absolute bottom-6 right-0 bg-white px-2 py-1 rounded shadow-md rotate-[-5deg]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-036000291452.svg" alt="Barcode" className="w-10 h-5 opacity-80" />
              </div>
            </div>
            
            {/* Laser */}
            <motion.div
              className="absolute left-8 right-8 h-[2px] bg-[#2E4A31] z-20 shadow-[0_0_8px_1px_rgba(46,74,49,0.4)]"
              animate={{ y: [-40, 60, -40] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </div>

          <p className="text-sm font-dm-sans text-neutral-500 leading-relaxed">
            When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.
          </p>
        </div>

        {/* Card 2: Data Analysis & Validation */}
        <div className="bg-[#F5F9F6] rounded-[2rem] p-8 flex flex-col items-start relative overflow-hidden group">
          <h3 className="font-inter text-lg md:text-xl text-[#2E4A31] font-semibold mb-8">
            Data Analysis & Validation
          </h3>

          <div className="relative w-full flex-1 min-h-[180px] flex flex-col items-center justify-center mb-8">
            {/* Horizontal Carousel */}
            <div className="w-full relative flex items-center h-32 overflow-hidden justify-center mb-4">
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F5F9F6] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F5F9F6] to-transparent z-20 pointer-events-none"></div>
              
              {/* Scrolling Images */}
              <div className="absolute inset-y-0 left-0 flex items-center z-10 w-[200%]">
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                  {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((src, idx) => (
                    <div key={idx} className="relative group shrink-0">
                      <img src={src} className="w-16 h-20 object-cover rounded-xl shadow-md border-2 border-white/80 opacity-80 group-hover:opacity-100 transition-opacity duration-300 shrink-0" alt="Product" />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Validation Pill Overlay */}
              <div className="absolute bottom-1 bg-[#E2EDE5] px-5 py-2.5 rounded-full shadow-md border border-[#D1DDD4]/50 flex items-center gap-2 z-30">
                <IconCheck size={18} className="text-[#2E4A31]" stroke={3} />
                <span className="font-inter font-bold text-sm text-[#2E4A31]">Safe to consume</span>
              </div>
            </div>
          </div>

          <p className="text-sm font-dm-sans text-neutral-500 leading-relaxed">
            After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.
          </p>
        </div>

        {/* Card 3: Actionable Insights */}
        <div className="bg-[#F5F9F6] rounded-[2rem] p-8 flex flex-col items-start relative overflow-hidden group">
          <h3 className="font-inter text-lg md:text-xl text-[#2E4A31] font-semibold mb-8 z-20">
            Actionable Insights & Recommendations
          </h3>

          <div className="absolute inset-x-0 top-16 bottom-32 flex items-center justify-center overflow-hidden z-0">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F5F9F6] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F5F9F6] to-transparent z-10 pointer-events-none"></div>
            
            <motion.div
              className="flex flex-col gap-3 w-full"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3 items-center opacity-40">
                  <div className="bg-[#D9E1DA] text-[#4A644D] text-xs font-semibold px-4 py-2 rounded-full truncate">Stuffed Bell Peppers with Rice</div>
                  <div className="bg-[#D9E1DA] text-[#4A644D] text-xs font-semibold px-4 py-2 rounded-full truncate">Marinated Olives Salad</div>
                  <div className="bg-[#D9E1DA] text-[#4A644D] text-xs font-semibold px-4 py-2 rounded-full truncate">Avocado Toast Supreme</div>
                  <div className="bg-[#D9E1DA] text-[#4A644D] text-xs font-semibold px-4 py-2 rounded-full truncate">Grilled Chicken with Broccoli</div>
                  <div className="bg-[#D9E1DA] text-[#4A644D] text-xs font-semibold px-4 py-2 rounded-full truncate">Fresh Berry Smoothie</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-full flex-1 min-h-[180px] flex items-center justify-center mb-8 z-10">
            {/* Fanned Products */}
            <div className="relative w-full h-full flex items-center justify-center mt-4">
              <motion.img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80"
                className="absolute w-20 h-32 object-cover rounded-2xl shadow-sm -rotate-[15deg] -translate-x-12 border-2 border-white/80"
                whileHover={{ rotate: -20, scale: 1.05 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=200&q=80"
                className="absolute w-20 h-32 object-cover rounded-2xl shadow-sm rotate-[15deg] translate-x-12 border-2 border-white/80"
                whileHover={{ rotate: 20, scale: 1.05 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=200&q=80"
                className="absolute w-24 h-36 object-cover rounded-2xl shadow-xl z-20 border-2 border-white"
                whileHover={{ scale: 1.05, y: -5 }}
              />
            </div>
          </div>

          <p className="text-sm font-dm-sans text-neutral-500 leading-relaxed z-10">
            Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
