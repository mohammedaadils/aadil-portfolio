"use client";

import { motion } from "framer-motion";
import {
  HiOutlineArrowDown,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4"
          >
            Mohammed Aadil
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted font-medium mb-6"
          >
            Computer Science undergraduate with hands-on experience in Software
            and backend development, and API design.
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base text-muted/80 leading-relaxed max-w-2xl mb-10"
          >
            Strong foundation in Java, Python, object-oriented programming, data
            structures, databases, and problem-solving. Experienced in building
            scalable applications and automating workflows using clean,
            maintainable code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-background bg-accent hover:bg-accent-light rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              <HiOutlineArrowDown className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-surface hover:bg-surface-hover border border-border rounded-lg transition-all duration-200"
            >
              View Projects
              <HiOutlineArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-muted/60 uppercase tracking-wider font-medium">
              Connect
            </span>
            <div className="w-8 h-px bg-border" />
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/mohammed-aadil-48389a25a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-muted hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/mohammedaadils"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-muted hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="mailto:thasinaadil@gmail.com"
                className="p-2.5 text-muted hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                aria-label="Email"
              >
                <HiOutlineEnvelope className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted/40 hover:text-muted transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiOutlineArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
