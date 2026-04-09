"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Database, Layout, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    skills: ["Node.js", "Express.js", "NestJS", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "Desktop",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    skills: ["Electron.js", "IPC Communication", "Native APIs", "Auto-updater", "SQLite", "Cross-platform"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Postman"],
  },
];

const coreTechnologies = [
  { name: "MongoDB", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Express.js", color: "bg-gray-500/10 text-gray-300 border-gray-500/20" },
  { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { name: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "NestJS", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  { name: "MySQL", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "Electron.js", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
                Skills & Technologies
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs"
            />
          </div>

          {/* Core technologies */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {coreTechnologies.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className={`px-4 py-2 text-sm font-medium rounded-lg border backdrop-blur-sm hover:scale-105 transition-transform cursor-default ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* MERN Stack highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                MERN Stack Specialist + Electron.js Expert
              </span>
              <Sparkles className="h-4 w-4 text-accent" />
            </div>
          </motion.div>

          {/* Skill categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + categoryIndex * 0.08 }}
                className="group relative"
              >
                <div className="relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className={`h-5 w-5 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + categoryIndex * 0.08 + skillIndex * 0.03,
                        }}
                        className="px-3 py-1.5 text-sm bg-secondary/50 text-muted-foreground rounded-md border border-border/50 hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
