"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`} ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-center gap-4 mb-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                {title}
              </h2>
              <div className="flex-1 h-px bg-border max-w-[200px]" />
            </div>
            {subtitle && (
              <p className="text-muted text-sm sm:text-base max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
