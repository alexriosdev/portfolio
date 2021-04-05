const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-right': 'fade-in-right 1s ease-in-out',
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'fade-in-down': 'fade-in-down 1s ease-in-out',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      green: colors.green,
      blue: colors.lightBlue,
      pink: colors.pink,
      cyan: colors.cyan,
      emerald: colors.emerald,
      orange: colors.orange,
      yellow: colors.amber,
      purple: colors.purple,
      black: colors.black,
      white: colors.white,
    },
    fontFamily: {
      mono: ['Ubuntu Mono'],
      title: ['Poppins'],
      body: ['Source Sans Pro'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
