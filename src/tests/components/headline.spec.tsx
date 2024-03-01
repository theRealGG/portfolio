import { Headline } from '@/components/ui';
import testSuite from '../test.suite';
import renderWithProviders from '../test.utils';

const cases = [
  {
    description: 'should have text',
    testFunction: () => {
      const { getByText } = renderWithProviders(<Headline>Headline</Headline>);
      expect(getByText('Headline')).toBeInTheDocument();
    },
  },
  {
    description: 'should render as h3 by default',
    testFunction: () => {
      const { getByTestId } = renderWithProviders(<Headline>Headline</Headline>);
      const el = getByTestId('headline');
      expect(el.tagName).toBe('H3');
    },
  },
  {
    description: 'should have state attributes applied',
    testFunction: () => {
      const { getByTestId } = renderWithProviders(
        <Headline text="secondary" intent="primary">
          Headline
        </Headline>,
      );
      const el = getByTestId('headline');
      expect(el).toHaveAttribute('data-intent', 'primary');
      expect(el).toHaveAttribute('data-text', 'secondary');
    },
  },
];

testSuite('Test Headline component', 'headline', <Headline />, ...cases);
