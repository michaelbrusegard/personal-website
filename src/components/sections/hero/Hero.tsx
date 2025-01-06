'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { m } from 'motion/react';
import { useSimulation } from '@/components/providers/SimulationProvider';
import { fadeIn } from '@/utils/motion';
import { HeroName } from '@/components/sections/hero/HeroName';
import { HeroPhoto } from '@/components/sections/hero/HeroPhoto';
import { HeroSocial } from '@/components/sections/hero/HeroSocial';

function Hero() {
  const { multipleSplats, lowerBrightnessHover } = useSimulation();
  const aboutTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    lowerBrightnessHover(aboutTextRef.current);
  }, [lowerBrightnessHover]);

  return (
    <section
      className='relative z-10 mx-auto h-screen w-full'
      aria-label='Introduction section'
    >
      <HeroPhoto />
      <div className='absolute inset-0 top-[80px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-11 md:px-16 xs:top-[120px]'>
        <div
          className='mt-5 flex flex-col items-center justify-center'
          aria-hidden='true'
        >
          <div className='h-5 w-5 rounded-full bg-primary' />
          <div className='h-40 w-1 bg-gradient-to-b from-primary via-secondary to-transparent sm:h-80' />
        </div>
        <div className='overflow-hidden px-1 pb-10'>
          <HeroName />
          <m.p
            className='leading[20px] mt-0 text-[16px] font-medium sm:text-[26px] lg:text-[30px] lg:leading-[40px] xs:mt-[2] xs:text-[20px] xs:leading-normal'
            variants={fadeIn('', '', 1.5, 1)}
            initial='hidden'
            animate='show'
            ref={aboutTextRef}
          >
            I&apos;m a{' '}
            <span
              className='from-primary to-accent bg-clip-text text-transparent bg-gradient-120'
              role='text'
            >
              Software Engineer
            </span>{' '}
            residing in&nbsp;
            <br className='hidden xs:block' aria-hidden='true' />
            Trondheim, Norway , who loves building{' '}
            <br className='hidden xs:block' aria-hidden='true' />
            meaningful applications.
          </m.p>
          <HeroSocial />
        </div>
      </div>
      <div className='absolute bottom-24 flex w-full items-center justify-center landscape-md:bottom-6'>
        <Link
          className='group pointer-events-auto rounded-md outline-2 outline-offset-2 outline-primary/60 transition-transform duration-200 hover:translate-y-2 focus-visible:outline'
          href='#about'
          onClick={() => {
            multipleSplats(5);
          }}
          aria-label='Scroll to about section'
        >
          <div
            className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-foreground p-2 transition-colors group-hover:border-primary'
            role='presentation'
          >
            <m.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='mb-1 h-3 w-3 rounded-full bg-foreground transition-colors group-hover:bg-primary'
              aria-hidden='true'
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

export { Hero };
