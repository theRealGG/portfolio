import { fireEvent, render } from '@testing-library/react';
import i18n from '../../../plugins/i18next/i18n';
import LanguageDropdown from './LanguageDropdown';

describe('Test LanguageSwitcher component', () => {
  it('renders', () => {
    const { baseElement } = render(<LanguageDropdown />);
    expect(baseElement).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const { baseElement } = render(<LanguageDropdown />);
    expect(baseElement).toMatchSnapshot();
  });
  describe('handles language switch correctly', () => {
    let selectedLang = 'de';
    const i18nMock = jest.spyOn(i18n, 'changeLanguage');
    beforeEach(() => {
      i18nMock.mockClear();
      i18nMock.mockImplementation((lng?: string) => {
        if (lng !== undefined) {
          selectedLang = lng;
        }
        return new Promise(() => {});
      });
    });
    it('german language is setted correctly', () => {
      const { getByTestId } = render(<LanguageDropdown />);
      const germanButton = getByTestId('german-language');
      fireEvent.click(germanButton);
      expect(i18nMock).toHaveBeenCalledWith('de');
      expect(selectedLang).toBe('de');
    });
    it('english language is setted correctly', () => {
      const { getByTestId } = render(<LanguageDropdown />);
      const englishButton = getByTestId('english-language');
      fireEvent.click(englishButton);
      expect(i18nMock).toHaveBeenCalledWith('en');
      expect(selectedLang).toBe('en');
    });
  });
});
