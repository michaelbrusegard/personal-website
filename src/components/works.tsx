import Tilt from 'react-parallax-tilt';
import { Variants, motion } from 'framer-motion';
import github from '../../public/icons/links/github.svg';
import link from '../../public/icons/links/link.svg';
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
  techstack: StaticImageData[];
  image: StaticImageData;
  prodLink: string;
  srcLink: string;
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1) as Variants}>
      <Tilt
        className='pointer-events-auto w-full rounded-2xl from-accent to-primary p-5 bg-gradient-45 sm:w-[360px]'
        scale={1.05}
        transitionSpeed={450}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
      >
        <div className='relative h-[230px] w-full'>
          <Image src={image} alt={name} className='h-full w-full rounded-2xl object-cover ' />
          <div className='absolute inset-0 m-2 flex justify-end'>
            <div
              onClick={() => window.open(prodLink, '_blank')}
              className='m-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#434343] to-black transition-transform hover:scale-110 hover:bg-primary hover:bg-none'
            >
              <Image src={link} alt='link' className='object-contain' />
            </div>
            <div
              onClick={() => window.open(srcLink, '_blank')}
              className='m-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#434343] to-black transition-transform hover:scale-110 hover:bg-primary hover:bg-none'
            >
              <Image src={github} alt='github' className='object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[24px] font-bold text-text'>{name}</h3>
          <p className='mt-2 text-[14px] text-text opacity-75'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {techstack.map((icon, i) => (
            <div key={`tech-icon-${i}`} className='h-6 w-6'>
              <Image src={icon} alt={icon.toString()} className='object-contain' />
            </div>
          ))}
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
          I have a collection of projects that effectively demonstrate my skills and experience, showcasing real-world examples of my work. Each project is
          accompanied by a concise description and provides live production links as well as GitHub repositories containing the source code. These projects
          serve as a testament to my proficiency in tackling intricate challenges, adeptness with diverse technologies, and ability to efficiently manage
          projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
