"use client";

import { HiOutlineAcademicCap } from "react-icons/hi2";
import SectionWrapper from "./SectionWrapper";

const education = [
  {
    degree: "B.Tech, Computer Science And Engineering",
    institution: "Crescent University, Vandalur",
    score: "CGPA: 8.54",
    year: "2022 – 2026",
  },
  {
    degree: "Class XII (ISC Board)",
    institution: "St. Michael's Academy, Adyar",
    score: "Percentage: 90%",
    year: "2022",
  },
  {
    degree: "Class X (ICSE Board)",
    institution: "St. Michael's Academy, Adyar",
    score: "Percentage: 94.6%",
    year: "2020",
  },
];

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Academic background and qualifications."
    >
      <div className="space-y-4 max-w-3xl">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="flex gap-4 p-5 rounded-xl bg-surface border border-border hover:border-border-light transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent flex-shrink-0 h-fit hidden sm:flex">
              <HiOutlineAcademicCap className="w-5 h-5" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted mt-0.5">{edu.institution}</p>
                <p className="text-sm text-accent font-medium mt-1">
                  {edu.score}
                </p>
              </div>
              <span className="text-xs font-medium text-muted bg-surface-hover px-3 py-1.5 rounded-md whitespace-nowrap h-fit">
                {edu.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
