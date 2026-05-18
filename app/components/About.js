"use client";

import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="A quick overview of who I am and what I do."
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-muted leading-relaxed text-sm sm:text-base mb-6">
            I'm a Computer Science undergraduate passionate about Software and
            backend development and API design. I bring a strong foundation in{" "}
            <span className="text-foreground font-medium">Java</span>,{" "}
            <span className="text-foreground font-medium">Python</span>,
            object-oriented programming, data structures, databases, and
            problem-solving.
          </p>
          <p className="text-muted leading-relaxed text-sm sm:text-base">
            My experience spans building scalable applications, designing and
            integrating RESTful APIs, and automating workflows — all with a
            focus on writing clean, maintainable code. I thrive on solving
            complex problems and delivering robust solutions that create real
            impact.
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-surface border border-border">
            <p className="text-xs text-muted uppercase tracking-wider font-medium mb-2">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Backend Development",
                "API Design",
                "OOP",
                "Data Structures",
                "Databases",
                "Automation",
              ].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-border">
            <p className="text-xs text-muted uppercase tracking-wider font-medium mb-2">
              Core Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "SQL", "JavaScript"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs font-medium text-foreground bg-surface-hover rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
