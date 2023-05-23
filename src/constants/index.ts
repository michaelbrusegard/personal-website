import biltema from '../../public/icons/companies/biltema.svg';
import hydro from '../../public/icons/companies/hydro.svg';

import hackerspace from '../../public/icons/companies/hackerspace.svg';
import niclasNordlundPhotography from '../../public/icons/companies/niclasNordlundPhotography.svg';
import niclasWebsitePhoto from '../../public/photos/projects/niclasnordlund.png';
import hackerspaceWebsitePhoto from '../../public/photos/projects/hackerspace-ntnu.png';

import niclasNordlund from '../../public/photos/people/niclasNordlund.jpg';
import carlJohanGuzkow from '../../public/photos/people/carlJohanGuzkow.jpg';

import html from '../../public/icons/tech/frontend/html.svg';
import css from '../../public/icons/tech/frontend/css.svg';
import tailwindcss from '../../public/icons/tech/frontend/tailwindcss.svg';
import javascript from '../../public/icons/tech/frontend/javascript.svg';
import typescript from '../../public/icons/tech/frontend/typescript.svg';
import react from '../../public/icons/tech/frontend/react.svg';
import threejs from '../../public/icons/tech/frontend/threejs.svg';
import googlecloudplatform from '../../public/icons/tech/apis/googlecloudplatform.svg';
import stripe from '../../public/icons/tech/apis/stripe.svg';
import firebase from '../../public/icons/tech/apis/firebase.svg';
import nodejs from '../../public/icons/tech/backend/nodejs.svg';
import python from '../../public/icons/tech/backend/python.svg';
import java from '../../public/icons/tech/backend/java.svg';
import express from '../../public/icons/tech/backend/express.svg';
import django from '../../public/icons/tech/backend/django.svg';
import nextjs from '../../public/icons/tech/backend/nextjs.svg';
import git from '../../public/icons/tech/tools/git.svg';
import figma from '../../public/icons/tech/tools/figma.svg';
import linux from '../../public/icons/tech/tools/linux.svg';
import vscode from '../../public/icons/tech/tools/vscode.svg';
import affinityphoto from '../../public/icons/tech/tools/affinityphoto.svg';
import affinitydesigner from '../../public/icons/tech/tools/affinitydesigner.svg';
import shapr3d from '../../public/icons/tech/tools/shapr3d.svg';

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
      },
      {
        name: 'CSS',
        icon: css,
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindcss,
      },
      {
        name: 'Javascript',
        icon: javascript,
      },
      {
        name: 'Typescript',
        icon: typescript,
      },
      {
        name: 'React',
        icon: react,
      },

      {
        name: 'Three.js',
        icon: threejs,
      },
    ],
  },
  {
    title: 'API',
    icons: [
      {
        name: 'Google Cloud Platform',
        icon: googlecloudplatform,
      },
      {
        name: 'Stripe',
        icon: stripe,
      },
      {
        name: 'Firebase',
        icon: firebase,
      },
    ],
  },
  {
    title: 'BACKEND',
    icons: [
      {
        name: 'Node.js',
        icon: nodejs,
      },
      {
        name: 'Python',
        icon: python,
      },
      {
        name: 'Java',
        icon: java,
      },
      {
        name: 'Express',
        icon: express,
      },
      {
        name: 'Django',
        icon: django,
      },
      {
        name: 'Next.js',
        icon: nextjs,
      },
    ],
  },
  {
    title: 'TOOLS',
    icons: [
      {
        name: 'Git',
        icon: git,
      },
      {
        name: 'Figma',
        icon: figma,
      },
      {
        name: 'Linux',
        icon: linux,
      },
      {
        name: 'Visual Studio Code',
        icon: vscode,
      },
      {
        name: 'Affinity Photo',
        icon: affinityphoto,
      },
      {
        name: 'Affinity Designer',
        icon: affinitydesigner,
      },
      {
        name: 'Shapr3D',
        icon: shapr3d,
      },
    ],
  },
];

export const experiences = [
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
  {
    title: 'Truck Driver and maintanence',
    companyName: 'Hydro Aluminium',
    icon: hydro,
    date: 'Jun 2022 - Present',
    points: [
      'Truck driving for the relocation of aluminium anodes on cargo bins, general cleanup and sorting materials for storage. ',
      'Securing containers, locks, and anodes/roll blocks using cargo straps.',
      'Mooring ships and ensuring the safe handling of cargo bins during loading operations.',
      'Diligent focus on maintaining a high standard of health, environment, and safety through comprehensive training.',
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
      'Ensuring a seemless photo uploading and editing process for Niclas.',
    ],
  },
  {
    title: 'DevOps Engineer',
    companyName: 'Hackerspace NTNU',
    icon: hackerspace,
    date: 'Feb 2023 - Present',
    points: [
      'Designing and managing web applications utilising JavaScript, Django, and other relevant technologies.',
      'Collaborating with DevOps team to create high-quality products and providing constructive feedback for each other.',
      'Executing responsive design implementation and ensuring compatibility across language barriers.',
      'Creating a typescript game  for the 404 error page.',
    ],
  },
];

export const projects = [
  {
    name: 'Niclas Nordlund Photography',
    description:
      'Photo website where users can browse selected photos by Niclas Nordlund and purchase photos from his library, providing a convenient way for him to sell to businesses.',
    techstack: [html, css, javascript, nodejs, express, stripe, googlecloudplatform],
    image: niclasWebsitePhoto,
    prodLink: 'https://www.niclasnordlund.com',
    srcLink: 'https://github.com/michaelbrusegard/NiclasNordlundPhotography',
  },
  {
    name: 'Hackerspace NTNU',
    description:
      'Web application that drives an arena for students to 3D-print, borrow tools or get help to realise any creative ideas. Providing a reservation system, inventory management, news, events and more. ',
    techstack: [html, css, javascript, typescript, django, python, linux],
    image: hackerspaceWebsitePhoto,
    prodLink: 'https://www.hackerspace-ntnu.no/',
    srcLink: 'https://github.com/hackerspace-ntnu/website',
  },
];

export const testimonials = [
  {
    testimonial: 'Best web developer ever',
    name: 'Niclas Nordlund',
    designation: 'Freelance photographer at Niclas Nordlund Photography',
    image: niclasNordlund,
    phone: '+358400193300',
    mail: 'nic.nord@hotmail.com',
  },
  {
    testimonial: 'He needs coffee, lots of coffee',
    name: 'Carl Johan Güzkow',
    designation: 'Deputy Commander at Hackerspace NTNU, Co-Founder and Backend Developer at EI Solutions',
    image: carlJohanGuzkow,
    phone: '+4741623507',
    mail: 'cjgutzkow@gmail.com',
  },
];
