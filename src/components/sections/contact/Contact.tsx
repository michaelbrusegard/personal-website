'use client';

import { m } from 'motion/react';
import { sendEmail } from '@/actions/sendEmail';
import { SectionHOC } from '@/components/layout/SectionHOC';
import { useFormState } from 'react-dom';
import { slideIn } from '@/utils/motion';
import { DogCanvas } from '@/components/sections/contact/DogCanvas';
import { StarsCanvas } from '@/components/sections/contact/StarsCanvas';
import { SubmitButton } from '@/components/sections/contact/SubmitButton';

function ContactSection() {
  const [state, formAction] = useFormState(sendEmail, null);
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
        <form className='mt-12 flex flex-col gap-8' action={formAction}>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your name?"
              className='rounded-lg border-none bg-background px-6 py-4 font-medium outline-2 outline-offset-2 outline-primary/60 placeholder:opacity-75 focus-visible:outline'
              minLength={2}
              maxLength={100}
              pattern="/^[a-zA-Z\s-']+$/"
              required
              title='Only letters, spaces, hyphens, and apostrophes are allowed'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Email</span>
            <input
              type='email'
              name='email'
              placeholder="What's your Email?"
              className='rounded-lg border-none bg-background px-6 py-4 font-medium outline-2 outline-offset-2 outline-primary/60 placeholder:opacity-75 focus-visible:outline'
              pattern='/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/'
              required
              title='Please enter a valid email address'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              minLength={50}
              maxLength={5000}
              placeholder='What do you want to say?'
              className='resize-none rounded-lg border-none bg-background px-6 py-4 font-medium outline-2 outline-offset-2 outline-primary/60 placeholder:opacity-75 focus-visible:outline'
              required
              title='Message must be at least 50 characters long and no more than 5000 characters'
            />
          </label>
          <SubmitButton />
          {state && (
            <p
              className={`ml-1 font-semibold ${
                state.success ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </m.div>
      <m.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='h-[350px] md:h-[550px] xl:h-auto xl:w-[550px] xl:flex-1'
      >
        {/* <DogCanvas /> */}
      </m.div>
    </div>
  );
}

const WrappedContact = SectionHOC(ContactSection, 'contact');

function Contact() {
  return (
    <div className='relative z-0'>
      <WrappedContact />
      <StarsCanvas />
    </div>
  );
}

export { Contact };
