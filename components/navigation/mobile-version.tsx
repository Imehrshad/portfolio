"use client";

import Link from "next/link";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";

// types
interface MobileVersionProps {
  activeIndex: number;
  pathname: string;
  navItems: {
    href: string;
    label: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }[];
}

const MobileVersion = ({ activeIndex, navItems, pathname }: MobileVersionProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden w-full">
      <div className="relative glass  rounded-2xl overflow-hidden border border-white/10  shadow-[inset_0px_20px_10px_rgba(255,255,255,0.05)]" style={{backdropFilter:"url(#distort) blur(1.7px)"}}>
        {/* Distortion overlay */}
        <svg className="absolute w-0 h-0">
          <filter id="distort">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.02"
              numOctaves="1"
              seed="5"
              result="turb"
            >

            </feTurbulence>
            <feGaussianBlur  in={"SourceGraphic"} stdDeviation={3} result="softMap" />
            <feDisplacementMap
              in2="turb"
              in="SourceGraphic"
              scale="25"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>

        {/* This translucent layer simulates the "liquid" moving backdrop */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", filter: "url(#distort)" }}
        />

   

        {/* Nav items */}
        <div className="flex items-center justify-between relative z-10 w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center space-y-1 py-2 px-4 transition-all duration-300 flex-1"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    color: isActive
                      ? "oklch(0.6 0.2 230)"
                      : "oklch(0.6 0.02 240)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Icon size={20} />
                </motion.div>
                <motion.span
                  className="text-xs font-medium"
                  animate={{
                    color: isActive
                      ? "oklch(0.6 0.2 230)"
                      : "oklch(0.6 0.02 240)",
                    fontWeight: isActive ? 600 : 500,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileVersion;
