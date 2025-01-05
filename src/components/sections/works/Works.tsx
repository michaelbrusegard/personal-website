import { m } from 'motion/react';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { projects } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import { ProjectCard } from '@/components/sections/works/ProjectCard';

function WorksSection() {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className='font-sf-pro-display text-[14px] uppercase tracking-wider text-foreground/75 sm:text-[18px]'>
          My work
        </p>
        <h2 className='font-sf-pro-display text-[30px] font-black sm:text-[50px] md:text-[60px] xs:text-[40px]'>
          Projects.
        </h2>
      </m.div>

      <div className='flex w-full'>
        <m.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 max-w-3xl text-[17px] leading-[30px]'
        >
          I have a collection of projects that effectively demonstrate my skills
          and experience, showcasing real-world examples of my work. Each
          project has live production links as well as repositories containing
          the source code. These projects serve as a testament to my proficiency
          in tackling different challenges, adeptness with diverse technologies,
          and ability to efficiently manage projects.
        </m.p>
      </div>

      <div className='mt-20 flex flex-col items-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

const Works = SectionHOC(WorksSection, 'projects');

export { Works };
