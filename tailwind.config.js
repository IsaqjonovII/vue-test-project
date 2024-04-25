/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseBg: "#F0F3F7",
        black: "#16191D",
        stroke: "#EAEDF0"
      }
    },
  },
  plugins: [],
}