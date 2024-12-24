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

function SimulationProvider({ children }: { children: React.ReactNode }) {
  const simulation = useRef<WebGLFluidEnhanced | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const root = getComputedStyle(document.documentElement);
      simulation.current = new WebGLFluidEnhanced(containerRef.current);
      simulation.current.setConfig({
        colorPalette: [root.getPropertyValue('--color-primary'), root.getPropertyValue('--color-secondary'), root.getPropertyValue('--color-accent')],
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
