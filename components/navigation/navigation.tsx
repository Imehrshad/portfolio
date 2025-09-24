"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, FolderOpen } from "lucide-react";
import MobileVersion from "./mobile-version";
import DesktopVersion from "./desktop-version";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
];
const navItemsMobile = [
  { href: "/about", label: "About", icon: User },
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
];

export function Navigation() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.href === pathname);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [pathname]);

  return (
    <>
      <DesktopVersion navItems={navItems} pathname={pathname} />
      <MobileVersion
        activeIndex={activeIndex}
        navItems={navItemsMobile}
        pathname={pathname}
      />
    </>
  );
}
