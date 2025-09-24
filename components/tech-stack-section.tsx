"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const techStack = [
  {
    name: "JavaScript",
    icon: "/javascript.svg",
    category: "Language",
  },
  {
    name: "TypeScript",
    icon: "/typescript.svg",
    category: "Language",
  },
  {
    name: "React",
    icon: "/react.svg",
    category: "Framework",
  },
  {
    name: "Next.js",
    icon: "/nextjs.svg",
    category: "Framework",
  },
  {
    name: "HTML5",
    icon: "/html5.svg",
    category: "Language",
  },
  {
    name: "CSS3",
    icon: "/css3.svg",
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.svg",
    category: "Framework",
  },

  {
    name: "Redux",
    icon: "/redux.svg",
    category: "State Management",
  },
  {
    name: "Framer Motion",
    icon: "/framer-motion.svg",
    category: "Animation",
  },
  {
    name: "React Query",
    icon: "/React-Query.svg",
    category: "Data Fetching",
  },
  {
    name: "Zustand",
    icon: "/zustand-logo.svg",
    category: "State Management",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function TechStackSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance text-primary">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div key={tech.name} variants={itemVariants as any}>
              <Card className="glass-card border-border/50 p-6 group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <motion.img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Background grid pattern */}
        <div className="absolute inset-0 -z-10 ">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.02_240_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.02_240_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>
    </section>
  )
}
