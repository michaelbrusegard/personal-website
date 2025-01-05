'use client';

import WebGLFluidEnhanced from 'webgl-fluid-enhanced';
import { createContext, useContext, useEffect, useRef } from 'react';

type SimulationContextType = {
  multipleSplats: (amount: number) => void;
  lowerBrightnessHover: (element: HTMLElement) => void;
  updateColorPalette: () => void;
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
  return result;
}

function getCSSColorValue(propertyName: string): [number, number, number] {
  const root = getComputedStyle(document.documentElement);
  return (root
    .getPropertyValue(propertyName)
    .match(/[\d.]+/g)
    ?.map((v) => Number(v)) ?? [0, 0, 0]) as [number, number, number];
}

function SimulationProvider({ children }: { children: React.ReactNode }) {
  const simulation = useRef<WebGLFluidEnhanced | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      simulation.current = new WebGLFluidEnhanced(containerRef.current);
      simulation.current.setConfig({
        colorPalette: [
          hslToHex(...getCSSColorValue('--primary')),
          hslToHex(...getCSSColorValue('--secondary')),
          hslToHex(...getCSSColorValue('--accent')),
        ],
        transparent: true,
        brightness: 0.4,
      });
      simulation.current.start();

      return () => {
        simulation.current?.stop();
        simulation.current = null;
      };
    }
  }, []);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    function handleEvent(event: Event) {
      if (containerRef.current) {
        const canvas = containerRef.current.querySelector('canvas');
        if (canvas) {
          if (event instanceof MouseEvent) {
            canvas.dispatchEvent(new MouseEvent(event.type, event));
          } else if (event instanceof TouchEvent) {
            const touch = event.touches[0];
            if (touch) {
              const rect = canvas.getBoundingClientRect();
              const mouseEvent = new MouseEvent(
                event.type === 'touchstart'
                  ? 'mousedown'
                  : event.type === 'touchend'
                    ? 'mouseup'
                    : 'mousemove',
                {
                  clientX: touch.clientX - rect.left,
                  clientY: touch.clientY + window.scrollY - rect.top,
                  bubbles: true,
                },
              );
              canvas.dispatchEvent(mouseEvent);
            }
          }
        }
      }
    }

    const eventTypes = [
      'mousemove',
      'mousedown',
      'mouseup',
      'touchstart',
      'touchmove',
      'touchend',
    ];

    eventTypes.forEach((eventType) => {
      mainElement.addEventListener(eventType, handleEvent, { passive: true });
    });

    return () => {
      eventTypes.forEach((eventType) => {
        mainElement.removeEventListener(eventType, handleEvent);
      });
    };
  }, []);

  function updateColorPalette() {
    setTimeout(() => {
      simulation.current?.setConfig({
        colorPalette: [
          hslToHex(...getCSSColorValue('--primary')),
          hslToHex(...getCSSColorValue('--secondary')),
          hslToHex(...getCSSColorValue('--accent')),
        ],
      });
    }, 0);
  }

  function multipleSplats(amount: number) {
    simulation.current?.multipleSplats(amount);
  }

  function lowerBrightnessHover(element: HTMLElement) {
    let hoverTimer: NodeJS.Timeout | null = null;
    let isHovered = false;

    function resetHoverTimer() {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }

      hoverTimer = setTimeout(() => {
        if (!isHovered && simulation.current) {
          simulation.current.setConfig({
            brightness: 0.4,
          });
        }
      }, 1000);
    }

    function handleMouseEnter() {
      isHovered = true;
      if (simulation.current) {
        simulation.current.setConfig({
          brightness: 0.1,
        });
      }
      resetHoverTimer();
    }

    function handleMouseLeave() {
      isHovered = false;
      resetHoverTimer();
    }

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);

      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
    };
  }

  return (
    <SimulationContext.Provider
      value={{ multipleSplats, lowerBrightnessHover, updateColorPalette }}
    >
      <div className='fixed left-0 top-0 h-full w-full'>
        <div ref={containerRef} className='h-full w-full' />
      </div>
      <main ref={mainRef} className='h-full w-full'>
        {children}
      </main>
    </SimulationContext.Provider>
  );
}

export { SimulationProvider, useSimulation };
