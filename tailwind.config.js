const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.jsx',
    './pages/**/*.jsx'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.blue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      blueg: colors.blueGray,
      white: colors.white,
      discord: {
        DEFAULT: '#7289da'
      }
    }
  },
}
