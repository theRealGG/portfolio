import { fireEvent, render } from '@testing-library/react';
import { BiHome } from 'react-icons/bi';

import NavbarContext, { NavbarContextState } from '../NavContext';
import NavItem from './NavItem';

const state: NavbarContextState = { setState: () => {} };

describe('Test NavItem component', () => {
  it('renders', () => {
    const { baseElement } = render(
      <NavbarContext.Provider value={state}>
        <NavItem name='Home' id='home' href='#home' icon={<BiHome />} />
      </NavbarContext.Provider>
    );
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(
      <NavbarContext.Provider value={state}>
        <NavItem name='Home' id='home' href='#home' icon={<BiHome />} />
      </NavbarContext.Provider>
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('click handled correctly', () => {
    let testState = true;
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const clickState: NavbarContextState = {
      setState: (s: boolean) => {
        testState = s;
      }
    };
    const { getByTestId } = render(
      <NavbarContext.Provider value={clickState}>
        <NavItem name='Home' id='home' href='#home' icon={<BiHome />} />
      </NavbarContext.Provider>
    );
    const navLink = getByTestId('home');
    fireEvent.click(navLink);
    expect(testState).toBe(false);
  });
});
