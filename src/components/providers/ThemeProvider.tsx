'use client';

import { createContext, useContext } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useSimulation } from '@/components/providers/SimulationProvider';

type ThemeContextType = {
  updateTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}

function applyGradientColors() {
  const root = getComputedStyle(document.documentElement);
  const linearGradient = document.getElementById('gradient');
  if (linearGradient) {
    linearGradient
      .querySelector('stop[offset="0%"]')
      ?.setAttribute('stop-color', `hsl(${root.getPropertyValue('--accent')})`);
    linearGradient
      .querySelector('stop[offset="100%"]')
      ?.setAttribute(
        'stop-color',
        `hsl(${root.getPropertyValue('--primary')})`,
      );
  }
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { updateColorPalette } = useSimulation();

  function updateTheme() {
    updateColorPalette();
    applyGradientColors();
  }

  return (
    <ThemeContext.Provider value={{ updateTheme }}>
      <NextThemeProvider
        attribute='class'
        themes={[
          'light',
          'dark',
          'light-pink',
          'dark-pink',
          'light-youtube',
          'dark-youtube',
          'light-gpt',
          'dark-gpt',
          'light-slack',
          'dark-slack',
          'light-green',
          'dark-green',
          'light-blue',
          'dark-blue',
          'light-red',
          'dark-red',
        ]}
      >
        {children}
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, useThemeContext };
