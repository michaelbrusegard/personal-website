import { navLinks } from '../constants';
import { motion, Variants } from 'framer-motion';
import { fadeIn, foldOut } from '../utils/motion';
import { useEffect } from 'react';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    const closeMenuIfOpen = () => {
      if (isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', closeMenuIfOpen);
    window.addEventListener('scroll', closeMenuIfOpen);
    window.addEventListener('orientationchange', closeMenuIfOpen);

    return () => {
      window.removeEventListener('resize', closeMenuIfOpen);
      window.removeEventListener('scroll', closeMenuIfOpen);
      window.removeEventListener('orientationchange', closeMenuIfOpen);
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      className={`paddingX fixed left-0 top-[76px] w-full bg-secondary ${isOpen ? '' : 'pointer-events-none'}`}
      variants={foldOut(0.8, 0.2) as Variants}
      initial='hidden'
      animate={isOpen ? 'show' : 'hidden'}
    >
      <ul className='flex list-none flex-col gap-3'>
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            className='nav-link cursor-pointer font-mono text-[18px] font-medium hover:text-primary'
            tabIndex={0}
            variants={fadeIn('down', '', 0.8, 0.2) as Variants}
            initial='hidden'
            animate={isOpen ? 'show' : 'hidden'}
            whileHover={{ translateX: '-2px' }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              window.location.href = `#${link.id}`;
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                window.location.href = `#${link.id}`;
              }
            }}
          >
            {link.title}
          </motion.li>
        ))}
        <motion.li
          className='mb-6 h-7 w-full cursor-pointer object-contain text-text hover:text-primary'
          tabIndex={0}
          variants={fadeIn('down', '', 0.8, 0.2) as Variants}
          initial='hidden'
          animate={isOpen ? 'show' : 'hidden'}
          whileHover={{ translateX: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <svg width='100%' height='100%' viewBox='0 0 256 256' className='h-7 w-7'>
            <g transform='matrix(10.882,0,0,10.882,0,21.5682)'>
              <path
                d='M12.637,19.561C16.748,19.561 19.492,18.106 19.492,15.957C19.492,14.033 17.852,13.604 17.852,12.471C17.852,10.908 23.525,10.596 23.525,6.582C23.525,2.617 19.434,0 13.359,0C5.381,0 0,3.984 0,9.951C0,15.693 5.107,19.561 12.637,19.561ZM12.637,17.891C6.025,17.891 1.67,14.707 1.67,9.951C1.67,4.971 6.299,1.67 13.359,1.67C18.486,1.67 21.856,3.662 21.856,6.582C21.856,9.99 16.143,9.531 16.143,12.48C16.143,14.15 17.822,14.678 17.822,15.83C17.822,17.07 15.781,17.891 12.637,17.891ZM11.836,15.586C13.32,15.586 14.541,14.365 14.541,12.871C14.541,11.397 13.32,10.176 11.836,10.176C10.352,10.176 9.131,11.397 9.131,12.871C9.131,14.365 10.352,15.586 11.836,15.586ZM11.836,14.453C10.967,14.453 10.264,13.75 10.264,12.871C10.264,11.904 11.006,11.328 11.816,11.318C12.647,11.309 13.408,11.875 13.408,12.871C13.408,13.75 12.715,14.453 11.836,14.453Z'
                fill='currentColor'
              />
              <path
                d='M4.932,11.289C5.83,11.289 6.553,10.547 6.553,9.648C6.553,8.75 5.83,8.027 4.932,8.027C4.043,8.027 3.311,8.75 3.311,9.648C3.311,10.547 4.043,11.289 4.932,11.289Z'
                fill='currentColor'
              />
              <path
                d='M8.496,8.164C9.629,8.164 10.547,7.256 10.547,6.104C10.547,4.98 9.619,4.082 8.496,4.082C7.354,4.082 6.436,4.98 6.436,6.104C6.436,7.256 7.354,8.164 8.496,8.164Z'
                fill='currentColor'
              />
              <path
                d='M13.447,6.582C14.365,6.582 15.088,5.85 15.088,4.932C15.088,4.023 14.365,3.291 13.447,3.291C12.549,3.291 11.797,4.023 11.797,4.932C11.797,5.85 12.549,6.582 13.447,6.582Z'
                fill='currentColor'
              />
              <path
                d='M17.91,7.207C18.643,7.207 19.229,6.611 19.229,5.869C19.229,5.137 18.643,4.541 17.91,4.541C17.168,4.541 16.563,5.137 16.563,5.869C16.563,6.611 17.168,7.207 17.91,7.207Z'
                fill='currentColor'
              />
            </g>
          </svg>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
