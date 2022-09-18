import { render } from '@testing-library/react';
import Container from './Container';

describe('Test Container component', () => {
  it('renders', () => {
    const { baseElement } = render(<Container className={['Hello', 'World']} />);
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(<Container className={['Hello', 'World']} />);
    expect(baseElement).toMatchSnapshot();
  });
  it('classes are attached correctly (string)', () => {
    const classNamesArr = ['hello', 'world', 'this', 'a', 'test'];
    const classNamesStr = classNamesArr.join(' ');

    const stringContainer = render(<Container className={classNamesStr} />).getByTestId;
    const divElement = stringContainer('fixed-container');
    expect(divElement).toHaveClass(...classNamesArr);
    expect(divElement).not.toHaveClass('not-present');
  });
  it('classes are attached correctly (array)', () => {
    const classNamesArr = ['hello', 'world', 'this', 'a', 'test'];

    const stringContainer = render(<Container className={classNamesArr} />).getByTestId;
    const divElement = stringContainer('fixed-container');

    expect(divElement).toHaveClass(...classNamesArr);
    expect(divElement).not.toHaveClass('not-present');
  });
});
