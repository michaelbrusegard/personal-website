'use client';

import { Hero } from '@/components/sections/hero/Hero';
import { About } from '@/components/sections/about/About';
import Experience from '../components/experience';
import Works from '../components/works';
import Feedbacks from '../components/feedbacks';
import Contact from '../components/contact';
import StarsCanvas from '../components/stars';
import Foot from '../components/foot';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Works />
      <Feedbacks />
      {/* <div className='relative z-0'> */}
      {/*   <Contact /> */}
      {/*   <StarsCanvas /> */}
      {/* </div> */}
    </>
  );
}
