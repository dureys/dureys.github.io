import React from 'react';

/**
 * Illustrative, on-brand mock artifacts for each system. These are not
 * screenshots of production UIs (several are under NDA or run on private
 * infra); they are honest visualisations of what each system does, labelled
 * "illustrative" so nobody mistakes them for the real console.
 */

function Chip({
  children,
  tone = 'default',
}: {
  children: React.ReactNode;
  tone?: 'default' | 'accent' | 'warn';
}) {
  const tones = {
    default: 'border-border-subtle text-text-secondary',
    accent: 'border-border-strong text-accent',
    warn: 'border-amber-400/30 text-amber-300/90',
  };
  return (
    <span
      className={`whitespace-nowrap rounded-sm border px-1.5 py-0.5 font-mono text-[10px] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Frame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 overflow-hidden rounded-md border border-border-subtle bg-background">
      <div className="flex items-center justify-between border-b border-border-subtle bg-black/30 px-3 py-1.5">
        <span className="font-mono text-[10px] tracking-wide text-accent">
          {label}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
          illustrative
        </span>
      </div>
      <div className="space-y-2 p-3">{children}</div>
    </div>
  );
}

function Band({
  children,
  tone = 'default',
}: {
  children: React.ReactNode;
  tone?: 'default' | 'engine';
}) {
  return (
    <div
      className={`rounded-sm border px-2.5 py-1.5 text-center font-mono text-[10px] leading-tight ${
        tone === 'engine'
          ? 'border-border-strong bg-accent-dim text-accent'
          : 'border-border-subtle bg-surface text-text-secondary'
      }`}
    >
      {children}
    </div>
  );
}

function Down({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-0.5">
      <span className="font-mono text-[11px] text-accent">↓</span>
      {label && (
        <span className="font-mono text-[9px] text-text-muted">{label}</span>
      )}
    </div>
  );
}

function Triage() {
  return (
    <Frame label="classify · verify · route">
      <div className="rounded-sm border border-border-subtle bg-surface p-2 font-mono text-[11px] leading-snug text-text-secondary">
        &ldquo;Charged twice for one order and the refund never came. Need this
        sorted today.&rdquo;
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <Chip tone="accent">Billing</Chip>
        <Chip tone="warn">Priority: High</Chip>
        <span className="font-mono text-[10px] text-text-muted">
          confidence 0.94
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-text-muted">
        <span className="text-accent">verifier ✓</span>
        <span>routed to</span>
        <Chip>Payments queue</Chip>
      </div>
    </Frame>
  );
}

function Lead() {
  return (
    <Frame label="enrich · score · route">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-text-primary">
            Northwind Logistics
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <Chip>Freight</Chip>
            <Chip>120 staff</Chip>
            <Chip>Series B</Chip>
            <Chip tone="accent">hiring ops</Chip>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-2xl font-bold text-accent">82</div>
          <div className="font-mono text-[9px] text-text-muted">fit score</div>
        </div>
      </div>
      <div className="font-mono text-[10px] text-text-muted">
        → routed to Sara · closes freight, low current load
      </div>
    </Frame>
  );
}

function SpendEngine() {
  return (
    <Frame label="proactive spend engine">
      <Band>events: budget breach · duplicate vendor · policy breach</Band>
      <Down label="supervisor routes to the right agent" />
      <div className="grid grid-cols-4 gap-1.5">
        <Band>finance</Band>
        <Band>accounting</Band>
        <Band>approval</Band>
        <Band>policy</Band>
      </div>
      <Down label="all query one source of truth" />
      <Band tone="engine">
        trusted engine · governed semantic layer + verifier
      </Band>
      <Down label="two exits" />
      <div className="grid grid-cols-2 gap-1.5">
        <Band>in-product: approval queue · Slack</Band>
        <Band>MCP server → your own Claude</Band>
      </div>
    </Frame>
  );
}

function Knowledge() {
  return (
    <Frame label="grounded answer or honest abstain">
      <div className="font-mono text-[11px] text-text-secondary">
        Q: refund window on annual plans?
      </div>
      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-text-primary">
        30 days from renewal.
        <Chip tone="accent">billing-policy.md ¶4</Chip>
      </div>
      <div className="mt-1 border-t border-border-subtle pt-2 font-mono text-[11px] text-text-secondary">
        Q: SLA for the on-prem tier?
      </div>
      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-text-muted">
        I cannot verify that. Nothing in the retrieved docs covers it.
        <Chip>abstained</Chip>
      </div>
    </Frame>
  );
}

function AP() {
  return (
    <Frame label="two and three way match">
      <div className="flex items-center justify-between font-mono text-[11px]">
        <span className="text-text-primary">INV-4471 · &euro;12,480</span>
        <Chip tone="accent">conf 0.97</Chip>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <Chip>PO ✓</Chip>
        <Chip>GRN ✓</Chip>
        <Chip tone="accent">within tolerance → straight through</Chip>
      </div>
      <div className="flex items-center justify-between border-t border-border-subtle pt-2 font-mono text-[11px]">
        <span className="text-text-primary">INV-4472 · &euro;8,900</span>
        <Chip tone="warn">exception</Chip>
      </div>
      <div className="font-mono text-[10px] leading-snug text-text-muted">
        qty 40 vs GRN 32 → likely partial delivery. Recommend: pay 32, hold 8.
      </div>
    </Frame>
  );
}

function Draft() {
  const rows = [
    ['1', 'Palmer', 'MID', 'elite xGI, gone before your R7 pick — take now'],
    ['2', 'Watkins', 'FWD', 'forward scarcity is high, thin after him'],
    ['3', 'Mbeumo', 'MID', 'value if you wait, likely survives one round'],
  ];
  return (
    <Frame label="pick clock 00:27">
      <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-text-muted">
        <Chip tone="warn">needs MID + FWD</Chip>
        <Chip>2 picks to next turn</Chip>
      </div>
      <div className="space-y-1">
        {rows.map((r) => (
          <div key={r[0]} className="flex items-start gap-2 text-[11px]">
            <span className="font-mono text-accent">{r[0]}</span>
            <span className="font-semibold text-text-primary">{r[1]}</span>
            <span className="font-mono text-[9px] text-text-muted">{r[2]}</span>
            <span className="flex-1 text-[10px] leading-snug text-text-secondary">
              {r[3]}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function AgentOS() {
  return (
    <Frame label="agent operating system">
      <Band>capture (phone) → inbox</Band>
      <Down />
      <Band tone="engine">shared vault · single source of truth</Band>
      <Down label="both read and write the same state" />
      <div className="grid grid-cols-2 gap-1.5">
        <Band>Claude · builds and reasons</Band>
        <Band>Hermes · runs 24/7</Band>
      </div>
      <Down label="nothing ships unreviewed" />
      <Band>human review gate</Band>
      <div className="flex items-center justify-center gap-2 pt-0.5 font-mono text-[9px] text-text-muted">
        <span className="text-accent">↻</span> writes back — knowledge
        compounds
      </div>
    </Frame>
  );
}

function Capture() {
  return (
    <Frame label="field capture → filed note">
      <div className="rounded-sm border border-border-subtle bg-surface p-2 font-mono text-[11px] text-text-secondary">
        telegram: &ldquo;vendor X quoted 6 week lead time, too slow for Q3&rdquo;
      </div>
      <Down label="n8n webhook · LLM classify" />
      <div className="rounded-sm border border-border-strong bg-accent-dim p-2 font-mono text-[10px] leading-snug text-accent">
        /procurement/vendors/x.md
        <br />
        <span className="text-text-secondary">
          type: note · area: procurement · tag: lead-time-risk
        </span>
      </div>
    </Frame>
  );
}

const REGISTRY: Record<string, () => React.JSX.Element> = {
  triage: Triage,
  lead: Lead,
  spend: SpendEngine,
  knowledge: Knowledge,
  ap: AP,
  draft: Draft,
  agentos: AgentOS,
  capture: Capture,
};

export function SystemArtifact({ id }: { id?: string }) {
  if (!id) return null;
  const Cmp = REGISTRY[id];
  if (!Cmp) return null;
  return <Cmp />;
}
