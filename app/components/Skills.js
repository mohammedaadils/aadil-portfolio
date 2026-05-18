"use client";

import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "Python", "SQL", "C/C++", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MS SQL"],
  },
  {
    name: "Backend & Systems",
    skills: [
      "Springboot",
      "Flask",
      "FastAPI",
      "REST API Development",
      "API Testing (Postman)",
    ],
  },
  {
    name: "AI / ML",
    skills: [
      "PyTorch",
      "CNN",
      "LSTM",
      "Transformers",
      "NumPy",
      "Pandas",
      "LLM Integration",
    ],
  },
  {
    name: "Tools",
    skills: ["Linux", "Git"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="p-5 rounded-xl bg-surface border border-border hover:border-border-light transition-all duration-300"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium text-muted hover:text-foreground bg-surface-hover hover:bg-border rounded-md transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
