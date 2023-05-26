import { Variants, motion } from 'framer-motion';
import { ComponentType } from 'react';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component: ComponentType, idName: string) => {
  const wrappedComponent = (props: any) => (
    <motion.section
      variants={staggerContainer() as Variants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      className='padding relative z-10 mx-auto max-w-7xl'
    >
      <span className='mt-[-100px] block select-none pt-[100px]' id={idName}>
        &nbsp;
      </span>
      <Component {...props} />
    </motion.section>
  );

  wrappedComponent.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`;

  return wrappedComponent;
};

export default SectionWrapper;
