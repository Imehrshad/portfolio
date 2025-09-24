"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Front-End Developer",
    company: "Karo ( Shinypi )",
    location: "Tehran, Iran",
    period: "April 2024 - September 2025",
    description:
      "Worked on building and maintaining web interfaces, focusing on responsive, scalable, and performant front-end solutions using modern technologies.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Leaflet",
      "Axios",
      "shadcn/ui"
    ],
    achievements: [
      "Delivered 6 projects with user-friendly and maintainable front-end architecture",
      "Optimized performance and responsiveness across multiple web applications",
      "Collaborated with designers and backend developers to implement functional, accessible interfaces",
    ],
  }

]
const education = [
  {
    degree: "Associate Degree in Accounting",
    school: "University of Applied Science and Technology",
    location: "Tehran, Iran",
    period: "October 2017 - January 2020",
    description: "Completed coursework in accounting principles, finance, and business management.",
  },
  {
    degree: "Bachelor of Science in Computer Science (in progress)",
    school: "Azad University",
    location: "Tehran, Iran",
    period: "2025 - Present",
    description: "Currently studying software development, web technologies, and computer science fundamentals.",
  },
];


export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 my-animated-element "
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey and continuous learning path
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-primary "
          >
            Professional Experience
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border/50 p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{exp.title}</h4>
                      <p className="text-lg text-primary font-medium mb-3">{exp.company}</p>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{exp.description}</p>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs border-[0.5px] border-gray-600/40">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-primary"
          >
            Education
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card border-border/50 p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-lg text-primary font-medium mb-3">{edu.school}</p>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground leading-relaxed text-pretty">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
