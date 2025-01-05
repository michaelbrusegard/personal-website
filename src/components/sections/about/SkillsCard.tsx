import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { m } from 'motion/react';
import { fadeIn } from '@/utils/motion';

function SkillsCard({
  index,
  title,
  icons,
}: {
  index: number;
  title: string;
  icons: any;
}) {
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
        <h3 className='font-mono text-center text-[20px] font-bold'>{title}</h3>
        <div className='flex min-h-[280px] flex-col justify-evenly rounded-[20px] bg-secondary px-8 py-5'>
          {icons.map((icon: any) => (
            <div
              key={icon.name}
              onClick={() => window.open(icon.link, '_blank')}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  window.open(icon.link, '_blank');
                }
              }}
              className='flex cursor-pointer items-center transition-transform hover:scale-110 focus-visible:scale-110'
              tabIndex={0}
            >
              <Image className='h-6 w-6' src={icon.icon} alt={icon.name} />
              <span className='font-mono ml-2 py-1 text-sm font-medium'>
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      </m.div>
    </Tilt>
  );
}

export { SkillsCard };
