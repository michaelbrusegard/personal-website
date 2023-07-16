import { Transition } from 'framer-motion';

export const textVariant = (delay?: number): Transition => {
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
};

export const foldOut = (delay: number, duration: number): Transition => {
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
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number): Transition => {
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
};

export const slideIn = (direction: string, type: string, delay: number, duration: number): Transition => {
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
};

export const appear = (delay: number, duration: number, onAnimationComplete: () => void): Transition => {
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
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Transition => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
