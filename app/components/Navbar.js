"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineEnvelope,
  HiOutlineArrowDown,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

const navLinks = [
  { label: "About", href: "#about", icon: HiOutlineUser },
  { label: "Experience", href: "#experience", icon: HiOutlineBriefcase },
  { label: "Projects", href: "#projects", icon: HiOutlineCodeBracket },
  { label: "Skills", href: "#skills", icon: HiOutlineSparkles },
  { label: "Research", href: "#research", icon: HiOutlineDocumentText },
  { label: "Languages", href: "#languages", icon: HiOutlineGlobeAlt },
  { label: "Education", href: "#education", icon: HiOutlineAcademicCap },
  { label: "Contact", href: "#contact", icon: HiOutlineEnvelope },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-accent-light"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
            >
              MA<span className="text-accent">.</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-background bg-accent hover:bg-accent-light rounded-lg transition-all duration-200"
              >
                <HiOutlineArrowDown className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiOutlineXMark className="w-6 h-6" />
              ) : (
                <HiOutlineBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        activeSection === link.href.replace("#", "")
                          ? "text-accent bg-accent/10"
                          : "text-muted hover:text-foreground hover:bg-surface-hover"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-3 border-t border-border">
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-background bg-accent hover:bg-accent-light rounded-lg transition-all duration-200"
                  >
                    <HiOutlineArrowDown className="w-4 h-4" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
