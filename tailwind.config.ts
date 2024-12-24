import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        foreground: 'hsl(var(--foreground))',
        background: 'hsl(var(--background))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
      },
      boxShadow: {
        'timeline-border': `0 0 0 4px hsl(var(--accent))`,
        card: `0 0 5px 1px hsl(var(--foreground))`,
      },
      screens: {
        xs: '448px',
        'landscape-sm': { raw: '(max-width: 768px) and (orientation: landscape)' },
        'landscape-md': { raw: '(max-width: 1024px) and (orientation: landscape)' },
      },
      height: {
        screen: '100dvh',
        'screen-small': '100svh',
        'screen-large': '100lvh',
      },
    },
    fontFamily: {
      body: ['SF-Pro', 'sans-serif'],
      mono: ['SF-Mono', 'monospace'],
    },
    backgroundSize: {
      big: '200%',
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme('bgGradientDeg', {}), {
            10: '10deg',
            15: '15deg',
            20: '20deg',
            25: '25deg',
            30: '30deg',
            45: '45deg',
            60: '60deg',
            90: '90deg',
            120: '120deg',
            135: '135deg',
          }),
        },
      );
    }),
  ],
} satisfies Config;

export default config;
