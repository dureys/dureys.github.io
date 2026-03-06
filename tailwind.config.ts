import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: '#09090b',
        surface: '#18181b',
        'surface-hover': '#27272a',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'text-primary': '#fafafa',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
        accent: '#3b82f6',
        'accent-dim': 'rgba(59,130,246,0.1)',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};

export default config;
