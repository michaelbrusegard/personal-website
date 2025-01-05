import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';

function WorkCard({ experience }: { experience: any }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'hsl(var(--secondary))',
        color: 'hsl(var(--foreground))',
      }}
      contentArrowStyle={{ borderRight: '10px solid hsl(var(--secondary))' }}
      date={experience.date}
      iconStyle={{ background: 'hsl(var(--accent))' }}
      icon={
        <Image
          src={experience.icon}
          alt={experience.companyName}
          className='rounded-full object-contain shadow-timeline-border'
        />
      }
    >
      <div>
        <h3 className='text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[16px] font-semibold opacity-75'
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>
      <ul className='ml-5 mt-5 list-disc space-y-2'>
        {experience.points.map((point: string, index: number) => (
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
