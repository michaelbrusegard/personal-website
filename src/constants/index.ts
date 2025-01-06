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
  JetpackCompose,
} from '@/constants/tech-icons';
import {
  Biltema,
  Hydro,
  Hackerspace,
  Niclas,
  Sticos,
  Zedge,
} from '@/constants/company-logos';

const skills = [
  {
    title: 'LANGUAGES',
    tech: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS',
      },
      {
        name: 'JavaScript',
        Icon: JavaScript,
        link: 'https://developer.mozilla.org/docs/Web/javascript',
      },
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Python',
        Icon: Python,
        link: 'https://www.python.org',
      },
      {
        name: 'Java',
        Icon: Java,
        link: 'https://www.java.com',
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
    title: 'System Developer',
    companyName: 'Sticos',
    Icon: Sticos,
    date: 'Jun 2024 - Aug 2024',
    points: [
      'Developing automations of reconciliation forms in Angular (mostly logic based).',
      'Integration and cooperation in the existing economics development team.',
      'Using various frontend technologies like Sass, RxJS and NgRx.',
      'Participating in agile development processes with daily stand-ups and sprint planning.',
      'Writing unit tests and implementing best practices for code quality and maintainability.',
    ],
  },
  {
    title: 'Bachelor Thesis',
    companyName: 'Zedge',
    Icon: Zedge,
    date: 'Jan 2024 - May 2024',
    points: [
      'Developing Open Emoji Platform - a comprehensive web application for discovering and managing emojis, serving as a foundation for Emojipedia.',
      'Implementing core features including an advanced search system, interactive grid view, and emoji sequence creation tools.',
      'Building responsive navigation components and user interface elements focusing on intuitive user experience.',
      'Collaborating closely with Zedge stakeholders through daily SCRUM meetings and sprint planning to align development with business objectives.',
    ],
  },
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
    name: 'Lektr (WiP)',
    description:
      'A learning platform for students and teachers. A place to share resources for university courses and collaborate. It is supposed to be a free alternative to similar solutions that encourages donating to GiveWell.',
    techstack: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML',
      },
    ],
    imageSrc: '/photos/projects/lektr.jpg',
    prodLink: 'https://lektr.michaelbrusegard.com/project2/en',
    srcLink: '',
  },
  {
    name: 'Tabline',
    description:
      'Tabline.wez is a versatile and easy to use tab-bar for the WezTerm terminal emulator, written in Lua. Tabline has an easy to use customisation and extensions API.',
    techstack: [
      {
        name: 'Lua',
        Icon: Lua,
        link: 'https://www.lua.org',
      },
    ],
    imageSrc: '/photos/projects/tabline.jpg',
    prodLink: '',
    srcLink: 'https://github.com/michaelbrusegard/tabline.wez',
  },
  {
    name: 'New Hackerspace NTNU Website (WiP)',
    description:
      'The new hackerspace website is a complete rewrite of the old website. It is built with Next.js, tRPC, Tailwind CSS++. The goal is a code base that is easy to maintain and introduce beginners too.',
    techstack: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML',
      },
    ],
    imageSrc: '/photos/projects/new-hackerspace-ntnu.jpg',
    prodLink: 'https://beta.hackerspace-ntnu.no/en/storage',
    srcLink: 'https://github.com/hackerspace-ntnu/website-next',
  },
  {
    name: 'Open Emoji Platform',
    description:
      'Open Emoji Platform is an app for finding emojis and a first draft of the eventual emojipedia app. It has built in emoji guessing games, user customizable emoji sequences, favorites, news, events and more.',
    techstack: [
      {
        name: 'Jetpack Compose',
        Icon: JetpackCompose,
        link: 'https://developer.android.com/compose',
      },
    ],
    imageSrc: '/photos/projects/open-emoji-platform.jpg',
    prodLink:
      'https://play.google.com/store/apps/details?id=net.zedge.emojipedia.wrapper',
    srcLink: '',
  },
  {
    name: 'Vector Globe',
    description:
      'Vector Globe is an interactive 3D globe made with geojson data to display vectors of country or continent borders. It is also possible to supply custom vector data.',
    techstack: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS',
      },
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Vite',
        Icon: Vite,
        link: 'https://vitejs.dev',
      },
    ],
    imageSrc: '/photos/projects/vector-globe.jpg',
    prodLink: 'https://www.niclasnordlund.com',
    srcLink: 'https://github.com/michaelbrusegard/NiclasNordlundPhotography',
  },
  {
    name: 'GlobeHub',
    description:
      'A norwegian website for finding new travel destinations. With built-in reviews, cached weather data and interactive map.',
    techstack: [
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
    ],
    imageSrc: '/photos/projects/globehub.jpg',
    prodLink: 'https://globehub.michaelbrusegard.com',
    srcLink: 'https://github.com/michaelbrusegard/Globehub',
  },
  {
    name: 'Niclas Nordlund Photography',
    description:
      'A photography website that provides a convenient way for Niclas Nordlund to showcase his photos and connect with clients. It also provides a shop to sell photos from his extensive library.',
    techstack: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS',
      },
      {
        name: 'JavaScript',
        Icon: JavaScript,
        link: 'https://developer.mozilla.org/docs/Web/javascript',
      },
      {
        name: 'Express.js',
        Icon: Express,
        link: 'https://expressjs.com',
      },
      {
        name: 'Google Cloud Platform',
        Icon: Gcp,
        link: 'https://cloud.google.com',
      },
      {
        name: 'Stripe',
        Icon: Stripe,
        link: 'https://stripe.com',
      },
    ],
    imageSrc: '/photos/projects/niclasnordlund.jpg',
    prodLink: 'https://www.niclasnordlund.com',
    srcLink: 'https://github.com/michaelbrusegard/NiclasNordlundPhotography',
  },
  {
    name: 'WebGL Fluid Enhanced',
    description:
      'WebGL Fluid Enhanced is a fluid simulation that runs in your browser. It is based on WebGL Fluid Simulation by Pavel Dobryakov. The simulation is enhanced with TypeScript, ES module support, custom colors, and a few other features.',
    techstack: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS',
      },
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Vite',
        Icon: Vite,
        link: 'https://vitejs.dev',
      },
    ],
    imageSrc: '/photos/projects/webgl-fluid-enhanced.jpg',
    prodLink: 'https://webgl-fluid-enhanced.michaelbrusegard.com/play',
    srcLink: 'https://github.com/michaelbrusegard/WebGL-Fluid-Enhanced',
  },
  {
    name: 'Hackerspace NTNU',
    description:
      'Web application that drives an arena for students to 3D-print, borrow tools or get help to realise any creative ideas. Providing a reservation system, inventory management, news, events and more. ',
    techstack: [
      {
        name: 'HTML',
        Icon: Html,
        link: 'https://developer.mozilla.org/docs/Web/HTML',
      },
      {
        name: 'CSS',
        Icon: Css,
        link: 'https://developer.mozilla.org/docs/Web/CSS',
      },
      {
        name: 'JavaScript',
        Icon: JavaScript,
        link: 'https://developer.mozilla.org/docs/Web/javascript',
      },
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Python',
        Icon: Python,
        link: 'https://www.python.org',
      },
      {
        name: 'Django',
        Icon: Django,
        link: 'https://www.djangoproject.com',
      },
    ],
    imageSrc: '/photos/projects/hackerspace-ntnu.jpg',
    prodLink: 'https://www.hackerspace-ntnu.no',
    srcLink: 'https://github.com/hackerspace-ntnu/website',
  },
];

