import { render } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';

describe('Test ThemeSwitcher component', () => {
  it('renders', () => {
    const { baseElement } = render(<ThemeSwitcher />);
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(<ThemeSwitcher />);
    expect(baseElement).toMatchSnapshot();
  });
});
