/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9153F4',
        highlights: '#e1e4e7',
        lightBlack: '#1B0044',
        textGray: '#87879e',
      },
    },
  },
  plugins: [],
}
