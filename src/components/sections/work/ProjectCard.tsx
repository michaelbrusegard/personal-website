import Tilt from 'react-parallax-tilt';
import { m } from 'motion/react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { fadeIn } from '@/utils/motion';
import { GitHubLinkIcon } from '@/components/assets/GitHubLinkIcon';
import { ProductionLinkIcon } from '@/components/assets/ProductionLinkIcon';

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  techstack: {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;

    link: string;
  }[];
  imageSrc: StaticImageData;
  prodLink: string;
  srcLink: string;
};

function ProjectCard({
  index,
  name,
  description,
  techstack,
  imageSrc,
  prodLink,
  srcLink,
}: ProjectCardProps) {
  return (
    <m.div variants={fadeIn('up', 'spring', index * 0.5, 1)}>
      <Tilt
        className={`flex w-full max-w-[640px] flex-col rounded-2xl border-2 border-accent p-5 lg:max-w-none ${
          (index + 1) % 2 === 0
            ? 'from-secondary to-background bg-gradient-45 lg:flex-row-reverse'
            : 'from-background to-secondary bg-gradient-135 lg:flex-row'
        }`}
        scale={1.05}
        transitionSpeed={450}
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
      >
        <Link
          className='relative h-60 w-full max-w-[576px] flex-shrink-0 overflow-hidden rounded-2xl shadow-card outline-2 outline-offset-2 outline-primary/60 transition-transform focus-visible:outline xs:h-80'
          href={prodLink}
          target='_blank'
          rel='noreferrer'
          title={`Open the production link for ${name}`}
          aria-label={`Open the production link for ${name}`}
        >
          <Image
            src={imageSrc}
            alt={name}
            className='h-auto w-full object-cover transition-transform duration-[2000ms] hover:-translate-y-[calc(100%-320px)] hover:duration-[8000ms]'
          />
        </Link>

        <div className='px-2 py-5 text-center lg:px-5 lg:py-2 xl:px-10 xl:py-8'>
          <h3 className='font-sf-pro-display text-[24px] font-bold'>{name}</h3>
          <p className='mt-2 text-[17px] opacity-75'>{description}</p>
          <div className='mt-3 flex flex-wrap justify-center gap-2'>
            {techstack.map(({ name, Icon, link }) => (
              <Link
                className='rounded-md outline-2 outline-offset-2 outline-primary/60 transition-transform hover:scale-110 focus-visible:outline'
                key={name}
                href={link}
                target='_blank'
                rel='noreferrer'
                aria-label={`Open link to ${name}`}
                title={`Open link to ${name}`}
              >
                <Icon className='h-6 w-6' aria-hidden='true' />
              </Link>
            ))}
          </div>
          <div className='mt-4 flex flex-row justify-center gap-9 text-[18px] font-medium'>
            <Link
              href={srcLink}
              target='_blank'
              rel='noreferrer'
              className='flex cursor-pointer items-center gap-1 rounded-md outline-2 outline-offset-2 outline-primary/60 transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary focus-visible:outline'
              aria-label={`Open the source code link for ${name}`}
              title={`Open the source code link for ${name}`}
            >
              Code
              <GitHubLinkIcon className='h-4 w-4' aria-hidden='true' />
            </Link>
            <Link
              href={prodLink}
              target='_blank'
              rel='noreferrer'
              className='flex cursor-pointer items-center gap-1 rounded-md outline-2 outline-offset-2 outline-primary/60 transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary focus-visible:outline'
              aria-label={`Open the production link for ${name}`}
              title={`Open the production link for ${name}`}
            >
              Live
              <ProductionLinkIcon className='h-4 w-4' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </Tilt>
    </m.div>
  );
}

export { ProjectCard };