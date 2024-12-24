'use client';
import './globals.css';
import { useEffect, useRef } from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Works from '../components/works';
import Feedbacks from '../components/feedbacks';
import Contact from '../components/contact';
import StarsCanvas from '../components/stars';
import Foot from '../components/foot';
import WebGLFluidEnhanced from 'webgl-fluid-enhanced';
import { updateColors } from '../utils/colors';
import propagateMouseEvent from '../utils/mouseEventPropagation';

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseEvent = (event: MouseEvent) => {
    propagateMouseEvent(event, containerRef);
  };

  useEffect(() => {
    updateColors();
    const container = containerRef.current;
    const div = divRef.current;
    const root = getComputedStyle(document.documentElement);

    if (div) {
      div.addEventListener('click', handleMouseEvent);
      div.addEventListener('mousemove', handleMouseEvent);
      div.addEventListener('mousedown', handleMouseEvent);
      div.addEventListener('mouseup', handleMouseEvent);
      div.addEventListener('mouseover', handleMouseEvent);
      div.addEventListener('mouseout', handleMouseEvent);
    }

    const simulation = new WebGLFluidEnhanced(container!);
    simulation.setConfig({
      colorPalette: [root.getPropertyValue('--color-primary'), root.getPropertyValue('--color-secondary'), root.getPropertyValue('--color-accent')],
      transparent: true,
    });
    simulation.start();

    return () => {
      if (div) {
        div.removeEventListener('click', handleMouseEvent);
        div.removeEventListener('mousemove', handleMouseEvent);
        div.removeEventListener('mousedown', handleMouseEvent);
        div.removeEventListener('mouseup', handleMouseEvent);
        div.removeEventListener('mouseover', handleMouseEvent);
        div.removeEventListener('mouseout', handleMouseEvent);
      }
      simulation.stop();
    };
  }, [containerRef]);

  return (
    <>
      <div className='fixed left-0 top-0 z-0 h-full w-full'>
        <div ref={containerRef} className='h-full w-full' />
      </div>
      <div ref={divRef} className='pointer-events-none h-screen-small w-full'>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        {/* <div className='relative z-0'> */}
        {/*   <Contact /> */}
        {/*   <StarsCanvas /> */}
        {/* </div> */}
        <Foot />
      </div>
    </>
  );
};

export default App;
