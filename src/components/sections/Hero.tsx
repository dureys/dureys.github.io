import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/ui/MetricCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ShaderBackground } from '@/components/ui/ShaderBackground';
import { roleFit } from '@/data/roleFit';
import { personalInfo, metrics } from '@/data/personal';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 md:pb-20 md:pt-28">
      {/* Animated WebGL aurora, full-bleed, fading into the page below */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ShaderBackground className="h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute inset-0 border-b border-border-subtle" />
      </div>

      <div className="mx-auto grid max-w-content grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-2">
        {/* Left: identity */}
        <AnimatedSection className="min-w-0">
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
            <div className="min-w-0">
              <p className="mono-label flex items-center gap-3">
                <span className="h-px w-6 shrink-0 bg-accent" />
                {personalInfo.title}
              </p>
              <p className="mt-1.5 font-mono text-[11px] tracking-wide text-text-muted">
                AI implementation · product ownership · Berlin
              </p>
            </div>
          </div>

          <h1 className="mb-6 font-display text-5xl font-extrabold leading-[0.95] text-text-primary md:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mb-3 max-w-xl text-lg font-medium leading-snug text-text-primary md:text-xl">
            I turn business processes into working AI systems.
          </p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-text-secondary">
            Seven years across business systems, product ownership and delivery.
            I combine process knowledge with practical AI building: discovering
            the problem, connecting the tools, testing the workflow and getting
            people to use it. Experience across Andercore, ubitricity and Accenture.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Button href="#selected-work" variant="primary">
              Explore selected work
            </Button>
            <Button href="mailto:durace.o@gmail.com?subject=AI%20role%20discussion" variant="secondary">
              Discuss an AI role
            </Button>
            <a href={personalInfo.cvUrl} className="inline-flex items-center px-2 py-3 text-sm text-text-secondary underline underline-offset-4">Download CV ↓</a>
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

        {/* Role fit stays visible without operating the optional console. */}
        <AnimatedSection delay={0.15} className="min-w-0">
          <div className="rounded-xl border border-border-strong bg-surface/90 p-6 md:p-8"><p className="mono-label mb-6">Where I contribute</p><div className="space-y-5">{roleFit.map((role,i)=><a key={role.title} href={role.href} className="group block border-t border-border-subtle pt-5"><p className="mb-2 flex gap-3 text-lg font-semibold group-hover:text-accent"><span className="font-mono text-sm text-accent">0{i+1}</span>{role.title}<span className="ml-auto text-accent">↗</span></p><p className="pl-8 text-sm leading-relaxed text-text-secondary">{role.description}</p></a>)}</div><p className="mt-7 border-t border-border-subtle pt-5 text-xs leading-relaxed text-text-muted">Berlin · English C1 · German B1<br/>Interested in roles with substantial AI ownership.</p></div>
        </AnimatedSection>
      </div>
    </section>
  );
}
