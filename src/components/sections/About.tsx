import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const valueProps = [
  {
    tag: 'no_translation_layer',
    title: 'I speak both languages from day one',
    body: 'I have been the stakeholder and the builder. Discovery that takes an outside consultant a quarter takes me weeks, because six years at Accenture, Shell, and startups taught me where enterprise processes hide their bodies.',
  },
  {
    tag: 'ai_inside_the_workflow',
    title: 'AI lives where the work already happens',
    body: 'A model in a separate tab gets demoed once and forgotten. I put AI inside the CRM, the issue tracker, and the chat tools people already have open, so using it is the default, not a favor. That is why my systems survive their pilots.',
  },
  {
    tag: 'measured_or_it_didnt_happen',
    title: 'Impact you can put on a slide',
    body: 'KPIs are defined before any code exists, and pilots are tracked against them. That is why my numbers are real: 40% more conversion, 60% less triage time. If a use case cannot be measured, I will tell you not to build it.',
  },
  {
    tag: 'production_not_poc',
    title: 'Systems that outlive my involvement',
    body: 'Documentation, training, and a clean handover are part of the build, not an afterthought. The systems I shipped in my current role are still running in production without me babysitting them.',
  },
];

export function About() {
  return (
    <Section id="about" alternate>
      <AnimatedSection>
        <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
          About
        </h2>
        <h3 className="mb-8 text-2xl font-semibold text-text-primary md:text-3xl">
          I Start From the Process, Not the Model
        </h3>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        <AnimatedSection delay={0.1}>
          <p className="text-sm leading-relaxed text-text-secondary">
            Most AI consultants start from the technology and work backwards
            to the business. I spent six years on the other side: leading
            transformations at Accenture, Shell, and high growth startups,
            mapping workflows, and sitting in the meetings where broken
            processes surface. I know what manual work costs an organization
            because I have watched it happen, and that operational fluency
            is the difference between a working prototype and a system
            people actually adopt.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-sm leading-relaxed text-text-secondary">
            That is why my systems get adopted instead of demoed. Lead
            scoring inside Salesforce that reps actually trust. Support AI
            that lets junior agents close escalation tier tickets on their
            own. Every engagement starts with the same two questions: what
            does this process look like today, and where does AI make it
            meaningfully better? If the honest answer is nowhere, I say so.
            That is what makes the yes worth something.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.15}>
        <p className="mb-6 mt-14 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          What that buys you
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {valueProps.map((prop, index) => (
          <AnimatedSection key={prop.tag} delay={0.1 + index * 0.05}>
            <div className="group h-full rounded-lg border border-border-subtle bg-surface p-6 transition-colors duration-200 hover:border-border-strong">
              <p className="mb-3 font-mono text-[11px] tracking-wide text-text-muted transition-colors group-hover:text-accent">
                [ {prop.tag} ]
              </p>
              <h4 className="mb-2 text-base font-semibold text-text-primary">
                {prop.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                {prop.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

    </Section>
  );
}
