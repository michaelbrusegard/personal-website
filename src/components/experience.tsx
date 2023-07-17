import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useState, useEffect } from 'react';
import { Variants, motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import SectionWrapper from '../components/sectionWrapper';
import { textVariant } from '../utils/motion';
import Image from 'next/image';

const ExperienceCard = ({ experience, currentColors }: { experience: any; currentColors: any }) => (
  <VerticalTimelineElement
    contentStyle={{ background: currentColors.secondaryColor, color: currentColors.textColor }}
    contentArrowStyle={{ borderRight: `7px solid var(--color-secondary)` }}
    date={experience.date}
    iconStyle={{ background: currentColors.accentColor }}
    icon={<Image src={experience.icon} alt={experience.companyName} className='rounded-full object-contain shadow-timeline-border' />}
  >
    <div>
      <h3 className='pointer-events-auto text-[24px] font-bold text-text'>{experience.title}</h3>
      <p className='pointer-events-auto text-[16px] font-semibold text-text opacity-75' style={{ margin: 0 }}>
        {experience.companyName}
      </p>
    </div>
    <ul className='pointer-events-auto ml-5 mt-5 list-disc space-y-2'>
      {experience.points.map((point: string, index: number) => (
        <li key={`experience-point-${index}`} className=' pl-1 text-[14px] tracking-wider text-text'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [currentColors, setCurrentColors] = useState({
    secondaryColor: '',
    textColor: '',
    accentColor: '',
  });

  const changeColors = () => {
    const root = getComputedStyle(document.documentElement);
    setCurrentColors({
      secondaryColor: root.getPropertyValue('--color-secondary'),
      textColor: root.getPropertyValue('--color-text'),
      accentColor: root.getPropertyValue('--color-accent'),
    });
  };

  useEffect(() => {
    changeColors();
    const observer = new MutationObserver(changeColors);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant() as Variants}>
        <p className='section-subtitle'>What I have done so far</p>
        <h2 className='section-title'>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor={currentColors.accentColor}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} currentColors={currentColors} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
