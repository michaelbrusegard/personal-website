'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants';
import MenuButton from '../components/menuButton';
import webGLFluidSimulation from 'webgl-fluid-simulation';

const Nav = () => {
  const [active, setActive] = useState('');

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
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <svg width='100%' height='100%' viewBox='0 0 256 256' className='h-9 w-9 object-contain text-text'>
            <g transform='matrix(0.851114,0,0,0.826603,-212.779,-120.429)'>
              <path d='M250,395.723L250,232.026L372.656,313.76L354.862,326.041L270.071,271.005L270.071,395.723L250,395.723Z' fill='currentColor' />
              <path d='M499,205.318L499,395.672L478.205,395.672L478.205,244.373L446.141,264.874L428.353,252.457L499,205.318Z' fill='currentColor' />
              <path d='M302,205.462L446.102,301.366L446,325.734L302.261,229.578L302,205.462Z' fill='currentColor' />
              <path d='M531,395.726L530.942,245.574L550.782,232.164L550.782,395.726L531,395.726Z' fill='currentColor' />
              <path d='M302,395.766L302,328.095L322.911,342.056L323,395.766L302,395.766Z' fill='currentColor' />
            </g>
          </svg>

          <p className='flex cursor-pointer font-mono text-[18px] font-bold text-text'>
            Brusegard.&nbsp;
            <span className='hidden md:block'>Michael</span>
          </p>
        </Link>
        <ul className='hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-primary' : 'text-text'
              } nav-element transform cursor-pointer font-mono text-[18px] font-medium transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='flex flex-1 items-center justify-end sm:hidden'>
          <MenuButton />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
