"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandAppleFilled, IconHeart, IconShare } from "@tabler/icons-react";

const scanResults = [
  {
    id: 1,
    title: "San Pellegrino Sparkling Natural Mineral Water",
    brand: "Sanpellegrino",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
    score: 52,
    scoreColor: "bg-yellow-400",
    scoreLabel: "Limit",
    oliverSays: "This water contains slightly elevated levels of nitrates and is naturally carbonated, which slightly lowers its pH. While generally safe, the mineral content should be considered for infants.",
    breakdown: [
      { label: "Contaminants", value: "7", dot: "bg-red-400" },
      { label: "Fluoride", value: "Yes", dot: "bg-red-400" },
      { label: "PFAS", value: "No", dot: "bg-green-400" },
      { label: "Microplastics", value: "Minimal", dot: "bg-green-400" },
      { label: "pH Level", value: "5.7", dot: "bg-transparent text-neutral-800 font-bold" },
    ],
    detailedBreakdown: {
      title: "Contaminants",
      items: [
        { name: "Nitrate", value: "0.75 mg/L", badge: "5x limit", badgeColor: "text-red-600 bg-red-100" }
      ]
    }
  },
  {
    id: 2,
    title: "Late July Snacks Thin and Crispy Organic Tortilla Chips",
    brand: "Late July",
    parentCompany: { name: "Campbell's", logo: "https://images.unsplash.com/photo-1614088658826-621fec5bc672?auto=format&fit=crop&w=32&h=32&q=80" },
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=400&q=80",
    score: 58,
    scoreColor: "bg-yellow-400",
    scoreLabel: "Limit",
    oliverSays: "\"This snack's score is primarily affected by the presence of organic sunflower oil and safflower oil, which are considered seed oils and can be less healthy for your family.\"",
    breakdown: [
      { label: "Seed Oils", value: "Yes", dot: "bg-red-400" },
      { label: "Organic", value: "Yes", dot: "bg-green-400" },
      { label: "Additives", value: "None", dot: "bg-green-400" },
    ]
  },
  {
    id: 3,
    title: "Organic Bagels",
    brand: "Killer Dave's",
    parentCompany: { name: "Flowers Foods", logo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=32&h=32&q=80" },
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80",
    score: 43,
    scoreColor: "bg-red-500",
    scoreLabel: "Avoid",
    oliverSays: "Contains processed oils and added sugars which lower the overall nutritional value, especially when consumed daily.",
    breakdown: [
      { label: "Added Sugar", value: "3g", dot: "bg-red-400" },
      { label: "Seed Oils", value: "Yes", dot: "bg-red-400" },
    ]
  },
  {
    id: 4,
    title: "Larabar Chocolate Chip Cookie Dough Fruit & Nut",
    brand: "Larabar",
    parentCompany: { name: "General Mills", logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32&q=80" },
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80",
    score: 92,
    scoreColor: "bg-green-500",
    scoreLabel: "Excellent",
    oliverSays: "\"This product, which includes ingredients like cashews and dates, scored well mainly because it doesn't contain processed sugars, harmful additives, or seed oils, making it a healthier choice for your family.\"",
    breakdown: [
      { label: "Added Sugar", value: "0g", dot: "bg-green-500" },
      { label: "Protein", value: "4g", dot: "bg-green-500" },
      { label: "Fiber", value: "3g", dot: "bg-green-500" },
    ]
  },
  {
    id: 5,
    title: "Honey Mama's Chocolate Truffle Bar",
    brand: "Honey Mama's",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    score: 88,
    scoreColor: "bg-green-500",
    scoreLabel: "Great",
    oliverSays: "A great alternative to traditional chocolate bars, naturally sweetened with honey.",
    breakdown: [
      { label: "Refined Sugar", value: "0g", dot: "bg-green-500" },
      { label: "Dairy Free", value: "Yes", dot: "bg-green-500" },
    ]
  },
  {
    id: 6,
    title: "Strawberry Vanilla Prebiotic Soda",
    brand: "Olipop",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=400&q=80",
    score: 85,
    scoreColor: "bg-green-500",
    scoreLabel: "Great",
    oliverSays: "Contains prebiotics for gut health and significantly less sugar than traditional sodas.",
    breakdown: [
      { label: "Added Sugar", value: "2g", dot: "bg-green-500" },
      { label: "Fiber", value: "9g", dot: "bg-green-500" },
    ]
  },
  {
    id: 7,
    title: "Organic Sour Littles",
    brand: "YumEarth",
    image: "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?auto=format&fit=crop&w=400&q=80",
    score: 65,
    scoreColor: "bg-yellow-400",
    scoreLabel: "Fair",
    oliverSays: "While organic and free from artificial dyes, it still contains high amounts of sugar.",
    breakdown: [
      { label: "Artificial Dyes", value: "None", dot: "bg-green-500" },
      { label: "Added Sugar", value: "12g", dot: "bg-red-400" },
    ]
  },
  {
    id: 8,
    title: "Sea Salt & Vinegar Potato Crisps",
    brand: "The Good Crisp Company",
    image: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&w=400&q=80",
    score: 39,
    scoreColor: "bg-red-500",
    scoreLabel: "Avoid",
    oliverSays: "\"This snack's low score is mainly due to the presence of processed sugars like maltodextrin and several additives that can be harmful, which doesn't align with your goal of avoiding processed foods and additives for your family. It's best to look for healthier alternatives that are more kid-friendly and support better overall health.\"",
    breakdown: [
      { label: "Artificial Flavors", value: "None", dot: "bg-green-500" },
      { label: "Sodium", value: "150mg", dot: "bg-yellow-400" },
    ]
  }
];

export default function Hero() {
  const headline = "The Safest Way to Shop for Groceries".split(" ");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % scanResults.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const currentProduct = scanResults[activeIndex];

  // Helper to determine position in the carousel relative to active index
  const getCarouselItemStyle = (idx) => {
    const total = scanResults.length;
    let diff = (idx - activeIndex) % total;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    // Center item (visible through the transparent phone screen)
    if (diff === 0) {
      return { x: 0, scale: 1, opacity: 1, zIndex: 10, blur: 0, borderRadius: "24px" };
    }
    // Adjacent items (outside phone, faded)
    if (diff === 1) {
      return { x: 220, scale: 0.8, opacity: 0.5, zIndex: 5, blur: 2, borderRadius: "24px" };
    }
    if (diff === -1) {
      return { x: -220, scale: 0.8, opacity: 0.5, zIndex: 5, blur: 2, borderRadius: "24px" };
    }
    // Outer items (outside phone, more faded)
    if (diff === 2) {
      return { x: 380, scale: 0.65, opacity: 0.2, zIndex: 0, blur: 4, borderRadius: "24px" };
    }
    if (diff === -2) {
      return { x: -380, scale: 0.65, opacity: 0.2, zIndex: 0, blur: 4, borderRadius: "24px" };
    }
    // Further outer items
    if (diff === 3) {
      return { x: 500, scale: 0.5, opacity: 0, zIndex: 0, blur: 5, borderRadius: "24px" };
    }
    if (diff === -3) {
      return { x: -500, scale: 0.5, opacity: 0, zIndex: 0, blur: 5, borderRadius: "24px" };
    }

    return { x: diff > 0 ? 600 : -600, scale: 0.5, opacity: 0, zIndex: 0, blur: 10, borderRadius: "24px" };
  };

  return (
    <section className="relative pt-40 pb-20 px-4 md:px-8 flex flex-col items-center justify-center text-center overflow-hidden bg-[##5b785b]">
      {/* Avatar Stack & Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="flex items-center justify-center">
          <div className="flex -space-x-3">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=128&q=80"
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=80"
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=80"
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 shadow-sm z-10">
              3k+
            </div>
          </div>
        </div>
        <span className="font-inter text-xs text-neutral-500 font-medium">
          Trusted by thousands of healthy families
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-5xl md:text-7xl font-bold font-inter text-olive-dark leading-tight tracking-tight mb-6"
      >
        {headline.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-3"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-xl text-base text-neutral-500 font-dm-sans mb-10 leading-relaxed"
      >
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
      </motion.p>

      {/* Primary Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-24 z-20 relative"
      >
        <button className="flex items-center gap-2 bg-olive-dark text-white px-8 py-3.5 rounded-full font-inter font-medium text-sm shadow-xl hover:scale-105 transition-transform duration-300">
          <IconBrandAppleFilled size={18} />
          Download for iOS
        </button>
      </motion.div>

      {/* iPhone Mockup & Carousel Section */}
      <div className="relative w-full max-w-6xl mx-auto h-[720px] flex justify-center mt-[-40px]">

        {/* Fading Edges for Carousel */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#F9FAF6] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F9FAF6] to-transparent z-10 pointer-events-none"></div>

        {/* Global Product Carousel (Spans horizontally behind the phone) */}
        <div className="absolute top-[12%] w-full h-64 flex items-center justify-center pointer-events-none z-0">
          {scanResults.map((product, idx) => {
            const style = getCarouselItemStyle(idx);
            return (
              <motion.div
                key={product.id}
                initial={false}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  filter: `blur(${style.blur}px)`,
                  zIndex: style.zIndex,
                  borderRadius: style.borderRadius,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-[160px] h-[160px] bg-white shadow-md overflow-hidden flex items-center justify-center border border-neutral-100"
              >
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>

        {/* iPhone Mockup (Transparent background, white card at bottom) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          className="relative z-20 w-[340px] h-[720px] bg-transparent rounded-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-[12px] border-[#E5E5EA] flex flex-col items-center overflow-hidden"
        >
          {/* Dynamic Island */}
          <div className="w-32 h-7 bg-black rounded-full absolute top-4 z-50"></div>

          {/* Pull-Up Tab Container */}
          <div className="absolute bottom-0 w-full h-[65%] bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex flex-col z-30">
            {/* Grab Handle */}
            <div className="w-full flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-neutral-200 rounded-full"></div>
            </div>

            {/* Scrollable Content inside Pull-Up Tab */}
            <div className="flex-1 overflow-y-auto hide-scrollbar px-5 pb-8 pt-2 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center text-center"
                >
                  <div className="w-full flex items-start gap-4 mb-4 text-left">
                    <img src={currentProduct.image} className="w-[50px] h-[70px] object-cover rounded shadow-sm border border-neutral-100 shrink-0" alt="Thumbnail" />
                    <div className="flex-1">
                      <h3 className="font-inter font-bold text-[14px] text-olive-dark leading-snug line-clamp-2">
                        {currentProduct.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <p className="text-[11px] text-neutral-500 font-dm-sans">{currentProduct.brand}</p>
                        {currentProduct.parentCompany && (
                          <div className="flex items-center gap-1 bg-neutral-100 rounded-full px-2 py-0.5">
                            {currentProduct.parentCompany.logo && (
                              <img src={currentProduct.parentCompany.logo} className="w-3 h-3 rounded-full" alt="logo" />
                            )}
                            <span className="text-[9px] font-medium text-neutral-600">{currentProduct.parentCompany.name}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${currentProduct.scoreColor}`}></span>
                          <span className="font-bold font-inter text-[13px] text-olive-dark leading-none">
                            {currentProduct.score}/100
                          </span>
                          <span className="text-[9px] text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded leading-none">
                            {currentProduct.scoreLabel}
                          </span>
                        </div>
                        <div className="flex gap-2 text-neutral-400">
                          <IconHeart size={14} />
                          <IconShare size={14} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Oliver Says */}
                  <div className="w-full bg-[#FDFDFD] shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-4 mb-5 border border-neutral-100 text-left relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base">🥑</span>
                      <span className="font-inter font-bold text-[11px] text-olive-dark">Oliver Says:</span>
                    </div>
                    <p className="text-[10px] text-neutral-600 font-dm-sans leading-relaxed italic">
                      {currentProduct.oliverSays}
                    </p>
                  </div>

                  {/* Breakdown List */}
                  <div className="w-full text-left">
                    <h4 className="font-inter font-bold text-[11px] text-olive-dark mb-3 px-1">Breakdown</h4>
                    <div className="space-y-1.5">
                      {currentProduct.breakdown.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2.5 px-3 bg-[#FDFDFD] rounded-xl border border-neutral-100 shadow-[0_1px_4px_rgba(0,0,0,0.01)] text-[10px]">
                          <div className="flex items-center gap-2">
                            <span className="text-neutral-400">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <span className="text-neutral-600 font-dm-sans font-medium">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`font-inter font-semibold ${item.value === '5.7' ? 'text-neutral-800' : 'text-olive-dark'}`}>{item.value}</span>
                            {item.value !== '5.7' && <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`}></span>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Detailed Breakdown Sub-section */}
                    {currentProduct.detailedBreakdown && (
                      <div className="mt-4">
                        <h4 className="font-inter font-bold text-[11px] text-olive-dark mb-3 px-1">
                          {currentProduct.detailedBreakdown.title}
                        </h4>
                        <div className="space-y-1.5">
                          {currentProduct.detailedBreakdown.items.map((item, idx) => (
                            <div key={idx} className="bg-[#FFF5F5] rounded-xl p-3 border border-red-100 flex justify-between items-center">
                              <div>
                                <h5 className="font-bold text-[11px] text-olive-dark">{item.name}</h5>
                                <p className="text-[10px] text-neutral-500 mt-0.5">{item.value}</p>
                              </div>
                              <span className={`text-[9px] font-bold px-2 py-1 rounded ${item.badgeColor}`}>
                                {item.badge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
