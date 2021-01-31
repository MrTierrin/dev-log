const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.jsx',
    './pages/**/*.jsx'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': { max: '475px' },
      '2xs': { max: '640px' },
      ...defaultTheme.screens,
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.blue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      blueg: colors.blueGray,
      white: colors.white,
      discord: {
        50: '#aab8e8',
        100: '#9cace5',
        200: '#8ea0e1',
        300: '#8094dd',
        DEFAULT: '#7289da',
        500: '#667bc4',
        600: '#5b6dae',
        700: '#4f5f98',
        800: '#2d3657',
        900: '#222941',
      }
    }
  },
  variants: {
    extend: {
      scale: ['active'],
      backgroundColor: ['active']
    }
  }
}
