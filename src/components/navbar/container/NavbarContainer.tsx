import { FC, PropsWithChildren, KeyboardEvent, useState, useMemo } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavbarContext, { NavbarContextState } from '../NavContext';

const NavbarContainer: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const ctxState: NavbarContextState = useMemo(() => ({ setState: setOpen }), undefined);
  const hideMobileMenu = 'nav-switch:-right-full';
  const showMobileMenu = 'nav-switch:right-0';
  // open menu on click at burger button
  const showMenu = () => setOpen(true);
  // close menu on click at close button
  const closeMenu = () => setOpen(false);
  const keyDownHandler = (event: KeyboardEvent<HTMLDivElement>, callback: () => void) => {
    if (event.code === 'Enter') {
      callback();
    }
  };

  return (
    <div className='flex justify-end'>
      <nav data-testid='nav-container' className={`nav-container ${open ? showMobileMenu : hideMobileMenu}`}>
        <NavbarContext.Provider value={ctxState}>{children}</NavbarContext.Provider>
        <div
          tabIndex={0}
          data-testid='nav-container-close-button'
          onKeyDown={event => keyDownHandler(event, closeMenu)}
          onClick={closeMenu}
          role='button'
          className='nav-switch:absolute nav-switch:top-[1rem] nav-switch:right-[1.5rem] cursor-pointer text-[1.25rem] font-semibold hidden nav-switch:block'
        >
          <AiOutlineClose />
        </div>
      </nav>
      <div
        tabIndex={0}
        data-testid='nav-container-burger-button'
        onClick={showMenu}
        onKeyDown={event => keyDownHandler(event, showMenu)}
        role='button'
        className='cursor-pointer text-[1.25rem] hidden nav-switch:block'
      >
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default NavbarContainer;
