'use client';

import { useTheme } from 'next-themes';
import { SunIcon } from '@/components/assets/SunIcon';
import { MoonIcon } from '@/components/assets/MoonIcon';

function DarkModeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) return null;

  const isDarkMode = resolvedTheme.startsWith('dark');

  function toggleDarkMode() {
    if (!resolvedTheme) return;

    if (isDarkMode) {
      setTheme(resolvedTheme.replace('dark', 'light'));
    } else {
      setTheme(resolvedTheme.replace('light', 'dark'));
    }
  }

  const title = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button title={title} aria-label={title} onClick={toggleDarkMode}>
      {isDarkMode ? (
        <SunIcon className='h-5 w-5' aria-hidden='true' />
      ) : (
        <MoonIcon className='h-5 w-5' aria-hidden='true' />
      )}
    </button>
  );
}

export { DarkModeButton };
