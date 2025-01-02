'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
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
  );
}

export { ThemeProvider };
