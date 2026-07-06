import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';

export function Contact() {
  return (
    <Section id="contact">
      <AnimatedSection>
        <div className="mx-auto max-w-lg text-center">
          <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            Contact
          </h2>
          <h3 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">
            Hiring for a Senior AI Role?
          </h3>
          <p className="mb-8 text-sm text-text-secondary">
            I am interviewing for senior AI automation and architect
            positions — Berlin or remote. If you need someone who can walk
            into a messy process, find the automation that actually matters,
            and ship it to production, we should talk. I reply within a day.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="primary"
            >
              Email
            </Button>
            <Button
              href={personalInfo.linkedin}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              href={personalInfo.github}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-lg font-medium text-text-primary transition-colors hover:text-accent"
            >
              {personalInfo.email}
            </a>
            <span className="hidden text-border-subtle sm:inline">|</span>
            <a
              href={`tel:${personalInfo.phone?.replace(/\s/g, '')}`}
              className="text-lg font-medium text-text-primary transition-colors hover:text-accent"
            >
              {personalInfo.phone}
            </a>
          </div>
          <p className="mt-3 text-sm text-text-muted">
            {personalInfo.location}
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
