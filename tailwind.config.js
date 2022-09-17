const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class'],
  theme: {
    screens: {
      mobile: '360px',
      landscape: '576px',
      tablet: '768px',
      laptop: '968px',
      'laptop-hdpi': '1920px',
      'nav-switch': {
        max: '968px' 
      }
    },
    extend: {
      height: {
        'header-height': '3.5rem'
      },
      spacing: {
        'header-spacing': '4.5rem'
      },
      transitionProperty: {
        right: 'right',
      },
      fontSize: {
        // font size for small and medium screens
        'biggest-font-size': '1.75rem',
        'h1-font-size': '1.5rem',
        'h2-font-size': '1.25rem',
        'h3-font-size': '1rem',
        'normal-font-size': '0.938rem',
        'small-font-size': '0.813rem',
        'smaller-font-size': '0.75rem',
        'tiny-font-size': '0.625rem',
        // font size for large screens
        'biggest-font-size-lg': '2.5rem',
        'h1-font-size-lg': '2.25rem',
        'h2-font-size-lg': '1.5rem',
        'h3-font-size-lg': '1.25rem',
        'normal-font-size-lg': '1rem',
        'small-font-size-lg': '0.875rem',
        'smaller-font-size-lg': '0.813rem'
      },
      fontFamily: {
        serif: ['Poppins', 'sans-serif']
      },
      zIndex: {
        tooltip: '10',
        fixed: '1000',
        modal: '10000'
      },
      transitionDuration: {
        themeSwitch: '0.4s'
      },
      colors: {
        // light theme
        'primary-color': '#D33F49',
        'primary-color-alt': '#6D9DC5',
        'text-color': '#0A0A0A',
        'text-color-alt': colors.gray[500],
        'body-color': '#fff',
        'border-color': colors.gray[300],
        'container-color': '#f5f5f5',
        'container-color-alt': colors.gray[100],
        // dark theme
        'primary-color-dark': '#FF686B',
        'primary-color-dark-alt': '#FF934F',
        'text-color-dark': '#fff',
        'text-color-dark-alt': colors.gray[400],
        'body-color-dark': '#0d1b2a',
        'border-color-dark': colors.gray[700],
        'container-color-dark': '#1b263b',
        'container-color-dark-alt': '#201b3b'
      }
    }
  },
  plugins: []
};
