"use client";

import { HiOutlineGlobeAlt } from "react-icons/hi2";
import SectionWrapper from "./SectionWrapper";

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "Urdu", level: "Fluent" },
];

export default function Languages() {
  return (
    <SectionWrapper
      id="languages"
      title="Languages"
      subtitle="Languages I speak."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="p-4 rounded-xl bg-surface border border-border hover:border-border-light transition-all duration-300 text-center"
          >
            <HiOutlineGlobeAlt className="w-5 h-5 text-accent mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">
              {lang.name}
            </p>
            <p className="text-xs text-muted mt-1">{lang.level}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
