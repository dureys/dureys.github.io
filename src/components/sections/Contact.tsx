import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';

export function Contact() {
  return (
    <Section id="contact">
      <AnimatedSection>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            Contact
          </h2>
          <h3 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">
            Let’s build the next useful AI system.
          </h3>
          <p className="mb-8 text-sm text-text-secondary">
            I am interested in AI product ownership, implementation, adoption,
            automation and solutions roles in Berlin or remote within Germany.
            If you need someone who connects business processes, technical
            delivery and the people using the result, let’s talk.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={`mailto:${personalInfo.email}?subject=AI%20role%20discussion`}
              variant="primary"
            >
              Discuss an AI role
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
          <a href={personalInfo.cvUrl} className="mt-6 inline-block text-sm text-accent underline underline-offset-4">Download my CV ↓</a>

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
