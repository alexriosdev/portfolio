const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      cyan: colors.cyan,
      emerald: colors.emerald,
      black: colors.black,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
