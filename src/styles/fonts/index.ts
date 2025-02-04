import localFont from 'next/font/local';

const sfProDisplay = localFont({
  variable: '--font-display',
  src: [
    {
      path: './display-regular.woff2',
      weight: '400',
    },
    {
      path: './display-semibold.woff2',
      weight: '600',
    },
    {
      path: './display-heavy.woff2',
      weight: '800',
    },
    {
      path: './display-black.woff2',
      weight: '900',
    },
  ],
});

const sfProText = localFont({
  variable: '--font-text',
  src: [
    {
      path: './text-regular.woff2',
      weight: '400',
    },
    {
      path: './text-medium.woff2',
      weight: '500',
    },
  ],
});

const sfMono = localFont({
  variable: '--font-mono',
  src: [
    {
      path: './mono-medium.woff2',
      weight: '500',
    },
    {
      path: './mono-bold.woff2',
      weight: '700',
    },
  ],
});

export { sfProText, sfMono, sfProDisplay };
