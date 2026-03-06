import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { enterpriseProjects, personalProjects } from '@/data/projects';

export function Projects() {
  return (
    <>
      <Section id="projects" alternate>
        <AnimatedSection>
          <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            Enterprise Projects
          </h2>
          <h3 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">
            What I Build at Work
          </h3>
          <p className="mb-12 max-w-xl text-sm text-text-secondary">
            AI powered enterprise systems, multi agent architectures, and
            intelligent automation. These projects are from enterprise
            engagements under NDA. The descriptions below detail the
            architecture, tools, and measurable impact of each.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {enterpriseProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.05}>
              <Card project={project} badgeLabel="Enterprise" />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section id="open-source">
        <AnimatedSection>
          <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
            Personal Projects
          </h2>
          <h3 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">
            What I Build on My Own Time
          </h3>
          <p className="mb-12 max-w-xl text-sm text-text-secondary">
            Side projects, experiments, and tools I build to explore new
            technologies and solve problems that interest me. A mix of AI
            applications, data platforms, and web tools.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.05}>
              <Card
                project={project}
                badgeLabel={project.isPrivate ? 'Private' : 'Open Source'}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </>
  );
}
