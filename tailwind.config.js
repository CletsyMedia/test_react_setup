/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: "'Poppins', sans-serif",
      },
      screens: {
        'xsm-max': { 'max': '469px' },
        'sm-max': { 'max': '770px' },
        'md-max': { 'max': '1023px' },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    // require("daisyui")
  ],
}

