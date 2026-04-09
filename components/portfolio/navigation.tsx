"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    
    // Determine active section based on scroll position
    const sections = navItems.map(item => item.href.substring(1));
    const scrollPosition = window.scrollY + 150;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(`#${sections[i]}`);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
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
            <span className="hidden sm:inline text-sm text-muted-foreground font-normal">
              Kumar Gaurav
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  activeSection === href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {label}
                {activeSection === href && (
                  <motion.span
                    layoutId="activeNavSection"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                    transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                  />
                )}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4 group">
              <Link href="#contact" className="flex items-center gap-2">
                <Zap className="h-4 w-4 group-hover:animate-pulse" />
                Hire Me
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-secondary/50 text-foreground border border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 py-4 border-t border-border/50">
                {navItems.map(({ href, label }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                        activeSection === href
                          ? "text-primary bg-primary/10 border border-primary/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  <Button asChild size="sm" className="w-full mt-2">
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <Zap className="h-4 w-4 mr-2" />
                      Hire Me
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
