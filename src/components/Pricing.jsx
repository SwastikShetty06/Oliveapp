"use client";

import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";

export default function Pricing() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Flower Graphic */}
      <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 text-olive-lime/20 z-0 scale-150">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 C120 0 130 30 130 50 C150 40 180 50 180 70 C180 90 150 100 130 100 C150 100 180 110 180 130 C180 150 150 160 130 150 C130 170 120 200 100 200 C80 200 70 170 70 150 C50 160 20 150 20 130 C20 110 50 100 70 100 C50 100 20 90 20 70 C20 50 50 40 70 50 C70 30 80 0 100 0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-inter font-medium text-olive-dark leading-tight max-w-sm mx-auto">
            Healthy Choices<br />Honest Pricing
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariant}
          className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto"
        >
          {/* Monthly Plan */}
          <div className="w-full md:w-[360px] bg-[#F8F9FA] rounded-[2rem] p-10 shadow-lg relative border border-neutral-100 z-10">
            {/* Cute Avocado illustration */}
            <img 
              src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=100&q=80" 
              alt="Avocado" 
              className="absolute -top-10 -left-6 w-20 h-24 object-cover rounded-full shadow-md rotate-[-15deg] mix-blend-multiply" 
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            />
            
            <h3 className="font-dm-sans text-neutral-600 text-sm mb-2 mt-4">Monthly</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-inter font-bold text-olive-dark">$14.99</span>
              <span className="text-xs font-dm-sans text-neutral-500">/monthly</span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Unlimited Scans",
                "Unlimited Database Searches",
                "Comprehensive Lab-Testing Data",
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <div className="bg-olive-dark rounded-full p-0.5 shrink-0">
                    <IconCheck size={12} className="text-white stroke-[3]" />
                  </div>
                  <span className="font-dm-sans text-sm text-olive-dark">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-olive-dark text-white font-inter font-bold text-sm shadow-md hover:bg-olive-dark/90 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Yearly Plan */}
          <div className="w-full md:w-[360px] bg-[#3D6E3D] rounded-[2rem] p-10 shadow-2xl relative border border-olive-dark/20 md:-mt-8 z-20">
            <h3 className="font-dm-sans text-white/80 text-sm mb-2 mt-4">Yearly</h3>
            <div className="flex items-baseline gap-2 mb-8 flex-wrap">
              <span className="text-4xl font-inter font-bold text-white">$69.99</span>
              <span className="text-sm font-dm-sans text-white/50 line-through">$179.88</span>
              <span className="text-xs font-dm-sans text-white/70">/yearly</span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Everything in monthly plan",
                "Get 7 months free",
                "60% Savings",
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <div className="bg-white rounded-full p-0.5 shrink-0">
                    <IconCheck size={12} className="text-olive-dark stroke-[3]" />
                  </div>
                  <span className="font-dm-sans text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-white text-olive-dark font-inter font-bold text-sm shadow-md hover:bg-neutral-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
