"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const products = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600188769045-bc6026bfc8cd?auto=format&fit=crop&w=400&q=80",
];

export default function ProductSlider() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Container with fade masks on edges */}
      <div className="mask-l-from-50% mask-r-from-50% w-full h-[300px] flex items-center relative overflow-hidden">
        
        <motion.div
          className="flex gap-12 absolute left-0"
          animate={{ x: [0, -1920] }} // Assuming around 1920px width of one set
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate array for seamless looping */}
          {[...products, ...products, ...products].map((src, idx) => (
            <ProductItem key={idx} src={src} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ProductItem({ src }) {
  // We use whileInView with a tight margin so it's only active when near the center of the viewport.
  // Viewport center is roughly 50% left and right.
  // "-0px -40% -0px -40%" means it triggers when the element is within the middle 20% of the screen.
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.3 }}
      whileInView={{ scale: 1.2, opacity: 1 }}
      viewport={{ margin: "0px -40% 0px -40%", amount: "some" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-48 h-48 shrink-0 relative rounded-2xl overflow-hidden shadow-lg border border-white/20"
    >
      <img
        src={src}
        alt="Product"
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}
