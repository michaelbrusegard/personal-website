import Nav from '../components/nav';

export const metadata = {
  title: 'Michael | Portifolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative bg-background font-body text-text'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
