/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-base': "#F0F3F7",
        'black-500': "#16191D",
        'border-500': "#EAEDF0"
      }
    },
  },
  plugins: [],
}