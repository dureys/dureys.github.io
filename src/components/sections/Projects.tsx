import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { CommandConsole } from '@/components/ui/CommandConsole';
import { enterpriseProjects, personalProjects, referenceDesigns } from '@/data/projects';

export function Projects() {
 const groups=[{id:'enterprise-work',title:'Enterprise delivery',description:'AI workflows and platform transformation at Andercore and ubitricity.',items:enterpriseProjects},{id:'open-source',title:'Independent builds and prototypes',description:'Working integrations, knowledge tools, a publishing product and further experiments.',items:personalProjects},{id:'designs',title:'Reference designs and next implementations',description:'Proposed workflows with scope, review boundaries and pilot criteria.',items:referenceDesigns}];
 return <Section id="projects" alternate>
  <p className="mono-label mb-3">More of the work</p><h2 className="mb-4 text-3xl font-semibold">Explore by the problem you need to solve.</h2><p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-secondary">The selected cases above are the starting point. This catalogue covers sales, service, finance, knowledge and data workflows, with a status for each implementation.</p>
  <div className="space-y-4">{groups.map(group=><details id={group.id} key={group.id} className="rounded-xl border border-border-strong bg-background p-6"><summary className="cursor-pointer text-lg font-semibold">{group.title}<span className="ml-3 font-mono text-xs text-accent">{group.items.length} cases</span></summary><p className="my-5 text-sm text-text-secondary">{group.description}</p><div className="grid gap-6 md:grid-cols-2">{group.items.map(p=><Card key={p.id} project={p}/>)}</div></details>)}</div>
  <details className="mt-8 rounded-xl border border-border-subtle p-6"><summary className="cursor-pointer text-sm text-text-secondary">Explore the portfolio through the command console</summary><div className="mt-5 max-w-2xl"><CommandConsole/></div></details>
 </Section>;
}
