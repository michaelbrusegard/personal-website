import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../components/sectionWrapper';

const ServiceCard = ({ index, title, icons }: { index: number; title: string; icons: any }) => (
  <Tilt className='pointer-events-auto w-full xs:w-[250px]' scale={1.1} transitionSpeed={450} tiltMaxAngleX={15} tiltMaxAngleY={15}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75) as Variants}
      className='w-full rounded-[20px] from-primary to-accent p-[2px] bg-gradient-90'
    >
      <h3 className='text-center font-mono text-[20px] font-bold text-text'>{title}</h3>
      <div className='flex min-h-[280px] flex-col justify-evenly rounded-[20px] bg-secondary px-8 py-5'>
        {icons.map((icon: any) => (
          <div
            key={icon.name}
            onClick={() => window.open(icon.link, '_blank')}
            className='flex cursor-pointer items-center transition-transform hover:scale-110'
          >
            <Image className='h-6 w-6' src={icon.icon} alt={icon.name} />
            <span className='ml-2 py-1 font-mono text-sm font-medium text-text'>{icon.name}</span>
          </div>
        ))}
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
        As a junior software developer, I bring a strong foundation in TypeScript, JavaScript, Python, and Java. Throughout my journey, I&apos;ve worked with
        frameworks like Django, Next.js, and Express.js. I&apos;m a quick learner, I thrive on collaboration and enjoy creating efficient, scalable, and
        user-friendly solutions to tackle real-world problems. I&apos;m eager to work together and contribute my skills to bring your ideas to life. Feel free
        to reach out and let&apos;s explore how we can create something great together!
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
