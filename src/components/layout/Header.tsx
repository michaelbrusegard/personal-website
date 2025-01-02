'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { fadeIn } from '@/utils/motion';
import { Logo } from '@/components/assets/Logo';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Nav } from '@/components/layout/Nav';

function Header() {
  return (
    <header className='fixed top-0 z-20 flex w-full items-center bg-secondary px-6 py-5 shadow-xl sm:px-11 md:px-16'>
      <div className='mx-auto flex w-full max-w-7xl select-none items-center justify-between'>
        <m.div variants={fadeIn('', '', 0, 1)} initial='hidden' animate='show'>
          <Link
            className='flex items-center gap-2 outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus:outline'
            href='/'
            title='Go to top of page'
            aria-label='Go to top of page'
          >
            <Logo className='h-9 w-9' aria-hidden='true' />
            <p className='flex font-sf-mono text-lg font-bold'>
              Brusegard.&nbsp;
              <span className='hidden md:block'>Michael</span>
            </p>
          </Link>
        </m.div>
        <Nav />
        <m.div
          className='flex flex-1 items-center justify-end sm:hidden'
          variants={fadeIn('down', '', 0.25, 1)}
          initial='hidden'
          animate='show'
        >
          <MobileMenu />
        </m.div>
      </div>
    </header>
  );
}

export { Header };
