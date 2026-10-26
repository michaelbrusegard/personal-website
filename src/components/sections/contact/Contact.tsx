'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { slideIn } from '@/utils/motion';
import { DogCanvas } from '@/components/sections/contact/DogCanvas';
import { StarsCanvas } from '@/components/sections/contact/StarsCanvas';
import { LinkedInLogo } from '@/components/assets/LinkedInLogo';

const linkClassName =
  'flex h-12 w-fit items-center gap-3 rounded-xl bg-background px-6 font-medium outline-2 outline-offset-2 outline-primary/60 transition duration-200 hover:-translate-y-1 hover:text-primary focus-visible:outline';

function ContactSection() {
  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <m.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] rounded-2xl bg-secondary p-8'
      >
        <p className='font-display text-[14px] uppercase tracking-wider text-foreground/75 sm:text-[18px]'>
          Get in touch
        </p>
        <h2 className='font-display text-[30px] font-black sm:text-[50px] md:text-[60px] xs:text-[40px]'>
          Contact.
        </h2>
        <p className='mt-6 max-w-xl text-[17px] leading-[30px]'>
          This is my old website, so the contact form has been turned off. You
          can still reach me on LinkedIn.
        </p>
        <ul className='mt-8 flex flex-col gap-6'>
          <li>
            <Link
              href='https://www.linkedin.com/in/michaelbrusegard/'
              target='_blank'
              rel='noreferrer'
              className={linkClassName}
              title='Visit my LinkedIn profile'
              aria-label='Visit my LinkedIn profile'
            >
              <LinkedInLogo className='h-6 w-6' aria-hidden='true' />
              LinkedIn
            </Link>
          </li>
        </ul>
      </m.div>
      <m.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='h-[350px] md:h-[550px] xl:h-auto xl:w-[550px] xl:flex-1'
      >
        <DogCanvas />
      </m.div>
    </div>
  );
}

const WrappedContact = SectionHOC(ContactSection, 'contact');

function Contact() {
  return (
    <div className='relative z-0'>
      <WrappedContact />
      <StarsCanvas />
    </div>
  );
}

export { Contact };
