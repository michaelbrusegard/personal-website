import biltema from '../../public/icons/companies/biltema.svg';
import hydro from '../../public/icons/companies/hydro.svg';

import hackerspace from '../../public/icons/companies/hackerspace.svg';
import niclasNordlundPhotography from '../../public/icons/companies/niclasNordlundPhotography.svg';
import niclasWebsitePhoto from '../../public/photos/projects/niclasnordlund.jpg';
import webGLFluidEnhancedWebsitePhoto from '../../public/photos/projects/webgl-fluid-enhanced.jpg';
import hackerspaceWebsitePhoto from '../../public/photos/projects/hackerspace-ntnu.jpg';

import niclasNordlund from '../../public/photos/people/niclasNordlund.jpg';
import carlJohanGuzkow from '../../public/photos/people/carlJohanGuzkow.jpg';

import html from '../../public/icons/tech/frontend/html.svg';
import css from '../../public/icons/tech/frontend/css.svg';
import tailwindcss from '../../public/icons/tech/frontend/tailwindcss.svg';
import javascript from '../../public/icons/tech/frontend/javascript.svg';
import typescript from '../../public/icons/tech/frontend/typescript.svg';
import react from '../../public/icons/tech/frontend/react.svg';
import framermotion from '../../public/icons/tech/frontend/framermotion.svg';
import threejs from '../../public/icons/tech/frontend/threejs.svg';
import nodejs from '../../public/icons/tech/backend/nodejs.svg';
import python from '../../public/icons/tech/backend/python.svg';
import java from '../../public/icons/tech/backend/java.svg';
import express from '../../public/icons/tech/backend/express.svg';
import django from '../../public/icons/tech/backend/django.svg';
import nextjs from '../../public/icons/tech/backend/nextjs.svg';
import googlecloudplatform from '../../public/icons/tech/integrations/googlecloudplatform.svg';
import firebase from '../../public/icons/tech/integrations/firebase.svg';
import github from '../../public/icons/tech/integrations/github.svg';
import stripe from '../../public/icons/tech/integrations/stripe.svg';
import git from '../../public/icons/tech/tools/git.svg';
import nodepackagemanager from '../../public/icons/tech/tools/nodepackagemanager.svg';
import vite from '../../public/icons/tech/tools/vite.svg';
import linux from '../../public/icons/tech/tools/linux.svg';
import vscode from '../../public/icons/tech/tools/vscode.svg';
import chatgpt from '../../public/icons/tech/tools/chatgpt.svg';
import figma from '../../public/icons/tech/design/figma.svg';
import affinityphoto from '../../public/icons/tech/design/affinityphoto.svg';
import affinitydesigner from '../../public/icons/tech/design/affinitydesigner.svg';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services = [
  {
    title: 'FRONTEND',
    icons: [
      {
        name: 'HTML',
        icon: html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        icon: css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindcss,
        link: 'https://tailwindcss.com/',
      },
      {
        name: 'JavaScript',
        icon: javascript,
        link: 'https://developer.mozilla.org/docs/Web/javascript/',
      },
      {
        name: 'TypeScript',
        icon: typescript,
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'React',
        icon: react,
        link: 'https://react.dev/',
      },
      {
        name: 'Framer Motion',
        icon: framermotion,
        link: 'https://www.framer.com/motion/',
      },
      {
        name: 'Three.js',
        icon: threejs,
        link: 'https://threejs.org/',
      },
    ],
  },
  {
    title: 'BACKEND',
    icons: [
      {
        name: 'Node.js',
        icon: nodejs,
        link: 'https://nodejs.org/',
      },
      {
        name: 'Python',
        icon: python,
        link: 'https://www.python.org/',
      },
      {
        name: 'Java',
        icon: java,
        link: 'https://www.java.com/',
      },
      {
        name: 'Express',
        icon: express,
        link: 'https://expressjs.com/',
      },
      {
        name: 'Django',
        icon: django,
        link: 'https://www.djangoproject.com/',
      },
      {
        name: 'Next.js',
        icon: nextjs,
        link: 'https://nextjs.org/',
      },
    ],
  },
  {
    title: 'INTEGRATIONS',
    icons: [
      {
        name: 'Google Cloud Platform',
        icon: googlecloudplatform,
        link: 'https://cloud.google.com/',
      },
      {
        name: 'Firebase',
        icon: firebase,
        link: 'https://firebase.google.com/',
      },
      {
        name: 'GitHub CI/CD and DevOps',
        icon: github,
        link: 'https://docs.github.com/',
      },
      {
        name: 'Stripe',
        icon: stripe,
        link: 'https://stripe.com/',
      },
    ],
  },
  {
    title: 'TOOLS',
    icons: [
      {
        name: 'Git',
        icon: git,
        link: 'https://git-scm.com/',
      },
      {
        name: 'Node Package Manager',
        icon: nodepackagemanager,
        link: 'https://www.npmjs.com/',
      },
      {
        name: 'Vite',
        icon: vite,
        link: 'https://vitejs.dev/',
      },
      {
        name: 'Linux',
        icon: linux,
        link: 'https://www.linux.org/',
      },
      {
        name: 'Visual Studio Code',
        icon: vscode,
        link: 'https://code.visualstudio.com/',
      },
      {
        name: 'ChatGPT',
        icon: chatgpt,
        link: 'https://openai.com/blog/chatgpt/',
      },
    ],
  },
  {
    title: 'DESIGN',
    icons: [
      {
        name: 'Figma',
        icon: figma,
        link: 'https://www.figma.com/',
      },
      {
        name: 'Affinity Photo',
        icon: affinityphoto,
        link: 'https://affinity.serif.com/photo/',
      },
      {
        name: 'Affinity Designer',
        icon: affinitydesigner,
        link: 'https://affinity.serif.com/designer/',
      },
    ],
  },
];

