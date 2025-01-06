'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@/components/assets/SunIcon';
import { MoonIcon } from '@/components/assets/MoonIcon';
import { useThemeContext } from '@/components/providers/ThemeProvider';

function DarkModeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { updateTheme } = useThemeContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted || !resolvedTheme) return null;

  const isDarkMode = resolvedTheme.startsWith('dark');

  function toggleDarkMode() {
    if (!resolvedTheme) return;

    if (isDarkMode) {
      setTheme(resolvedTheme.replace('dark', 'light'));
    } else {
      setTheme(resolvedTheme.replace('light', 'dark'));
    }
    updateTheme();
  }

  const title = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button
      className='rounded-md outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus-visible:outline'
      title={title}
      aria-label={title}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <SunIcon className='h-5 w-5' aria-hidden='true' />
      ) : (
        <MoonIcon className='h-5 w-5' aria-hidden='true' />
      )}
    </button>
  );
}

export { DarkModeButton };
