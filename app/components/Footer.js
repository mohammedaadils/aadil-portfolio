"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-border">·</span>
            <span className="font-medium text-foreground">Mohammed Aadil</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mohammed-aadil-48389a25a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/mohammedaadils"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:thasinaadil@gmail.com"
              className="p-2 text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <HiOutlineEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
