import { FC, PropsWithChildren } from 'react';
import { IRestrictedChildren } from '../../utility/restrictedChildren';

import NavbarContainer from './container/NavbarContainer';
import NavbarSettings from './settings/NavbarSettings';
import NavMenu, { NavMenuProps } from './menu/NavMenu';

type INavbarProps = IRestrictedChildren<NavMenuProps | PropsWithChildren>;
type NavbarType = FC<INavbarProps> & {
  Menu: typeof NavMenu;
  Settings: typeof NavbarSettings;
};

// nasty hack to prevent type interference error. Should work without annotation for function NavbarType({children}) => {}
const Navbar: NavbarType = ({ children }: INavbarProps) => {
  return <NavbarContainer>{children}</NavbarContainer>;
};

Navbar.Menu = NavMenu;
Navbar.Settings = NavbarSettings;

export default Navbar;
