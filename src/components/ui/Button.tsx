import { cn } from '@/lib/utils';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'sm';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-md font-mono text-sm font-medium tracking-wide transition-all duration-200',
        {
          'bg-accent text-background hover:bg-accent/90 hover:shadow-[0_0_24px_-4px_rgba(200,241,105,0.6)]':
            variant === 'primary',
          'border border-border-strong text-text-secondary hover:border-accent hover:text-accent':
            variant === 'secondary',
        },
        {
          'px-6 py-3': size === 'default',
          'px-4 py-2': size === 'sm',
        },
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
