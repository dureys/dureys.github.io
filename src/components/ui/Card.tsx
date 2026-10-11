import { cn } from '@/lib/utils';
import { Badge } from './Badge';
import { SystemArtifact } from './SystemArtifact';
import type { Project } from '@/types';
import { ownership } from '@/data/ownership';

interface CardProps {
  project: Project;
  className?: string;
  badgeLabel?: string;
}

const statusStyles: Record<string, string> = {
  'Enterprise delivery': 'bg-accent-dim text-accent',
  'Deployed project': 'bg-accent-dim text-accent',
  'In use': 'bg-surface-hover text-accent ring-1 ring-border-strong',
  'Working prototype': 'bg-surface-hover text-text-primary ring-1 ring-border-strong',
  'Prototype in testing': 'bg-surface-hover text-text-primary ring-1 ring-border-strong',
  'Reference design': 'bg-surface-hover text-text-secondary ring-1 ring-border-subtle',
};

function verifyNote(dive: NonNullable<Project['deepDive']>): string {
  switch (dive.status) {
    case 'Enterprise delivery': return 'work delivered during the stated employment period';
    case 'Deployed project': return 'independent implementation with operating controls';
    case 'In use': return 'used in my own research and project delivery';
    case 'Prototype in testing': return 'testing before reader launch';
    case 'Working prototype': return 'prototype with explicit review and validation steps';
    case 'Reference design': return 'proposed flow; pilot outcomes remain to be established';
  }
}

export function Card({ project, className, badgeLabel }: CardProps) {
  const label = badgeLabel ?? (project.isPrivate ? 'Enterprise' : 'Independent prototype');
  const variant = project.isPrivate ? 'private' : 'public';
  const dive = project.deepDive;
  const owned = ownership[project.id];

  return (
    <div
      className={cn(
        'group rounded-lg border border-border-subtle bg-surface p-6 transition-colors duration-200 hover:border-border-strong',
        className
      )}
    >
      <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
        <h3 className="text-lg font-semibold text-text-primary">
          {project.title}
        </h3>
        {dive ? (
          <span className="flex max-w-full flex-wrap items-center gap-2 sm:max-w-[45%] sm:justify-end">
            {dive.timeframe && (
              <span className="whitespace-nowrap font-mono text-[10px] text-text-muted">
                {dive.timeframe}
              </span>
            )}
            <span
              className={cn(
                'whitespace-nowrap rounded-full px-2.5 py-0.5 font-mono text-[11px]',
                statusStyles[dive.status]
              )}
            >
              {dive.status}
            </span>
          </span>
        ) : (
          <Badge variant={variant}>{label}</Badge>
        )}
      </div>

      {project.impact && (
        <p className="mb-2 font-mono text-sm font-medium text-accent">
          ▸ {project.impact}
        </p>
      )}

      <p className="mb-3 text-sm leading-relaxed text-text-primary">
        {project.description}
      </p>

      {dive && (
        <p className="mb-3 font-mono text-xs leading-relaxed text-text-muted">
          for: {dive.audience}
        </p>
      )}

      {owned && <p className="mb-4 text-sm leading-relaxed text-text-secondary"><span className="font-semibold text-text-primary">My ownership: </span>{owned.scope}</p>}
      {project.id === 'task-calendar' && <a href="/workflows/task-intake/" className="mb-4 inline-flex rounded border border-accent px-3 py-2 text-sm text-accent hover:bg-accent-dim">Inspect tested workflow behaviours →</a>}
      {dive?.nda && (
        <p className="mb-3 font-mono text-[11px] tracking-wide text-text-muted">
          <span className="text-accent">nda:</span> described at pattern
          level. Internal metrics, volumes and platform specifics removed.
        </p>
      )}

      {project.artifactId && <SystemArtifact id={project.artifactId} />}

      {dive?.flow && !project.artifactId && (
        <div className="mb-3 flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
          {dive.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="font-mono text-[11px] text-accent">→</span>
              )}
              <span className="rounded-sm border border-border-subtle bg-background px-1.5 py-0.5 font-mono text-[11px] text-text-secondary">
                {step}
              </span>
            </span>
          ))}
        </div>
      )}

      {dive && (
        <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="text-accent">context:</span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border-strong px-2 py-0.5 text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              code ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border-strong px-2 py-0.5 text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              live ↗
            </a>
          )}
          <span className="text-text-muted">{verifyNote(dive)}</span>
        </div>
      )}

      <details className="group/details mb-4">
        <summary className="cursor-pointer list-none font-mono text-xs text-text-muted transition-colors hover:text-accent">
          <span className="group-open/details:hidden">
            ▸ {dive ? 'problem, architecture, tradeoffs' : 'how it works'}
          </span>
          <span className="hidden group-open/details:inline">
            ▾ {dive ? 'problem, architecture, tradeoffs' : 'how it works'}
          </span>
        </summary>
        {dive ? (
          <div className="mt-3 space-y-4 border-l border-border-subtle pl-3">
            {owned && <div><p className="mono-label mb-1 text-[10px] text-accent">Delivery and adoption</p><p className="text-sm leading-relaxed text-text-secondary">{owned.delivery}</p></div>}
            <div>
              <p className="mono-label mb-1 text-[10px] text-accent">The problem</p>
              <p className="text-sm leading-relaxed text-text-secondary">
                {dive.problem}
              </p>
            </div>
            <div>
              <p className="mono-label mb-1 text-[10px] text-accent">Implementation or proposed flow</p>
              <p className="text-sm leading-relaxed text-text-secondary">
                {dive.solution}
              </p>
            </div>
            <div>
              <p className="mono-label mb-1 text-[10px] text-accent">The tradeoffs</p>
              <ul className="space-y-2">
                {dive.tradeoffs.map((t) => (
                  <li
                    key={t.head}
                    className="text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="font-medium text-text-primary">
                      {t.head},
                    </span>{' '}
                    because {t.because}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono-label mb-1 text-[10px] text-accent">Outcome</p>
              <p className="text-sm leading-relaxed text-text-secondary">
                {dive.impactDetail}
              </p>
            </div>
            <div>
              <p className="mono-label mb-1 text-[10px] text-accent">
                What I would watch next
              </p>
              <ul className="list-disc space-y-1 pl-4">
                {dive.watchNext.map((w) => (
                  <li
                    key={w}
                    className="text-sm leading-relaxed text-text-secondary"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="mt-2 border-l border-border-subtle pl-3 text-sm leading-relaxed text-text-secondary">
            {project.longDescription}
          </p>
        )}
      </details>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>

      {!dive && (project.githubUrl || project.liveUrl) && (
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
