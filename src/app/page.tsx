'use client';
import { useEffect, useRef } from 'react';
import webGLFluidSimulation from 'webgl-fluid-simulation';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidSimulation(canvasRef.current!, {
      COLOR_PALETTE: ['#cc211b', '#f1c593', '#e87e54', '#f193a7', '#ec6fa9'],
    });
  }, []);

  return <canvas ref={canvasRef} className="w-screen h-screen" />;
};

export default App;
