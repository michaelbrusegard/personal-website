import { Variants, motion } from 'motion/react';
import SectionWrapper from './sectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants/index';
import Image, { StaticImageData } from 'next/image';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  image,
  phone,
  mail,
}: {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  image: StaticImageData;
  phone: string;
  mail: string;
}) => (
  <motion.div variants={fadeIn('down', 'spring', index * 0.5, 0.75) as Variants} className='relative rounded-3xl bg-foreground p-10 shadow-card xs:w-[320px]'>
    <div className='absolute right-10 top-10 flex justify-end'>
      <div
        onClick={() => (window.location.href = `tel:${phone}`)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            window.location.href = `tel:${phone}`;
          }
        }}
        className='m-1 flex h-7 w-7 cursor-pointer items-center justify-center text-background transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary hover:opacity-100 focus:-translate-y-[2px] focus:text-primary focus:opacity-100'
        tabIndex={0}
      >
        <svg width='100%' height='100%' viewBox='0 0 256 256' className='object-contain text-current opacity-80'>
          <g transform='matrix(1,0,0,1,12.125,2.9375)'>
            <path
              d='M63.5,177.125C99.625,213.25 143.5,241.125 179.375,241.125C195.5,241.125 209.625,235.5 221,223C227.625,215.625 231.75,207 231.75,198.5C231.75,192.25 229.375,186.25 223.5,182L185.125,154.75C179.25,150.75 174.375,148.75 169.875,148.75C164.25,148.75 159.125,152 153.375,157.625L144.5,166.375C143.125,167.75 141.375,168.375 139.75,168.375C137.875,168.375 136,167.625 134.75,167C127,162.875 113.75,151.5 101.375,139.25C89.125,127 77.75,113.75 73.75,106C73.125,104.625 72.375,102.875 72.375,101C72.375,99.375 72.875,97.75 74.25,96.375L83.125,87.25C88.625,81.5 92,76.5 92,70.75C92,66.25 89.875,61.375 85.75,55.5L58.875,17.625C54.5,11.625 48.375,9 41.625,9C33.375,9 24.875,12.75 17.5,19.875C5.375,31.5 0,45.875 0,61.75C0,97.625 27.375,141.125 63.5,177.125Z'
              fill='currentColor'
            />
          </g>
        </svg>
      </div>
      <div
        onClick={() => (window.location.href = `mailto:${mail}`)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            window.location.href = `mailto:${mail}`;
          }
        }}
        className='m-1 flex h-7 w-7 cursor-pointer items-center justify-center text-background transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary hover:opacity-100 focus:-translate-y-[2px] focus:text-primary focus:opacity-100'
        tabIndex={0}
      >
        <svg width='100%' height='100%' viewBox='0 0 256 256' className='object-contain text-current opacity-80'>
          <g transform='matrix(0.927536,0,0,0.986509,0,21.5187)'>
            <path
              d='M138.25,122.375C143.375,122.375 148.125,120 153.625,114.5L262.375,6.875C257.75,2.375 249.125,0.25 236.75,0.25L35.5,0.25C25,0.25 17.625,2.25 13.5,6.375L122.875,114.5C128.25,119.875 133,122.375 138.25,122.375ZM3.125,195.5L91.5,108.125L2.875,20.75C1,24.25 0,30.25 0,38.875L0,176.875C0,185.75 1,192 3.125,195.5ZM39.25,215.625L240.5,215.625C251,215.625 258.25,213.625 262.375,209.625L172.25,120.375L164,128.75C155.375,137 147.25,140.75 138.25,140.75C129.125,140.75 121,137 112.5,128.75L104.125,120.375L14.25,209.5C19,213.625 27.25,215.625 39.25,215.625ZM273,195.375C275,191.75 276,185.625 276,176.875L276,38.875C276,30.5 275,24.5 273.25,21.125L184.875,108.125L273,195.375Z'
              fill='currentColor'
            />
          </g>
        </svg>
      </div>
    </div>

    <p className='text-[48px] font-black text-background'>&quot;</p>

    <div className='mt-1'>
      <p className='text-[18px] tracking-wider text-background'>{testimonial}</p>

      <div className='mt-7 flex items-center justify-between gap-1'>
        <div className='flex flex-1 flex-col'>
          <p className='text-[16px] font-medium text-background'>
            <span className='text-accent'>@</span> {name}
          </p>
          <p className='mt-1 text-[12px] text-background opacity-75'>{designation}</p>
        </div>

        <Image src={image} alt={`Feedback by ${name}`} className='h-10 w-10 rounded-full object-cover' />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='pointer-events-auto mt-12 rounded-[20px] bg-secondary'>
      <div className='padding min-h-[300px] rounded-2xl bg-gradient-to-b from-primary to-accent md:bg-gradient-to-r'>
        <motion.div variants={textVariant() as Variants}>
          <p className='section-subtitle'>What others say</p>
          <h2 className='section-title pointer-events-none'>Testimonials.</h2>
        </motion.div>
      </div>
      <div className='paddingX -mt-20 flex flex-wrap gap-7 pb-14'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
