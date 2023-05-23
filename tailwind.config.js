/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import colors from './src/utils/colors';

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        text: colors.textColor,
        background: colors.backgroundColor,
        primary: colors.primaryColor,
        secondary: colors.secondaryColor,
        accent: colors.accentColor,
      },
      boxShadow: {
        'timeline-border': `0 0 0 4px ${colors.textColor}`,
      },
      screens: {
        xs: '448px',
        'landscape-mobile': { raw: '(max-width: 768px) and (orientation: landscape)' },
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
        }
      );
    }),
  ],
};
