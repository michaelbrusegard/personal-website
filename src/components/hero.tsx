import React, { useEffect } from 'react';
import HeroCanvas from './heroCanvas';
import letterBounce from '../utils/letterBounce';
import { motion } from 'framer-motion';
import fluidHover from '../utils/fluidHover';
import fluidAnimation from '../utils/fluidAnimation';

const Hero = () => {
  useEffect(() => {
    const scrollButton = document.querySelector('.scrollButton') as HTMLElement;
    if (scrollButton) fluidHover(scrollButton);
    window.addEventListener('keydown', (event) => {
      if (event.code === 'KeyS') {
        console.log('som');
        fluidAnimation.splats();
      }
    });
    return letterBounce('span.bouncer');
  }, []);

  const scrollButtonClick = () => {
    console.log('test');
    fluidAnimation.splats();
  };

  return (
    <section className='relative z-10 mx-auto h-full w-full select-none'>
      <div className='paddingX absolute inset-0 top-[80px] mx-auto flex max-w-7xl flex-row items-start gap-5 xs:top-[120px] '>
        <div className='pointer-events-auto mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-primary' />
          <div className='h-40 w-1 bg-gradient-to-b from-primary via-secondary to-transparent sm:h-80' />
        </div>
        <div className='pointer-events-auto'>
          <h1 className='mt-2 flex flex-wrap text-[40px] font-black text-text sm:text-[60px] lg:text-[80px] lg:leading-[98px] xs:text-[50px]'>
            <div>
              <span className='bouncer inline-block transition-colors hover:text-accent'>H</span>
              <span className='bouncer inline-block transition-colors hover:text-accent'>i</span>
              <span className='bouncer inline-block transition-colors hover:text-accent'>,&nbsp;</span>
            </div>
            <div>
              <span className='bouncer inline-block transition-colors hover:text-accent'>I</span>
              <span className='bouncer inline-block transition-colors hover:text-accent'>&apos;</span>
              <span className='bouncer inline-block transition-colors hover:text-accent'>m&nbsp;</span>
            </div>
            <div className='flex'>
              <span className='from-primary to-accent bg-clip-text text-transparent bg-gradient-120'>
                <span className='bouncer gradient-letter inline-block transition-colors hover:text-accent'> M</span>
                <span className='bouncer gradient-letter inline-block transition-colors hover:text-accent'>i</span>
                <span className='bouncer gradient-letter inline-block transition-colors hover:text-accent'>c</span>
                <span className='bouncer gradient-letter inline-block transition-colors hover:text-accent'>h</span>
                <span className='bouncer gradient-letter inline-block transition-colors hover:text-accent'>a</span>
                <span className='bouncer gradient-letter inline-block transition-colors hover:text-accent'>e</span>
                <span className='bouncer gradient-letter inline-block transition-colors hover:text-accent'>l</span>
              </span>
              <span className='bouncer inline-block transition-colors hover:text-accent'>.</span>
            </div>
          </h1>
          <p className='leading[20px] mt-0 text-[16px] font-medium text-text sm:text-[26px] lg:text-[30px] lg:leading-[40px] xs:mt-[2] xs:text-[20px] xs:leading-normal'>
            I&apos;m a <span className='from-primary to-accent bg-clip-text text-transparent bg-gradient-120'>Full-stack Developer</span> based in&nbsp;
            <br className='hidden sm:block' />
            Trondheim, Norway<span className='xs:hidden'>.</span>
            <span className='hidden xs:inline'>
              , specialising in building&nbsp;
              <br className='hidden sm:block' />
              premium tailormade websites and applications.
            </span>
          </p>
        </div>
      </div>
      {/* <HeroCanvas /> */}
      <div className='absolute bottom-10 flex w-full items-center justify-center sm:bottom-32 landscape-mobile:bottom-5'>
        <a href='#about' onClick={scrollButtonClick} className='scrollButton group pointer-events-auto transition-transform duration-200 hover:translate-y-2'>
          <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-text p-2 transition-colors group-hover:border-primary'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='mb-1 h-3 w-3 rounded-full bg-text transition-colors group-hover:bg-primary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
