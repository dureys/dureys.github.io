interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="border-l border-border-subtle pl-3 text-left">
      <div className="font-display text-3xl font-extrabold text-accent md:text-4xl">
        {value}
      </div>
      <div className="mt-1.5 text-xs leading-snug tracking-wide text-text-secondary">
        {label}
      </div>
    </div>
  );
}
