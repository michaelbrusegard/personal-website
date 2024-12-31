'use client';

import { useTheme } from 'next-themes';
import { PaletteIcon } from '@/components/assets/PaletteIcon';

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) return null;

  const mode = resolvedTheme.split('-')[0];

  function cycleTheme() {
    if (!resolvedTheme) return;

    const themeTypes = [
      '',
      '-pink',
      '-youtube',
      '-chatgpt',
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
  }

  const title = 'Change color theme';
  return (
    <button
      className='hover:text-primary focus:text-primary'
      title={title}
      aria-label={title}
      onClick={cycleTheme}
    >
      <PaletteIcon className='h-5 w-5' aria-hidden='true' />
    </button>
  );
}

export { ThemeButton };
