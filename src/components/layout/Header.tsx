'use client';

import Link from 'next/link';
import { m, Variants } from 'motion/react';
import { fadeIn } from '../../utils/motion';
import { Logo } from '@/components/assets/Logo';
import { DarkModeButton } from '@/components/layout/DarkModeButton';
import { ThemeButton } from '@/components/layout/ThemeButton';

function Header() {
  return (
    <header className='fixed top-0 z-20 flex w-full items-center bg-secondary px-6 py-5 shadow-xl sm:px-11 md:px-16'>
      <div className='mx-auto flex w-full max-w-7xl select-none items-center justify-between'>
        <m.div
          variants={fadeIn('', '', 0, 1) as Variants}
          initial='hidden'
          animate='show'
        >
          <Link
            className='flex items-center gap-2'
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
        <ul className='hidden flex-row gap-10 sm:flex'>
          <m.li
            variants={fadeIn('down', '', 0.25, 1) as Variants}
            initial='hidden'
            animate='show'
            whileHover={{ translateY: '-2px' }}
            transition={{ duration: 0.2 }}
          >
            <Link
              className='font-sf-mono font-medium hover:text-primary focus:text-primary'
              href='#about'
            >
              About
            </Link>
          </m.li>
          <m.li
            variants={fadeIn('down', '', 0.5, 1) as Variants}
            initial='hidden'
            animate='show'
            whileHover={{ translateY: '-2px' }}
            transition={{ duration: 0.2 }}
          >
            <Link
              className='font-sf-mono font-medium hover:text-primary focus:text-primary'
              href='#work'
            >
              Work
            </Link>
          </m.li>
          <m.li
            variants={fadeIn('down', '', 0.75, 1) as Variants}
            initial='hidden'
            animate='show'
            whileHover={{ translateY: '-2px' }}
            transition={{ duration: 0.2 }}
          >
            <Link
              className='font-sf-mono font-medium hover:text-primary focus:text-primary'
              href='#contact'
            >
              Contact
            </Link>
          </m.li>
          <m.li
            variants={fadeIn('down', '', 1, 1)}
            initial='hidden'
            animate='show'
          >
            <DarkModeButton />
          </m.li>
          <m.li
            variants={fadeIn('down', '', 1.25, 1)}
            initial='hidden'
            animate='show'
          >
            <ThemeButton />
          </m.li>
        </ul>
        <m.div
          className='flex flex-1 items-center justify-end sm:hidden'
          variants={fadeIn('down', '', 0.25, 1) as Variants}
          initial='hidden'
          animate='show'
        >
          {/* <MenuButton onClick={handleClick} isOpen={isOpen} /> */}
        </m.div>
      </div>
      {/* <MobileMenu */}
      {/*   isOpen={isOpen} */}
      {/*   onClose={handleMenuItemClick} */}
      {/*   isDarkMode={isDarkMode} */}
      {/*   PaletteIcon={PaletteIcon} */}
      {/*   SunIcon={SunIcon} */}
      {/*   MoonIcon={MoonIcon} */}
      {/* /> */}
    </header>
  );
}

export { Header };
