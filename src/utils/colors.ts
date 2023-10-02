import webGLFluidEnhanced from 'webgl-fluid-enhanced';
interface Color {
  textColor: string;
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

interface Palette {
  [key: string]: Color;
}

const palettes: Palette[] = [
  {
    light: {
      textColor: '#000000',
      backgroundColor: '#FFFFFF',
      primaryColor: '#4685FF',
      secondaryColor: '#F2F2F2',
      accentColor: '#FFB084',
    },
    dark: {
      textColor: '#FFFFFF',
      backgroundColor: '#000000',
      primaryColor: '#4685FF',
      secondaryColor: '#1A1A1A',
      accentColor: '#FFB084',
    },
  },
  {
    light: {
      textColor: '#050505',
      backgroundColor: '#FAFAFA',
      primaryColor: '#8FB3FF',
      secondaryColor: '#EBF1FF',
      accentColor: '#D41D6D',
    },
    dark: {
      textColor: '#FAFAFA',
      backgroundColor: '#050505',
      primaryColor: '#8FB3FF',
      secondaryColor: '#000F33',
      accentColor: '#ED78AB',
    },
  },
  {
    light: {
      textColor: '#050505',
      backgroundColor: '#FAFAFA',
      primaryColor: '#cbc7c3',
      secondaryColor: '#E6E6E6',
      accentColor: '#FF0000',
    },
    dark: {
      textColor: '#FAFAFA',
      backgroundColor: '#050505',
      primaryColor: '#cbc7c3',
      secondaryColor: '#272727',
      accentColor: '#FF0000',
    },
  },
  {
    light: {
      textColor: '#000000',
      backgroundColor: '#FFFFFF',
      primaryColor: '#FF8BFF',
      secondaryColor: '#E9FFE8',
      accentColor: '#52B14E',
    },
    dark: {
      textColor: '#FFFFFF',
      backgroundColor: '#000000',
      primaryColor: '#FF8BFF',
      secondaryColor: '#193718',
      accentColor: '#E9FFE8',
    },
  },
  {
    light: {
      textColor: '#1D1C1D',
      backgroundColor: '#FFFFFF',
      primaryColor: '#683371',
      secondaryColor: '#F4EDE4',
      accentColor: '#ECB22E',
    },
    dark: {
      textColor: '#FFFFFF',
      backgroundColor: '#1D1C1D',
      primaryColor: '#683371',
      secondaryColor: '#241B0F',
      accentColor: '#ECB22E',
    },
  },
  {
    light: {
      textColor: '#131417',
      backgroundColor: '#FFFFFF',
      primaryColor: '#47CF73',
      secondaryColor: '#E2E4E9',
      accentColor: '#E4D944',
    },
    dark: {
      textColor: '#FFFFFF',
      backgroundColor: '#131417',
      primaryColor: '#47CF73',
      secondaryColor: '#2C303A',
      accentColor: '#E4D944',
    },
  },
  {
    light: {
      textColor: '#161315',
      backgroundColor: '#F1EEF0',
      primaryColor: '#95D8F9',
      secondaryColor: '#D3D9D8',
      accentColor: '#6B7967',
    },
    dark: {
      textColor: '#F1EEF0',
      backgroundColor: '#161315',
      primaryColor: '#95D8F9',
      secondaryColor: '#181B1B',
      accentColor: '#AFB9AC',
    },
  },
  {
    light: {
      textColor: '#130111',
      backgroundColor: '#FEE7FB',
      primaryColor: '#B40847',
      secondaryColor: '#FCD4CF',
      accentColor: '#F42A0B',
    },
    dark: {
      textColor: '#FEE7FB',
      backgroundColor: '#130111',
      primaryColor: '#B40847',
      secondaryColor: '#360903',
      accentColor: '#F42F10',
    },
  },
];

const colorsUpdateEvent = new Event('colorsUpdated');

function isDarkVariant(): boolean {
  return currentVariant === 'dark';
}

function changeVariant() {
  if (currentVariant === 'light') {
    currentVariant = 'dark';
  } else {
    currentVariant = 'light';
  }

  localStorage.setItem('variant', currentVariant);
  updateColors();
}

function changePalette() {
  if (currentPaletteIndex === palettes.length - 1) {
    currentPaletteIndex = 0;
  } else {
    currentPaletteIndex += 1;
  }

  localStorage.setItem('colorPalette', String(currentPaletteIndex));
  updateColors();
}

function updateColors(): void {
  colors = palettes[currentPaletteIndex][currentVariant];

  const root = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty('--color-text', colors.textColor);
  document.documentElement.style.setProperty('--color-background', colors.backgroundColor);
  document.documentElement.style.setProperty('--color-primary', colors.primaryColor);
  document.documentElement.style.setProperty('--color-secondary', colors.secondaryColor);
  document.documentElement.style.setProperty('--color-accent', colors.accentColor);

  window.dispatchEvent(colorsUpdateEvent);

  webGLFluidEnhanced.config({
    COLOR_PALETTE: [root.getPropertyValue('--color-primary'), root.getPropertyValue('--color-secondary'), root.getPropertyValue('--color-accent')],
    BACK_COLOR: root.getPropertyValue('--color-background'),
  });
}

let storedPalette;
let storedVariant;

if (typeof window !== 'undefined') {
  storedPalette = localStorage.getItem('colorPalette');
  storedVariant = localStorage.getItem('variant');
}

let currentPaletteIndex = storedPalette ? parseInt(storedPalette) : 0;
let currentVariant = storedVariant || 'light';

let colors = palettes[currentPaletteIndex][currentVariant];

export { colors as default, updateColors, isDarkVariant, changeVariant, changePalette };
