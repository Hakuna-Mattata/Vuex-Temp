/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'top-background': "url('./1.png')",
      },
      fontSize: {
        th: ['68px', '81.6px'],
      },
    },
  },
  plugins: [],
}
