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
        <h3 className="mb-12 text-2xl font-semibold text-text-primary md:text-3xl">
          Professional Journey
        </h3>
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
