'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { fadeIn } from '@/utils/motion';
import { GitHubLogo } from '@/components/assets/GitHubLogo';
import { LinkedInLogo } from '@/components/assets/LinkedInLogo';
import { CVLogo } from '@/components/assets/CVLogo';

function HeroSocial() {
  return (
    <nav aria-label='links'>
      <ul className='mt-5 flex flex-row flex-wrap gap-3'>
        <m.li
          className='flex-shrink-0'
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
            className='block rounded-[3px] outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus-visible:outline'
            aria-label='Visit my LinkedIn profile'
          >
            <LinkedInLogo className='h-9 w-9' aria-hidden='true' />
          </Link>
        </m.li>
        <m.li
          className='flex-shrink-0'
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
            className='block rounded-[3px] outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus-visible:outline'
            title='Visit my GitHub profile'
            aria-label='Visit my GitHub profile'
          >
            <GitHubLogo className='h-9 w-9' aria-hidden='true' />
          </Link>
        </m.li>
        <m.li
          className='flex-shrink-0'
          variants={fadeIn('left', '', 3.0, 0.5)}
          initial='hidden'
          animate='show'
          whileHover={{ translateY: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href='/cv.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='block rounded-[3px] outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus-visible:outline'
            title='Download my CV'
            aria-label='Download my CV'
          >
            <CVLogo className='h-9 w-9' aria-hidden='true' />
          </Link>
        </m.li>
        <m.li
          className='w-full sm:w-auto'
          variants={fadeIn('left', '', 3.5, 0.5)}
          initial='hidden'
          animate='show'
          whileHover={{ translateY: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href='#contact'
            className='flex h-9 w-fit items-center rounded-[3px] bg-primary px-4 font-semibold text-background outline-2 outline-offset-2 outline-primary/60 transition-[color,box-shadow] duration-200 hover:from-primary hover:to-accent hover:text-foreground hover:shadow-xl hover:shadow-primary hover:bg-gradient-30 focus-visible:outline'
            title='Navigate to the contact section'
            aria-label='Navigate to the contact section'
          >
            Let&apos;s Talk
          </Link>
        </m.li>
      </ul>
    </nav>
  );
}

export { HeroSocial };
