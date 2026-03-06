import { Badge } from './Badge';
import type { Experience } from '@/types';

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
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

      <div className="pb-10">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-text-primary">
            {experience.role}
          </h3>
          {experience.isCurrent && (
            <Badge variant="accent">Current</Badge>
          )}
        </div>

        <div className="mb-1 text-sm text-text-secondary">
          {experience.company}
          {experience.companyNote && (
            <span className="text-text-muted">
              {' '}
              ({experience.companyNote})
            </span>
          )}
        </div>

        <div className="mb-3 text-xs text-text-muted">
          {experience.period} &middot; {experience.location}
        </div>

        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          {experience.summary}
        </p>

        <ul className="mb-3 space-y-1.5">
          {experience.achievements.map((achievement, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed text-text-secondary before:mr-2 before:text-zinc-600 before:content-['•']"
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
    </div>
  );
}
