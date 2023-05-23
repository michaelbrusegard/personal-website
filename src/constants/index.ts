import mobile from '../../public/icons/titles/mobile.png';
import web from '../../public/icons/titles/web.png';
import backend from '../../public/icons/titles/backend.png';
import biltema from '../../public/icons/companies/biltema.svg';
import hydro from '../../public/icons/companies/hydro.svg';
import hackerspace from '../../public/icons/companies/hackerspace.svg';
import niclasNordlundPhotography from '../../public/icons/companies/niclasNordlundPhotography.svg';
import niclasWebsitePhoto from '../../public/photos/projects/niclasnordlund.png';
import hackerspaceWebsitePhoto from '../../public/photos/projects/hackerspace-ntnu.png';
import niclasNordlund from '../../public/photos/people/niclasNordlund.jpg';
import carlJohanGuzkow from '../../public/photos/people/carlJohanGuzkow.jpg';

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
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
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
    tags: [
      {
        name: 'HTML',
        color: 'primary',
      },
      {
        name: 'CSS',
        color: 'primary',
      },
      {
        name: 'Javascript',
        color: 'primary',
      },
      {
        name: 'Node.js',
        color: 'accent',
      },
      {
        name: 'Express.js',
        color: 'accent',
      },
      {
        name: 'Stripe',
        color: 'secondary',
      },
      {
        name: 'Google-Cloud',
        color: 'secondary',
      },
    ],
    image: niclasWebsitePhoto,
    prodLink: 'https://www.niclasnordlund.com',
    srcLink: 'https://github.com/michaelbrusegard/NiclasNordlundPhotography',
  },
  {
    name: 'Hackerspace NTNU',
    description:
      'Web application that drives an arena for students to 3D-print, borrow tools or get help to realise any creative ideas. Providing a reservation system, inventory management, news, events and more. ',
    tags: [
      {
        name: 'HTML',
        color: 'primary',
      },
      {
        name: 'CSS',
        color: 'primary',
      },
      {
        name: 'Javascript',
        color: 'primary',
      },
      {
        name: 'Typescript',
        color: 'primary',
      },
      {
        name: 'Django',
        color: 'accent',
      },
      {
        name: 'Python',
        color: 'accent',
      },
      {
        name: 'Ubuntu-Server',
        color: 'secondary',
      },
    ],
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

// const technologies = [
//   {
//     name: 'HTML 5',
//     icon: html,
//   },
//   {
//     name: 'CSS 3',
//     icon: css,
//   },
//   {
//     name: 'JavaScript',
//     icon: javascript,
//   },
//   {
//     name: 'TypeScript',
//     icon: typescript,
//   },
//   {
//     name: 'React JS',
//     icon: reactjs,
//   },
//   {
//     name: 'Redux Toolkit',
//     icon: redux,
//   },
//   {
//     name: 'Tailwind CSS',
//     icon: tailwind,
//   },
//   {
//     name: 'Node JS',
//     icon: nodejs,
//   },
//   {
//     name: 'MongoDB',
//     icon: mongodb,
//   },
//   {
//     name: 'Three JS',
//     icon: threejs,
//   },
//   {
//     name: 'git',
//     icon: git,
//   },
//   {
//     name: 'figma',
//     icon: figma,
//   },
//   {
//     name: 'docker',
//     icon: docker,
//   },
// ];
