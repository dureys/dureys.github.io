'use client';
import { useState } from 'react';
import evidence from '../../../public/evidence/task-service-checks.json';

export function WorkflowProof() {
 const [selected,setSelected]=useState(0);
 const current=evidence.examples[selected];
 return <div>
  <div className="mb-6 flex flex-wrap gap-3" role="group" aria-label="Choose a workflow scenario">{evidence.examples.map((example,i)=><button key={example.id} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)} className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${selected===i?'border-accent bg-accent text-background':'border-border-strong bg-surface text-text-secondary hover:border-accent'}`}>{i+1}. {example.title}</button>)}</div>
  <article aria-live="polite" aria-atomic="true" className="rounded-xl border border-border-strong bg-surface p-6 md:p-8">
   <p className="mono-label mb-4">{current.title}</p>
   <div className="grid gap-6 md:grid-cols-2"><div><h2 className="mb-2 text-sm font-semibold text-text-muted">Request or event</h2><p className="mb-6 text-lg leading-relaxed">{current.input}</p><h2 className="mb-2 text-sm font-semibold text-text-muted">Plan or integration step</h2><p className="rounded border border-border-subtle bg-background p-4 font-mono text-sm leading-relaxed text-text-secondary">{current.plan}</p></div><div><h2 className="mb-2 text-sm font-semibold text-text-muted">Observed check result</h2><p className="mb-4 text-xl font-semibold text-accent">{current.result}</p><p className="text-sm leading-relaxed text-text-secondary">{current.detail}</p></div></div>
   <div className="mt-7 border-t border-border-subtle pt-6"><h2 className="mb-2 text-sm font-semibold">The implementation decision</h2><p className="leading-relaxed text-text-secondary">{current.decision}</p></div>
  </article>
  <p className="mt-4 text-xs leading-relaxed text-text-muted">Synthetic examples with recorded validator and integration test results. This walkthrough makes no model calls and writes no tasks or calendar events.</p>
  <section className="mt-12"><h2 className="mb-4 text-2xl font-semibold">Implementation checks</h2><p className="mb-4 text-sm leading-relaxed text-text-secondary">{evidence.passed} checks passed on 11 October 2026. {evidence.scope}</p><ul className="grid gap-2 sm:grid-cols-2">{evidence.checks.map(check=><li key={check} className="rounded border border-border-subtle p-3 text-sm capitalize text-text-secondary"><span className="mr-2 text-accent">✓</span>{check}</li>)}</ul><a href="/evidence/task-service-checks.json" className="mt-5 inline-block text-sm text-accent underline underline-offset-4">Inspect the recorded results JSON →</a></section>
 </div>;
}
