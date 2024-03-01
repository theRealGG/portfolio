import { Text } from '@/components/ui';
import testSuite from '../test.suite';
import renderWithProviders from '../test.utils';

const cases = [
  {
    description: 'should have text',
    testFunction: () => {
      const { getByText } = renderWithProviders(<Text>Text</Text>);
      expect(getByText('Text')).toBeInTheDocument();
    },
  },
  {
    description: 'should render as p by default',
    testFunction: () => {
      const { getByTestId } = renderWithProviders(<Text>Text</Text>);
      const el = getByTestId('text');
      expect(el.tagName).toBe('P');
    },
  },
  {
    description: 'should have state attributes applied',
    testFunction: () => {
      const { getByTestId } = renderWithProviders(
        <Text text="secondary" intent="mininote">
          Text
        </Text>,
      );
      const el = getByTestId('text');
      expect(el).toHaveAttribute('data-intent', 'mininote');
      expect(el).toHaveAttribute('data-text', 'secondary');
    },
  },
];

testSuite('Test Text component', 'text', <Text />, ...cases);
