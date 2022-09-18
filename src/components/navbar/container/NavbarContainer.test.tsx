import { fireEvent, render, waitFor } from '@testing-library/react';
import { BiHome, BiInfoCircle, BiBook, BiMessage } from 'react-icons/bi';
import NavbarContainer from './NavbarContainer';
import NavMenu from '../menu/NavMenu';
import NavItem from '../menu/NavItem';

describe('Test NavbarContainer component', () => {
  it('render', () => {
    const { baseElement } = render(<NavbarContainer />);
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(
      <NavbarContainer>
        <NavMenu>
          <NavItem id='home' href='/home' name='home' icon={<BiHome />} />
          <NavItem id='about' href='/about' name='about' icon={<BiInfoCircle />} />
          <NavItem id='service' href='/service' name='home' icon={<BiBook />} />
          <NavItem id='contact' href='/message' name='message' icon={<BiMessage />} />
        </NavMenu>
      </NavbarContainer>
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('menu should be initially closed', () => {
    const { getByTestId } = render(<NavbarContainer />);
    const element = getByTestId('nav-container');
    expect(element).toHaveClass('nav-switch:-right-full');
  });
  it('menu should open on burger-button click', async () => {
    const { getByTestId } = render(<NavbarContainer />);
    const container = getByTestId('nav-container');
    const burgerButton = getByTestId('nav-container-burger-button');
    expect(container).toHaveClass('nav-switch:-right-full');
    fireEvent.click(burgerButton);

    await waitFor(() => expect(container).toHaveClass('nav-switch:right-0'));
  });
  it('menu should close on close-button click', async () => {
    const { getByTestId } = render(<NavbarContainer />);
    const container = getByTestId('nav-container');
    const burgerButton = getByTestId('nav-container-burger-button');
    const closeButton = getByTestId('nav-container-close-button');

    expect(container).toHaveClass('nav-switch:-right-full');

    fireEvent.click(burgerButton);

    await waitFor(() => {
      expect(container).toHaveClass('nav-switch:right-0');
      fireEvent.click(closeButton);
      waitFor(() => expect(container).toHaveClass('nav-switch:right-0')).then();
    });
  });
});
