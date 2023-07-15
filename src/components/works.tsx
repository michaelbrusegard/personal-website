import Tilt from 'react-parallax-tilt';
import { Variants, motion } from 'framer-motion';
import SectionWrapper from '../components/sectionWrapper';
import { projects } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import Image, { StaticImageData } from 'next/image';

const ProjectCard = ({
  index,
  name,
  description,
  techstack,
  image,
  prodLink,
  srcLink,
}: {
  index: number;
  name: string;
  description: string;
  techstack: { name: string; icon: StaticImageData; link: string }[];
  image: StaticImageData;
  prodLink: string;
  srcLink: string;
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1) as Variants}>
      <Tilt
        className={`pointer-events-auto flex w-full max-w-[640px] flex-col rounded-2xl border-2 border-accent p-5 bg-gradient-45 lg:max-w-none ${
          (index + 1) % 2 === 0 ? 'from-background to-secondary lg:flex-row-reverse' : 'from-secondary to-background lg:flex-row'
        }`}
        scale={1.05}
        transitionSpeed={450}
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
      >
        <div
          className='relative h-80 w-full max-w-[576px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-card'
          tabIndex={0}
          onClick={() => window.open(prodLink, '_blank')}
        >
          <Image
            src={image}
            alt={name}
            className='h-auto w-full object-cover transition-transform duration-[2000ms] hover:-translate-y-[calc(100%-320px)] hover:duration-[8000ms]'
          />
        </div>

        <div className='px-2 py-5 text-center lg:px-5 lg:py-2'>
          <h3 className='text-[24px] font-bold text-text'>{name}</h3>
          <p className='mt-2 text-[17px] text-text opacity-75'>{description}</p>
          <div className='mt-4 flex flex-wrap justify-center gap-2'>
            {techstack.map((icon) => (
              <div
                key={icon.name}
                className='h-6 w-6 cursor-pointer transition-transform hover:scale-110'
                tabIndex={0}
                onClick={() => window.open(icon.link, '_blank')}
              >
                <Image src={icon.icon} alt={icon.name} className='object-contain' />
              </div>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant() as Variants}>
        <p className='section-subtitle'>My work</p>
        <h2 className='section-title'>Projects.</h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p variants={fadeIn('', '', 0.1, 1) as Variants} className='pointer-events-auto mt-3 max-w-3xl text-[17px] leading-[30px] text-text'>
          I have a collection of projects that effectively demonstrate my skills and experience, showcasing real-world examples of my work. Each project has
          live production links as well as GitHub repositories containing the source code. These projects serve as a testament to my proficiency in tackling
          intricate challenges, adeptness with diverse technologies, and ability to efficiently manage projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-col items-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
