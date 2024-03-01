import { Container } from '@/components/ui';
import testSuite from '../test.suite';
import renderWithProviders from '../test.utils';

const cases = [
  {
    description: 'should have text',
    testFunction: () => {
      const { getByText } = renderWithProviders(<Container>Container</Container>);
      expect(getByText('Container')).toBeInTheDocument();
    },
  },
];

testSuite('Test Container component', 'container', <Container />, ...cases);
