"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Heart, Terminal, ArrowUp } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & description */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors mb-3"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/40 transition-colors" />
                <span className="relative px-2 py-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-mono">
                  KG
                </span>
              </motion.div>
              <span className="text-foreground">
                Kumar Gaurav
              </span>
            </Link>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary/50" />
              Fullstack Developer | MERN & Electron.js
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links & scroll to top */}
          <div className="flex items-center justify-end gap-4">
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.div key={social.name} whileHover={{ scale: 1.1, y: -2 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Kumar Gaurav. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted with{" "}
            <Heart className="inline h-4 w-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
