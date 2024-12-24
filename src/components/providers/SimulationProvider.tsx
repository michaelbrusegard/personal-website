'use client';

import WebGLFluidEnhanced from 'webgl-fluid-enhanced';
import { createContext, useContext, useEffect, useRef } from 'react';

type SimulationContextType = {
  multipleSplats: (amount: number) => void;
};

const SimulationContext = createContext<SimulationContextType | null>(null);

function useSimulation() {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error('useSimulation must be used within a SimulationProvider');
  }
  return context;
}

function hslToHex(h: number, s: number, l: number) {
  console.log('Input HSL:', h, s, l); // Debug input values
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  const result = `#${f(0)}${f(8)}${f(4)}`;
  console.log('Output hex:', result); // Debug output
  return result;
}

function SimulationProvider({ children }: { children: React.ReactNode }) {
  const simulation = useRef<WebGLFluidEnhanced | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const root = getComputedStyle(document.documentElement);
      simulation.current = new WebGLFluidEnhanced(containerRef.current);
      simulation.current.setConfig({
        colorPalette: [
          hslToHex(
            ...((root
              .getPropertyValue('--primary')
              .match(/[\d.]+/g)
              ?.map((v) => Number(v)) ?? [0, 0, 0]) as [
              number,
              number,
              number,
            ]),
          ),
          hslToHex(
            ...((root
              .getPropertyValue('--secondary')
              .match(/[\d.]+/g)
              ?.map((v) => Number(v)) ?? [0, 0, 0]) as [
              number,
              number,
              number,
            ]),
          ),
          hslToHex(
            ...((root
              .getPropertyValue('--accent')
              .match(/[\d.]+/g)
              ?.map((v) => Number(v)) ?? [0, 0, 0]) as [
              number,
              number,
              number,
            ]),
          ),
        ],
        transparent: true,
      });
      simulation.current.start();

      return () => {
        simulation.current?.stop();
        simulation.current = null;
      };
    }
  }, []);

  function multipleSplats(amount: number) {
    simulation.current?.multipleSplats(amount);
  }

  return (
    <SimulationContext.Provider value={{ multipleSplats }}>
      <div className='fixed left-0 top-0 z-0 h-full w-full'>
        <div ref={containerRef} className='h-full w-full' />
      </div>
      {children}
    </SimulationContext.Provider>
  );
}

export { SimulationProvider, useSimulation };
