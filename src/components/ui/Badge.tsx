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
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-zinc-800 text-zinc-300': variant === 'default',
          'bg-accent-dim text-accent': variant === 'accent',
          'bg-amber-500/10 text-amber-400': variant === 'private',
          'bg-emerald-500/10 text-emerald-400': variant === 'public',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
