import { Variants, motion } from 'framer-motion';
import { ComponentType } from 'react';
import { staggerContainer } from '../utils/motion';
import { useEffect } from 'react';
import fluidHover from '../utils/fluidHover';

const SectionWrapper = (Component: ComponentType, idName: string) => {
  const WrappedComponent = (props: any) => {
    useEffect(() => {
      const sectionTitles = document.querySelectorAll('.section-title') as NodeListOf<HTMLElement>;
      const sectionTexts = document.querySelectorAll('.section-text') as NodeListOf<HTMLElement>;

      sectionTitles.forEach((sectionTitle) => {
        fluidHover(sectionTitle);
      });

      sectionTexts.forEach((sectionText) => {
        fluidHover(sectionText);
      });
    }, []);
    return (
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
  };

  WrappedComponent.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

export default SectionWrapper;
