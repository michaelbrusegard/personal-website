'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { m } from 'motion/react';
import { useEffect, useRef } from 'react';
import { positions } from '@/constants';
import { textVariant } from '@/utils/motion';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { WorkCard } from '@/components/sections/experience/WorkCard';
import { useSimulation } from '@/components/providers/SimulationProvider';

function ExperienceSection() {
  const { lowerBrightnessHover } = useSimulation();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current];
    elements.forEach((element) => {
      lowerBrightnessHover(element);
    });
  }, [lowerBrightnessHover]);
  return (
    <>
      <m.div variants={textVariant()}>
        <p
          className='font-sf-pro-display text-[14px] uppercase tracking-wider text-foreground/75 sm:text-[18px]'
          ref={subtitleRef}
        >
          What I have done so far
        </p>
        <h2
          className='font-sf-pro-display text-[30px] font-black sm:text-[50px] md:text-[60px] xs:text-[40px]'
          ref={titleRef}
        >
          Work Experience.
        </h2>
      </m.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='hsl(var(--accent))'>
          {positions.map((position, index) => (
            <WorkCard key={index} index={index} work={position} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

const Experience = SectionHOC(ExperienceSection, 'work');

export { Experience };
