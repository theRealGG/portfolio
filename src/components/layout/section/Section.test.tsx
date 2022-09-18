import { render } from '@testing-library/react';
import Section from './Section';

describe('Test Section component', () => {
  it('renders', () => {
    const { baseElement } = render(<Section id='home' />);
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(<Section id='home' />);
    expect(baseElement).toMatchSnapshot();
  });
  it('attaches id', () => {
    const { getByTestId } = render(<Section id='home' />);
    const baseContainer = getByTestId('section');
    expect(baseContainer).toHaveAttribute('id', 'home');
  });
});
