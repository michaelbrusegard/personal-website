'use client';
import './globals.css';
import { useEffect, useRef } from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Works from '../components/works';
import Feedbacks from '../components/feedbacks';
import Contact from '../components/contact';
import webGLFluidSimulation from 'webgl-fluid-simulation';
import colors from '../utils/colors';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas)
      webGLFluidSimulation.simulation(canvas, {
        COLOR_PALETTE: [colors.primaryColor, colors.secondaryColor, colors.accentColor],
        BACK_COLOR: colors.backgroundColor,
        INITIAL: true,
      });
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className='fixed left-0 top-0 z-0 h-screen-large w-full' />
      <div className='pointer-events-none h-screen-small w-full'>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </>
  );
};

export default App;
