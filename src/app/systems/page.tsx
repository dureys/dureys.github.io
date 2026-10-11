import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { enterpriseProjects, personalProjects, referenceDesigns } from '@/data/projects';
export const metadata: Metadata = {
 title: 'AI Workflow Case Studies | Oguzhan Durace',
 description: 'Business problems, connected tools and implementation decisions across enterprise AI workflows, independent products and reference designs.',
 alternates: { canonical: '/systems/' },
 openGraph: { title: 'AI Workflow Case Studies | Oguzhan Durace', description: 'Explore AI implementation through business context, tools, operating controls and outcomes.', url: 'https://dureys.github.io/systems/' },
};
const registry = [...enterpriseProjects, ...personalProjects, ...referenceDesigns].filter(p => p.systemNo !== undefined).sort((a,b) => (a.systemNo ?? 0) - (b.systemNo ?? 0));
const counts = registry.reduce<Record<string, number>>((acc,p) => { const status=p.deepDive!.status; acc[status]=(acc[status] ?? 0)+1; return acc; }, {});
export default function SystemsPage() {
 return <>
 <header className="border-b border-border-subtle px-6 py-5"><nav aria-label="Case study navigation" className="mx-auto flex max-w-content items-center justify-between gap-5 text-sm"><a href="/" className="font-mono text-text-secondary hover:text-accent">← Portfolio</a><a href="/#contact" className="text-text-secondary hover:text-accent">Discuss a role →</a></nav></header>
 <main className="px-6 py-14 md:py-20"><div className="mx-auto max-w-[900px]">
 <p className="mono-label mb-4 text-accent">AI implementation case studies</p>
 <h1 className="mb-6 max-w-3xl font-display text-4xl font-bold leading-tight text-text-primary md:text-6xl">AI workflows, from business problem to implementation.</h1>
 <p className="mb-6 max-w-2xl text-lg leading-relaxed text-text-secondary">Explore the process, the tools and the decisions behind my work. Each case states what I owned, what exists today and what the outcome establishes.</p>
 <p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-muted">I own requirements, workflow logic, integrations and acceptance. Claude and Codex support implementation. Enterprise outcomes belong to the roles where they were delivered; independent prototypes and proposed designs carry their own status.</p>
 <div className="mb-8 flex flex-wrap gap-3 border-y border-border-subtle py-4">{Object.entries(counts).map(([status,count]) => <span key={status} className="font-mono text-xs text-text-secondary"><span className="text-accent">{count}</span> {status}</span>)}</div>
 <nav aria-label="Choose a case study" className="mb-12 grid gap-2 sm:grid-cols-2">{registry.map(p => <a key={p.id} href={'#'+p.id} className="rounded border border-border-subtle px-3 py-3 text-sm text-text-secondary hover:border-accent hover:text-accent"><span className="mr-2 font-mono text-accent">{String(p.systemNo).padStart(2,'0')}</span>{p.title}</a>)}</nav>
 <div className="space-y-8">{registry.map(p => <section id={p.id} key={p.id} className="scroll-mt-8"><p className="mb-2 font-mono text-sm text-accent">{String(p.systemNo).padStart(2,'0')}</p><Card project={p} /></section>)}</div>
 <div className="mt-14 rounded-lg border border-border-strong bg-surface p-8 text-center"><h2 className="mb-3 font-display text-2xl font-semibold text-text-primary">Have a workflow that needs an owner?</h2><p className="mb-6 text-sm leading-relaxed text-text-secondary">I am interested in AI implementation and product roles where I can connect business requirements to working systems and adoption.</p><div className="flex flex-wrap justify-center gap-3"><Button href="/#contact" variant="primary">Get in touch</Button><Button href="/Oguzhan_Durace_CV.pdf" variant="secondary">Download CV</Button></div></div>
 </div></main></>;
}
