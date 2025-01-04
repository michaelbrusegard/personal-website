import '@/styles/globals.css';
import { sfProDisplay, sfProText, sfMono } from '@/styles/fonts';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { SimulationProvider } from '@/components/providers/SimulationProvider';
import { MotionProvider } from '@/components/providers/MotionProvider';

export const metadata = {
  title: 'Michael | Portifolio',
  description:
    'My first website built with React. Showcasing some of my experience and projects.',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    { rel: 'manifest', url: '/favicon/site.webmanifest' },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={`h-full w-full scroll-smooth ${sfProDisplay.variable} ${sfProText.variable} ${sfMono.variable}`}
      suppressHydrationWarning
    >
      <body className='relative h-full w-full bg-background font-sf-pro-text text-foreground antialiased'>
        <ThemeProvider>
          <MotionProvider>
            <SimulationProvider>
              <Header />
              {children}
            </SimulationProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
