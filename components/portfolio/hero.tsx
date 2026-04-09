"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, Terminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

function FloatingParticle({ delay, left }: { delay: number; left: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-primary/60 rounded-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        y: [0, -80],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      style={{
        left: `${left}%`,
        bottom: "20%",
      }}
    />
  );
}

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

function GlowingOrb({ className }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-30 animate-pulse ${className}`} />
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 20, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 20, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <GlowingOrb className="w-96 h-96 bg-primary top-1/4 -left-20" />
      <GlowingOrb className="w-80 h-80 bg-accent bottom-1/4 right-0" />
      <GlowingOrb className="w-64 h-64 bg-primary/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating particles - reduced count */}
      {[...Array(8)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.5} left={(i * 12) + 5} />
      ))}

      {/* Moving gradient based on mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl pointer-events-none"
        style={{ x: springX, y: springY }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-primary font-mono">Available for hire</span>
            </motion.div>

            <motion.p
              className="text-primary font-mono text-sm mb-2 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hello World, I&apos;m
            </motion.p>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Kumar Gaurav
              </span>
            </motion.h1>

            <motion.h2 
              className="text-xl lg:text-2xl text-muted-foreground mb-6 font-light flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Terminal className="h-5 w-5 text-primary" />
              <TypeWriter text="Fullstack Developer | MERN & Electron.js" delay={1000} />
            </motion.h2>

            <motion.p 
              className="text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Crafting next-generation web applications and powerful desktop solutions. 
              I transform complex ideas into elegant, performant code that pushes the 
              boundaries of what&apos;s possible.
            </motion.p>

            {/* Tech stack with glow effect */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {["MongoDB", "Express.js", "React", "Node.js", "NestJS", "Electron"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.08, duration: 0.3 }}
                  className="px-4 py-2 text-sm font-mono bg-secondary/50 text-foreground rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-colors cursor-default backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button asChild size="lg" className="group relative overflow-hidden">
                <Link href="#projects">
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" />
                    View Projects
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary/30 hover:border-primary hover:bg-primary/10">
                <Link href="#contact">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kumargaurav@example.com", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary transition-colors block"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Futuristic Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              
              <div className="relative bg-card/80 backdrop-blur-xl rounded-xl border border-border/50 shadow-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs text-muted-foreground font-mono">kumar_gaurav.config.ts</span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <motion.pre 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <code>
                      <span className="text-accent">const</span>{" "}
                      <span className="text-foreground">developer</span> = {"{"}
                      {"\n"}{"  "}<span className="text-muted-foreground">name:</span>{" "}
                      <span className="text-primary">&quot;Kumar Gaurav&quot;</span>,
                      {"\n"}{"  "}<span className="text-muted-foreground">role:</span>{" "}
                      <span className="text-primary">&quot;Fullstack Developer&quot;</span>,
                      {"\n"}{"  "}<span className="text-muted-foreground">stack:</span> [
                      {"\n"}{"    "}<span className="text-primary">&quot;MongoDB&quot;</span>,
                      {"\n"}{"    "}<span className="text-primary">&quot;Express.js&quot;</span>,
                      {"\n"}{"    "}<span className="text-primary">&quot;React&quot;</span>,
                      {"\n"}{"    "}<span className="text-primary">&quot;Node.js&quot;</span>,
                      {"\n"}{"    "}<span className="text-primary">&quot;NestJS&quot;</span>,
                      {"\n"}{"    "}<span className="text-primary">&quot;MySQL&quot;</span>,
                      {"\n"}{"  "}],
                      {"\n"}{"  "}<span className="text-muted-foreground">desktop:</span>{" "}
                      <span className="text-primary">&quot;Electron.js&quot;</span>,
                      {"\n"}{"  "}<span className="text-muted-foreground">passion:</span>{" "}
                      <span className="text-primary">&quot;Building the future&quot;</span>,
                      {"\n"}{"  "}<span className="text-muted-foreground">available:</span>{" "}
                      <span className="text-green-400">true</span>,
                      {"\n"}{"}"};
                      {"\n\n"}
                      <span className="text-accent">export default</span> developer;
                    </code>
                  </motion.pre>

                  {/* Blinking cursor */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/30">
                    <span className="text-primary">{">"}</span>
                    <span className="text-muted-foreground">Ready to collaborate</span>
                    <span className="w-2 h-4 bg-primary animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border border-primary/20 rounded-lg rotate-45" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border border-accent/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
}
