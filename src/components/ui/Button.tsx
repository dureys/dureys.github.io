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
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200',
        {
          'bg-accent text-white hover:bg-blue-600':
            variant === 'primary',
          'border border-zinc-700 text-text-secondary hover:border-zinc-500 hover:text-text-primary':
            variant === 'secondary',
        },
        {
          'px-6 py-3 text-sm': size === 'default',
          'px-4 py-2 text-sm': size === 'sm',
        },
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
