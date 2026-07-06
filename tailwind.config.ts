import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: '#0a0e0f',
        surface: '#10171a',
        'surface-hover': '#17211f',
        'border-subtle': 'rgba(200,241,105,0.10)',
        'border-strong': 'rgba(200,241,105,0.28)',
        'text-primary': '#eef2ec',
        'text-secondary': '#9aa79c',
        'text-muted': '#5f6f64',
        accent: '#c8f169',
        'accent-dim': 'rgba(200,241,105,0.10)',
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
