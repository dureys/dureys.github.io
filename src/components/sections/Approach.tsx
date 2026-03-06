import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Discover & Scope',
    description:
      'Map the current process with the people who live it every day. Run a feasibility assessment, identify where the real bottlenecks are, define KPIs upfront, and align stakeholders on what "done" looks like before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Build & Configure',
    description:
      'Design and implement the AI solution within the existing tech stack. Integrate with the tools teams already use (Salesforce, JIRA, Slack, CRMs) so adoption is seamless, not a change management battle.',
  },
  {
    number: '03',
    title: 'Pilot & Validate',
    description:
      'Run a structured pilot with a defined scope, real data, and real users. Track performance against the success metrics agreed in discovery. Iterate based on user feedback before scaling.',
  },
  {
    number: '04',
    title: 'Scale & Hand Off',
    description:
      'Present pilot results to decision makers with clear ROI data. Roll out the scalable solution to the full organization with training, technical documentation, and a clean handover so the system runs independently after I leave.',
  },
];

export function Approach() {
  return (
    <Section id="approach">
      <AnimatedSection>
        <h2 className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
          Methodology
        </h2>
        <h3 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">
          How I Deliver AI Projects
        </h3>
        <p className="mb-12 max-w-xl text-sm text-text-secondary">
          Every engagement follows the same structured approach. This is
          what separates a POC that sits on a shelf from a system that
          gets adopted and delivers ROI.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <AnimatedSection key={step.number} delay={index * 0.08}>
            <div className="rounded-xl border border-border-subtle bg-surface p-6">
              <span className="text-2xl font-bold text-accent">
                {step.number}
              </span>
              <h4 className="mt-3 text-base font-semibold text-text-primary">
                {step.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
