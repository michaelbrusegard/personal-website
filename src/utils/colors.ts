import webGLFluidSimulation from 'webgl-fluid-simulation';
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
];

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

  webGLFluidSimulation.config({
    COLOR_PALETTE: [root.getPropertyValue('--color-primary'), root.getPropertyValue('--color-secondary'), root.getPropertyValue('--color-accent')],
    BACK_COLOR: root.getPropertyValue('--color-background'),
  });
}

let storedPalette = localStorage.getItem('colorPalette');
let storedVariant = localStorage.getItem('variant');

let currentPaletteIndex = storedPalette ? parseInt(storedPalette) : 0;
let currentVariant = storedVariant || 'light';

let colors = palettes[currentPaletteIndex][currentVariant];

export { colors as default, updateColors, isDarkVariant, changeVariant, changePalette };
