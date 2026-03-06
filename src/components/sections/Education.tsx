import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { education, certifications, languages } from '@/data/education';

export function Education() {
  return (
    <Section id="education" alternate>
      <AnimatedSection>
        <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
          Education & Credentials
        </h2>
        <h3 className="mb-12 text-2xl font-semibold text-text-primary md:text-3xl">
          Academic Background
        </h3>
      </AnimatedSection>

      {/* Education Cards */}
      <div className="space-y-4">
        {education.map((edu, index) => (
          <AnimatedSection key={edu.institution} delay={0.1 + index * 0.08}>
            <div className="rounded-xl border border-border-subtle bg-background p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-base font-semibold text-text-primary">
                  {edu.degree}
                </h4>
                <span className="text-xs text-text-muted">
                  {edu.period}
                </span>
              </div>
              <div className="mt-1 text-sm text-text-secondary">
                {edu.institution}
              </div>
              <div className="mt-0.5 text-xs text-text-muted">
                {edu.location}
              </div>
              {edu.details && (
                <ul className="mt-4 space-y-1.5 border-t border-border-subtle pt-4">
                  {edu.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-text-secondary before:mr-2 before:text-accent before:content-['•']"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Certifications & Languages */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <AnimatedSection delay={0.3}>
          <div className="rounded-xl border border-border-subtle bg-background p-6">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Certifications
            </h4>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="mt-0.5 text-accent">&#10003;</span>
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <div className="rounded-xl border border-border-subtle bg-background p-6">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Languages
            </h4>
            <div className="space-y-2.5">
              {languages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-text-primary">
                    {lang.language}
                  </span>
                  <Badge variant="accent">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
