'use client';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useInView } from 'react-intersection-observer';

type WorkCardProps = {
  index: number;
  work: {
    date: string;
    companyName: string;
    title: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    points: string[];
  };
};

function WorkCard({ index, work }: WorkCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const Icon = work.Icon;
  return (
    <div ref={ref} className='my-4'>
      <VerticalTimelineElement
        position={index % 2 === 0 ? 'left' : 'right'}
        visible={inView}
        contentStyle={{
          background: 'hsl(var(--secondary))',
          color: 'hsl(var(--foreground))',
        }}
        contentArrowStyle={{ borderRight: '10px solid hsl(var(--secondary))' }}
        date={work.date}
        iconStyle={{ background: 'hsl(var(--accent))' }}
        icon={
          <Icon
            className='absolute !left-3 !top-3 !h-[40px] !w-[40px] rounded-full object-contain shadow-timeline-border timeline:!h-[60px] timeline:!w-[60px]'
            aria-hidden='true'
          />
        }
      >
        <div>
          <h3 className='font-sf-pro-display text-[24px] font-bold'>
            {work.title}
          </h3>
          <p
            className='text-[16px] font-semibold text-foreground/75'
            style={{ margin: 0 }}
          >
            {work.companyName}
          </p>
        </div>
        <ul className='ml-5 mt-5 list-disc space-y-2'>
          {work.points.map((point: string, index: number) => (
            <li
              key={`experience-point-${index}`}
              className='pl-1 text-[14px] tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
}

export { WorkCard };
