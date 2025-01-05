import { m } from 'motion/react';
import { skills } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { SkillsCard } from '@/components/sections/about/SkillsCard';

function AboutSection() {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className='font-sf-pro-display text-[14px] uppercase tracking-wider opacity-75 sm:text-[18px]'>
          Introduction
        </p>
        <h2 className='font-sf-pro-display text-[30px] font-black sm:text-[50px] md:text-[60px] xs:text-[40px]'>
          Overview.
        </h2>
      </m.div>
      <m.p
        variants={fadeIn('', '', 0.1, 1)}
        className='section-text mt-4 max-w-3xl text-[17px] leading-[30px]'
      >
        I am currently most experienced in web development and prefer working as
        a full-stack developer for a complete understanding of the whole
        project. My primary expertise lise in the React ecosystem, but I have
        also worked with Angular, Django and Spring Boot. In native development,
        I am particularly enthusiastic about React Native and have implemented
        solutions building with Jetpack Compose for Android during my Bachelor's
        thesis. I also have experience accross major cloud platforms like AWS,
        Azure and GCP, but prefer using Virtual Private Servers where I have
        more control over the environment and the cost. I am always looking to
        improve my skills, and right now I am working on improving my algorithms
        programming and learning Rust. Addintionally I am looking into getting
        better at graphics programming and shader programming.
      </m.p>

      <div className='mt-20 flex select-none flex-wrap gap-10'>
        {skills.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </>
  );
}

const About = SectionHOC(AboutSection, 'about');

export { About };
