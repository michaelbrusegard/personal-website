import { m } from 'motion/react';
import { ComponentType, PropsWithoutRef } from 'react';
import { staggerContainer } from '@/utils/motion';

function SectionHOC<T extends object>(Component: ComponentType<T>, id: string) {
  function Wrapper(props: PropsWithoutRef<T>) {
    return (
      <m.section
        id={id}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
        className='relative z-10 mx-auto max-w-7xl scroll-mt-24 p-6 sm:p-11 md:p-16'
      >
        <Component {...(props as T)} />
      </m.section>
    );
  }

  Wrapper.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapper;
}

export { SectionHOC };