import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/ui/MetricCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { personalInfo, metrics } from '@/data/personal';

const basePath = process.env.NODE_ENV === 'production' ? '/ai-portfolio-hub' : '';

export function Hero() {
  return (
    <Section className="pt-32 md:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_280px]">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium tracking-wide text-accent">
            AI AUTOMATION ARCHITECT
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Button href={personalInfo.cvUrl} variant="primary">
              Download CV
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-8">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="hidden md:block">
          <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-2 border-border-subtle">
            <img
              src={`${basePath}/images/headshot.jpg`}
              alt="Oguzhan Durace"
              width={256}
              height={256}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
