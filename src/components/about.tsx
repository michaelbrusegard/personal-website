import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../components/sectionWrapper';

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: any }) => (
  <Tilt className='pointer-events-auto w-full xs:w-[250px]' scale={1.1} transitionSpeed={450} tiltMaxAngleX={15} tiltMaxAngleY={15}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75) as Variants}
      className='w-full rounded-[20px] from-primary to-accent p-[2px] bg-gradient-90'
    >
      <div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-secondary px-12 py-5'>
        <Image src={icon} alt='web-development' className='h-16 w-16 object-contain' />

        <h3 className='text-center text-[20px] font-bold text-text'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant() as Variants}>
        <p className='section-subtitle'>Introduction</p>
        <h2 className='section-title'>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1) as Variants} className='pointer-events-auto mt-4 max-w-3xl text-[17px] leading-[30px] text-text'>
        I&apos;m a software developer with experience in Typescript, Javascript, Python and Java and I have worked with frameworks like Django, Next.js and
        Express.js. I&apos;m a quick learner and collaborate closely with clients and friends to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex select-none flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
