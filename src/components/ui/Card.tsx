import { cn } from '@/lib/utils';
import { Badge } from './Badge';
import type { Project } from '@/types';

interface CardProps {
  project: Project;
  className?: string;
  badgeLabel?: string;
}

export function Card({ project, className, badgeLabel }: CardProps) {
  const label = badgeLabel ?? (project.isPrivate ? 'Enterprise' : 'Open Source');
  const variant = project.isPrivate ? 'private' : 'public';

  return (
    <div
      className={cn(
        'group rounded-xl border border-border-subtle bg-surface p-6 transition-colors duration-200 hover:border-zinc-700',
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-text-primary">
          {project.title}
        </h3>
        <Badge variant={variant}>
          {label}
        </Badge>
      </div>

      <p className="mb-3 text-sm leading-relaxed text-text-secondary">
        {project.longDescription}
      </p>

      {project.impact && (
        <p className="mb-4 text-sm font-medium text-accent">
          {project.impact}
        </p>
      )}

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex gap-3 border-t border-border-subtle pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted transition-colors hover:text-accent"
            >
              View on GitHub &rarr;
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted transition-colors hover:text-accent"
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      )}
    </div>
  );
}
