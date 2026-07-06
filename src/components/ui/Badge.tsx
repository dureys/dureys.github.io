import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'private' | 'public';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] tracking-wide',
        {
          'border-border-subtle bg-surface text-text-secondary':
            variant === 'default',
          'border-border-strong bg-accent-dim text-accent': variant === 'accent',
          'border-amber-500/20 bg-amber-500/10 text-amber-400':
            variant === 'private',
          'border-accent/25 bg-accent-dim text-accent': variant === 'public',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
