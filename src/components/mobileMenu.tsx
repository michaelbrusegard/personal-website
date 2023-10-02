import { navLinks } from '../constants';
import { motion, Variants } from 'framer-motion';
import { fadeIn, foldOut } from '../utils/motion';
import { useEffect } from 'react';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  PaletteIcon: React.FC<{ tabIndex: number }>;
  SunIcon: React.FC<{ tabIndex: number }>;
  MoonIcon: React.FC<{ tabIndex: number }>;
};

const MobileMenu = ({ isOpen, onClose, isDarkMode, PaletteIcon, SunIcon, MoonIcon }: MobileMenuProps) => {
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
      className={`paddingX fixed left-0 top-[76px] w-full select-none bg-secondary shadow-xl ${isOpen ? '' : 'pointer-events-none'}`}
      variants={foldOut(0.8, 0.2) as Variants}
      initial='hidden'
      animate={isOpen ? 'show' : 'hidden'}
    >
      <ul className='flex list-none flex-col gap-3'>
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            className='nav-link cursor-pointer font-mono text-[18px] font-medium text-text hover:text-primary focus:text-primary'
            tabIndex={isOpen ? 0 : -1}
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
          className='mb-6 flex w-full cursor-pointer flex-row items-center gap-5 object-contain'
          variants={fadeIn('down', '', 0.8, 0.2) as Variants}
          initial='hidden'
          animate={isOpen ? 'show' : 'hidden'}
        >
          {isDarkMode ? <SunIcon tabIndex={isOpen ? 0 : -1} /> : <MoonIcon tabIndex={isOpen ? 0 : -1} />}
          <PaletteIcon tabIndex={isOpen ? 0 : -1} />
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
