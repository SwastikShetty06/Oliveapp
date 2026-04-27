"use client";

import { motion } from "framer-motion";
import { IconCheck, IconX, IconBrandAppleFilled } from "@tabler/icons-react";

export default function HealthBenefits() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pillRows = [
    [
      { text: "Low PFAS", color: "text-olive-dark" },
      { text: "Plant-Based", color: "text-olive-dark", icon: true, cross: false },
      { text: "Gluten-Free", color: "text-olive-dark", icon: true, cross: false },
      { text: "Cholesterol-Free", color: "text-olive-dark" },
    ],
    [
      { text: "Non-GMO", color: "text-olive-dark" },
      { text: "Rich in Antioxidants", color: "text-olive-dark", icon: true, cross: false },
      { text: "100% Whole Grain", color: "text-olive-dark", icon: true, cross: false },
      { text: "High Fibre", color: "text-olive-dark" },
    ],
    [
      { text: "Potassium Sorbate", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "BHA", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "Carrageenan", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "Artificial Colors", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
    ],
    [
      { text: "Sodium Benzoate", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "Xanthan Gum", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "Potassium Bromate", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "TBHQ", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
    ],
    [
      { text: "Palm Oil", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "Sodium Nitrite", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "Aspartame", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
      { text: "Saccharin", color: "text-[#FFEAF0]", bg: "bg-olive-dark", icon: true, cross: true },
    ]
  ];

  return (
    <section className="relative w-full">
      {/* Header Section (Dark Green) */}
      <div className="bg-olive-darkgreen pt-32 pb-40 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-white max-w-lg leading-tight">
            Health Benefits of Using Olive
          </h2>
          <div className="max-w-md">
            <p className="text-white/90 font-dm-sans text-lg mb-6 leading-relaxed">
              Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health.
            </p>
            <button className="flex items-center gap-2 bg-white text-olive-dark px-6 py-3 rounded-full font-inter font-medium text-sm shadow-md hover:scale-105 transition-transform duration-300">
              <IconBrandAppleFilled size={18} />
              Download for iOS
            </button>
          </div>
        </div>
      </div>

      {/* Stacked Cards Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-24 pb-24 flex flex-col gap-8 relative z-10">
        
        {/* Card 1: Nutritional Clarity */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariant}
          className="w-full bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Text */}
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-inter font-medium text-olive-dark mb-10">
              Achieve Nutritional Clarity
            </h3>
            <ul className="space-y-6">
              {[
                "Olive breaks down every ingredient into clear, actionable information.",
                "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
                "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.",
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="bg-olive-dark rounded-full p-1 mt-1 shrink-0">
                    <IconCheck size={14} className="text-white stroke-[3]" />
                  </div>
                  <p className="font-dm-sans text-neutral-600 text-base leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Visual */}
          <div className="md:w-1/2 bg-[#DDEEDD] p-10 flex flex-col items-center justify-center relative min-h-[500px]">
            {/* Fanned Images */}
            <div className="relative w-full h-48 flex justify-center mt-4 z-10">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80" className="absolute w-24 h-36 object-cover rounded-xl shadow-lg -rotate-6 -translate-x-12 border-4 border-white" alt="Product 1" />
              <img src="https://images.unsplash.com/photo-1592187270271-9a4b84faa228?auto=format&fit=crop&w=200&q=80" className="absolute w-24 h-36 object-cover rounded-xl shadow-lg rotate-6 translate-x-12 border-4 border-white" alt="Product 2" />
              <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=200&q=80" className="absolute w-28 h-40 object-cover rounded-xl shadow-2xl z-20 border-4 border-white" alt="Product 3" />
            </div>

            {/* Score Card */}
            <div className="bg-white/60 backdrop-blur-md w-[80%] rounded-2xl p-4 shadow-sm border border-white/50 z-20 mt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-neutral-100 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=100&q=80" alt="Icon" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-olive-dark">Straus Ice Cream</h4>
                  <p className="font-inter font-bold text-olive-dark/80 text-sm">
                    96/100 <span className="font-normal font-dm-sans text-neutral-500 text-xs ml-1">Excellent</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Positives / Negatives Panels */}
            <div className="w-full flex gap-4 mt-6 z-20 px-4">
              <div className="flex-1 bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/50">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="bg-olive-dark rounded-full p-0.5"><IconCheck size={12} className="text-white stroke-[3]" /></div>
                  <span className="font-inter font-bold text-olive-dark text-sm">Positives</span>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white rounded-md opacity-60"></div>
                  <div className="h-4 w-4/5 bg-white rounded-md opacity-60"></div>
                  <div className="h-4 w-full bg-white rounded-md opacity-60"></div>
                </div>
              </div>
              <div className="flex-1 bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/50">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="bg-olive-coral rounded-full p-0.5"><IconX size={12} className="text-white stroke-[3]" /></div>
                  <span className="font-inter font-bold text-olive-coral text-sm">Negatives</span>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white rounded-md opacity-60"></div>
                  <div className="h-4 w-3/4 bg-white rounded-md opacity-60"></div>
                  <div className="h-4 w-full bg-white rounded-md opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Proactive Ingredient Filtering */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariant}
          className="w-full bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Text */}
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-inter font-medium text-olive-dark mb-10">
              Proactive Ingredient Filtering
            </h3>
            <ul className="space-y-6">
              {[
                "Olive flags harmful additives and controversial ingredients before they become mainstream concerns.",
                "Keeps you ahead of potential food safety concerns.",
                "Gives busy parents the confidence to make safer food choices every time.",
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="bg-olive-dark rounded-full p-1 mt-1 shrink-0">
                    <IconCheck size={14} className="text-white stroke-[3]" />
                  </div>
                  <p className="font-dm-sans text-neutral-600 text-base leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Visual */}
          <div className="md:w-1/2 bg-gradient-to-br from-[#FFEAF0] to-[#FFBBD0] p-10 relative overflow-hidden min-h-[500px]">
            <div className="absolute inset-0 flex flex-col justify-center gap-6 rotate-[-15deg] scale-150 origin-center pointer-events-none">
              {pillRows.map((row, rowIndex) => {
                const direction = rowIndex % 2 === 0 ? -1 : 1;
                return (
                  <motion.div
                    key={rowIndex}
                    className="flex gap-4 w-max"
                    animate={{ x: direction === -1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  >
                    {[...row, ...row, ...row].map((tag, i) => (
                      <div
                        key={i}
                        className={`px-5 py-2.5 rounded-full font-inter font-bold text-sm flex items-center gap-2 shadow-sm ${tag.bg || "bg-white/50 backdrop-blur-md border border-white/40"} ${tag.color}`}
                      >
                        {tag.icon && tag.cross && (
                          <div className="bg-[#FFEAF0] rounded-full p-0.5 shrink-0"><IconX size={12} className="text-olive-dark stroke-[4]" /></div>
                        )}
                        {tag.icon && !tag.cross && (
                          <div className="bg-olive-dark rounded-full p-0.5 shrink-0"><IconCheck size={12} className="text-white stroke-[4]" /></div>
                        )}
                        {tag.text}
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Real Health Outcomes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariant}
          className="w-full bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Text */}
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-inter font-medium text-olive-dark mb-10">
              Real Health Outcomes for Your Family
            </h3>
            <ul className="space-y-6">
              {[
                "Empowers parents to feel more in control of their family's health.",
                "Reduces exposure to potentially harmful long-term dietary toxins.",
                "Makes healthy eating simple, accessible, and incredibly transparent.",
              ].map((text, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="bg-olive-dark rounded-full p-1 mt-1 shrink-0">
                    <IconCheck size={14} className="text-white stroke-[3]" />
                  </div>
                  <p className="font-dm-sans text-neutral-600 text-base leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Visual */}
          <div className="md:w-1/2 bg-[#FFF8E7] p-10 flex items-center justify-center min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80" 
              alt="Avocado Family" 
              className="w-80 h-80 object-cover rounded-3xl shadow-xl drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
