import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SkillGroup } from '@/components/ui/SkillGroup';
import { skillGroups } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills">
      <AnimatedSection>
        <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
          Technical Skills
        </h2>
        <h3 className="mb-3 text-2xl font-semibold text-text-primary md:text-3xl">
          The Working Set
        </h3>
        <p className="mb-12 max-w-xl text-sm text-text-secondary">
          I own process design, integration choices and delivery. Claude and
          Codex support implementation across the programming stack below.
        </p>
      </AnimatedSection>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <AnimatedSection key={group.category} delay={index * 0.05}>
            <SkillGroup group={group} />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
