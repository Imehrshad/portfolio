"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Send } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";
import { downloadFile } from "@/lib/dowload-file";
import { useState } from "react";

export function HeroSection() {
  const isMobile = useIsMobile();
  const [isDownloading,setIsDownloading]=useState<boolean>(false)
  const handleDownload = async () => {
    setIsDownloading(true)
    await downloadFile("docs/2024-2025.pdf");
    setIsDownloading(false)
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative md:hidden block"
        >
          <div className="glass-card rounded-full p-8 relative overflow-hidden">
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                width={50}
                height={50}
                src="/mehrshad.webp"
                alt="Your Name - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating elements for visual interest */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-medium text-lg"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl text-white lg:text-7xl font-bold text-balance leading-tight"
            >
              Mehrshad Khatibi
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl lg:text-3xl text-muted-foreground font-light text-balance"
            >
              Front-end Developer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty"
          >
            Designing intuitive and responsive user interfaces. Building
            polished web experiences with attention to detail and usability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex md:flex-wrap  gap-4"
          >
            <Link
              href={"/projects"}
              className="bg-white rounded-xl border-0 text-foreground md:px-8 md:py-2 px-6 py-2 md:text-lg text-base"
            >
              View My Work
            </Link>
            <button
              onClick={handleDownload}
              className=" bg-primary rounded-xl border-0 text-white md:px-8 md:py-2 px-6 py-2 md:text-lg text-base"
            >
             {isDownloading ? "Downloading..." :"Download CV"}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/Imehrshad"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="md:size-6 size-5" />
            </a>
            <a
              href="https://t.me/Mmehrshad779"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Send className="md:size-6 size-5" />
            </a>
            <a
              href="mailto:khatibimehrshad24@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="md:size-6 size-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative md:block hidden"
        >
          <div className="glass-card rounded-full p-8 relative overflow-hidden">
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                width={100}
                height={100}
                src="/mehrshad.webp"
                alt="Your Name - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating elements for visual interest */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
