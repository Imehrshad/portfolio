"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                width={100}
                height={300}
                src="/profile-picture.webp"
                alt="About Me - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-8 order-1 lg:order-2"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary font-medium text-lg"
            >
              About Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-white"
            >
              Scalable, Performant Front-End
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p className="text-pretty">
              I’m a front-end developer focused on building web interfaces that
              are scalable, performant, and easy to maintain. I enjoy turning
              designs into functional, user-friendly experiences while paying
              attention to details that improve speed, usability, and
              reliability. I like exploring new tools and technologies in the
              front-end ecosystem and often spend time experimenting with ideas
              or sharing what I learn with others.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <Card className="glass-card border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </Card>

            <Card className="glass-card border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
