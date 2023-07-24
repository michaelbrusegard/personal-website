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
import webGLFluidSimulation from 'webgl-fluid-simulation';
import { updateColors } from '../utils/colors';
import propagateMouseEvent from '../utils/mouseEventPropagation';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseEvent = (event: MouseEvent) => {
    propagateMouseEvent(event, canvasRef);
  };

  useEffect(() => {
    updateColors();
    const canvas = canvasRef.current;
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

    if (canvas) {
      webGLFluidSimulation.simulation(canvas, {
        COLOR_PALETTE: [
          root.getPropertyValue('--color-primary'),
          root.getPropertyValue('--color-secondary'),
          root.getPropertyValue('--color-accent'),
        ],
        BACK_COLOR: root.getPropertyValue('--color-background'),
      });
    }

    return () => {
      if (div) {
        div.removeEventListener('click', handleMouseEvent);
        div.removeEventListener('mousemove', handleMouseEvent);
        div.removeEventListener('mousedown', handleMouseEvent);
        div.removeEventListener('mouseup', handleMouseEvent);
        div.removeEventListener('mouseover', handleMouseEvent);
        div.removeEventListener('mouseout', handleMouseEvent);
      }
    };
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} className='fixed left-0 top-0 z-0 h-screen-large w-full' />
      <div ref={divRef} className='pointer-events-none h-screen-small w-full'>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Foot />
      </div>
    </>
  );
};

export default App;
