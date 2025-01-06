import { LazyMotion, domAnimation } from 'motion/react';

function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export { MotionProvider };
