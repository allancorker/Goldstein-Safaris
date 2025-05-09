/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_yellow: '#EA962E',
        primary_gray: '#1c1c1c',
        secondary_gray: '#F6F6FA',
        secondary_white: '#f5f5f5',
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        smooch: ['"Smooch Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
