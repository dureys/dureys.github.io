interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-text-primary">{value}</div>
      <div className="mt-1 text-xs text-text-muted">{label}</div>
    </div>
  );
}
