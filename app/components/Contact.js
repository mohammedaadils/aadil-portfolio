"use client";

import {
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Let's connect — I'm always open to new opportunities."
    >
      <div className="max-w-3xl">
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <a
            href="mailto:thasinaadil@gmail.com"
            className="flex items-center gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 group"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
              <HiOutlineEnvelope className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-0.5">
                Email
              </p>
              <p className="text-sm font-medium text-foreground">
                thasinaadil@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-xl bg-surface border border-border">
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <HiOutlinePhone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-0.5">
                Phone
              </p>
              <p className="text-sm font-medium text-foreground">
                +91 9092407862
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/mohammed-aadil-48389a25a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 group"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-0.5">
                LinkedIn
              </p>
              <p className="text-sm font-medium text-foreground">
                Mohammed Aadil
              </p>
            </div>
          </a>

          <a
            href="https://github.com/mohammedaadils"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 group"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
              <FaGithub className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-medium mb-0.5">
                GitHub
              </p>
              <p className="text-sm font-medium text-foreground">
                mohammedaadils
              </p>
            </div>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