export const experiences = [
  {
    title: 'DevOps Engineer',
    companyName: 'Hackerspace NTNU',
    icon: hackerspace,
    date: 'Feb 2023 - Present',
    points: [
      'Designing and managing web applications utilising JavaScript, Django, and other relevant technologies.',
      'Collaborating closely in the DevOps team while fostering a culture of constructive feedback and continuous improvement.',
      'Actively exploring and incorporating new features to enhance user experience.',
      'Creating a typescript game  for the 404 error page.',
    ],
  },
  {
    title: 'Full stack Developer',
    companyName: 'Niclas Nordlund Photography',
    icon: niclasNordlundPhotography,
    date: 'Oct 2022 - Present (Currently maintaining)',
    points: [
      'Developing and maintaining a professional personal website for photographer Niclas Nordlund.',
      'Scaleable backend for photo storage using Google Cloud and payments using Stripe.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Ensuring a seamless and user-friendly photo uploading and downloading experience for Niclas on the website.',
    ],
  },
  {
    title: 'Logistics summer substitute',
    companyName: 'Hydro Aluminium',
    icon: hydro,
    date: 'Jun 2022 - Aug 2023',
    points: [
      'Forklift driving for the relocation of anodes on cargo bins, general cleanup and sorting materials for storage. Terminal tractor driving for loading ships with cargo bins with aluminium blocks, containers or anodes.',
      'Securing containers, locks, and anodes/roll blocks using cargo straps.',
      'Mooring ships and ensuring the safe handling of cargo bins during loading operations.',
      'Diligent focus on maintaining a high standard of health, environment, and safety through comprehensive training.',
    ],
  },
  {
    title: 'Shop assistant',
    companyName: 'Biltema',
    icon: biltema,
    date: 'Apr 2020 - Aug 2021',
    points: [
      'Expedition and customer service (Mostly regarding auto detailing).',
      'Replenishment of goods, maintenance and cleaning.',
      'Assembling bikes and other products.',
      "Usage and operation of the company's IT systems.",
    ],
  },
];

