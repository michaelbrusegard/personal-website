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
  WezTerm,
  GraphQl,
  Postgres,
  DrizzleOrm,
  Trpc,
  Sql,
  Kotlin,
  SpringBoot,
  Angular,
  MySql,
  FireStore,
  Sqlite,
  Aws,
  Nginx,
  Azure,
  AffinityDesigner,
  AffinityPhoto,
  Figma,
  Neovim,
  JavaFx,
  Maven,
  Nix,
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
        name: 'SQL',
        Icon: Sql,
        link: 'https://en.wikipedia.org/wiki/SQL',
      },
      {
        name: 'Kotlin',
        Icon: Kotlin,
        link: 'https://kotlinlang.org',
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
      {
        name: 'Nix',
        Icon: Nix,
        link: 'https://nix.dev/manual/nix/2.24/introduction',
      },
    ],
  },
  {
    title: 'FRAMEWORKS',
    tech: [
      {
        name: 'React',
        Icon: React,
        link: 'https://react.dev',
      },
      {
        name: 'Next.js',
        Icon: Next,
        link: 'https://nextjs.org',
      },
      {
        name: 'Express',
        Icon: Express,
        link: 'https://expressjs.com',
      },
      {
        name: 'Django',
        Icon: Django,
        link: 'https://www.djangoproject.com',
      },
      {
        name: 'Spring Boot',
        Icon: SpringBoot,
        link: 'https://docs.spring.io/spring-boot/index.html',
      },
      {
        name: 'JavaFX',
        Icon: JavaFx,
        link: 'https://openjfx.io',
      },
      {
        name: 'Jetpack Compose',
        Icon: JetpackCompose,
        link: 'https://developer.android.com/compose',
      },
      {
        name: 'Angular',
        Icon: Angular,
        link: 'https://angular.dev',
      },
    ],
  },
  {
    title: 'DATABASES & API',
    tech: [
      {
        name: 'PostgreSQL',
        Icon: Postgres,
        link: 'https://www.postgresql.org',
      },
      {
        name: 'MySQL',
        Icon: MySql,
        link: 'https://www.mysql.com',
      },
      {
        name: 'SQLite',
        Icon: Sqlite,
        link: 'https://www.sqlite.org/index.html',
      },
      {
        name: 'Firestore',
        Icon: FireStore,
        link: 'https://firebase.google.com/docs/firestore',
      },
      {
        name: 'Drizzle ORM',
        Icon: DrizzleOrm,
        link: 'https://orm.drizzle.team',
      },
      {
        name: 'tRPC',
        Icon: Trpc,
        link: 'https://trpc.io',
      },
      {
        name: 'GraphQL',
        Icon: GraphQl,
        link: 'https://graphql.org',
      },
    ],
  },
  {
    title: 'INFRASTRUCTURE',
    tech: [
      {
        name: 'Nginx',
        Icon: Nginx,
        link: 'https://nginx.org',
      },
      {
        name: 'Docker',
        Icon: Docker,
        link: 'https://docs.docker.com',
      },
      {
        name: 'Stripe',
        Icon: Stripe,
        link: 'https://stripe.com',
      },
      {
        name: 'Google Cloud Platform',
        Icon: Gcp,
        link: 'https://cloud.google.com',
      },
      {
        name: 'Amazon Web Services',
        Icon: Aws,
        link: 'https://aws.amazon.com',
      },
      {
        name: 'Azure',
        Icon: Azure,
        link: 'https://azure.microsoft.com',
      },
      {
        name: 'Vite',
        Icon: Vite,
        link: 'https://vitejs.dev',
      },
    ],
  },
  {
    title: 'STYLING & UI',
    tech: [
      {
        name: 'Tailwind CSS',
        Icon: Tailwind,
        link: 'https://tailwindcss.com',
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
    ],
  },
  {
    title: 'TOOLS',
    tech: [
      {
        name: 'WezTerm',
        Icon: WezTerm,
        link: 'https://wezfurlong.org/wezterm/index.html',
      },
      {
        name: 'Neovim',
        Icon: Neovim,
        link: 'https://neovim.io',
      },
      {
        name: 'Affinity Designer',
        Icon: AffinityDesigner,
        link: 'https://affinity.serif.com/designer',
      },
      {
        name: 'Affinity Photo',
        Icon: AffinityPhoto,
        link: 'https://affinity.serif.com/photo',
      },
      {
        name: 'Figma',
        Icon: Figma,
        link: 'https://www.figma.com',
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
      'Developing Open Emoji Platform - an Android application for discovering emojis, serving as a first draft for Emojipedia.',
      'Implementing core features like a search system, interactive grid view and emoji sequence creation.',
      'Building a navigation component and user interface elements focusing on an intuitive user experience.',
      'Responsible for customer/client communication and communication with Zedge.',
      'Daily SCRUM meetings and sprint planning to align development with business objectives.',
    ],
  },
  {
    title: 'DevOps Manager',
    companyName: 'Hackerspace NTNU',
    Icon: Hackerspace,
    date: 'Feb 2023 - Present',
    points: [
      'Managing the DevOps team while fostering a culture of constructive feedback and continuous improvement.',
      'Responsible for 7 linux servers and their services (Web, Docker Compose, Nginx reverse-proxy, workflow runners, translations, analytics, Minecraft and backup solutions)',
      'Designing and managing the old web application utilising JavaScript, Django, and other technologies.',
      'Participating in multiple weekly group meetings aswell as monthly organisational meetings.',
      'Interviewing and onboarding new members to the DevOps group to expand the team and ensure a good fit.',
      'Holding courses and teaching the team the tools we use.',
    ],
  },
  {
    title: 'Full-Stack Developer',
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
    title: 'Logistics Summer Substitute',
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
    title: 'Shop Assistant',
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
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Tailwind CSS',
        Icon: Tailwind,
        link: 'https://tailwindcss.com',
      },
      {
        name: 'React',
        Icon: React,
        link: 'https://react.dev',
      },
      {
        name: 'Next.js',
        Icon: Next,
        link: 'https://nextjs.org',
      },
      {
        name: 'GraphQL',
        Icon: GraphQl,
        link: 'https://graphql.org',
      },
      {
        name: 'Drizzle ORM',
        Icon: DrizzleOrm,
        link: 'https://orm.drizzle.team',
      },
      {
        name: 'PostgreSQL',
        Icon: Postgres,
        link: 'https://www.postgresql.org',
      },
      {
        name: 'Amazon Web Services',
        Icon: Aws,
        link: 'https://aws.amazon.com',
      },
      {
        name: 'Docker',
        Icon: Docker,
        link: 'https://docs.docker.com',
      },
      {
        name: 'Stripe',
        Icon: Stripe,
        link: 'https://stripe.com',
      },
    ],
    imageSrc: '/photos/projects/lektr.jpg',
    prodLink: 'https://lektr.michaelbrusegard.com/project2/en',
    srcLink: '',
  },
  {
    name: 'Tabline.wez',
    description:
      'Tabline.wez is a versatile and easy to use tab-bar for the WezTerm terminal emulator, written in Lua. Tabline has an easy to use customisation and extensions API.',
    techstack: [
      {
        name: 'WezTerm',
        Icon: WezTerm,
        link: 'https://wezfurlong.org/wezterm/index.html',
      },
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
    name: 'Sticos Reconciliation',
    description:
      "The reconciliation tool from Sticos manages reonciliation forms for wages, employer's national insurance contributions, holiday pay, value added tax, accruals, fixed assets, accrued expenses and more. I worked on the frontend creating automatic suggestions and automatically filling out fields to make the process faster.",
    techstack: [
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Angular',
        Icon: Angular,
        link: 'https://angular.dev',
      },
    ],
    imageSrc: '/photos/projects/sticos-reconciliation.jpg',
    prodLink: 'https://www.sticos.no/produkter/sticos-oversikt/avstemming',
    srcLink: '',
  },
  {
    name: 'New Hackerspace NTNU Website (WiP)',
    description:
      'The new hackerspace website is a complete rewrite of the old website. It is built with Next.js, tRPC, Tailwind, etc.. The goal is a code base that is easy to maintain and introduce beginners too. We integrate with many self-hosted services as well as external ones like Feide.',
    techstack: [
      {
        name: 'TypeScript',
        Icon: TypeScript,
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Tailwind CSS',
        Icon: Tailwind,
        link: 'https://tailwindcss.com',
      },
      {
        name: 'React',
        Icon: React,
        link: 'https://react.dev',
      },
      {
        name: 'Next.js',
        Icon: Next,
        link: 'https://nextjs.org',
      },
      {
        name: 'Drizzle ORM',
        Icon: DrizzleOrm,
        link: 'https://orm.drizzle.team',
      },
      {
        name: 'tRPC',
        Icon: Trpc,
        link: 'https://trpc.io',
      },
      {
        name: 'PostgreSQL',
        Icon: Postgres,
        link: 'https://www.postgresql.org',
      },
      {
        name: 'Docker',
        Icon: Docker,
        link: 'https://docs.docker.com',
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
        name: 'Kotlin',
        Icon: Kotlin,
        link: 'https://kotlinlang.org',
      },
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
        name: 'Three.js',
        Icon: Three,
        link: 'https://threejs.org',
      },
      {
        name: 'Vite',
        Icon: Vite,
        link: 'https://vitejs.dev',
      },
    ],
    imageSrc: '/photos/projects/vector-globe.jpg',
    prodLink: '',
    srcLink: 'https://github.com/michaelbrusegard/vector-globe',
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
      {
        name: 'Tailwind CSS',
        Icon: Tailwind,
        link: 'https://tailwindcss.com',
      },
      {
        name: 'React',
        Icon: React,
        link: 'https://react.dev',
      },
      {
        name: 'Next.js',
        Icon: Next,
        link: 'https://nextjs.org',
      },
      {
        name: 'SQL',
        Icon: Sql,
        link: 'https://en.wikipedia.org/wiki/SQL',
      },
      {
        name: 'PostgreSQL',
        Icon: Postgres,
        link: 'https://www.postgresql.org',
      },
      {
        name: 'Amazon Web Services',
        Icon: Aws,
        link: 'https://aws.amazon.com',
      },
      {
        name: 'Docker',
        Icon: Docker,
        link: 'https://docs.docker.com',
      },
    ],
    imageSrc: '/photos/projects/globehub.jpg',
    prodLink: 'https://globehub.michaelbrusegard.com',
    srcLink: 'https://github.com/michaelbrusegard/Globehub',
  },
  {
    name: 'Workout Planner',
    description:
      'A workout planner app made with JavaFX and Spring Boot. You can add exercices and sets, reorder exercices and save workouts on the backend.',
    techstack: [
      {
        name: 'Java',
        Icon: Java,
        link: 'https://www.java.com',
      },
      {
        name: 'Spring Boot',
        Icon: SpringBoot,
        link: 'https://docs.spring.io/spring-boot/index.html',
      },
      {
        name: 'JavaFX',
        Icon: JavaFx,
        link: 'https://openjfx.io',
      },
      {
        name: 'Maven',
        Icon: Maven,
        link: 'https://maven.apache.org',
      },
    ],
    imageSrc: '/photos/projects/workoutplanner.jpg',
    prodLink: '',
    srcLink: 'https://github.com/michaelbrusegard/WorkoutPlanner',
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
    name: 'Hackerspace NTNU Website',
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
  {
    name: 'Chinese Checkers',
    description:
      'Chinese Checkers board game programmed with JavaFX. Features saving/loading the gamestate from .chc files, highlighting legal moves and enforcing legal moves. ',
    techstack: [
      {
        name: 'Java',
        Icon: Java,
        link: 'https://www.java.com',
      },
      {
        name: 'JavaFX',
        Icon: JavaFx,
        link: 'https://openjfx.io',
      },
    ],
    imageSrc: '/photos/projects/chinese-checkers.jpg',
    prodLink: '',
    srcLink: 'https://github.com/michaelbrusegard/ChineseCheckers',
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
