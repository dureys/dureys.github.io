import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
const strengths = [
 { title: 'Business process ownership', body: 'At Andercore I aligned sales, customer service, supply, logistics and finance while owning Salesforce across five markets. I connect an individual feature request to the process and data around it.' },
 { title: 'AI building with accountable review', body: 'I coordinate Claude and Codex across implementation tasks, connect the tools and check the resulting behaviour. I own requirements, workflow logic and acceptance throughout the build.' },
 { title: 'Commercial decisions from data', body: 'My work includes account prioritisation from purchase history and potential value, plus pricing support using inventory, logistics and margin inputs. The output needs to help someone make a decision.' },
 { title: 'Delivery through adoption', body: 'User shadowing, phased pilots, acceptance testing, documentation and training are part of my delivery work. A workflow succeeds when the people responsible can use and maintain it.' },
];
export function About() {
 return <Section id="about" alternate>
  <AnimatedSection>
   <p className="mono-label mb-3 text-accent">Business context. Practical implementation.</p>
   <h2 className="mb-6 max-w-2xl font-display text-3xl font-semibold text-text-primary md:text-4xl">I connect the business problem to the system that solves it.</h2>
   <div className="mb-10 grid gap-6 text-base leading-relaxed text-text-secondary md:grid-cols-2">
    <p>My background spans platform ownership at Andercore, a five department transformation at ubitricity and international delivery at Accenture. That experience gives me the process, stakeholder and data context to decide where AI will be useful.</p>
    <p>Since December 2025, I have combined family business support with independent AI building. I develop products and integrations using coding agents, while owning the scope, business rules and checks that determine whether the result is ready to use.</p>
   </div>
  </AnimatedSection>
  <div className="grid gap-5 sm:grid-cols-2">{strengths.map((item,i) => <AnimatedSection key={item.title} delay={i*0.05}><div className="h-full rounded-lg border border-border-subtle bg-surface p-6"><p className="mb-3 font-mono text-xs text-accent">0{i+1}</p><h3 className="mb-3 text-lg font-semibold text-text-primary">{item.title}</h3><p className="text-sm leading-relaxed text-text-secondary">{item.body}</p></div></AnimatedSection>)}</div>
 </Section>;
}