const testimonials = [
  {
    testimonial:
      "Honestly, it's the nicest website I've seen and I mean it.....I don't know how to thank you!? I'll be back with some more feedback and some questions tomorrow, but as I said, I'm very impressed with what you've come up with 🙂 !",
    name: 'Niclas Nordlund',
    designation: 'Freelance photographer at Niclas Nordlund Photography',
    imageSrc: '/photos/people/niclasNordlund.jpg',
  },
  {
    testimonial:
      'Currently aliasing ‘nano’ to ‘sudo rm -rf / —no-preserve-root’. Based.',
    name: 'Carl Johan Güzkow',
    designation:
      'Deputy Commander at Hackerspace NTNU, Co-Founder and Backend Developer at EI Solutions',
    imageSrc: '/photos/people/carlJohanGuzkow.jpg',
  },
  {
    testimonial:
      "Michael quickly got up to speed with our Angular solution despite little prior experience. He's eager to learn and passionate about technology, which helps greatly when learning new things. A curious young man with a love for the craft and great potential to become a skilled developer.",
    name: 'Magnus Lianes',
    designation: 'Senior IT Developer and Tech Lead at Sticos Reconciliation',
    imageSrc: '/photos/people/magnusLianes.jpg',
  },
];

const techUsed = [
  {
    name: 'CSS',
    Icon: Css,
    link: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  {
    name: 'Tailwind CSS',
    Icon: Tailwind,
    link: 'https://tailwindcss.com',
  },
  {
    name: 'TypeScript',
    Icon: TypeScript,
    link: 'https://www.typescriptlang.org',
  },
  {
    name: 'React',
    Icon: React,
    link: 'https://react.dev',
  },
  {
    name: 'Motion',
    Icon: Motion,
    link: 'https://motion.dev/docs',
  },
  {
    name: 'Three.js',
    Icon: Three,
    link: 'https://threejs.org',
  },
  {
    name: 'Next.js',
    Icon: Next,
    link: 'https://nextjs.org',
  },
  {
    name: 'Docker',
    Icon: Docker,
    link: 'https://docs.docker.com',
  },
];

export { skills, positions, projects, testimonials, techUsed };
