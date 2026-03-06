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
            Looking for My Next Challenge
          </h3>
          <p className="mb-8 text-sm text-text-secondary">
            Currently exploring senior AI consulting and AI automation
            architect roles where I can lead enterprise AI initiatives
            end to end. If your organization is integrating AI into
            business operations and needs someone who understands both
            sides, I would welcome the conversation.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="primary"
            >
              Email Me
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

          <div className="mt-8 space-y-1 text-xs text-text-muted">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.location}</p>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
