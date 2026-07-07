import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Discover & Scope',
    description:
      'Map the process with the people who live it. Define KPIs and what "done" means before any code exists.',
    receipt:
      'In my current role: discovery workshops with sales leadership before the lead engine was a single line of code.',
  },
  {
    number: '02',
    title: 'Build & Configure',
    description:
      'Build inside the tools teams already use, so adoption is default behavior instead of a change management battle.',
    receipt:
      'The lead engine lives inside Salesforce, not in a separate tab nobody opens.',
  },
  {
    number: '03',
    title: 'Pilot & Validate',
    description:
      'Structured pilot with real data and real users, tracked against the KPIs agreed in discovery. Iterate before scaling.',
    receipt:
      'Case management piloted on a ticket subset, reshaped by agent feedback, then scaled company wide.',
  },
  {
    number: '04',
    title: 'Scale & Hand Off',
    description:
      'ROI to decision makers, training and documentation for the team, and a handover clean enough that the system runs without me.',
    receipt:
      'Both production systems from my current role have been running since rollout.',
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
          Anyone can demo a model. Getting a sales team, a support desk,
          and their managers to adopt one is the hard part. This is the
          playbook I run, each step with the receipt to prove it.
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
              <p className="mt-3 border-t border-border-subtle pt-3 font-mono text-xs leading-relaxed text-accent/80">
                {step.receipt}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
