import niclasWebsitePhoto from '../../public/photos/projects/niclasnordlund.jpg';
import webGLFluidEnhancedWebsitePhoto from '../../public/photos/projects/webgl-fluid-enhanced.jpg';
import hackerspaceWebsitePhoto from '../../public/photos/projects/hackerspace-ntnu.jpg';

import niclasNordlund from '../../public/photos/people/niclasNordlund.jpg';
import carlJohanGuzkow from '../../public/photos/people/carlJohanGuzkow.jpg';

import {
  Html,
  Java,
  JavaScript,
  Python,
  TypeScript,
  Css,
  Lua,
  Rust,
  Express,
  Gcp,
  Stripe,
  Vite,
  Django,
  Tailwind,
  React,
  Motion,
  Docker,
  Three,
  Next,
} from '@/constants/tech-icons';
import { Biltema, Hydro, Hackerspace, Niclas } from '@/constants/company-logos';

const skills = [
  {
    title: 'LANGUAGES',
    tech: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'JavaScript',
        Icon: JavaScript,
        link: 'https://developer.mozilla.org/docs/Web/javascript/',
      },
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Python',
        Icon: Python,
        link: 'https://www.python.org/',
      },
      {
        name: 'Java',
        Icon: Java,
        link: 'https://www.java.com/',
      },
      {
        name: 'Lua',
        Icon: Lua,
        link: 'https://www.lua.org',
      },
      {
        name: 'Rust',
        Icon: Rust,
        link: 'https://www.rust-lang.org',
      },
    ],
  },
];

const positions = [
  {
    title: 'DevOps Deputy Manager',
    companyName: 'Hackerspace NTNU',
    Icon: Hackerspace,
    date: 'Feb 2023 - Present',
    points: [
      'Designing and managing web applications utilising JavaScript, Django, and other relevant technologies.',
      'Managing the DevOps team while fostering a culture of constructive feedback and continuous improvement.',
      'Actively exploring and incorporating new features to enhance user experience.',
      'Creating a typescript game  for the 404 error page.',
    ],
  },
  {
    title: 'Full stack Developer',
    companyName: 'Niclas Nordlund Photography',
    Icon: Niclas,
    date: 'Oct 2022 - Oct 2023',
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
    Icon: Hydro,
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
    Icon: Biltema,
    date: 'Apr 2020 - Aug 2021',
    points: [
      'Expedition and customer service (Mostly regarding auto detailing).',
      'Replenishment of goods, maintenance and cleaning.',
      'Assembling bikes and other products.',
      "Usage and operation of the company's IT systems.",
    ],
  },
];

const projects = [
  {
    name: 'Niclas Nordlund Photography',
    description:
      'A photography website that provides a convenient way for Niclas Nordlund to showcase his photos and connect with clients. It also provides a shop to sell photos from his extensive library.',
    techstack: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'JavaScript',
        Icon: JavaScript,
        link: 'https://developer.mozilla.org/docs/Web/javascript/',
      },
      {
        name: 'Express.js',
        Icon: Express,
        link: 'https://expressjs.com/',
      },
      {
        name: 'Google Cloud Platform',
        Icon: Gcp,
        link: 'https://cloud.google.com/',
      },
      {
        name: 'Stripe',
        Icon: Stripe,
        link: 'https://stripe.com/',
      },
    ],
    imageSrc: niclasWebsitePhoto,
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
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Vite',
        Icon: Vite,
        link: 'https://vitejs.dev/',
      },
    ],
    imageSrc: webGLFluidEnhancedWebsitePhoto,
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
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML/',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS/',
      },
      {
        name: 'JavaScript',
        Icon: JavaScript,
        link: 'https://developer.mozilla.org/docs/Web/javascript/',
      },
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Python',
        Icon: Python,
        link: 'https://www.python.org/',
      },
      {
        name: 'Django',
        Icon: Django,
        link: 'https://www.djangoproject.com/',
      },
    ],
    imageSrc: hackerspaceWebsitePhoto,
    prodLink: 'https://www.hackerspace-ntnu.no/',
    srcLink: 'https://github.com/hackerspace-ntnu/website/',
  },
];

const testimonials = [
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
    testimonial:
      'Currently aliasing ‘nano’ to ‘sudo rm -rf / —no-preserve-root’',
    name: 'Carl Johan Güzkow',
    designation:
      'Deputy Commander at Hackerspace NTNU, Co-Founder and Backend Developer at EI Solutions',
    image: carlJohanGuzkow,
    phone: '+4741623507',
    mail: 'cjgutzkow@gmail.com',
  },
];

const techUsed = [
  {
    name: 'CSS',
    Icon: Css,
    link: 'https://developer.mozilla.org/docs/Web/CSS/',
  },
  {
    name: 'Tailwind CSS',
    Icon: Tailwind,
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'TypeScript',
    Icon: TypeScript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    Icon: React,
    link: 'https://react.dev/',
  },
  {
    name: 'Motion',
    Icon: Motion,
    link: 'https://motion.dev/docs',
  },
  {
    name: 'Three.js',
    Icon: Three,
    link: 'https://threejs.org/',
  },
  {
    name: 'Next.js',
    Icon: Next,
    link: 'https://nextjs.org/',
  },
  {
    name: 'Docker',
    Icon: Docker,
    link: 'https://docs.docker.com',
  },
];

export { skills, positions, projects, testimonials, techUsed };
