import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  enterpriseProjects,
  personalProjects,
  referenceDesigns,
} from '@/data/projects';

export const metadata: Metadata = {
  title: 'The System Registry | Oguzhan Durace',
  description:
    'Ten AI systems documented with problem, architecture, tradeoffs and honest impact. Two in production, three running daily, one built, one in development, three reference designs.',
};

const registry = [...enterpriseProjects, ...personalProjects, ...referenceDesigns]
  .filter((p) => p.systemNo !== undefined)
  .sort((a, b) => (a.systemNo ?? 0) - (b.systemNo ?? 0));

export default function SystemsPage() {
  return (
    <>
      <header className="border-b border-border-subtle px-6 py-5">
        <div className="mx-auto flex max-w-content items-center justify-between">
          <a
            href="/"
            className="font-mono text-sm text-text-secondary transition-colors hover:text-accent"
          >
            ◂ oguzhan_durace
          </a>
          <a
            href="/#contact"
            className="font-mono text-sm text-text-secondary transition-colors hover:text-accent"
          >
            contact
          </a>
        </div>
      </header>

      <main className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[860px]">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-text-muted">
            The System Registry
          </p>
          <h1 className="mb-5 font-display text-3xl font-bold text-text-primary md:text-5xl">
            Ten systems, documented like an engineer, not a brochure.
          </h1>
          <p className="mb-4 max-w-xl text-base leading-relaxed text-text-secondary">
            Each entry states the problem as the business felt it, the
            architecture, the tradeoffs I made and why, the honest impact, and
            what I would watch next. The status labels mean what they say:
            systems on my own infrastructure are marked running daily, not
            dressed up as enterprise production, and the reference designs say
            plainly what a pilot would prove. Nothing here pretends.
          </p>
          <div className="mb-6 rounded-md border border-border-strong bg-surface px-4 py-3 font-mono text-xs leading-relaxed text-text-secondary">
            <span className="text-accent">$ provenance:</span> the deep dives
            on this page were drafted by ten AI agents running in parallel and
            reviewed by me, in one working session. That is the working method
            this page documents, demonstrated on itself. Ask me to show it
            live.
          </div>
          <p className="mb-12 border-y border-border-subtle py-3 font-mono text-xs tracking-wide text-text-muted">
            <span className="text-accent">2</span> in production ·{' '}
            <span className="text-accent">3</span> running daily ·{' '}
            <span className="text-accent">1</span> built ·{' '}
            <span className="text-accent">1</span> in development ·{' '}
            <span className="text-accent">3</span> reference designs
          </p>

          <div className="space-y-8">
            {registry.map((project) => (
              <div key={project.id}>
                <p className="mb-2 font-mono text-sm font-medium text-accent">
                  {String(project.systemNo).padStart(2, '0')}
                </p>
                <Card project={project} />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-border-subtle bg-surface p-8 text-center">
            <p className="mb-4 text-base text-text-primary">
              If one of these is close to your problem, fifteen minutes is
              enough for me to walk you through it live.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/#contact" variant="primary">
                Get in Touch
              </Button>
              <Button href="/" variant="secondary">
                Back to the Main Site
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
