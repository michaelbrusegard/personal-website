'use client';

import { useEffect } from 'react';
import { useSimulation } from '@/components/providers/SimulationProvider';
import { motion, Variants } from 'motion/react';
import { fadeIn } from '@/utils/motion';
import { HeroName } from '@/components/sections/hero/HeroName';
import { HeroPhoto } from '@/components/sections/hero/HeroPhoto';
import { HeroSocial } from '@/components/sections/hero/HeroSocial';

function Hero() {
  const { multipleSplats, lowerBrightnessHover } = useSimulation();

  useEffect(() => {
    const scrollButton = document.querySelector(
      '.scroll-button',
    ) as HTMLElement;
    if (scrollButton) lowerBrightnessHover(scrollButton);
    scrollButton.addEventListener('click', () => {
      multipleSplats(5);
    });

    const aboutText = document.querySelector('.about-text') as HTMLElement;
    if (aboutText) lowerBrightnessHover(aboutText);
  }, []);

  return (
    <section className='relative z-10 mx-auto h-screen w-full select-none'>
      <HeroPhoto />
      <div className='absolute inset-0 top-[80px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-11 md:px-16 xs:top-[120px]'>
        <div className='pointer-events-auto mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-primary' />
          <div className='h-40 w-1 bg-gradient-to-b from-primary via-secondary to-transparent sm:h-80' />
        </div>
        <div className='pointer-events-auto'>
          <HeroName />
          <motion.p
            className='about-text leading[20px] mt-0 text-[16px] font-medium sm:text-[26px] lg:text-[30px] lg:leading-[40px] xs:mt-[2] xs:text-[20px] xs:leading-normal'
            variants={fadeIn('', '', 1.5, 1) as Variants}
            initial='hidden'
            animate='show'
          >
            I&apos;m a{' '}
            <span className='from-primary to-accent bg-clip-text text-transparent bg-gradient-120'>
              Full-Stack Developer
            </span>{' '}
            residing in&nbsp;
            <br className='hidden sm:block' />
            Trondheim, Norway
            <span className='xs:hidden landscape-sm:inline'>.</span>
            <span className='hidden xs:inline landscape-sm:hidden'>
              , seeking new opportunities&nbsp;
              <br className='hidden sm:block' />
              to contribute my skills and knowledge.
            </span>
          </motion.p>
          <HeroSocial />
        </div>
      </div>
      <div className='absolute bottom-24 flex w-full items-center justify-center landscape-md:bottom-6'>
        <a
          href='#about'
          className='scroll-button group pointer-events-auto transition-transform duration-200 hover:translate-y-2 focus-visible:translate-y-2'
        >
          <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-foreground p-2 transition-colors group-hover:border-primary group-focus-visible:border-primary'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='mb-1 h-3 w-3 rounded-full bg-foreground transition-colors group-hover:bg-primary group-focus-visible:bg-primary'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export { Hero };
