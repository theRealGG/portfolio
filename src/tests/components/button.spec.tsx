import { Button } from '@/components/ui';
import { fireEvent } from '@testing-library/react';
import testSuite from '../test.suite';
import renderWithProviders from '../test.utils';

const cases = [
  {
    description: 'should have text',
    testFunction: () => {
      const { getByText } = renderWithProviders(<Button>Click Me</Button>);
      expect(getByText('Click Me')).toBeInTheDocument();
    },
  },
  {
    description: 'should render as a link if href is provided',
    testFunction: () => {
      const { getByRole } = renderWithProviders(<Button href="/">Click Me</Button>);
      expect(getByRole('link')).toBeInTheDocument();
    },
  },
  {
    description: 'should render as a button if href is not provided',
    testFunction: () => {
      const { getByRole } = renderWithProviders(<Button>Click Me</Button>);
      expect(getByRole('button')).toBeInTheDocument();
    },
  },
  {
    description: 'should have click listener',
    testFunction: () => {
      const onClick = jest.fn();
      const { getByTestId } = renderWithProviders(<Button onClick={onClick}>Click Me</Button>);
      const el = getByTestId('button');
      fireEvent.click(el);
      expect(onClick).toHaveBeenCalled();
    },
  },
  {
    description: 'should have state attributes applied',
    testFunction: () => {
      const { getByTestId } = renderWithProviders(
        <Button intent="primary" size="lg">
          Click Me
        </Button>,
      );
      const el = getByTestId('button');
      expect(el).toHaveAttribute('data-intent', 'primary');
      expect(el).toHaveAttribute('data-size', 'lg');
    },
  },
];

testSuite('Button', 'button', <Button />, ...cases);
