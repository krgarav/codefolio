"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Fullstack Developer",
    company: "Tech Solutions Inc.",
    link: "#",
    description:
      "Lead development of enterprise web applications and desktop tools. Architecting scalable solutions using MERN stack and Electron.js for cross-platform desktop apps.",
    technologies: ["React", "Node.js", "MongoDB", "Electron", "TypeScript"],
  },
  {
    period: "2021 — 2023",
    title: "Fullstack Developer",
    company: "Digital Agency Co.",
    link: "#",
    description:
      "Developed full-stack web applications for various clients. Built custom CMS solutions and e-commerce platforms using modern JavaScript technologies.",
    technologies: ["React", "Express.js", "PostgreSQL", "Redux", "AWS"],
  },
  {
    period: "2020 — 2021",
    title: "Frontend Developer",
    company: "StartUp Hub",
    link: "#",
    description:
      "Created responsive user interfaces and implemented complex frontend features. Collaborated with designers to deliver pixel-perfect implementations.",
    technologies: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    period: "2019 — 2020",
    title: "Junior Developer",
    company: "CodeCraft Studio",
    link: "#",
    description:
      "Started my professional journey building web applications. Learned agile methodologies and contributed to various client projects.",
    technologies: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "3rem" } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-primary to-transparent"
            />
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ originY: 0 }}
            />

            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="group relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-[-4px] md:left-[196px] top-8 w-2 h-2 rounded-full bg-primary z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  </motion.div>

                  {/* Period */}
                  <div className="flex items-center gap-2 md:justify-end md:pr-8 pl-6 md:pl-0">
                    <Calendar className="h-4 w-4 text-primary/50 md:hidden" />
                    <p className="text-sm font-mono text-primary">
                      {exp.period}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="relative pl-6 md:pl-8 pb-8">
                    <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 group-hover:bg-card/80">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <Link
                            href={exp.link}
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors text-sm"
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
