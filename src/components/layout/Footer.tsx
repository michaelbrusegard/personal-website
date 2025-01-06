'use client';

import Link from 'next/link';
import { techUsed } from '@/constants';
import { GitHubLinkIcon } from '@/components/assets/GitHubLinkIcon';

function Footer() {
  return (
    <footer className='relative z-20 flex flex-col items-center justify-center bg-secondary px-4 py-6 text-center'>
      <div className='flex flex-col items-center xs:flex-row'>
        Made with
        <div className='ml-3 mt-2 flex gap-2 text-[17px] xs:mt-0'>
          {techUsed.map(({ name, Icon, link }) => (
            <Link
              className='rounded-md outline-2 outline-offset-2 outline-primary/60 transition-transform hover:scale-110 focus-visible:outline'
              key={name}
              href={link}
              target='_blank'
              rel='noreferrer'
              aria-label={`Open link to ${name}`}
              title={`Open link to ${name}`}
            >
              <Icon className='h-6 w-6' aria-hidden='true' />
            </Link>
          ))}
        </div>
        <span className='ml-3 mt-2 xs:mt-0'>&amp; lots of ❤️ !</span>
      </div>
      <p className='mt-5 text-[14px] text-foreground/75'>
        &copy; {new Date().getFullYear()} Michael Brusegard. All rights
        reserved. <br />
        Licensed under the Apache-2.0 License.
      </p>
      <Link
        className='mt-4 flex cursor-pointer items-center gap-1 rounded-md text-[18px] font-medium outline-2 outline-offset-2 outline-primary/60 transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary focus-visible:outline'
        href='https://github.com/michaelbrusegard/personal-website'
        target='_blank'
        rel='noreferrer'
        aria-label='Open the source code for this website'
        title='Open the source code for this website'
      >
        Code
        <GitHubLinkIcon className='h-4 w-4' aria-hidden='true' />
      </Link>
    </footer>
  );
}

export { Footer };
