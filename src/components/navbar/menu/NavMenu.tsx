import { FC } from 'react';
import { IRestrictedChildren } from '../../../utility/restrictedChildren';
import { IStyleableComponent } from '../../../utility/styleableComponent';
import { INavItemProps } from './NavItem';

type NavMenuProps = IStyleableComponent & IRestrictedChildren<INavItemProps>;

const NavMenu: FC<NavMenuProps> = ({ children }) => {
  return (
    <ul
      data-testid='nav-menu'
      className='flex flex-row justify-center nav-switch:gap-y-[2.5rem]  gap-x-8 nav-switch:flex-col nav-switch:pt-[5rem] nav-switch:pr-0 nav-switch:pb-0 nav-switch:pl-[3rem]'
    >
      {children}
    </ul>
  );
};

export default NavMenu;
export type { NavMenuProps };
