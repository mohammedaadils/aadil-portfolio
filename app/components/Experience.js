"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    company: "Tactlabs Pvt. Ltd",
    location: "Toronto, Canada",
    role: "SDE Intern",
    tech: "Flask, FastAPI, MongoDB, LLMs, API Design",
    duration: "Aug 2023 – Apr 2024",
    points: [
      "Engineered 5+ backend APIs using Flask and FastAPI for automated test case generation, cutting manual effort by ~60% per testing cycle.",
      "Integrated GPT-2 via Hugging Face Transformers and PyTorch to generate Postman-compatible test cases, achieving ~80% structural accuracy on 200+ test prompts.",
      "Architected scalable data pipelines with MongoDB and JSON-based API structures.",
    ],
  },
  {
    company: "Plasmid Pvt. Ltd",
    location: "Chennai",
    role: "Web Development Intern",
    tech: "HTML, CSS, JavaScript",
    duration: "Jul 2024 – Sept 2024",
    points: [
      "Improved frontend responsiveness and backend functionality across 4+ web modules, reducing reported UI issues by ~30%.",
      "Built responsive design layouts from scratch and integrated back-end endpoints for 2 client-facing features.",
    ],
  },
  {
    company: "Indus Novateur Software Pvt. Ltd",
    location: "Coimbatore",
    role: "Developer Intern",
    tech: "SQL, Backend Systems, Data Workflows, SAP B1",
    duration: "Jun 2025 – Jul 2025",
    points: [
      "Designed and optimized SQL-based backend workflows and scalable data pipelines to improve transactional data consistency and system reliability.",
      "Debugged and resolved 10+ workflow inconsistencies by improving backend integration logic, data mapping, and process automation.",
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border group-last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-surface border-2 border-border group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
      </div>

      {/* Content card */}
      <div className="p-5 sm:p-6 rounded-xl bg-surface border border-border hover:border-border-light transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <HiOutlineBuildingOffice2 className="w-3.5 h-3.5 text-muted" />
              <span className="text-sm text-muted">
                {exp.company} · {exp.location}
              </span>
            </div>
          </div>
          <span className="text-xs font-medium text-muted bg-surface-hover px-3 py-1.5 rounded-md whitespace-nowrap">
            {exp.duration}
          </span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exp.tech.split(", ").map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-medium text-accent bg-accent/10 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Points */}
        <ul className="space-y-2.5">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="text-accent mt-1.5 flex-shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Professional internships and industry experience."
    >
      <div className="max-w-3xl">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
