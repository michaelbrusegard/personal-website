import { m } from 'motion/react';
import { fadeIn } from '@/utils/motion';
import { GitHubLogo } from '@/components/assets/GitHubLogo';
import { LinkedInLogo } from '@/components/assets/LinkedInLogo';
import Link from 'next/link';

function HeroSocial() {
  return (
    <ul className='mt-5 flex flex-row gap-3'>
      <m.li
        variants={fadeIn('left', '', 2.0, 0.5)}
        initial='hidden'
        animate='show'
        whileHover={{ translateY: '-2px' }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href='https://www.linkedin.com/in/michaelbrusegard/'
          target='_blank'
          rel='noreferrer'
          className='h-9 w-9 cursor-pointer hover:text-primary focus:text-primary'
        >
          <LinkedInLogo aria-hidden='true' />
        </Link>
      </m.li>
      <m.li
        variants={fadeIn('left', '', 2.5, 0.5)}
        initial='hidden'
        animate='show'
        whileHover={{ translateY: '-2px' }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href='https://github.com/michaelbrusegard/'
          target='_blank'
          rel='noreferrer'
          className='h-9 w-9 cursor-pointer hover:text-primary focus:text-primary'
        >
          <GitHubLogo aria-hidden='true' />
        </Link>
      </m.li>
      <m.li
        variants={fadeIn('left', '', 3.0, 0.5)}
        initial='hidden'
        animate='show'
        whileHover={{ translateY: '-2px' }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href='#contact'
          className='ml-auto h-9 w-fit cursor-pointer rounded-[3px] bg-primary px-4 py-[6px] font-semibold text-background transition-[color,box-shadow] duration-200 hover:from-primary hover:to-accent hover:text-foreground hover:shadow-xl hover:shadow-primary hover:bg-gradient-30 focus:from-primary focus:to-accent focus:text-foreground focus:shadow-xl focus:shadow-primary focus:bg-gradient-30 xs:ml-0'
        >
          Let&apos;s Talk
        </Link>
      </m.li>
    </ul>
  );
}

export { HeroSocial };
