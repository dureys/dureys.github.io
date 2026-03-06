import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
}

export function Section({ id, children, className, alternate }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'px-6 py-20 md:py-28',
        alternate ? 'bg-surface' : 'bg-background',
        className
      )}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
