/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderWithProviders } from '../../utility/testHelper';
import Header from './Header';

jest.mock('react-i18next', () => ({
  __esModule: true,
  useTranslation: () => {
    return {
      t: (str: string) => str,
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

describe('Test Header component', () => {
  it('renders', () => {
    const { baseElement } = renderWithProviders(<Header />);
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = renderWithProviders(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
});
