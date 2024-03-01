/* eslint-disable jest/valid-title  */
/* eslint-disable jest/no-export */
import { ReactElement } from 'react';
import renderWithProviders from './test.utils';

interface TestCase {
  description: string;
  testFunction: () => void;
}

type SuiteParam = TestCase | (() => void);

const testSuite = <T extends ReactElement>(
  name: string,
  testid: string,
  element: T,
  ...testCases: SuiteParam[]
): void => {
  describe(name, () => {
    it('should render', () => {
      const { baseElement } = renderWithProviders(element);
      expect(baseElement).toBeInTheDocument();
    });
    it('should have styles applied', () => {
      const { getByTestId } = renderWithProviders(element);
      const el = getByTestId(testid);
      expect(el.className.split(' ').length > 1).toBeTruthy();
    });
    it('should match snapshot', () => {
      const { baseElement } = renderWithProviders(element);
      expect(baseElement).toMatchSnapshot();
    });
    testCases.forEach((testCase) => {
      if (typeof testCase === 'function') {
        testCase();
      } else {
        it(testCase.description, testCase.testFunction);
      }
    });
  });
};

export default testSuite;
