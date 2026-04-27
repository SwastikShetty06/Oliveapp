"use client";

import { IconBrandAppleFilled } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 max-w-6xl mx-auto w-full pb-12">
      <div className="bg-[#3D6E3D] rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row justify-between gap-12 text-white">
        
        {/* Left Links */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="flex flex-col gap-4 text-sm font-dm-sans text-white/80">
            <h4 className="text-white font-medium mb-2">Explore More Olive Tools</h4>
            <a href="#" className="hover:text-white transition-colors">Explore Foods</a>
            <a href="#" className="hover:text-white transition-colors">Allergy Scanner App</a>
            <a href="#" className="hover:text-white transition-colors">Gluten Free Scanner</a>
            <a href="#" className="hover:text-white transition-colors">Dairy Free App</a>
            <a href="#" className="hover:text-white transition-colors">Food Ingredient Checker</a>
          </div>

          <div className="flex flex-col gap-4 text-sm font-dm-sans text-white/80">
            <h4 className="text-white font-medium mb-2">About</h4>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Email us</a>
            <a href="#" className="hover:text-white transition-colors">Contact us</a>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col max-w-sm w-full">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=100&q=80" 
              alt="Olive Logo" 
              className="w-10 h-10 object-cover rounded-full mix-blend-multiply" 
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            />
            <span className="font-pall text-3xl font-bold">olive</span>
          </div>
          <p className="font-dm-sans text-white/80 text-sm mb-6 leading-relaxed">
            Get the latest lab testing data sent directly to your inbox.
          </p>
          <form className="flex gap-2 w-full">
            <input 
              type="email" 
              placeholder="Enter Email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
            />
            <button type="submit" className="bg-white text-olive-dark px-6 py-3 rounded-full font-inter font-medium text-sm shadow-md hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer links */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-dm-sans text-olive-dark/60 gap-4 px-8">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#" className="hover:text-olive-dark transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-olive-dark transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-olive-dark transition-colors">Refund Policy</a>
          <a href="#" className="hover:text-olive-dark transition-colors">Medical Consent</a>
          <a href="#" className="hover:text-olive-dark transition-colors">Sign In</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Olive Inc.
        </div>
      </div>
    </footer>
  );
}
