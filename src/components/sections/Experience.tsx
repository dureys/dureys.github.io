import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience">
      <AnimatedSection>
        <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
          Experience
        </h2>
        <h3 className="mb-3 text-2xl font-semibold text-text-primary md:text-3xl">
          Professional Journey
        </h3>
        <p className="mb-12 max-w-xl text-sm text-text-secondary">
          Enterprise delivery, family business support and independent AI
          building. Expand a role for the scope, tools and outcomes.
        </p>
      </AnimatedSection>

      <div>
        {experiences.map((exp, index) => (
          <AnimatedSection key={exp.id} delay={index * 0.1}>
            <TimelineItem
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
