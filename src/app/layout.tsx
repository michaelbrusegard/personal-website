import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { SimulationProvider } from '@/components/providers/SimulationProvider';

export const metadata = {
  title: 'Michael | Portifolio',
  description: 'My first website built with React. Showcasing some of my experience and projects.',
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
    <html lang='en' dir='ltr' className='h-full w-full'>
      <body className='relative h-full w-full bg-background font-body text-text'>
        <SimulationProvider>
          <Nav />
          {children}
        </SimulationProvider>
      </body>
    </html>
  );
}
