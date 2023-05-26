import webGLFluidSimulation from 'webgl-fluid-simulation';

let hoverTimer: NodeJS.Timeout | null = null;
let isHovered = false;

function resetHoverTimer() {
  if (hoverTimer) {
    clearTimeout(hoverTimer);
  }

  hoverTimer = setTimeout(() => {
    if (!isHovered) {
      webGLFluidSimulation.config({
        BRIGHTNESS: 0.5,
      });
    }
  }, 1000);
}

export default function fluidHover(element: HTMLElement) {
  function handleMouseEnter() {
    isHovered = true;
    webGLFluidSimulation.config({
      BRIGHTNESS: 0.1,
    });
    resetHoverTimer();
  }

  function handleMouseLeave() {
    isHovered = false;
    resetHoverTimer();
  }

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  function cleanup() {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);

    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  }

  return cleanup;
}