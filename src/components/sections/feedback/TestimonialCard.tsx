import { m } from 'motion/react';
import { fadeIn } from '@/utils/motion';
import Image, { StaticImageData } from 'next/image';

type TestimonialCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  imageSrc: StaticImageData;
};

function TestimonialCard({
  index,
  testimonial,
  name,
  designation,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <m.div
      variants={fadeIn('down', 'spring', index * 0.5, 0.75)}
      className='relative rounded-3xl bg-foreground p-10 shadow-card xs:w-[320px]'
    >
      <p className='text-[48px] font-black text-background' aria-hidden='true'>
        &quot;
      </p>
      <div className='mt-1'>
        <p className='text-[18px] tracking-normal text-background'>
          {testimonial}
        </p>
        <div className='mt-7 flex items-center justify-between gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-[16px] font-medium text-background'>
              <span className='text-accent'>@</span> {name}
            </p>
            <p className='mt-1 text-[12px] text-background opacity-75'>
              {designation}
            </p>
          </div>
          <Image
            src={imageSrc}
            alt={`Feedback by ${name}`}
            className='rounded-full object-cover'
            width={40}
            height={40}
          />
        </div>
      </div>
    </m.div>
  );
}

export { TestimonialCard };
