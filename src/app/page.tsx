'use client';
import { useEffect, useRef } from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import './globals.css';
import fluidAnimation from '../utils/fluidAnimation';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) fluidAnimation.simulation(canvas);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className='fixed left-0 top-0 z-0 h-screen-large w-full' />
      <div className='pointer-events-none h-screen-small w-full'>
        <Hero />
        <About />
        <Experience />
      </div>
    </>
  );
};

export default App;
