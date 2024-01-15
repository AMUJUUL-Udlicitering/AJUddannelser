/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'stiletto': {
          '50': '#FCE9EA',
          '100': '#F7CFD0',
          '200': '#F09EA1',
          '300': '#E97276',
          '400': '#E14247',
          '500': '#CB2027',
          '600': '#A31A1E',
          '700': '#7B1317',
          '800': '#4F0C0F',
          '900': '#280607',
          '950': '#160304'
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
