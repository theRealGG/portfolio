import { render } from '@testing-library/react';
import Loading from './Loading';

jest.mock('react-i18next', () => ({
  __esModule: true,
  useTranslation: () => {
    return {
      t: () => 'Loading',
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn()
  }
}));

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
