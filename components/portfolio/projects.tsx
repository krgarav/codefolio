"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Monitor, Globe, Folder, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Cloud File Manager",
    type: "Desktop Application",
    description:
      "A cross-platform desktop application for managing cloud storage services. Built with Electron.js, featuring drag-and-drop upload, real-time sync, and multi-account support.",
    technologies: ["Electron.js", "React", "Node.js", "AWS S3", "SQLite"],
    github: "#",
    demo: "#",
    featured: true,
    isDesktop: true,
  },
  {
    title: "E-Commerce Platform",
    type: "Web Application",
    description:
      "Full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Handles 10k+ daily transactions.",
    technologies: ["React", "NestJS", "MySQL", "Stripe", "Redis"],
    github: "#",
    demo: "#",
    featured: true,
    isDesktop: false,
  },
  {
    title: "Code Snippet Manager",
    type: "Desktop Application",
    description:
      "Developer tool for organizing and syncing code snippets across devices. Features syntax highlighting, tagging, and GitHub Gist integration.",
    technologies: ["Electron", "TypeScript", "React", "Monaco Editor"],
    github: "#",
    demo: "#",
    featured: true,
    isDesktop: true,
  },
  {
    title: "Task Management API",
    type: "Backend Service",
    description:
      "RESTful API for task management with real-time notifications, team collaboration features, and third-party integrations.",
    technologies: ["NestJS", "MySQL", "TypeORM", "Socket.io", "JWT"],
    github: "#",
    demo: "#",
    featured: false,
    isDesktop: false,
  },
  {
    title: "Real-time Chat App",
    type: "Web Application",
    description:
      "Scalable chat application with video calls, file sharing, and end-to-end encryption. Supports 1000+ concurrent users.",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    github: "#",
    demo: "#",
    featured: false,
    isDesktop: false,
  },
  {
    title: "System Monitor",
    type: "Desktop Application",
    description:
      "Cross-platform system monitoring tool with CPU, memory, and network usage tracking. Includes alert notifications and historical data.",
    technologies: ["Electron", "Node.js", "Chart.js", "systeminformation"],
    github: "#",
    demo: "#",
    featured: false,
    isDesktop: true,
  },
];

const filters = ["All", "Web", "Desktop"];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(p => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Desktop") return p.isDesktop;
    return !p.isDesktop;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "3rem" } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-primary to-transparent"
              />
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs hidden sm:block"
              />
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 sm:ml-auto">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Featured projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Project header with glow */}
                  <div className="relative h-48 bg-gradient-to-br from-secondary/50 to-background overflow-hidden">
                    {/* Animated grid background */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                          {project.isDesktop ? (
                            <Monitor className="h-10 w-10 text-primary" />
                          ) : (
                            <Globe className="h-10 w-10 text-primary" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/80 backdrop-blur-sm border border-border text-foreground">
                        {project.type}
                      </Badge>
                    </div>

                    {/* Quick links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link 
                        href={project.github}
                        className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link 
                        href={project.demo}
                        className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary/80 rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other projects */}
          {filteredProjects.filter(p => !p.featured).length > 0 && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <Folder className="h-5 w-5 text-primary/50" />
                <h3 className="text-lg font-semibold text-muted-foreground">Other Projects</h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.filter(p => !p.featured).map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  >
                    <Card className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/30 transition-all group p-6 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                          {project.isDesktop ? (
                            <Monitor className="h-5 w-5 text-primary/70" />
                          ) : (
                            <Globe className="h-5 w-5 text-primary/70" />
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Link href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                          </Link>
                          <Link href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>

                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-primary/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs font-mono text-muted-foreground">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* View more button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild className="border-primary/30 hover:border-primary hover:bg-primary/10">
              <Link href="https://github.com" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                View More on GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
