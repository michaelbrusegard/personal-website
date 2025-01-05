import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type WorkCardProps = {
  work: {
    date: string;
    companyName: string;
    title: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    points: string[];
  };
};

function WorkCard({ work }: WorkCardProps) {
  const Icon = work.Icon;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'hsl(var(--secondary))',
        color: 'hsl(var(--foreground))',
      }}
      contentArrowStyle={{ borderRight: '10px solid hsl(var(--secondary))' }}
      date={work.date}
      iconStyle={{ background: 'hsl(var(--accent))' }}
      icon={
        <Icon
          className='absolute !left-3 !top-3 !h-[60px] !w-[60px] rounded-full object-contain shadow-timeline-border'
          aria-hidden='true'
        />
      }
    >
      <div>
        <h3 className='text-[24px] font-bold'>{work.title}</h3>
        <p
          className='text-[16px] font-semibold opacity-75'
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
  );
}

export { WorkCard };
