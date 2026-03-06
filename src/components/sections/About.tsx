import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function About() {
  return (
    <Section id="about" alternate>
      <AnimatedSection>
        <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
          About
        </h2>
        <h3 className="mb-8 text-2xl font-semibold text-text-primary md:text-3xl">
          Business Process Expertise Meets AI Engineering
        </h3>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        <AnimatedSection delay={0.1}>
          <p className="text-sm leading-relaxed text-text-secondary">
            Most AI consultants start from the technology and work backwards
            to the business. I do the opposite. With 6+ years in client facing
            consulting and enterprise operations at Accenture, Shell, and high
            growth startups, I have led digital transformation initiatives,
            mapped workflows, sat in stakeholder meetings, and felt the pain
            of manual processes firsthand. That operational fluency is what
            separates a working prototype from a system people actually adopt.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-sm leading-relaxed text-text-secondary">
            Today I apply that context to build scalable, data driven AI
            systems that fit into how teams already work. Lead qualification
            engines inside Salesforce that sales reps trust. Conversational
            AI bots that let junior agents handle escalation tier tickets.
            Intelligent automation workflows that streamline CRM operations
            end to end. Every project I take on starts with the same
            question: what does this process look like today, and where
            does AI make it meaningfully better?
          </p>
        </AnimatedSection>
      </div>

    </Section>
  );
}
