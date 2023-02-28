/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'ping-short': 'ping 1.5s ease-in-out 1',
      },
    },
  },
}
