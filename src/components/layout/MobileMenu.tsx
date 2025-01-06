'use client';

import '@/styles/menu-button.css';
import { useState, useEffect } from 'react';
import { m } from 'motion/react';
import { foldOut } from '@/utils/motion';
import { Nav } from '@/components/layout/Nav';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    window.addEventListener('resize', closeMenu);
    window.addEventListener('scroll', closeMenu);
    window.addEventListener('orientationchange', closeMenu);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('resize', closeMenu);
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('orientationchange', closeMenu);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`menu-button group flex h-9 w-9 translate-x-[-50%] justify-end rounded-md object-contain outline-2 outline-offset-2 outline-primary/60 focus-visible:outline ${
          isOpen ? 'open' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        aria-haspopup='true'
        title={isOpen ? 'Close menu' : 'Open menu'}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className='absolute right-0 top-2 h-[3px] w-3/4 bg-foreground transition-colors group-hover:bg-primary' />
        <div className='absolute right-0 top-4 h-[3px] w-full bg-foreground transition-colors group-hover:bg-primary' />
        <div className='absolute left-0 top-6 h-[3px] w-full bg-foreground transition-colors group-hover:bg-primary' />
      </button>
      <m.div
        id='mobile-menu'
        role='dialog'
        aria-modal='true'
        aria-label='Mobile navigation menu'
        className={`fixed left-0 top-[75px] h-screen w-full bg-secondary px-6 shadow-xl sm:px-11 md:px-16 ${
          isOpen ? '' : 'pointer-events-none'
        }`}
        variants={foldOut(0.8, 0.2)}
        initial='hidden'
        animate={isOpen ? 'show' : 'hidden'}
      >
        <Nav isMobile animate={isOpen ? 'show' : 'hidden'} />
      </m.div>
    </>
  );
}

export { MobileMenu };
