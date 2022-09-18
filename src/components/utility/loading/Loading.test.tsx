import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Test Loading (splash screen) Component', () => {
  it('renders', () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toMatchSnapshot();
  });
});
