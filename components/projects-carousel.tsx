"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "Yolpak Bussiness Panel",
    description:
      "A package delivery system in Turkey that streamlines logistics and tracking. Built with modern front-end technologies for a responsive and user-friendly experience.",
    image: "/Yolpak.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    liveUrl: "https://yolpakb.shinypi.net/",
    featured: true,
  },
  {
    id: 2,
    title: "Prop360",
    description:
      "A real estate platform where investors can find builders on an interactive map, with all key information highlighted for informed decisions.",
    image: "/Prop 360.webp",
    technologies: ["Nextjs", "React Query", "Leaflet", "Tailwind CSS"],
    liveUrl: "https://prop.shinypi.net/",
    featured: true,
  },
  {
    id: 3,
    title: "Immimatch",
    description:
      "A platform connecting lawyers and applicants for immigration cases. Lawyers can submit cases, and applicants can find the most suitable options efficiently.",
    image: "/Immimatch.webp",
    technologies: [
      "React",
      "Chart.js",
      "React Query",
      "React Hook Form",
      "Tailwind CSS",
    ],
    liveUrl: "https://chapar.shinypi.net/",

    featured: false,
  },
  {
    id: 4,
    title: "Setak Panel",
    description:
      "A platform for Iranian lawyers to create case files for properties, find collaboration projects, and manage their work efficiently with built-in tools. Supports sharing and easy project tracking.",
    image: "/setak-panel.webp",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Axios",
      "React Query",
      "React Hook Form",
    ],
    liveUrl: "https://panel.setakpro.ir/",
    featured: false,
  },

  {
    id: 5,
    title: "Yolpak Landing Page",
    description:
      "A responsive landing page for the Yolpak package delivery system in Turkey. Designed with modern front-end technologies for smooth animations, clear UI, and a user-friendly experience.",
    image: "/Yolpak Landing.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://yolpak.com/",
    featured: false,
  },
];

export function ProjectsCarousel() {
  const [api, setApi] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance text-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel  opts={{ align: "start", loop: true }} setApi={setApi}>
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3 ">
                  <Card className="glass-card border-border/50 overflow-hidden group hover:scale-105 transition-all duration-500 min-h-[38.75rem]">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold  text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full border-[0.5px] border-gray-600/40" 
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="basis-full">
                  <Card className="glass-card border-border/50 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full border-[0.5px] border-gray-600/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href={project.liveUrl}
                          className="glass-button hover:bg-white/5 border-0 text-white mx-auto flex items-center gap-2 py-2 px-6 rounded-xl "
                        >
                          Live
                        </Link>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href={"/projects"}
            className="glass-button border-0 hover:bg-white/5 text-white mx-auto text-center flex items-center gap-2 py-2 px-6 rounded-xl w-fit"
          >
            All projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
