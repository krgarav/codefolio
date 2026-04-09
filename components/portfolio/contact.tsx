"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Zap,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-cyan-400",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({ success: false, error: false });

  const email = "kumargaurav@developer.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // Simulate form submission
  //   console.log(e )
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //   setIsSubmitting(false);
  //   setFormState({ success: true, error: false });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_n4gt9if",
        "template_qy9ake3",
        form,
        "-OpzpvvA2b1HNhh5q",
      );

      console.log("Email sent successfully");

      form.reset(); // clear form
      setFormState({ success: true, error: false });
    } catch (error: any) {
      console.log("Email error", error?.text || error);

      setFormState({ success: false, error: true });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "30px 30px",
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-mono">
                Available for opportunities
              </span>
            </motion.div>

            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Let&apos;s Build Something Amazing
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I&apos;m always open to discussing new
              opportunities, creative ideas, or chances to be part of your
              vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {/* Email card */}
              <div className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">
                      Email me at
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-foreground font-medium truncate">
                        {email}
                      </p>
                      <motion.button
                        onClick={copyEmail}
                        className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all shrink-0"
                        aria-label="Copy email"
                        whileTap={{ scale: 0.9 }}
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location card */}
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Based in
                    </p>
                    <p className="text-foreground font-medium">India</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Available worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        className={`w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground ${social.color} hover:border-primary/50 transition-all`}
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="relative">
                {/* Form glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50" />

                <div className="relative p-8 bg-card/80 backdrop-blur-xl rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Send a Message
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        I&apos;ll get back to you within 24 hours
                      </p>
                    </div>
                  </div>

                  {formState.success ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-green-500" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-muted-foreground">
                        Thanks for reaching out. I&apos;ll respond soon.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() =>
                          setFormState({ success: false, error: false })
                        }
                      >
                        Send Another
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <FieldGroup>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input
                              id="name"
                              name="name" // ADD THIS
                              placeholder="Your name"
                              required
                              className="bg-secondary/50 border-border focus:border-primary/50"
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                              id="email"
                              name="email" // ADD THIS
                              type="email"
                              placeholder="your@email.com"
                              required
                              className="bg-secondary/50 border-border focus:border-primary/50"
                            />
                          </Field>
                        </div>

                        <Field>
                          <FieldLabel htmlFor="subject">Subject</FieldLabel>
                          <Input
                            id="subject"
                            name="subject" // ADD THIS
                            placeholder="What's this about?"
                            required
                            className="bg-secondary/50 border-border focus:border-primary/50"
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="message">Message</FieldLabel>
                          <Textarea
                            id="message"
                            name="message" // ADD THIS (MOST IMPORTANT)
                            placeholder="Tell me about your project..."
                            rows={5}
                            required
                            className="bg-secondary/50 border-border focus:border-primary/50 resize-none"
                          />
                        </Field>

                        <Button
                          type="submit"
                          className="w-full group relative overflow-hidden"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                Send Message
                              </>
                            )}
                          </span>
                        </Button>
                      </FieldGroup>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
