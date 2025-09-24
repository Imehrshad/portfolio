import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import React from "react";
// types
interface DesktopVersionProps {
  navItems: { href: string; label: string; icon: LucideIcon }[];
  pathname: string;
}
const DesktopVersion = ({ navItems, pathname }: DesktopVersionProps) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4 hidden md:block"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl px-8 py-4" style={{backdropFilter:"url(#distort)"}}>
          {/* Distortion overlay */}
          <svg className="absolute w-0 h-0">
            <filter id="distort">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.01"
                numOctaves="1"
                seed="5"
                result="turb"
              ></feTurbulence>
              <feGaussianBlur
                in={"SourceGraphic"}
                stdDeviation={3}
                result="softMap"
              />
              <feDisplacementMap
                in2="turb"
                in="SourceGraphic"
                scale="25"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[oklch(0.6_0.2_230)] hover:to-[oklch(0.7_0.15_250)] hover:bg-clip-text relative ${
                    pathname === item.href
                      ? "text-transparent bg-gradient-to-r from-[oklch(0.6_0.2_230)] to-[oklch(0.7_0.15_250)] bg-clip-text"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeDesktop"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[oklch(0.6_0.2_230)] via-[oklch(0.7_0.15_250)] to-[oklch(0.6_0.2_230)] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default DesktopVersion;
