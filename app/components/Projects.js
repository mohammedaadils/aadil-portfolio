"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Automatic Testcase Generator — Postman Compatible",
    description:
      "Built an AI-powered tool that generates Postman-compatible API test cases from natural language prompts, reducing manual test authoring time by ~65% in internal trials.",
    detail:
      "Engineered the backend using Flask and integrated GPT-2 with Transformers and PyTorch, enabling NLP-driven test automation across 3 API endpoint types.",
    tech: ["Python", "Flask", "Transformers", "GPT-2", "PyTorch", "REST API", "JSON"],
    github: "https://github.com/mohammedaadils",
    website: null,
  },
  {
    title: "AI DNA Mutation Prediction",
    description:
      "Designed DeepMorph, a hybrid CNN–LSTM multi-task learning system for DNA sequence analysis, predicting mutation status, gene classification, and clinical significance across 3 output tasks using one-hot encoded inputs.",
    detail:
      "Deployed an end-to-end inference pipeline with FastAPI, enabling REST-based risk-level interpretation and structured genomic output — reducing manual classification effort by ~50%.",
    tech: ["Python", "TensorFlow/PyTorch", "CNN–LSTM", "FastAPI", "NumPy"],
    github: "https://github.com/mohammedaadils/DeepMorph--AI-DNA-Mutation-Prediction",
    website: null,
  },
  {
    title: "Webhook Delivery Engine",
    description:
      "Built an async event fan-out engine delivering HTTP POST webhooks to subscribers with per-attempt tracking across a 4-table schema.",
    detail:
      "Configured exponential backoff retry (3 attempts, 30/60/120s) via Spring Scheduler with full SQL-persisted delivery audit logs.",
    tech: ["Java", "Spring Boot", "JPA", "REST API", "MySQL"],
    github: "https://github.com/mohammedaadils",
    website: null,
  },
  {
    title: "Blockchain-Based Voting System",
    description:
      "Built a decentralized voting application using Solidity smart contracts, deployed and tested on the Ethereum blockchain with Hardhat — achieving 0 double-votes across 100+ simulated transactions.",
    detail:
      "Enforced single-vote-per-address integrity, dynamic party creation, and real-time on-chain vote tallying with tamper-proof records.",
    tech: ["Solidity", "Ethereum", "Hardhat", "Smart Contracts"],
    github: "https://github.com/mohammedaadils/Blockchain-Based-Voting-System",
    website: null,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group p-6 rounded-xl bg-surface border border-border hover:border-border-light transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-3">
        {project.description}
      </p>
      <p className="text-sm text-muted/70 leading-relaxed mb-5">
        {project.detail}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[11px] font-medium text-foreground/80 bg-surface-hover border border-border rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-foreground bg-surface-hover hover:bg-border rounded-lg transition-all duration-200"
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
        )}
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-accent bg-accent/10 hover:bg-accent/20 rounded-lg transition-all duration-200"
          >
            <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Selected projects showcasing technical depth and problem-solving."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
