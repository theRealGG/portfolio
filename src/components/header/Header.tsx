import { BiHome, BiUserCircle, BiBriefcase, BiMessage } from 'react-icons/bi';
import { AiOutlineQuestion } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../layout/container/Container';
import Navbar from '../navbar/Navbar';
import NavItem from '../navbar/menu/NavItem';
import useScrollHandler from '../../hooks/useScrollHandler';

import {
  selectHome,
  selectAbout,
  selectService,
  selectFAQ,
  selectContact
} from '../../plugins/redux/features/sectionSlice';
import useAppSelector from '../../hooks/useAppSelector';
import LanguageDropdown from '../settings/language_switcher/LanguageDropdown';
import ThemeSwitcher from '../settings/theme_switcher/ThemeSwitcher';

const Header = () => {
  type PageSections = 'home' | 'about' | 'service' | 'faq' | 'contact';
  type Section = ReturnType<typeof selectHome>;

  const { t } = useTranslation('common', { keyPrefix: 'navigation' });

  // reference to the header
  const headerRef = useRef<HTMLDivElement>(null);

  // map containing the section informations
  const sectionMap = new Map<PageSections, Section>([
    ['home', useAppSelector(selectHome)],
    ['about', useAppSelector(selectAbout)],
    ['service', useAppSelector(selectService)],
    ['faq', useAppSelector(selectFAQ)],
    ['contact', useAppSelector(selectContact)]
  ]);

  // current active section
  const [activeSection, setActiveSection] = useState<PageSections>('home');

  // get map values 'safely'
  const getMappedValueSafely = (section: PageSections, field: keyof Section) => {
    const entry = sectionMap.get(section);
    if (entry === undefined) {
      throw new Error(`Unkown section ${section}`);
    }
    return entry[field];
  };

  useScrollHandler(() => {
    const { scrollY } = window;
    // original insertion order is is preserved so this works
    const foundSection = Array.from(sectionMap.entries())
      .reverse()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .find(([_, section]) => {
        const { id } = section;
        const secElement = document.getElementById(id);
        if (secElement === null) {
          return false;
        }
        if (scrollY >= secElement.offsetTop - secElement.clientHeight / 3) {
          return true;
        }
        return false;
      });
    if (foundSection === undefined) {
      // Scroll position is before main section
      setActiveSection('home');
    } else {
      setActiveSection(foundSection[0]);
    }
  });

  useScrollHandler(() => {
    const { scrollY } = window;
    if (scrollY >= 50) {
      headerRef.current?.classList.add('shadow-lg');
    } else {
      headerRef.current?.classList.remove('shadow-lg');
    }
  });

  return (
    <header
      ref={headerRef}
      className='w-full z-fixed bg-body-color dark:bg-body-color-dark fixed top-0 left-0 transition-colors duration-300'
    >
      <Container className='h-header-height flex justify-between items-center px-8'>
        <a className='flex flex-col' href='#home'>
          <span className='block text-text-color-alt dark:text-text-color-dark-alt'>dev by</span>
          <span className='block font-semibold primary-color'>Hisham</span>
        </a>
        <Navbar>
          <Navbar.Menu>
            <NavItem
              name={t('home')}
              active={activeSection === 'home'}
              id={getMappedValueSafely('home', 'navId')}
              href={getMappedValueSafely('home', 'id')}
              icon={<BiHome />}
            />
            <NavItem
              name={t('about')}
              active={activeSection === 'about'}
              id={getMappedValueSafely('about', 'navId')}
              href={getMappedValueSafely('about', 'id')}
              icon={<BiUserCircle />}
            />
            <NavItem
              name={t('service')}
              active={activeSection === 'service'}
              id={getMappedValueSafely('service', 'navId')}
              href={getMappedValueSafely('service', 'id')}
              icon={<BiBriefcase />}
            />
            <NavItem
              name={t('faq')}
              active={activeSection === 'faq'}
              id={getMappedValueSafely('faq', 'navId')}
              href={getMappedValueSafely('faq', 'id')}
              icon={<AiOutlineQuestion />}
            />
            <NavItem
              name={t('contact')}
              active={activeSection === 'contact'}
              id={getMappedValueSafely('contact', 'navId')}
              href={getMappedValueSafely('contact', 'id')}
              icon={<BiMessage />}
            />
          </Navbar.Menu>
          <Navbar.Settings>
            <LanguageDropdown />
            <ThemeSwitcher />
          </Navbar.Settings>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
