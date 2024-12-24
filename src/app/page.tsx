'use client';
import { useEffect } from 'react';
import Hero from '../components/hero';
import { updateColors } from '../utils/colors';
import About from '../components/about';
import Experience from '../components/experience';
import Works from '../components/works';
import Feedbacks from '../components/feedbacks';
import Contact from '../components/contact';
import StarsCanvas from '../components/stars';
import Foot from '../components/foot';

function Page() {
  useEffect(() => {
    updateColors();
  }, []);
  return (
    <>
      <div className='pointer-events-none h-screen-small w-full'>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        {/* <div className='relative z-0'> */}
        {/*   <Contact /> */}
        {/*   <StarsCanvas /> */}
        {/* </div> */}
        <Foot />
      </div>
    </>
  );
}

export default Page;
