import { useRef, useState, useEffect } from 'react';

// i18n internationalization plugin
import i18n from '../../../plugins/i18next/i18n';
// assets
import germany from '../../../assets/images/languages/germany.png';
import uk from '../../../assets/images/languages/uk.png';

const LanguageDropdown = () => {
  // the actual language
  const [currLang, setCurrLang] = useState(i18n.language);

  // reference to the current div elements
  const german = useRef<HTMLDivElement>(null);
  const english = useRef<HTMLDivElement>(null);
  const languages = [german, english];

  // click handler
  const languageClick = (language: HTMLDivElement | null) => {
    languages.forEach(lang => lang.current?.classList.remove('active-language'));
    language?.classList.add('active-language');

    const langID = language?.id;
    if (langID !== undefined && currLang !== langID) {
      setCurrLang(langID);
      i18n.changeLanguage(langID);
    }
  };

  // set initial language
  useEffect(() => {
    if (currLang === 'de') {
      languageClick(german.current);
    } else {
      languageClick(english.current);
    }
  }, []);

  return (
    <div className='flex items-center gap-4'>
      <div
        data-testid='german-language'
        ref={german}
        tabIndex={0}
        id='de'
        role='button'
        className='language'
        onKeyDown={event => {
          if (event.code === 'Enter') {
            languageClick(german.current);
          }
        }}
        onClick={() => {
          languageClick(german.current);
        }}
      >
        <img src={germany} className='w-8 h-4 rounded-full' alt='German' />
      </div>
      <div
        data-testid='english-language'
        ref={english}
        tabIndex={0}
        role='button'
        id='en'
        className='language'
        onKeyDown={event => {
          if (event.code === 'Enter') {
            languageClick(english.current);
          }
        }}
        onClick={() => {
          languageClick(english.current);
        }}
      >
        <img src={uk} className='w-8 h-4 rounded-full' alt='English' />
      </div>
    </div>
  );
};

export default LanguageDropdown;
