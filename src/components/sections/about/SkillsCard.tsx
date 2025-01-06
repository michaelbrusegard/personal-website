import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { m } from 'motion/react';
import { fadeIn } from '@/utils/motion';

type SkillsCardProps = {
  index: number;
  title: string;
  tech: {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    link: string;
  }[];
};

function SkillsCard({ index, title, tech }: SkillsCardProps) {
  return (
    <Tilt
      className='w-full xs:w-[250px]'
      scale={1.1}
      transitionSpeed={450}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
    >
      <m.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full rounded-[20px] from-primary to-accent p-[2px] bg-gradient-90'
      >
        <h3 className='text-center font-sf-mono text-[20px] font-bold'>
          {title}
        </h3>
        <div className='flex min-h-[280px] flex-col justify-evenly rounded-[20px] bg-secondary px-8 py-3'>
          {tech.map(({ name, link, Icon }) => (
            <Link
              key={name}
              className='flex items-center rounded-md outline-2 outline-offset-2 outline-primary/60 transition-transform hover:scale-110 focus-visible:outline'
              target='_blank'
              rel='noreferrer'
              href={link}
              aria-label={`Open link to ${name}`}
            >
              <Icon className='h-6 w-6' aria-hidden='true' />
              <span className='ml-2 py-1 font-sf-mono text-sm font-medium'>
                {name}
              </span>
            </Link>
          ))}
        </div>
      </m.div>
    </Tilt>
  );
}

export { SkillsCard };
