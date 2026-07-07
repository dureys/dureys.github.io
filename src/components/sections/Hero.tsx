import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/ui/MetricCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ShaderBackground } from '@/components/ui/ShaderBackground';
import { CommandConsole } from '@/components/ui/CommandConsole';
import { personalInfo, metrics } from '@/data/personal';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Animated WebGL aurora, full-bleed, fading into the page below */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ShaderBackground className="h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute inset-0 border-b border-border-subtle" />
      </div>

      <div className="mx-auto grid max-w-content items-start gap-x-12 gap-y-10 md:grid-cols-[1fr_minmax(420px,560px)]">
        {/* Left: identity */}
        <AnimatedSection>
          <div className="mb-6 flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src="/images/headshot.jpg"
                alt="Oguzhan Durace"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover object-top grayscale ring-1 ring-border-strong transition-all duration-500 hover:grayscale-0"
              />
              <span className="absolute bottom-0.5 right-0.5 h-3 w-3 animate-pulse rounded-full border-2 border-background bg-accent" />
            </div>
            <div>
              <p className="mono-label flex items-center gap-3">
                <span className="h-px w-6 bg-accent" />
                AI Automation Architect
              </p>
              <p className="mt-1.5 font-mono text-[11px] tracking-wide text-text-muted">
                available for senior AI roles · Berlin
              </p>
            </div>
          </div>

          <h1 className="mb-6 font-display text-5xl font-extrabold leading-[0.95] text-text-primary md:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>

          <p className="mb-3 max-w-xl text-lg font-medium leading-snug text-text-primary md:text-xl">
            Most people use AI as one extra person in a chat window. I run it
            as a team.
          </p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-text-secondary">
            Parallel agent sessions building separate parts at once, with me
            as the reviewer on everything that ships. What took me three days
            before AI ships in one. Six years mapping enterprise process at
            Accenture, Shell and Salesforce taught me the part most AI
            projects skip: which problems are worth automating, and which
            quietly break when you try.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Button href={personalInfo.cvUrl} variant="primary">
              Download CV
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border-subtle pt-8 sm:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Right: the system you can operate */}
        <AnimatedSection delay={0.15}>
          <CommandConsole />
          <p className="mt-3 text-center font-mono text-[11px] tracking-wide text-text-muted">
            <span className="text-accent">$</span> this portfolio is a system. talk to it.
          </p>
          <div className="mt-4 flex justify-center">
            <Button href="/systems/" variant="secondary" size="sm">
              $ open system_registry ▸
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
