/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Chonburi', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  // extend: {},
  // daisyui: {
  //   themes: ['light'],
  // },
}
