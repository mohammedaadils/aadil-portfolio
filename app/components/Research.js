"use client";

import { HiOutlineDocumentText, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import SectionWrapper from "./SectionWrapper";

export default function Research() {
  return (
    <SectionWrapper
      id="research"
      title="Research Publication"
      subtitle="Published academic work in software testing and AI."
    >
      <div className="max-w-3xl">
        <div className="p-6 sm:p-8 rounded-xl bg-surface border border-border hover:border-border-light transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0 hidden sm:flex">
              <HiOutlineDocumentText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                Automating REST API Postman Test Cases Using LLM
              </h3>
              <p className="text-sm text-muted/60 mb-3 font-medium">
                Published on arXiv · April 2024
              </p>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Developed a method to automatically generate REST API test cases
                using large language models, improving testing efficiency and
                reducing manual effort.
              </p>
              <a
                href="https://arxiv.org/abs/2404.10678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-accent bg-accent/10 hover:bg-accent/20 rounded-lg transition-all duration-200"
              >
                <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
                View on arXiv
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
