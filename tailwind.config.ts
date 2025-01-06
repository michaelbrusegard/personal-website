import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

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
        'timeline-border': `0 0 0 2px hsl(var(--accent))`,
        card: `0 0 5px 1px hsl(var(--foreground))`,
      },
      screens: {
        xs: '28rem',
        timeline: '1170px',
        'landscape-sm': {
          raw: '(max-width: 48rem) and (orientation: landscape)',
        },
        'landscape-md': {
          raw: '(max-width: 64rem) and (orientation: landscape)',
        },
      },
    },
    fontFamily: {
      'sf-pro-display': ['var(--font-sf-pro-display)', ...fontFamily.sans],
      'sf-pro-text': ['var(--font-sf-pro-text)', ...fontFamily.sans],
      'sf-mono': ['var(--font-sf-mono)', ...fontFamily.mono],
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
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