export const projects = [
  {
    name: 'Niclas Nordlund Photography',
    description:
      'A photography website that provides a convenient way for Niclas Nordlund to showcase his photos and connect with clients. It also provides a shop to sell photos from his extensive library.',
    techstack: [
      {
        name: 'HTML',
        icon: html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        icon: css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'JavaScript',
        icon: javascript,
        link: 'https://developer.mozilla.org/docs/Web/javascript/',
      },
      {
        name: 'Node.js',
        icon: nodejs,
        link: 'https://nodejs.org/',
      },
      {
        name: 'Express',
        icon: express,
        link: 'https://expressjs.com/',
      },
      {
        name: 'Google Cloud Platform',
        icon: googlecloudplatform,
        link: 'https://cloud.google.com/',
      },
      {
        name: 'Stripe',
        icon: stripe,
        link: 'https://stripe.com/',
      },
    ],
    image: niclasWebsitePhoto,
    prodLink: 'https://www.niclasnordlund.com/',
    srcLink: 'https://github.com/michaelbrusegard/NiclasNordlundPhotography/',
  },
  {
    name: 'WebGL Fluid Enhanced',
    description:
      'WebGL Fluid Enhanced is a fluid simulation that runs in your browser. It is based on WebGL Fluid Simulation by Pavel Dobryakov. The simulation is enhanced with ES module support, custom colors, and a few other features.',
    techstack: [
      {
        name: 'HTML',
        icon: html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        icon: css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'JavaScript',
        icon: javascript,
        link: 'https://developer.mozilla.org/docs/Web/javascript/',
      },
      {
        name: 'Vite',
        icon: vite,
        link: 'https://vitejs.dev/',
      },
      {
        name: 'Node Package Manager',
        icon: nodepackagemanager,
        link: 'https://www.npmjs.com/',
      },
    ],
    image: webGLFluidEnhancedWebsitePhoto,
    prodLink: 'https://michaelbrusegard.github.io/WebGL-Fluid-Enhanced/',
    srcLink: 'https://github.com/michaelbrusegard/WebGL-Fluid-Enhanced/',
  },
  {
    name: 'Hackerspace NTNU',
    description:
      'Web application that drives an arena for students to 3D-print, borrow tools or get help to realise any creative ideas. Providing a reservation system, inventory management, news, events and more. ',
    techstack: [
      {
        name: 'HTML',
        icon: html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        icon: css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'JavaScript',
        icon: javascript,
        link: 'https://developer.mozilla.org/docs/Web/javascript/',
      },
      {
        name: 'TypeScript',
        icon: typescript,
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Python',
        icon: python,
        link: 'https://www.python.org/',
      },
      {
        name: 'Django',
        icon: django,
        link: 'https://www.djangoproject.com/',
      },
      {
        name: 'Linux',
        icon: linux,
        link: 'https://www.linux.org/',
      },
    ],
    image: hackerspaceWebsitePhoto,
    prodLink: 'https://www.hackerspace-ntnu.no/',
    srcLink: 'https://github.com/hackerspace-ntnu/website/',
  },
];

export const testimonials = [
  {
    testimonial:
      "Honestly, it's the nicest website I've seen and I mean it.....I don't know how to thank you!? I'll be back with some more feedback and some questions tomorrow, but as I said, I'm very impressed with what you've come up with 🙂 !",
    name: 'Niclas Nordlund',
    designation: 'Freelance photographer at Niclas Nordlund Photography',
    image: niclasNordlund,
    phone: '+358400193300',
    mail: 'nic.nord@hotmail.com',
  },
  {
    testimonial: 'Currently aliasing ‘nano’ to ‘sudo rm -rf / —no-preserve-root’',
    name: 'Carl Johan Güzkow',
    designation: 'Deputy Commander at Hackerspace NTNU, Co-Founder and Backend Developer at EI Solutions',
    image: carlJohanGuzkow,
    phone: '+4741623507',
    mail: 'cjgutzkow@gmail.com',
  },
];

export const techUsed = [
  {
    name: 'CSS',
    icon: css,
    link: 'https://developer.mozilla.org/docs/Web/CSS/',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindcss,
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'TypeScript',
    icon: typescript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    icon: react,
    link: 'https://react.dev/',
  },
  {
    name: 'Framer Motion',
    icon: framermotion,
    link: 'https://www.framer.com/motion/',
  },
  {
    name: 'Three.js',
    icon: threejs,
    link: 'https://threejs.org/',
  },
  {
    name: 'Next.js',
    icon: nextjs,
    link: 'https://nextjs.org/',
  },
  {
    name: 'GitHub CI/CD and DevOps',
    icon: github,
    link: 'https://docs.github.com/',
  },
];
