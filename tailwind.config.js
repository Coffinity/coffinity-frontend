/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footerTexture: "url('footerBackground.png')",
        header: 'url("Header.jpg")',
        allPageBg: 'url("BGpage.jpg")',
      },
      fontFamily: {
        kanit: ['Chonburi', 'serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
}
