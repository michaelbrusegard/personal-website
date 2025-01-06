import localFont from 'next/font/local';

const sfProDisplay = localFont({
  variable: '--font-sf-pro-display',
  src: [
    {
      path: './SF-Pro-Display-Regular.woff2',
      weight: '400',
    },
    {
      path: './SF-Pro-Display-Semibold.woff2',
      weight: '600',
    },
    {
      path: './SF-Pro-Display-Heavy.woff2',
      weight: '800',
    },
    {
      path: './SF-Pro-Display-Black.woff2',
      weight: '900',
    },
  ],
});

const sfProText = localFont({
  variable: '--font-sf-pro-text',
  src: [
    {
      path: './SF-Pro-Text-Regular.woff2',
      weight: '400',
    },
    {
      path: './SF-Pro-Text-Medium.woff2',
      weight: '500',
    },
  ],
});

const sfMono = localFont({
  variable: '--font-sf-mono',
  src: [
    {
      path: './SF-Mono-Medium.woff2',
      weight: '500',
    },
    {
      path: './SF-Mono-Bold.woff2',
      weight: '700',
    },
  ],
});

export { sfProText, sfMono, sfProDisplay };
