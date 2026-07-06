'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border-subtle bg-background/80 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-medium text-text-primary"
        >
          <span className="text-accent">[</span>OD<span className="text-accent">]</span>{' '}
          oguzhan_durace
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-text-muted transition-colors duration-200 hover:text-accent"
            >
              <span className="text-accent/50">
                {String(i + 1).padStart(2, '0')}
              </span>{' '}
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                'block h-px w-5 bg-text-secondary transition-all duration-200',
                mobileOpen && 'translate-y-[3.5px] rotate-45'
              )}
            />
            <span
              className={cn(
                'block h-px w-5 bg-text-secondary transition-all duration-200',
                mobileOpen && '-translate-y-[3.5px] -rotate-45'
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border-subtle bg-background/95 px-6 pb-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
