import colors from '../utils/colors';
import fluidHover from '../utils/fluidHover';

function bounce(letter: HTMLElement) {
  if (!letter.classList.contains('letterBounce')) {
    letter.classList.add('letterBounce');
    if (letter.classList.contains('gradient-letter')) {
      letter.style.color = colors.accentColor;
    }
    fluidHover(letter);
    setTimeout(function () {
      letter.classList.remove('letterBounce');
      if (letter.classList.contains('gradient-letter')) {
        letter.style.color = 'transparent';
      }
    }, 1000);
  }
}

export default function setupAnimation(selector: string): () => void {
  const handleMouseOver = (e: MouseEvent) => bounce(e.target as HTMLElement);
  const letters = document.querySelectorAll<HTMLElement>(selector);
  letters.forEach((element) => {
    element.addEventListener('mouseover', handleMouseOver);
  });

  return function cleanup() {
    letters.forEach((element) => {
      element.removeEventListener('mouseover', handleMouseOver);
    });
  };
}

export { bounce };
