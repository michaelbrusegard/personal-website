import Nav from '../components/nav';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' dir='ltr' className='h-full w-full'>
      <body className='relative bg-background font-body text-text'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
