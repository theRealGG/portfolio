import { render } from '@testing-library/react';
import { BiHome, BiInfoCircle, BiBook, BiMessage } from 'react-icons/bi';
import NavItem from './menu/NavItem';
import NavMenu from './menu/NavMenu';
import Navbar from './Navbar';

describe('Test Navbar component', () => {
  it('renders', () => {
    const { baseElement } = render(
      <Navbar>
        <div>Test</div>
      </Navbar>
    );
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(
      <Navbar>
        <NavMenu>
          <NavItem id='home' href='/home' name='home' icon={<BiHome />} />
          <NavItem id='about' href='/about' name='about' icon={<BiInfoCircle />} />
          <NavItem id='service' href='/service' name='home' icon={<BiBook />} />
          <NavItem id='contact' href='/message' name='message' icon={<BiMessage />} />
        </NavMenu>
      </Navbar>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
