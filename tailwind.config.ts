import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      green: colors.green,
      // body color
      white: "#fff",
      // container color
      seasalt: {
        DEFAULT: "#F9FAFB",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#F9FAFB",
        600: "#D7DEE5",
        700: "#B6C2CE",
        800: "#94A6B8",
        900: "#728AA1",
        950: "#637C95",
      },
      // text-color
      black: "#000",
      // text-color-alt
      charcoal: colors.gray[600],
      "ebony-clay": "#212C40",
      // primary color
      gray: colors.gray,
      // primary color
      zomp: {
        DEFAULT: "#39A78E",
        50: "#B3E5DA",
        100: "#A3E0D2",
        200: "#85D5C3",
        300: "#67CBB4",
        400: "#48C1A5",
        500: "#39A78E",
        600: "#2B7D6A",
        700: "#1C5347",
        800: "#0E2A23",
        900: "#000000",
        950: "#000000",
      },
    },
    extend: {
      animation: {
        wiggle: "wiggle 4s cubic-bezier(0.180, 0.440, 0.220, 1) infinite",
      },

      keyframes: {
        wiggle: {
          "0%": { transform: "scale(1,1)" },
          "10%": { transform: "scale(1.1,.9)" },
          "30%": { transform: "scale(.9,1.1)" },
          "50%": { transform: "scale(1.05,.95)" },
          "57%": { transform: "scale(1,1)" },
          "64% ": { transform: "scale(1,1)" },
          "100%": { transform: "scale(1,1)" },
        },
      },
      spacing: {
        header: "5rem",
        footer: "3.5rem",
      },
      height: {
        header: "3.5rem",
        footer: "3.5rem",
      },
      transitionProperty: {
        horizontal: "left, right",
      },
      transitionDuration: {
        2000: "2000ms",
        3500: "3500ms",
      },
      translate: {
        "17/20": "85%",
      },
      backgroundImage: ({ theme }) => ({
        primary: `linear-gradient(60deg, ${theme("colors.zomp")}, #2d8571)`,
      }),
    },
  },
  plugins: [typography, forms],
};
export default config;
