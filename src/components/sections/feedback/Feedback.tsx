'use client';

import { m } from 'motion/react';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { textVariant } from '@/utils/motion';
import { testimonials } from '@/constants';
import { TestimonialCard } from '@/components/sections/feedback/TestimonialCard';

function FeedbackSection() {
  return (
    <div className='mt-12 rounded-[20px] bg-secondary'>
      <div className='min-h-[300px] rounded-2xl bg-gradient-to-b from-primary to-accent p-6 sm:p-11 md:bg-gradient-to-r md:p-16'>
        <m.div variants={textVariant()}>
          <p className='font-display text-[14px] uppercase tracking-wider text-foreground/75 sm:text-[18px]'>
            What others say
          </p>
          <h2 className='font-display text-[30px] font-black sm:text-[50px] md:text-[60px] xs:text-[40px]'>
            Testimonials.
          </h2>
        </m.div>
      </div>
      <div className='-mt-20 flex flex-wrap gap-7 px-6 pb-14 sm:px-11 md:px-16'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
}

const Feedback = SectionHOC(FeedbackSection, 'testimonials');

export { Feedback };
