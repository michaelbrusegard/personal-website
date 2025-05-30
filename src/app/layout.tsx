import '@/styles/globals.css';
import { sfProDisplay, sfProText, sfMono } from '@/styles/fonts';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SimulationProvider } from '@/components/providers/SimulationProvider';
import { MotionProvider } from '@/components/providers/MotionProvider';

export const metadata = {
  title: 'Michael | Portfolio',
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
      <body className='relative h-full w-full bg-background font-text text-foreground antialiased'>
        <SimulationProvider>
          <ThemeProvider>
            <MotionProvider>
              <Header />
              {children}
              <Footer />
            </MotionProvider>
          </ThemeProvider>
        </SimulationProvider>
      </body>
    </html>
  );
}
