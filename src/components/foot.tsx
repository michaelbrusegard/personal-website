import { techUsed } from '../constants';
import Image from 'next/image';

const Foot = () => {
  return (
    <footer className='relative px-4 py-6 z-20 flex flex-col items-center justify-center bg-secondary text-text text-center pointer-events-auto'>
      <div className='flex flex-col xs:flex-row items-center'>
        Made with
        <div className='mt-2 xs:mt-0 ml-3 flex gap-2'>
          {techUsed.map((icon) => (
            <div
              key={icon.name}
              className='h-6 w-6 cursor-pointer transition-transform hover:scale-110'
              tabIndex={0}
              onClick={() => window.open(icon.link, '_blank')}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  window.open(icon.link, '_blank');
                }
              }}
            >
              <Image src={icon.icon} alt={icon.name} className='object-contain' width={32} height={32} />
            </div>
          ))}
        </div>
        <span className='mt-2 xs:mt-0 ml-3'>&amp; lots of ❤️ !</span>
      </div>
      <p className='mt-5'>
        &copy; {new Date().getFullYear()} Michael Brusegard. All rights reserved. <br />
        Licensed under the Apache-2.0 License.
      </p>
    </footer>
  );
};

export default Foot;
