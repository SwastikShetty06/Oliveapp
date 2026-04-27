"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

const NavItem = ({ title, hasDropdown, link = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link}
        className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 px-3 py-2 transition-colors font-inter text-[13px] font-medium"
      >
        {title}
        {hasDropdown && (
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconChevronDown size={16} />
          </motion.div>
        )}
      </Link>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="absolute top-0 inset-x-0 z-[100] w-full">
      <div className="flex flex-row items-center justify-between mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-16 md:py-8">
        <Link href="/" className="flex items-center gap-0.5">
          {/* Logo Placeholder */}
          <span className="text-3xl">🥑</span>
          <span className="font-pall text-2xl font-bold text-olive-lime tracking-tight -ml-1">
            live
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <NavItem title="Solutions" hasDropdown />
          <NavItem title="Features" link="#features" />
          <NavItem title="Pricing" link="#pricing" />
          <NavItem title="Blog" hasDropdown />
          <NavItem title="Restaurants" />
          <NavItem title="Food" hasDropdown />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/sign-in"
            className="text-neutral-600 font-inter font-medium text-[13px] hover:text-neutral-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 bg-olive-dark text-white px-5 py-2.5 rounded-full font-inter font-medium text-[13px] hover:opacity-90 transition-opacity"
          >
            Get Olive <span>→</span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button className="p-2 text-black hover:bg-black/5 rounded-full transition-colors">
            <IconMenu2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
