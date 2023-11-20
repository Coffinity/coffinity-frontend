/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footerTexture: "url('src/assets/footerBackground.png')",
      },
    },
  },
  plugins: [require('daisyui')],
}
