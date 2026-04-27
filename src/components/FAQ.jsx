"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandAppleFilled, IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    question: "What is the Food Scanner App and how does it work?",
    answer: "Olive Food Scanner App is a mobile application that allows you to scan the barcode of any food product to instantly see a detailed breakdown of its ingredients, additives, and nutritional value. We compare the product against a massive database of over 1 million items to give you a clear health score and flag any harmful substances."
  },
  {
    question: "How does Olive ensure the accuracy of the Food Scanner App results?",
    answer: "Our database is continuously updated and cross-referenced with scientific literature, expert nutritional guidelines, and certified lab-testing data to ensure you receive the most accurate and up-to-date information possible."
  },
  {
    question: "Which products can I scan with the Food Scanner App?",
    answer: "You can scan almost any packaged food or beverage item with a standard barcode. Our database contains over 1 million products and is growing every day."
  },
  {
    question: "Can the Food Scanner App be customized to my family's dietary needs?",
    answer: "Yes! You can set up custom profiles to flag specific allergens, dietary restrictions (like gluten-free or vegan), and ingredients you wish to avoid."
  },
  {
    question: "Is my data secure when I use the Olive?",
    answer: "Absolutely. We take your privacy seriously. We do not sell your personal data to third parties, and your scan history is kept completely private."
  },
  {
    question: "When will the Android version of the Food Scanner App be available?",
    answer: "We are currently working hard on the Android version and plan to release it later this year. Join our mailing list to be the first to know!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        className="bg-[#FFF8E7] rounded-[3rem] p-10 md:p-16 flex flex-col relative"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-inter font-medium text-olive-dark mb-8 flex items-center justify-center gap-4 flex-wrap">
            Frequently Asked <br /> Questions by Parents
            <img 
              src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=100&q=80" 
              alt="Cute Avocado" 
              className="w-12 h-14 object-cover rounded-full mix-blend-multiply" 
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            />
          </h2>
          <button className="bg-olive-dark text-white px-8 py-3.5 rounded-full font-inter font-medium text-sm shadow-md hover:bg-olive-dark/90 transition-colors mx-auto flex items-center gap-2">
            <IconBrandAppleFilled size={18} />
            Download for iOS
          </button>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-olive-dark/10 last:border-0">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="font-dm-sans text-sm md:text-base text-olive-dark font-medium pr-8">
                  {faq.question}
                </span>
                <div className="bg-olive-dark text-white rounded-full p-1 shrink-0 transition-transform duration-300">
                  {openIndex === idx ? <IconMinus size={14} /> : <IconPlus size={14} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-dm-sans text-sm text-olive-dark/70 leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
