import { FC, PropsWithChildren } from 'react';

const NavbarSettings: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='nav-switch:absolute nav-switch:left-12 nav-switch:bottom-4 flex flex-row justify-center gap-4 nav-switch:gap-8'>
      {children}
    </div>
  );
};

export default NavbarSettings;
