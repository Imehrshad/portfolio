"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "Yolpak Bussiness Panel",
    description:
      "A package delivery system in Turkey that streamlines logistics and tracking. Built with modern front-end technologies for a responsive and user-friendly experience.",
    image: "/Yolpak.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    liveUrl: "https://yolpakb.shinypi.net/",
    githubUrl: "", // add if available
    featured: true,
    category: "Frontend",
    year: "2024",
    team: "Team project",
    duration: "5 months",
  },
  {
    id: 2,
    title: "Prop360",
    description:
      "A real estate platform where investors can find builders on an interactive map, with all key information highlighted for informed decisions.",
    image: "/Prop 360.png",
    technologies: ["Next.js", "React Query", "Leaflet", "Tailwind CSS"],
    liveUrl: "https://prop.shinypi.net/",
    githubUrl: "",
    featured: true,
    category: "Frontend",
    year: "2024",
    team: "Team project",
    duration: "3 months",
  },
  {
    id: 3,
    title: "Immimatch",
    description:
      "A platform connecting lawyers and applicants for immigration cases. Lawyers can submit cases, and applicants can find the most suitable options efficiently.",
    image: "/Immimatch.png",
    technologies: ["React", "Chart.js", "React Query", "React Hook Form", "Tailwind CSS"],
    liveUrl: "https://chapar.shinypi.net/",
    githubUrl: "",
    featured: false,
    category: "Frontend",
    year: "2024",
    team: "Team project",
    duration: "2 months",
  },
  {
    id: 4,
    title: "Setak Panel",
    description:
      "A platform for Iranian lawyers to create case files for properties, find collaboration projects, and manage their work efficiently with built-in tools. Supports sharing and easy project tracking.",
    image: "/setak-panel.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Axios", "React Query", "React Hook Form"],
    liveUrl: "https://panel.setakpro.ir/",
    githubUrl: "",
    featured: false,
    category: "Frontend",
    year: "2024",
    team: "Team project",
    duration: "2 months",
  },
  {
    id: 5,
    title: "Yolpak Landing Page",
    description:
      "A responsive landing page for the Yolpak package delivery system in Turkey. Designed with modern front-end technologies for smooth animations, clear UI, and a user-friendly experience.",
    image: "/Yolpak Landing.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://yolpak.com/",
    githubUrl: "",
    featured: false,
    category: "Frontend",
    year: "2024",
    team: "Team project",
    duration: "1 week",
  },
];


export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects)[0] | null>(null)


  return (
    <section className="py-20 px-4 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance text-white">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive showcase of my work
          </p>
        </motion.div>


        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card onClick={() => setSelectedProject(project)} className="glass-card border-border/50 overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="relative overflow-hidden" >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  

   
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-secondary/30 text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-secondary/30 text-secondary-foreground rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal/Detail View */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card border-border/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <Button
                  size="sm"
                  className="absolute top-4 right-4 glass-button border-0 text-white cursor-pointer"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </Button>
              </div>

              <div className="p-8">
             

                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{selectedProject.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="text-muted-foreground">{selectedProject.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Year:</span>
                        <span className="text-muted-foreground">{selectedProject.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Team:</span>
                        <span className="text-muted-foreground">{selectedProject.team}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-muted-foreground">{selectedProject.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="glass-button border-0 text-white flex-1 " asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} color="white" />
                      View Live Demo
                    </a>
                  </Button>
              
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
