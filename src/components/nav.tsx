'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants';
import MenuButton from '../components/menuButton';
import MobileMenu from '../components/mobileMenu';
import webGLFluidSimulation from 'webgl-fluid-simulation';
import { motion, Variants } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { changeVariant, changePalette, isDarkVariant } from '../utils/colors';

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(isDarkVariant);
  const [isOpen, setIsOpen] = useState(false);

  const changeTheme = () => {
    changePalette();
  };
  const toggleDarkMode = () => {
    changeVariant();
    setIsDarkMode(!isDarkMode);
  };

  const PaletteIcon = ({ tabIndex }: { tabIndex: number }) => (
    <motion.svg
      width='100%'
      height='100%'
      viewBox='0 0 256 256'
      className='h-6 w-6 text-text hover:text-primary focus:text-primary'
      tabIndex={tabIndex}
      whileHover={{ translateY: '-2px' }}
      transition={{ duration: 0.2 }}
      onClick={changeTheme}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          changeTheme();
        }
      }}
    >
      <g transform='matrix(10.882,0,0,10.882,0,21.5682)'>
        <path
          d='M12.637,19.561C16.748,19.561 19.492,18.106 19.492,15.957C19.492,14.033 17.852,13.604 17.852,12.471C17.852,10.908 23.525,10.596 23.525,6.582C23.525,2.617 19.434,0 13.359,0C5.381,0 0,3.984 0,9.951C0,15.693 5.107,19.561 12.637,19.561ZM12.637,17.891C6.025,17.891 1.67,14.707 1.67,9.951C1.67,4.971 6.299,1.67 13.359,1.67C18.486,1.67 21.856,3.662 21.856,6.582C21.856,9.99 16.143,9.531 16.143,12.48C16.143,14.15 17.822,14.678 17.822,15.83C17.822,17.07 15.781,17.891 12.637,17.891ZM11.836,15.586C13.32,15.586 14.541,14.365 14.541,12.871C14.541,11.397 13.32,10.176 11.836,10.176C10.352,10.176 9.131,11.397 9.131,12.871C9.131,14.365 10.352,15.586 11.836,15.586ZM11.836,14.453C10.967,14.453 10.264,13.75 10.264,12.871C10.264,11.904 11.006,11.328 11.816,11.318C12.647,11.309 13.408,11.875 13.408,12.871C13.408,13.75 12.715,14.453 11.836,14.453Z'
          fill='currentColor'
        />
        <path
          d='M4.932,11.289C5.83,11.289 6.553,10.547 6.553,9.648C6.553,8.75 5.83,8.027 4.932,8.027C4.043,8.027 3.311,8.75 3.311,9.648C3.311,10.547 4.043,11.289 4.932,11.289Z'
          fill='currentColor'
        />
        <path
          d='M8.496,8.164C9.629,8.164 10.547,7.256 10.547,6.104C10.547,4.98 9.619,4.082 8.496,4.082C7.354,4.082 6.436,4.98 6.436,6.104C6.436,7.256 7.354,8.164 8.496,8.164Z'
          fill='currentColor'
        />
        <path
          d='M13.447,6.582C14.365,6.582 15.088,5.85 15.088,4.932C15.088,4.023 14.365,3.291 13.447,3.291C12.549,3.291 11.797,4.023 11.797,4.932C11.797,5.85 12.549,6.582 13.447,6.582Z'
          fill='currentColor'
        />
        <path
          d='M17.91,7.207C18.643,7.207 19.229,6.611 19.229,5.869C19.229,5.137 18.643,4.541 17.91,4.541C17.168,4.541 16.563,5.137 16.563,5.869C16.563,6.611 17.168,7.207 17.91,7.207Z'
          fill='currentColor'
        />
      </g>
    </motion.svg>
  );

  const SunIcon = ({ tabIndex }: { tabIndex: number }) => (
    <motion.svg
      width='100%'
      height='100%'
      viewBox='0 0 256 256'
      className='h-6 w-6 text-text hover:text-primary focus:text-primary'
      tabIndex={tabIndex}
      whileHover={{ translateY: '-2px' }}
      transition={{ duration: 0.2 }}
      onClick={toggleDarkMode}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          toggleDarkMode();
        }
      }}
    >
      <g transform='matrix(12.1195,0,0,12.086,0,0)'>
        <path
          d='M10.566,3.799C11.025,3.799 11.406,3.418 11.406,2.949L11.406,0.85C11.406,0.381 11.025,0 10.566,0C10.098,0 9.717,0.381 9.717,0.85L9.717,2.949C9.717,3.418 10.098,3.799 10.566,3.799ZM15.352,5.801C15.684,6.123 16.221,6.133 16.553,5.801L18.047,4.307C18.369,3.984 18.369,3.438 18.047,3.105C17.725,2.783 17.188,2.783 16.856,3.105L15.352,4.609C15.029,4.941 15.029,5.479 15.352,5.801ZM17.334,10.596C17.334,11.055 17.725,11.436 18.184,11.436L20.283,11.436C20.742,11.436 21.123,11.055 21.123,10.596C21.123,10.137 20.742,9.746 20.283,9.746L18.184,9.746C17.725,9.746 17.334,10.137 17.334,10.596ZM15.352,15.391C15.029,15.723 15.029,16.26 15.352,16.582L16.856,18.096C17.188,18.408 17.725,18.398 18.047,18.086C18.369,17.754 18.369,17.217 18.047,16.895L16.543,15.391C16.221,15.078 15.684,15.078 15.352,15.391ZM10.566,17.393C10.098,17.393 9.717,17.773 9.717,18.232L9.717,20.342C9.717,20.801 10.098,21.182 10.566,21.182C11.025,21.182 11.406,20.801 11.406,20.342L11.406,18.232C11.406,17.773 11.025,17.393 10.566,17.393ZM5.771,15.391C5.439,15.078 4.893,15.078 4.57,15.391L3.076,16.885C2.754,17.207 2.754,17.744 3.066,18.076C3.389,18.389 3.936,18.398 4.268,18.086L5.762,16.582C6.084,16.26 6.084,15.723 5.771,15.391ZM3.789,10.596C3.789,10.137 3.398,9.746 2.939,9.746L0.84,9.746C0.381,9.746 0,10.137 0,10.596C0,11.055 0.381,11.436 0.84,11.436L2.939,11.436C3.398,11.436 3.789,11.055 3.789,10.596ZM5.762,5.801C6.084,5.488 6.084,4.932 5.771,4.609L4.277,3.105C3.955,2.793 3.408,2.783 3.086,3.105C2.764,3.438 2.764,3.984 3.076,4.297L4.57,5.801C4.893,6.123 5.43,6.123 5.762,5.801Z'
          fill='currentColor'
        />
        <path
          d='M10.557,15.576C13.272,15.576 15.527,13.32 15.527,10.596C15.527,7.861 13.272,5.605 10.557,5.605C7.842,5.605 5.586,7.861 5.586,10.596C5.586,13.32 7.842,15.576 10.557,15.576ZM10.557,14.082C8.652,14.082 7.07,12.5 7.07,10.596C7.07,8.682 8.652,7.1 10.557,7.1C12.461,7.1 14.043,8.682 14.043,10.596C14.043,12.5 12.461,14.082 10.557,14.082Z'
          fill='currentColor'
        />
      </g>
    </motion.svg>
  );

  const MoonIcon = ({ tabIndex }: { tabIndex: number }) => (
    <motion.svg
      width='100%'
      height='100%'
      viewBox='0 0 256 256'
      className='h-6 w-6 text-text hover:text-primary focus:text-primary'
      tabIndex={tabIndex}
      whileHover={{ translateY: '-2px' }}
      transition={{ duration: 0.2 }}
      onClick={toggleDarkMode}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          toggleDarkMode();
        }
      }}
    >
      <g transform='matrix(13.0291,0,0,12.9582,0,0)'>
        <path
          d='M15.342,13.262C9.961,13.262 6.621,10.02 6.621,4.814C6.621,3.33 6.865,2.021 7.227,1.318C7.373,1.035 7.402,0.898 7.402,0.703C7.402,0.381 7.1,0 6.689,0C6.611,0 6.426,0.029 6.152,0.137C2.539,1.602 0,5.41 0,9.512C0,15.44 4.307,19.756 10.234,19.756C14.482,19.756 17.93,17.529 19.512,13.877C19.629,13.623 19.648,13.408 19.648,13.301C19.648,12.9 19.307,12.627 19.004,12.627C18.848,12.627 18.731,12.637 18.496,12.725C17.705,13.047 16.514,13.262 15.342,13.262ZM1.533,9.443C1.533,6.406 3.115,3.516 5.645,1.924C5.332,2.832 5.166,3.838 5.166,4.951C5.166,11.055 8.887,14.688 15.117,14.688C16.123,14.688 16.973,14.57 17.783,14.287C16.299,16.738 13.438,18.232 10.293,18.232C5.225,18.232 1.533,14.541 1.533,9.443Z'
          fill='currentColor'
        />
      </g>
    </motion.svg>
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const navElements = document.querySelectorAll('.nav-link');
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].addEventListener('click', () => {
        webGLFluidSimulation.splats();
      });
    }
  }, []);

  return (
    <nav className='paddingX fixed top-0 z-20 flex w-full items-center bg-secondary py-5 shadow-xl'>
      <div className='mx-auto flex w-full max-w-7xl select-none items-center justify-between'>
        <Link
          href='/'
          className='nav-link flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.svg
            width='100%'
            height='100%'
            viewBox='0 0 256 256'
            className='h-9 w-9 object-contain text-text'
            variants={fadeIn('', '', 0, 1) as Variants}
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
            variants={fadeIn('', '', 0, 1) as Variants}
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
              className='nav-link cursor-pointer font-mono text-[18px] font-medium text-text hover:text-primary focus:text-primary'
              tabIndex={0}
              variants={fadeIn('down', '', index * 0.25, 1) as Variants}
              initial='hidden'
              animate='show'
              whileHover={{ translateY: '-2px' }}
              transition={{ duration: 0.2 }}
              onClick={() => (window.location.href = `#${link.id}`)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  window.location.href = `#${link.id}`;
                }
              }}
            >
              {link.title}
            </motion.li>
          ))}
          <motion.li
            className='flex w-full cursor-pointer flex-row items-center gap-3 object-contain'
            variants={fadeIn('down', '', navLinks.length * 0.25, 1) as Variants}
            initial='hidden'
            animate='show'
          >
            {isDarkMode ? <SunIcon tabIndex={0} /> : <MoonIcon tabIndex={0} />}
            <PaletteIcon tabIndex={0} />
          </motion.li>
        </ul>
        <motion.div
          className='flex flex-1 items-center justify-end sm:hidden'
          variants={fadeIn('down', '', 0.25, 1) as Variants}
          initial='hidden'
          animate='show'
        >
          <MenuButton onClick={handleClick} isOpen={isOpen} />
        </motion.div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={handleMenuItemClick} isDarkMode={isDarkMode} PaletteIcon={PaletteIcon} SunIcon={SunIcon} MoonIcon={MoonIcon} />
    </nav>
  );
};

export default Nav;
