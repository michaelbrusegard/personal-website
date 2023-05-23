import Head from 'next/head';
import Nav from '../components/nav';
import logo from '../../public/icons/logo.svg';

export const metadata = {
  title: 'Michael | Portifolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href={logo} media='(prefers-color-scheme: light)' />
        <link rel='icon' href={logo} media='(prefers-color-scheme: dark)' />
        <title>{metadata.title}</title>
      </Head>
      <body className='relative bg-background font-body text-text'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
