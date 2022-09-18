// components
import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BiMoon, BiSun } from 'react-icons/bi';

// custom hooks
import useLocalStorage from '../../../hooks/useLocalStorage';
import usesDarkMode from '../../../hooks/usesDarkMode';

const iconSettings = {
  size: '24px'
};

const ThemeSwitcher = () => {
  // store theme settings in web storage
  const [darkModeStatus, storeDarkMode] = useLocalStorage('use-dark-mode-portfolio', usesDarkMode());

  useEffect(() => {
    if (darkModeStatus) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // click handler
  const clickHandler = () => {
    // write changes to local storage
    storeDarkMode(!darkModeStatus);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      data-testid='theme-toggler'
      onClick={clickHandler}
      onKeyDown={event => {
        if (event.code === 'Enter') {
          clickHandler();
        }
      }}
      tabIndex={0}
      role='button'
      className='flex flex-col rounded-full dark:text-primary-color-dark text-text-color justify-center items-center'
    >
      <IconContext.Provider value={iconSettings}>{darkModeStatus ? <BiMoon /> : <BiSun />}</IconContext.Provider>
    </div>
  );
};

export default ThemeSwitcher;
