'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants';
import MenuButton from '../components/menuButton';
import webGLFluidSimulation from 'webgl-fluid-simulation';
import { motion, Variants } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Nav = () => {
  useEffect(() => {
    const navElements = document.querySelectorAll('.nav-element');
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].addEventListener('click', () => {
        webGLFluidSimulation.splats();
      });
    }
  }, []);

  return (
    <nav className='paddingX fixed top-0 z-20 flex w-full items-center bg-secondary py-5'>
      <div className='mx-auto flex w-full max-w-7xl select-none items-center justify-between'>
        <Link
          href='/'
          className='nav-element flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.svg
            width='100%'
            height='100%'
            viewBox='0 0 256 256'
            className='h-9 w-9 object-contain text-text'
            variants={fadeIn('', '', 0.25, 0.5) as Variants}
            initial='hidden'
            animate='show'
          >
            <g transform='matrix(0.851114,0,0,0.826603,-212.779,-120.429)'>
              <path d='M250,395.723L250,232.026L372.656,313.76L354.862,326.041L270.071,271.005L270.071,395.723L250,395.723Z' fill='currentColor' />
              <path d='M499,205.318L499,395.672L478.205,395.672L478.205,244.373L446.141,264.874L428.353,252.457L499,205.318Z' fill='currentColor' />
              <path d='M302,205.462L446.102,301.366L446,325.734L302.261,229.578L302,205.462Z' fill='currentColor' />
              <path d='M531,395.726L530.942,245.574L550.782,232.164L550.782,395.726L531,395.726Z' fill='currentColor' />
              <path d='M302,395.766L302,328.095L322.911,342.056L323,395.766L302,395.766Z' fill='currentColor' />
            </g>
          </motion.svg>

          <motion.p
            className='flex cursor-pointer font-mono text-[18px] font-bold text-text'
            variants={fadeIn('', '', 0.1, 0.5) as Variants}
            initial='hidden'
            animate='show'
          >
            Brusegard.&nbsp;
            <span className='hidden md:block'>Michael</span>
          </motion.p>
        </Link>
        <ul className='hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              className='nav-element cursor-pointer font-mono text-[18px] font-medium hover:text-primary'
              variants={fadeIn('down', '', index * 0.25, 0.5) as Variants}
              initial='hidden'
              animate='show'
              whileHover={{
                transition: { duration: 0.2 },
                transform: 'translateY(-2px)',
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className='flex flex-1 items-center justify-end sm:hidden'
          variants={fadeIn('down', '', 0.25, 0.5) as Variants}
          initial='hidden'
          animate='show'
        >
          <MenuButton />
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
