import { m } from 'motion/react';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { slideIn } from '@/utils/motion';
import { DogCanvas } from '@/components/sections/contact/DogCanvas';

function ContactSection() {
  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <m.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] rounded-2xl bg-secondary p-8'
      >
        <p className='font-sf-pro-display text-[14px] uppercase tracking-wider text-foreground/75 sm:text-[18px]'>
          Get in touch
        </p>
        <h2 className='font-sf-pro-display text-[30px] font-black sm:text-[50px] md:text-[60px] xs:text-[40px]'>
          Contact.
        </h2>
        <form className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your name?"
              className='rounded-lg border-none bg-background px-6 py-4 font-medium placeholder:opacity-75'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Email</span>
            <input
              type='email'
              name='email'
              placeholder="What's your Email?"
              className='rounded-lg border-none bg-background px-6 py-4 font-medium placeholder:opacity-75'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              placeholder='What do you want to say?'
              className='resize-none rounded-lg border-none bg-background px-6 py-4 font-medium placeholder:opacity-75'
              required
            />
          </label>

          {/* <button */}
          {/*   type='submit' */}
          {/*   className={`w-fit select-none rounded-xl bg-primary px-8 py-3 font-semibold text-background transition-all duration-200 ${ */}
          {/*     loading */}
          {/*       ? 'pointer-events-none' */}
          {/*       : 'hover:-translate-y-1 hover:from-primary hover:to-accent hover:text-foreground hover:shadow-xl hover:shadow-primary hover:bg-gradient-30 focus-visible:-translate-y-1 focus-visible:from-primary focus-visible:to-accent focus-visible:text-foreground focus-visible:shadow-xl focus-visible:shadow-primary focus-visible:bg-gradient-30' */}
          {/*   }`} */}
          {/* > */}
          {/*   {loading ? 'Sending...' : 'Send Message'} */}
          {/* </button> */}
          {/* {feedbackMessage && ( */}
          {/*   <p */}
          {/*     className={`ml-1 font-semibold ${feedbackMessage === 'Email sent successfully' ? 'text-green-600' : 'text-red-600'}`} */}
          {/*   > */}
          {/*     {feedbackMessage} */}
          {/*   </p> */}
          {/* )} */}
        </form>
      </m.div>

      <m.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='h-[350px] md:h-[550px] xl:h-auto xl:w-[550px] xl:flex-1'
      >
        <DogCanvas />
      </m.div>
    </div>
  );
}

const WrappedContact = SectionHOC(ContactSection, 'contact');

function Contact() {
  return (
    <div className='relative z-0'>
      <WrappedContact />
    </div>
  );
}

export { Contact };
