type MenuButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

const MenuButton = ({ onClick, isOpen }: MenuButtonProps) => {
  return (
    <button className={`menu-button group flex h-9 w-9 translate-x-[-50%] cursor-pointer justify-end object-contain ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className='absolute right-0 top-2 h-[3px] w-3/4 bg-text transition-colors group-hover:bg-primary group-focus:bg-primary'></div>
      <div className='absolute right-0 top-4 h-[3px] w-full bg-text transition-colors group-hover:bg-primary group-focus:bg-primary'></div>
      <div className='absolute left-0 top-6 h-[3px] w-full bg-text transition-colors group-hover:bg-primary group-focus:bg-primary'></div>
    </button>
  );
};

export default MenuButton;
