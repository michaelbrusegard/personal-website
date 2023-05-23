export default function isDarkColorScheme(): boolean {
  let darkScheme = false;

  if (typeof window !== 'undefined') {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      darkScheme = true;
    }
  }

  const currentTime = new Date();
  const hour = currentTime.getHours();

  if (hour >= 18 || hour < 6) {
    darkScheme = true;
  }

  return darkScheme;
}
