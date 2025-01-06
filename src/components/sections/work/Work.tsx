import { m } from 'motion/react';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { projects } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import { ProjectCard } from '@/components/sections/work/ProjectCard';

function WorkSection() {
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
          These are some on the noteable projects I have worked on. The rest can
          be found on my GitHub profile. Click to see them live or view the
          source code. It is interesting to see how my skills have improved over
          time for each project.
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

const Work = SectionHOC(WorkSection, 'projects');

export { Work };
