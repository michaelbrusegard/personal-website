'use client';

import { Hero } from '@/components/sections/hero/Hero';
import { About } from '@/components/sections/about/About';
import { Experience } from '@/components/sections/experience/Experience';
import { Work } from '@/components/sections/work/Work';
import { Feedback } from '@/components/sections/feedback/Feedback';
import { Contact } from '@/components/sections/contact/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Feedback />
      <Contact />
    </>
  );
}
