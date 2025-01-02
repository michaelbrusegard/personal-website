'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { fadeIn } from '@/utils/motion';
import { DarkModeButton } from '@/components/layout/DarkModeButton';
import { ThemeButton } from '@/components/layout/ThemeButton';

type NavProps = {
  isMobile?: boolean;
  animate?: 'show' | 'hidden';
};

function Nav({ isMobile = false, animate = 'show' }: NavProps) {
  const duration = isMobile ? 0.2 : 1;
  return (
    <nav className={isMobile ? 'mb-6' : 'hidden sm:flex'}>
      <ul className={isMobile ? 'flex flex-col gap-3' : 'flex gap-10'}>
        <m.li
          variants={fadeIn('down', '', isMobile ? 0.8 : 0.25, duration)}
          initial='hidden'
          animate={animate}
          whileHover={{ translateY: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <Link
            className='font-sf-mono font-medium outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus:outline'
            href='#about'
          >
            About
          </Link>
        </m.li>
        <m.li
          variants={fadeIn('down', '', isMobile ? 0.8 : 0.5, duration)}
          initial='hidden'
          animate={animate}
          whileHover={{ translateY: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <Link
            className='font-sf-mono font-medium outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus:outline'
            href='#work'
          >
            Work
          </Link>
        </m.li>
        <m.li
          variants={fadeIn('down', '', isMobile ? 0.8 : 0.75, duration)}
          initial='hidden'
          animate={animate}
          whileHover={{ translateY: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <Link
            className='font-sf-mono font-medium outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus:outline'
            href='#contact'
          >
            Contact
          </Link>
        </m.li>
        <m.li
          className={`flex items-center ${isMobile ? 'gap-5' : 'gap-2'}`}
          variants={fadeIn('down', '', isMobile ? 0.8 : 1, duration)}
          initial='hidden'
          animate={animate}
        >
          <DarkModeButton />
          <ThemeButton />
        </m.li>
      </ul>
    </nav>
  );
}

export { Nav };
