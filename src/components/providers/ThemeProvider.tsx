'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      themes={[
        'light',
        'dark',
        'light-pink',
        'dark-pink',
        'light-youtube',
        'dark-youtube',
        'light-chatgpt',
        'dark-chatgpt',
        'light-slack',
        'dark-slack',
        'light-green',
        'dark-green',
        'light-blue',
        'dark-blue',
        'light-red',
        'dark-red',
      ]}
      themeColor={{
        light: 'hsl(0 0% 100%)',
        dark: 'hsl(0 0% 0%)',
      }}
    >
      {children}
    </NextThemeProvider>
  );
}

export { ThemeProvider };
