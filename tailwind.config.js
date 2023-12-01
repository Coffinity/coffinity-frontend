/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footerTexture: "url('/assets/footerBackground.png')",
        videoBg: "url('/assets/videocoffee.mp4)",
        allPageBg: 'url("/assets/BGpage.jpg")',
      },
      fontFamily: {
        kanit: ['Chonburi', 'serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
}
