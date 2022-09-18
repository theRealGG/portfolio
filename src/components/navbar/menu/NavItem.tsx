import { FC, useContext } from 'react';
import NavbarContext from '../NavContext';

interface INavItemProps {
  name: string;
  id: string;
  icon: JSX.Element;
  href: string;
  active?: boolean;
}

const NavItem: FC<INavItemProps> = ({ name, icon, id, href, active }) => {
  const ctx = useContext(NavbarContext);
  return (
    <li>
      <a
        className={`${active ? 'nav-link-active' : 'nav-link'}`}
        href={`#${href}`}
        data-testid={id}
        id={id}
        onClick={() => ctx?.setState(false)}
      >
        {icon}
        <span>{name}</span>
      </a>
    </li>
  );
};

NavItem.defaultProps = {
  active: false
};

export default NavItem;

export type { INavItemProps };
