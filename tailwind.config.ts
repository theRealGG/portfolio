import forms from '@tailwindcss/forms';
import typograhy from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '968px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      // light: body color
      white: '#fff',
      // light: container color
      seasalt: '#F9FAFB',
      // light: title color
      'raisin-black': '#21252C',
      // light: text-color
      'davys-gray': '#525760',

      // light: text-color-alt
      charcoal: colors.gray[600],
      // primary color
      zomp: '#39A78E',
      // dark: primary color
      'tropical-indigo': '#A395E9',
      // dark: primary color alt
      'tropcial-indigo-alt': '#9584E6',
      // dark: title color
      'anti-flash-white': '#F0F2F4',
      // dark:  text-color
      'french-gray': '#BABEC4',
      // dark: text-color-alt
      // dark: body color
      'rich-black': '#0B111E',
      // dark: container-color
      'rich-black-alt': '#151C28',
    },
    fontSize: {
      // extra notes
      '4xs': '.625rem',
      // notes
      '3xs': '.75rem',
      '2xs': '.813rem',
      // normal
      xs: '.875rem',
      // h3
      sm: '.938rem',
      // h1
      md: '1rem',
      // h2
      lg: '1.25rem',
      // h1
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
    },
    // on small screen:
    // title: 1.75rem; h1: 1.5rem; h2: 1.25rem; h1: 1rem; h3: .939rem; normal: .813; notes: .75 rem; extra-notes: .625rem;
    // on biggest screen
    // title: 2.5rem; h1: 2.25rem; h2: 1.5; h3: 1.25rem; normal: 1, notes: 0.875rem; smaller: 0.813rem
    extend: {
      height: {
        header: '3.5rem',
      },
    },
  },
  plugins: [forms, typograhy],
} satisfies Config;
