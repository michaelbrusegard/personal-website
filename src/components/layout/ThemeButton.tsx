'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { PaletteIcon } from '@/components/assets/PaletteIcon';
import { useThemeContext } from '@/components/providers/ThemeProvider';

function ThemeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { updateTheme } = useThemeContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted || !resolvedTheme) return null;

  const mode = resolvedTheme.split('-')[0];

  function cycleTheme() {
    if (!resolvedTheme) return;

    const themeTypes = [
      '',
      '-pink',
      '-youtube',
      '-gpt',
      '-slack',
      '-green',
      '-blue',
      '-red',
    ];
    const currentType = resolvedTheme.includes('-')
      ? `-${resolvedTheme.split('-')[1]}`
      : '';
    const currentIndex = themeTypes.indexOf(currentType);
    const nextIndex = (currentIndex + 1) % themeTypes.length;
    const nextType = themeTypes[nextIndex];

    setTheme(`${mode}${nextType}`);
    updateTheme();
  }

  const title = 'Change color theme';
  return (
    <button
      className='rounded-md outline-2 outline-offset-2 outline-primary/60 hover:text-primary focus-visible:outline'
      title={title}
      aria-label={title}
      onClick={cycleTheme}
    >
      <PaletteIcon className='h-5 w-5' aria-hidden='true' />
    </button>
  );
}

export { ThemeButton };
