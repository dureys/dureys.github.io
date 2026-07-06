'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Badge } from './Badge';
import type { Experience } from '@/types';

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
  defaultOpen?: boolean;
}

export function TimelineItem({
  experience,
  isLast,
  defaultOpen = false,
}: TimelineItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="relative pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 h-full w-px bg-zinc-800" />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 ${
          experience.isCurrent
            ? 'border-accent bg-accent'
            : 'border-zinc-600 bg-background'
        }`}
      />

      <div className="pb-8">
        {/* Collapsed header — whole thing is the toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="group block w-full rounded-md text-left"
        >
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
              {experience.role}
            </h3>
            {experience.isCurrent && <Badge variant="accent">Current</Badge>}
            <span
              className={`ml-auto font-mono text-xs text-text-muted transition-all group-hover:text-accent ${
                open ? 'rotate-90' : ''
              }`}
              aria-hidden="true"
            >
              ▸
            </span>
          </div>

          <div className="mb-1 text-sm text-text-secondary">
            {experience.company}
            {experience.companyNote && (
              <span className="text-text-muted"> ({experience.companyNote})</span>
            )}
            <span className="text-text-muted">
              {' '}
              &middot; {experience.period}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-text-primary">
            <span className="mr-1.5 font-mono text-accent">▸</span>
            {experience.highlight}
          </p>

          {!open && (
            <p className="mt-1.5 font-mono text-[11px] text-text-muted transition-colors group-hover:text-accent">
              + full story
            </p>
          )}
        </button>

        {/* Expanded detail */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-3 border-l border-border-subtle pl-4">
                <p className="mb-3 text-sm leading-relaxed text-text-secondary">
                  {experience.summary}
                </p>

                <ul className="mb-4 space-y-1.5">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-text-secondary before:mr-2 before:text-accent before:content-['▸']"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
