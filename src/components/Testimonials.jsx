"use client";

import { motion } from "framer-motion";
import { IconStarFilled } from "@tabler/icons-react";

export default function Testimonials() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Flower Graphic */}
      <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 text-olive-lime/20 z-0">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 C120 0 130 30 130 50 C150 40 180 50 180 70 C180 90 150 100 130 100 C150 100 180 110 180 130 C180 150 150 160 130 150 C130 170 120 200 100 200 C80 200 70 170 70 150 C50 160 20 150 20 130 C20 110 50 100 70 100 C50 100 20 90 20 70 C20 50 50 40 70 50 C70 30 80 0 100 0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-8">
          
          {/* Left Side: Photo & Card */}
          <div className="md:w-1/2 relative w-full flex justify-center md:justify-start">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&w=800&q=80"
              alt="Mother and children"
              className="w-[90%] md:w-[85%] rounded-[2rem] object-cover aspect-square grayscale shadow-xl"
            />
            
            {/* Card 1: Overlapping Photo Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-10 right-0 md:-right-8 bg-white p-6 rounded-2xl shadow-xl w-72 md:w-80 border border-neutral-100"
            >
              <p className="text-xs text-neutral-600 font-dm-sans leading-relaxed mb-4">
                After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.
              </p>
              <h4 className="font-inter font-bold text-olive-dark text-sm mb-1">Lila M.</h4>
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <IconStarFilled key={i} size={14} />)}
              </div>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" alt="Lila" />
            </motion.div>
          </div>

          {/* Right Side: Text & Cards */}
          <div className="md:w-1/2 relative flex flex-col justify-center min-h-[500px]">
            
            {/* Card 2: Top Floating */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:absolute top-0 right-10 bg-white p-5 rounded-2xl shadow-lg w-72 border border-neutral-100 self-end md:self-auto z-20 mb-10 md:mb-0"
            >
              <p className="text-xs text-neutral-600 font-dm-sans leading-relaxed mb-4">
                Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.
              </p>
              <h4 className="font-inter font-bold text-olive-dark text-sm mb-1">Megan L.</h4>
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <IconStarFilled key={i} size={14} />)}
              </div>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" alt="Megan" />
            </motion.div>

            {/* Heading Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scrollVariant}
              className="relative z-10 md:pl-10"
            >
              <h2 className="text-4xl md:text-6xl font-inter font-medium text-olive-dark leading-tight mb-4 max-w-sm">
                Real Mothers<br />Real Results
              </h2>
              <a href="#" className="inline-flex items-center text-sm font-inter text-olive-dark hover:text-olive-lime transition-colors">
                read all 3,147+ reviews
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>

            {/* Card 3: Bottom Floating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:absolute bottom-0 right-0 bg-white p-5 rounded-2xl shadow-lg w-72 border border-neutral-100 self-end md:self-auto mt-10 md:mt-0"
            >
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&w=100&q=80" className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" alt="Tina" />
              <p className="text-xs text-neutral-600 font-dm-sans leading-relaxed mb-4 pl-4">
                Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.
              </p>
              <div className="pl-4">
                <h4 className="font-inter font-bold text-olive-dark text-sm mb-1">Tina B.</h4>
                <div className="flex text-yellow-400 gap-0.5">
                  {[...Array(5)].map((_, i) => <IconStarFilled key={i} size={14} />)}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
