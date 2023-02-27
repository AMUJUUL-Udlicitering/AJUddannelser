/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'stiletto': {
          '50': '#FFE0E0',
          '100': '#FFC2C2',
          '200': '#FF8585',
          '300': '#FF4747',
          '400': '#F31616',
          '500': '#CC0000',
          '600': '#AD0000',
          '700': '#8F0000',
          '800': '#700000',
          '900': '#520000'
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
