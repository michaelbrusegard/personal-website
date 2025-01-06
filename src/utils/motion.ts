function textVariant(delay?: number) {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
}

function foldOut(delay: number, duration: number) {
  return {
    hidden: {
      height: 0,
    },
    show: {
      height: 'auto',
      transition: {
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
}

function fadeIn(
  direction: string,
  type: string,
  delay: number,
  duration: number,
) {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
}

function slideIn(
  direction: string,
  type: string,
  delay: number,
  duration: number,
) {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
}

function appear(
  delay: number,
  duration: number,
  onAnimationComplete: () => void,
) {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        onComplete: onAnimationComplete,
      },
    },
  };
}

function staggerContainer(staggerChildren?: number, delayChildren?: number) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren ?? 0,
      },
    },
  };
}

export { textVariant, fadeIn, slideIn, appear, foldOut, staggerContainer };
