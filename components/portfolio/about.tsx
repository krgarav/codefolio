"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Laptop, Server, Zap, Cpu, Globe, Layers, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Writing scalable, maintainable code following SOLID principles",
  },
  {
    icon: Laptop,
    title: "Desktop Apps",
    description: "Cross-platform applications powered by Electron.js",
  },
  {
    icon: Server,
    title: "API Design",
    description: "RESTful & GraphQL APIs with robust architecture",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized for speed, efficiency, and user experience",
  },
];

const stats = [
  { value: "5+", label: "Years Experience", icon: Rocket },
  { value: "50+", label: "Projects Completed", icon: Layers },
  { value: "30+", label: "Happy Clients", icon: Globe },
  { value: "10+", label: "Desktop Apps", icon: Cpu },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
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
                About Me
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-xs"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed pl-4">
                  I&apos;m <span className="text-primary font-semibold">Kumar Gaurav</span>, a passionate 
                  Fullstack Developer with expertise in building modern web applications using the 
                  <span className="text-foreground font-medium"> MERN stack</span>. My journey in software 
                  development has equipped me with a deep understanding of both frontend and backend technologies.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed"
              >
                Beyond web development, I specialize in creating{" "}
                <span className="text-accent font-medium">cross-platform desktop applications</span> using 
                Electron.js. This unique combination allows me to deliver solutions that work seamlessly 
                across web browsers, Windows, macOS, and Linux.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground leading-relaxed"
              >
                I believe in pushing the boundaries of technology while maintaining clean, 
                efficient code. Whether it&apos;s a complex web platform or a feature-rich desktop 
                application, I&apos;m committed to delivering solutions that exceed expectations.
              </motion.p>

              {/* Stats grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="relative p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors text-center">
                      <stat.icon className="h-5 w-5 text-primary mx-auto mb-2 opacity-50" />
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="group relative"
                >
                  <div className="relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-colors h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
