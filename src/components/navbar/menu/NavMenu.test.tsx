import { render } from '@testing-library/react';
import { BiBook, BiHome, BiInfoCircle, BiMessage } from 'react-icons/bi';
import NavbarContext, { NavbarContextState } from '../NavContext';

import NavMenu from './NavMenu';
import NavItem from './NavItem';

const state: NavbarContextState = { setState: () => {} };

describe('Test NavMenu Component', () => {
  it('render', () => {
    const { baseElement } = render(
      <NavbarContext.Provider value={state}>
        <NavMenu>
          <NavItem id='home' href='/home' name='home' icon={<BiHome />} />
          <NavItem id='about' href='/about' name='about' icon={<BiInfoCircle />} />
          <NavItem id='service' href='/service' name='home' icon={<BiBook />} />
        </NavMenu>
      </NavbarContext.Provider>
    );
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(
      <NavbarContext.Provider value={state}>
        <NavMenu>
          <NavItem id='home' href='/home' name='home' icon={<BiHome />} />
          <NavItem id='about' href='/about' name='about' icon={<BiInfoCircle />} />
          <NavItem id='service' href='/service' name='home' icon={<BiBook />} />
          <NavItem id='contact' href='/message' name='message' icon={<BiMessage />} />
        </NavMenu>
      </NavbarContext.Provider>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
