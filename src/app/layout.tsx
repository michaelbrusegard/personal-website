import Nav from '../components/nav';

export const metadata = {
  title: 'Michael | Portifolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/icons/favicon/favicon.svg' />
        <link rel='icon' type='image/png' href='/icons/favicon/favicon.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon/favicon-16x16.png' />
        <link rel='mask-icon' href='/icons/favicon/safari-pinned-tab.svg' color='#000000' />
        <meta name='theme-color' content='#FFFFFF' />
      </head>
      <body className='relative bg-background font-body text-text'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
