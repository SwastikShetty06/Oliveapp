"use client";

import { motion } from "framer-motion";
import { IconCheck, IconX, IconBrandAppleFilled } from "@tabler/icons-react";

const features = [
  { name: "Detailed Product Breakdown", olive: true, carrot: true, bobby: true },
  { name: "Comprehensive Water Data", olive: true, carrot: false, bobby: false },
  { name: "Seed Oil Free Dining Map", olive: true, carrot: false, bobby: false },
  { name: "Seed Oil Flagging", olive: true, carrot: false, bobby: true },
  { name: "Certified Lab-Testing Data", olive: true, carrot: false, bobby: false },
];

export default function Comparison() {
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
        className="bg-[#3D6E3D] rounded-[3rem] p-10 md:p-16 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-inter font-medium text-white text-center mb-8 max-w-xl leading-tight">
          Olive Food Scanner App <br /> vs. The Rest
        </h2>

        <button className="flex items-center gap-2 bg-white text-olive-dark px-6 py-3 rounded-full font-inter font-medium text-sm shadow-md hover:scale-105 transition-transform duration-300 mb-16">
          <IconBrandAppleFilled size={18} />
          Download for iOS
        </button>

        <div className="w-full">
          {/* Header Row */}
          <div className="flex w-full mb-8 pb-4 border-b border-white/20">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
              <span className="text-4xl" role="img" aria-label="Olive">🥑</span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-4xl" role="img" aria-label="Carrot">🥕</span>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-olive-dark text-xl">
                B
              </div>
            </div>
          </div>

          {/* Features Rows */}
          <div className="flex flex-col gap-0">
            {features.map((feature, idx) => (
              <div key={idx} className="flex w-full py-6 border-b border-white/10 items-center">
                <div className="flex-[2] md:flex-1 text-white font-dm-sans text-sm md:text-base">
                  {feature.name}
                </div>
                <div className="flex-1 flex justify-center">
                  {feature.olive ? (
                    <div className="bg-[#B9D066] rounded-full p-1.5 shadow-sm">
                      <IconCheck size={16} className="text-olive-dark stroke-[3]" />
                    </div>
                  ) : (
                    <IconX size={20} className="text-red-500 stroke-[3]" />
                  )}
                </div>
                <div className="flex-1 flex justify-center">
                  {feature.carrot ? (
                    <div className="bg-[#B9D066] rounded-full p-1.5 shadow-sm">
                      <IconCheck size={16} className="text-olive-dark stroke-[3]" />
                    </div>
                  ) : (
                    <IconX size={20} className="text-red-500 stroke-[3]" />
                  )}
                </div>
                <div className="flex-1 flex justify-center">
                  {feature.bobby ? (
                    <div className="bg-[#B9D066] rounded-full p-1.5 shadow-sm">
                      <IconCheck size={16} className="text-olive-dark stroke-[3]" />
                    </div>
                  ) : (
                    <IconX size={20} className="text-red-500 stroke-[3]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
